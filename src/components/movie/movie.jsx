import React, { Component } from 'react';

import { Api } from '../../clients/api';

import GenericWrapper from '../generic-wrapper/generic-wrapper';
import Loader from '../loader/loader';

export default class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = { movie: null };
  }

  async componentWillMount() {
    const id = this.props.location.search.replace('?id=', '');
    const movieInfo = await Api.getMovieInfo(id);
    this.setState({ movie: JSON.parse(movieInfo) });
  }

  _renderMovieInfo() {
    const movie = this.state.movie;
    return (
      <div>
        <h1>{movie.Title} (Released: {movie.Released})</h1>
        <p>Actors: {movie.Actors}</p>
      </div>
    );
  }

  render() {
    let content;

    if (this.state.movie) {
      content = this._renderMovieInfo();
    } else {
      content = <Loader />;
    }

    return (
      <GenericWrapper>
        <section className='movie'>
          {content}
        </section>
      </GenericWrapper>
    );
  }
}
