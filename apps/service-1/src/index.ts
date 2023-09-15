import { Elysia } from "elysia"
import { AsyncLocalStorage } from "async_hooks"
import { parse } from "@rdevlab/stuff-1"

const asyncLocalStorage = new AsyncLocalStorage()

function logWithId(msg: string) {
  const id = asyncLocalStorage.getStore()
  console.log(`${id !== undefined ? id : "-"}:`, msg)
}

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

let idSeq = 0

async function test(a: string) {
  asyncLocalStorage.run(idSeq++, () => {
    logWithId("start")
    // Imagine any chain of async operations here
    // setImmediate(() => {
    //   logWithId("finish")
    // })

    setTimeout(() => {
      logWithId("finish")
    }, 2_000)
  })
}

parse()
