"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #ff0000, #00ff00, #0000ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
};


const Logo = () => {
    return (
        <div className="h-12 w-12 bg-black 
            flex justify-center items-center rounded-full hover:cursor-pointer "
            
        >
            <Link href='/' className="text-white text-center font-medium relative"
            >
                <span>JM</span>
                <span className="absolute left-10 text-xl font-semibold -top-1 text-slate-900/90">Portfolio</span>
            </Link>
                {/* <motion.span className=" absolute left-16 font-semibold text-black text-2xl"
                    animate={{}}
                >Portfolio</motion.span> */}
            {/* </MotionLink> */}

        </div>
    );
}

export default Logo;