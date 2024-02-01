
const getDaysFromDates = (date1, date2) => {
    const initialDate = new Date (date1) 
    const finalDate = new Date (date2)

    const diferrenceMs = finalDate.getTime() - initialDate.getTime()
    const differencesDays = diferrenceMs / (1000 * 60 * 60 * 24);
    return differencesDays + 1;

}

export default getDaysFromDates
