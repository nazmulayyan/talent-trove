import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ActiveLink from "../../../LayOut/ActiveLink/ActiveLink";
import { useState } from "react";

const Navbar = () => {
    const user = true;


    // const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    const handleToggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };
    return (
        <nav className="h-20 sticky top-0 left-0 navbar z-50">
            <div className="flex justify-between w-11/12 mx-auto items-center h-full">
                {/* logo */}
                <div>
                    <Link to="/" className="md:text-3xl text-2xl font-bold text-white cursor-pointer menu">
                        Talent Trove
                    </Link>
                </div>

                {/* menu item */}
                <div className="flex gap-2 items-center">
                    <div className="justify-end">
                        <ul
                            className={`list-none menu lg:flex items-center lg:static duration-500 lg-p-0 p-5 text-center -z-10 lg:space-y-0 space-y-3  absolute lg:bg-none bg-red- ${open ? "right-10 top-24 navbar" : "right-10  -top-72 "
                                }`}
                        >
                            <li className="px-6 cursor-pointer font-bold text-xl  text-white">
                                <ActiveLink to="/">
                                    Home
                                </ActiveLink>
                            </li>
                            <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                <ActiveLink className="" to="/allToys">
                                    About
                                </ActiveLink>
                            </li>

                            <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                <ActiveLink className="" to="/blog">
                                    Contact Us
                                </ActiveLink>
                            </li>

                            {user?.email || user?.providerData ? (
                                <li>
                                    <button onClick={handleLogOut} className="font-bold text-xl hover:text-gray-800 transition-all duration-150 text-white">
                                        Sing in
                                    </button>
                                </li>
                            ) : (
                                <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                    <ActiveLink to="/singUp">
                                        Sing up
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/* hamburger menu */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 lg:hidden bg-white rounded-full text-orange-500 flex justify-center items-center font-bold text-2xl cursor-pointer"
                    >
                        <span>{open === true ? <RxCross2 /> : <RxHamburgerMenu />}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;