export interface Resource {
  id: number;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}
