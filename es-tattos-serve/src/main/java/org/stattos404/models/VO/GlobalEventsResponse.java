package org.stattos404.models.VO;

import java.util.Date;

import org.stattos404.models.db.global_events.GlobalEvents;

public class GlobalEventsResponse {


	private Long id;
	private String photo;
	private String title;
	private Date date;
	private String phone;
	private String description;
	private String email;
	
	
	public GlobalEventsResponse() {
	}


	public GlobalEventsResponse(GlobalEvents globalevent) {
		this.id = globalevent.getId();
		this.title = globalevent.getTitle();
		this.date = globalevent.getDate();
		this.phone = globalevent.getPhone();
		this.description = globalevent.getDescription();
		this.email = globalevent.getEmail();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
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
	
	
}
