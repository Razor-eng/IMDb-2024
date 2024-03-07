import { IoHomeOutline } from 'react-icons/io5'
import { BsInfoCircle } from 'react-icons/bs'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className="flex gap-4">
                <MenuItem title={"Home"} address={"/"} Icon={IoHomeOutline} />
                <MenuItem title={"About"} address={"/about"} Icon={BsInfoCircle} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link to={"/"} className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
                        IMDb
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header