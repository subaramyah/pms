package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Medication;

public interface MedicationRepository extends JpaRepository<Medication, Long> {

}
