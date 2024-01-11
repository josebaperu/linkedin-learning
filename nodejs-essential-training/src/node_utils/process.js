const questions = [
    "question a","question b","question c"
];

const answers = [];

const ask = (i) => {
    process.stdout.write(`\n\n\ ${questions[i]}`);
    process.stdout.write(' > ');
}
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    }else {
        process.exit();
    }
})

process.on("exit", () => {
   process.stdout.write("\n\n\n\n");
   process.stdout.write(`answers are :  ${answers[0]} ${answers[1]} and ${answers[2]}`);
});
ask(answers.length);