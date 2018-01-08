import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as actions from '../../actions/actions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(push(`/search?q=${e.target.elements[0].value}`));
  }

  onChange(e) {
    this.setState({value: e.target.value});
    if (this.props.header) {
      this.props.dispatch(push(`/search?q=${e.target.value}`));
    }
  }

  render() {
    return (
      <form className={`search ${this.props.header ? 'search--header' : ''}`} onSubmit={this.onSubmit}>
        <input name='query' className='search__input' value={this.state.value} onChange={this.onChange} type='text' placeholder='Search' />
        <button className='search__submit' type='submit' disabled={!this.props.movies}>
          <img className='submit__icon' src='/assets/img/search-icon.png' />
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
};

const mapStateToProps = (state) => {
  return { movies: state.movies.all };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
