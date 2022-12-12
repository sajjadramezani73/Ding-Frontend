import React, { useEffect, useState } from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon';

const AddCommentStarRating = ({ score, setScore }) => {
    const [rating, setRating] = useState(score);

    useEffect(() => {
        setRating(score)
    }, [score])

    const handleScore = (index) => {
        setScore(index)
    }

    return (
        <div className="star-rating ltr">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className="mx-2"
                        onClick={() => handleScore(index)}
                    >
                        <LoadSvgIcon
                            name="star"
                            size={35}
                            color={`${index <= rating ? "var(--color-yellowCu)" : "var(--color-caption)"}`}
                            fill={`${index <= rating ? "var(--color-yellowCu)" : "none"}`}
                        />
                        <p className='text-xxs mt-1'>{index}</p>
                    </button>
                );
            })}
        </div>
    )
}

export default AddCommentStarRating