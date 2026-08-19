const RETURN_POSITION_KEY = 'portfolio-return-position'

export const saveReturnPosition = () => {
  sessionStorage.setItem(RETURN_POSITION_KEY, JSON.stringify({
    path: window.location.pathname,
    scrollY: window.scrollY,
  }))
}

export const getReturnPosition = () => {
  try {
    return JSON.parse(sessionStorage.getItem(RETURN_POSITION_KEY))
  } catch {
    return null
  }
}

export const restoreReturnPosition = (pathname) => {
  const saved = getReturnPosition()
  if (!saved || saved.path !== pathname) return false

  requestAnimationFrame(() => window.scrollTo(0, saved.scrollY))
  setTimeout(() => window.scrollTo(0, saved.scrollY), 120)
  sessionStorage.removeItem(RETURN_POSITION_KEY)
  return true
}
