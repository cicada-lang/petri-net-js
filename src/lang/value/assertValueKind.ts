import { Value } from "../value"

export function assertValueKind<Kind extends Value["@kind"]>(
  value: Value,
  kind: Kind,
): asserts value is Extract<Value, { "@kind": Kind }> {
  if (value["@kind"] !== kind) {
    throw new Error(
      [
        `[assertValueKind] fail`,
        `-  expect kind: ${kind}`,
        `-  found kind: ${value["@kind"]}`,
      ].join("\n"),
    )
  }
}
