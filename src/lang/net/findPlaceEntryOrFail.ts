import { Place, formatPlace } from "../place"
import { Net, PlaceEntry } from "./Net"
import { findPlaceEntry } from "./findPlaceEntry"

export function findPlaceEntryOrFail(net: Net, place: Place): PlaceEntry {
  const placeEntry = findPlaceEntry(net, place)
  if (placeEntry === undefined) {
    throw new Error(
      [
        `[findPlaceEntryOrFail] I can not find nodeEntry for node.`,
        ``,
        `  place: ${formatPlace(net, place)}`,
      ].join("\n"),
    )
  }

  return placeEntry
}
