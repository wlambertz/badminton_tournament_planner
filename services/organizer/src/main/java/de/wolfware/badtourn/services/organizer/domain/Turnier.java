package de.wolfware.badtourn.services.organizer.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record Turnier(
  long id,
  String name,
  LocalDate startDatum,
  LocalDate endDatum,
  LocalDateTime anmeldeschluss,
  List<Object> disziplinen, // todo implement specific class
  List<Object> spieltage // todo implement specific class
) {
}
