import moment from "jalali-moment"

// remove second from time
export const removeSecondFromTime = (time) => {
    let m = moment.from(time, 'fa', 'HH:mm:ss')
    return m.locale('fa').format('HH:mm')
}

// convert date to text day
export const changeDateToDay = (date) => {
    let m = moment.from(date, 'fa', 'YYYY/MM/DD')
    return m.locale('fa').format('dddd')
}

// convert number month to text month
export const changeDateToTextMonth = (date) => {
    let m = moment.from(date, 'fa', 'YYYY/MM/DD')
    return m.locale('fa').format('D MMMM YYYY')
}

// remove second from time
export const removeSecondFromTimeWithEmptyString = (time) => {
    if (time) {
        let m = moment.from(time, 'fa', 'HH:mm:ss')
        return m.locale('fa').format('HH:mm')
    } else {
        return '----'
    }
}

// convert number month to text month
export const changeDateToText = (date) => {
    let m = moment.from(date, 'fa', 'YYYY/MM/DD')
    return m.locale('fa').format('D MMMM YYYY')
}