const Login = () => {
    return (
        <div className="login-account">
            <h2>Login to see Blogs</h2>
            <form>
                <label>Email Address</label>
                <input type='text' required></input>
                <label>Password</label>
                <input type='password' required></input>
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;
