findTransition & findTransitionEntryOrFail

connectTransitionToInputs & connectTransitionToOutputs

evaluateBlockStmt -- Connect

evaluateBlockStmt -- LetPlace

- Add a place node to the current net,
  and bind the place to a variable.

# builtins

`@send`
`@receive` -- no closure must use named function

# net

[run] run

- everytime a marking changes,
  loop through and try to execute every transitions.

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

# type system

Type -- simple type system

- should we use structrual typing or ADT?

# net

[net] TransitionEntry -- has `subnet`

# command-line

add repl command

setup format command
