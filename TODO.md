# syntax

support JSON data

`put` as a `BlockStmt`

```
put <place> <data>
```

# type system

[maybe] DefineInterface & InterfaceDefinition

[maybe] DefineDatatype & DatatypeDefinition

- `datatype <name>` -- to define trivial type for now
- pass parser `tests/`

# FFI

primitive transition v.s. composed transition

- design a FFI to JavaScript

# net

[net] `Begin` -- should call `react`

[net] react.test.ts

[net] `transitionEntryFire` -- put input back on file

[net] `transitionEntryPutOutputs` -- error handling

- task should have more information

# type system

Type -- simple structrual type system -- for JSON

# builtins

`@send`
`@receive` -- no closure must use named function

# learn

> To get more examples.

(1992) a-primer-in-petri-net-design.md
(1985) petri-nets--an-introduction.md
(1981) petri-net-theory-and-the-modeling-of-systems.md

# choice

How to handle choice?

- [maybe] As a subtype of transition, who to express subtype?

- [maybe] As one kind of Transition

  - Not ok, because Transition is a kind of Value

# net

[net] TransitionEntry -- has `subnet`

# command-line

add repl command

setup format command
