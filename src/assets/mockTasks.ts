export type TaskProps = {
  id: number;
  name: string;
};

const mockTasks: TaskProps[] = [
  { id: 1, name: "Learn JavaScript" },
  { id: 2, name: "Deploy app" },
  { id: 3, name: "Update project dependencies" },
];

export default mockTasks;
