import './HeaderLink.css'

import React, { PropTypes } from 'react'
import { Link, Route } from 'react-router-dom'

const { string, bool } = PropTypes
const propTypes = {
  label: string,
  to: string,
  activeOnlyWhenExact: bool
}

function HeaderLink ({ label, to, activeOnlyWhenExact }) {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <Link
        tabIndex={match && '-1'}
        className={match ? 'Header__link Header__link--active' : 'Header__link'}
        to={to}
      >
        {label}
      </Link>
    )} />
  )
}

HeaderLink.propTypes = propTypes

export default HeaderLink
