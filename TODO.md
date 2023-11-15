# stmt

DefinePlace

DefineTransition

Run

```
run {
  place input: Complaint = [{}, {}, ...]

  (input) -> [register] -> (c1, c2)
  (c1) -> [sendQuestionnaire] -> (c3)
  (c3) -> [processQuestionnaire] -> (c5)
  (c3) -> [timeout] -> (c5)

  (c5, c6) -> [archive] -> (output)

  (c2) -> <evaluate> -> (c6, c7)
  (c5, c7) -> [processComplaint] -> (c5, c8)
  (c8) -> <checkProcessing> -> (c6, c7)
}
```

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
