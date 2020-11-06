<template>
  <div>
    <h1>todo-list</h1>
    {{$store.state.list}}
    <TodoItem v-for="todo in todoList" :key="todo.id" :item="todo" @removeTodo='removeTodo' @setStatus="setStatus"
      @setDoing="setDoing"></TodoItem>
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from "@/hooks";
import { ITodo } from "@/typings";
import { defineComponent, PropType } from "vue";
import TodoItem from "./Item.vue";

export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup() {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style scoped>
</style>