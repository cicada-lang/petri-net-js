import { appendReport } from "../errors"
import { EvaluateOptions, evaluateBlock, evaluateParameters } from "../evaluate"
import { Mod, define } from "../mod"
import { Stmt } from "../stmt"

// We return `null` to late the type checker catch the uncovered switch cases.

export async function execute(mod: Mod, stmt: Stmt): Promise<null> {
  try {
    const options: EvaluateOptions = {}

    switch (stmt["@kind"]) {
      case "DefineTransition": {
        const inputParameters = evaluateParameters(
          mod,
          mod.env,
          stmt.inputParameters,
          options,
        )
        const outputParameters = evaluateParameters(
          mod,
          mod.env,
          stmt.outputParameters,
          options,
        )
        define(mod, stmt.name, {
          "@type": "Definition",
          "@kind": "TransitionDefinition",
          mod,
          name: stmt.name,
          inputParameters,
          outputParameters,
          span: stmt.span,
          body: stmt.body,
        })
        return null
      }

      case "Begin": {
        evaluateBlock(mod, mod.env, stmt.body, options)
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
