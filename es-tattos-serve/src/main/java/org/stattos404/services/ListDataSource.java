package org.stattos404.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;
import org.stattos404.models.VO.GlobalEventsResponse;
import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.models.db.user.Images;
import org.stattos404.models.db.user.Meeting;

/**
 * @author david.gomezmartinez
 * 
 * Usaremos esta Clase para cargar datos usados en diferentes objetos.
 *
 */
@Service
@Configurable
public class ListDataSource implements IdataSoruce {

	@Autowired
	private MeetingService meetingService;
	@Autowired
	private AppointmentService appointementService;
	@Autowired
	private GlobalEventsService globalEventsService;
	
	@Autowired
	private ImageService imageService;
	
	
	public ListDataSource() {
		super();
	}

	/*
	public DataSource(IMeeting meetingService, IAppointment appointementService, 
			IGlobalEvents globalEventsService) {
		super();
		this.appointementService = (AppointmentService) appointementService;
		this.meetingService = (MeetingService) meetingService;
		this.globalEventsService = (GlobalEventsService) globalEventsService;
	}
*/


	@Override
	public List<Appointment> getAppointmentsFromStudio(Long studioId) {
		return appointementService.getAppointmentsByStudioId(studioId);
	}

	@Override
	public List<Meeting> getMeetingsFromStudio(Long studioId) {
		return meetingService.getMeetingsFromStudio(studioId);
	}

	@Override
	public List<GlobalEventsResponse> getGlobalEvents() {
		return globalEventsService.getAllEvents();
	}
	
	public String getImagePath(Long imageId) {
		Optional<Images> imageStudio = imageService.findById(imageId);
		return (imageStudio != null)? imageStudio.get().getPath() : "";

	}

}
