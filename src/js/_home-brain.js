import FeatureCard from "./_feature-card.js";
import featuresData from "./content/features.js";

export default class HomeBrain {
  constructor(featuresContainer) {
    this.featuresContainer = featuresContainer;
    this.featuresData = featuresData;
    this.buildFeatures();
  }

  buildFeatures() {
    this.featuresData.forEach(({ image, title, text }) => {
      this.featuresContainer.appendChild(
        new FeatureCard(image, title, text).card
      );
    });
  }
}
