package com.citiustech.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Component
public class PatientAddress {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String street;
	private String city;
	private String state;
	private String country;
	private String postalCode;
	
	//@OneToOne(fetch = FetchType.EAGER)
	//@JoinTable(name = "patientDetails", joinColumns = @JoinColumn(name = "addressId"), inverseJoinColumns = @JoinColumn(name = "patient_details_id"))
	//private PatientDetails patientDetails;
	
	public PatientAddress() {
		
	}
	
	public PatientAddress(String street, String city, String state, String country, String postalCode) {
		super();
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postalCode = postalCode;
	}
	
	

}
