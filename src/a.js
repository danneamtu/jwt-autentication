import dotenv from "dotenv"
dotenv.config()
const { PORT, DB_USER, DB_PASSWORD, DB_ENDPOINT, DB_NAME } = process.env
console.log("DB_USER", DB_USER)
