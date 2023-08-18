import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Foodie</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="" className="notification" />
          <div className="notificationNum">1</div>
        </div>
        <div className="user">
          <img src="pp.jpg" alt="" />
          <span>Wisdom</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
