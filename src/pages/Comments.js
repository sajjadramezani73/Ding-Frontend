import React, { useEffect, useState } from 'react'
import CommentItem from '../components/comment/CommentItem';
import Button from '../components/ui/button/Button';
import { getComments } from '../services/queries';

const Comments = () => {

    const [comments, setComments] = useState([
        {
            description: "تست نهایی ارسال یک متن نسبتا طولانی تست نهایی ارسال نظر با یک متن نسبتا طولانی",
            created_at: "1401/09/14 09:23:37",
            id: 110,
            score: 4,
            title: "تست نهایی"
        }
    ]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     getComments()
    //         .then(res => {
    //             console.log(res)
    //             setComments(res?.comments)
    //             setLoading(false)
    //         }).catch(err => {
    //             console.log(err);
    //             setLoading(false)
    //         })
    // }, [])


    return (
        <div className="h-full bg-white flex flex-col justify-between">
            {loading ? (
                <div className="px-4">
                    {/* <ItemsPlaceholder />
                    <ItemsPlaceholder />
                    <ItemsPlaceholder />
                    <ItemsPlaceholder />
                    <ItemsPlaceholder />
                    <ItemsPlaceholder /> */}
                    <p>loading</p>
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
                        <Button
                            title="افزودن نظر"
                        // disabled={disabled}
                        // loading={loading}
                        // onClick={() => editUserInfoHandler()}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Comments
