import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Direccion = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav aria-label="breadcrumb" className='px-5 pt-5'>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/" className='text-decoration-none text-black'><u>Home</u></Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to} className='text-decoration-none text-black'><u>{value.charAt(0).toUpperCase() + value.slice(1)}</u></Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Direccion;
