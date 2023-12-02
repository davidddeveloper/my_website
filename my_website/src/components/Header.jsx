import React from 'react'
import {Link} from 'react-router-dom'
export default function Header(props)
{
    const mobileMenu = React.useRef();
    const [menuVisible, isMenuVisible] = React.useState(false);
    const toggleMenu = () => {
        isMenuVisible(!menuVisible);
    }

    {/*const handleClickOutside = (event) => {
        if (mobileMenu.current.contains(event.target) == true) {
            isMenuVisible(false);

        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    }, [])*/}
    
    return (
        <header className="container isolate mx-auto relative mt-smlTwo flex justify-between items-center text-base z-50 p-5">
            <h1><a href="https://github.com/davidddeveloper" target="_blank">@davidddeveloper</a></h1>
            {/* <!-- desktop nav --> */}
            <nav className="hidden tb:block">
                <ul className="flex gap-5">
                    <li><Link to="/blogs"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">Blogs</Link>
                    </li>
                    <li><Link to="/my work"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">My
                            work</Link></li>
                    <li><Link to="/resume"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">Resume</Link>
                    </li>
                </ul>
            </nav>
            {/*<!-- Mobile -->*/}
            <button onClick={toggleMenu} className={"hamburger-menu flex flex-col gap-1 tb:hidden" + (menuVisible ? " animate-menu": "")}>
                <div className="line-1 w-2 h-0 border border-gray transition-all"></div>
                <div className="line-2 w-4 h-0 border border-gray transition-all"></div>
                <div className="line-3 w-2 h-0 border border-gray transition-all self-end"></div>
            </button>
            <nav
            ref={mobileMenu}
                className={"mb-menu container overflow-hidden absolute inset-0 self-baseline mt-12 p-5 z-0 h-0 opacity-0 bg-darkBlue border-gray shadow-lg rounded-sm transition-all mb:mx-auto tb:hidden" + (menuVisible ? " show" : "")}>
                <ul className="hidden flex-col gap-5">
                    <li><Link to="/blogs"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">Blogs</Link>
                    </li>
                    <li><Link to="/my work"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">My
                            work</Link></li>
                    <li><Link to="/resume"
                            className="flex flex-col pb-2 after:transition-all relative after:contents after:absolute after:bottom-0 after:w-0 after:border-b-2 after:border-gray after:border-solid hover:after:w-full">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}