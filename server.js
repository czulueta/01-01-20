const express = require("express")
const app = expres()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb:localhost//27017/dbcar",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("connected to the database"))

app.use("/cars", require("./routes/carRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Successfully running on port 9000")
})

