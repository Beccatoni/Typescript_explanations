// Object types challenge
// Based on what you've learnt we need to make up our property Objects and array,
// can you create that array, making sure to assign the correct Types?

//2. add the properties to the Dashboard
// this is a continuation of the challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array

const propertyContainer = document.querySelector(".properties")!
const footer = document.querySelector(".footer")!
const reviewContainer = document.querySelector('.reviews')
import { LoyaltyUser, Permissions } from './enums.js'
import {totalNumberOfReviews, populateUser, getTopTwoReviews} from './utils.js'
import { Price,  Country} from './aliases.js'
let isLoggedIn : boolean

// reviews
const reviews :any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 5,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    }
]

// User
const you : {
    firstName:string;
    isReturning: boolean;
    age: number;
    lastName: string;
     stayedAt: string [];
     permissions: Permissions
} = {
    firstName:'Becca',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning : true,
    age: 35,
    stayedAt: []
}


// properties
const properties:{
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
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
        country: 'Colombia'
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
            country: 'Poland'
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
                country: 'Rwanda'
            },
            contact: [+24397436457484, 'bebi@gmail.com'],
            isAvailable: true
            }
]



totalNumberOfReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)






// union type
let authorityStatus : any
isLoggedIn = true

function showDetails(authorityStatus:boolean| Permissions, element: HTMLDivElement, price:number){
   if(authorityStatus){
    const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    
   }
}
// add the properties

for(let i = 0; i< properties.length; i++){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);

    card.appendChild(image)
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, properties[i].price)
}


const container = document.querySelector('.container')!
const button = document.querySelector('button');
//  broken code
let count = 0
function addReviews(array:{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]) : void {
    if(!count){
        count ++
        const topTwo = getTopTwoReviews(array)
        card.classList.add('review-card')
        card.innerHTML = `${topTwo[i].stars} stars from ${topTwo[i].name}`
        reviewContainer.appendChild(card)
    }
    container.removeChild(button)
}

button?.addEventListener('click', ()=> {
    addReviews(reviews)
})


// footer
// use your location, current time, the current temperature of location
let time = new Date
let currentLocation = ['Nyarutarama', `${time.getHours()}:${time.getMinutes()}`, 25 ]

footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`
