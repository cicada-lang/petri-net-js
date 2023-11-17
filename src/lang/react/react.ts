import { reactive, watch } from "@vue/runtime-core"
import { Net, PlaceEntry, transitionEntryFire } from "../net"

export function react(net: Net): void {
  for (const [nodekey, placeEntry] of net.placeEntries) {
    placeEntry.queue = reactive(placeEntry.queue)
    reactivelyFireOutputTransitions(placeEntry)
  }

  initialAction(net)
}

async function initialAction(net: Net): Promise<void> {
  for (const [nodeKey, transitionEntry] of net.transitionEntries) {
    await transitionEntryFire(transitionEntry)
  }
}

// When we add a data into a place,
// try to fire all the neighboring transitions.

function reactivelyFireOutputTransitions(placeEntry: PlaceEntry): void {
  watch(
    () => placeEntry.queue,
    async () => {
      if (placeEntry.queue.length > 0) {
        for (const transitionEntry of placeEntry.outputTransitionEntries) {
          const result = await transitionEntryFire(transitionEntry)
          if (result === "Fired") return
        }
      }
    },
    {
      deep: true,
    },
  )
}
