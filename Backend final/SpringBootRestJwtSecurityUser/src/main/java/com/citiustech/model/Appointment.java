
package com.citiustech.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String appointmentTitle;
	private String physician;
	private Date appointmentDate;
	private String appointmentTime;
	
	private String meetingDescription;
	private String email;

	@OneToOne
	private Patient patient;

	

	public Appointment() { super(); 
	}



	public Appointment(String appointmentTitle, String physician, Date appointmentDate, String appointmentTime,
			String meetingDescription, String email, Patient patient) {
		super();
		this.appointmentTitle = appointmentTitle;
		this.physician = physician;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.meetingDescription = meetingDescription;
		this.email = email;
		this.patient = patient;
	}
  
  }
