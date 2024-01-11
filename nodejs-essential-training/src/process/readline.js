import { createInterface } from "readline";

const rl = createInterface({
    input : process.stdin,
    output: process.stdin
});

rl.question("how old are you ?" , ans => {
    console.log(`Your age is ${ans}`);
})