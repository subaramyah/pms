package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Physician;

public interface PhysicianRepository extends JpaRepository<Physician, Long> {

}
