const loadImagesButton = document.getElementById("load-images-button");

loadImagesButton.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=nature&per_page=9", {
    headers: {
      Authorization: "DQN4vmIpKPTTmk5WEog01ZJR9oKpaW9mvuTbwjtQfrOCj4iNg7OWVS1e",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta API.");
      }
    })
    .then((data) => {
      const images = data.photos;
      const imageContainer = document.getElementById("image-container");

      // Rimuovi tutti gli elementi figlio dal contenitore
      while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
      }

      // Aggiungi le nuove immagini al contenitore
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src.medium;
        imageContainer.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
const loadSecondaryImages = () => {
  fetch("https://api.pexels.com/v1/search?query=square&per_page=9", {
    headers: {
      Authorization: "DQN4vmIpKPTTmk5WEog01ZJR9oKpaW9mvuTbwjtQfrOCj4iNg7OWVS1e",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta API.");
      }
    })
    .then((data) => {
      const images = data.photos;
      const imageContainer = document.getElementById("image-container");

      // Rimuovi tutti gli elementi figlio dal contenitore
      while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
      }

      // Aggiungi le nuove immagini al contenitore
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src.medium;
        imageContainer.appendChild(img);
      });
    });
};

// Seleziona i pulsanti di caricamento immagini

const secondaryImagesButton = document.getElementById("load-secondary-images");

// Aggiungi gli eventi click ai pulsanti

secondaryImagesButton.addEventListener("click", loadSecondaryImages);
