<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePage" />
    <q-intersection
      style="min-height: 500px; padding-top: 30px"
      class="main-bio-intersection"
    >
      <transition
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backOutDown"
        style="animation-duration: 1s"
      >
        <div v-if="showElement">
          <div class="text-h4 text-weight-bold">{{ Project.name }}</div>
          <div class="text-subtitle1 q-pb-sm">
            {{ Project.type }}
          </div>
          <carousel-component :Photo="Project.image" />
          <div v-if="Project.url">
            <span class="text-body1"> Link Website: </span>
            <a :href="Project.url" style="color: white" target="_blank">{{
              Project.url
            }}</a>
          </div>
          <div v-if="Project.urlGithub">
            <span class="text-body1"> Link Source Code: </span>
            <a :href="Project.urlGithub" style="color: white" target="_blank">{{
              Project.urlGithub
            }}</a>
          </div>
          <div class="q-py-md">
            {{ Project.description }}
          </div>
          <div v-if="Project.DetailExplain">
            <div class="text-h5 text-weight-bold q-pb-lg">Feature</div>
            <detail-explain :DetailExplain="DetailExplain" />
            <div v-if="Project.demoVideo">
              <div class="text-h5 text-weight-bold q-pb-lg">Demo Video</div>
              <q-video
                :ratio="16 / 9"
                src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
              />
            </div>
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import DetailExplain from 'src/components/DetailExplain.vue';
import { defineComponent } from 'vue';
import CarouselComponent from '../components/CarouselComponent.vue';
import Projects from 'src/data/Projects';
import { Project } from '../components/models';

export default defineComponent({
  name: 'IndexPage',
  components: { CarouselComponent, DetailExplain },
  data() {
    return {
      id: this.$route.params.id,
      Project: {} as Project,
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,#2dd4bf 40%,#f4b860 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      search: '',
      filter: '',
      showElement: false,
      DetailExplain: {
        name: 'home',
        right: false,
        url: 'https://annasismail.github.io/My-Portofolio/assets/img/portfolio/gconn.png',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`,
        path: '/home',
      },
    };
  },
  created() {
    const projectFound = Projects.find((project) => project.id === this.id);
    if (!projectFound) {
      this.$router.push('/404');
    } else {
      this.Project = projectFound;
    }
  },
  mounted() {
    this.showElement = true;
  },
  unmounted() {
    this.showElement = false;
  },
  methods: {
    movePage() {
      this.showElement = false;
    },
  },
});
</script>

<style scoped></style>
