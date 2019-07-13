package org.stattos404.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.stattos404.models.db.studio.Studio;

public interface StudioRepository extends CrudRepository<Studio, Long>{

	Page<Studio> findAll(Pageable limit);

}
