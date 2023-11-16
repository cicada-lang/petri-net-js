import { stringToSubscript } from "../../utils/stringToSubscript"
import { Net } from "../net"
import { Place } from "../place"

export function formatPlace(net: Net, place: Place): string {
  const subscript = stringToSubscript(place.id.toString())
  return `${place.name}${subscript}`
}
