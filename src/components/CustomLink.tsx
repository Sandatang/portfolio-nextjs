"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

interface CustomLinkProps {
    classNames?: string,
    href: string,
    text: string
}

const CustomLink = ({ classNames, href, text }: CustomLinkProps) => {
    const currentPath = usePathname()
    return (
        <Link href={href} className={`${classNames} relative group `}>
            {text}

            <span className={` inline-block bg-slate-600 h-[1px] absolute left-0 bottom-0
            group-hover:w-full transition-[width] ease-in-out duration-300
            ${currentPath === href ? 'w-full' : 'w-0'}`}></span>
        </Link>
    );
}

export default CustomLink;