document.addEventListener('DOMContentLoaded', function () {
    const resourceList = document.getElementById('resource-list');
    const resourceForm = document.getElementById('resource-form');
    const resources = [
        { id: 1, name: 'The Subtle Art of Not Giving a F***', image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qXp9MemqNmYwhoNptxeflg.jpeg' },
        { id: 2, name: 'The Power of POSITIVE Thinking', image: 'https://m.media-amazon.com/images/I/81ND4ZcIsxL._AC_UF1000,1000_QL80_.jpg' },
        { id: 3, name: '48 Laws of Power', image: 'https://m.media-amazon.com/images/I/41cF79iFTHL._AC_UF1000,1000_QL80_.jpg' }
    ];

   
    function displayResources() {
        resourceList.innerHTML = '';

        resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.classList.add('resource-card');
            resourceCard.innerHTML = `
                <img src="${resource.image}" alt="${resource.name}">
                <p>${resource.name}</p>
                <button onclick="removeResource(${resource.id})">Remove</button>
            `;
            resourceList.appendChild(resourceCard);
        });
    }

    
    function addResource(name, image) {
        const newResource = {
            id: resources.length + 1,
            name: name,
            image: image
            
        };

            resources.push(newResource);
            displayResources();
    }

    
    window.removeResource = function (id) {
        const index = resources.findIndex(resource => resource.id === id);

            if (index !== -1) {
                resources.splice(index, 1);
                displayResources();
        }
    };

    
    resourceForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const resourceNameInput = document.getElementById('resource-name');
        const resourceImageInput = document.getElementById('resource-image');

        const resourceName = resourceNameInput.value.trim();
        const resourceImage = resourceImageInput.value.trim();

        if (resourceName !== '') {
            addResource(resourceName, resourceImage);
            resourceNameInput.value = ''; 
            resourceImageInput.value = '';
        }
    });

    
    displayResources();
});