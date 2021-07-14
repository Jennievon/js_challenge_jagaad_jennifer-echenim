import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import repo from '~/api-request'
const request = (context: Context, inject: Inject) => {
    inject('repo', repo(context))
}

export default request
