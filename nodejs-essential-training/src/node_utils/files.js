import { readFile, readFileSync, writeFile ,unlink } from "fs";

readFile("./counter.js", "UTF-8", (error, content) => {
    console.log(content);
})
const fileSyncContent = readFileSync("./counter.js","UTF-8");
console.log(fileSyncContent)

writeFile("dummy.txt", "text", () => {
    console.log("file created success")
})

unlink("dummy.txt",  (err) => {
    if(!err)
        console.log("file created success")
})