import { Env } from "../env"
import { appendReport } from "../errors"
import { BlockStmt } from "../exp/BlockStmt"
import { formatBlockStmt } from "../exp/formatBlockStmt"
import { Mod } from "../mod"
import { Value } from "../value"
import { EvaluateOptions } from "./evaluate"
import { evaluateOne } from "./evaluateOne"

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
        const inputArgs = stmt.inputArgs.map((arg) =>
          evaluateOne(mod, env, arg, options),
        )
        const outputArgs = stmt.outputArgs.map((arg) =>
          evaluateOne(mod, env, arg, options),
        )
        throw new Error("TODO")
      }

      case "LetPlace": {
        throw new Error("TODO")
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
