import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        {this.props.location.pathname !== '/'
        ? (<div>
            <section className='nav-links'>
              <Link to='/dash' className='link' > Home </Link>
              <Link to='/profile' className='link' > Profile </Link>
              <Link to='/' className='link' > Logout </Link>
            </section>
          </div>) : null}
      </div>
    )
  }
};

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


// const mapStateToProps = reduxState => reduxState;

// export default connect(mapStateToProps)(withRouter(Nav));
export default withRouter(Nav)