// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Array of page data objects
    const pages = [
        {
            visualizationSrc: 'https://via.placeholder.com/600x400?text=Page+1',
            explanationTitle: 'Dataset Overview',
            explanationText: 'Our analysis utilizes the New York State Pretrial Release Dataset from 2023, comprising over 285,000 cases. This comprehensive dataset includes demographic information, criminal history, court proceedings, and pretrial outcomes, offering valuable insights into the pretrial release system in New York State.'
        },
        {
            visualizationSrc: 'assets/images/rearrest_distribution.png',
            explanationTitle: 'Page 2 Explanation',
            explanationText: 'This is the content for page 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            visualizationSrc: 'https://via.placeholder.com/600x400?text=Page+3',
            explanationTitle: 'Page 3 Explanation',
            explanationText: 'This is the content for page 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
        // Add more pages as needed
    ];

    let currentPageIndex = 0;

    // Get references to DOM elements
    const vizImg = document.getElementById('visualization-img');
    const explanationTitle = document.getElementById('explanation-title');
    const explanationText = document.getElementById('explanation-text');


    // Function to load a page based on index
    function loadPage(index) {
        const page = pages[index];
        vizImg.src = page.visualizationSrc;
        explanationTitle.textContent = page.explanationTitle;
        explanationText.textContent = page.explanationText;

    }



    // Navigation: Previous button
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            loadPage(currentPageIndex);
        } else {
            alert("You're at the first page.");
        }
    });

    // Navigation: Next button
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            loadPage(currentPageIndex);
        } else {
            alert("You're at the last page.");
        }
    });

    // Load the initial page
    loadPage(currentPageIndex);
});
