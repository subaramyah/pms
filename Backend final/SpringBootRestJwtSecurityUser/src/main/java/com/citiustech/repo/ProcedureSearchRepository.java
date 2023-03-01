package com.citiustech.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.citiustech.model.Procedure;

public interface ProcedureSearchRepository extends JpaRepository<Procedure, String> {
	
	@Query(value="select procedure_type from procedure_master where procedure_type like %:keyword2% ",nativeQuery = true)
	public List<String> search(@Param("keyword2") String keyword2); 

}
