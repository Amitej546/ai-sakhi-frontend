import type { Resource } from "../../types/resource";

export async function getResources(): Promise<Resource[]> {
  return [
    {
      id: 1,
      title: "Digital Literacy for Women",
      category: "Digital Literacy",
      level: "Beginner",
      description: "Learn basic smartphone and internet usage.",
    },
    {
      id: 2,
      title: "Financial Independence",
      category: "Finance",
      level: "Beginner",
      description: "Understanding savings, UPI, and SHGs.",
    },
  ];
}
