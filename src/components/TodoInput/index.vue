<template>
  <div>
    <input type="text" v-model="todoValue" @keyup="setTodoValue">
  </div>
</template>

<script lang="ts">
// 单个数据用ref，多个数据用reactive, ref数据的更改都要在xxx.value中更改
import { defineComponent, reactive, ref } from "vue";
import { IUseTodo, useTodo } from "@/hooks";

export default defineComponent({
  name: "TodoInput",
  setup() {
    const todoValue = ref<string>("");
    const { setTodo }: IUseTodo = useTodo();
    const setTodoValue = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && todoValue.value.trim().length) {
        setTodo(todoValue.value);
        todoValue.value = "";
      }
    };

    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>

<style scoped>
</style>