package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.db.user.Meeting;
import org.stattos404.services.MeetingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MeetingController {
	@Autowired
	private MeetingService meetingService;
	
	@PutMapping("/meeting")
	public Meeting putMeeting(@RequestBody Meeting meeting) {
		return meetingService.addMeeting(meeting);
	}
	
	@GetMapping("/meeting/{studioId}")
	public List<Meeting> getMeetingFromStudioId(@PathVariable("studioId") Long studioId) {
		return meetingService.getMeetingsFromStudio(studioId);
	}
}
