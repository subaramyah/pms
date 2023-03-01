package com.example.jwt.service;


import java.util.stream.Collectors;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.jwt.models.UserDetailsImpl;
import com.example.jwt.models.User;
import com.example.jwt.repository.UserRepository;


@Service
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository repository;

	
	 @Override
	    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

			//Logic to get the user form the Database
			//loading model class user object
			User user =  repository.findByEmail(email);
			System.out.println("1111111111111"+user);
			
			//converting into spring security User object
			System.out.println("22222222222"+UserDetailsImpl.build(user));
			return UserDetailsImpl.build(user);
			

	     
			
			

	    }

}
