package org.stattos404;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.stattos404.models.VO.StudioPerfilResponse;
import org.stattos404.models.db.studio.Studio;
import org.stattos404.services.StudioService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudioController {

	@Autowired
	private StudioService studioService;

	@GetMapping("/studios")
	public List<Studio> getStudios() {
		return studioService.getAll();
	}

	@GetMapping("/studio/{id}")
	public StudioPerfilResponse getStudioById(@PathVariable("id") Long id) {
		return studioService.findStudioById(id);
	}
}
