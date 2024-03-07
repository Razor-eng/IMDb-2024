import { Link, useLocation } from 'react-router-dom'
// import { thuseSearchParams } from 'next/navigation'

const NavbarItem = ({ title, path }) => {
    const { pathname } = useLocation();
    const genre = pathname

    return (
        <div>
            <Link
                to={`${path}`}
                className={`hover:text-amber-600 font-semibold ${genre === path ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ""}`}
            >
                {title}
            </Link>
        </div>
    )
}

export default NavbarItem