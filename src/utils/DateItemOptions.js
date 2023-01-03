import moment from "jalali-moment";

export const months = [
    { value: 1, text: "فروردین" },
    { value: 2, text: "اردیبهشت" },
    { value: 3, text: "خرداد" },
    { value: 4, text: "تیر" },
    { value: 5, text: "مرداد" },
    { value: 6, text: "شهریور" },
    { value: 7, text: "مهر" },
    { value: 8, text: "آبان" },
    { value: 9, text: "آذر" },
    { value: 10, text: "دی" },
    { value: 11, text: "بهمن" },
    { value: 12, text: "اسفند" },
];

// create days month
export const generateDaysMonth = (daysCount) => {
    let days = [];
    for (var i = 1; i <= daysCount; i++) {
        days = [...days, { value: i, text: i }];
    }
    return days
};

// create years
export const generateYears = () => {
    let m = moment().locale("fa");
    let year = m.format('YYYY');
    let years = [];
    for (var i = +year - 10; i <= +year; i++) {
        years = [...years, { value: i, text: i }];
    }
    return years
};