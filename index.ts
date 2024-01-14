import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>(
  "#list"
) as HTMLUListElement;
const form = document.querySelector<HTMLFormElement>(
  "#new-task-form"
) as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>(
  "#new-task-title"
) as HTMLInputElement; // Corrected selector

const tasks: Task[] = [];

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  input.value = " ";

  addListItem(newTask);
  input.value = "";
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    console.log(tasks);
  });
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}
