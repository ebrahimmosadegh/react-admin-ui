import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>ebradmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://photo-cdn2.icons8.com/qoup4rN1GBN8QulhNkIh68HzMvnj9AA5sHhRRPNcJ00/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85MzJlMmM5ZDA2/YTA0YWE3ODkyNzk4/NjgzMTZjZDA1NS5q/cGc.jpg" alt="" />
          <span>Anna</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
