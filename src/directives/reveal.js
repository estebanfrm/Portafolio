let observer

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const getDelay = (value) => {
  if (typeof value === 'number') return value
  if (typeof value?.delay === 'number') return value.delay
  return 0
}

const getObserver = () => {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  return observer
}

export const reveal = {
  beforeMount(el, binding) {
    const delay = getDelay(binding.value)

    el.classList.add('reveal')
    el.style.setProperty('--reveal-delay', `${delay}ms`)
  },

  mounted(el) {
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      el.classList.add('visible')
      return
    }

    getObserver().observe(el)
  },

  beforeUnmount(el) {
    if (observer) observer.unobserve(el)
  },
}
