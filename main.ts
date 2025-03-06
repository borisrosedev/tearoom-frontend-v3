import { router } from './router'
import './styles.scss'

window.onpopstate = () => router(window.location.hash)

export default function init() {
    const hash = window.location.hash
    router(hash)
}

init()


