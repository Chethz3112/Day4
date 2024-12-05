//Write a javascript program to print a first 10 prime numbers//

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function getPrimes(n) {
    const primes = [];
    let num = 2; 
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}


function printPrimeSquares(n) {
    const primes = getPrimes(n);
    primes.forEach(prime => {
        console.log(`Square of ${prime}: ${prime * prime}`);
    });
}


printPrimeSquares(10);
