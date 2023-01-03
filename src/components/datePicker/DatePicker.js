import { useEffect, useState } from 'react'
import { generateYears, months } from '../../utils/DateItemOptions';
import Picker from "rmc-picker";
import 'rmc-picker/assets/index.css'
import 'rmc-picker/assets/popup.css'

const DatePicker = ({ selectDate }) => {

    const [showPicker, setShowPicker] = useState(false);
    const [values, setValues] = useState({
        month: '10-دی',
        year: 1401,
        months: [],
        years: [],
    });

    useEffect(() => {
        const years = generateYears();
        setValues({ ...values, years, months });
    }, []);

    // set delay for show picker
    useEffect(() => {
        setTimeout(() => {
            setShowPicker(true)
        }, 200);
    }, [values])

    // send month and year after select with date picker
    useEffect(() => {
        let month = { value: values.month.split('-')[0], text: values.month.split('-')[1] }
        selectDate({ month: month, year: values.year })
    }, [values.month, values.year])


    const handleChangeValues = (e, name) => {
        setValues({ ...values, [name]: e });
    };

    return (
        <div className='flex justify-center items-center px-16'>
            <div className="w-1/2">
                <div className="rmc-multi-picker">
                    {showPicker && (
                        <Picker
                            selectedValue={values.month}
                            onValueChange={(e) => handleChangeValues(e, "month")}
                        >
                            {values.months.map(item => {
                                return <Picker.Item key={item.value} value={`${item.value}-${item.text}`}>
                                    {item.text}
                                </Picker.Item>
                            })}
                        </Picker>
                    )}
                </div>
            </div>
            <div className="w-1/2">
                <div className="rmc-multi-picker">
                    {showPicker && (
                        <Picker
                            selectedValue={values.year}
                            onValueChange={(e) => handleChangeValues(e, "year")}
                        >
                            {values.years.map((item, index) => {
                                return <Picker.Item key={index} value={item.value}>
                                    {item.value}
                                </Picker.Item>
                            })}
                        </Picker>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DatePicker