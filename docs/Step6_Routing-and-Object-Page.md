## Step 5 - Routing and Object Page

1. Install `react-router-dom`

For using an internal page navigation, we make use of [`react-router-dom`](https://reacttraining.com/react-router/web/guides/quick-start).
You can install this library by running `npm install react-router-dom --save`.

2. Create a Detail Page

Create a folder `detail` with an `index.jsx` file. In this file, import the `ObjectPage` from `@ui5/webcomponents-react` and render it with a title and subtitle.
```jsx harmony
import { ObjectPage } from "@ui5/webcomponents-react";
import React from "react";

const StoreDetail = () => {

  return <ObjectPage title="Store Details" subTitle="Subtitle"/>
};

export default StoreDetail;

```

3. Add routing logic to your `App.js`

You can now adjust your `App` Component in `src/App.js` to make use of the router. 
Therefore, you need to import the `HashRouter` and the `Route` Components from `react-router-dom` as well as the detail component.
The path for the Store Detail view should accept an dynamic `storeId` parameter, you can achieve that by using the `:`-prefix in a path segment.
You can adjust your code as follows:
```jsx harmony
import { HashRouter, Route } from 'react-router-dom'
import StoreDetail from "./detail";
import Home from "./home";

function App() {
  return (
    <ThemeProvider withToastContainer>
      <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/stores/:storeId" component={StoreDetail}/>
      </HashRouter>
    </ThemeProvider>
  );
}
```

4. Add the ObjectPageHeader by using a Form component

Copy and paste the [storeMasterData.json](https://github.com/MarcusNotheis/dkomsv-2020-ui5-webcomponents/tree/master/src/detail/storeMasterData.json) into your project and import it in your details component.
Add the following imports to `src/detail/index.jsx`:
```jsx harmony
import { Form, FormItem } from "@ui5/webcomponents-react";
import masterdata from './storeMasterData.json';
```

Create a `renderHeader` function using `useCallback`:
```jsx harmony
const StoreDetail = () => {

  const renderHeader = useCallback(() => {

    return (
      <Form>
        <FormItem labelText="Address">{masterdata.address}</FormItem>
        <FormItem labelText="Store Manager">{masterdata.storeManager}</FormItem>
        <FormItem labelText="Revenue">{masterdata.revenue}</FormItem>
      </Form>
    );
  }, []);

  return <ObjectPage title={masterdata.storeName}
                     subTitle={masterdata.storeType} 
                     renderHeaderContent={renderHeader}/>
};
```
 
