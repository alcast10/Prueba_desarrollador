<template>
  <div>
    <Navbar></Navbar>
    <main class="py-4">
      <div class="container">
        <div class="row justify-content-center">
          <Create></Create>
          <TaskList class="col-12 mt-3"></TaskList>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Create from "@/components/task/Create";
import Navbar from "@/components/Navbar";
import TaskList from "@/components/task/TaskList";
export default {
  name: "Task",
  components: { TaskList, Navbar, Create }
};
</script>

<style scoped></style>
