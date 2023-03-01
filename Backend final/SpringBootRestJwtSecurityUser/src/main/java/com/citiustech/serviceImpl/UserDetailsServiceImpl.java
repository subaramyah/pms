package com.citiustech.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.citiustech.model.User;
import com.citiustech.model.UserDetailsImpl;
import com.citiustech.repo.UserRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		//loading model class user object
		User user =  repository.findByEmail(email).orElseThrow(()->new UsernameNotFoundException("User not exist" +email));
		//converting into spring security User object
		return UserDetailsImpl.build(user);
	}

}
