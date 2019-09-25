import axios from "axios";
import {
  GET_USER_INFO,
  GET_USER_FOLLOWERS,
  GET_PARTNERS,
  GET_OTHER_USER_INFO
} from "./types";

export const getUserInfo = () => ({ type: GET_USER_INFO });

export const getUserFollowers = () => ({ type: GET_USER_FOLLOWERS });

export const getPartners = () => ({ type: GET_PARTNERS });

export const getOtherUserProfile = user_id => ({
  type: GET_OTHER_USER_INFO,
  user_id: user_id
});

export function editUserProfile(data) {
  let postData = data;
  if (postData["coverpic"] || postData["avatar"]) {
    postData = new FormData();
    Object.keys(data).forEach(param => postData.append(param, data[param]));
  }
  return axios.post("/api/userupdate/", postData);
}

export function unFollowUser(data) {
  return axios.post("/api/unfollow/", data);
}

export function followUser(data) {
  return axios.post("/api/follow/", data);
}
