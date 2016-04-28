import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  linkHeader(){
    if (this.props.authenticated){
      return (<Link to="/signin"> Sign Out</Link>)
    } else {
      return (<Link to="/signin"> Sign in</Link>)
    }
  }

  render(){
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            {this.linkHeader()}
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return{
     authenticated : state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(Header);
