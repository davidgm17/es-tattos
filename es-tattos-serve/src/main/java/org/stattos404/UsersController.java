package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.VO.UserPerfilResponse;
import org.stattos404.models.db.user.Users;
import org.stattos404.services.UsersService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UsersController {

	@Autowired
	private UsersService usersService;
	
	@GetMapping("/users")
	public List<Users> getUsers() {
		return usersService.findAll();
	}
	
	@GetMapping("/user/details/{id}")
	public UserPerfilResponse getUserById(@PathVariable("id") Long id) {
		return usersService.findUserById(id);
	}

	@GetMapping("/artists")
	public List<Users> getArtists() {
		return usersService.findAll();
	}
	
	@PutMapping("/users")
	public Users addUser(@RequestBody Users newUser) {
		return usersService.addUser(newUser);
	}
}
