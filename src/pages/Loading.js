import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Loading', {
  template: `
    <Element x="880" y="500">
      <Circle size="40" color="#94a3b8" :alpha.transition="{value: $alpha, delay: 200}" />
      <Circle size="40" color="#94a3b8" x="60" :alpha.transition="{value: $alpha, delay: 300}" />
      <Circle size="40" color="#94a3b8" x="120" :alpha.transition="{value: $alpha, delay: 400}" />
    </Element>
  `,
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    ready() {
      let count = 0
      this.$setInterval(() => {
        this.alpha = count % 2 ? 0 : 1
        count++
      }, 800)
    },
  },
})
