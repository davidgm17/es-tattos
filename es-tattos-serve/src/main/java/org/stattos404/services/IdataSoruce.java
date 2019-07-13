package org.stattos404.services;

import java.util.List;

import org.stattos404.models.VO.GlobalEventsResponse;
import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.models.db.user.Meeting;

public interface IdataSoruce {
	public List<Appointment> getAppointmentsFromStudio(Long studioId);
	public List<Meeting> getMeetingsFromStudio(Long studioId);
	public List<GlobalEventsResponse> getGlobalEvents();
}
