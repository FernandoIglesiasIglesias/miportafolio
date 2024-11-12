import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import githubLogo from "../images/GitHub-logo.png";
import emailLogo from "../images/email_logo.png";
import linkedinLogo from "../images/linkedin_logo.png";

export const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`} id={id}>
      <div className={classes.sectioncontent}>
        {/* Título */}
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>

        {/* Contenedor de contactos */}
        <div className={classes.contactContainer}>
          {/* Tarjeta Email */}
          <Card className={classes.contactCard}>
            <CardContent className={classes.cardContent}>
              <img src={emailLogo} alt="Email" className={classes.icon} />
              <Typography variant="body1">
                <a href="mailto:fernando.iglesias2@hotmail.com" className={classes.link}>
                  fernando.iglesias2@hotmail.com
                </a>
              </Typography>
            </CardContent>
          </Card>

          {/* Tarjeta LinkedIn */}
          <Card className={classes.contactCard}>
            <CardContent className={classes.cardContent}>
              <img src={linkedinLogo} alt="LinkedIn" className={classes.icon} />
              <Typography
                variant="h6"
                className={classes.link}
                component="a"
                href="https://www.linkedin.com/in/fernando-iglesias-iglesias2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Typography>
            </CardContent>
          </Card>

          {/* Tarjeta GitHub */}
          <Card className={classes.contactCard}>
            <CardContent className={classes.cardContent}>
              <img src={githubLogo} alt="GitHub" className={classes.icon} />
              <Typography
                variant="h6"
                className={classes.link}
                component="a"
                href="https://github.com/FernandoIglesiasIglesias"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Estilos personalizados
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  sectiondark: {
    background: "#2b2b2b",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "70vw",
    margin: "0 auto",
    textAlign: "center",
    paddingTop: theme.spacing(10),
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "bold",
    fontSize: "3rem",
    textAlign: "center",
    animation: "$fadeIn 2s ease-in-out",
    textShadow: "4px 4px 12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(173, 216, 230, 0.8)",
    background: "linear-gradient(90deg, rgba(173, 216, 230, 1) 0%, rgba(100, 149, 237, 1) 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    padding: "20px 0",
    letterSpacing: "5px",
  },
  contactContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(4),
    flexWrap: "wrap",
    marginTop: theme.spacing(5),
  },
  contactCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    minWidth: "280px",
    minHeight: "200px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "#0077b6",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s, text-shadow 0.3s",
    "&:hover": {
      color: "#00b4d8",
      textShadow: "0px 0px 10px rgba(0, 180, 216, 0.7)",
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default Contact;
