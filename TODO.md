evaluateDefinition
evaluateParameters
evaluateBlockStmt -- build net

evaluate -- Var
evaluate -- Block

define

execute -- DefineTransition -- call evaluate and define
execute -- Begin -- `createEnv` and run

- [maybe] Mod -- has no env -- top level `evaluate`

# builtins

`@send`
`@receive` -- no closure must use named function

# net

[connect] connectTransitionToInputs(net: Net, transition: Transition, places: Array<Place>)
[connect] connectTransitionToOutputs(net: Net, transition: Transition, places: Array<Place>)

[run] run

- everytime a marking changes,
  loop through and try to execute every transitions.

# learn

> To get more examples.

(1992) a-primer-in-petri-net-design.md
(1985) petri-nets--an-introduction.md
(1981) petri-net-theory-and-the-modeling-of-systems.md

# choice

[maybe] as one kind of `Transition`

# type system

Type -- simple type system

- should we use structrual typing or ADT?

# net

[net] TransitionEntry -- has `subnet`

# command-line

add repl command
setup format command
