import { formatNode } from "../node"
import { Place } from "../place"
import { Net, PlaceEntry } from "./Net"
import { findPlaceEntry } from "./findPlaceEntry"

export function findPlaceEntryOrFail(net: Net, place: Place): PlaceEntry {
  const placeEntry = findPlaceEntry(net, place)
  if (placeEntry === undefined) {
    throw new Error(
      [
        `[findPlaceEntryOrFail] I can not find nodeEntry for node.`,
        ``,
        `  place: (${formatNode(net, place)})`,
      ].join("\n"),
    )
  }

  return placeEntry
}
