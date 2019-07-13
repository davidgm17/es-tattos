package org.stattos404.interfaces;

import java.util.Optional;

import org.stattos404.models.db.user.Images;

public interface IImages {
 public Optional<Images>  findById(Long Id);
}
