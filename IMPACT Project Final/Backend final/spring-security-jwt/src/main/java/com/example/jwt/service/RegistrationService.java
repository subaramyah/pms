package com.example.jwt.service;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.models.User;
import com.example.jwt.repository.UserRepository;
import com.example.jwt.request.SignUpRequest;

import lombok.NonNull;


@Service
public class RegistrationService {
	
	
	
	@Autowired
	private UserRepository userRepository;
	
	public String  registerTheUser(SignUpRequest signupRequest) {
		User patient = new User(
				signupRequest.getUserName(),
				signupRequest.getEmail(),null,
				signupRequest.getContactNumber());
		
				userRepository.save(patient);
		
		return "User registered successfully" ;
	
	}
	
	
	
}
