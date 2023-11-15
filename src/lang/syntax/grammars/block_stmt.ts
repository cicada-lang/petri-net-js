export const block_stmt = {
  $grammar: {
    "block_stmt:connect": [
      '"("',
      { inputArgs: "args" },
      '")"',
      '"-"',
      '">"',
      '"["',
      { transition: "exp" },
      '"]"',
      '"-"',
      '">"',
      '"("',
      { outputArgs: "args" },
      '")"',
    ],
    "block_stmt:let_place": [
      '"place"',
      { name: "variable_name" },
      '":"',
      { t: "exp" },
    ],
  },
}

export const block_stmts = {
  $grammar: {
    "block_stmts:block_stmts": [
      { entries: { $ap: ["zero_or_more", "block_stmt"] } },
    ],
  },
}
