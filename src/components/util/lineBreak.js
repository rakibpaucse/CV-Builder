import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #ece6e6',
    width: "100%",
    position: 'relative',
    textAlign : 'center',
    // margin: '20px 0px'
  },
}));

const LineBreak = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default LineBreak;