package com.citiustech.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Component
public class Kin {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String email;
	private long contactNumber;
	private String relationship;
	private String firstName;
	private String lastName;
	private String title;
	
	public Kin() {
		
	}
	
	public Kin(String email, Long contactNumber, String relationship, String firstName, String lastName, String title) {
		super();
		this.email = email;
		this.contactNumber = contactNumber;
		this.relationship = relationship;
		this.firstName = firstName;
		this.lastName = lastName;
		this.title = title;
	}
	
	

}
