hyper.io-handlebars
==========================

Handlebars Template Middleware for Hyper.io

## NPM
```sh
$ npm install hyper.io-handlebars
```

## Use
```javascript
var hyper      = require('hyper.io');
var handlebars = require('hyper.io-handlebars');

// add Handlebars, this is optional,
// hyper.io will auto try to require the 'handlebars'
// if it's not included in the middleware already
hyper().use(handlebars);

// load config and routes
hyper().start({
    routes: [
        {
            view: "/hello",
            template: "hello {{ hello }} - {{ ts }}",
            method: {
                get: function world($done)
                {
                    $done( {
                        hello: "world",
                        ts: new Date()
                    } );
                }
            }
        }
    ]
});

```