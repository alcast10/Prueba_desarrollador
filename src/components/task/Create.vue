<template>
  <div>
    <b-button v-b-modal.create_task>Crear Tarea</b-button>
    <b-modal id="create_task" title="Crear tarea" hide-footer>
      <form @submit.prevent="createTask">
        <div class="form-group">
          <label for="title">Titulo</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="title"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea
            v-model="description"
            class="form-control"
            id="description"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Crear tarea
        </button>
      </form>
    </b-modal>
  </div>
</template>

<script>
const moment = require("moment");
import { mapActions } from "vuex";
export default {
  name: "Create",
  data() {
    return {
      title: "",
      description: "",
      task: {
        status: 1,
        title: "",
        description: "",
        date: moment().format("MM-DD-YYYY")
      }
    };
  },
  computed: {
    tasksList() {
      return this.$store.state.task.taskList;
    }
  },
  methods: {
    ...mapActions("task", ["setTaskData"]),
    createTask(evt) {
      this.setTaskData({
        status: 1,
        title: this.title,
        description: this.description,
        date: moment().format("MM-DD-YYYY")
      });
      this.title = this.description = "";
      evt.target.reset();
      this.$swal("OK", "Tarea creada!", "success");
    }
  }
};
</script>

<style scoped></style>
