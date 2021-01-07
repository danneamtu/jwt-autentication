import express from "express"
const startServer = () => {
  const app = express()
  app.listen({ port: 5000 }, () => console.log("server ready"))
}

startServer()
