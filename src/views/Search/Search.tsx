import React, { Component } from 'react';
import { Box, CircularProgress, Container, Grid, TextField } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { MoviesState } from '../../store/movie/types';
import * as MovieActions from '../../store/movie/actions';
import MoviesList from '../../components/MoviesList/MoviesList';
import './Search.scss';

interface SearchState {
  search: string;
}

interface DispatchProps {
  fetchMoviesAction(search?: string, page?: number): void;
}

type SearchProps = MoviesState & DispatchProps;

class SearchPage extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: event.target.value }, () => {
      if (this.state.search.length >= 3) {
        this.props.fetchMoviesAction(this.state.search);
      }
    });
  };

  handlePagination = (event: React.ChangeEvent<unknown>, page: number): void => {
    this.props.fetchMoviesAction(this.state.search, page);
  };

  render(): JSX.Element {
    return (
      <Box component="div">
        <Container maxWidth="md" className="searchContainer">
          <Grid container>
            <Grid item xs>
              <TextField
                value={this.state.search}
                onChange={this.handleSearch}
                className="searchInput"
                label="Search..."
                fullWidth
              />
            </Grid>
            <Grid item>{this.props.loading && <CircularProgress />}</Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          {!this.props.error && this.props.movies?.length > 0 && (
            <Box>
              <Pagination
                className="pagination"
                count={Math.ceil(this.props.pagination.total / 10)}
                variant="outlined"
                page={this.props.pagination.page}
                size="large"
                onChange={this.handlePagination}
              />
              <MoviesList movies={this.props.movies} />
            </Box>
          )}
          {this.props.error && (
            <Typography className="searchErrorMessage" variant="body1" gutterBottom align="center">
              {this.props.message}
            </Typography>
          )}
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.movies;
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MovieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
