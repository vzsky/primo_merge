import * as readline from 'readline'
import { merge } from './src/merge'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = () => new Promise((res, rej) => {
  rl.question("collection 1: > ", (str) => {
    let a = str.trim().split(' ').map(s => s.trim()).map(s => parseInt(s)).filter((s) => !Number.isNaN(s))
    rl.question("collection 2: > ", (str) => {
      let b = str.trim().split(' ').map(s => s.trim()).map(s => parseInt(s)).filter((s) => !Number.isNaN(s))
      console.log("merge")
      console.log("collection_1: ", a)
      console.log("collection_2: ", b)
      console.log("results in: ", merge(a, b))
      res(null)
    })
  })
})

const repl = async () => {while (true) await ask()}

repl()
