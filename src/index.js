import "regenerator-runtime";
import "./style/style.css";
import app from "./scripts/views/app.js";

document.addEventListener("DOMContentLoaded", app);

// auto import all image from directory
function importAll(r) {
    return r.keys().map(r);
}

importAll(require.context("./images/", false, /\.(png|jpe?g|svg)$/));
