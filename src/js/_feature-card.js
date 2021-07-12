export default class FeatureCard {
  constructor(image, title, text) {
    this.image = image;
    this.title = title;
    this.text = text;
    this.card = this.buildCard();
  }

  buildCard() {
    const featureCard = document.createElement("div");
    featureCard.classList.add("feature");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("feature__image-container");
    featureCard.appendChild(imageContainer);

    const image = document.createElement("img");
    image.classList.add("feature__image");
    image.src = this.image.image;
    image.alt = this.image.alt;
    imageContainer.appendChild(image);

    const title = document.createElement("h2");
    title.classList.add("feature__title");
    title.textContent = this.title;
    featureCard.appendChild(title);

    const text = document.createElement("p");
    text.classList.add("feature__text");
    text.textContent = this.text;
    featureCard.appendChild(text);

    return featureCard;
  }
}
