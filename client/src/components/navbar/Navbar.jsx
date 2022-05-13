import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <>
            <div>
              <p>
                Connected as {user?.username}{' '}
                <button onClick={(e) => handleClick(e)} className="navButton">
                  Logout
                </button>
              </p>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
