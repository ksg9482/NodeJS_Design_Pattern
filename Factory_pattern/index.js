import { createProfiler } from "./factory.profiler.js";

//주어진 수의 모든 인자를 계산하는 알고리즘.
function getAllFactors(intNumber) {
    const profiler = createProfiler(
        `Finding all factors of ${intNumber}`
    );
    profiler.start();

    const factors = [];
    for(let factor = 2; factor <= intNumber; factor++) {
        while((intNumber % factor) === 0) {
            factors.push(factor);
            intNumber = intNumber / factor
        };
    };
    profiler.end();

    return factors;
};

const myNumber = process.argv[2];
const myFactors = getAllFactors(myNumber);

console.log(`Factor of ${myNumber} are: `, myFactors)