/**
 * Number types mini-challenge 10 10.2
 * write a function that will only accept numbers and attend to all TypeScript weakness flags.
 * :number
 */

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement

const reviews = [
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

const totalNumberOfReviews = (a:number)=>{
   reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()}`
}

totalNumberOfReviews(reviews.length)