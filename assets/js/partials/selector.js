var select = document.querySelector('select');

select.addEventListener('change', myFunction);

function myFunction() {
    var selectedValue = select.value
    var cells = document.querySelectorAll('div.portfolio-cell')

    if (selectedValue !== 'all') {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.display = 'none';
            for (let ii = 0; ii < cells[i].classList.length; ii++) {
                if (cells[i].classList[ii] === selectedValue) {
                    cells[i].style.display = 'inline-block';
                }
            }
        }
    }
    else {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.display = 'inline-block';
        }
    }
  }