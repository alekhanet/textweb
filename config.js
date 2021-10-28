var env = process.env.NODE_ENV || "development"

export const HOSTNAME = env === "development" ? "localhost:3000" : "textweb.app"
