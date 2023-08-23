import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import enJson from './translations/en.json'
import ptBRJson from './translations/pt-BR.json'
import frJson from './translations/fr.json'
import esJson from './translations/es.json'

i18next.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    ptBR: ptBRJson,
    fr: frJson,
    es: esJson
  }
})

export default i18next