import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react'
import React from 'react'

const DarkModeSwitch = () => {
    const { colorMode, setColorMode } = useColorMode();

    return (
        <div>
            {
                colorMode === "dark" ?
                    <SunIcon className='text-xl cursor-pointer hover:text-amber-500 transition-all duration-200' onClick={() => setColorMode('light')} />
                    :
                    <MoonIcon className='text-xl cursor-pointer hover:text-amber-500 transition-all duration-200' onClick={() => setColorMode('dark')} />
            }
        </div>
    )
}

export default DarkModeSwitch