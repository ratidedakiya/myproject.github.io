// Example JavaScript to dynamically update the progress bar and order history

document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');
    const pointsSpan = document.getElementById('points');

    // Simulate updating points and progress
    let points = 50; // Example points
    let nextReward = 100; // Example reward points

    function updateProgress() {
        let progressPercent = (points / nextReward) * 100;
        progress.style.width = progressPercent + '%';
        pointsSpan.textContent = points;
    }

    updateProgress();
    
    // Example function to dynamically add order history
    function addOrderHistory(order) {
        const orderList = document.querySelector('.order-list');
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.textContent = `Order: ${order}`;
        orderList.appendChild(orderItem);
    }
    
    // Add sample orders
    addOrderHistory('Order 1: Matoke and Beef');
    addOrderHistory('Order 2: Ugali and Vegetables');
});
// Example JavaScript for daily dish feature
document.addEventListener('DOMContentLoaded', function() {
    const dishInfo = document.getElementById('dish-info');

    const dishes = [
        { name: 'Matoke', description: 'A staple dish made from green bananas, often cooked with meat or vegetables.', image: 'matoke.jpg' },
        { name: 'Luwombo', description: 'A rich stew made with meat, vegetables, and groundnut paste.', image: 'luwombo.jpg' },
        // Add more dishes here
    ];

    function getDailyDish() {
        const today = new Date().getDate();
        return dishes[today % dishes.length];
    }

    const dailyDish = getDailyDish();
    dishInfo.innerHTML = `
        <h3>${dailyDish.name}</h3>
        <img src="${dailyDish.image}" alt="${dailyDish.name}" style="width:100px;height:auto;">
        <p>${dailyDish.description}</p>
    `;
});

// Example JavaScript for interactive map
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([1.3733, 32.2903], 6); // Center of Uganda

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    const regions = [
        { name: 'Central Uganda', coords: [0.3476, 32.5825] },
        { name: 'Western Uganda', coords: [-0.3000, 30.2167] },
        // Add more regions here
    ];

    regions.forEach(region => {
        L.marker(region.coords)
            .addTo(map)
            .bindPopup(`<b>${region.name}</b><br>Click to explore more.`);
    });
});
// Example JavaScript for culinary challenges
document.addEventListener('DOMContentLoaded', function() {
    const challenges = [
        { title: 'Try 5 Different Dishes', description: 'Complete this challenge by trying 5 different Ugandan dishes.', reward: '100 points' },
        { title: 'Complete the Food Quiz', description: 'Answer all questions correctly in the food quiz.', reward: '50 points' },
        // Add more challenges here
    ];

    const challengeList = document.querySelector('.challenge-list');
    challenges.forEach(challenge => {
        const challengeItem = document.createElement('div');
        challengeItem.classList.add('challenge-item');
        challengeItem.innerHTML = `
            <h3>${challenge.title}</h3>
            <p>${challenge.description}</p>
            <p>Reward: ${challenge.reward}</p>
        `;
        challengeList.appendChild(challengeItem);
    });
});
// Example JavaScript for personalized recommendations
document.addEventListener('DOMContentLoaded', function() {
    const recommendations = [
        { name: 'Posho', description: 'A staple Ugandan dish made from maize flour.', image: 'posho.jpg' },
        { name: 'Rolex', description: 'A popular Ugandan street food made from rolled chapati with eggs and vegetables.', image: 'rolex.jpg' },
        // Add more recommendations here
    ];

    const recommendationList = document.querySelector('.recommendation-list');
    recommendations.forEach(rec => {
        const recItem = document.createElement('div');
        recItem.classList.add('recommendation-item');
        recItem.innerHTML = `
            <h3>${rec.name}</h3>
            <img src="${rec.image}" alt="${rec.name}" style="width:100px;height:auto;">
            <p>${rec.description}</p>
        `;
        recommendationList.appendChild(recItem);
    });
});
// Example JavaScript for social sharing buttons
function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');
}

function shareOnInstagram() {
    alert('Instagram sharing is not supported directly from web browsers. Please use the Instagram app.');
}
