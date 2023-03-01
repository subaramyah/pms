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
public class VitalSigns {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long VitalId;
	
	@NotNull
	private String height;
	
	@NotNull
	private String weight;

	private String bloodPressure;

	@NotNull
	private String bodyTemp;
	
	@NotNull
	private String respiratinRate;
	
	public VitalSigns() {
		
	}

	public VitalSigns(@NotNull String height, @NotNull String weight, String bloodPressure, @NotNull String bodyTemp,
			@NotNull String respiratinRate) {
		super();
		this.height = height;
		this.weight = weight;
		this.bloodPressure = bloodPressure;
		this.bodyTemp = bodyTemp;
		this.respiratinRate = respiratinRate;
	}

}
