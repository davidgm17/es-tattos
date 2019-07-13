package org.stattos404.interfaces;

import java.util.List;

import org.stattos404.models.VO.GlobalEventsResponse;
import org.stattos404.models.db.global_events.GlobalEvents;

public interface IGlobalEvents {
	public List<GlobalEventsResponse> getAllEvents();

	public void addEvent(GlobalEvents event);
}
