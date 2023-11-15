import { ParameterExp } from "../parameter"
import { Span } from "../span"

export type Stmt = DefineTransition

export type DefineTransition = {
  "@type": "Stmt"
  "@kind": "DefineTransition"
  name: string
  inputParameters: Array<ParameterExp>
  outputParameters: Array<ParameterExp>
  body: Array<BlockStmt>
  span: Span
}
