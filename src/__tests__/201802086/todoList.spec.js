import TodoItem from "../../vo/TodoItem";
import TodoList from "../../vo/TodoList";

let todoItem1, todoItem2, todoItem3, todoItem4, todoItem5;
let todoList;

beforeEach(() => {
  todoItem1 = new TodoItem(1, "task 1", new Date());
  todoItem2 = new TodoItem(2, "task 2", new Date());
  todoItem3 = new TodoItem(3, "task 3", new Date());
  todoItem4 = new TodoItem(4, "task 4", new Date());
  todoItem5 = new TodoItem(5, "task 5", new Date());
  const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
  todoList = new TodoList(todoItemList, new Date());
});

describe("have task list", () => {
  test("create 5, have 5", () => {
    /*const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());*/
    expect(todoList.items).toHaveLength(5);
  });
});


describe("delete task", () => {
  test("in 5 task, delete id is 3", () => {
    todoList.removeTodoItem(3);

    expect(todoList.items).toHaveLength(4);
    expect(todoList.items.some((todoItem) => todoItem.id === 3)).toBeFalsy;
  });
});



describe("add task", () => {
  test("in 5 task, delete id is 3", () => {


    const todoItem6 = new TodoItem(6, 'task 6', new Date());
    todoList.pushTodoItem(todoItem6);
    expect(todoList.items).toHaveLength(6);
    expect(todoList.items.some((todoItem) => todoItem.id === 6)).toBeTruthy();
  });
});




describe("separete today yesterday", () => {
  test("5 tasks is today", () => {
    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);

    expect(todoList.equalsDayItems).toHaveLength(4);
    expect(todoList.items.some((todoItem) => todoItem.id === 6)).toBeTruthy;
  });


  test("todoId 2 is yesterday task", () => {

    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);

    expect(todoList.notEqualsDayItems).toHaveLength(1);
    expect(todoList.notEqualsDayItems.some((todoItem) => todoItem.id === 2)).toBeFalsy;
  });

});





describe("separete complete or not", () => {
  test("in 5, 2 and 3 is complete", () => {
    jest.spyOn(todoItem1, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem3, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem4, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem5, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem2, "completed", "get").mockReturnValue(() => true);
    jest.spyOn(todoItem3, "completed", "get").mockReturnValue(() => true);
    expect(todoList.notEqualsDayAndCompletedItems).toHaveLength(2);
  });


  test("in 5, 2 and 4 is not completed", () => {
    jest.spyOn(todoItem1, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem3, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem4, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem5, "equalsDayOfCreatedAt").mockImplementation(() => false);
    jest.spyOn(todoItem1, "completed", "get").mockReturnValue(() => true);
    jest.spyOn(todoItem3, "completed", "get").mockReturnValue(() => true);
    jest.spyOn(todoItem5, "completed", "get").mockReturnValue(() => true);
    expect(todoList.notEqualsDayAndNotCompletedItems).toHaveLength(2);
  });

});