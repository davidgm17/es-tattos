package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.VO.GlobalEventsResponse;
import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.services.GlobalEventsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GlobalEventsController {

	@Autowired
	private GlobalEventsService globalEventsService;

	@GetMapping("/events")
	public List<GlobalEventsResponse> getAllEvents() {
		return globalEventsService.getAllEvents();
	}

	@GetMapping("/globalEvent/{globalId}")
	public GlobalEventsResponse getGlobalEvent(@PathVariable("globalId") Long globalId) {
		return globalEventsService.getGlobalEvent(globalId);
	}
	
	@PutMapping("/events/add")
	public void addGlobalEvents(@RequestBody GlobalEvents event) {
		globalEventsService.addEvent(event);
	}
}
