package com.citiustech.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.citiustech.model.Diagnosis;

public interface DiagnosisAutoCompleteRepository extends JpaRepository<Diagnosis, String>{
	
	@Query(value="select diagnosis_text from diagnosis where diagnosis_text like %:keyword% ",nativeQuery = true)
	public List<String> search(@Param("keyword") String keyword); 

}
