import { Span } from "../span"
import { BlockStmt } from "./BlockStmt"

export type Exp = Var | Block

export type Var = {
  "@type": "Exp"
  "@kind": "Var"
  name: string
  span: Span
}

export type Block = {
  "@type": "Exp"
  "@kind": "Block"
  body: Array<BlockStmt>
  span: Span
}
