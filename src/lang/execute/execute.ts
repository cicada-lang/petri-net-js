import { checkFunction } from "../check/checkFunction"
import { appendReport } from "../errors"
import { evaluate, evaluateOne, evaluateParameters } from "../evaluate"
import { Mod, define } from "../mod"
import { Stmt } from "../stmt"

export async function execute(mod: Mod, stmt: Stmt): Promise<null> {
  try {
    switch (stmt["@kind"]) {
      case "DefineTransition": {
        console.log("[execute / DefineTransition] TODO")
        return null
      }

      case "Begin": {
        console.log("[execute / Begin] TODO")
        return null
      }
    }
  } catch (error) {
    throw appendReport(error, {
      message: [`[execute] I fail to execute a statement.`].join("\n"),
      context: {
        span: stmt.span,
        text: mod.text,
      },
    })
  }
}
