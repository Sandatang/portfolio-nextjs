const Footer = () => {
    const currentDate = new Date()
    return (
        <footer className="w-full border-t border-slate-700">
            <div className="h-full w-full inline-block py-5 z-0">
                <span className="flex justify-center text-slate-500 text-sm font-medium">{currentDate.getFullYear()} &copy; All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;