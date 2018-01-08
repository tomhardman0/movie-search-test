import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { push } from 'react-router-redux';

class Card extends Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(id) {
    this.props.dispatch(push(`/movie?id=${id}`));
  }

  render() {
    const movie = this.props.movie;
    const imgSrc = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250x250';
    return (
      <div onClick={() => this.onClickHandler(movie.imdbID)} className='card'>
        <div className='card__img-cont'>
          <img className='img-cont__img' src={imgSrc} />
        </div>
        <div className='card__title-cont'>
          <p>{movie.Title}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  movie: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
