import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import react from "../../../assets/img/react.png";
import python from "../../../assets/img/python.jpg";
import net from "../../../assets/img/net.jpg";
import javascript from "../../../assets/img/javascript.png";
import aws from "../../../assets/img/aws.png";
import angular from "../../../assets/img/angular.png";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    padding: "30px",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  }
});

const tileData = [
  {
    img: react
  },
  {
    img: javascript
  },
  {
    img: python
  },
  {
    img: angular
  },
  {
    img: aws
  },
  {
    img: net
  }
];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile
            style={{ height: "150px", width: "150px" }}
            key={tile.img}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleLineGridList);
