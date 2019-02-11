import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ToolsGrid from "./ToolsGrid";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="flex-start">
          <GridItem cs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Take a peak in our atlas building toolbox
            </h4>
          </GridItem>
        </GridContainer>
        <ToolsGrid />
        <GridContainer justify="flex-start">
          <GridItem cs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              A next gen software consultancy, <br /> and product incubator.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
