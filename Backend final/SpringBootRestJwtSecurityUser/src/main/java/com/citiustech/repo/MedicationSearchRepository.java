package com.citiustech.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.citiustech.model.Medication;

public interface MedicationSearchRepository extends JpaRepository<Medication, String> {
	
	@Query(value="select medication_text from Medication where medication_text like %:keyword1% ",nativeQuery = true)
	public List<String> search(@Param("keyword1") String keyword1); 

}
