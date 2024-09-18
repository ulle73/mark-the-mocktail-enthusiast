import TodoList from "../components/TodoList";
import { render, screen } from "@testing-library/react";

test("should have strike-through text when complete", () => {
  render(
    <TodoList
      list={[{ name: "Afterglow", completed: true, id: 1 }]}
      filterFn={() => (drink) => drink}
    />
  );
  expect(screen.getByRole("listitem")).toHaveClass(/crossed-over/i);
});

test("should not have strike-through text when not complete", () => {
  render(
    <TodoList
      list={[{ name: "Afterglow", completed: false, id: 1 }]}
      filterFn={() => (drink) => drink}
    />
  );
  expect(screen.getByRole("listitem")).not.toHaveClass(/crossed-over/i);
});
