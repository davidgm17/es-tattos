package org.stattos404.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stattos404.interfaces.IImages;
import org.stattos404.models.db.user.Images;
import org.stattos404.repository.ImageRepository;

@Service
public class ImageService implements IImages {

	@Autowired
	private ImageRepository imageRepository;
	
	@Override
	public Optional<Images> findById(Long ImageId) {
		return imageRepository.findById(ImageId);
	}


}
