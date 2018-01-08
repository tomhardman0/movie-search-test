import React, { Component } from 'react';

import { connect } from 'react-redux';

import GenericWrapper from '../generic-wrapper/generic-wrapper';
import Card from '../card/card';

class List extends Component {

  _renderList() {
    return this.props.movies
      .filter((movie) => movie.Title.toLowerCase().match(this.props.location.search.replace('?q=', '')))
      .map((movie) => <Card key={movie.imdbID} movie={movie} />);
  }

  render() {
    const list = this._renderList();
    const content = list.length > 0 ? list : <h2>No results.</h2>;
    return (
      <GenericWrapper>
        <section className='list'>
          {content}
        </section>
      </GenericWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies.all };
};

export default connect(
  mapStateToProps
)(List);
