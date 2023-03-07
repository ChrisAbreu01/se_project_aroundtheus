export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._nameField = document.querySelector(".profile__name");
    this._descriptionField = document.querySelector(".profile__subtitle");
  }
  getUserInfo() {
    const userInfoList = {};
    userInfoList.name = this._nameElement.textContent;
    userInfoList.description = this._jobElement.textContent;
    return userInfoList;
  }
  setUserInfo(name, description) {
    this._nameField.textContent = name;
    this._descriptionField.textContent = description;
  }
}
