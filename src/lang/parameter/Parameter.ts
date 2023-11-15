import { Value } from "../value"
import { Exp } from "../exp"

export type ParameterExp = {
  name: string
  t: Exp
}

export type Parameter = {
  name: string
  t: Value
}
