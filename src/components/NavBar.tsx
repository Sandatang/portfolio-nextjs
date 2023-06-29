'use client'

import { useState } from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { FacebookLogo, GithubLogo } from "./Svg";
import { motion } from "framer-motion"
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const hamburgerMenuOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full bg-white/90 backdrop-blur flex-none support-backdrop-blur:bg-white/60
            lg:border-b">
            <div className="max-w-6xl mx-auto"> 
                <div className="relative my-2 font-medium flex 
                justify-between text-sm mx-4 lg:mx-auto lg:px-8">
                    <Logo />

                    <button className=" flex flex-col justify-center items-center pb-2 md:hidden"
                        onClick={hamburgerMenuOpen}
                    >
                        <span className={`bg-black block h-0.5 w-6 rounded-sm  
                                ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} transition-all duration-300 ease-out `}
                        >
                        </span>

                        <span className={`bg-black block h-0.5 w-6 rounded-sm my-[0.15rem] 
                                ${isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-out `}
                        >
                        </span>
                        <span className={`bg-black block h-0.5 w-6 rounded-sm 
                        ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} transition-all duration-300 ease-out `}
                        >
                        </span>

                    </button>


                    <div className="hidden md:flex justify-between items-center text-[12px]">
                        <nav className="text-black flex justify-center items-center gap-4 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <CustomLink href="/" text="Home" classNames="" />
                            <CustomLink href="/about" text="About" classNames="" />
                            <CustomLink href="/project" text="Projects" classNames="" />
                            <CustomLink href="/skill" text="Skills" classNames="" />
                        </nav>

                        <nav className="text-black flex justify-center items-center flex-wrap ml-8 gap-4 font-semibold">
                            <motion.a href="https://github.com/Sandatang" target={"_blank"}
                                whileHover={{ y: -2 }}
                                className="w-6"
                            >
                                <GithubLogo />
                            </motion.a>

                            <motion.a href='https://facebook.com/Piatosme' target={"_blank"}
                                whileHover={{ y: -2 }}
                                className="w-6 mr-3">
                                <FacebookLogo />
                            </motion.a>
                        </nav>
                    </div>

                    {/* MOBILE LINKS */}
                    {
                        isOpen &&
                        
                        <div className="min-w-[95vw] bg-black/80 absolute top-48 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2  py-12 rounded-lg backdrop-blur-md"
                        >
                            <nav className="text-white flex flex-col justify-center items-center font-medium text-md gap-4">
                                <CustomLink href="/" text="Home" classNames="" />
                                <CustomLink href="/about" text="About" classNames="" />
                                <CustomLink href="/project" text="Projects" classNames="" />
                                <CustomLink href="/skill" text="Skills" classNames="" />
                            </nav>

                            <nav className="text-black flex justify-center items-center flex-wrap mt-6 gap-4">
                                <motion.a href="https://github.com/Sandatang" target={"_blank"}
                                    whileHover={{ y: -2 }}
                                    className="w-6"
                                >
                                    <GithubLogo />
                                </motion.a>

                                <motion.a href='https://facebook.com/Piatosme' target={"_blank"}
                                    whileHover={{ y: -2 }}
                                    className="w-6 mr-3">
                                    <FacebookLogo />
                                </motion.a>
                            </nav>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

export default NavBar;