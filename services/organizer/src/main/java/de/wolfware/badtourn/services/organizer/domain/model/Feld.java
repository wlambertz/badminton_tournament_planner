package de.wolfware.badtourn.services.organizer.domain.model;

public record Feld(
  long id,
  String name,
  FeldTyp typ
) {
}
