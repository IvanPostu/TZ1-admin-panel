import { createElement } from 'react'
import { render } from 'react-dom'
import 'normalize.css'

import '@/main/global.scss'
import { App } from '@/components/App'

render(createElement(App, {}, null), document.getElementById('root'))
