import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentItem from '../components/comment/CommentItem';
import CommentItemShimmer from '../components/comment/CommentItemShimmer';
import Button from '../components/ui/button/Button';
import { getComments } from '../services/queries';

const Comments = () => {

    const { user } = useSelector(store => store.user);

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getComments()
            .then(res => {
                setComments(res?.comments)
                setLoading(false)
            }).catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [])


    return (
        <div className="h-full bg-white flex flex-col justify-between">
            {loading ? (
                <div className="px-4">
                    <CommentItemShimmer />
                    <CommentItemShimmer />
                    <CommentItemShimmer />
                    <CommentItemShimmer />
                </div>
            ) : (
                <>
                    <ul className="px-4 flex-grow overflow-hidden overflow-y-auto">
                        {comments?.length > 0 ? (
                            comments?.map((comment) => {
                                return (
                                    <CommentItem key={comment.id} comment={comment} />
                                )
                            })
                        ) : (
                            <li className="text-center text-primary text-sm mt-10">
                                {/* {comments?.data?.user_message} */}
                            </li>
                        )}
                    </ul>
                    <div className="flex justify-center bg-white w-full py-4 px-4 shadow-top">
                        <Link to={`/home/add-comment/${user?._id}?title=ارسال نظر`} className='w-full'>
                            <Button
                                title="افزودن نظر"
                            />
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Comments
