package org.stattos404.repository;

import org.springframework.data.repository.CrudRepository;
import org.stattos404.models.db.user.Images;

public interface ImageRepository extends CrudRepository<Images, Long>{

}
