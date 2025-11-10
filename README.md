# Ex.08 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
```
HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>World Wonders Gallery</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>World Wonders Interactive Gallery</h1>
    <h3>Presented by Ranjana R 212224040270</h3>
  </header>

  <main class="gallery">
    <div class="gallery-item" data-title="Santorini, Greece" data-info="Famous for its whitewashed buildings, blue domes, and stunning sunsets over the Aegean Sea.">
      <img src="de.png" alt="Santorini">
    </div>
    <div class="gallery-item" data-title="Machu Picchu, Peru" data-info="An ancient Incan city nestled in the Andes, known for its breathtaking mountain views.">
      <img src="cd.png" alt="Machu Picchu">
    </div>
    <div class="gallery-item" data-title="Kyoto, Japan" data-info="A city rich in culture, temples, cherry blossoms, and serene gardens.">
      <img src="bc.png" alt="Kyoto">
    </div>
    <div class="gallery-item" data-title="Banff, Canada" data-info="Banff National Park is a paradise of turquoise lakes, mountains, and wildlife.">
      <img src="ab.png" alt="Banff">
    </div>
  </main>

  <div class="modal" id="modal">
    <div class="modal-content" id="modalTextContent"></div>
    <button class="modal-close" id="closeModal">&times;</button>
  </div>

  <script src="script.js"></script>
</body>
</html>

JS

const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalTextContent = document.getElementById('modalTextContent');
const closeModal = document.getElementById('closeModal');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const info = item.getAttribute('data-info');
    modalTextContent.innerHTML = `
      <h2>${title}</h2>
      <p>${info}</p>
    `;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalTextContent.innerHTML = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalTextContent.innerHTML = '';
  }
});


CSS


body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(135deg, #f6d365, #fda085);
  background-size: 300% 300%;
  animation: moveGradient 20s ease infinite;
  color: #222;
}

@keyframes moveGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

header {
  text-align: center;
  padding: 50px 20px 30px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

header h1 {
  font-size: 3rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 60px 30px;
  max-width: 1400px;
  margin: auto;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  height: 500px; /* increased image height */
}


.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.modal {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: white;
  text-align: center;
  z-index: 999;
}

.modal-content {
  max-width: 600px;
  background: #292E49;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #fbc2eb;
  color: #fbc2eb;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
}

.modal-content h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.modal-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: #f67280;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 20px;
  cursor: pointer;
}


```

## OUTPUT

![alt text](<Screenshot 2025-11-10 111342.png>)
## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
