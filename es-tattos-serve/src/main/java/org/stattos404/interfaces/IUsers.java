package org.stattos404.interfaces;

import java.util.List;

import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;

public interface IUsers {
	public List<Users> findAll();
	
	public UserPerfilResponse findUserById(Long id);
}
