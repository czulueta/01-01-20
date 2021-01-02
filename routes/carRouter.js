const express = require("express")
const carRouter = express.Router()
const Car = require("../models/car.js")

carRouter.get("/", (req, res, next) => {
    Car.find((err, cars) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cars)
    })
})
carRouter.post("/", (req, res, next) => {
    const newCar = new Car(req.body)
    newCar.save((err, saveCar) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveCar)
    })
})
module.exports = carRouter