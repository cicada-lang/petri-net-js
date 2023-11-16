import { Mod } from "../mod"
import { Net } from "../net"
import { createNodeId } from "../node/createNodeId"
import { nodeKey } from "../node/nodeKey"
import { Place } from "../place"
import { Value } from "../value"

export function addPlace(net: Net, mod: Mod, name: string, t: Value): Place {
  const modId = mod.url.href
  const id = createNodeId(name)

  const place: Place = {
    "@type": "Value",
    "@kind": "Place",
    modId,
    id,
    name,
  }

  net.placeEntries.set(nodeKey(place), {
    modId,
    id,
    name,
    t,
    queue: [],
    inputTransitionEntries: [],
    outputTransitionEntries: [],
  })

  return place
}
