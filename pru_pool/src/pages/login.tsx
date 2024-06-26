// import { useState } from "react";
import { loginUser } from "../backend/function_calls/user_calls";

const Login : React.FC = () => {
    // useEffect(() => {
    //     document.title = "PruPool Login";
    // }, []);
    const button = document.getElementById('submitButton');

    button?.addEventListener('click', (event) => {
        event.preventDefault();
        const xid = document.getElementById('user_id') as HTMLInputElement;
        const password = document.getElementById('user_password') as HTMLInputElement;
        
        console.log("User: " + xid.value);
        console.log("Password: " + password.value);

        console.log(loginUser(xid.value, password.value));
    });

    return (
        <div className="flex justify-center w-screen items-center h-screen bg-gradient-to-l from-[#42a7f0] to-[#004d99]">
            <div className="max-w-md w-screen bg-[#ebebeb] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#1a1d1e]">Login</h2>
                <form className="space-y-4" id="login_form">
                    <div>
                        <label className="block text-md font-semibold text-gray-600">XID</label>
                        <input
                            className="block w-full px-3 py-2 mt-1 text-sm text-[#1a1d1e] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="user_id"
                            placeholder="Enter your XID"
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
                            required
                        />
                    </div>
                    <div>
                        <button
                            className="w-full py-2 px-4 bg-[#002b5a] text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            type="submit"
                            id="submitButton"
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
