import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import { IoMdAnalytics } from "react-icons/io";
import { IoIosCloudDone } from "react-icons/io";

import dreams from "@material-ui/icons/Public";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="We Do Cloud"
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner.
                 "
                icon={IoIosCloudDone}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="We Do Nodes"
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner."
                icon={IoMdAnalytics}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="We Do Dreams"
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner."
                icon={dreams}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
