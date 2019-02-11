/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="" className={classes.block} target="_blank">
                <img src={logo} alt="logo" style={{ height: "30px" }} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/about" className={classes.block} target="_blank">
                About
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contact" className={classes.block} target="_blank">
                Contact
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <ListItem className={classes.inlineBlock} style={{ padding: "10px" }}>
            <Link to="/contact">Start A Project</Link>
            <br />
            <h8>We are ready for the challange</h8>
          </ListItem>
          <ListItem className={classes.inlineBlock} style={{ padding: "10px" }}>
            <Link to="/jobs">Jobs</Link>
            <br />
            <h8>We are always looking for talent </h8>
          </ListItem>
          <ListItem style={{ padding: "10px" }} className={classes.inlineBlock}>
            <h8>
              Say Hello! <br />
              2393 w adams St. Chicago
              <br />
            </h8>
          </ListItem>

          <ListItem className={classes.inlineBlock}>
            {/* <Link to="/blog" className={classes.block} target="_blank">
                Blog
              </Link> */}
          </ListItem>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
