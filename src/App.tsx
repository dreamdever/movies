import React from 'react';
import './App.scss';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './views/Search/Search';
import DetailPage from './views/Detail/Detail';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FavouritePage from './views/Favourite/Favourite';
import { useDispatch } from 'react-redux';
import { setFavouriteMoviesAction } from './store/movie/actions';
import NotFound from './views/errors/NotFound/NotFound';

function App(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(setFavouriteMoviesAction());

  return (
    <Box component="div" className="app">
      <Router>
        <Container maxWidth="lg">
          <Grid container className="navigation" direction="row" justify="flex-end" alignItems="center">
            <Grid item container xs>
              <Grid item>
                <Typography variant="button">MOVIE DATABASE</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="button">
                <Link className="navigationLink" to="/">
                  Search
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="button">
                <Link className="navigationLink" to="/favourite">
                  Favourite Movies
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/movie/:movieId" component={DetailPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
