export async function onRequest(context) {
  const url = new URL(context.request.url)
  const path = url.pathname

  let target = null

  if (path.startsWith('/wx')) {
    target = 'https://briefhub-wx.pages.dev'
  } else if (path.startsWith('/pm')) {
    target = 'https://briefhub-pm.pages.dev'
  } else if (path.startsWith('/wb')) {
    target = 'https://briefhub-wb.pages.dev'
  } else if (path.startsWith('/tcdsb')) {
    target = 'https://briefhub-tcdsb.pages.dev'
  } else {
    return context.next()
  }

  const forwardPath = path.replace(/^\/(wx|pm|wb|tcdsb)/, '')
  return fetch(target + forwardPath + url.search)
}
