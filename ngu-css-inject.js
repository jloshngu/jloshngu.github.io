$("document").ready(function() {
  

    let customCssLink = $("<link>", {

        rel: "stylesheet",

        type: "text/css",

        href:
"https://raw.githubusercontent.com/jloshngu/tdx/main/ngu-tdx-overrides-style.css"

    });

    customCssLink.appendTo('head');
});