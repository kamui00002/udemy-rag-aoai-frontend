import React from "react";
import {BsRocketTakeoff} from "react-icons/bs";
import {FaRocket} from "react-icons/fa";
import Navitem from "./Navitem";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
    const navItems: NavItemType[] = [
        { id: 1, label: "On Your Data", link: "/", icon: <BsRocketTakeoff className="size-5" /> },
    ]

    return (
        <div className="mt-12">
            {navItems.map((item) => (
                <Navitem
                    label={item.label}
                    link={item.link}
                    icon={item.icon}
                    key={item.id}
                />
            ))}
        </div>
    )
}

export default NavList; 