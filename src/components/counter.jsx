import React from 'react';
import { connect } from 'react-redux'


const Counter = (props) =>(
    <h2>Você tem {props.todos.length} todo.</h2>
)

const mapStateToProps = state => ({
    todos: state.todo
})

export default connect(mapStateToProps)(Counter)