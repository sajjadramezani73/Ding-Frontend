import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const SidebarLinkItem = ({ item }) => {

    const { user } = useSelector(store => store.user);

    return (
        <Link to={`${item?.href}/${user?._id}`}>
            <div className="flex items-center py-2 mb-1">
                <span>
                    <LoadSvgIcon name={item.icon} fill="var(--color-body)" color="#ffffff" size={20} />
                </span>
                <p className='text-tiny font-bold text-body mr-1 pt-1'>{item.title}</p>
            </div>
        </Link>
    )
}

export default SidebarLinkItem