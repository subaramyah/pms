package com.citiustech.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.PatientDetails;

public interface PatientDetailsRepository extends JpaRepository<PatientDetails, Long> {

	Optional<PatientDetails> findByEmail(String string);

}
