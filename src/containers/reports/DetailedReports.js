import React from 'react'
import ReportItem from '../../components/report/ReportItem';
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const DetailedReports = ({ reports, loading }) => {
    console.log('loading', loading);
    console.log('reports', reports)
    return (
        loading ? (
            <div className='h-full flex justify-center items-center'>
                <LoadSvgIcon name="loading" fill="var(--color-caption)" />
            </div>
        ) : reports?.length > 0 ? (
            reports.map(item => <ReportItem item={item} />)
        ) : (
            <p>empty</p>
        )
    )
}

export default DetailedReports