import Nullpage from '../../components/nullPage/Nullpage';
import ReportItem from '../../components/report/ReportItem';
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const DetailedReports = ({ reports, loading }) => {
    return (
        loading ? (
            <div className='h-full flex justify-center items-center'>
                <LoadSvgIcon name="loading" fill="var(--color-caption)" />
            </div>
        ) : reports?.length > 0 ? (
            reports.map(item => <ReportItem item={item} />)
        ) : (
            <Nullpage />
        )
    )
}

export default DetailedReports