package com.citiustech.model;



import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class PatientDetailsData {
	
	@NotNull
	@Autowired(required=true)
	private PatientDetails patientDetails;
	
	@NotNull
	@Autowired(required=true)
   // @Qualifier("kin")
	private Kin kin;
	
	@Autowired(required=true)
	@NotNull
	private PatientAddress address;
	
	@Autowired(required=true)
	@NotNull
	private PatientAllergy patientAllergy;

}
