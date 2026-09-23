import { computed, ref, watch } from 'vue'
import { content, defaultLocale, localeOptions } from './data/portfolio'

const STORAGE_KEY = 'portfolio-locale'

const isSupported = (code) => localeOptions.some((option) => option.code === code)

const readStoredLocale = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isSupported(stored) ? stored : defaultLocale
  } catch {
    return defaultLocale
  }
}

const locale = ref(readStoredLocale())
const t = computed(() => content[locale.value])

watch(
  locale,
  (code) => {
    document.documentElement.lang = code
    document.title = content[code].meta.title
  },
  { immediate: true },
)

const setLocale = (code) => {
  if (!isSupported(code)) return

  locale.value = code

  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Storage can be blocked (private mode, cleared site data); the choice just won't persist.
  }
}

export const useI18n = () => ({ locale, t, setLocale, localeOptions })
