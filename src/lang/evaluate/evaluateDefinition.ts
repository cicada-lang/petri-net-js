import { Definition } from "../definition"
import { Env } from "../env"
import { addTransition } from "../net"
import { Value } from "../value"
import { EvaluateOptions } from "./evaluate"

export function evaluateDefinition(
  env: Env,
  definition: Definition,
  options: EvaluateOptions,
): Value {
  switch (definition["@kind"]) {
    case "TransitionDefinition": {
      return addTransition(
        env.net,
        env.mod,
        definition.name,
        definition.inputParameters,
        definition.outputParameters,
      )
    }
  }
}
