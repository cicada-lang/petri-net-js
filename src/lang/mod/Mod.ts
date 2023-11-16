import { Stmt } from "../stmt"
import { Env } from "../env"
import { Definition } from "../definition"

export type Mod = {
  env: Env
  url: URL
  text: string
  stmts: Array<Stmt>
  definitions: Map<string, Definition>
}
