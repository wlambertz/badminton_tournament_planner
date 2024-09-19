#!/bin/baash

set -e

create_forlder_structure() {
    base_folder="$1"
    artifact_name="$2"
    artifact_root="$base_folder/java/de/wolfware/badtourn/$artifact_name"

    adapter_root="$artifact_root/adapter"
    mkdir -p "$adapter_root/persistence" && touch "$adapter_root/persistence/.keep" 
    mkdir -p "$adapter_root/rest" && touch "$adapter_root/rest/.keep"

    app_root="$artifact_root/application"
    mkdir -p "$app_root/usecase" && touch "$app_root/usecase/.keep"

    domain_root="$artifact_root/domain"
    mkdir -p "$domain_root/model" && touch "$domain_root/model/.keep"
    mkdir -p "$domain_root/repository" && touch "$domain_root/repository/.keep"

    infrastructure_root="$artifact_root/infrastructure"
    mkdir -p "$infrastructure_root/config" && touch "$infrastructure_root/config/.keep"


}

