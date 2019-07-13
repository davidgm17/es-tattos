/**
 * 
 */
package org.stattos404.models.VO;

import java.util.List;

import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.models.db.studio.Studio;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.models.db.user.Meeting;

/**
 * @author david.gomezmartinez
 *
 */
public class StudioPerfilResponse {

	private Long id;
	private String studioName;
	private String photo;
	private String phone;
	private String description;
	private String email;
	
	private List<Appointment> appointmentList;
	private List<Meeting> eventList;
	private List<GlobalEventsResponse> globalEventList;
	
	
	public StudioPerfilResponse(Studio studio) {
		this.id = studio.getId();
		this.studioName = studio.getStudioName();
		this.phone = studio.getPhone();
		this.description = studio.getDescription();
		this.email = studio.getEmail();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getStudioName() {
		return studioName;
	}


	public void setStudioName(String studioName) {
		this.studioName = studioName;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public List<Appointment> getAppointmentList() {
		return appointmentList;
	}


	public void setAppointmentList(List<Appointment> appointmentList) {
		this.appointmentList = appointmentList;
	}


	public List<Meeting> getEventList() {
		return eventList;
	}


	public void setEventList(List<Meeting> eventList) {
		this.eventList = eventList;
	}


	public List<GlobalEventsResponse> getGlobalEventList() {
		return globalEventList;
	}


	public void setGlobalEventList(List<GlobalEventsResponse> globalEventList) {
		this.globalEventList = globalEventList;
	}
	
	
	
	
}
