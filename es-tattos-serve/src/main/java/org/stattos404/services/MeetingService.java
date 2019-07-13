package org.stattos404.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IMeeting;
import org.stattos404.models.db.user.Meeting;
import org.stattos404.repository.MeetingRepository;

@Service
public class MeetingService implements IMeeting {

	@Autowired
	private MeetingRepository meetingRepository;

	
	public MeetingService() {

	}

	@Override
	public Meeting addMeeting(Meeting meeting) {
		return meetingRepository.save(meeting);
	}

	public List<Meeting> getMeetingsFromStudio(Long studioId) {
		return meetingRepository.findByStudioId(studioId);
	}

}
