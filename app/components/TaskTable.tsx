import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Button component from Shadcn
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"; // Shadcn table components
import { Modal } from "@/components/ui/Modal"; // Custom Modal component
import { Input } from "@/components/ui/input"; // Shadcn input for the form

interface Task {
  id: number;
  description: string;
  reward: string;
  link: string;
}

export default function TaskTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch tasks from localStorage when component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks array changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    setNewTask({ id: Date.now(), description: "", reward: "", link: "" });
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    // Update localStorage after deletion
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? editingTask : task
      );
      setTasks(updatedTasks);
    } else if (newTask) {
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
    setEditingTask(null);
    setNewTask(null);
  };

  return (
    <div className="p-4">
      <Button onClick={handleAddTask} className="mb-4">
        + Add Task
      </Button>
      <Table className="w-full bg-initial-gradient rounded-sm">
        <TableHead>
          <TableRow className="flex justify-between text-center text-white hover:bg-none">
            <TableCell className="flex-1">Description</TableCell>
            <TableCell className="flex-1">Reward</TableCell>
            <TableCell className="flex-1">Link</TableCell>
            <TableCell className="flex-1">Edit</TableCell>
            <TableCell className="flex-1">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="flex justify-between text-center">
              <TableCell className="flex-1 text-white font-semibold">{task.description}</TableCell>
              <TableCell className="flex-1 text-white font-semibold">{task.reward}</TableCell>
              <TableCell className="flex-1">
                <a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Reward Link
                </a>
              </TableCell>
              <TableCell className="flex-1 text-white font-semibold">
                <Button onClick={() => handleEditTask(task)}>Edit</Button>
              </TableCell>
              <TableCell className="flex-1">
                <Button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-500"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for Add/Edit Task */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleSubmitTask} className="p-4">
            <h3 className="font-bold mb-4">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h3>
            <div className="mb-4">
              <label>Description:</label>
              <Input
                type="text"
                value={editingTask?.description || newTask?.description || ""}
                onChange={(e) => {
                  if (editingTask)
                    setEditingTask({
                      ...editingTask,
                      description: e.target.value,
                    });
                  if (newTask)
                    setNewTask({ ...newTask, description: e.target.value });
                }}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label>Reward:</label>
              <Input
                type="text"
                value={editingTask?.reward || newTask?.reward || ""}
                onChange={(e) => {
                  if (editingTask)
                    setEditingTask({ ...editingTask, reward: e.target.value });
                  if (newTask)
                    setNewTask({ ...newTask, reward: e.target.value });
                }}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label>Link:</label>
              <Input
                type="text"
                value={editingTask?.link || newTask?.link || ""}
                onChange={(e) => {
                  if (editingTask)
                    setEditingTask({ ...editingTask, link: e.target.value });
                  if (newTask)
                    setNewTask({ ...newTask, link: e.target.value });
                }}
                className="border p-2 w-full"
              />
            </div>
            <Button type="submit" className="bg-green-500 text-white">
              Save Task
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}
