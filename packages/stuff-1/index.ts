import { test } from "@rdevlab/stuff-2"
import { z } from "zod"

export function add() {
  return 1 + 1
}

export function parse() {
  console.log("sd")
  return z.object({})
}

test()
