import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useColorMode } from '@chakra-ui/react';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/:${search}`);
    }
    const searchPage = (val) => {
        navigate(`/search/:${val}`);
    }
    const location = useLocation();
    useEffect(() => {
        if (!location.pathname.includes('/search/')) {
            setSearch('');
        }
    }, [location])

    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Search Movie...'
                className={`w-full h-14 rounded-md placeholder-gray-400 outline-none bg-transparent flex-1 border-b-2 ${colorMode === "light" ? "border-b-gray-300 focus:border-gray-400" : "border-b-gray-600 focus:border-gray-400"} px-4 font-semibold transition-all delay-200`}
                value={search}
                onChange={(e) => { setSearch(e.target.value); searchPage(e.target.value) }}
            />
            <button className='text-amber-600 disabled:text-gray-500' disabled={search === ''}>
                Search
            </button>
        </form>
    )
}

export default SearchBar