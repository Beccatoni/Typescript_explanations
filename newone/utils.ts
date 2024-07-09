const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement
const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement


export const totalNumberOfReviews = (a:number, reviewer:string, isLoyal:boolean)=>{
    let iconDisplay = isLoyal? '⭐' : ''
   reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()} | they have been reviewed by ${reviewer} ${iconDisplay}`
}

export  function populateUser(isReturning:boolean, userName:string){
    if(isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML =  userName
}