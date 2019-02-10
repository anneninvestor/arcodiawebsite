import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import ImportantDevices from "@material-ui/icons/ImportantDevices";

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
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="We Do Nodes"
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner."
                icon={ImportantDevices}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="We Do Dreams"
                description="Bacon ipsum dolor amet tenderloin ribeye pork capicola buffalo picanha. Rump turducken ham sausage. Alcatra tenderloin ham t-bone pork loin sirloin ribeye fatback. Spare ribs chicken short ribs tenderloin ground round burgdoggen doner."
                icon={VerifiedUser}
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
