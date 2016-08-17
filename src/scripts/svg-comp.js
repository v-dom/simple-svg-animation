export default h =>
  () => (h('svg', {

    attrs: {
      width: '600px',
      heigth: '300px'
    }

  }, [
    h('circle', {
      attrs: {
        cx: 56,
        cy: 56,
        r: 56,
        fill: 'yellow'
      }
    })
  ]));
