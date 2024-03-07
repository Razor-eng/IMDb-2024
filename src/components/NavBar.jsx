import { useColorMode } from '@chakra-ui/react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const { colorMode } = useColorMode();
    return (
        <div className={`flex ${colorMode === "light" ? "bg-gray-300" : "bg-gray-600"} p-4 lg:text-lg justify-center gap-8`}>
            <NavbarItem title={"Trending"} path={"/"} />
            <NavbarItem title={"Top Rated"} path={"/topRated"} />
        </div>
    )
}

export default Navbar