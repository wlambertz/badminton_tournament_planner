package de.wolfware.badtourn.services.organizer.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Spielklasse implements StringLabel {
    ERSTE_BUNDESLIGA("1. Bundesliga"),
    ZWEITE_BUNDESLIGA("2. Bundesliga"),
    REGIONALLIGA("Regionalliga"),
    OBERLIGA("Oberliga"),
    VERBANDSLIGA("Verbandsliga"),
    LANDESLIGA("Landesliga"),
    BEZIRKSLIGA("Bezirksliga"),
    BEZIRKSKLASSE("Bezirksklasse"),
    KREISLIGA("Kreisliga"),
    KREISKLASSE("Kreisklasse");

    private final String label;
}
