# 9_mvc_spa_vuejs

> testing integrate nuxtjs with express framework

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

##installation nuxt (require nodejs)

npm install -g create-nuxt-app

##create project with nuxt

create-nuxt-app <projectname>

##file structure of nuxt

assets : image and webpack build tools behind the scenes etc..
components : component of template for vue (html , style , script in one file of component)
layouts : mask of view
middleware : function between page
pages : html page mangement and route automatically
plugins : shared funtionality in your nuxt
server : middleware and rendering server in the same server or middleware server only (can specify pre-path Ex.~/api/)
static : static assets is something apart from assets folder or something should not be handled by webpack
store : essential component for state management with vuex