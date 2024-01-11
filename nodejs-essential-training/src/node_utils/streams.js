import { createReadStream,  } from "fs";

let stream = createReadStream("./counter.js", "UTF-8");

stream.once("data", stream => {
    console.log("====")
    console.log(stream)
    console.log("====")
})