// Object types challenge
// Based on what you've learnt we need to make up our property Objects and array,
// can you create that array, making sure to assign the correct Types?

//2. add the properties to the Dashboard
// this is a continuation of the challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array

const propertyContainer = document.querySelector(".properties")!
const footer = document.querySelector(".footer")!
import {totalNumberOfReviews, populateUser} from './utils.js'
let isOpen : boolean

// reviews
const reviews : {
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
    contact: [number, string];
    isAvailable: boolean
}[] = [
    {
    image: "./images/one.jpg",
    title: "Colombian shack",
    price: 45,
    location: {
        firstLine: 'shack 38',
        city: 'Kgl',
        code: 4545,
        country: ''
    },
    contact: [+24397436457,'jello@gmail.com'],
    isAvailable: true
    },

    {
        image: "./images/two.jpg",
        title: "Musanze ",
        price: 20,
        location: {
            firstLine: 'Musa 38',
            city: 'Ruhengeri',
            code: 4682,
            country: ''
        },
        contact: [+2507888886343,'treasure@gmail.com'],
        isAvailable: false
        }
        , 
        {
            image: "./images/three.jpg",
            title: "Gataraga",
            price: 45,
            location: {
                firstLine: 'Gata 58',
                city: 'Ruhashi',
                code: 4545,
                country: ''
            },
            contact: [+24397436457484, 'bebi@gmail.com'],
            isAvailable: true
            }
]



totalNumberOfReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)


// add the properties

for(let i = 0; i< properties.length; i++){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);

    card.appendChild(image)
    propertyContainer.appendChild(card);
}

// footer
// use your location, current time, the current temperature of location
let time = new Date
time.getHours()
let currentLocation = ['Nyarutarama', time.getHours(), 25 ]

footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`


