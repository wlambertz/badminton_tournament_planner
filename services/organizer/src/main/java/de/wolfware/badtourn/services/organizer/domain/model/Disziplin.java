package de.wolfware.badtourn.services.organizer.domain.model;

import java.time.LocalDate;
import java.util.List;

public record Disziplin(
        long id,
        String name,
        Geschlechtsklasse geschlecht,
        List<LocalDate> spieltage,
        List<Feld> felder) {
}
