/**
 * Created by david on 7/12/16.
 */
/**
 * Created by david on 7/12/16.
 */

import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
		<ul>
			{todos.map(todo =>
					<Todo key={todo.id} text={...todo} onClick={() => onTodoClick(todo.id)}/>
			)}
		</ul>
)

TodoList.props = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList
