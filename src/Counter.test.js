import { render, fireEvent, screen } from "@testing-library/react";
import CounterComp from "./CounterComp";

test("increment counter", () => {
  render(<CounterComp />);

  const incrementBtn = screen.getByTestId("increment");
  const counter = screen.getByTestId("counter");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1"); // if initial value = 0
});
test("decrement counter", () => {
  render(<CounterComp />);

  const incrementBtn = screen.getByTestId("decrement");
  const counter = screen.getByTestId("counter");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("-1"); // if initial value = 0
});