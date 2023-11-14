import { Place } from "../place"
import { Transition } from "../transition"

export type Net = {
  places: Map<string, Place>
  transitions: Map<string, Transition>
}
