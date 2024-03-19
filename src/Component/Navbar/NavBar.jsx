import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    
    const routes = [{ id: 1, name: 'Home', path: '/', exact: true },
    { id: 2, name: 'About', path: '/about', exact: true },
    { id: 3, name: 'Services', path: '/services', exact: true },
    { id: 4, name: 'Contact', path: '/contact', exact: true },
    { id: 5, name: 'NotFound', path: '*' }
    ];

    return (
        <nav className="bg-yellow-300 p-3">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open ? <IoCloseSharp></IoCloseSharp> : <IoMenu></IoMenu>
                }
            </div>
            <ul className={`md:flex gap-10 absolute bg-yellow-300 md:static duration-1000
            ${open? "top-10": "-top-60"} p-3 rounded-lg
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;