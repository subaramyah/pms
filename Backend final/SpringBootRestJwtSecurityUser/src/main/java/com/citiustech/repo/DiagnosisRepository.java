package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Diagnosis;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {

}
