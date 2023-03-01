package com.citiustech.restcontroller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.citiustech.model.Employee;
import com.citiustech.model.Kin;
import com.citiustech.model.Nurse;
import com.citiustech.model.Patient;
import com.citiustech.model.PatientAddress;
import com.citiustech.model.PatientAllergy;
import com.citiustech.model.PatientDetails;
import com.citiustech.model.PatientDetailsData;
import com.citiustech.model.Physician;
import com.citiustech.model.User;
import com.citiustech.repo.EmployeeRepository;
import com.citiustech.repo.KinRepository;
import com.citiustech.repo.NurseRepository;
import com.citiustech.repo.PatientAddressRepository;
import com.citiustech.repo.PatientDetailsRepository;
import com.citiustech.repo.PatientRepository;
import com.citiustech.repo.PhysicianRepository;
import com.citiustech.repo.UserRepository;
import com.citiustech.request.LoginRequest;
import com.citiustech.response.MessageResponse;

@RestController
@RequestMapping("/details")
public class PatientDetailsController {

	@Autowired
	private PatientDetailsRepository patientDetailsRepository;

	@Autowired
	private PatientAddressRepository patientAddressRepository;

	@Autowired
	private KinRepository kinRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PhysicianRepository physicianRepository;
	
	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private EmployeeRepository employeeRepository ;
	
	@Autowired
	private NurseRepository nurseRepository;

	// patientDetails

	@PostMapping("/patient")
	public ResponseEntity<?> createUser(
			@RequestBody(required = true) @Autowired(required = true) PatientDetailsData patientDetailsData) {

		System.out.println(patientDetailsData.getPatientDetails().getFirstName());
		System.out.println(patientDetailsData.toString());

		// Patient Address
		PatientAddress address = new PatientAddress(patientDetailsData.getAddress().getStreet(),
				patientDetailsData.getAddress().getCity(), patientDetailsData.getAddress().getState(),
				patientDetailsData.getAddress().getCountry(), patientDetailsData.getAddress().getPostalCode());

		patientAddressRepository.save(address);

		// Patients's Kin
		Kin kin = new Kin(patientDetailsData.getKin().getEmail(), patientDetailsData.getKin().getContactNumber(),
				patientDetailsData.getKin().getEmail(), patientDetailsData.getKin().getFirstName(),
				patientDetailsData.getKin().getLastName(), patientDetailsData.getKin().getTitle());

		kinRepository.save(kin);

		// Patient's Allergy
		//
		PatientAllergy allergy = new PatientAllergy(patientDetailsData.getPatientAllergy().getAllergy_id(),
				patientDetailsData.getPatientAllergy().getType());

		PatientDetails details = new PatientDetails(patientDetailsData.getPatientDetails().getTitle(),
				patientDetailsData.getPatientDetails().getFirstName(),
				patientDetailsData.getPatientDetails().getLastName(),
				patientDetailsData.getPatientDetails().getContactNumber(),
				patientDetailsData.getPatientDetails().getEmail(), patientDetailsData.getPatientDetails().getAge(),
				patientDetailsData.getPatientDetails().getRace(), patientDetailsData.getPatientDetails().getEthnicity(),
				patientDetailsData.getPatientDetails().getLanguagesKnown(),
				patientDetailsData.getPatientDetails().getGender(),
				patientDetailsData.getPatientDetails().getDateOfBirth(), address, kin);

		patientDetailsRepository.save(details);
		
		Optional<Patient> p1 = patientRepository.findByEmail(patientDetailsData.getPatientDetails().getEmail());
		
		if(p1.isPresent()) {
			
			Patient p = p1.get();

			p.setPatientDetails(details);

			patientRepository.save(p);

		}
		return ResponseEntity.ok(new MessageResponse("Patient Details Saved Successfully!"));
	}

	
	
	@PostMapping("/patient/edit_patient/{email}")
	public ResponseEntity<?> editUser(
			@RequestBody(required = true) @Autowired(required = true) PatientDetailsData patientDetailsData,@PathVariable ("email") String email) {

		System.out.println("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"+patientDetailsData.getPatientDetails().getFirstName());
		System.out.println(patientDetailsData.toString());

		// Patient Address
		PatientAddress address = new PatientAddress(patientDetailsData.getAddress().getStreet(),
				patientDetailsData.getAddress().getCity(), patientDetailsData.getAddress().getState(),
				patientDetailsData.getAddress().getCountry(), patientDetailsData.getAddress().getPostalCode());

		patientAddressRepository.save(address);

		// Patients's Kin
		Kin kin = new Kin(patientDetailsData.getKin().getEmail(), patientDetailsData.getKin().getContactNumber(),
				patientDetailsData.getKin().getEmail(), patientDetailsData.getKin().getFirstName(),
				patientDetailsData.getKin().getLastName(), patientDetailsData.getKin().getTitle());

		kinRepository.save(kin);

		// Patient's Allergy
		//
		PatientAllergy allergy = new PatientAllergy(patientDetailsData.getPatientAllergy().getAllergy_id(),
				patientDetailsData.getPatientAllergy().getType());

		PatientDetails details = new PatientDetails(patientDetailsData.getPatientDetails().getTitle(),
				patientDetailsData.getPatientDetails().getFirstName(),
				patientDetailsData.getPatientDetails().getLastName(),
				patientDetailsData.getPatientDetails().getContactNumber(),
				patientDetailsData.getPatientDetails().getEmail(), patientDetailsData.getPatientDetails().getAge(),
				patientDetailsData.getPatientDetails().getRace(), patientDetailsData.getPatientDetails().getEthnicity(),
				patientDetailsData.getPatientDetails().getLanguagesKnown(),
				patientDetailsData.getPatientDetails().getGender(),
				patientDetailsData.getPatientDetails().getDateOfBirth(), address, kin);

		patientDetailsRepository.save(details);
		
		/*
		 * Optional<Patient> p1 =
		 * patientRepository.findByEmail(patientDetailsData.getPatientDetails().getEmail
		 * ());
		 */
		 Optional<Patient> p1 =patientRepository.findByEmail(email);
		
		if(p1.isPresent()) {
			
			Patient p = p1.get();

			p.setPatientDetails(details);

			patientRepository.save(p);

		}
		return ResponseEntity.ok(new MessageResponse("Edited Patient Details Saved Successfully!"));
	}
	
	
	@GetMapping("/all_physician")
	public List<Physician> getAllPhysicians() {
		return physicianRepository.findAll();
	}

	@GetMapping("/all_nurses")
	public List<Nurse> getAllNurses() {
		return nurseRepository.findAll();
	}
	
	@GetMapping("/all_patients")
    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }
	
	@GetMapping("/all_employee")
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

	/*
	 * @GetMapping("/patient_details") public PatientDetails
	 * getPatientDetailsWhoisLogin(@Valid @RequestBody LoginRequest loginRequest) {
	 * 
	 * Optional<PatientDetails> pd =
	 * patientDetailsRepository.findByEmail(loginRequest.getEmail()); PatientDetails
	 * pd2 = pd.get(); return pd2; }
	 */
	
	@GetMapping("/patient_details/{email}")
    public PatientDetails getPatientDetailsWhoisLogin(@PathVariable ("email") String email) {

 

        Optional<PatientDetails> pd = patientDetailsRepository.findByEmail(email);
        if(pd.isPresent()) {
            PatientDetails pd2 = pd.get();
            return pd2;    
        }
        else {
            return null;
        }
        
    }
    
    @GetMapping("/user_details/{email}")
    public User getUserDetail(@PathVariable ("email") String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            return user.get();
        }
        else {
            return null;
        }
    }
}
