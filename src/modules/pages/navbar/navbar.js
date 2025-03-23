import { LightningElement } from 'lwc';

export default class Navbar extends LightningElement {
    isMenuOpen = false;
    brandName = 'Mr. SFDC';

    get navClass() {
        return this.isMenuOpen ? 'nav-links show' : 'nav-links';
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}