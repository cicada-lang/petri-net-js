import { formatNode } from "../node"
import { Transition } from "../transition"
import { Net, TransitionEntry } from "./Net"
import { findTransitionEntry } from "./findTransitionEntry"

export function findTransitionEntryOrFail(
  net: Net,
  transition: Transition,
): TransitionEntry {
  const transitionEntry = findTransitionEntry(net, transition)
  if (transitionEntry === undefined) {
    throw new Error(
      [
        `[findTransitionEntryOrFail] I can not find nodeEntry for node.`,
        ``,
        `  transition: [${formatNode(net, transition)}]`,
      ].join("\n"),
    )
  }

  return transitionEntry
}
