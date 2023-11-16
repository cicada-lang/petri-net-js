import { nodeKey } from "../node/nodeKey"
import { Transition } from "../transition"
import { Net, TransitionEntry } from "./Net"

export function findTransitionEntry(
  net: Net,
  transition: Transition,
): TransitionEntry | undefined {
  return net.transitionEntries.get(nodeKey(transition))
}
