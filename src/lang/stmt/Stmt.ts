import { BlockStmt } from "../exp/BlockStmt"
import { ParameterExp } from "../parameter"
import { Span } from "../span"

export type Stmt = DefineTransition | Begin

export type DefineTransition = {
  "@type": "Stmt"
  "@kind": "DefineTransition"
  name: string
  inputParameters: Array<ParameterExp>
  outputParameters: Array<ParameterExp>
  body: Array<BlockStmt>
  span: Span
}

export type Begin = {
  "@type": "Stmt"
  "@kind": "Begin"
  body: Array<BlockStmt>
  span: Span
}
