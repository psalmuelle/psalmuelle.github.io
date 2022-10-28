import React from "react";
import "./error.css";
import { useRouteError } from "react-router-dom";

export default function Err (){
    const error = useRouteError();
    return (
        <div>

            This is an error page Thnak you for your time.

            <i>{error.statusText || error.message}</i>
        </div>
    )
}