/**
 * list: ITodo[]
 * 
 * 定义item名称：ITodo
 * listItem: {
 *    id: new Date().getTime => number
 *    content: string
 *    status: TODO DOING DONE => enum枚举
 * }
 * 
 * 对象一般使用type interface定义，由于interface可以extends继承，所以多数情况下使用interface来定义对象
 * 
 * 设定好类型后到最外层进行定义types
 */

import { IState } from '@/typings';

export default <IState>{
  list: []
}