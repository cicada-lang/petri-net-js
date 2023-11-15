import { Mod } from "../mod"
import { Parameter } from "../net"
import { Span } from "../span"

export type Definition = TransitionDefinition

export type TransitionDefinition = {
  "@type": "Definition"
  "@kind": "TransitionDefinition"
  mod: Mod
  name: string
  inputParameters: Array<Parameter>
  outputParameters: Array<Parameter>
  span: Span
}
