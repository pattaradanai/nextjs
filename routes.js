const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
                                                    // about  about     /about
.add('/index', 'index')                           // blog   blog      /blog/:slug
