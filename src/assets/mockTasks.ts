export type TaskProps = {
  id: string;
  name: string;
};

const mockTasks: TaskProps[] = [
  { id: "1", name: "Learn JavaScript" },
  { id: "2", name: "Deploy app" },
  { id: "3", name: "Update project dependencies" },
  { id: "4", name: "Write docs" },
  { id: "5", name: "Refactor app.js" },
];

export default mockTasks;
