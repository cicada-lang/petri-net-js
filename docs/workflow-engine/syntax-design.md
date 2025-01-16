---
title: Syntax design
---

# 计划

首先从具体语法开始，然后再考虑嵌入在 JavaScritp 或 Scala 中的 DSL。

# 具体语法

主要的想法是，用类似函数作用的语法构造图。
但是不是简单的 `f(x, y)` 这种函数作用，而是要区分输入参数与输出参数：

```
(inputArg, ...) -> [transition] -> (outputArg, ...)
```

```
workflow processComplaint(i: Complaint -- o: ComplaintArchive) {
  place c1: Complaint
  place c2: Complaint
  place c3: ComplaintQuestionnaire
  place c5: ComplaintQuestionnaire

  (i) -> [register] -> (c1, c2)
  (c1) -> [sendQuestionnaire] -> (c3)
  (c3) -> [processQuestionnaire] -> (c5)
  (c3) -> [timeout] -> (c5)

  (c5, c6) -> [archive] -> (o)

  (c2) -> <evaluate> -> (c6, c7)
  (c5, c7) -> [processComplaint] -> (c5, c8)
  (c8) -> <checkProcessing> -> (c6, c7)
}
```

也许中间位置的类型都可以推导，
transition 的名字到具体的 transition 函数的绑定是动态的，
应该推迟，所以可以用类似 `declare` 的语法：

```
declare transition name(inputArg, ... -- outputArg, ...)
```

```
declare transition register(i: Complaint -- o1: Complaint, o2: Complaint)

workflow processComplaint(i: Complaint -- o: ComplaintArchive) {
  (i) -> [register] -> (c1, c2)
  (c1) -> [sendQuestionnaire] -> (c3)
  (c3) -> [processQuestionnaire] -> (c5)
  (c3) -> [timeout] -> (c5)

  (c5, c6) -> [archive] -> (o)

  (c2) -> <evaluate> -> (c6, c7)
  (c5, c7) -> [processComplaint] -> (c5, c8)
  (c8) -> <checkProcessing> -> (c6, c7)
}
```

# 深嵌入

> 深嵌入在于自己处理 scope。

以 Js 为例子，Scala 也类似。

```js
declareTransition("register", [Complaint], [Complaint, Complaint])

defineWorkflow("processComplaint", [Complaint], [ComplaintArchive], [
  apply([place("i")], transition("register"), [place("c1"), place("c2")]),
  // Can be abbreviate to the following:
  ap([p("i")], t("register"), [p("c1"), p("c2")]),

  ap([p("c1")], t("sendQuestionnaire"), [p("c3")]),

  // (i) -> [register] -> (c1, c2)
  // (c1) -> [sendQuestionnaire] -> (c3)
  // (c3) -> [processQuestionnaire] -> (c5)
  // (c3) -> [timeout] -> (c5)

  // (c5, c6) -> [archive] -> (o)

  ap([p("c2")], choice("evaluate"), [p("c6"), p("c7")]),

  // (c2) -> <evaluate> -> (c6, c7)
  // (c5, c7) -> [processComplaint] -> (c5, c8)
  // (c8) -> <checkProcessing> -> (c6, c7)
])
```

# 浅嵌入

> 浅嵌入在于，重用被嵌入语言的 scope 机制。

```js
let register = declareTransition([Complaint], [Complaint, Complaint])

let processComplaint = createWorkflow(, [Complaint], [ComplaintArchive], [
  apply([i], register, [c1, c2]),
  apply([c1], sendQuestionnaire, [c3]),
  // ...
])
```
