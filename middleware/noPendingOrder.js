export default function ({ store, redirect, app }) {
  const order = store.getters.orders.find((el) => el.status === 'pending')
  if (order) {
    app.$fire.info('Tidak dapat melakukan transaksi lain, karena anda masih memiliki transaksi yang belum selesai')
    return redirect('/pro/' + order.id)
  }
}
