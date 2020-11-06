// 所有interface类型的全部以I开头命名, 分号结尾
interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[]
}

// 枚举一般全大写，逗号结尾
enum TODO_STATUS {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done'
}

export {
  ITodo,
  IState,
  TODO_STATUS
}