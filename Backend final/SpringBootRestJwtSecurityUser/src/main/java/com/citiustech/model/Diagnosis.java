package com.citiustech.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
public class Diagnosis {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String diagnosisDescription;
	
	@NotNull
	private String diagnosisText;
	
	public Diagnosis() {
		
	}

	public Diagnosis(@NotNull String diagnosisDescription, @NotNull String diagnosisText) {
		super();
		this.diagnosisDescription = diagnosisDescription;
		this.diagnosisText = diagnosisText;
	}
	
	

}
