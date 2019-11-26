window.addEventListener('resize', this.onWindowResize)


onWindowResize = (event) => {
  if (window.innerWidth < 500) {
    this.setState({
      showForm: false
    })
  }

  if (window.innerWidth > 500) {
    this.setState({
      showForm: true
    })
  }
}