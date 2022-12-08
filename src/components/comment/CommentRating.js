import LoadSvgIcon from '../../utils/LoadSvgIcon'

const CommentRating = ({ score }) => {
    return (
        <div className="relative" style={{ width: '65px', height: '13px' }}>
            <span className='flex items-center justify-start absolute top-0 left-0'>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' /></div>
            </span>
            <span className='flex items-center justify-end absolute top-0 left-0 overflow-hidden' style={{ width: `${score * 20}%` }}>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' fill='var(--color-yellowCu)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' fill='var(--color-yellowCu)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' fill='var(--color-yellowCu)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' fill='var(--color-yellowCu)' /></div>
                <div><LoadSvgIcon name='star' size={13} weight={2.3} color='var(--color-caption)' fill='var(--color-yellowCu)' /></div>
            </span>
        </div>
    )
}

export default CommentRating