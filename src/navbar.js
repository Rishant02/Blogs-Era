import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogs Era</h1>
      <div className="links">
        <Link className='logged-in' to="/">Home</Link>
        <Link className='logged-in' to="/account"  >Account`</Link>
        <Link className='logged-in' to="/create">New Blog</Link>
        <Link className='logged-out' to="/signup">Create Account</Link>
        <Link className='logged-out' to="/login">Login</Link>
        <Link className='logged-in' to="/">Log out</Link>
      </div>
    </nav>
  );
}

export default Navbar;