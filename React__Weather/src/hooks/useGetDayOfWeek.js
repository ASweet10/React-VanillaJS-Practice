const getDayOfWeek = () => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayOfWeek = new Date().getDay() // getDay returns day of week 0-6; Sunday-Saturday
    return weekdays[dayOfWeek]
    console.log(weekdays[dayOfWeek])
}