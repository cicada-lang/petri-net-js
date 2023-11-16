import { Loader } from "../../loader"
import { Stmt } from "../stmt"
// import { defineBuiltins } from "../builtins/defineBuiltins"
// import { createChecking } from "../checking/createChecking"
import { createEnv } from "../env/createEnv"
import { Mod } from "./Mod"

export function createMod(options: {
  url: URL
  text: string
  stmts: Array<Stmt>
  loader: Loader
}): Mod {
  const mod = {
    loader: options.loader,
    url: options.url,
    text: options.text,
    stmts: options.stmts,
    definitions: new Map(),
    // builtins: new Map(),
    // requiredMods: new Map(),
  } as unknown as Mod

  mod.env = createEnv(mod)
  // mod.checking = createChecking()

  // defineBuiltins(mod)

  return mod
}
