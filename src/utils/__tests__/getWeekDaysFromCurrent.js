import getWeekDaysFromCurrent, { weekDays } from '../getWeekDaysFromCurrent';

describe('getWeekDaysFromCurrent', () => {
    it('returns week days starting and including the supplying date', () => {
        const wednesday = '2019-05-22T16:05:41.339Z';

        expect(getWeekDaysFromCurrent(wednesday)).toEqual(['Wednesday', 'Thursday', 'Friday', 'Monday', 'Tuesday']);
    });

    it('returns week days starting with first week day in case of weekend', () => {
        const saturday = '2019-05-25T16:05:41.339Z';
        const sunday = '2019-05-26T16:05:41.339Z';

        expect(getWeekDaysFromCurrent(saturday)).toEqual(weekDays);
        expect(getWeekDaysFromCurrent(sunday)).toEqual(weekDays);
    })

    it('returns week days starting with first week day in case of empty date', () => {
        expect(getWeekDaysFromCurrent('')).toEqual(weekDays);
        expect(getWeekDaysFromCurrent(undefined)).toEqual(weekDays);
    });

})