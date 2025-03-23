import _implicitStylesheets from "./home.css";
import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="home-container${0}"${2}><section class="hero${0}"${2}><div class="photo-container${0}"${2}><img src="/public/assets/abhinav-profile.jpg" alt="Abhinav Potdar" class="profile-photo${0}"${2}></div><div class="text-content${0}"${2}><div class="typing-effect${0}"${2}><h1${3}>Hi, I&#x27;m <span class="highlight${0}"${2}>Abhinav Potdar</span></h1><p class="typing-text${0}"${2}>I am a <span class="typing-words${0}"${2}>${"t13"}</span></p><p class="static-text${0}"${2}>A passionate Salesforce Developer and Tech Enthusiast.</p></div><div class="cta${0}"${2}><a href="/about" class="cta-button${0}"${2}>Learn More About Me</a></div></div></section></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(13, null, api_dynamic_text($cmp.typingWords))])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-6le4c39rot8";
tmpl.legacyStylesheetToken = "pages-home_home";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
