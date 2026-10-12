
const fs = require("fs");
const http = require("http");
const crypto = require("crypto");

// Zadanie 1

setTimeout(() => console.log("setTimeout"), 0);

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("process.nextTick"));

Promise.resolve().then(() => console.log("Promise.then"));
// Zadanie 2

http.createServer((req, res) => {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;

    res.end(String(a / b));
}).listen(8000);


// Zadanie 3

const pracownicy = JSON.parse(
    fs.readFileSync("employees.json", "utf8")
);

console.log(pracownicy);

pracownicy.push({
    id: 4,
    name: "Kasia"
});

console.log(pracownicy.find(p => p.id === 4));


// Zadanie 4

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update("Hello World", "utf8", "hex");
encrypted += cipher.final("hex");

fs.writeFileSync(
    "encrypted.json",
    JSON.stringify({ encrypted })
);
