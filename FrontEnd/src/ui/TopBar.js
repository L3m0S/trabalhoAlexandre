import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainMenu from './MainMenu.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '300px'
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <h1>E-SUS</h1>
          <MainMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}