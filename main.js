const hamburger = document.querySelector('.hamburger')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navItems = document.querySelector('.navitems')
const body = document.querySelector('.filtered-body')

hamburger.addEventListener('click', () => {
  console.log('clicked')
  open.classList.toggle('active')
  close.classList.toggle('active')
  navItems.classList.toggle('visible-menu')
  body.classList.toggle('active')
})

navItems.addEventListener('click', () => {
  navItems.classList.remove('visible-menu')
  body.classList.remove('active')
})
