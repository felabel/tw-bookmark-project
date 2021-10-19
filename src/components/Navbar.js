import logomain from './logomain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <header className="font-Poppins ">
            <nav className="container flex items-center py-4 mt-4 sm:mt-4">
                <div className="py-1"><img src ={logomain} alt="bookmark"/></div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                    <li className="cursor-pointer"><a href="!#" className="hover:text-bookmark-red">features</a></li>
                    <li className="cursor-pointer"><a href="!#" className="hover:text-bookmark-red">pricing</a></li>
                    <li className="cursor-pointer"><a href="!#" className="hover:text-bookmark-red">contact Us</a></li>
                    <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3 border-2 border-white uppercase hover:bg-white hover:border-bookmark-red hover:text-bookmark-red ">Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                        <i className="text-2xl"><FontAwesomeIcon icon={faBars} /></i>
                    </div>
            </nav>
        </header>
    )
}

export default Navbar
