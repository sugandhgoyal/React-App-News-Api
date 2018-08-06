/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Menu from '../../components/Menu';
import FeaturedNewspaper from '../../components/FeautredNewspaper';
import Footer from '../../components/Footer';
import SelectNewspaper from '../../components/SelectNewspaper';
import Categories from '../../components/Categories';
import Banner from '../../components/Banner';
import MainBanner from '../../components/MainBanner';
import '../../assets/css/style.css';
import '../../assets/css/set1.css';

export class HomePage extends React.PureComponent {
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <Fragment>
        <Menu />
        <MainBanner />
        <SelectNewspaper history={this.props.history}/>
        <FeaturedNewspaper />
        <Categories history={this.props.history}/>
        <Banner />
        <Footer />
      </Fragment>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(HomePage);
