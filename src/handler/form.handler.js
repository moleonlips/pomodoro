export class FormHandler {
    formSubmit() {
        const formEdit = document.querySelector('#form-edit');
        formEdit.addEventListener('submit', (e) => {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            console.log(formProps);
            
            e.preventDefault();
            
        })
    }
}