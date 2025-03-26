import { FileHandle } from "./file.handler.js";

export class Render {


    notesRender(notes) {
        let htmlArr = notes.map((a, b) => {
            return `<div class="text-gray-700 text-xs px-2 py-4 rounded-md bg-amber-100 mt-4">${a.content}</div>`
        })
        return htmlArr.join('');
    }

    renderHTML(container, data) {

        let html = ''

        let textRender = data.map((item) => {
            return `<div class="p-4 bg-amber-50 rounded-md mt-4 first:border-l-8 first:border-l-black first:border-solid dragable">
                        <div class="flex justify-between items-center">
                            <div>
                                <i class="fa-solid fa-circle-check text-2xl ${item.isDone? 'text-green-400': 'text-gray-400'}"></i>
                                <span class="text-gray-600 text-xs ml-1 ${item.isDone? 'line-through': ''}">${item.taskName}</span>
                            </div>

                            <div class="flex items-center">
                                <span class="text-gray-400 text-xs mr-2">${item.actPomos}</span> <span
                                    class="text-gray-400 text-xs mr-2">
                                    / ${item.estPomos}</span>
                                <div
                                    class="text-center grid items-center w-8 h-8 rounded-md text-gray-600 border border-solid border-gray-300 hover:cursor-pointer">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                        </div>

                        ${item.note.length > 0? this.notesRender(item.note): ''}
                        </div>
                        `
        }).join('')

        html += textRender;

        container.innerHTML = html;
    }

}