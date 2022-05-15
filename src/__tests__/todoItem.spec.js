import TodoItem from "../vo/TodoItem";

describe("할 일을 만들수 있다", () => {
  test("todo 아이템 생성하기", () => {
    const todoItem = new TodoItem(1, "오늘은 술먹는날");
    expect(todoItem.task).toEqual("오늘은 술먹는날");
  });
});

describe("할 일을 업데이트 할 수 있다.", () => {
  test("todo 아이템 업데이트하기", () => {
    const todoItem = new TodoItem(1, "오늘은 술먹는날");
    todoItem.updateTask('오늘은 그냥 안마실래');
    expect(todoItem.task).toEqual("오늘은 그냥 안마실래");
  });
});

describe("할 일을 완료/미완료로 바꿀 수 있다.", () => {
  test("todo 아이템 완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, "오늘은 술먹는날");
    todoItem.setComplete();
    expect(todoItem.completed).toBeTruthy;
  });

  test("todo 아이템 미완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, "오늘은 술먹는날");
    todoItem.unsetComplete();
    expect(todoItem.completed).toBeFalsy();
  });
}); 

describe("할일에 날짜가 들어간다.", () => {
  test("todo item이 오늘 만들었으면, isToday가 true이다", () => {
    const sourceDate = new Date();
    const targetDate = new Date();
    const todoItem = new TodoItem(1, "오늘은 술먹는날", sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeTruthy();
    
  });
  test("todo item이 어제 만들었으면, isToday가 false이다", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const todoItem = new TodoItem(1, "오늘은 술먹는날", sourceDate);
    const targetDate = new Date(Date.now());
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeFalsy();
  });
});