# module system

Definition

Mod -- has definitions

Place and Transition -- has modId

Mod has definitions: Map<string, Definition>

# net

[net] addPlace
[net] addTransition

[connect] connectTransitionToPlaces(net: Net, transition: Transition, place: Place)

[run] run

- everytime a marking changes,
  loop through and try to execute every transitions.

# choice

[maybe] as one kind of `Transition`

# lang

env
Stmt

# syntax

parser

# type system

Type -- simple type system

- should we use structrual typing or ADT?
