import { Parameter } from "../parameter"
import { Value } from "../value"

/*

  A Petri net is a directed bipartite graph,
  where nodes are partitioned into two kinds
  -- places and transitions.

  We implement a net by adjacency list.

*/

export type Net = {
  placeEntries: Map<string, PlaceEntry>
  transitionEntries: Map<string, TransitionEntry>
}

export type TransitionEntry = {
  modId: string
  id: string
  name: string
  inputParameters: Array<Parameter>
  outputParameters: Array<Parameter>
  inputs: Array<PlaceEntry>
  outputs: Array<PlaceEntry>
}

export type PlaceEntry = {
  modId: string
  id: string
  name: string
  t: Value
  queue: Array<Value>
  inputs: Array<TransitionEntry>
  outputs: Array<TransitionEntry>
}
