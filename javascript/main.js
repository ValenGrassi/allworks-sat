const header = document.getElementById("header");
const $form = document.getElementById("form");
const empresas = document.querySelectorAll(".img-fluid")
const divEmpresas = document.querySelectorAll(".empresas-container")
const servicios = document.querySelectorAll(".service")
const contacts = document.querySelectorAll(".contacts")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})

empresas.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.classList.remove("blur")
    })
})

empresas.forEach(img => {
    img.addEventListener("mouseout", () => {
        img.classList.add("blur")
    })
})

servicios.forEach((servicio) => observer.observe(servicio))
divEmpresas.forEach((empresa) => observer.observe(empresa))
contacts.forEach((contact) => observer.observe(contact))

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if(response.ok){
        Swal.fire({
            position: '',
            icon: 'success',
            title: 'Tu e-mail fue enviado',
            text:"¡Gracias por contactarte con All Works!",
            showConfirmButton: false,
            timer: 2500,
            width: "400px"
          })
        $form.reset()
    }   
}