import React from "react";
import FirstPage from './Pages/FirstPage/';
import Admin from './Pages/Admin/';
import Musics from './Pages/Musics/';
import Music from './Pages/Music/';
import AddMusic from './Pages/AddMusic/';

import { BrowserRouter, Switch, Route} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Admin/Musics" component={Musics} />
            <Route exact path="/Admin/Music/:id" component={Music} />
            <Route exact path="/Admin/AddMusic" component={AddMusic} />
            
            <Route exact path="/Admin/EditMusic" component={Admin} />
            <Route exact path="/Admin/DeleteMusic" component={Admin} />
        </Switch>
    </BrowserRouter>
);

export default Routes;