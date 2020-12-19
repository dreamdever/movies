import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Movie } from '../../store/movie/model';

const useStyles = makeStyles(() => ({
  root: {
    height: '300px',
    listStyle: 'none',
    cursor: 'pointer'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

export default function MovieCard({ movie }: { movie: Movie }): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Link to={`movie/${movie.id}`}>
        <GridListTile className={classes.root}>
          <img src={movie.img} alt={movie.title} />
          <GridListTileBar
            title={movie.title}
            subtitle={<span>Year: {movie.year}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${movie.title}`} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      </Link>
    </Grid>
  );
}
