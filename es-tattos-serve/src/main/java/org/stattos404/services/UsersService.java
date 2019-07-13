package org.stattos404.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IUsers;
import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;
import org.stattos404.repository.UsersRepository;

@Service
public class UsersService implements IUsers {

	@Autowired
	private UsersRepository userRepository;
	
	@Autowired
	private ListDataSource dataSource;

	@Override
	public List<Users> findAll() {
		Pageable limit = PageRequest.of(0,15);
		Page<Users> users =  userRepository.findAll(limit);
		return users.getContent();
	}

	@Override
	public UserPerfilResponse findUserById(Long id) {
		Optional<Users> user = userRepository.findById(id);
		if (user != null) {
			UserPerfilResponse userPerfil = new UserPerfilResponse(user.get());  
			userPerfil.setEventList(dataSource.getMeetingsFromStudio(userPerfil.getId()));
			userPerfil.setAppointmentList(dataSource.getAppointmentsFromStudio(userPerfil.getId()));
			userPerfil.setGlobalEventList(dataSource.getGlobalEvents());
			userPerfil.setPhoto(dataSource.getImagePath(user.get().getPhotoId()));
			return userPerfil;
		} else {
			return null;
		}
	}

	public Users addUser(Users newUser) {
		newUser.setPhotoId(1L);
		return userRepository.save(newUser);
	}
	
	

}