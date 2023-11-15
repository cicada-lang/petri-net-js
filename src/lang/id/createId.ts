import { globalIdCounters } from "./globalIdCounters"

export function createId(name: string): string {
  const foundCounter = globalIdCounters.get(name)
  if (foundCounter === undefined) {
    globalIdCounters.set(name, 0)
    return String(0)
  } else {
    globalIdCounters.set(name, foundCounter + 1)
    return String(foundCounter + 1)
  }
}
