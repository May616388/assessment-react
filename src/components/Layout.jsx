import React from "react";
import { Outlet, Link } from "react-router";

function Layout () {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div>
                <nav className="bg-pink-700 text-white p-4 shadow-md">
                    <ul className="flex gap-4 justify-end">
                        <li>
                            <Link to = "/" className="font-medium hover:text-sky-200">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to = "/owner" className="font-medium hover:text-sky-200">
                            Owner
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;