export const stmt = {
  $grammar: {
    "stmt:transition": [
      '"transition"',
      { name: "variable_name" },
      '"("',
      { inputParameters: "parameters" },
      "dashline",
      { outputParameters: "parameters" },
      '")"',
      '"{"',
      { body: "block_stmts" },
      '"}"',
    ],
    "stmt:begin": ['"begin"', '"{"', { body: "block_stmts" }, '"}"'],
  },
}

export const stmts = {
  $grammar: {
    "stmts:stmts": [{ stmts: { $ap: ["zero_or_more", "stmt"] } }],
  },
}
