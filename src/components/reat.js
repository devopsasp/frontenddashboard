import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
  card: {
    minWidth: 200,
    margin: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Google Nav Bar</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 1
              </Typography>
              <Typography color="textSecondary">
                This is a sample card.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 2
              </Typography>
              <Typography color="textSecondary">
                This is another sample card.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default App;
