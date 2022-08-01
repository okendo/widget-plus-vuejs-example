<template>
  <div id="app">
    <div class="oke-component">
      <h2>Star Rating Component</h2>
      <OkendoStarRating :productId="productId" />
    </div>
    <div class="oke-component">
      <h2>Reviews Badge</h2>
      <OkendoReviewsBadge :productId="productId" />
    </div>
    <div class="oke-component">
      <h2>Questions Widget</h2>
      <OkendoQuestionsWidget :productId="productId" />
    </div>
    <div class="oke-component">
      <h2>Reviews Carousel</h2>
      <OkendoHomepageCarousel
        :productId="productId"
        :carouselDataAttributeSettings="{
          autoPlay: true,
          hideHeader: false,
          headerText: 'See what our customers have to say',
          headerUrl: 'https://www.okendo.io',
          style: {
            layout: {
                name: 'testimonial'
            }
          }
        }"
      />
    </div>
    <div class="oke-component">
      <h2>Media Grid</h2>
      <OkendoMediaGrid :productId="productId" />
    </div>
    <div class="oke-component">
      <h2>Media Carousel</h2>
      <OkendoMediaCarousel :productId="productId" />
    </div>
    <div class="oke-component">
      <h2>Reviews Widget</h2>
      <OkendoWidget :productId="productId" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  OkendoStarRating,
  OkendoReviewsBadge,
  OkendoQuestionsWidget,
  OkendoHomepageCarousel,
  OkendoMediaGrid,
  OkendoMediaCarousel,
  OkendoWidget
} from '@okendo/reviews-widget-plus-vue';

@Component({
  components: {
    OkendoStarRating,
    OkendoReviewsBadge,
    OkendoQuestionsWidget,
    OkendoHomepageCarousel,
    OkendoMediaGrid,
    OkendoMediaCarousel,
    OkendoWidget
  },
})
export default class App extends Vue {
  public productId: string = 'shopify-7589140988131';
}
</script>

<style>
:root {
  --oke-text-primary: #dcdcdc;
  --oke-text-secondary: #676986;
  --oke-bg: #202124;
  --oke-bg-secondary: #42444a;
}

html, body {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  padding: 0;
  margin: 0;
  background: var(--oke-bg);
  color: var(--oke-text-primary);
}

.oke-component {
  margin: 2rem 0;
  padding: 2rem 0;
  border-bottom: 1px solid var(--oke-text-primary);
  text-align: center;
}
.oke-component .okeReviews[data-oke-container] .oke-select,
.oke-component div.okeReviews .oke-select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27m7 10 5 5 5-5z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");
}

.oke-component .oke-qw-answer,
.oke-component .okeReviews[data-oke-container] .oke-w-reviewSplit-reply,
.oke-component div.okeReviews .oke-w-reviewSplit-reply {
  background-color: var(--oke-bg-secondary);
}

.oke-component .okeReviews[data-oke-container] .oke-reviewCarousel-reviews-review,
.oke-component div.okeReviews .oke-reviewCarousel-reviews-review {
  color: var(--oke-text-primary);
}

.oke-component .okeReviews[data-oke-container] .oke-avatar-placeholder,
.oke-component div.okeReviews .oke-avatar-placeholder {
  color: var(--oke-text-secondary);
}

.oke-component .okeReviews[data-oke-container] .oke-w-filterOption-label,
.oke-component div.okeReviews .oke-w-filterOption-label {
  background-color: var(--oke-bg-secondary);
}

h2 {
  margin-bottom: 1rem;
  color: var(--oke-text-primary);
}
</style>
