
package com.citiustech.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citiustech.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	List<Appointment> findByEmail(String email);

}
