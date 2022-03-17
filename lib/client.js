"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const axios_1 = __importDefault(require("axios"));
const variables_1 = require("./variables");
if (!variables_1.FOLLOWUPBOSS_API_KEY)
    throw new Error("`VITE_FOLLOWUPBOSS_API_KEY` environment variable is missing");
if (!variables_1.FOLLOWUPBOSS_SYSTEM_NAME)
    throw new Error("`VITE_FOLLOWUPBOSS_SYSTEM_NAME` environment variable is missing");
if (!variables_1.FOLLOWUPBOSS_SYSTEM_KEY)
    throw new Error("`VITE_FOLLOWUPBOSS_SYSTEM_KEY` environment variable is missing");
exports.client = axios_1.default.create({
    baseURL: "https://api.followupboss.com/v1/",
    auth: {
        username: variables_1.FOLLOWUPBOSS_API_KEY,
        password: ""
    },
    headers: {
        "Accept": "application/json",
        "X-System": variables_1.FOLLOWUPBOSS_SYSTEM_NAME,
        "X-System-Key": variables_1.FOLLOWUPBOSS_SYSTEM_KEY
    }
});
