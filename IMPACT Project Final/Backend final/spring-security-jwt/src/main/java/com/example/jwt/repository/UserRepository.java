package com.example.jwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	 Optional<User> findByUsername(String username);

	  Boolean existsByUsername(String username);

		User findByEmail(String email);


}
