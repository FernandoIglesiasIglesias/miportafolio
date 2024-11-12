import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Technologies from './Technologies';

export const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={ id}>
        <Typography className={classes.title} variant="h3">{title}</Typography>    
        <Technologies/>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff"
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "bold",
    fontSize: "3rem",
    textAlign: "center",
    letterSpacing: "3px",
    background: "linear-gradient(90deg, #0077b6 0%, #00b4d8 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
    padding: "10px 0",
    animation: "$fadeIn 1.5s ease-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}))

export default Skills