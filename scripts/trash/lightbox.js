
class Lightbox {
    constructor(containerId, images) {
        this.container = document.getElementById(containerId);
        this.images = images;
        this.currentIndex = 0;
      }
    
      render() {
        this.images.forEach((image, index) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.src;
          imgElement.alt = image.alt;
          imgElement.style.display = index === this.currentIndex ? "block" : "none";
          this.container.appendChild(imgElement);
        });
      }
    
      showImage(index) {
        const images = this.container.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = i === index ? "block" : "none";
        }
        this.currentIndex = index;
      }
    
      nextImage() {
        // if (this.currentIndex < this.images.length - 1) {
        //   this.currentIndex++;
        // } else {
        //   this.currentIndex = 0;
        // }
        // this.showImage(this.currentIndex);
        console.log('test next image !')
      }
    
      // prevImage() {
      //   if (this.currentIndex > 0) {
      //     this.currentIndex--;
      //   } else {
      //     this.currentIndex = this.images.length - 1;
      //   }
      //   this.showImage(this.currentIndex);
      // }

}

