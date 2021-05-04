

  
import { gsap } from "gsap"
  
export default {
    mounted() {
        gsap.from(this.$refs.scrollTransition, {
        scrollTrigger: {
            trigger: this.$refs.scrollTransition,
            start: "top bottom"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: .3
        });
    }
}