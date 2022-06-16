function add(a, b) {
  return a + b
}

function getFullname(user) {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

add(1, 'two')

getFullname({name: {first: 'Joe', midd1e: 'Bud', last: 'Matthews'}})
