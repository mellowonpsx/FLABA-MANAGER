var json_schema = '{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","properties":{"id":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}},"required":["default","IT","EN","DE"]},"valore":{"type":"string"}},"required":["nome-campo","valore"]},"comune":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"localita":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"provincia":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"coordinate":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"latitudine":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"number"}}},"longitudine":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"number"}}}}},"qualita_acque":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"stelle":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"classificazione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"descrizione_area":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"accesso_pubblico":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"handicap":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"parcheggio":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"servizi_igienici":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"area_pubblica":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"area_verde":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"area_privata":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"area_pic_nic":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"area_giochi":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"bar_ristorante":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"attracco_barche":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"piste_ciclopedonali":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"strutture_sportive":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"servizio_attivo":{"type":"boolean"},"descrizione":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}}}}},"sport_praticabili":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"lista":{"type":"array","items":[{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}}]}}}}},"informazioni_utili":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"guardia_medica":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}},"pronto_soccorso":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"nome":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}},"farmacia":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"nome":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}},"polizia_provinciale":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}},"carabinieri":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}},"polizia_locale":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"indirizzo":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}},"telefono":{"type":"object","properties":{"nome-campo":{"type":"object","properties":{"default":{"type":"string"},"IT":{"type":"string"},"EN":{"type":"string"},"DE":{"type":"string"}}},"valore":{"type":"string"}}}}}}},"_id":{"type":"string"}},"required":["id","comune","localita","provincia","coordinate","qualita_acque","descrizione_area","informazioni_utili","_id"]}';