$("document").ready(function() {
    let customCssLink = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/gh/jloshngu/jloshngu.github.io@main/ngu-tdx-overrides-style.css"
    });
    customCssLink.appendTo('head');
});
