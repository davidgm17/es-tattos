package org.stattos404.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IStudio;
import org.stattos404.models.VO.StudioPerfilResponse;
import org.stattos404.models.db.studio.Studio;
import org.stattos404.repository.StudioRepository;

@Service
public class StudioService implements IStudio{

	@Autowired
	private StudioRepository studioRepository;
	
	@Autowired
	private ListDataSource dataSource;
	
	
	
	/* 
	 * Busca el numero de studios que le pasamos como parametro "pageable"
	 * Devuelve una lista de paginas, "getContent()" devuelve la lista que nos interesa.
	 * 
	 */
	@Override
	
	public List<Studio> getAll() {
		Pageable limit = PageRequest.of(0,15);
		Page<Studio> studies = studioRepository.findAll(limit);
		return studies.getContent();
		/*List<Studio> studies = (List<Studio>) studioRepository.findAll(limit);
		return studies;*/
	}
	
	@Override
	public StudioPerfilResponse findStudioById(Long id) {
		Optional<Studio> studio = studioRepository.findById(id);
		if (studio != null) {
			
			StudioPerfilResponse studioResponse =  new StudioPerfilResponse(studio.get());
			studioResponse.setEventList(dataSource.getMeetingsFromStudio(studioResponse.getId()));
			studioResponse.setAppointmentList(dataSource.getAppointmentsFromStudio(studioResponse.getId()));
			studioResponse.setGlobalEventList(dataSource.getGlobalEvents());
			studioResponse.setPhoto(dataSource.getImagePath(studio.get().getPhotoId()));
			
			return studioResponse;
		} else {
			return null;
		}
	}
	
	
}
