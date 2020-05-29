# Adding new page
### 1. Create new file ```[name]Page.js``` in location /src/pages 
``` javascript
import React from 'react';

function ExamplePage() {
 	let hey = 'Hey!!!!!!!!!!!!!!!!!'
  return (
    <div >
		{ hey } It's my new page.
    </div>
  );
}

export default ExamplePage;
```
You can create new catalog or use existing, whether your site/component matches to domain of any of the directories.

### 2. Create new or import components.
You can find them in /src/components.

### 3. Register the route in /src/config/routes.js
 ```javascript
 {
    path: "/example",
    component: ExamplePage,
    key: "Example"
  }
  
 // it will render component like that:
// <Route path="/example" component={ExamplePage} key="Example"/>
```
  
  It will be injected to declaration of router in index.js like below.
  
``` javascript
// don't copy that
 <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
      </Switch>
```

So, you can use another props defined in [official docs](https://reacttraining.com/react-router/web/api/Route "official docs") for your new route. 

### 4. Go to your new path: http://localhost:3000/example
Create links for that in /src/components/common/Navbar.js or another needed location.

``` html
<a href="/example"> Go to example </a>
```