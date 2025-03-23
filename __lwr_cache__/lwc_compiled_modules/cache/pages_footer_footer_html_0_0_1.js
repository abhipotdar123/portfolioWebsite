import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./footer.css";

import _implicitScopedStylesheets from "./footer.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<footer class="footer${0}"${2}><div class="footer-content${0}"${2}><div class="social-links${0}"${2}><a href="https://github.com/abhipotdar123" target="_blank" class="social-link${0}"${2}><img src="public/assets/github-icon.png" alt="GitHub"${3}></a><a href="https://www.linkedin.com/in/abhinavpotdar1" target="_blank" class="social-link${0}"${2}><img src="public/assets/linkedin-icon.png" alt="LinkedIn"${3}></a><a href="https://www.salesforce.com/trailblazer/abhinavpotdar1" target="_blank" class="social-link${0}"${2}><img src="public/assets/trailhead-icon.png" alt="Trailhead"${3}></a></div><p${3}>© 2025 | This site was developed by Abhinav Potdar using LWC Open Source, built with modern web technologies.</p></div></footer>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
tmpl.stylesheetToken = "pages-footer_footer";
freezeTemplate(tmpl);
