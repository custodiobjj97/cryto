function initMenuMobile() {
    const $toggle = document.querySelector('.toggle')
    const $nav = document.querySelector('nav ul')
    const $icon = document.querySelector('.fa-bars')
    $toggle.addEventListener('click', () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars','fa-times')
        } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
        $nav.classList.toggle('active')
    })
}


initMenuMobile()