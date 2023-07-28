import './NavBarStyle.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <span></span>
            <span></span>
            <span></span>
            <h2>Starter</h2>

        </div>
        <nav>
            <ul>
                <li><a href="#">GitHup</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar