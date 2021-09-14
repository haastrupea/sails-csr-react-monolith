/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const path = require('path');
const fs = require('fs/promises');

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },

  'GET /api/v1': { action: 'home/index'},
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
   ***************************************************************************/


  'GET /*':{ skipAssets: true, fn: async function (req,res) {
    // const res = this.res;
    const buildDir = 'assets'; // relative to the root directory
    const build = path.join(process.cwd(),buildDir,'index.html');
    res.type('html');
    try {
      const html = await fs.readFile(build);
      return res.send(html);

    } catch (err) {
      sails.log(err, 'failed to load the react build');
      throw new Error('something went wrong while trying to load the react build located in ', build);
    }
  } }
};
