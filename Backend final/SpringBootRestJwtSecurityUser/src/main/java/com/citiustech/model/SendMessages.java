package com.citiustech.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SendMessages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer msg_id;
	private String physicians;
	private String message_body;
	//private Date date;
	private LocalDateTime date;
	

}
