import * as constants from "../utils/constants.js";
export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    const userInfoList = {};
    userInfoList.name = this._nameElement.textContent;
    userInfoList.description = this._jobElement.textContent;
    return userInfoList;
  }
  setUserInfo(name, description) {
    this.getUserInfo();
    this._nameElement.textContent = name;
    this._jobElement.textContent = description;
  }
}
