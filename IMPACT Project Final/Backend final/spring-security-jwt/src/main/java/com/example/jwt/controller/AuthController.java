package com.example.jwt.controller;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.models.User;
import com.example.jwt.repository.UserRepository;
import com.example.jwt.request.SignUpRequest;
import com.example.jwt.response.MessageResponse;
import com.example.jwt.service.RegistrationService;

@RestController

public class AuthController {

	  @Autowired
	  UserRepository userRepository;
	  
	  @Autowired
	  RegistrationService registrationService;
	  
	  @Autowired
	  PasswordEncoder encoder;
	  
	  String response = null;


	  @GetMapping("/")
	    public String home() {
	        return "Welcome to Daily Code Buffer!!";
	    }

	  
	// register
		@PostMapping("/register")
		public ResponseEntity<?> createUser(@Valid @RequestBody SignUpRequest signupRequest) {

			System.out.println(signupRequest.getUserName());

			// check username exist
			if (userRepository.findByEmail(signupRequest.getEmail()) != null) {
				return ResponseEntity.badRequest().body(new MessageResponse("Error: EmailId Already exist"));
			}


			// create user
			User user = new User(signupRequest.getEmail(), encoder.encode(signupRequest.getPassword()),
					signupRequest.getUserName(), signupRequest.getContactNumber());

			userRepository.save(user);
			response = registrationService.registerTheUser(signupRequest);
		
			
			System.out.println(response);
			return ResponseEntity.ok(response);

		}

	  
	  

//	  @PostMapping("/signin")
//	  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
//
//	    Authentication authentication = authenticationManager.authenticate(
//	        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
//	    SecurityContextHolder.getContext().setAuthentication(authentication);
//	    String jwt = jwtUtils.generateJwtToken(authentication);
//	    
//	    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    
//	    List<String> roles = userDetails.getAuthorities().stream()
//	        .map(item -> item.getAuthority())
//	        .collect(Collectors.toList());
//
//	    return ResponseEntity.ok(new JwtResponse(jwt, 
//	                         userDetails.getId(), 
//	                         userDetails.getUsername(), 
//	                         userDetails.getEmail(), 
//	                         roles));
//	  }

	
}
