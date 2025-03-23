import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
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
  /*LWC compiler v8.13.1*/
}
_registerDecorators(Navbar, {
  fields: ["isMenuOpen", "brandName"]
});
const __lwc_component_class_internal = _registerComponent(Navbar, {
  tmpl: _tmpl,
  sel: "pages-navbar",
  apiVersion: 63
});
export default __lwc_component_class_internal;