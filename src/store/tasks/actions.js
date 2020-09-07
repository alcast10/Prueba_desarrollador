export const actions = {
  handler: () => {},
  async setTaskData({ commit }, params) {
    commit("SET_TASK_DATA", params);
  },
  async editTaskData({ commit }, params) {
    commit("EDIT_TASK_DATA", params);
  },
  async removeTaskData({ commit }, params) {
    commit("REMOVE_TASK_DATA", params);
  }
};
