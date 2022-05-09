import TodoItem from "../vo/TodoItem";
import TodoList from "../vo/TodoList";

describe("have task list", () => {
  test("create 5, have 5", () => {
    const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());
    expect(todoList.items).toHaveLength(5);
  });
});


describe("delete task", () => {
  test("in 5 task, delete id is 3", () => {
    const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());

    todoList.removeTodoItem(3);
    
    //expect(todoList.items).toHaveLength(4);
    expect(todoList.items.some((todoItem) => todoItem.id === 3)).toBeFalsy;
  });
});



describe("add task", () => {
  test("in 5 task, delete id is 3", () => {
    const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());

    
    const todoItem6 = new TodoItem(6, "task 6", new Date());
    todoList.pushTodoItem(todoItem6);

    expect(todoList.items).toHaveLength(6);
    expect(todoList.items.some((todoItem) => todoItem.id === 6)).toBeTruthy;
  });
});




describe("separete today yesterday", () => {
  test("5 tasks is today", () => {
    const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());

    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);

    expect(todoList.equalsDayItems).toHaveLength(4);
    expect(todoList.items.some((todoItem) => todoItem.id === 6)).toBeTruthy;
  });

  
  test("todoId 2 is yesterday task", () => {
    const todoItem1 = new TodoItem(1, "task 1", new Date());
    const todoItem2 = new TodoItem(2, "task 2", new Date());
    const todoItem3 = new TodoItem(3, "task 3", new Date());
    const todoItem4 = new TodoItem(4, "task 4", new Date());
    const todoItem5 = new TodoItem(5, "task 5", new Date());
    const todoItemList = [todoItem1, todoItem2, todoItem3, todoItem4, todoItem5];
    const todoList = new TodoList(todoItemList, new Date());

    jest.spyOn(todoItem2, "equalsDayOfCreatedAt").mockImplementation(() => false);

    expect(todoList.notEqualsDayItems).toHaveLength(1);
    expect(todoList.notEqualsDayItems.some((todoItem) => todoItem.id === 2)).toBeFalsy;
  });

});







