import CommentRating from './CommentRating'
import { changeDateToText } from '../../utils/DateFanctions'
import { avatar } from '../../utils/AvatarSet';

const CommentItem = ({ comment }) => {

    // split time and date of created_at
    const splitDate = (data) => {
        const time = data.split(' ')
        return time
    }

    return (
        <li className='py-4 border-b'>
            <div className="flex items-center">
                <div className="w-7 h-7 flex justify-center items-center overflow-hidden border rounded-full">
                    <img src={avatar(comment?.user)} className='w-full h-full rounded-full object-cover' alt="" />
                </div>
                <p className='text-captionDark text-xs font-bold mr-2'>
                    {comment?.user?.firstName + ' ' + comment?.user?.lastName}
                </p>
            </div>
            <div className="flex items-center pt-2">
                <CommentRating score={comment.score} />
                <p className='text-caption text-[10px] font-medium mr-4 pt-0.5'>
                    {changeDateToText(splitDate(comment.created_at)[0])}
                </p>
            </div>
            <div className='pt-4'>
                <p className='text-caption text-xxs font-medium text-justify'>{comment.comment}</p>
            </div>
        </li>
    )
}

export default CommentItem