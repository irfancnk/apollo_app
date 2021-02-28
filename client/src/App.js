import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import GqlProvider from "./graphql/Provider";
import Products from "./containers/Products";
import Product from "./containers/Product";


const App = () => {
    return (
        <GqlProvider>
            <Router>
                <Switch>
                    <Route path="/products/:id">
                        <Product />
                    </Route>
                    <Route path="/">
                        <Products />
                    </Route>
                </Switch>
            </Router>
        </GqlProvider>
    );
};

export default App;
