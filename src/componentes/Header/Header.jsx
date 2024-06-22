import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return ( 
    <>
    <header className="bg-slate-500 flex justify-between  text-white p-4 m-10">
        <span className="text-2xl"><Link to="/">CineTui</Link></span>
        <Navbar/>
    </header>
    </> 
    
    );
}

export default Header;