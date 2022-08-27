import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  PATCH_PROJECT_FAILURE,
  PATCH_PROJECT_REQUEST,
  PATCH_PROJECT_SUCCESS,
} from "./actionType";
import axios from "axios";

const addProjectRequest = (payload) => {
  return {
    type: ADD_PROJECT_REQUEST,
    payload,
  };
};

const addProjectSuccess = (payload) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload,
  };
};

const addProjectFailure = (payload) => {
  return {
    type: ADD_PROJECT_FAILURE,
    payload,
  };
};

const getProjectRequest = (payload) => {
  return {
    type: GET_PROJECT_REQUEST,
    payload,
  };
};

const getProjectSuccess = (payload) => {
  return {
    type: GET_PROJECT_SUCCESS,
    payload,
  };
};

const getProjectFailure = (payload) => {
  return {
    type: GET_PROJECT_FAILURE,
    payload,
  };
};

const deleteProjectRequest = (payload) => {
  return {
    type: DELETE_PROJECT_REQUEST,
    payload,
  };
};
const deleteProjectSuccess = (payload) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    payload,
  };
};
const deleteProjectFailure = (payload) => {
  return {
    type: DELETE_PROJECT_FAILURE,
    payload,
  };
};

const patchProjectRequest = (payload) => {
  return {
    type: PATCH_PROJECT_REQUEST,
    payload,
  };
};

const patchProjectSuccess = (payload) => {
  return {
    type: PATCH_PROJECT_SUCCESS,
    payload,
  };
};
const patchProjectFailure = (payload) => {
  return {
    type: PATCH_PROJECT_FAILURE,
    payload,
  };
};

const getProjets = (payload) => (dispatch) => {
  dispatch(getProjectRequest());

  axios
    .get("http://localhost:8080/project")
    .then((res) => dispatch(getProjectSuccess(res.data)))
    .catch((err) => dispatch(getProjectFailure(err)));
};

const addProjects = (payload) => (dispatch) => {
  dispatch(addProjectRequest());
  return axios
    .post("http://localhost:8080/project/create", payload)
    .then((res) => {
      dispatch(addProjectSuccess());
      console.log(res.data);
    })
    .catch((err) => dispatch(addProjectFailure()));
};

const deleteProjtes = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(deleteProjectRequest());
  return axios
    .delete(`http://localhost:8080/project/delete/${payload}`)
    .then((res) => {
      dispatch(deleteProjectSuccess());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(deleteProjectFailure());
    });
};

const editProject = (payload) => (dispatch) => {
  dispatch(patchProjectRequest());
  return axios
    .patch(`http://localhost:8080/project/edit/${payload.id}`, payload.body)
    .then((res) => {
      dispatch(patchProjectSuccess());
    })
    .catch((err) => {
      dispatch(patchProjectFailure());
    });
};

export { addProjects, editProject,getProjets, deleteProjtes };
