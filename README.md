# GeoPosition

**GeoPosition** ist eine kleine PWA zum Erfassen eines Standorts für Panoramavideos.
Die App speichert **Standort, Blickrichtung und Drehrichtung** und erzeugt daraus einen **teilbaren Geo-Text** mit Link zum **FotoGeoTool**.

Nach dem Teilen des Geo-Textes wird das **Panoramavideo separat aufgenommen und ebenfalls versendet**.

## Funktionen

- Standort per GPS erfassen
- Blickrichtung auf der Karte markieren
- Drehrichtung auf dem gelben Kreis markieren
- Geo-Text mit Koordinaten, Blickwinkel und Drehrichtung teilen
- Link-Übergabe an das **FotoGeoTool**
- Installation als **PWA** auf dem Handy
- Browser-Hinweis nach Installation

## Übersicht

![Übersicht aller App-Schritte](docs/screenshots/uebersicht-alle-schritte.png)

## Screenshots

### 1. Startseite mit Installationsbutton
<img src="docs/screenshots/01-startseite-installation.png" alt="Startseite mit Installationsbutton" width="120">

### 2. Installationsdialog
<img src="docs/screenshots/02-install-dialog.png" alt="Installationsdialog" width="120">

### 3. Browser-Tab nach Installation schließen
<img src="docs/screenshots/03-browser-tab-schliessen.png" alt="Browser-Tab schließen" width="120">

### 4. Startseite der App
<img src="docs/screenshots/04-startseite.png" alt="Startseite App" width="120">

### 5. Ausrichtung auf der Karte setzen
<img src="docs/screenshots/05-ausrichtung.png" alt="Ausrichtung auf der Karte setzen" width="120">

### 6. Fertig-Seite und Geo-Text teilen
<img src="docs/screenshots/06-fertig-geo-text.png" alt="Fertig-Seite und Geo-Text teilen" width="120">

## Ablauf

1. **App öffnen**
2. Optional als **PWA installieren**
3. **Standort** automatisch erfassen lassen
4. **Blickrichtung** auf dem gelben Kreis antippen
5. **Drehrichtung** auf dem gelben Kreis antippen
6. **Geo-Text teilen**
7. Danach das **Panoramavideo aufnehmen**
8. Das **Video ebenfalls versenden**

## Projektstruktur

```text
geo-position/
├── index.html
├── manifest.webmanifest
├── sw.js
├── version.json
├── pwa-daten-loeschen.html
├── .htaccess
├── README.md
└── assets/
```
## 
- Senden Sie zuerst die Geodaten per WhatsApp.
- Nehmen Sie danach das Panoramavideo mit der Kamera-App Ihres Handys auf und senden Sie es ebenfalls per WhatsApp.
- Bitte fügen Sie eine kurze Beschreibung hinzu, damit später alle Informationen zur Bearbeitung vorhanden sind.

**Achtung:** Diese App hat keine eigene Aufnahmefunktion.
```
## Wichtige Hinweise

- Das FotoGeoTool liegt unter:
  `https://overpass-osm.de.cool/FotoGeoTool/index.html`
- Für Messenger-Vorschauen kann bei `og:image:type` absichtlich ein unpassender MIME-Type verwendet werden, damit WhatsApp den Dateikopf der Bilddatei selbst prüft.
- Nach Änderungen an der PWA sollte der Browser-Cache bzw. der Service Worker gegebenenfalls geleert werden.

## Lizenz

CC BY 4.0  
Autor: **Lutz Müller**
