package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.PatientAddress;

public interface PatientAddressRepository extends JpaRepository<PatientAddress, Long>{

}
