import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled, { css } from 'styled-components';
import Nav from '../presentationals/Nav';
import Home from '../presentationals/Home';
import { addTodoSync } from '../../actions/todos/actionCreators';
import { fetchPostsAsync } from '../../actions/todos/asyncActions';
import Loading from '../presentationals/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../presentationals/Lists'),
  loading: Loading
});

const Button = styled.button`

    background: none;;a
border: 2px solid pink;
      border-radius: 4px;
  box-shadow: none;
    ${
    props => props.innerToo && css`
        color: pink;
      `
    }
`;

class AppContainer extends Component {
  constructor (prop) {
    super (prop);
    this.state = {
      loadTrigger: false
    }
  }

  onClickHandler = () => {
    this.setState({
      loadTrigger: true
    })
  }

  onHoverHandler = () => {
    LoadableComponent.preload();
  }

  render () {
    const { todos, asyncActionHandler, syncActionHandler } = this.props;

    return (
        <div>
          <Nav />
          <h1>List...</h1>
          <hr/>
          <Button as='a' href='/'>I'm Button</Button>
          <Button
              innerToo
              onClick={this.onClickHandler}
              onMouseOver={this.onHoverHandler}
          >Load</Button>
          <Switch>
            <Route
                exact
                path='/'
                component={ Home }
            />
            <Route
                path='/todo-list'
                render={() => <h2>Routing todo-list</h2>}
            />
          </Switch>
          {
            this.state.loadTrigger
            && <LoadableComponent
                listLength={todos.length + 1}
                todos={todos}
                asyncActionHandler={asyncActionHandler}
                syncActionHandler={syncActionHandler}
            />
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilters: state.visibilityFilters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    syncActionHandler: bindActionCreators(addTodoSync, dispatch),
    asyncActionHandler: bindActionCreators(fetchPostsAsync, dispatch)
  }
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
export default App;