# syntax

[syntax] test parser by parse command

# builtins

`@send`

`@receive` -- no closure must use named function

# loader

fix `Loader` -- parse and execute

# command-line

fix run command

add repl command

setup format command

# net

[connect] connectTransitionToInputPlaces(net: Net, transition: Transition, places: Array<Place>)
[connect] connectTransitionToOutputPlaces(net: Net, transition: Transition, places: Array<Place>)

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
