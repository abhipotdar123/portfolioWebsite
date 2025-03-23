import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="photo-container${0}"${2}><img src="/public/assets/abhinav-profile.jpg" alt="Abhinav Potdar" class="profile-photo${0}"${2}></div>`;
const $fragment2 = parseFragment`<h1${3}>Hi, I&#x27;m <span class="highlight${0}"${2}>Abhinav Potdar</span></h1>`;
const $fragment3 = parseFragment`<p class="static-text${0}"${2}>A passionate Salesforce Developer and Tech Enthusiast.</p>`;
const $fragment4 = parseFragment`<div class="cta${0}"${2}><a href="/about" class="cta-button${0}"${2}>Learn More About Me</a></div>`;
const stc0 = {
  classMap: {
    "home-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "hero": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "text-content": true
  },
  key: 4
};
const stc3 = {
  classMap: {
    "typing-effect": true
  },
  key: 5
};
const stc4 = {
  classMap: {
    "typing-text": true
  },
  key: 8
};
const stc5 = {
  classMap: {
    "typing-words": true
  },
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, t: api_text, d: api_dynamic_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("section", stc1, [api_static_fragment($fragment1(), 3), api_element("div", stc2, [api_element("div", stc3, [api_static_fragment($fragment2(), 7), api_element("p", stc4, [api_text("I am a "), api_element("span", stc5, [api_text(api_dynamic_text($cmp.typingWords))])]), api_static_fragment($fragment3(), 11)]), api_static_fragment($fragment4(), 13)])])])];
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
tmpl.stylesheetToken = "pages-home_home";
freezeTemplate(tmpl);
