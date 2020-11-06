import { IState, ITodo, TODO_STATUS } from '@/typings';
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from './actionTypes';

export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    state.list.unshift(todo)
    console.log(state.list);
  },

  [SET_TODO_LIST](state: IState, todoList: ITodo[]) {
    state.list = todoList
  },

  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter((item: ITodo) => item.id !== id)
  },

  [SET_STATUS](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.DONE:
            item.status = TODO_STATUS.TODO
            break
          case TODO_STATUS.TODO:
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.DONE
            break
          default:
            break
        }
      }
      return item
    })
  },

  [SET_DOING](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        item.status = item.status === TODO_STATUS.DOING ? TODO_STATUS.TODO : item.status === TODO_STATUS.TODO ? TODO_STATUS.DOING : item.status
      } else {
        item.status = item.status === TODO_STATUS.DONE ? TODO_STATUS.DONE : TODO_STATUS.TODO
      }
      return item
    })
  }
}