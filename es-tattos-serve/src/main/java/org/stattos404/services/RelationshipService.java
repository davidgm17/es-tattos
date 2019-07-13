package org.stattos404.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IRelationship;
import org.stattos404.models.db.relationships.Relationship;
import org.stattos404.repository.RelationshipRepository;

@Service
public class RelationshipService implements IRelationship {

	@Autowired
	private RelationshipRepository relationshipRepository;

	@Override
	public List<Relationship> getAll() {
		return (List<Relationship>) relationshipRepository.findAll();
	}

}
