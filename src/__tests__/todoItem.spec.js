import TodoItem from "../vo/TodoItem";

describe("create task", () => {
  test("todo item create", () => {
    const todoItem = new TodoItem(1, "drunk day");
    expect(todoItem.task).toEqual("drunk day");
  });
});

describe("update task", () => {
  test("update todo", () => {
    const todoItem = new TodoItem(1, "drunk day");
    todoItem.updateTask("quit")
    expect(todoItem.task).toEqual("quit");
  });
});

describe("task end or not", () => {
  test("task end", () => {
    const todoItem = new TodoItem(1, "drunk day");
    todoItem.setComplete();
    expect(todoItem.complete).toBeTruthy;
  });
  
  test("task end", () => {
    const todoItem = new TodoItem(1, "drunk day");
    todoItem.unsetComplete();
    expect(todoItem.complete).toBeFalsy;
  });
});


describe("date in task", () => {
  test("today is true", () => {
    const sourceDate = new Date();
    const targetDate = new Date();
    const todoItem = new TodoItem(1, "drunk day", sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeTruthy;
  });
  test("yesterday is false", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const targetDate = new Date('2022-05-09T10:00:00');
    const todoItem = new TodoItem(1, "drunk day", sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeFalsy;
  });
});




describe("create task with complete", () => {
  test("create task with complete", () => {
    const todoItem = new TodoItem(1, "drunk day", new Date(), true);
    expect(todoItem.completed).toBeTruthy;
  });
});
