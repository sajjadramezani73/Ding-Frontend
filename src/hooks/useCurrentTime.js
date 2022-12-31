import moment from "jalali-moment";
import { useEffect, useState } from "react";

const useCurrentTime = () => {

    const [time, setTime] = useState({
        hour: '--',
        minute: '--',
        second: '--',
        day: '--',
        dayWeek: '--',
        month: '--',
        year: '--'
    });

    useEffect(() => {
        setInterval(() => {
            const dateNow = moment().locale('fa')
            setTime({
                hour: dateNow.format('HH'),
                minute: dateNow.format('mm'),
                second: dateNow.format('ss'),
                day: dateNow.format('DD'),
                dayWeek: dateNow.format('dddd'),
                month: dateNow.format('MMM'),
                year: dateNow.format('YYYY')
            })
        }, 1000);
    })

    return { time }
}

export default useCurrentTime