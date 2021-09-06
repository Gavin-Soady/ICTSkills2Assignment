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
import { Popover } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  stars: {
    marginTop: -320,
  },
  decades: {
    marginTop: -320,
    marginLeft: 350,

  },
  root: {
    backgroundColor: "rgb(10, 126, 140)",
  },
  
  offset: theme.mixins.toolbar,
}));

const SiteHeader = ( { history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open = Boolean(anchorEl);
  const openStar = Boolean(anchorEl1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuOptions = [
    { label: "Home", path: "/" },
    //{ label: "Favorites", path: "/movies/favorites" },
    //{ label: "Upcoming", path: "/movies/upcoming" },
  ];

  const decadeOptions = [
    { label: "Pre 80s",  path: "/movies/moviesByDecade/1920/1979/pre80s" },
    { label: "80s",  path: "/movies/moviesByDecade/1980/1989/80s" },
    { label: "90s",  path: "/movies/moviesByDecade/1990/1999/90s" },
    { label: "00s",  path: "/movies/moviesByDecade/2000/2009/00s" },
    { label: "10s",  path: "/movies/moviesByDecade/2010/2019/10s" },
    { label: "20s",  path: "/movies/moviesByDecade/2020/2029/20s" },
  ];

  const starOptions = [
    { label: "Tom Cruise",  path: "/movies/moviesByStars/500/Tom Cruise" },
    { label: "Brad Pitt",  path: "/movies/moviesByStars/287/Brad Pitt" },
    { label: "Scarlett Johansson",  path: "/movies/moviesByStars/1245/Scarlett Johansson" },
    { label: "Angelina Jolie",  path: "/movies/moviesByStars/11701/Angelina Jolie" },
    { label: "Leonardo Dicaprio",  path: "/movies/moviesByStars/6193/Leonardo Dicaprio" },
    { label: "Anne Hathaway",  path: "/movies/moviesByStars/1813/Anne Hathaway" },
  ];

  const handleMenuSelect = (pageURL) => {
    history.push(pageURL);
    setAnchorEl2(null);
    setAnchorEl1(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };


  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Movie Database
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
            <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleMenu2}>
            Movies By Decade
              </Button>
              <Menu
              className={classes.decades}
                id="simple-menu"
                anchorEl2={anchorEl2}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: "center",
                }}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => setAnchorEl2(null)}
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
              <Button aria-controls="stars-menu" aria-haspopup="true" color="inherit" onClick={handleMenu1}>
            Movies By Stars
              </Button>
              <Menu
              className={classes.stars}
                id="stars-menu"
                anchorEl1={anchorEl1}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={() => setAnchorEl1(null)}
                //TransitionComponent={Fade}
                color="inherit"

              >
                 {starOptions.map((opt) => (
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