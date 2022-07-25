import SW from 'sweetalert2'

export default function (ctx, inject) {
  const swal = {
    success(options) {
      return SW.fire({
        icon: 'success',
        title: typeof options !== 'string' ? options.title || 'Sukses' : 'Sukses',
        text: typeof options !== 'string' ? options.text : options,
      })
    },
    error(options) {
      return SW.fire({
        icon: 'error',
        title: typeof options !== 'string' ? options.title || 'Oops...' : 'Oops...',
        text: typeof options !== 'string' ? options.text : options,
      })
    },
    info(options) {
      return SW.fire({
        icon: 'info',
        title: typeof options !== 'string' ? options.title || 'Info' : 'Info',
        text: typeof options !== 'string' ? options.text : options,
      })
    },
    confirm(text = 'Hapus') {
      return SW.fire({
        title: 'Apa kamu yakin?',
        text: 'Anda tidak akan dapat mengembalikan ini!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#007bff',
        cancelButtonText: 'Batal',
        confirmButtonText: `Ya, ${text}!`,
      })
    },
  }
  inject('fire', swal)
}
