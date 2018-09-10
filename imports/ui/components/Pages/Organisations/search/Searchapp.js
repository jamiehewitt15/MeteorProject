import React, { Component } from 'react'


import Input from './Input'
import List from './List'

export default class Searchapp extends Component {

  state = {
    todos: ['All data'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state

    return (
      <div >
      <List
          list={todos}
          onClickItem={this.onRemoveTodo}>
        
        </List>
        <Input
          placeholder={'Type a search tem and press enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
}
