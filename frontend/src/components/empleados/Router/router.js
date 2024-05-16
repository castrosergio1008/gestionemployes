import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Crear from "../crud/crear";
import Editar from "../crud/editar";

export default function AppRouter() {
        return ( 
            <Router>
                <Switch>
                    <Route exact path={["/crear"]} component={Crear}/>
                    <Route exact path={["/editar"]} component={Editar}/>
                    <Route path = {"*"} component = {() => (
                        <h1 style={{marginTop: 300}}>
                        404
                        <br/>
                        Página no encontrada
                        </h1>
                    )} />
                </Switch>
            </Router>
         );
}
