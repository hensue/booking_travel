import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'rgb(174,226,241)',
    padding: 10,
    marginTop: 100,
    width: '100vw',

  },
});

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      {children}
    </div>
  )

}

export default MainContainer
