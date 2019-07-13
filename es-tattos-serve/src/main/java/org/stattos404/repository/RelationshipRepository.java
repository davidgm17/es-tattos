package org.stattos404.repository;

import org.springframework.data.repository.CrudRepository;
import org.stattos404.models.db.relationships.Relationship;

public interface RelationshipRepository extends CrudRepository<Relationship, Long>{

}
