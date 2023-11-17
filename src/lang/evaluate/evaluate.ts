import { Env } from "../env"
import { appendReport } from "../errors"
import { Exp, formatExp } from "../exp"
import { Mod, findDefinitionOrFail } from "../mod"
import { Value } from "../value"
import { evaluateBlock } from "./evaluateBlock"
import { evaluateDefinition } from "./evaluateDefinition"

// `EvaluateOptions` can be used to denote different modes of evaluation.

export interface EvaluateOptions {
  //
}

// We return `Array<Value>` to handle possible multiple return values.

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
          const definition = findDefinitionOrFail(mod, exp.name)
          const value = evaluateDefinition(env, definition, options)
          return [value]
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
