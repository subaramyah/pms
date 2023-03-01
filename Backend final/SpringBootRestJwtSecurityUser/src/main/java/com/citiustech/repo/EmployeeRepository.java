package com.citiustech.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
