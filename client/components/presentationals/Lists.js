import React, { Component } from 'react'

class Lists extends Component {
  render() {
    const {
      todos,
      syncActionHandler,
      asyncActionHandler,
      listLength
    } = this.props

    return (
      <ol>
        {todos.map(item => (
          <li key={item.id ? item.id : item}>
            {item.title ? item.title : item}
          </li>
        ))}
        <li style={{ listStyle: 'none' }}>
          <button onClick={() => asyncActionHandler(listLength)}>
            Add async fetch List
          </button>
        </li>
        <li style={{ listStyle: 'none' }}>
          <button onClick={() => syncActionHandler(Math.random())}>
            Add sync random number List
          </button>
        </li>
      </ol>
    )
  }
}

export default Lists
