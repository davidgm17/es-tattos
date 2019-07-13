package org.stattos404.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.stattos404.models.db.user.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, Long> {
	
	public Users findByEmailAndPassword(String email, String password);

	public Page<Users> findAll(Pageable limit);
	
}
