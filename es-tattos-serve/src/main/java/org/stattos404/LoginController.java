package org.stattos404;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;
import org.stattos404.models.login.LoginRq;
import org.stattos404.services.LoginService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/auth/login")
	public Users doLogin(@RequestBody LoginRq rq) {
		return loginService.doLogin(rq);
	}
	
	@PostMapping("/auth/login/2")
	public UserPerfilResponse doLoginDvd(@RequestBody LoginRq rq) {
		return loginService.doLoginDvd(rq);
	}
}
