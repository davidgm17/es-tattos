package org.stattos404.interfaces;

import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;
import org.stattos404.models.login.LoginRq;

public interface ILogin {
	public Users doLogin(LoginRq rq);

	UserPerfilResponse doLoginDvd(LoginRq rq);
}
