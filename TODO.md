evaluate -- Var -- call findDefinitionOrFail

evaluateBlockStmt -- Connect
evaluateBlockStmt -- LetPlace

execute -- DefineTransition -- call evaluate and define
execute -- Begin -- `createEnv` and run

- [maybe] Mod -- has no env -- top level `evaluate`

evaluateDefinition -- TransitionDefinition

- return transition value

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
