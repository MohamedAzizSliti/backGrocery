const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const ArticleRoute = require("./routes/ArticleRoutes")

dotenv.config();
/* Connect To DB */
mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(() =>
        console.log("DB Connection Successfull !")
        
    ).catch((err) =>
        console.log(err));
app.use(express.json());
app.use(cors())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/article", ArticleRoute);


app.listen(process.env.PORT, () => {
    console.log("backend server is Running! at " + process.env.PORT);
})