import * as selector from "./Constants.js";
export class UserInfo {
  constructor(userName, userJob) {
    this.userName = userName;
    this.userJob = userJob;
  }
  getUserInfo() {
    const userInfoList = {};
    userInfoList.name = this.userName;
    userInfoList.job = this.userJob;
    return userInfoList;
  }
  setUserInfo() {
    selector.profileName.textContent = this.userName;
    selector.profileJob.textContent = this.userJob;
  }
}
