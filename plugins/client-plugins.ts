// import Vue from 'vue'
// import { Context } from '@nuxt/types'
// import { Inject } from '@nuxt/types/app'
// import Notifications from '~/components/notification-response'

// export default function (ctx: Context, inject: Inject) {
//     const component = Vue.extend({
//         data() {
//             return {
//                 status: '' as String,
//                 message: '' as String,
//             }
//     },
//     render(h) {
//             return h(Notifications, {
//                 props: {
//                     status: this.status,
//                     message: this.message,
//                 },
//                 on: {
//                     closeModal: () => this.close(),
//                 },
//             })
//         },
//         methods: {
//             close() {
//                 this.$mount().$el.remove()
//             },
//         },
//     })
//     inject('notification', (status, message) => {
//         const notification = new component()
//         notification.status = status
//         notification.message = message

//         document.body.appendChild(notification.$mount().$el)
//         setTimeout(() => {
//             notification.$mount().$el.remove()
//         }, 2000)
//     })
// }
