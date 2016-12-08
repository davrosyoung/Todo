/**
 * Created by david on 8/12/16.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp