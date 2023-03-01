
package com.citiustech.model;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@NoArgsConstructor
public class AppointmentRequest {
	
	private String email;

	private String appointmentTitle;
	private String physician;
	private Date appointmentDate;
	private String appointmentTime;
	private String meetingDescription;

}
