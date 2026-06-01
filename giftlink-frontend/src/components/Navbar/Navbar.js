/*import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {// Task 1: Add links to Home and Gifts below}
                </ul>
            </div>
        </nav>
    );
}
*/

import React from 'react';
// Handle When the user registers, the user is logged in. Once the user has logged in to the website, rather than display the login and register buttons, the navbar needs to display a logout
import { Link, useNavigate } from 'react-router-dom'
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';

export default function Navbar() {
  // Handle When the user registers, the user is logged in. Once the user has logged in to the website, rather than display the login and register buttons, the navbar needs to display a logout
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useAppContext();
  const navigate=useNavigate();
    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('auth-token');
        const nameFromSession = sessionStorage.getItem('name');
        if (authTokenFromSession) {
            if(isLoggedIn && nameFromSession) {
              setUserName(nameFromSession);
            } else {
              sessionStorage.removeItem('auth-token');
              sessionStorage.removeItem('name');
              sessionStorage.removeItem('email');
              setIsLoggedIn(false);
            }
        }
    },[isLoggedIn, setIsLoggedIn, setUserName])
    const handleLogout=()=>{
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        setIsLoggedIn(false);
        navigate(`/app`);

    }
    const profileSecton=()=>{
      navigate(`/app/profile`);
    }
return (
         /*<nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="/">GiftLink</a>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home.html">Home</a> {// Link to home.html }
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app">Gifts</a> {// Updated Link }
              </li>
              <li className="nav-item">
	            <a className="nav-link" to="/app/search">Search</a>
              </li>
             </ul>
           </div>
        </nav>*/
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar_container'>
        <a className="navbar-brand" href={`${urlConfig.backendUrl}/app`}>GiftLink</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app">Gifts</Link> {/* Updated Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/search">Search</Link>
            </li>
            <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
                                    <>
                                    <li className="nav-item"> <span className="nav-link" style={{color: "black", cursor:"pointer"}} onClick={profileSecton}>Welcome, {userName}</span> </li>
                                    <li className="nav-item"><button className="nav-link login-btn" onClick={handleLogout}>Logout</button></li>
                                    </>
                                    )  : (
                                    <>
                                        <li className="nav-item">

                                        <Link className="nav-link login-btn" to="/app/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link register-btn" to="/app/register">Register</Link>
                                        </li>
                                    </>
                                )

                                }
            </ul>
          </ul>
        </div>
        </nav>
        </>
    ); // ; can be removed
}
