import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, type}) => {
  return (
    <button   type={type}>
        {children}
    </button>
  )
}
Button.defaultProps = {
    type : 'button',

}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    type : PropTypes.string
}

export default Button