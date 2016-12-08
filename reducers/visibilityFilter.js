/**
 * Created by david on 8/12/16.
 */
import * as ActionTypes from '../ActionTypes'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case ActionTypes.CHANGE_VISIBILITY:
			return action.filter;
		default:
			return state
	}
}

export default visibilityFilter;