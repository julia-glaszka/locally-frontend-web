# Project structure
### /docs 
All documentation files. Written in markdown (.md).

### /fake-backend
This is a REST API mockup. You must have running that during development. It works like a database. Uses the json-server tool. In ```db.json``` there are created fake records in json. You can freely creating new schemas and adding records.
##### Starting
In your terminal, type:

``` npm run start```

You should see something like that:
``` bash 
  \{^_^}/ hi!
  Loading db.json
  Loading routes.json
  Done
```
##### Routes
You can see possible rouutes at: [http://localhost:3333](http://localhost:3333 "http://localhost:3333")
##### Docs
See documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server "https://github.com/typicode/json-server")

### /src

The whole code of webapp. Written in React.js.
It contains directories:
- **/components** - small parts of code which providing functionality
  - **/common** - contains typical static elements such as headers, footers, not found
  - **/gallery** - contains components for displaying images (not for offers, it is separated functionality), which can be seen on main page. This module is like instagram gallery of pictures.
  - **/offer-single-view** - it stores components responsible for the view of a single advertisement - photo gallery of the advertisement, content, information about the seller
  - **/offers-management** - it is a panel that allows the user to manage his ads
  - **/offers-panel** panel that displays offers for potential customers
  - **/search** - contains items used in the search component. User can search by term for interesfing to him offers.
  - **/uploader** - elements for uploading photos (it didnt work on local stage :( )
  - **/user-profile** - informations about the user
- **/config**:
  - **config.js**- it defines the stages (local, dev, prod)
  - **endpoints.js** - it defines the central store of mappings to rest api urls
  - **routes.js** - it defining the routes for react-router
- **/pages** - contains full pages 
- **/services** - talking with api