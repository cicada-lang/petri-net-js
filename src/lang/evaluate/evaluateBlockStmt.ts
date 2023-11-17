import {
  connectTransitionToInputs,
  connectTransitionToOutputs,
} from "../connect"
import { Env, defineLocals } from "../env"
import { appendReport } from "../errors"
import { BlockStmt } from "../exp/BlockStmt"
import { formatBlockStmt } from "../exp/formatBlockStmt"
import { Mod } from "../mod"
import { addPlace } from "../net"
import { Value, assertValueKind } from "../value"
import { EvaluateOptions } from "./evaluate"
import { evaluateOne } from "./evaluateOne"

// We use `null` to denote that this `BlockStmt`
// should not be viewed as returned results of this block.

export function evaluateBlockStmt(
  mod: Mod,
  env: Env,
  stmt: BlockStmt,
  options: EvaluateOptions,
): Array<Value> | null {
  try {
    switch (stmt["@kind"]) {
      case "Connect": {
        const transition = evaluateOne(mod, env, stmt.transition, options)
        assertValueKind(transition, "Transition")

        const inputArgs = stmt.inputArgs.map((arg) => {
          const place = evaluateOne(mod, env, arg, options)
          assertValueKind(place, "Place")
          return place
        })

        const outputArgs = stmt.outputArgs.map((arg) => {
          const place = evaluateOne(mod, env, arg, options)
          assertValueKind(place, "Place")
          return place
        })

        connectTransitionToInputs(env.net, transition, inputArgs)
        connectTransitionToOutputs(env.net, transition, outputArgs)

        return null
      }

      case "LetPlace": {
        const t = evaluateOne(mod, env, stmt.t, options)
        const place = addPlace(env.net, mod, stmt.name, t)
        defineLocals(env, [stmt.name], [place])
        return null
      }
    }
  } catch (error) {
    throw appendReport(error, {
      message: [
        `[evaluateBlockStmt] I fail to evaluate a block stmt.`,
        ``,
        `  block stmt: ${formatBlockStmt(stmt)}`,
      ].join("\n"),
      context: {
        span: stmt.span,
        text: mod.text,
      },
    })
  }
}
