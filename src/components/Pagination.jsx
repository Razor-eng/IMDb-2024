import { useColorMode } from '@chakra-ui/react';
import React from 'react'

function Pagination(props) {
    let { pageNum, onNext, onPrev } = props;
    const { colorMode } = useColorMode()

    return (
        <div className={`flex justify-center w-full my-4 ${colorMode === "light" ? "text-gray-600" : "text-gray-400"}`}>
            <div className='w-fit flex border-2 rounded-3xl'>
                <button
                    className='p-2 rounded-l-3xl cursor-pointer w-20 text-center hover:bg-amber-500 hover:text-gray-800'
                    onClick={onPrev}
                >
                    Previous
                </button>
                <div
                    className="border-2 p-2 border-t-0 border-b-0 border-gray-400"
                >
                    {pageNum}
                </div>
                <button
                    className="p-2 rounded-r-3xl cursor-pointer w-20 text-center hover:bg-amber-500 hover:text-gray-800"
                    onClick={onNext}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination;