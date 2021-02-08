# UKMDesignAssets
Javascript, css og andre assets for UKMDesign

## Innhold
- Hvordan ta i bruk UKMDesignAssets
- Ramme for endringer i UKMDesignAssets
## Hvordan ta i bruk UKMDesignAssets
**Steg 1**\
For å ta i bruk UKMDesignAssets må du først installere Sass.\
`npm install -g sass`

**Steg 2**\
Det er anbefalt å lage en mappestruktur for å separere scss og css filer.
```
- stylesheets
  - scss
  - css
```

**Steg 3**\
Opprett en .scss fil i scss mappen din og importer en css fil med tilsvarende navn fra css mappen i HTML filen din. Denne css filen eksisterer ikke enda, men kommer til å bli kompilert i et senere steg.

```
- stylesheets
  - scss
      styles.scss
  - css
      styles.css      // eksisterer ikke enda
```
```html
<head>
  <link rel="stylesheet" href="./styles/css/styles.css">
</head>
```

**Steg 4**\
Lim inn import funksjonen i eksempelet under på toppen av .scss filen din og skift ut `<relative path>` med din relative path til mappen hvor UKMDesignAssets har blitt lagret på pcen din.
```scss
@import '<relative path>/UKMDesignAssets/scss/index';
```

**Steg 5**\
Lim inn den @extend funksjonen som tilsvarer fargepaletten du skal bruke i prosjektet ditt i `:root` i .scss filen din.
```scss
@import '<relative path>/UKMDesignAssets/scss/index';

:root {
  @extend %color-palette-ukm; // UKM blå
  @extend %color-palette-bak-ukm; // Bak UKM orange
}
```

**Steg 6**\
Kjør følgende kommando i terminalen for å la sass observere og kompilere endringer i scss filen din til css når scss filen lagres.\
`sass --watch ./styles/scss/styles.scss ./styles/css/styles.css`

**Steg 7**\
Du har nå satt opp sass riktig for å ta i bruk UKMDesignAssets.

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