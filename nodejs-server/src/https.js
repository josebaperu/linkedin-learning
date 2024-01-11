import  { createServer } from "http";


createServer((req, res) => {
res.writeHead(200, {"Content-Type":"text-plain"});
res.end(`
<!DOCTYPE html>
    <html>
        <body>
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
        </body>
    </html>
`);


}).listen(3000);
console.log("server running at port 3000")