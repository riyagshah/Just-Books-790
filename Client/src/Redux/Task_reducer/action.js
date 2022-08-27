import axios from "axios";
import * as types from "./actiontypes";

export const addNewProject = (params) => (dispatch) => {
  console.log(params);
 return axios
    .post("http://localhost:8080/task/create", params)
    .then((res) => {
      dispatch({ type: types.ADD_NEW_PROJECT, payload: params });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTaskProject = () => (dispatch) => {
 axios
    .get("http://localhost:8080/task")
    .then((res) =>
    {console.log("getTask",res.data)

      dispatch({ type: types.GET_TASK_PROJECT, payload: res.data })
    })
      .catch((err) => console.log(err)
      )
};

export const editProject = (refNO, UpdatedTask, projectId) => (dispatch) => {
  // console.log("action",refNO)
  axios
    .patch(`http://localhost:8080/task/edit`,UpdatedTask)
    .then((res) =>
      dispatch({ type: types.EDIT_PROJECT, payload: { refNO, UpdatedTask } })
    )
    .catch((err) => console.log(err));
};

export const deleteProject = (refNO) => (dispatch) => {
  axios.delete(`http://localhost:8080/task/${refNO}/delete`).then((res)=>
  dispatch({ type: types.Delete_PROJECT, payload: refNO })
  ).catch((err)=>console.log(err))
};
