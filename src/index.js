import "regenerator-runtime";
import "./style/style.css";
import app from "./scripts/views/app.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

window.$ = $;

document.addEventListener("DOMContentLoaded", app);

// auto import all image from directory
function importAll(r) {
    return r.keys().map(r);
}

importAll(require.context("./images/", false, /\.(png|jpe?g|svg)$/));
