import React from "react"
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo_name-2.svg"
import Saerch from "@/public/icons/icon-search.svg"
import User from "@/public/icons/user.svg"
import Cart from "@/public/icons/icon-cart.svg"

const Header = () =>  {
    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="logo">
                        <Link href="/">
                            <Image 
                                src={Logo}
                                alt="logo"
                                width={300}
                                />
                        </Link>
                    </div>
                    <div className="menu">
                        <Link href='/' className="menu_link">Home</Link>
                        <Link href='/HousePlans' className="menu_link">House Plans</Link>
                        <Link href='/Collections' className="menu_link">Collections</Link>
                        <Link href='/News' className="menu_link">News</Link>
                        <Link href='/About' className="menu_link">About</Link>
                    </div>
                    <div className="user_panel">
                        <Link href="/" className="search">
                            <Image
                                src={Saerch}
                                alt="search"
                            />
                        </Link>
                        <Link href="/" className="user">
                            <Image
                                src={User}
                                alt="user"
                            />
                        </Link>
                        <Link href="/" className="cart">
                            <Image
                                src={Cart}
                                alt="cart"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;