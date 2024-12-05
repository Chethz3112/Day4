/*A company wants to calculate the yearly bonus for its employees based on their years of experience and performance score. The rules are as follows:
If the employee has more than 5 years of experience and a performance score above 8, they get a bonus of 20% of their salary.
If the employee has more than 3 years but less than or equal to 5 years of experience, with a performance score above 7, they get a bonus of 10% of their salary.
For employees with 3 years or less experience, the bonus is 5% of their salary, regardless of their performance score.
What will be the bonus percentage for an employee with 4 years of experience and a performance score of 9?*/


function calculateBonus(experience, performanceScore, salary) {
    let bonusPercentage = 0;

    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20;
    } else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10;
    } else if (experience <= 3) {
        bonusPercentage = 5;
    }

    
    const bonusAmount = (bonusPercentage / 100) * salary;
    
    console.log(`The bonus percentage is: ${bonusPercentage}%`);
    console.log(`The bonus amount is: $${bonusAmount}`);
}


const experience = 4;
const performanceScore = 9;
const salary = 50000; 

calculateBonus(experience, performanceScore, salary);
