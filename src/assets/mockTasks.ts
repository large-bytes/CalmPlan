export type TaskProps = {
  id: string;
  name: string;
  details?: string;
  priority?: string;
};

const mockTasks: TaskProps[] = [
  { id: "1", name: "Learn JavaScript", priority: "one" },
  { id: "2", name: "Deploy app", priority: "one" },
  { id: "3", name: "Update project dependencies", priority: "three" },
  { id: "4", name: "Write docs", priority: "four" },
  { id: "5", name: "Refactor app.js", priority: "five" },
];

export default mockTasks;
