
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path

                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul

                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipes</a>
                                <ul className="p-2">
                                </ul>
                            </li>
                            <li><a>About </a></li>
                            <li><a>Search </a></li>
                        </ul>
                    </div>
                    <a className=" btn-ghost text-2xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home </a></li>
                        <li>
                            <summary>Recipes</summary>
                            <ul className="p-2">

                            </ul>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex  gap-10 items-center px-5">
                    <div className="flex items-center gap-4 border bg-[#150B2B0D] rounded-lg w-40 h-11 justify-center">

                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p className="text-xl font-bold">Search</p>

                    </div>

                    <div className="w-12 border bg-[#0BE58A] flex items-center h-12 rounded-full">
                        <i className="fa-solid fa-user px-4"></i>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;