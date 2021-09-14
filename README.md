# sails-react monolith setup
this is a  [Sails v1](https://sailsjs.com) application setup with client-side rendered react app. 
For a server side rendered setup using next.js, check [this project](https://github.com/RasCarlito/sails-hook-next) out

# NOTICE 

There is a copy of .env.example file in the frontend folder.

I have gone ahead to make the build folder ``` assets```.

You can specify your own, but first, take a look at [sails documentation](https://sailsjs.com/documentation/concepts/assets) here before you do.

# Installation process

- to install the react app 
    - using yarn run ```npm run yarn:install:frontend```
    - using npm run ```npm run npm:install:frontend```

# Building React app

- create a ``.env`` file inside ``frontend`` folder and paste the content of ``.env.example`` into it

- to build the react app
    - using yarn ```npm run yarn:build:frontend```
    - using npm ```npm run npm:build:frontend```
# Production Setup process

- set the value of ```sails.config.sockets.onlyAllowOrigins``` in ```config/env/production.js``` on line 257 or follow [deploy Sails app](https://sailsjs.com/documentation/concepts/deployment) instruction in sails documentation

- You can start sails in production ```npm start```

### To build react and lift sails in production mode with a single command

    - using yarn ```npm run yarn:start:project```
    - using npm ```npm run npm:start:project```

# Development Setup
- go ahead and lift the sails app with ```sails lift``` for development mode

- then, to start react in dev mode run
    - using yarn ```npm run yarn:dev:frontend```
    - using npm ```npm run npm:dev:frontend```

### To run react and lift sails in development mode with a single command

    - using yarn ```npm run yarn:dev:project```
    - using npm ```npm run npm:dev:project```
### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sun Sep 12 2021 23:27:23 GMT+0100 (West Africa Standard Time) using Sails v1.4.4.

<!-- Internally, Sails used [`sails-generate@2.0.3`](https://github.com/balderdashy/sails-generate/tree/v2.0.3/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

