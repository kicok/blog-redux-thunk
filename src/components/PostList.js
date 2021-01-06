import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props);
    return <div>Post</div>;
  }
}

const mapStateToProps = (state) => {
  return { dummyReducer: state.dummyReducer };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
