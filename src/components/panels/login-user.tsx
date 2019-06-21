import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { UserModel } from "../../models/user";
import BasePanel from "./base-panel";
import "./login-user.less";
import UserInfoPanel from "./user-info";

interface userInfoPanelProps {
  user: UserModel;
}

const LoginUserPanel: FunctionComponent<userInfoPanelProps> = props => {
  return props.user && props.user.id ? (
    <UserInfoPanel user={props.user} mySelf />
  ) : (
    <BasePanel className="panel-user-info" header="Deno 开源技术社区">
      <p>您可以</p>
      <a className="btn green" href="/api/user/login">
        通过Github登录
      </a>
    </BasePanel>
  );
};

export default LoginUserPanel;