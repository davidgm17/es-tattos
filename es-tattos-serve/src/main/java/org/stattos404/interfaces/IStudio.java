package org.stattos404.interfaces;

import java.util.List;

import org.stattos404.models.VO.StudioPerfilResponse;
import org.stattos404.models.db.studio.Studio;

public interface IStudio {
    public List<Studio> getAll();

	StudioPerfilResponse findStudioById(Long id);
}
