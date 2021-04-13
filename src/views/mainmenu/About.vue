<template>
  <v-container class="about">
      <div class="mb-5 d-flex justify-center" cols="12">
          <h1>This is an about page</h1>
      </div>
      <p>
        Hi, I am Amina Belabbes and I am passionate about making the web a more beautiful, easy to use and fun place. 
      </p>
      <p>
        I love designing and developing, but what I really love is putting a smile on people’s faces. 😊 Professionally, I am frontend developer and I am currently employed full-time. I am also an aspiring designer with a little bit of professional experience designing interfaces from my first job.
      </p>
        <blockquote class="my-5">“You can fail at what you don't want, so you might as well take a chance on doing what you love.” – Jim Carrey</blockquote>
     
      <p>
        <span>I got my Master’s degree in Translation Studies. Languages had been a thing in my family, so it seemed like a no-brainer at the time. 
        Translation Studies allowed for a specialization and I chose Computer Science. Since the day I laid hands on a computer at around 7 years old, I’d always loved working with software. My university offered a handful of classes in web design and programming, I took all of them and was on fire! 
          </span>
      <span>  <div style="height: 25px; width: 25px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><path d="m57 26.2c0 0-3 2.8-8.1 6.1-1.4-8.1-5.3-18.1-12.9-30.3 0 0-2.5 13.1-10.8 25.4-3.6-5.6-5.2-10-5.2-10-26 26.1-4.4 44.6 9.2 44.6 17.4 0 32.7-8.4 27.8-35.8" fill="#ff9d33"/><path d="m46.7 49.4c1.5-3.3 2.6-7.6 2.8-13 0 0-2.1 1.8-5.7 4.1-1-5.4-3.7-12-9-20.2 0 0-1.7 8.7-7.5 17-2.5-3.7-3.6-6.7-3.6-6.7-4.3 6.8-6 12.2-6.1 16.5-2.4-.9-3.9-1.6-3.9-1.6 4.1 12.2 12.6 14.9 16.4 14.9 6.8 0 13.7-2 20.5-11.7 0-.1-1.5.3-3.9.7" fill="#ffce31"/><path d="m21.9 43.9c0 0 2.8 3.8 4.9 2.9 0 0 4-6.3 9.8-9.8 0 0-1.2 9.6.2 11.3 1.8 2.3 6.7-2.5 6.7-2.5 0 5.7-6.2 12.8-11.8 12.8-5.4 0-13.2-6.2-9.8-14.7" fill="#ffdf85"/><g fill="#ff9d33"><path d="m49.8 18.1c2.1-3 3.5-6.2 3.5-6.2 3.5 5.8 1.4 9.3-.1 10.4-2.1 1.6-5.8-.7-3.4-4.2"/><path d="m11.6 17.1c-2.1-3.5-2.3-7.9-2.3-7.9-5 7.5-3.1 11.7-1.4 12.9 2.2 1.7 6-.9 3.7-5"/><path d="m23.2 9.3c.3-2.4-.7-4.8-.7-4.8 4.7 3.1 4.7 5.7 4.1 6.8-.9 1.3-3.7.7-3.4-2"/></g></svg>
        </div></span>
      </p>
      <p>
        I had set out to become a translator. I had passed my degree and felt qualified to translate. What I did not feel qualified for was programming or designing. I usually give it my all, once my mind is set on a goal. But I really did not think I was fit to pursue a career in tech, back then. As a result, I ended up spending six years in jobs involving translation and assistance, always being “the nerdy one”. That ended up making me feel really unfulfilled, so I decided to find a way to get into software development. Development not so much because I did not consider design, but because I had taken more classes in development rather than design back in the day and I felt it was, again, the “safe way” to getting a foot in the door.
      </p>
      <v-row class="my-8 justify-center">
        <v-col >
          <h3>My skills</h3>
          <Svgs/>
        </v-col>
      </v-row>
    
    
  </v-container>
</template>


<script>
import Svgs from '@/components/Svgs'

export default {
  name: "About",
  components: {Svgs},
};
</script>

<style lang="scss" scoped>
.about {
  max-width: 630px;
  padding: 0 20px;
}
</style>