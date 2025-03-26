import { Render } from "./render.handler.js";

export class FileHandle {

    
    readAndRender(path) {
        let render = new Render();
        // read json file
        var xObj = new XMLHttpRequest();
        xObj.overrideMimeType('application/json')
        xObj.open('GET',path, true)

        xObj.onreadystatechange = function () {
            if(xObj.readyState == 4 && xObj.status == "200") {

                let data = JSON.parse(xObj.responseText);

                // data.sort((a, b) => {
                //     return b.piority - a.piority
                // })

                let container = document.querySelector('#task-container')
                render.renderHTML(container, data)
                
            }
        }

        xObj.send(null)
    }
}