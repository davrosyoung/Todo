/**
 * Created by david on 8/12/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
 * Component which allows a new todo to be added.
 * @param dispatch
 * @returns {XML}
 * @constructor
 */
let AddTodo = ({ dispatch }) => {
	let input
	
	return(
			<div>
				<form onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) { // if no text has been entered, ignore the add
						return
					}
					
					dispatch(addTodo(input.value))
					input.value = '';
				}}>
				<input ref={node => {input = node}}/>
				<button type="submit">Add Todo</button>
				</form>
			</div>
	)
}

// what the!?!?
AddTodo = connect()(AddTodo)

export default AddTodo