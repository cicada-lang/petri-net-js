import { Env } from "../env"
import { Mod } from "../mod"
import { Parameter, ParameterExp } from "../parameter"
import { EvaluateOptions } from "./evaluate"
import { evaluate } from "./evaluate"

export function evaluateParameters(
  mod: Mod,
  env: Env,
  parameterExps: Array<ParameterExp>,
  options: EvaluateOptions,
): Array<Parameter> {
  return parameterExps.map(({ name, t }) => ({
    name,
    t: evaluate(mod, env, t, options),
  }))
}
