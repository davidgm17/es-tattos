package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.db.relationships.Relationship;
import org.stattos404.services.RelationshipService;

@RestController
public class RelationshipController {

	@Autowired
	private RelationshipService relationshipService;
	
	@GetMapping("/relationship")
	public List<Relationship> getRelationships() {
		return relationshipService.getAll();
	}
}
