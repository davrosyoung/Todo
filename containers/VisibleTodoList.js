/**
 * Created by david on 8/12/16.
 */
import { connect } from 'react-redux'
import { toggleDone } from '../actions'
import ActionTypes from '../ActionTypes'
import TodoList from '../components/TodoList'

/**
 * This looks like a reducer...
 * @param todos
 * @param filter
 * @returns {*}
 */
const  getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case ActionTypes.SHOW_ALL:
			return todos;
		case ActionTypes.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case ActionTypes.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleDone(id))
		}
	}
}

const VisibleTodoList = connect(
		mapStateToProps,
		mapDispatchToProps
)(TodoList)

export default VisibleTodoList