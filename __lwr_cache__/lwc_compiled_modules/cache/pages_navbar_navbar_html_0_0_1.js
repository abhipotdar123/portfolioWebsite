import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<a href="/" class="brand${0}"${2}><img src="/public/assets/brand-logo.jpg" alt="Mr. SFDC Logo" class="brand-logo${0}"${2}></a>`;
const $fragment2 = parseFragment`<button class="hamburger${0}" aria-label="Toggle Menu"${2}>☰</button>`;
const $fragment3 = parseFragment`<ul${3}><li${3}><a href="/" class="nav-link${0}"${2}>Home</a></li><li${3}><a href="/about" class="nav-link${0}"${2}>About Me</a></li><li${3}><a href="/contact" class="nav-link${0}"${2}>Contact Us</a></li></ul>`;
const $fragment4 = parseFragment`<a href="resume.pdf" download class="resume-btn${0}"${2}>Download My Resume</a>`;
const stc0 = {
  classMap: {
    "navbar": true
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("header", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.toggleMenu))
    }
  }), api_element("nav", {
    className: $cmp.navClass,
    key: 5
  }, [api_static_fragment($fragment3(), 7)]), api_static_fragment($fragment4(), 9)])];
  /*LWC compiler v2.50.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "pages-navbar_navbar";
freezeTemplate(tmpl);
