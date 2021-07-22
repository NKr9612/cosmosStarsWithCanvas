import Sky from "./tools/Sky";
import "./sass/index.scss";

const sky = new Sky(document.querySelector("#canvas"));
sky.run();

// let promise = new Promise(function (resolve, reject) { resolve("ok") });
