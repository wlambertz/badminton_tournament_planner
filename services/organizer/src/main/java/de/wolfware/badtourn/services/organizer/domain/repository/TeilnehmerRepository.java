package de.wolfware.badtourn.services.organizer.domain.repository;

import de.wolfware.badtourn.services.organizer.domain.model.Teilnehmer;


public interface TeilnehmerRepository {
  Teilnehmer findByName(String name);

  Teilnehmer save(Teilnehmer teilnehmer);
}
