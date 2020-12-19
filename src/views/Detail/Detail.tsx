import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { ApplicationState } from '../../store/store';
import { MoviesState } from '../../store/movie/types';
import * as MovieActions from '../../store/movie/actions';
import './Detail.scss';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import { Movie } from '../../store/movie/model';

interface DispatchProps {
  fetchMovieAction(search?: string): void;
  setFavouriteMoviesAction(): void;
}

interface RouteParams {
  match: {
    params: {
      movieId: string;
    };
  };
}

type DetailProps = MoviesState & DispatchProps & RouteParams;

class DetailPage extends Component<DetailProps> {
  componentDidMount() {
    this.props.fetchMovieAction(this.props.match.params.movieId);
  }

  render(): JSX.Element {
    return (
      <Box component="div">
        <Container maxWidth="md" className="movieDetail">
          <MovieDetail
            movie={this.props.movie || new Movie()}
            isFavourite={this.props.favouriteMovies.find((movie) => movie.id === this.props.movie?.id) !== undefined}
          />
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.movies;
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MovieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
