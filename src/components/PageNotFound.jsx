import React from 'react'

function PageNotFound() {
    return (
        <div className="text-center mt-20">
            <h1 className='text-3xl text-gray-500'>Something went wrong. Please try again later.</h1>
            <button onClick={() => window.location.reload()} className="hover:text-amber-600 mt-12">
                Try Again
            </button>
        </div>
    )
}

export default PageNotFound