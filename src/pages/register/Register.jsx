import {useState} from 'react'
import {axiosInstance} from "../../axiosConstant";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
    })
    const [error, setError] = useState([])

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axiosInstance.post("/auth/register", credentials);
          navigate("/login")
        } catch (err) {
          setError(err.response.data.message);
        }
    }



    
    return (
        <div className="register">
            <div className="rContainer">
                <h2 className='rTitle'>Register</h2>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="rInput"
                />
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="rInput"
                />
                <button onClick={handleClick} className="rButton">
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register