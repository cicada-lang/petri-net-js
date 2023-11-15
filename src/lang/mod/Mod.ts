import { Stmt } from "../stmt"
import { Definition } from "../definition"

export type Mod = {
  url: URL
  text: string
  stmts: Array<Stmt>
  definitions: Map<string, Definition>
}
