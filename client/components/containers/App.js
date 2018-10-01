import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from '../presentationals/Nav';
import { addTodoSync } from '../../actions/todos/actionCreators';
import { fetchPostsAsync } from '../../actions/todos/asyncActions';
import Loading from '../presentationals/Loading';
import getSpriteCSS from '../../styled-components/getSpriteCSS';
import styled from 'styled-components';

const StyledSpriteImg = styled.div`
  ${getSpriteCSS('soda')};
`;

const LoadableComponent = Loadable({
  loader: () => import('../presentationals/Lists'),
  loading: Loading
});

const Home = () => <h2>Routing Home</h2>;

class AppContainer extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      loadTrigger: false
    };
  }

  onClickHandler = () => {
    this.setState({
      loadTrigger: true
    });
  };

  onHoverHandler = () => {
    LoadableComponent.preload();
  };

  render() {
    const { todos, asyncActionHandler, syncActionHandler } = this.props;

    return (
      <div>
        <Nav />
        <hr />
        <StyledSpriteImg />
        <button onClick={this.onClickHandler} onMouseOver={this.onHoverHandler}>
          Todo list preLoad button
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo-list" render={() => <h2>Routing todo-list</h2>} />
        </Switch>
        {this.state.loadTrigger && (
          <LoadableComponent
            listLength={todos.length + 1}
            todos={todos}
            asyncActionHandler={asyncActionHandler}
            syncActionHandler={syncActionHandler}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilters: state.visibilityFilters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    syncActionHandler: bindActionCreators(addTodoSync, dispatch),
    asyncActionHandler: bindActionCreators(fetchPostsAsync, dispatch)
  };
};

const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer)
);
export default App;
