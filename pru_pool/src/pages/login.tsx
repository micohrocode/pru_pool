// import { useState } from "react";
import { loginUser } from "../backend/function_calls/user_calls";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import currentUser from "../backend/data/currentUser.json"
import logo from '../assets/1.png';

const Login : React.FC = () => {
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    

    const submitInfo = (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        console.log(id)
        console.log(password)
        
        if (loginUser(id, password) !== false) {
            localStorage.setItem("currentUser", id);
            currentUser["currentUser"] = id;
            navigate("/home")
        }
    }

    return (
        <div className="flex justify-center w-screen items-center h-screen bg-gradient-to-l from-[#42a7f0] to-[#004d99]">
            <div className="max-w-md w-screen bg-[#ebebeb] p-8 rounded-lg shadow-lg">
                <img src={logo} alt="Logo" className="w-full" />
                <h2 className="text-3xl font-bold mt-7 mb-6 text-center text-[#1a1d1e]">Login</h2>
                <form className="space-y-4" id="login_form" onSubmit={submitInfo}>
                    <div>
                        <label className="block text-md font-semibold text-gray-600">XID</label>
                        <input
                            className="block w-full px-3 py-2 mt-1 text-sm text-[#1a1d1e] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="user_id"
                            placeholder="Enter your XID"
                            onChange={(e)=>setId(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-md font-semibold text-gray-600">Password</label>
                        <input
                            className="block w-full px-3 py-2 mt-1 text-sm text-[#1a1d1e] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="password"
                            id="user_password"
                            placeholder="Enter your password"
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button
                            className="w-full py-2 px-4 bg-[#002b5a] text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Login;
