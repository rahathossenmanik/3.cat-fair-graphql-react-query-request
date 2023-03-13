import * as React from "react";
import ReactDOM from "react-dom";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import CountryComponent from "./Components/Countries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1)
    }
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Welcome
        </Typography>
      </Paper>
      <CountryComponent />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
