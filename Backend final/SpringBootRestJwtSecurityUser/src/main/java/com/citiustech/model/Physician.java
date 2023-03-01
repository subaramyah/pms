package com.citiustech.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.NonNull;

@Data
@Entity
@Table(name = "physicians", uniqueConstraints = {
                @UniqueConstraint(columnNames = "email") })
public class Physician {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 50)
	@Email
	@NonNull
	private String email;

	@NotNull
	@Size(max = 25)
	private String firstName;

	@Size(max = 25)
	private String lastName;

	@Size(max = 15)
	private String contactNumber;

	@Enumerated(EnumType.STRING)
	private EGender gender;

	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;
	
	private String specialization;
	
	private String role;

	
	public Physician(@NotBlank @Size(max = 50) @Email @NonNull String email,
			@NotNull @Size(max = 25) String firstName,
			@Size(max = 25) String lastName, @Size(max = 15) String contactNumber, EGender gender, Date dateOfBirth,
			String specialization,String role) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.specialization =specialization;
		this.role=role;
		
	}
	
	public Physician() {
		
	}

	
}
	
	


