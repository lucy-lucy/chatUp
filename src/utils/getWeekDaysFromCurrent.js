const SUNDAY_INDEX = 0;
const MONDAY_INDEX = 1;
const SATURDAY_INDEX = 6;

export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

/**
 *  Returns week days starting and including the supplying date
 * @param {string} currentDate - current date
 * @returns {Array}
 */
const getWeekDaysFromCurrent = (currentDate) => {
    let dayIndex = new Date(currentDate).getDay();

    if (dayIndex === SUNDAY_INDEX || dayIndex === SATURDAY_INDEX) {
        dayIndex = MONDAY_INDEX;
    }

    const currentDateIndex = dayIndex - 1;

    const start = weekDays.slice(currentDateIndex);
    const end = weekDays.slice(0, currentDateIndex);
    
    return start.concat(end);
};

export default getWeekDaysFromCurrent;