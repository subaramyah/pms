package com.citiustech.response;

import java.util.Optional;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
public class JwtResponse {
	
	@NonNull
	private String token;
	
	private String type = "Bearer";
	
	@NonNull
	private Long id;
	
	@NonNull
	private String email;
	
	//@NonNull
	//private Set<String> roles;
	private String role;

	public JwtResponse(@NonNull String token, @NonNull Long id, @NonNull String email, String role) {
		super();
		this.token = token;
		this.id = id;
		this.email = email;
		this.role = role;
	}
	
}
