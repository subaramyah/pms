package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Nurse;

public interface NurseRepository extends JpaRepository<Nurse, Long>{

}
