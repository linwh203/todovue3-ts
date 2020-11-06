<template>
  <div>
    <input type="checkbox" :checked="item.status === DONE" @click="setStatus(item.id)">
    <span :class="{linethrough:item.status === DONE}">
      {{item.content}}
    </span>
    <button @click="removeTodo(item.id)">X</button>
    <button v-if="item.status !== DONE" :class="item.status === DOING?'doing': 'todo'"
      @click="setDoing(item.id)">{{item.status === DOING?'DOING': 'DO'}}</button>
  </div>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "@/typings";
import { defineComponent, PropType } from "vue";

interface IStatusState {
  DOING: TODO_STATUS;
  DONE: TODO_STATUS;
  TODO: TODO_STATUS;
}

export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>,
  },
  setup(props, { emit }) {
    // const statusState: IStatusState = { 也可以用下面这种泛型写法
    const statusState = <IStatusState>{
      DOING: TODO_STATUS.DOING,
      DONE: TODO_STATUS.DONE,
      TODO: TODO_STATUS.TODO,
    };

    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };
    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };
    const setDoing = (id: number): void => {
      emit("setDoing", id);
    };

    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style scoped>
.linethrough {
  text-decoration: line-through;
}
.doing {
  background-color: cyan;
}
.todo {
  background-color: coral;
}
</style>