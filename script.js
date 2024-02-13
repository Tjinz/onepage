// script.js

const pdfShapes = document.querySelectorAll('.pdf-shape');
pdfShapes.forEach(shape => {
    const fileName = 'pdfs/' + shape.id + '.pdf'; // Use shape.id to get the id of the current element
    shape.addEventListener('click', function (event) {
        event.preventDefault();
        openModal(fileName);
    });
});

  

  function openModal(pdfFileName) {
    // Create a modal container
    var modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
  
    // Create a modal content element
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    // Create an iframe to display the PDF
    var pdfIframe = document.createElement('iframe');
    pdfIframe.src = pdfFileName;
    pdfIframe.className = 'pdf-iframe';
  
    // Create a division for the buttons
    var buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'popup-buttons';
  
    // Create buttons

    var closeButton = document.createElement('button');
    closeButton.className = 'modal-button';
    closeButton.textContent = 'Close';
  
    // Append the iframe to the modal content
    modalContent.appendChild(pdfIframe);
  
    // Append the buttons to the buttons container

    buttonsContainer.appendChild(closeButton);
  
    // Append the buttons container to the modal content
    modalContent.appendChild(buttonsContainer);
  
    // Append the modal content to the modal container
    modalContainer.appendChild(modalContent);
  
    // Append the modal container to the document body
    document.body.appendChild(modalContainer);


    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
      closeModal(modalContainer);
    });
  
    // Close the modal when clicking outside the content or pressing the Escape key
    modalContainer.addEventListener('click', function(event) {
      if (event.target === modalContainer) {
        closeModal(modalContainer);
      }
    });
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal(modalContainer);
      }
    });
  }
  
  function closeModal(modalContainer) {
    // Remove the modal container from the document body
    document.body.removeChild(modalContainer);
  }