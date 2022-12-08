import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import CommentRating from './CommentRating'

const CommentItem = ({ comment }) => {
    return (
        <li className='py-4 border-b'>
            <div className="flex items-center">
                <div className="w-7 h-7 flex justify-center items-center overflow-hidden border rounded-full">
                    {comment?.user == null ? (
                        <span className='pt-1.5'>
                            <LoadSvgIcon name="user" size={25} weight="0.5" />
                        </span>
                    ) : (
                        comment?.user?.avatar !== '' ? (
                            <img src={comment?.user?.avatar} className='w-full h-full rounded-full object-cover' alt="" />
                        ) : (
                            <span className='pt-1.5'>
                                <LoadSvgIcon name="user" size={25} weight="0.5" />
                            </span>
                        )
                    )}
                </div>
                <p className='text-captionDark text-xs font-bold mr-2 pt-0.5'>
                    {comment?.user == null ? (
                        'کاربر ناشناس'
                    ) : (
                        comment?.user?.firstName + ' ' + comment?.user?.lastName
                    )}
                </p>
            </div>
            <div className="flex items-center pt-2">
                <CommentRating score={comment.score} />
                <p className='text-caption text-[10px] font-medium mr-4 pt-0.5'>
                    {/* {changeDateToText(splitDate(comment.created_at)[0])} */}
                    17 آذر 1401
                </p>
            </div>
            <div className='pt-4'>
                <p className='text-caption text-xs font-medium text-justify'>{comment.description}</p>
            </div>
        </li>
    )
}

export default CommentItem