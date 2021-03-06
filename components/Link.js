/**
 * Created by david on 7/12/16.
 */
/**
 * Created by david on 7/12/16.
 */

import React, {PropTypes} from 'react'

const Link = ({active, children, onClick}) => {
	if (active) {
		return <span>{children}</span>
	}
	
	return (
			<a href="#" onClick={e => {
				e.preventDefault().onClick()
				onClick()
			}}
			>{children}</a>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Link