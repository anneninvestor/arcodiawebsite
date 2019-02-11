/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/aboutUs">
          About Us
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/cloud" className={classes.dropdownLink}>
              Cloud
            </Link>,
            // <Link to="/blog" className={classes.dropdownLink}>
            //   Blog
            // </Link>,
            <Link to="/nodes" className={classes.dropdownLink}>
              Node
            </Link>,
            <Link to="/dreams" className={classes.dropdownLink}>
              Dreams
            </Link>
          ]}
        />
      </ListItem>
      <Link className={classes.navLink} to="/ourJourney">
        Our Journey
      </Link>
      <Link className={classes.navLink} to="/contact">
        Contact
      </Link>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
