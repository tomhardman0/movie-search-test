import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions/actions';

import Search from '../search/search';
import Loader from '../loader/loader';

class Home extends Component {

  componentWillMount() {
    this.props.actions.requestAllMovies();
  }

  render() {
    return (
      <section className='home-cont'>
        <div className='home'>
          <img className='home__logo' src='/assets/img/logo.png' />
          {this.props.isLoading ? <Loader lightTheme={true} /> : <Search />}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = (state) => {
  return { isLoading: state.movies.isLoading };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
