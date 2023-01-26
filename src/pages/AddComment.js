import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddCommentStarRating from '../components/comment/AddCommentStarRating'
import Textarea from '../components/forms/textarea/Textarea';
import Input from '../components/forms/textInput/Input';
import Button from '../components/ui/button/Button'
import { sentComment } from '../services/queries';

const AddComment = () => {

    const { user } = useSelector(store => store.user);

    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [dataComment, setDataComment] = useState({
        score: 1,
        title: '',
        comment: ''
    });

    useEffect(() => {
        dataComment?.score === 0 || dataComment?.title === '' || dataComment?.comment === '' ? (
            setDisabled(true)
        ) : (
            setDisabled(false)
        )
    }, [dataComment])

    const sendCommentHandler = () => {
        setLoading(true)
        sentComment({ ...dataComment, creator: user?._id })
            .then(res => {
                toast.success(res?.message)
                setLoading(false)
                setDataComment({ score: 1, title: '', comment: '' })
            }).catch(err => {
                toast.error(err?.response?.data?.message ? err?.response?.data?.message : 'متاسفانه خطایی رخ داده است!')
                setLoading(false)
            })
    }

    return (
        <div className="h-full bg-white flex flex-col justify-between">
            <div className="px-4 flex-grow overflow-hidden overflow-y-auto">
                <div className="pt-4">
                    <p className="text-xs font-bold text-titr">به این اپلیکیشن چه امتیازی می دهید؟</p>
                    <div className="flex justify-center pt-4">
                        <AddCommentStarRating
                            score={dataComment?.score}
                            setScore={(value) => setDataComment({ ...dataComment, score: value })}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <Input
                        value={dataComment?.title}
                        iconName="comment"
                        placeholder="عنوان نظر"
                        rule="required"
                        onChange={e => setDataComment({ ...dataComment, title: e.target.value })}
                    />
                    <div className="pt-4">
                        <Textarea
                            value={dataComment?.comment}
                            iconName="comment"
                            placeholder="متن نظر"
                            rule="required"
                            onChange={e => setDataComment({ ...dataComment, comment: e.target.value })}
                            attributes={{ rows: 8 }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white w-full py-4 px-4 shadow-top">
                <Button
                    title="ثبت نظر"
                    disabled={disabled}
                    loading={loading}
                    onClick={sendCommentHandler}
                />
            </div>
        </div>
    )
}

export default AddComment