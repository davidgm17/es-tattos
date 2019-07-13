package org.stattos404;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.db.user.Users;
import org.stattos404.services.RegisterService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public void userRegister(@RequestBody Users users) {
        registerService.userRegister(users);
    }
}
