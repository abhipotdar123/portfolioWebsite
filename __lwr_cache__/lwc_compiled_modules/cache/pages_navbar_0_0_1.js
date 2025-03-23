import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navbar.html";
class Navbar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.isMenuOpen = false;
    this.brandName = 'Mr. SFDC';
  }
  get navClass() {
    return this.isMenuOpen ? 'nav-links show' : 'nav-links';
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  /*LWC compiler v2.50.0*/
}
_registerDecorators(Navbar, {
  fields: ["isMenuOpen", "brandName"]
});
export default _registerComponent(Navbar, {
  tmpl: _tmpl,
  sel: ""
});