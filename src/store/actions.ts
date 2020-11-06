import { IState, ITodo } from '@/typings';
import { Commit } from 'vuex';
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from './actionTypes';

interface ICtx {
  commit: Commit;
  state?: IState;
}

export default {
  // 2个参数ctx和传参，ctx中可以解构出commit和state,需要用接口来描述ctx
  [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
    commit(SET_TODO, todo)
  },

  [SET_TODO_LIST]({ commit, state }: ICtx, todoList: ITodo[]): void {
    commit(SET_TODO_LIST, todoList)
  },

  [REMOVE_TODO]({ commit, state }: ICtx, id: number): void {
    commit(REMOVE_TODO, id)
  },

  [SET_STATUS]({ commit, state }: ICtx, id: number): void {
    commit(SET_STATUS, id)
  },

  [SET_DOING]({ commit, state }: ICtx, id: number): void {
    commit(SET_DOING, id)
  }
}