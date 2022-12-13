import Swal from "sweetalert2"

const successAlert = (message) => {
    Swal.fire(
        `${message}`,
        'You clicked the button!',
        'success'
    )
}

const errorAlert = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${message}`
    })
}

export {
    successAlert,
    errorAlert
}