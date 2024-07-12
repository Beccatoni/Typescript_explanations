import { LoyaltyUser } from "./enums";
import { totalNumberOfReviews, populateUser } from "./utils";
// /**
//  * Number types mini-challenge 10 10.2
//  * write a function that will only accept numbers and attend to all TypeScript weakness flags.
//  * :number
//  */
// const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 5,
//         loyaltyUser: true,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     }
// ]
// const totalNumberOfReviews = (a:number)=>{
//    reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()}`
// }
// totalNumberOfReviews(reviews.length)
/**
 * Number types mini-challenge 10 10.2
 * write a function that will only accept numbers and attend to all TypeScript weakness flags.
 * :number
 */
/**
 * String Types mini-challenge
 * Write a function that will display the most recent reviewers name next to the review total,
 * making sure to assign a type to the parameter, to prevent unwanted behaviour.
 * : string
 */
// const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 5,
//         loyaltyUser: true,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     }
// ]
// const totalNumberOfReviews = (a:number, reviewer:string)=>{
//    reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()} | they have been reviewed by ${reviewer}`
// }
// totalNumberOfReviews(reviews.length, reviews[0].name)
// 
/**
 *Boolean Types mini-challenge
 if the last reviewer is a loyalty User, can you add a star to the end of their name?
 please do so in the existing function, and make sure to declare what type of
 parameters the function takes.
 : boolean
 */
// const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 5,
//         loyaltyUser: true,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     }
// ]
// const totalNumberOfReviews = (a:number, reviewer:string, isLoyal:boolean)=>{
//     let iconDisplay = isLoyal? '⭐' : ''
//    reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()} | they have been reviewed by ${reviewer} ${iconDisplay}`
// }
// totalNumberOfReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
// fix code
// const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
// const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement
// const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 5,
//         loyaltyUser: true,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     }
// ]
// const totalNumberOfReviews = (a:number, reviewer:string, isLoyal:boolean)=>{
//     let iconDisplay = isLoyal? '⭐' : ''
//    reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()} | they have been reviewed by ${reviewer} ${iconDisplay}`
// }
// totalNumberOfReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
// const you = {
//     userName: 'Bobby',
//     isReturning: true
// }
// function populateUser(isReturning:boolean, userName:string){
//     if(isReturning){
//         returningUserDisplay.innerHTML = 'back'
//     }
//     userNameDisplay.innerHTML =  userName
// }
// populateUser(you.isReturning, you.userName)
// type assignment and type inference
let isOpen;
// array types mini challenge
/*
 Can you assign the correct Type to the reviews const? Please bear in mind
 everything we have learnt about String, Boolean, Object and Array Types
 for this.
 */
const reviews = [
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
];
totalNumberOfReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
/**
 * Object Types
 * In this scrim, based on what we just learnt,
 * can you change the userName to firstName,
 * then add an age and lastName to the 'you' Object,
 *  making sure to account for it in the Specialized
 * Object for defining its structure
 */
// array types
const you = {
    firstName: 'Bobby',
    isReturning: true,
    age: 25,
    lastName: 'Hernandez',
    stayedAt: ['florida', 'oman-flat', 'Tokyo-bungalow']
};
console.log(you.firstName);
populateUser(you.isReturning, you.firstName);
