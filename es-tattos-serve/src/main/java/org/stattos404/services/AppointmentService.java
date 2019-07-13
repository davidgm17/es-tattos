package org.stattos404.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IAppointment;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.repository.AppointmentRepository;

@Service
public class AppointmentService implements IAppointment {

	@Autowired
	private AppointmentRepository appointmentRepository;

	public AppointmentService() {

	}

	@Override
	public Appointment addAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	public List<Appointment> getAppointmentsByStudioId(Long studioId) {
		return appointmentRepository.findAllByStudioId(studioId);
	}

}
