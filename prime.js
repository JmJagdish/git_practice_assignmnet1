function checkPrime(number) {
    let factors=0;
    for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
        factors++;
    }
        }

        if (factors === 2) {
            return true;
        }
      
    }
        let answer = checkPrime(13);
        if (answer===true) {
            console.log("Prime Number");
        }else{fb
            console.log("Not a Prime Number");
        }
