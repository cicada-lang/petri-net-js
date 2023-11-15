export type Net = {
  placeEntries: Map<string, PlaceEntry>
  transitionEntries: Map<string, TransitionEntry>
}

export type TransitionEntry = {
  id: string
  name: string
  inputs: Array<PlaceEntry>
  outputs: Array<PlaceEntry>
}

export type PlaceEntry = {
  id: string
  name: string
}

export type ChoiceEntry = {
  //
}
