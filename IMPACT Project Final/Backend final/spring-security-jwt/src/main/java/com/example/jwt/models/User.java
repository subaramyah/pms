package com.example.jwt.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	 @NotBlank
	 @Size(max = 20)
	private String username;
	 
 	@NotBlank
 	@Size(max = 120)
	private String password;
	
	@NotBlank
	@Email
	@Size(max = 50)
	private String email;
	
	
	@Size(max = 15)
	private String contactNumber;

	
	 public User() {
	  }

	  public User(String username, String email, String password,String contactNumber) {
	    this.username = username;
	    this.email = email;
	    this.password = password;
	    this.contactNumber = contactNumber;

	  }
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	

}
