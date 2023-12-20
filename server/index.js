
require('dotenv').config();
const http = require("http");
const connectDb = require("./src/db/connectDB");
const app = require('./src/server');


const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
    await connectDb();
    server.listen(port, () => {
        console.log("Listening on port " + port);
    })
}

main();
