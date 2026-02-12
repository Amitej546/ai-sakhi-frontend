export function recommendSchemes(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("pregnant"))
    return "PM Matru Vandana Yojana gives pregnancy support.";

  if (q.includes("gas"))
    return "Ujjwala Yojana provides free LPG gas connection.";

  if (q.includes("bank"))
    return "Jan Dhan Yojana provides zero balance bank account.";

  if (q.includes("loan"))
    return "Mudra Yojana offers business loans.";

  return "You may be eligible for Ujjwala, Jan Dhan, Mudra and Matru Vandana schemes.";
}
