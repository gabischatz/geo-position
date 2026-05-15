GeoPosition PWA v0.3.17

Upload:
1. Inhalt dieses Ordners nach /geo-position/ hochladen.
2. Danach im Android-Chrome öffnen:
   https://overpass-osm.de.cool/geo-position/pwa-daten-loeschen.html
   Dort einmal „Jetzt Browser-PWA-Daten löschen“ drücken.
3. Chrome komplett schließen.
4. Danach öffnen:
   https://overpass-osm.de.cool/geo-position/index.html?app=geoposition-standort-teiler-v0317

Wichtig:
- Die Fertig-Seite erklärt jetzt ausdrücklich:
  1. Geo-Text teilen.
  2. Danach Panoramavideo aufnehmen und ebenfalls versenden.
- Der geteilte Geo-Text enthält ebenfalls den Hinweis, dass das Video separat als zweite Nachricht folgt.
- FotoGeoTool zeigt auf https://overpass-osm.de.cool/FotoGeoTool/index.html
- Manifest, Start-URL und Service Worker wurden auf v0.3.17 angehoben.
- Nach dem Hochladen bitte einmal die PWA-Daten löschen, damit der alte Service-Worker-Cache nicht weiter greift.

Nächster Arbeitsschritt:
- GitHub-Repository für GeoPosition erstellen.
- Projektstruktur sauber hochladen: index.html, manifest.webmanifest, sw.js, version.json, pwa-daten-loeschen.html, README.txt, .htaccess und assets/.


Open-Graph-Hinweis:
- og:image:type ist bei der PNG-Vorschaugrafik absichtlich auf image/x-icon gesetzt.
- Das ist ein Messenger-/WhatsApp-Hack, damit Dienste den Dateikopf der Bilddatei selbst prüfen.
- Nicht automatisch auf image/png korrigieren.
