import React, { Component } from 'react';
import { Box, Container } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { MoviesState } from '../../store/movie/types';
import * as MovieActions from '../../store/movie/actions';
import MoviesList from '../../components/MoviesList/MoviesList';
import './Favourite.scss';

interface DispatchProps {
  setFavouriteMoviesAction(): void;
}

type FavouriteProps = MoviesState & DispatchProps;

class FavouritePage extends Component<FavouriteProps> {
  render(): JSX.Element {
    return (
      <Box component="div">
        <Container maxWidth="lg">
          {this.props.favouriteMovies && <MoviesList movies={this.props.favouriteMovies} />}
          {!this.props.favouriteMovies && (
            <Typography className="searchErrorMessage" variant="body1" gutterBottom align="center">
              You do not have any favourite movies.
            </Typography>
          )}
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.movies;
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MovieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage);
