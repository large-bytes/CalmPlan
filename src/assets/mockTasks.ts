export type TaskProps = {
  id: string;
  name: string;
  details?: string;
  priority?: string;
};

const mockTasks: TaskProps[] = [
  { id: "1", name: "Learn JavaScript", priority: "five" },
  { id: "2", name: "Deploy app", priority: "five" },
  { id: "3", name: "Update project dependencies", priority: "three" },
  { id: "4", name: "Write docs", priority: "two" },
  { id: "5", name: "Refactor app.js", priority: "one" },
];

export default mockTasks;
