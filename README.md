# Women Safety Route Assistant

React + Tailwind CSS + Leaflet/OpenStreetMap safety-navigation demo.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
Needs an internet connection for map tiles and fonts.

## Structure
- `src/data.js`: sample routes, scores, map points, services and tips. Replace with real data or API calls.
- `src/components/`: Navbar, RouteSearch, MapView (Leaflet), LocationMarker, RouteCard, Ring (safety score), SOS, SafetyAlert, InfoCard, Hero, BottomNav, Card, Sec
- `src/App.jsx`: page layout and state
- `src/index.css`: theme, glass cards and animations

Scores and services are sample data. The SOS button is a simulation and sends no alert.
