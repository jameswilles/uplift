import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { clearUser } from '../../ducks/reducer';
import './nav.scss'

class Nav extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  handleLogout = () => {
    axios.get('/api/logout')
    .then(() => {
        //clear the user from redux
        this.props.clearUser();
        // because the routes are functional components with 'useEffect's that push us around based on redux state, we don't need the authentication functions to push us to other routes.  Neat.
    })
    .catch(err => console.log(err))
  }

  toHome = () => {
    this.props.history.push('/dash')
  }

  toProfile = () => {
    this.props.history.push('/profile')
  }

  render() {
    return(
      <div>
        {this.props.location.pathname !== '/'
        ? (<div className='nav'>
            <h2> Uplift </h2>
            <section>
              <button onClick={() => this.toHome()}> Home </button>
              <button onClick={() => this.toProfile()}> Profile</button>
              <button onClick={this.handleLogout}> Logout </button>
            </section>
          </div>) : null}
      </div>
    )
  }
};

// export statement bellow commented functional component attempt

// I was trying to do this as a functional component, but couldn't get that to work with this.props.location.pathname
// So I decided to just move on and make it a class component, which you see above.

// const Nav = (props) => {
//   const location = useLocation()
//   return(
//     <div className='nav'>
//       {location.pathname !== '/'
//       ? (<div>
//           <section className='nav-links'>
//             <Link to='/dash' className='link' > Home </Link>
//             <Link to='/profile' className='link' > Profile </Link>
//             <Link to='/' className='link' > Logout </Link>
//           </section>
//         </div>) : null}
//     </div>
//   )
// }


const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { clearUser })(withRouter(Nav));