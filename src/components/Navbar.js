import React, { useState, useEffect } from 'react';
import { AppBar, List, ListItem, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItemIcon, LinearProgress } from '@material-ui/core';
import logoUDC from "../images/UDC_logo_largo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const links = [
    {
      id: "about",
      text: "Sobre mi",
      icon: <InfoTwoToneIcon fontSize="large" />
    },
    {
      id: "conocimientos",
      text: "Conocimientos",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light} />
    },
    {
      id: "contact",
      text: "Contacta conmigo",
      icon: <ContactMailTwoToneIcon fontSize="large" />
    },
  ];

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          className={classes.progressBar}
        />
        <Toolbar className={classes.toolbar}>
          <img
            src={logoUDC}
            className={classes.logoUDC}
            alt="LogoUDC"
            onClick={() => scroll.scrollToTop()}
          />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-75}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton 
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)} className={classes.cancelIcon}>
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            key={index}
            className={classes.sidebar}
            to={id}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-75}
          >
            <ListItem component="h5">
              <ListItemIcon>{icon}</ListItemIcon>{text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    boxShadow: "none",
  },
  toolbar: {
    minHeight: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 12px",
  },
  logoUDC: {
    height: "5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer"
    }
  },
  light: {
    color: "#ffcc00", 
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    flexGrow: 1,
    "& a": {
      color: "#333",
      fontWeight: "bold",
      textDecoration: "none",
      margin: theme.spacing(0, 2),
      transition: "color 0.3s, border-bottom 0.3s",
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#0077b6",  
      borderBottom: "3px solid #0077b6",  
    },
  },
  cancelIcon: {
    color: "#0077b6", 
    position: "absolute",
    top: 0,
    right: 10,
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw"
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#0077b6",  
      cursor: "pointer",
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#0077b6",  
      position: "absolute",
      right: 10,
    }
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    backgroundColor: "#f0f0f0",  
    zIndex: 9999,
    transition: "width 0.5s ease-out", 
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#0077b6",  
    }
  },
}));

export default Navbar;
