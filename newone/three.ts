// Object types challenge
// Based on what you've learnt we need to make up our property Objects and array,
// can you create that array, making sure to assign the correct Types?

import {totalNumberOfReviews, populateUser} from './utils'
let isOpen : boolean

// reviews
const reviews1 : {
    name:string;
    stars: number;
    loyaltyUser: boolean;
    date: string
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 5,
        loyaltyUser: true,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    }
]

// User
const you : {
    firstName:string;
    isReturning: boolean;
    age: number;
    lastName: string;
     stayedAt: string []
} = {
    firstName:'Becca',
    lastName: 'Brown',
    isReturning : true,
    age: 35,
    stayedAt: []
}
// properties
const properties:{
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string
    };
    contact: string;
    isAvailable: boolean
}[] = [
    {
    image: "img",
    title: "colombian shack",
    price: 45,
    location: {
        firstLine: 'shack 38',
        city: 'Kgl',
        code: 4545,
        country: ''
    },
    contact: 'jello@gmail.com',
    isAvailable: true
    },

    {
        image: "img",
        title: "colombian shack",
        price: 20,
        location: {
            firstLine: 'shack 38',
            city: 'Amsterdam',
            code: 4682,
            country: ''
        },
        contact: 'treasure@gmail.com',
        isAvailable: false
        }
]


totalNumberOfReviews(reviews1.length, reviews1[0].name, reviews1[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)