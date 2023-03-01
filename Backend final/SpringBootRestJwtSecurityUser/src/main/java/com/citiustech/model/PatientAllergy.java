package com.citiustech.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
//@Entity
//@Table(name="patient_allergy")
@Component
public class PatientAllergy {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long patientAllergyId;
	
	@Column(name="allergy_id")
	private String allergy_id;
	
	@Column(name="allergy_type")
	private String type;
	
	
	public PatientAllergy() {
		
	}
	
	public PatientAllergy(String allergy_id, String type) {
		super();
		this.allergy_id = allergy_id;
		this.type = type;
	}
	
	
}
