import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faArrowRight, faWhatsapp, faDiscord, faInstagram, faTwitter)

export { FontAwesomeIcon }
