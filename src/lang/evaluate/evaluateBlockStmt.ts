import { Env } from "../env"
import { appendReport } from "../errors"
import { BlockStmt } from "../exp/BlockStmt"
import { formatBlockStmt } from "../exp/formatBlockStmt"
import { Mod } from "../mod"
import { Value } from "../value"
import { EvaluateOptions } from "./evaluate"

export function evaluateBlockStmt(
  mod: Mod,
  env: Env,
  stmt: BlockStmt,
  options: EvaluateOptions,
): Array<Value> | null {
  try {
    switch (stmt["@kind"]) {
      case "Connect": {
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
