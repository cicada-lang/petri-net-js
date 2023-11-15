import { Net } from "./Net"

export function createNet(): Net {
  return {
    placeEntries: new Map(),
    transitionEntries: new Map(),
  }
}
