package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.services.AppointmentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@PutMapping("/appointment")
	public Appointment addAppointment(@RequestBody Appointment appointment) {
		return appointmentService.addAppointment(appointment);
	}
	
	@GetMapping("/appoinment/studioId/{studioId}")
	public List<Appointment> getAppointmentFromStudioId(@PathVariable("studioId") Long studioId) {
		return appointmentService.getAppointmentsByStudioId(studioId);
	}
	
}
