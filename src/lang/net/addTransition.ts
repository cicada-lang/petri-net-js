import { Mod } from "../mod"
import { Net } from "../net"
import { createNodeId } from "../node/createNodeId"
import { nodeKey } from "../node/nodeKey"
import { Parameter } from "../parameter"
import { Transition } from "../transition"

export function addTransition(
  net: Net,
  mod: Mod,
  name: string,
  inputParameters: Array<Parameter>,
  outputParameters: Array<Parameter>,
): Transition {
  const modId = mod.url.href
  const id = createNodeId(name)

  const transition: Transition = {
    "@type": "Value",
    "@kind": "Transition",
    modId,
    id,
    name,
  }

  net.transitionEntries.set(nodeKey(transition), {
    modId,
    id,
    name,
    inputParameters,
    outputParameters,
    inputs: [],
    outputs: [],
  })

  return transition
}
