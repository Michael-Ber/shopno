const form = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let messages = {
                success: 'Спасибо, скоро мы с вами свяжемся',
                loading: 'Идет загрузка',
                failure: 'Что-то пошло не так'
            };
            
            const sendingData = async(url, data) => {
                let res = await fetch(url, {
                    method: 'POST',
                    body: data
                });
                return await res.text();
            };

            let dialogBG = document.createElement('div');
            dialogBG.classList.add('popup__dialog-bg');
            dialogBG.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, .5);
                z-index: 100;
            `;

            let dialog = document.createElement('div');
            dialog.classList.add('popup_dialog-bg_modal');
            dialog.style.cssText = `
                width: 500px;
                height: 310px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                padding: 40px;
            `;

            let dialogText = document.createElement('span');
            dialogText.style.cssText = `
                display: block;
                font-size: 25px;
                color: blue;
                padding-top: 55px;
            `;
            dialogText.textContent = messages.loading;

            let closeDialog = document.createElement('i');
            closeDialog.setAttribute('data-close', '');
            closeDialog.innerHTML = '&times;';
            closeDialog.style.cssText = `
                text-align: end;
                font-size: 40px;
            `;

            dialog.appendChild(closeDialog);
            dialog.appendChild(dialogText);
            dialogBG.appendChild(dialog);

            let body = document.querySelector('body');
            body.appendChild(dialogBG);
            body.style.overflow = 'hidden';
          
            let formdata = new FormData(form);
            sendingData('./assets/server.php', formdata)
                .then(res => console.log(res))
                .then(() => dialogText.textContent = messages.success)
                .then(() => {
                    dialogBG.addEventListener('click', (e) => {
                        if(e.target.classList.contains('popup__dialog-bg')) {
                            closeDialogBox();
                        }
                    });
                    closeDialog.addEventListener('click', (e) => {
                        closeDialogBox();
                    });
                })
                .catch(() => dialogText.textContent = messages.failure)
                .finally(() => {
                    form.reset();
                    let timerID = setTimeout(() => {
                        closeDialogBox();
                    }, 4000);
                });
            
            function closeDialogBox() {
                dialogBG.remove();
                body.style.overflow = 'visible';
            }
        });
    });
};
export default form;