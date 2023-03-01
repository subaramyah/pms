
package com.citiustech.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.citiustech.model.Appointment;
import com.citiustech.model.AppointmentRequest;
import com.citiustech.model.Patient;
import com.citiustech.repo.AppointmentRepository;
import com.citiustech.repo.PatientRepository;
import com.citiustech.repo.PhysicianRepository;
import com.citiustech.response.MessageResponse;

@RestController

@RequestMapping("/appointment")
public class AppointmentController {

	@Autowired
	private AppointmentRepository appointmentRepository;

	@Autowired
	PatientRepository patientRepository;
	
	@PostMapping("/save_appointment/{email}")
    public ResponseEntity<MessageResponse> saveAppointment(@RequestBody AppointmentRequest appointmentRequest ,
            @PathVariable ("email") String email) {
       
        Optional<Patient> p = patientRepository.findByEmail(email);
		if (p.isPresent()) {
			Patient p2 = p.get();

			Appointment appointment = new Appointment();

			appointment.setPatient(p2);
			appointment.setPhysician(appointmentRequest.getPhysician());
			appointment.setMeetingDescription(appointmentRequest.getMeetingDescription());
			appointment.setAppointmentTitle(appointmentRequest.getAppointmentTitle());
			appointment.setAppointmentTime(appointmentRequest.getAppointmentTime());
			appointment.setAppointmentDate(appointmentRequest.getAppointmentDate());
			appointment.setEmail(email);

			appointmentRepository.save(appointment);

			return ResponseEntity.ok(new MessageResponse("Appointment Saved Successfully!"));
		}

		else {
			return ResponseEntity.ok(new MessageResponse("Appointment Not Saved properly!"));
		}
	}
	
	@RequestMapping("/all_appointment")
	public List<Appointment> getAllAppointment(){
		
		return appointmentRepository.findAll();
	}
	
	@RequestMapping("/patients_appointment/{email}")
	public List<Appointment> getPatientsAppointment( @PathVariable ("email") String email){
		List<Appointment> list = appointmentRepository.findByEmail(email);
		return list;
	} 
}
