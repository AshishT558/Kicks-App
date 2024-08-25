import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="">
            <nav className="flex items-center ml-10 my-5">
                <NavLink to="/" className="text-4xl text-orange-600 font-bold">
                    KICKS
                </NavLink>
                <div className="flex ml-10 gap-x-5">
                    <NavLink to="/all_shoes" className="text-xl">
                        Shoes
                    </NavLink>

                    <NavLink to="/get_recommendation" className="text-xl">
                        Recommendation
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}