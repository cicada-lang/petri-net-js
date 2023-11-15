import { Span } from "../span"
import { Exp } from "./Exp"

export type BlockStmt = Connect | LetPlace

export type Connect = {
  "@type": "BlockStmt"
  "@kind": "Connect"
  transition: Exp
  inputArgs: Array<Exp>
  outputArgs: Array<Exp>
  span: Span
}

// Add a place node to the current net,
// and bind the place to a variable.

export type LetPlace = {
  "@type": "BlockStmt"
  "@kind": "LetPlace"
  name: string
  t: Value
  span: Span
}
