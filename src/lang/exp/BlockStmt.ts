import { Span } from "../span"
import { Exp } from "./Exp"

export type BlockStmt = Connect

export type Connect = {
  "@type": "BlockStmt"
  "@kind": "Connect"
  transition: Exp
  inputArgs: Array<Exp>
  outputArgs: Array<Exp>
  span: Span
}
