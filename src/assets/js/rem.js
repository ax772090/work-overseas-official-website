(function () {
  // document.body.style.fontSize = '14px'
  // document.html.style.fontSize = '100%'
  document.body.style.fontSize = '100%'
  const setRem = () => {
    let vw = document.documentElement.clientWidth
    document.documentElement.style.fontSize = vw / 19.2 + 'px'
  }
  setRem()
  window.onresize = setRem
}())
