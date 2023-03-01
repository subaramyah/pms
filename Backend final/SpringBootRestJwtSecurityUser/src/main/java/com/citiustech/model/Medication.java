package com.citiustech.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Component
public class Medication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long medicationId;
	
	@NotNull
	private String drugName;
	
	@NotNull
	private String medicationText;
	
	public Medication() {
		
	}

	public Medication(@NotNull String drugName, @NotNull String medicationText) {
		super();
		this.drugName = drugName;
		this.medicationText = medicationText;
	}
	
	

}
