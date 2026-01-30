// template_d5mhife
// service_8mw3u2p
// gb1WGF_NbvIc6wReE

function contact() {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_8mw3u2p',
            'template_d5mhife',
            event.target,
            'gb1WGF_NbvIc6wReE'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at oleary.ng@gmail.com"
            )
        })
}