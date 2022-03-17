"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOLLOWUPBOSS_SYSTEM_KEY = exports.FOLLOWUPBOSS_SYSTEM_NAME = exports.FOLLOWUPBOSS_API_KEY = void 0;
require("dotenv/config");
exports.FOLLOWUPBOSS_API_KEY = process.env.VITE_FOLLOWUPBOSS_API_KEY ?? undefined;
exports.FOLLOWUPBOSS_SYSTEM_NAME = process.env.VITE_FOLLOWUPBOSS_SYSTEM_NAME ?? undefined;
exports.FOLLOWUPBOSS_SYSTEM_KEY = process.env.VITE_FOLLOWUPBOSS_SYSTEM_KEY ?? undefined;
