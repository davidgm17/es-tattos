package org.stattos404.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.ILogin;
import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;
import org.stattos404.models.login.LoginRq;
import org.stattos404.repository.UsersRepository;

@Service
public class LoginService implements ILogin {

	@Autowired
	private UsersRepository userRepository;
	
	@Autowired
	private ListDataSource dataSource;

	@Override
	public Users doLogin(LoginRq rq) {
		List<Users> users = (List<Users>) userRepository.findAll();
		for (Users user : users) {
			if (rq.getEmail().equals(user.getEmail()) && rq.getPassword().equals(user.getPassword())) {
				return user;
			}
		}
		return null;
	}
	
	public UserPerfilResponse doLoginDvd(LoginRq rq) {
		checkLoginRq(rq);
		Users user = (Users) userRepository.findByEmailAndPassword(rq.getEmail(),rq.getPassword());
		if (user != null ) {
			UserPerfilResponse userPerfil = new UserPerfilResponse(user);  
			userPerfil.setEventList(dataSource.getMeetingsFromStudio(userPerfil.getId()));
			userPerfil.setAppointmentList(dataSource.getAppointmentsFromStudio(userPerfil.getId()));
			userPerfil.setGlobalEventList(dataSource.getGlobalEvents());
			userPerfil.setPhoto(dataSource.getImagePath(user.getPhotoId()));
			return userPerfil;
		}
		else {
			return null;
		}
	}
	
	private static void checkLoginRq(LoginRq rq) {
		rq.setEmail((rq.getEmail()!=null)?rq.getEmail().trim():"");
		rq.setPassword((rq.getPassword()!=null)?rq.getPassword().trim():"");
	}

	

}
