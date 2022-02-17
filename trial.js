import crypto from "crypto";

const token = crypto.randomBytes(80).toString("hex");

console.log(token);
