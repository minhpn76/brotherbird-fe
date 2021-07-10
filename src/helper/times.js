import moment from "moment";
const months = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12 : "December",
}

const getDaysInMonth = (month, year) => (new Array(31)).fill('').map((v,i)=>new Date(year,month-1,i+1)).filter(v=>v.getMonth()===month-1)

export const getNearYears = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const prevMonth = now.getMonth() === 0 ? 12 : now.getMonth();
    const prevDateTime = `${months[prevMonth]} ${currentYear}`;
    const currentDateTime = `${months[currentMonth]} ${currentYear}`;
    const resps = [
        { 
            value: moment(currentDateTime).format('MM-YYYY'), 
            label: currentDateTime, 
            dayInMonth: getDaysInMonth(currentMonth, currentYear).length,
            path: `${months[currentMonth]}-${currentYear}`.toLowerCase(),
            month: months[currentMonth],
            year: currentYear
        },
        { 
            value: moment(prevDateTime).format('MM-YYYY'), 
            label: prevDateTime, 
            dayInMonth: Math.round(getDaysInMonth(prevMonth, currentYear).length/ 2),
            path: `${months[prevMonth]}-${currentYear}`.toLowerCase(),
            month: months[prevMonth],
            year: currentYear,
        }
    ]
    return resps;
}

export const getDateFromDay = ({
    day, month, year
}) => {
    const stringDate = `${day}-${month}-${year}`
    const dayWeek = moment(stringDate).format('ddd');
    const monthYear = moment(stringDate).format('MMM');
    return {
        day: dayWeek,
        month: monthYear,
        year
    };
}
