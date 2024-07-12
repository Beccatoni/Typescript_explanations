const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
import { LoyaltyUser } from "./enums.js"

export const totalNumberOfReviews = (a:number, reviewer:string, isLoyal:LoyaltyUser)=>{
    let iconDisplay = LoyaltyUser.GOLD_USER? '⭐' : ''
   reviewTotalDisplay.innerHTML = `${a.toString()} ${makeMultiple(a)} | last reviewed by ${reviewer} ${iconDisplay}`
}

export  function populateUser(isReturning:boolean, userName:string){
    if(isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML =  userName
}



function add(firstValue: number, secondValue: number):number{
    
    return firstValue + secondValue
}

const combinedReviews = add(5,1)
// const firstNameLastName = add('Becca', 'Toni')

export function makeMultiple(value:number){
   return value > 1 || value == 0? `Reviews`: `Review`
}


const reviews :{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;

}[] = [
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

// Broken code

export function getTopTwoReviews(reviews: {
    name: string;
    stars:number;
    loyaltyUser: LoyaltyUser;
    date: string

}[]): {
    name: string;
    stars:number;
    loyaltyUser: LoyaltyUser;
    date: string

}[] {
const sortedReviews = reviews.sort((a,b) => b.stars - a.stars)
return sortedReviews.slice(0,2)
}