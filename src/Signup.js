import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../src/contexts/AuthContext";
const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfiRef = useRef();
    const [error, setError] = useState('');
    const [Loading, setLoading] = useState(false);
    const { signup, currentUser } = useAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfiRef.current.value) {
            return setError('Password do not match');
        }
        try {
            setError('');
            setLoading(false)
            await signup(emailRef.current.value, passwordRef.current.user);
        } catch {
            setError('Failed to create an account')
        }
        setLoading(true)
    }
    return (
        <div className="create-account">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                {JSON.stringify(currentUser)}
                {error && <Alert variant="danger">{error}</Alert>}
                <label>Email Address</label>
                <input type='text' id="email" ref={emailRef} required></input>
                <label>Password</label>
                <input type='password' id="password" ref={passwordRef} required></input>
                <label>Confirm Password</label>
                <input type="password" id="password-confirm" ref={passwordConfiRef} required />
                Already have an account?<Link to="/login"> Log in</Link><br /><br />
                <button disabled={Loading}>Sign up</button>
            </form>
        </div >
    );
}

export default Signup;
