package org.stattos404.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IRegister;
import org.stattos404.models.db.user.Users;
import org.stattos404.repository.UsersRepository;

@Service
public class RegisterService implements IRegister {

    @Autowired
    private UsersRepository userRepository;

    @Override
    public void userRegister(Users users) {
        userRepository.save(users);
    }
}
