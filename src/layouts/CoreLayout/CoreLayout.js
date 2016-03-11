import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { fetchUser } from 'redux/modules/user'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    fetchUser: PropTypes.func.isRequired
  };

  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    const { children } = this.props

    return (
      <div className='page-container'>
        <div className='view-container'>
          {children}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(null, mapDispatchToProps)(CoreLayout)
