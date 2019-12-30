const express = require("express")
const routes = require("./routes")
const error = require("./middlewares/error")

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use("/api", routes, error)
  }
}

module.exports = new App().server
