package org.stattos404.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IGlobalEvents;
import org.stattos404.models.VO.GlobalEventsResponse;
import org.stattos404.models.db.global_events.GlobalEvents;
import org.stattos404.repository.GlobalEventsRepository;

@Service
public class GlobalEventsService implements IGlobalEvents {

	@Autowired
	private GlobalEventsRepository globalEventsRepository;

	@Autowired
	private ListDataSource dataSource;
	
	public GlobalEventsService() {
		super();
	}

	@Override
	public List<GlobalEventsResponse> getAllEvents() {
		Pageable limit = PageRequest.of(0,10);
		Page<GlobalEvents> globaleEvents = globalEventsRepository.findAll(limit);
		List<GlobalEventsResponse> listaResponse = new ArrayList<GlobalEventsResponse> ();
		for(GlobalEvents eventGlobal: globaleEvents.getContent() ) {
			GlobalEventsResponse eventResponse = new GlobalEventsResponse(eventGlobal);
			eventResponse.setPhoto(dataSource.getImagePath(eventGlobal.getPhoto()));
			listaResponse.add(eventResponse);
		}
		return listaResponse ;
	}

	@Override
	public void addEvent(GlobalEvents event) {
		globalEventsRepository.save(event);
	}

	public GlobalEventsResponse getGlobalEvent(Long globalId) {
		Optional<GlobalEvents> globalEvent = globalEventsRepository.findById(globalId);
		if(globalEvent != null) {
			GlobalEventsResponse eventResponse = new GlobalEventsResponse(globalEvent.get());
			eventResponse.setPhoto(dataSource.getImagePath(globalEvent.get().getPhoto()));
			return eventResponse;
		}
		return null;
	}

	
}
