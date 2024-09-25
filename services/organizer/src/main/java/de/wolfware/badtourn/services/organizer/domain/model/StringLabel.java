package de.wolfware.badtourn.services.organizer.domain.model;

public sealed interface StringLabel permits Spielklasse {
    String getLabel();
}
