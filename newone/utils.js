const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector('#user');
export const totalNumberOfReviews = (a, reviewer, isLoyal) => {
    let iconDisplay = isLoyal ? '⭐' : '';
    reviewTotalDisplay.innerHTML = `Our total reviews are: ${a.toString()} | they have been reviewed by ${reviewer} ${iconDisplay}`;
};
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
