import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from './../auth/helpers'

import { useSelector } from 'react-redux'

import toastr from 'toastr';
import "toastr/build/toastr.css";

import {API_URL} from './../config'
import navicon from '../assets/images/logo.png'

const isActive = (history, path) => {

    if(history.location.pathname === path) {
        return { color: '#000' }
    }
    else{
        return { color: '#fff' }
    }

}


const Menu = (props) => {

    let countItem = useSelector(state => state.cart.count)

    const signout = () => {

        fetch(`${API_URL}/signout`)
          .then(() => {

            toastr.info('User SignOut', 'Next Time', {
                positionClass: "toast-bottom-left",
            })

            localStorage.removeItem('jwt_info')

            props.history.push('/signin')

          })
          .catch()

    }


    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-primary bg-light float right">
<img src={navicon} class="d-block w-70" alt="..."height="40px"width="100px"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  style={{color: "hsl(152deg 37% 36%)"}} >
    <h4 className="  text-xl font-bold "> PARA VIDEL</h4>
    </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='justify-content-end flex-grow-1 pe-3'>
                <ul className="navbar-nav mr-auto ">

               
                   
                  <Fragment> 
                  <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        <Link style={isActive(props.history, '/')} className="nav-link" to="/">Acceuil <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item active">
                        <Link style={isActive(props.history, '/shop')} className="nav-link" to="/shop">Categories </Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link 
                            style={isActive(props.history, '/dashboard')} 
                            className="nav-link" 
                            to={`${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin' : ''}/dashboard`}
                            >
                                Tableau de bord

                        </Link>
                        
                    </li>
                    
                </Fragment> 
               
                </ul></div>
                <ul className="navbar-nav ml-auto">

                { !isAuthenticated() && (
                    
                        <Fragment>
                            
                            <li className="nav-item">
                                <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connexion</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link style={isActive(props.history, '/signup')} className="nav-link" to="/signup">S'inscrire</Link>
                            </li>
                        </Fragment>
                ) }

                            <li className="nav-item">
                                <Link style={isActive(props.history, '/cart')} className="nav-link" to="/cart">
                                        Cart <span className="badge badge-warning"> { countItem }</span>
                                </Link>
                            </li>
                    { isAuthenticated() && (
                        <Fragment>
                            
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={signout}>SignOut</span>
                            </li>
                        </Fragment>
                    ) }
                </ul>
                
            </div>
            </nav>

        </div>
    )
}

export default withRouter(Menu) 
