# net

[net] TransitionEntry -- has `subnet`

# exp

BlockStmt -- LetPlace

# net

[connect] connectTransitionToInputPlaces(net: Net, transition: Transition, places: Array<Place>)
[connect] connectTransitionToOutputPlaces(net: Net, transition: Transition, places: Array<Place>)

[run] run

- everytime a marking changes,
  loop through and try to execute every transitions.

# syntax

parser

# loader

fix `Loader` -- parse and execute

# command-line

fix run command
add repl command

# choice

[maybe] as one kind of `Transition`

# type system

Type -- simple type system

- should we use structrual typing or ADT?
