import { Definition } from "../definition"

export type Mod = {
  url: URL
  text: string
  definitions: Map<string, Definition>
}
