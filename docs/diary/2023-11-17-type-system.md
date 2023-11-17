---
title: Type system
author: Xie Yuheng
date: 2023-11-17
---

We want algebraic datatype,
but we also want the data to be easily usable in JavaScript.

We can use named record data:

```petri-net
datatype Exp {
  Var { name: String }
  Fn { name: String, body: Exp }
  Ap { target: Exp, arg: Exp }
}
```

Corresponding to the following TypeScript types:

```typescript
type Exp = Var | Fn | Ap

type Var = { "@type": "Exp", "@kind": "Var", name: String }
type Fn = { "@type": "Exp", "@kind": "Fn", name: String, body: Exp }
type Ap = { "@type": "Exp", "@kind": "Ap", target: Exp, arg: Exp }
```
