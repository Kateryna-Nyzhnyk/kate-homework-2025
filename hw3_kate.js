function checkProbabilityTheory(count){
    let evenNumber = 0;
    let oddNumber = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (num % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }

    let evenNumberPercentage = (evenNumber / count * 100).toFixed(2);
    let oddNumberPercentage = (oddNumber / count * 100).toFixed(2);

    console.log(`${count}`)
    console.log(`${evenNumber}`)
    console.log(`${oddNumber}`)
    console.log(`${evenNumberPercentage}% / ${oddNumberPercentage}%`)
}

checkProbabilityTheory(1000)