package org.stattos404.interfaces;

import java.util.List;

import org.stattos404.models.db.user.Appointment;

public interface IAppointment {
	public Appointment addAppointment(Appointment appointment);

	public List<Appointment> getAppointmentsByStudioId(Long studioId);
}
		