export default {
  methods: {
    getElById(id) {
    
        return id?document.getElementById(id):""
      
    },
    scrollInOutAnimation(id,plus) {
      const controller = new ScrollMagic.Controller()
      const targetHeight = this.getElById(id).clientHeight+plus
      
      new ScrollMagic.Scene({
        triggerElement: '#' + id,
        duration: targetHeight,
      })
        .setClassToggle('#' + id, 'fade-in')
        .addTo(controller)
    },
  },
}
