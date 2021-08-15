import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

const SiteHeader = ( { history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
  ];

  const decadeOptions = [
    { label: "Pre 80s",  path: "/movies/moviesByDecade/1920/1979" },
    { label: "80s",  path: "/movies/moviesByDecade/1980/1989" },
    { label: "90s",  path: "/movies/moviesByDecade/1990/1999" },
    { label: "00s",  path: "/movies/moviesByDecade/2000/2009" },
    { label: "10s",  path: "/movies/moviesByDecade/2010/2019" },
    { label: "20s",  path: "/movies/moviesByDecade/2020/2029" },
  ];


  const handleMenuSelect = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            GMDB
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Movies at your finger tips
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                  
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
            <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleMenu}>
            Movies By Decade
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
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
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default withRouter(SiteHeader);