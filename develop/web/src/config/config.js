const dotenv = require('dotenv')
dotenv.config()

// Gmail oauth
export const clientId = process.env.Client_ID
export const clientSecret = process.env.Client_SECRET

// Application
export const appName = 'gmail-helper'