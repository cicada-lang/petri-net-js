import { Parameter } from "../parameter"
import { Task } from "../task"
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
  inputPlaceEntries: Array<PlaceEntry>
  outputPlaceEntries: Array<PlaceEntry>
  task?: Task
}

export type PlaceEntry = {
  modId: string
  id: string
  name: string
  t: Value
  queue: Array<Value>
  inputTransitionEntries: Array<TransitionEntry>
  outputTransitionEntries: Array<TransitionEntry>
}
