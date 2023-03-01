package com.citiustech.model;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Component
public class PatientVisitData {
	
	private VitalSigns vitalSigns;
	
	private Diagnosis diagnosis;
	
	private Medication medication;
	
	private  Procedure procedure;
	
	 @JsonIgnore
	private String email;

}
