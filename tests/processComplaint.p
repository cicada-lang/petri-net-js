transition processComplaint(
  place input: Complaint
  ------------------------
  place output: ComplaintArchive
) {
  (input) -> [register] -> (c1, c2)
  (c1) -> [sendQuestionnaire] -> (c3)
  (c3) -> [processQuestionnaire] -> (c5)
  (c3) -> [timeout] -> (c5)

  (c5, c6) -> [archive] -> (output)

  // (c2) -> <evaluate> -> (c6, c7)
  (c5, c7) -> [processComplaint] -> (c5, c8)
  // (c8) -> <checkProcessing> -> (c6, c7)
}

begin {
  place input: Complaint
  place output: ComplaintArchive

  (input) -> [processComplaint] -> (output)

  // @send(input, Complaint("xieyuheng"))
  // @receive(output, print)
}
