import { Span } from "../span"
import { Exp } from "./Exp"

export type BlockStmt = Change

export type Change = {
  "@type": "BlockStmt"
  "@kind": "Change"
  transition: Exp
  inputArgs: Array<Exp>
  outputArgs: Array<Exp>
  span: Span
}
