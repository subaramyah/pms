package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
