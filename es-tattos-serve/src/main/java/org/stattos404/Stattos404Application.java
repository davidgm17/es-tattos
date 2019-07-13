package org.stattos404;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class Stattos404Application {

	public static void main(String[] args) {
		SpringApplication.run(Stattos404Application.class, args);
	}

}

