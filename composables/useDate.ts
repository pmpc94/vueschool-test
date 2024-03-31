export const useDate = (timestamp: number) => {

    const getFullDate = computed(() => {
        const date = new Date(timestamp)

        const day = date.getDay()
        const month = date.toLocaleString('default', { month: 'long' }).slice(0,3);
        const year = date.getFullYear()

        return month + ' ' + day + ', ' + year
    })

    const elapsedTime = computed(() => {
        const startDate = new Date(timestamp);
        const endDate = Date.now(); // Current date and time in milliseconds

        const elapsedTime = endDate - startDate;

        const elapsedHours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const elapsedMonths = Math.floor(elapsedDays / 30);
        const elapsedYears = Math.floor(elapsedDays / 365);

        if (elapsedHours < 24) {
            return [elapsedHours, `hour${elapsedHours > 1 ? 's' : ''}`]
        } else if (elapsedDays < 31) {
            return [elapsedDays, `day${elapsedDays > 1 ? 's' : ''}`]
        } else if (elapsedMonths < 12) {
            return [elapsedMonths, `month${elapsedMonths > 1 ? 's' : ''}`]
        }
        return [elapsedYears, `year${elapsedYears > 1 ? 's' : ''}`]
    })
    return {
        elapsedTime,
        getFullDate
    }
}
