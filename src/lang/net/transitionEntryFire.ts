import { TransitionEntry } from "./Net"

export type FiringResult = "Fired" | "NotFired" | "FiringError"

export async function transitionEntryFire(
  transitionEntry: TransitionEntry,
): Promise<FiringResult> {
  if (!transitionEntry.task) return "NotFired"

  const inputs = transitionEntryGetInputs(transitionEntry)
  if (inputs === undefined) return "NotFired"

  try {
    const outputs = await transitionEntry.task.fn(...inputs)
    transitionEntryPutOutputs(transitionEntry, outputs)
    return "Fired"
  } catch (error) {
    return "FiringError"
  }
}

function transitionEntryGetInputs(
  transitionEntry: TransitionEntry,
): Array<any> | undefined {
  if (
    transitionEntry.inputPlaceEntries.some(
      (placeEntry) => placeEntry.queue.length === 0,
    )
  ) {
    return undefined
  }

  return transitionEntry.inputPlaceEntries.map((placeEntry) =>
    placeEntry.queue.pop(),
  )
}

function transitionEntryPutOutputs(
  transitionEntry: TransitionEntry,
  outputs: Array<any>,
): void {
  for (const placeEntry of [...transitionEntry.outputPlaceEntries].reverse()) {
    placeEntry.queue.push(outputs.pop())
  }
}
