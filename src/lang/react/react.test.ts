import { test } from "vitest"
import { createNet } from "../net"
import { react } from "./react"

test("react", async () => {
  const net = createNet()
  react(net)
})
