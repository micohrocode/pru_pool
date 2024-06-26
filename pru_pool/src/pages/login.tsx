// import { useState } from "react";

const Login : React.FC = () => {
    // useEffect(() => {
    //     document.title = "PruPool Login";
    // }, []);


    return (
        <div className='flex flex-col'>
            <label className='m-5'>XID</label>
            <input type="text" className='m-5' />
            <label className='m-5'>Password</label>
            <input type="text" className='m-5' />
        </div>
    );

}

export default Login;
