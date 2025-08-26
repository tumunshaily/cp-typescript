import fs from 'fs'

export default fs.readFileSync("./utils/input.txt", "utf8").trim().split("\n");