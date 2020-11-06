<template>
  <div>v3+ts</div>
  <TodoInput></TodoInput>
  <TodoList :todoList="todoList"></TodoList>
</template>

<script lang="ts">
// ts注意点： 1. lang=ts 2. 使用defineComponent
import { computed, defineComponent, onMounted } from "vue";
import { Store, useStore } from "vuex";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IUseTodo, useTodo } from "./hooks";

export default defineComponent({
  name: "App",
  components: { TodoInput, TodoList },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();

    onMounted(() => {
      setTodoList();
    });

    return {
      todoList: computed(() => store.state.list),
    };
  },
});
</script>

