import React from 'react';
import cLogo from "../images/c_leng.png";
import javaLogo from "../images/java_leng.png";
import oracleLogo from "../images/oracle_logo.png";
import mysqlLogo from "../images/mysql.png";
import springLogo from "../images/spring_boot.png";
import jsLogo from "../images/js_leng.png";
import htmlLogo from "../images/html_logo.png";
import cssLogo from "../images/css_logo.png";
import reactLogo from "../images/react.png";
import pythonLogo from "../images/python.png";
import csharpLogo from "../images/csharp.png";
import { 
    Timeline, 
    TimelineConnector, 
    TimelineContent, 
    TimelineItem, 
    TimelineOppositeContent, 
    TimelineSeparator 
} from '@material-ui/lab';
import { makeStyles, Paper, Typography, Fade } from '@material-ui/core';
import StarRating from './StarRating';

const Technologies = () => {
    const classes = useStyles();

    const skills = [
        { year: "2021", src: cLogo, title: "Lenguaje C", stars: 4 },
        { year: "2022", src: javaLogo, title: "Java", stars: 5 },
        { year: "2022", src: oracleLogo, title: "Oracle Database", stars: 4 },
        { year: "2022", src: mysqlLogo, title: "MySQL", stars: 5 },
        { year: "2023", src: springLogo, title: "Spring Boot", stars: 5 },
        { year: "2023", src: jsLogo, title: "JavaScript", stars: 4 },
        { year: "2023", src: htmlLogo, title: "HTML 5", stars: 4 },
        { year: "2023", src: cssLogo, title: "CSS 3", stars: 4 },
        { year: "2023", src: reactLogo, title: "React", stars: 4 },
        { year: "2023", src: pythonLogo, title: "Python", stars: 4 },
        { year: "2024", src: csharpLogo, title: "C#", stars: 3 },
    ];

    return (
        <div className={classes.container}>
            <Timeline align="left">
                {skills.map(({ year, src, title, stars }, index) => {
                    const isLastItem = index === skills.length - 1;

                    return (
                        <Fade in timeout={800} key={index}>
                            <TimelineItem className={classes.timelineItem}>
                                <TimelineOppositeContent>
                                    <Typography variant="h6" className={classes.year}>
                                        {year}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <img src={src} alt={title} className={classes.customLogo} />
                                    {!isLastItem && (
                                        <TimelineConnector className={classes.connector} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent className={classes.timelineContent}>
                                    <Paper elevation={8} className={classes.paper}>
                                        <Typography variant="h6" className={classes.title}>
                                            {title}
                                        </Typography>
                                        <StarRating stars={stars} />
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Fade>
                    );
                })}
            </Timeline>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(2),
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
      },
    },
    timelineItem: {
      '&:hover': {
        transform: 'translateY(-8px)',
        transition: 'transform 0.3s ease-in-out',
      },
    },
    timelineContent: {
      marginBottom: theme.spacing(6),
      '&:hover $paper': {
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s ease-in-out',
      },
    },
    customLogo: {
      width: "50px",
      height: "50px", 
      borderRadius: "50%",
      border: "3px solid #3498db",
      backgroundColor: "#fff",
      padding: theme.spacing(1),
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      transition: 'all 0.3s ease',
      '&:hover': {
        filter: 'brightness(1.2)',
      },
      [theme.breakpoints.down("sm")]: {
        width: "40px", 
        height: "40px", 
      },
    },
    connector: {
      background: "linear-gradient(to bottom, #FFD700, #FF8C00)",
      height: "60px",
      borderRadius: "5px",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: "#f0f0f0",
      borderRadius: "15px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
      transition: "all 0.3s ease",
      '&:hover': {
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
    },
    year: {
      color: "#FF6347",
      fontWeight: "bold",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.2rem", 
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem", 
      },
    },
    title: {
      color: "#2c3e50",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "600",
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem", 
    },
    },
}));
  

export default Technologies;
