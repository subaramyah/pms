package com.citiustech.model;

import javax.persistence.*;


@Entity
@Table(name  = "messages" , schema = "user_info" )
public class NotificationAll {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column    //( name="appointment_id")
	private int msgId;
	
	@Column   //(name="patient_id")
	private int messageBody;
	public NotificationAll(int msgId, int messageBody) {
		super();
		this.msgId = msgId;
		this.messageBody = messageBody;
	}

	@Override
	public String toString() {
		return "NotificationAll [msgId=" + msgId + ", messageBody=" + messageBody + "]";
	}

	public int getMsgId() {
		return msgId;
	}

	public void setMsgId(int msgId) {
		this.msgId = msgId;
	}

	public int getMessageBody() {
		return messageBody;
	}

	public void setMessageBody(int messageBody) {
		this.messageBody = messageBody;
	}

}
