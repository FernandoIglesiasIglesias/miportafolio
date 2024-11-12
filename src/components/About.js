import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import fer from "../images/foto_cv.jpeg";
import TypeWriterEffect from "react-typewriter-effect";

export const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3" className={classes.title}>{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={fer} className={classes.media} title="picture" />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Hola, me llamo Fernando Iglesias Iglesias"
              textStyle={{ fontSize: "2rem", fontWeight: "700", color: "#0077b6", marginBottom: "10px" }}
              startDelay={1700}
              cursorColor="transparent"  
              typeSpeed={35}
              cursor={false} 
            />
            <TypeWriterEffect
              text="Soy Full Stack developer"
              textStyle={{ fontSize: "1.2rem", fontWeight: "500" }}
              startDelay={4000}
              cursorColor="transparent"  
              typeSpeed={35}
              cursor={false}  
            />
            <Typography variant="h6" color="textSecondary">
              Estudio Ingeniería Informática en la Universidad de A Coruña, me encuentro en cuarto año, 
              en la rama de Ingeniería del Software. Tengo grandes capacidades
              como desarrollador, además de muchas ganas y entusiasmo para seguir creciendo en el sector.
            </Typography>
          </CardContent>
          <CardActions>
            <a 
              href={`${process.env.PUBLIC_URL}/cv.pdf`} 
              download="CV_Fernando_Iglesias.pdf" 
              className={classes.cvbutton}
            >
              Descargar CV
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "bold",
    fontSize: "3rem",
    textAlign: "center",
    animation: "$fadeIn 2s ease-in-out", 
    textShadow: "4px 4px 12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(173, 216, 230, 0.8)", 
    letterSpacing: "2px",
    background: "linear-gradient(90deg, rgba(0, 119, 182, 1) 0%, rgba(0, 180, 216, 1) 100%)", 
    WebkitBackgroundClip: "text",
    color: "transparent",
    padding: "20px 0",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-30px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
    },
  },
  cardcontent: {
    marginTop: theme.spacing(3),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(4),
    flexShrink: 0,
  },
  cvbutton: {
    position: "absolute",
    bottom: "2rem",
    right: "2rem",
    [theme.breakpoints.down("sm")]: {
      bottom: "2.5rem",
      right: "1rem",
    },
    textDecoration: "none",
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: theme.spacing(2, 4),
    fontWeight: "bold",
    borderRadius: "25px",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #0077b6 0%, #00b4d8 100%)",
      transform: "scale(1.1)", 
    },
  },
}));

export default About;
