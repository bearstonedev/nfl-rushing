import { config } from "dotenv"

config()

if (!process.env.PORT) {
    console.log("No port specified. The port number must be provided in a .env file in the project root.")
    process.exit(1)
}