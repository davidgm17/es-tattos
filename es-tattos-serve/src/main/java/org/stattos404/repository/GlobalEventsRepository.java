package org.stattos404.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.stattos404.models.db.global_events.GlobalEvents;

public interface GlobalEventsRepository extends CrudRepository<GlobalEvents, Long>{

	Page<GlobalEvents> findAll(Pageable limit);

}
