import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  decades: {
    marginTop: 40,
  },
 
  offset: theme.mixins.toolbar,
}));

const DropDownMenu = ( { history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const decadeOptions = [
    { label: "Pre 80s",  path: "/movies/moviesByDecade/1920/1979/pre80s" },
    { label: "80s",  path: "/movies/moviesByDecade/1980/1989/80s" },
    { label: "90s",  path: "/movies/moviesByDecade/1990/1999/90s" },
    { label: "00s",  path: "/movies/moviesByDecade/2000/2009/00s" },
    { label: "10s",  path: "/movies/moviesByDecade/2010/2019/10s" },
    { label: "20s",  path: "/movies/moviesByDecade/2020/2029/20s" },
  ];

  const handleMenuSelect = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
   
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button aria-controls="simple-menu"  variant="contained" aria-haspopup="true" color="primary" onClick={handleMenu}>
            Movies By Decade
              </Button>
              <Menu
              className={classes.decades}
                id="simple-menu"
                anchorEl1={anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: "left",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                //TransitionComponent={Fade}
                color="inherit"
              >
                 {decadeOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
              </Menu>
    </>
  );
};

export default withRouter(DropDownMenu);