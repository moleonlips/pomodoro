import { FileHandle } from "./file.handler.js";

export class Render {


    notesRender(notes) {
        let htmlArr = notes.map((a, b) => {
            return `<div class="text-gray-700 text-xs px-2 py-4 rounded-md bg-amber-100 mt-4">${a.content}</div>`
        })
        console.log(`htmlArr:`, htmlArr);
        
        return htmlArr.join('');
    }

    

    renderHTML(container, data) {

        data.forEach((item, index) => {

            // layer 1
            let task_container = document.createElement('div');
            task_container.classList.add('p-4','bg-amber-50','rounded-md','mt-4','first:border-l-8','first:border-l-black','first:border-solid')
            index === 0? task_container.classList.add('border-l-8','border-l-black','border-solid'): null

            // layer 2
            let task_flex = document.createElement('div');
            task_flex.classList.add('flex','justify-between','items-center')

            // layer 3
            let icon_name_contain = document.createElement('div');

            let icon = document.createElement('i');
            icon.classList.add('fa-solid','fa-circle-check','text-2xl')
            item.isDone? icon.classList.add('text-green-400'): icon.classList.add('text-gray-400')

            icon.addEventListener('click', ()=> {
                console.log(item.id);
            })

            let task_name_tag = document.createElement('span');
            task_name_tag.classList.add('text-gray-600','text-xs','ml-1')
            item.isDone? task_name_tag.classList.add('line-through')
                : task_name_tag.classList.remove('line-through');
                task_name_tag.innerText = item.taskName

            icon_name_contain.appendChild(icon);
            icon_name_contain.appendChild(task_name_tag);

            task_flex.appendChild(icon_name_contain)

            // layer 3
            let task_process = document.createElement('div');
            task_process.classList.add('flex','items-center')

            let actPomos = document.createElement('span');
            actPomos.classList.add('text-gray-400','text-xs','mr-2')
            actPomos.innerText = `${item.actPomos}`
            task_process.appendChild(actPomos)

            let estPomos = document.createElement('span');
            estPomos.classList.add('text-gray-400','text-xs','mr-2')
            estPomos.innerText = `/ ${item.estPomos}`
            task_process.appendChild(estPomos)

            let editTask_icon_content = document.createElement('div');
            editTask_icon_content.classList.add('text-center','grid','items-center','w-8','h-8','rounded-md','text-gray-600','border','border-solid','border-gray-300','hover:cursor-pointer')

            let icon_edit_task = document.createElement('i');
            icon_edit_task.classList.add('fa-solid','fa-ellipsis-vertical')
            icon_edit_task.addEventListener('click', () => {
                console.log(`clicked:`, item.id);
            })

            editTask_icon_content.appendChild(icon_edit_task)
            task_process.appendChild(editTask_icon_content);

            task_flex.appendChild(task_process)
            
            task_container.appendChild(task_flex)

            if(item.note.length > 0) {
                item.note.forEach((note) => {
                    let noteItem = document.createElement('div');
                    noteItem.classList.add('text-gray-700','text-xs','px-2','py-4','rounded-md','bg-amber-100','mt-4')
                    noteItem.textContent = note.content
                    task_container.appendChild(noteItem)
                })
            }

            container.appendChild(task_container);

        })

    }

}