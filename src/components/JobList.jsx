import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    'Compass North': {
      jobTitle: "Software Engineer @",
      duration: "FEB 2022 -  Present",
      desc: [
        	"Working on the development of a startup mobile and web application for a flight tracking system using React Native and NESTJs.", 
	        "Reviewing code and conducting testing for features on the front-end and back-end side of the application.",
	        "Building extensive test coverage for all new features to improve security and loading times."

      ]
    },
    NDMC: {
      jobTitle: "Computer Programmer @",
      duration: "SEPT 2021 - Present",
      desc: [
        "Responsible for writing maintainable and extensible code in a team environment for various client sponsored projects.",
    	  "Utilize programming languages such as C++, Java, React, Python, and HTML5, including supporting infrastructures like AWS and Terraform.",
    	  "Present results and findings to internal business stakeholders, identifying ongoing improvements in data quality, design reports, and supporting coding efforts.",
    	  "Worked alongside another developer to implement RESTful APIs in Java and Django, increasing internal analytics reporting speed by 20%."
      ]
    },
    'Frontier Coop': {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2021 - AUG 2021",
      desc: [
        	"Engineered modern applications with C++, Java, JavaScript, Python, and HTML5/CSS.",
        	"Utilized TypeScript, React, GoLang, GraphQL, and a plethora of AWS services.",
        	"Co-led the company’s move from AWS to Google Cloud Platform, which resulted in an annual savings of $250,000.",
        	"Participated in a team of 4 software developers in designing improved software using algorithms to match users to products, improving retention and user experience by 5%."
      ]
    },
    'University Of Nebraska': {
      jobTitle: "IT Assistant @",
      duration: "AUG 2020 - SEP 2021",
      desc: [
        "Provided IT support services, troubleshooting and system operation, resolving up to 10 client issues daily.",
        "Maintained, repaired, and installed computing and network devices used in any part of the station’s facilities, including laptops, office computers, servers, and printers.",
        "Trained and mentored over 5 new IT Student employees on software, hardware, and system usage."
      ]
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