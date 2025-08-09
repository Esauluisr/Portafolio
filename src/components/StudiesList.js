import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: "100%",
    width: "100%",
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    UABJO: {
      jobTitle: " Lic of Computing @",
      duration: "Agosto 2019 - Agosto 2023",
      desc: [
        "I studied Computer Science at Universidad Autónoma Benito Juárez de Oaxaca",
        "Specialization in software development and web technologies",
        "Academic projects in artificial intelligence and web development",
        "Tecnologías usadas: Python, Bootstrap, MySQL, JavaScript, HTML, CSS, React, Php",
      ],
    },
    PLAZI: {
      jobTitle: " Software Development Engineer @",
      duration: "Agosto 2019",
      desc: [
        "I studied web development and application courses",
        "Specialized courses in databases and data management",
        "Training in artificial intelligence and machine learning",
        "Tecnologías aprendidas: Python, JavaScript, HTML, CSS, React, MongoDB, Mysql",
      ],
    },

    ATTHEMOMENT: {
      jobTitle: "Data scientist @",
      duration: "Agosto 2019",
      desc: [
        "Currently studying data science and machine learning",
        "Working with TensorFlow for AI model development",
        "Creating interactive dashboards for data presentation in Power BI",
        "Tecnologías: Python, TensorFlow, Keras, scikit-learn, pandas, numpy, matplotlib, Power BI",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
