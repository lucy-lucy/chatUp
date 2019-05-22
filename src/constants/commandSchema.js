import CompleteCommand from '../components/features/CompleteCommand/CompleteCommand';
import RateCommand from '../components/features/RateCommand/RateCommand';
import DateCommand from '../components/features/DateCommand/DateCommand';
import MapCommand from '../components/features/MapCommand/MapCommand';

export default {
    complete: {
        type: 'complete',
        title: 'Complete this conversation?',
        component: CompleteCommand,
    },
    rate: {
        type: 'rate',
        title: 'Please rate your experience:',
        component: RateCommand,
    },
    date: {
        type: 'date',
        title: 'Pick a date:',
        component: DateCommand,
    },
    map: {
        type: 'map',
        title: 'Here we are:',
        component: MapCommand,
    },
};
