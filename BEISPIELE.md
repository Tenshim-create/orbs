# 🎯 Praktische Beispiele für Änderungen

## Beispiel 1: Button-Farbe ändern

### Vorher (in `app/number/[slug]/page.tsx`, Zeile 178):
```tsx
<button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors">
  Get Report
</button>
```

### Nachher (z.B. Blau statt Lila):
```tsx
<button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors">
  Get Report
</button>
```

---

## Beispiel 2: Text ändern

### Homepage Überschrift ändern (`app/page.tsx`, Zeile 19):
**Vorher:**
```tsx
Angel Numbers
```

**Nachher:**
```tsx
Spiritual Number Guide
```

---

## Beispiel 3: Button mit Komponente verwenden

### In `app/number/[slug]/page.tsx`:
**Ersetze:**
```tsx
import Button from "@/app/components/Button";
```

**Dann verwende:**
```tsx
<Button variant="affiliate" size="lg" href="https://affiliate-link.com">
  Connect with an Advisor Now
</Button>
```

---

## Beispiel 4: Globale Farbe ändern

### In `app/globals.css`:
**Vorher:**
```css
--neon-violet: #8b5cf6;
```

**Nachher (z.B. Blau):**
```css
--neon-violet: #3b82f6;
```

Dann ersetze in allen Dateien `purple-` Klassen mit `blue-` (oder passe CSS-Variablen an).

---

## Beispiel 5: Font ändern

### In `app/layout.tsx` (Zeilen 5-13):
**Vorher:**
```tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

**Nachher (z.B. Inter Font):**
```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

Dann ändere in Zeile 34:
```tsx
className={`${inter.variable} antialiased bg-black text-white`}
```

---

## Beispiel 6: Preis ändern

### In `app/number/[slug]/page.tsx` (Zeile 177):
**Vorher:**
```tsx
<span className="text-2xl font-bold text-white">$19</span>
```

**Nachher:**
```tsx
<span className="text-2xl font-bold text-white">$29</span>
```

---

## Beispiel 7: Neuen Angel Number hinzufügen

### In `data/angel-numbers.ts`:
Füge am Ende des Arrays (vor der schließenden `];`) ein:

```tsx
{
  number: "1234",
  slug: "1234",
  title: "1234 Angel Number Meaning - Progressive Steps",
  shortDescription: "1234 represents progressive steps and forward movement in your spiritual journey.",
  keywords: ["1234 meaning", "angel number 1234", "progression", "steps"],
  meanings: {
    general: "1234 is a message to take progressive steps toward your goals. Your angels are guiding you step by step.",
    love: "In love, 1234 suggests taking relationships to the next level through gradual steps.",
    career: "Career progression is happening. Take it step by step and trust the process.",
    spiritual: "Your spiritual journey is progressing. Follow the steps your angels are showing you.",
  },
  color: "Green",
  symbolism: ["Progression", "Steps", "Forward movement", "Guidance"]
}
```

---

## Beispiel 8: Affiliate Link hinzufügen

### In `app/number/[slug]/page.tsx` (Zeile 154):
**Vorher:**
```tsx
<a href="#">
```

**Nachher:**
```tsx
<a href="https://www.kasamba.com/affiliate-link?ref=YOUR_ID" target="_blank" rel="noopener noreferrer">
```

---

## Beispiel 9: Button-Größe ändern

**Kleine Buttons:**
```tsx
className="px-4 py-2 text-sm ..."
```

**Mittlere Buttons:**
```tsx
className="px-6 py-3 text-base ..."
```

**Große Buttons:**
```tsx
className="px-10 py-5 text-lg ..."
```

---

## Beispiel 10: Gradient ändern

### Hero-Section Gradient (`app/page.tsx`, Zeile 11):
**Vorher:**
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
```

**Nachher (z.B. Blau):**
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>
```

