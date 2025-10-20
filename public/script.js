
    const tabs = document.querySelectorAll('.menu a'); // SELECIONA CLASSE .MENU
    const contents = document.querySelectorAll('.tab-content'); // 

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {// EVENTO DE CLICK 
        tabs.forEach(t => t.classList.remove('active'));// remove o css e a pagina anterior
        tab.classList.add('active');// adicona 

        contents.forEach(c => c.classList.remove('active'));// 
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
      });
    });