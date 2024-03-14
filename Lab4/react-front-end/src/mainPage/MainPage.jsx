import {Link, Navigate} from "react-router-dom";
import {MainForm} from "./MainForm";
import {Canvas} from "./Canvas";
import {Table} from "./Table";
import {Button} from "primereact/button";
import React from "react";

export function MainPage({isAuthorised}) {
    if (isAuthorised === undefined) {return (<div>Loading</div>);}
    if (isAuthorised) {
        return (
            <div>
                <p>MainPage</p>
                <MainForm />
                <Canvas />
                <Table />
            </div>
        );
    } else {
        return <Navigate to="/start-page" />
    }
}