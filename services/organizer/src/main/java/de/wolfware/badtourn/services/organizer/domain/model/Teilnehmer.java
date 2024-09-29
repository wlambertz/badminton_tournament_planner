package de.wolfware.badtourn.services.organizer.domain.model;

import java.time.LocalDate;

public record Teilnehmer(
  String name,
  String verein,
  Spielklasse spielklasse,
  LocalDate geburtsdatum,
  Boolean bezahlt) {
}
