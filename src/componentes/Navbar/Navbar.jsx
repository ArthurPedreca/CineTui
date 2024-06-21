import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav className=' text-white flex flex-row justify-between items-center'>
            <ul className='flex gap-3'>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="sobre"> Sobre </Link></li>
                <li><Link to ="contato"> Contato </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar