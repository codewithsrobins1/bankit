import { v4 as uuidv4 } from 'uuid';

export const operations = [
    {
        transactionNum: uuidv4(),
        location: 'Starbucks',
        type: 'Credit',
        amount: '$5.00',
        date: `Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)`
    },
    {
        transactionNum: uuidv4(),
        location: 'Tesla',
        type: 'Credit',
        amount: '$500,000.00',
        date: `Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)`
    },
    {
        transactionNum: uuidv4(),
        location: 'Tacobell',
        type: 'Checking',
        amount: '$10.00',
        date: `Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)`
    },
    {
        transactionNum: uuidv4(),
        location: 'Boba',
        type: 'Credit',
        amount: '$5.00',
        date: `Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)`
    },
    {
        transactionNum: uuidv4(),
        location: 'Starbucks',
        type: 'Credit',
        amount: '$5.00',
        date: `Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)`
    }
]