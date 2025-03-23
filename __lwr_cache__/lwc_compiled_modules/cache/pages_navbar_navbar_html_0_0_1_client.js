import _implicitStylesheets from "./navbar.css";
import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header class="navbar${0}"${2}><a href="/" class="brand${0}"${2}><img src="/public/assets/brand-logo.jpg" alt="Mr. SFDC Logo" class="brand-logo${0}"${2}></a><button class="hamburger${0}" aria-label="Toggle Menu"${2}>☰</button><nav${"c5"}${2}><ul${3}><li${3}><a href="/" class="nav-link${0}"${2}>Home</a></li><li${3}><a href="/about" class="nav-link${0}"${2}>About Me</a></li><li${3}><a href="/contact" class="nav-link${0}"${2}>Contact Us</a></li></ul></nav><a href="resume.pdf" download class="resume-btn${0}"${2}>Download My Resume</a></header>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, ncls: api_normalize_class_name, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(3, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.toggleMenu)
    })
  }, null), api_static_part(5, {
    className: api_normalize_class_name($cmp.navClass)
  }, null)])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-4apjnkth5ah";
tmpl.legacyStylesheetToken = "pages-navbar_navbar";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
