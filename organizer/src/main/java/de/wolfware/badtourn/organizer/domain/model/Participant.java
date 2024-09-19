package de.wolfware.badtourn.organizer.domain.model;

import java.time.LocalDate;

public record Participant(
    String name,
    String verein,
    Spielklasse spielklasse,
    LocalDate geburtsdatum,
    Boolean bezahlt) {}
