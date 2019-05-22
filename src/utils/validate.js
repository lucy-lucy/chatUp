// Utils
import isEmpty from '@tinkoff/utils/is/empty';
import trim from '@tinkoff/utils/string/trim';
import compose from '@tinkoff/utils/function/compose';

export const emptyString = compose(
    isEmpty,
    trim
);