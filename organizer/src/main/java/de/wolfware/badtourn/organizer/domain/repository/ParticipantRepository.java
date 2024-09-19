package de.wolfware.badtourn.organizer.domain.repository;

import de.wolfware.badtourn.organizer.domain.model.Participant;


public interface ParticipantRepository {
    Participant findByName(String name);
    Participant save(Participant participant);
}
