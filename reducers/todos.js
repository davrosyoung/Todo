/**
 * Created by david on 8/12/16.
 */
import ActionTypes from '../ActionTypes'

/**
 * Reducers, given an action, provide the reduced state
 * @param state
 * @param action
 * @returns {{}}
 */
const todo = (state = {}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case ActionTypes.TOGGLE_DONE:
			if (state.id !== action.id) return state;
			return Object.assign({}, state, {completed: !state.completed});
			
		default:
			return state;
	}
}

const todos = (state=[], action) => {
	switch(action.type) {
		case ActionTypes.ADD_TODO:
			return [...state, todo(undefined, action)]
		case ActionTypes.TOGGLE_DONE:
			return state.map(t=>todo(t, action))
		default:
			return state
	}
}

export default todos