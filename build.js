var mkdirp = require("mkdirp");
var esperanto = require("esperanto");
var fs = require("fs");
var babel = require("babel");

mkdirp.sync("dist");

// Bundle all the transpiled modules using esperanto
esperanto.bundle({
    base: "src",
    entry: "app.js"
}).then(function (bundle) {

    // Then we generate the UMD bundle, `name` is the name of the module
    // that we're bundling (the global variable that gets created) when
    // using <script>.
    var umd = bundle.toUmd({
        name: "test"
    });

    // Transpile the bundle with Babel
    var transformed = babel.transform(umd.code, {
        blacklist: [
            "useStrict"
        ]
    });

    //Don't expose Babel helpers globally
    var content = "(function() {\n" + transformed.code + "\n})();";
    // Save the generated bundle in the dist directory
    fs.writeFileSync("dist/test.js", content);
}).catch(console.error);
