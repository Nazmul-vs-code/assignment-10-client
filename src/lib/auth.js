import dns from "node:dns";
dns.setServers(["1.1.1.1", "1.0.0.1"]);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("tech-bazaar");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  // These move OUT of the database object and into the main config
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: { defaultValue: "buyer" },
      plan: { defaultValue: "free" },
      status: { defaultValue: "active" },
      phone: { type: "string", required: false, defaultValue: "01111", input: true },
      location: { type: "string", required: false, input: true },
      photo: { type: "string", required: false, input: true },
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 60 * 24 * 60,
    },
  },

  plugins: [jwt()],
});