# A-Welzijn Filters

v1.0.2

### Hoe het te gebruiken

```javascript
"dependencies": {
	"awelzijn-filters": "latest"
 }
```
```javascript
var app = angular.module('yourApp', [
	'awelzijn.filters'
]);
```

#### Datum filter

```html
<p>{{ctrl.vandaag | datum}}</p>
```
Deze filter gaat de datum omzetten in *gisteren*, *vandaag*, *morgen* of gaat de volgende notatie gebruiken: **22 feb 15**.

#### ToTrusted filter

```html
<p>{{ctrl.html | to_trusted}}</p>
```
Deze filter wordt gebruikt om gecompileerde HTML code weer te geven.

#### Geslacht filter

```html
<p>{{ctrl.geslachtcode | geslacht}}</p>
```
Deze filter gaat een geslachtcode (m/v) omzetten naar *Man* of *Vrouw*.

#### INSZ filter

```html
<p>{{ctrl.insznummer | insz}}</p>
```
Deze filter gaat een rijksregisternummer in de volgende notatie weergeven: **12.34.56-789.01**.

#### Leeftijd filter

```html
<p>{{ctrl.geboortedatum | leeftijd}}</p>
```
Deze filter gaat een geboortedatum omzetten naar de leeftijd.

#### Capitalize filter

```html
<p>{{ctrl.naam | capitalize}}</p>
```
Deze filter gaat elke eerste letter van elk woord van een string naar een hoofdletter omzetten.

#### Verwijder Whitespace filter

```html
<p>{{ctrl.whatever | nowhitespace}}</p>
```
Deze filter gaat de alle spaties van een string weghalen.