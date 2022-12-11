import React from 'react'

const CommentItemShimmer = () => {
    return (
        <div className='py-4 border-b'>
            <div className="flex items-center">
                <div className="w-7 h-7 border rounded-full bg-gray-100 animate-pulse"></div>
                <div className='h-[18px] w-28 bg-gray-100 rounded-sm mr-2 animate-pulse'></div>
            </div>
            <div className="flex items-center pt-2">
                <div className='w-16 h-4 bg-gray-100 rounded-sm animate-pulse'></div>
                <div className='w-14 h-4 bg-gray-100 rounded-sm mr-4 animate-pulse'></div>
            </div>
            <div className='pt-4'>
                <div className='h-[18px] w-fulll bg-gray-100 rounded-sm animate-pulse'></div>
            </div>
        </div>
    )
}

export default CommentItemShimmer