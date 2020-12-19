import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import { Movie } from '../../store/movie/model';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { addFavouriteMovieAction, removeFavouriteMovieAction } from '../../store/movie/actions';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

interface MovieDetailProps {
  movie: Movie;
  isFavourite: boolean;
}

function MovieDetail({ movie, isFavourite }: MovieDetailProps): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFavourite = (addToFavourite: boolean) => {
    if (addToFavourite) {
      dispatch(addFavouriteMovieAction(movie));
    } else {
      dispatch(removeFavouriteMovieAction(movie.id));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase>
          <img alt="complex" src={movie.img} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {movie.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Director: {movie.director}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Year: {movie.year}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Genre: {movie.genre}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Description: <br />
              {movie.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            <IconButton
              aria-label={`info about ${movie.title}`}
              className={classes.icon}
              onClick={() => handleFavourite(!isFavourite)}
            >
              {!isFavourite && <StarBorderIcon />}
              {isFavourite && <StarIcon />}
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieDetail;
