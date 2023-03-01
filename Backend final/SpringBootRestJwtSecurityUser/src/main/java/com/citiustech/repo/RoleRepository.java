package com.citiustech.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.ERole;
import com.citiustech.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

	Optional<Role> findByName(ERole name);
}
