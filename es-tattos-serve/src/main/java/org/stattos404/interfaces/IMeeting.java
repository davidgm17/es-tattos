package org.stattos404.interfaces;

import java.util.List;

import org.stattos404.models.db.user.Meeting;

public interface IMeeting {
	public Meeting addMeeting(Meeting meeting);
	public List<Meeting> getMeetingsFromStudio(Long studioId);
}
