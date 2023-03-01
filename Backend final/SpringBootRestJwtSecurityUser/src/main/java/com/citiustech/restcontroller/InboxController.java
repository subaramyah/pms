package com.citiustech.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.citiustech.model.SendMessages;
import com.citiustech.repo.SendMessageRepository;
import com.citiustech.response.MessageResponse;

@RestController
@RequestMapping("/inbox")
public class InboxController {
	
	@Autowired
	private SendMessageRepository sendMessageRepository;
	
	@PostMapping("/sendMessage")
	public ResponseEntity<?> createUser(@RequestBody SendMessages sendMessages){
		
		System.out.println(sendMessages.getPhysicians());
	    System.out.println(sendMessages.getMessage_body());
	    sendMessageRepository.save(sendMessages); 
	    return ResponseEntity.ok(new MessageResponse("Message Sent Successfully!"));
	}
	
	@GetMapping("/getMessages")
	public List<SendMessages> getAllMessages(){
		System.out.println(sendMessageRepository.findAll());
		return sendMessageRepository.findAll();
	}

}
