
class Lightbox {
    constructor(containerClass, images) {
        this.container = document.getElementsByClassName(containerClass);
        this.images = images;
        this.currentIndex = 0;
      }

      showImage(index) {
        const images = this.container.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = i === index ? "block" : "none";
        }
        this.currentIndex = index;
      }

      nextImage() {
        console.log('test next image !')

        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.showImage(this.currentIndex);
        console.log(this.currentIndex)
      }
      
}

