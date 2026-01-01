# 📝 Anleitung: Fokussierte Änderungen vornehmen

## 🎨 Design & Styling

### Globale Farben & Design-System ändern
**Datei:** `app/globals.css`
- Hier sind alle globalen Farben definiert (Obsidian Black, Purple, Gold, etc.)
- Ändere CSS-Variablen für Farbpalette
- Scrollbar-Styling
- Hintergrund-Farben

### Fonts ändern
**Datei:** `app/layout.tsx` (Zeilen 5-13)
- Aktuell: Geist Sans & Geist Mono (Google Fonts)
- Ändere die Font-Imports hier
- Beispiel: `import { Inter, Roboto } from "next/font/google"`

---

## 🔘 Buttons ändern

### Homepage - Haupt-CTA Button (Affiliate)
**Datei:** `app/page.tsx`
- **Zeilen 104-109:** "Get Your Personal Reading Now" Button
- Ändere: Farbe, Größe, Text, Link (`href="#"`)

### Individual Number Page - Affiliate Button
**Datei:** `app/number/[slug]/page.tsx`
- **Zeilen 139-148:** "Connect with an Advisor Now" Button
- Ändere: Styling, Text, Link

### Digital Products Buttons
**Datei:** `app/number/[slug]/page.tsx`
- **Zeile 178:** "Get Report" Button (Purple)
- **Zeile 193:** "Download" Button (Pink)
- **Zeile 210:** "Shop Collection" Button (Indigo)

### Alle Buttons auf einmal ändern
Erstelle eine **Komponenten-Datei:**
`app/components/Button.tsx` - Dann kannst du alle Buttons zentral steuern

---

## 📄 Seiten-Inhalte ändern

### Homepage (Startseite)
**Datei:** `app/page.tsx`
- Hero-Section Text (Zeilen 17-27)
- "What Are Angel Numbers?" Text (Zeilen 43-56)
- CTA-Section (Zeilen 96-114)
- "How It Works" Section (Zeilen 117-140)

### Individual Number Pages (z.B. /number/111)
**Datei:** `app/number/[slug]/page.tsx`
- Layout und Struktur aller Number-Pages
- Änderungen hier gelten für ALLE Number-Pages

---

## 📊 Daten & Inhalte ändern

### Angel Numbers Datenbank
**Datei:** `data/angel-numbers.ts`
- Hier sind alle Angel Numbers definiert
- Füge neue Numbers hinzu
- Ändere Texte, Bedeutungen, Keywords
- Neue Kategorien hinzufügen (love, career, spiritual, etc.)

---

## 🛠 Tools & Features hinzufügen

### Neue Komponenten erstellen
Erstelle Ordner: `app/components/`
Beispiele:
- `Button.tsx` - Wiederverwendbare Buttons
- `Card.tsx` - Karten-Komponenten
- `NumberCard.tsx` - Angel Number Karten
- `SearchBar.tsx` - Such-Funktion

### Neue Seiten/Routes erstellen
Erstelle im `app/` Ordner neue Dateien:
- `app/about/page.tsx` → `/about`
- `app/contact/page.tsx` → `/contact`
- `app/blog/page.tsx` → `/blog`

### API Routes (Backend-Funktionen)
Erstelle: `app/api/` Ordner
- `app/api/numbers/route.ts` → API für Numbers
- `app/api/search/route.ts` → Such-API

---

## 🎯 Häufige Änderungen - Schnellzugriff

### Button-Farbe ändern:
1. Finde Button in der entsprechenden Datei
2. Ändere `bg-{color}-600` Klasse (z.B. `bg-purple-600` → `bg-blue-600`)
3. Ändere `hover:bg-{color}-700` entsprechend

### Text ändern:
1. Finde den Text in der Datei
2. Ändere direkt zwischen den Tags: `<h1>HIER</h1>`

### Farbe ändern (globale Themes):
1. Öffne `app/globals.css`
2. Ändere die CSS-Variablen:
   ```css
   --obsidian-black: #000000;
   --neon-violet: #8b5cf6;
   --mystic-gold: #fbbf24;
   ```

### Font-Größe ändern:
- Ändere Tailwind-Klassen: `text-sm`, `text-lg`, `text-xl`, `text-2xl`, etc.
- Beispiel: `text-2xl` → `text-3xl`

---

## 📁 Datei-Struktur Übersicht

```
app/
├── layout.tsx          → Globale Layout-Einstellungen, Fonts, Metadata
├── globals.css         → Globale Styles, Farben, CSS-Variablen
├── page.tsx            → Homepage (/)
├── number/
│   └── [slug]/
│       ├── page.tsx    → Individual Number Pages (/number/111, etc.)
│       └── not-found.tsx
└── components/         → (Noch zu erstellen) Wiederverwendbare Komponenten

data/
└── angel-numbers.ts    → Datenbank aller Angel Numbers
```

---

## ⚡ Hot Reload

Nach jeder Änderung:
- Speichere die Datei (Cmd+S)
- Browser aktualisiert automatisch
- Siehst Änderungen sofort!

---

## 💡 Tipps

1. **Komponenten wiederverwenden:** Erstelle gemeinsame Komponenten in `app/components/`
2. **Tailwind CSS verwenden:** Nutze Tailwind-Klassen für schnelles Styling
3. **DevTools nutzen:** Browser DevTools (F12) zum Testen von Änderungen
4. **Kopieren & Anpassen:** Buttons/Komponenten kopieren und anpassen

