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

export const getNearYears = () => {
    const now = new Date();
    const currentMonth = (now.getMonth()+1)%12;
    const currentYear = now.getFullYear();
    const prevMonth = (now.getMonth()-1)%12 + 1;
    const prevDateTime = `${months[prevMonth]} ${currentYear}`;
    const currentDateTime = `${months[currentMonth]} ${currentYear}`;
    return [
        { value: moment(prevDateTime).format('MM-YYYY'), label: prevDateTime},
        { value: moment(currentDateTime).format('MM-YYYY'), label: currentDateTime}
    ]
}