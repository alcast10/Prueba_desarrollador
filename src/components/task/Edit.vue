<template>
<div></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["indexTask", "modalShow", "taskData"],
  name: "Edit",
  data() {
    return {
      title: "",
      description: "",
      status: ""
    };
  },
  computed: {
    data() {
      return [...this.taskData];
    },
    tasksList() {
      return this.$store.state.task.taskList;
    }
  },
  methods: {
    ...mapActions("task", ["editTaskData"]),
    editTask() {
      const list = [...this.tasksList];
      list[this.indexTask].status = this.data.status;
      list[this.indexTask].title = this.data.title;
      list[this.indexTask].description = this.data.description;
      list[this.indexTask] = {
        status: this.data.status,
        title: this.data.title,
        description: this.data.description,
        date: this.data.date
      };
      console.log(list[this.indexTask]);
      console.log(list);
      this.editTaskData(list);
      this.$swal("OK", "Tarea editada!", "success");
    }
  }
};
</script>

<style scoped></style>
