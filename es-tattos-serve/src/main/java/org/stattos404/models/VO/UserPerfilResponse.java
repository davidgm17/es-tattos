package org.stattos404.models.VO;

import java.util.List;

import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.models.db.user.Appointment;
import org.stattos404.models.db.user.Meeting;
import org.stattos404.models.db.user.Users;

public class UserPerfilResponse {

	
	private Long id;
	private String userName;
	private String firstName;
	private String lastName;
	private int age;
	private String email;
	private String photo;
	private String phone;
	private String description;
	
	private List<Appointment> appointmentList;
	private List<Meeting> eventList;
	private List<GlobalEventsResponse> globalEventList;
	
	
	public UserPerfilResponse(Users user) {
		super();
		this.id = user.getId();
		this.userName = user.getUserName();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		this.age = user.getAge();
		this.email = user.getEmail();
		this.phone = user.getPhone();
		this.description = user.getDescription();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photoId) {
		this.photo = photoId;
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
