import { all } from "redux-saga/effects";
import { LoginWatcher } from "./loginSaga";

import {
  userInfoWatcher,
  userFollowerWatcher,
  userPartnerWatcher,
  otherUserInfoWatcher
} from "./userActionSaga";
import {
  UserPublicationWatcher,
  PublishPostWatcher,
  getLikedUserWatcher,
  getPromotedUserWatcher,
  otherUserPublicationWatcher
} from "./userPublicationSaga";
import { GetWorkTypesWatcher } from "./workTypeSaga";
import { InfluencersWatcher } from "./influencersSaga";
import { GetAccessTypesWatcher } from "./accessTypeSaga";

export default function* rootSaga() {
  yield all([
    LoginWatcher(),
    userInfoWatcher(),
    userFollowerWatcher(),
    InfluencersWatcher(),
    userPartnerWatcher(),
    UserPublicationWatcher(),
    PublishPostWatcher(),
    GetWorkTypesWatcher(),
    GetAccessTypesWatcher(),
    getPromotedUserWatcher(),
    getLikedUserWatcher(),
    otherUserInfoWatcher(),
    otherUserPublicationWatcher()
  ]);
}
