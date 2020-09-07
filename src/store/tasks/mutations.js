const SET_TASK_DATA = (state, data) => {
  state.taskList.push(data);
};
const EDIT_TASK_DATA = (state, data) => {
  state.taskList = data;
};
const REMOVE_TASK_DATA = (state, data) => {
  state.taskList = data;
};
export default {
  SET_TASK_DATA,
  REMOVE_TASK_DATA,
  EDIT_TASK_DATA
};
