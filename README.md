# UKMDesignAssets
Javascript, css og andre assets for UKMDesign

## Ramme for endringer i UKMDesignAssets
### Endringer og tilleggelser
Alle står fritt til å endre eller legge til kode i UKMDesignAssets. Dersom endringene du utfører medfører en visuell endring av eksisterende komponenter eller at en en ny komponent legges til så må dette reflekteres i den grafiske fremstillingen i Adobe XD. Dette gjøres slik at den grafiske fremstillingen man får opp i VSCode samsvarer med de nye endringene.

Tilleggelser markeres som:\
`Add <komponentnavn>`

Endringer markeres som:\
`Refactor <componentname> to <funksjon>`

### Sletting
Sletting av komponenter gjøres av en og samme person som kan slette komponenten fra Adobe XD og DSPen, samt medfølgende JavaScript og CSS kode samtidig.

Sletting markeres som:\
`Remove <komponentnavn>`

### Navneendringer
Endringer i komponentnavn utføres, i likhet med sletting, av en og samme person for å oppdatere Adobe XD og DSPen, samt medfølgende JavaScript og CSS koder samtidig.

Navneendringer markeres som:\
`Rename <gammelt komponentnavn> to <nytt komponentnavn>`

### Hvorfor gjøres det slik?
Adobe XD og DSPen har ikke en two-way binding mellom seg, så endringer som blir foretatt i DSPen vil ikke reflekteres automatisk i Adobe XD. Derimot vil visuelle endringer, tilleggelser og navneendringer foretatt i Adobe XD oppdatere DSPen. Sletting av komponenter i Adobe XD er et unntak der komponenten også må slettes manuelt fra DSPen.