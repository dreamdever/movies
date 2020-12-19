import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MoviesCard/MovieCard';
import { Movie } from '../../store/movie/model';

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    marginTop: '3rem'
  }
}));

export default function MoviesList(props: { movies: Movie[] }): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}
