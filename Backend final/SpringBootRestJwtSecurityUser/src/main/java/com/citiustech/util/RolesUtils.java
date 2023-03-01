package com.citiustech.util;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.citiustech.model.ERole;
import com.citiustech.model.Role;
import com.citiustech.repo.RoleRepository;

@Component
public class RolesUtils {

	@Autowired
	private RoleRepository repository;

	public void mapRoles(String usrRoles, Set<Role> dbRoles) {
	
			switch (usrRoles) {
			
			case "ROLE_ADMIN":
				Role role1 = repository.findByName(ERole.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
				dbRoles.add(role1);
				break;
				
			case "ROLE_PHYSICIAN":
				Role role2 = repository.findByName(ERole.ROLE_PHYSICIAN)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
				dbRoles.add(role2);
				break;
			case "ROLE_NURSE":
				Role role3 = repository.findByName(ERole.ROLE_NURSE)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
				dbRoles.add(role3);
				break;
				
			case "ROLE_PATIENT":
				Role role4 = repository.findByName(ERole.ROLE_PATIENT)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
				dbRoles.add(role4);
				break;
			
		}
	}
}
