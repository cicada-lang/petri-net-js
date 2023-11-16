import { nodeKey } from "../node/nodeKey"
import { Place } from "../place"
import { Net, PlaceEntry } from "./Net"

export function findPlaceEntry(net: Net, place: Place): PlaceEntry | undefined {
  return net.placeEntries.get(nodeKey(place))
}
