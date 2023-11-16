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
        // `  node: ${formatNode(net, node)}`,
      ].join("\n"),
    )
  }

  return placeEntry
}
