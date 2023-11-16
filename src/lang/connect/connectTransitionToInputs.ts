import { Net, findPlaceEntryOrFail, findTransitionEntryOrFail } from "../net"
import { Place } from "../place"
import { Transition } from "../transition"

export function connectTransitionToInputs(
  net: Net,
  transition: Transition,
  places: Array<Place>,
): void {
  const transitionEntry = findTransitionEntryOrFail(net, transition)
  const placeEntries = places.map((place) => findPlaceEntryOrFail(net, place))

  //
}
