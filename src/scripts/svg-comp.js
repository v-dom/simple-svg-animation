export default h =>
  ({
    endEventHandler
  }) => (h('svg', {
    attrs: {
      width: '100px',
      heigth: '100px'
    }

  }, [
    h('circle', {
      attrs: {
        cx: 10,
        cy: 10,
        r: 5,
        fill: 'red'
      }
    }, [
      h('animate', {
        on: {
          endEvent: [endEventHandler, 'circle animate end']
        },
        attrs: {
          attributeType: 'XML',
          attributeName: 'cx',
          from: '10',
          to: '98',
          dur: '5s'
        }
      })
    ])
  ]));
