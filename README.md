# vuex 相关

- 非正规操作：
  1. 组件 -> commit -> mutation -> state -> 视图变更
- 正确运行流

  1. 组件 -> dispatch -> action
  2. dispatch -> type(actionType) -> 某个 action
  3. action -> commit -> mutation
  4. mutation -> change -> state
  5. state -> 数据流 -> 视图变更

- store 文件结构

  1. actionTypes action 类型
  2. actions 调用 mutation 的方法
  3. mutations 更改 state 的方法
  4. state 数据管理池
  5. store state、mutations、actions 的出口

- 创建 hooks 文件夹集中处理 vuex 派发的事件，提供给页面使用

# 组件划分

- TodoList

  1. TodoInput
  2. TodoList

  - TodoItem

    1. 完成/未完成 -> checkbox
    2. 删除该项 -> button
    3. 确认正在做的项 -> button

# 运行相关：

## VUE3 DOC

(https://v3.cn.vuejs.org/)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
