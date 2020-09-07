<template>
  <div class="card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tasksList" :key="index">
              <th scope="row">{{ item.date }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>
                <div
                  v-if="item.status === 2 || item.status === '2'"
                  style="background: lightseagreen; width: 100%;height: 25px;text-align: center;border-radius: 2px"
                >
                  <p style="color: #fff;font-weight: bold;">Terminado</p>
                </div>
                <div
                  v-if="item.status === 1 || item.status === '1'"
                  style="background: orange; width: 100%;height: 25px;text-align: center;border-radius: 2px"
                >
                  <p style="color: #fff;font-weight: bold;">Pendiente</p>
                </div>
              </td>
              <td>
                <b-dropdown id="dropdown-1" text="Opciones" class="m-md-2">
                  <b-dropdown-item
                    v-b-modal.modalEdit
                    v-on:click="getTask(index)"
                    >Editar</b-dropdown-item
                  >
                  <b-dropdown-item v-on:click="removeTask(index)"
                    >Eliminar</b-dropdown-item
                  >
                </b-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal id="modalEdit" title="Crear tarea" hide-footer>
      <form @submit.prevent="editTask">
        <div class="form-group">
          <label for="title">Titulo</label>
          <input
            v-model="data.title"
            type="text"
            class="form-control"
            id="title"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea
            v-model="data.description"
            class="form-control"
            id="description"
            required
          >
          </textarea>
        </div>
        <div class="form-group">
          <label for="status">Estado</label>
          <select id="status" class="form-control" v-model="data.status">
            <option value="1">Pendiente</option>
            <option value="2">Terminada</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Editar tarea
        </button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskList",
  data() {
    return {
      indexT: null,
      modalShow: false,
      task_data: {}
    };
  },
  computed: {
    data() {
      return { ...this.task_data };
    },
    tasksList() {
      return this.$store.state.task.taskList;
    }
  },
  methods: {
    ...mapActions("task", ["removeTaskData", "editTaskData"]),
    getTask(index) {
      this.indexT = index;
      this.task_data = this.$store.state.task.taskList[index];
    },
    editTask() {
      let list = [...this.tasksList];
      list[this.indexT].status = this.data.status;
      list[this.indexT].title = this.data.title;
      list[this.indexT].description = this.data.description;
      this.editTaskData(list);
      this.$swal("OK", "Tarea editada!", "success");
    },
    removeTask(index) {
      const list = this.tasksList;
      list.splice(index, 1);
      this.removeTaskData(list);
      this.$swal("OK", "Tarea eliminada!", "error");
    }
  }
};
</script>

<style scoped></style>
