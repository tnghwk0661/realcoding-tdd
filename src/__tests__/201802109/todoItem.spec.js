import TodoItem from "../../vo/TodoItem";

describe("할 일을 만들 수 있다.", () => {
  test("todo item 생성하기", () => {
    const todoItem= new TodoItem(1, '오늘은 술 먹는날');
    expect(todoItem.task).toEqual('오늘은 술 먹는날');
  });
});

describe("할 일을 업데이트 할 수 있다.", () => {
  test("todo item 업데이트 하기", () => {
    const todoItem= new TodoItem(1, '오늘은 술 먹는날');
    todoItem.updateTask('오늘은 안 마실래');
    expect(todoItem.task).toEqual('오늘은 안 마실래');
  });
});

describe("할 일을 완료로 생성할 수 있다.", () => {
  test("todo item 완료로 바꾸기", () => {
    const todoItem= new TodoItem(1, '오늘은 술 먹는날',new Date(), true);
    expect(todoItem.completed).toBeTruthy();
  });
});


describe("할 일에 날짜가 들어간다..", () => {
  test("todo item이 오늘 만들었으면, isToday가 true이다.", () => {
    const sourceDate = new Date();
    const targetDate = new Date();
    const todoItem= new TodoItem(1, '오늘은 술 먹는날',sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeTruthy();
  });
  test("어제 만들었으면 isToday가 false이다.", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const todoItem = new TodoItem(1, '오늘은 술 먹는날',sourceDate);
    const targetDate = new Date('2022-05-09T10:00:00');
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeFalsy();
  });
});