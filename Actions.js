/**
 * Created by david on 7/12/16.
 */
import * as ActionType from './ActionTypes.js';

export const VisbilityFilter = {
	SHOW_ALL: 1,
	SHOW_COMPLETED: 2,
	SHOW_ACTIVE: 3
};

export function addToDo(text) {
	return {
		type: ActionType.ADD_TODO,
		payload: {text: text}
	};
}

export function toggleDone(index) {
	return {
		type: ActionType.TOOGLE_DONE,
		payload: {index: index}
	}
}

export function clearCompleted(index) {
	return {
		type: ActionType.CLEAR_COMPLETED
	}
}

export function setVisibilityFilter(filer) {
	return {
		type: ActionType.CHANGE_VISIBILITY,
		payload: {filter: filter}
	}
}
