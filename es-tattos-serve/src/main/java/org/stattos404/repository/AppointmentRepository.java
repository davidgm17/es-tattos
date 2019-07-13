package org.stattos404.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.stattos404.models.db.user.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Long>{

	List<Appointment> findAllByStudioId(Long studioId);

}
