import { Env } from "../env"
import { appendReport } from "../errors"
import { Exp, formatExp } from "../exp"
import { Mod } from "../mod"
// import { findDefinitionOrFail } from "../mod"
import { Value } from "../value"
import { evaluateBlock } from "./evaluateBlock"
// import { evaluateDefinition } from "./evaluateDefinition"

export interface EvaluateOptions {
  //
}

export function evaluate(
  mod: Mod,
  env: Env,
  exp: Exp,
  options: EvaluateOptions,
): Array<Value> {
  try {
    switch (exp["@kind"]) {
      case "Var": {
        const found = env.locals.get(exp.name)
        if (found !== undefined) {
          env.locals.delete(exp.name)
          return [found]
        } else {
          throw new Error("TODO")
          // const definition = findDefinitionOrFail(mod, exp.name)
          // const value = evaluateDefinition(env, definition, options)
          // return [value]
        }
      }

      case "Block": {
        return evaluateBlock(mod, env, exp.body, options)
      }
    }
  } catch (error) {
    throw appendReport(error, {
      message: [
        `[evaluate] I fail to evaluate an exp.`,
        ``,
        `  exp: ${formatExp(exp)}`,
      ].join("\n"),
      context: {
        span: exp.span,
        text: mod.text,
      },
    })
  }
}
