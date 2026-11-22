// Header Function

export default function Header() {
   
    return (

    <header className="sticky top-0 z-50 bg-neutral-900 text-white px-[5%] py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-extrabold text-red-600 tracking-wider">GT-R Legacy</div>
        <nav>
            <ul className="flex gap-6">
                <li><a href="#about" className="text-white hover:text-red-600 font-medium transition-colors">About</a></li>
                <li><a href="#feature" className="text-white hover:text-red-600 font-medium transition-colors">Feature</a></li>
                <li><a href="#gallery" className="text-white hover:text-red-600 font-medium transition-colors">Gallery</a></li>
            </ul>
        </nav>
    </header>

    );

}


