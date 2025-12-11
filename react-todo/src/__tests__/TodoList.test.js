import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New todo");
    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles a todo completed state", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).toHaveStyle("text-decoration: none");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build Todo App");
    const deleteButton = screen.getByText("Delete", { selector: "button" });
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
