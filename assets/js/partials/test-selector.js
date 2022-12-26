var select = document.querySelector('select');

select.addEventListener('change', myFunction);

function myFunction() {
    var selectedValue = select.value
    var pictures = document.querySelectorAll('a.project')
    console.log(pictures)

    if (selectedValue !== 'all') {
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].style.display = 'none';
            for (let ii = 0; ii < pictures[i].classList.length; ii++) {
                if (pictures[i].classList[ii] === selectedValue) {
                    pictures[i].style.display = 'inline-block';
                }
            }
        }
    }
    else {
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].style.display = 'inline-block';
        }
    }
  }