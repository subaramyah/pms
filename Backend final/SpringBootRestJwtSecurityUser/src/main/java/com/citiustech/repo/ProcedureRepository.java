package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Procedure;

public interface ProcedureRepository extends JpaRepository<Procedure, Long> {

}
