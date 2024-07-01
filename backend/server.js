const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const {PORT} = require("./config/env.js");
const cors = require('cors');
const { use } = require("./app");
app.use(cors())
app.options('*',cors())

// app.use(cors({
//     allowedHeaders:['authorization','content-type'],
//     exposedHeaders:['authorization','content-type'],
//     origin:'*',
//     methods:['GET,HEAD,PUT,POST,PATCH,DELETE'],
//     preflightContinue:false
// }))

app.options((req, res, next) => {
    res.setHeader("Access-control-Allow-Origin", "*")
    res.setHeader("Access-control-Allow-Methods","*")
    res.setHeader("Access-control-Allow-Headers", "*")
    res.end()
});

dotenv.config({path:"backend/config/config.env"});

// connect to database
connectDatabase();

const server = app.listen(PORT, () => {

    console.log(`Server is working on http://localhost:${PORT}`);
  });


  // unhandled Promise rejection

  process.on("unhandledRejection", (err) => {
    console.log(`Error ->  ${err.message}`);
    console.log("Closing the server due to unhandled Rejection")
  
    server.close(() => {
      process.exit(1);
    })
  })
