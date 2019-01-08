const PATH_RENAULT_ICON = '../../assets/leaflet/images/Renault.png';
const PATH_VOLKSWAGEN_ICON = '../../assets/leaflet/images/Volkswagen.png';

const TAILLE_LOGO = 30;
const INDEX_HAUT_LOGO = TAILLE_LOGO/2;
declare let L;

const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [TAILLE_LOGO, TAILLE_LOGO],
        iconAnchor:   [TAILLE_LOGO, TAILLE_LOGO],
        popupAnchor:  [-INDEX_HAUT_LOGO, -TAILLE_LOGO]
    }
});

const renaultIcon = new LeafIcon({iconUrl: PATH_RENAULT_ICON});
const volkswagenIcon = new LeafIcon({iconUrl: PATH_VOLKSWAGEN_ICON}); 

export function getMarqueIcone(marque) {
	switch (marque) {
		case 'Renault':
			return renaultIcon;
			break;
		case 'Volkswagen':
			return volkswagenIcon;
			break;
}

}