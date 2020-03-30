// tslint:disable no-var-requires
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body{
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

*::before {
  clear: both;
  margin-left: -1px;
}

html {
  height: 100%;
  font-size: 10px;
}

body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  max-width: 100%;
  height: 100%;
  font-size: 1.3rem;
  color: #000;
  overflow-x: hidden;
  background-image: url(${require("../../public/background.svg")});
}

a {
  text-decoration: none;
  color: #000;
}
`;

export default GlobalStyle;
