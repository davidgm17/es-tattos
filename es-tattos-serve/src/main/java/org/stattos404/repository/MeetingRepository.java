package org.stattos404.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.stattos404.models.db.user.Meeting;

@Repository
public interface MeetingRepository extends CrudRepository<Meeting, Long>{
	
	List<Meeting> findByStudioId(Long studioId);

}
