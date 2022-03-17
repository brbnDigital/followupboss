import axios, { AxiosInstance } from "axios"
import { FOLLOWUPBOSS_API_KEY, FOLLOWUPBOSS_SYSTEM_NAME, FOLLOWUPBOSS_SYSTEM_KEY } from "./variables"

if(!FOLLOWUPBOSS_API_KEY) throw new Error("`VITE_FOLLOWUPBOSS_API_KEY` environment variable is missing")
if(!FOLLOWUPBOSS_SYSTEM_NAME) throw new Error("`VITE_FOLLOWUPBOSS_SYSTEM_NAME` environment variable is missing")
if(!FOLLOWUPBOSS_SYSTEM_KEY) throw new Error("`VITE_FOLLOWUPBOSS_SYSTEM_KEY` environment variable is missing")

export const client: AxiosInstance = axios.create({
    baseURL: "https://api.followupboss.com/v1/",
    auth: {
        username: FOLLOWUPBOSS_API_KEY,
        password: ""
    },
    headers: {
        "Accept": "application/json",
        "X-System": FOLLOWUPBOSS_SYSTEM_NAME,
        "X-System-Key": FOLLOWUPBOSS_SYSTEM_KEY
    }
})
