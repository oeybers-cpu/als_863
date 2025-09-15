// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to load content into a tab
    function loadTabContent(tabId, contentFile) {
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            fetch(contentFile)
                .then(response => response.text())
                .then(data => {
                    tabContent.innerHTML = data;
                })
                .catch(error => console.error('Error loading content:', error));
        }
    }

    // Load all tab content on page load
    loadTabContent('tab1-content', 'tab1_content.html');
    loadTabContent('tab2-content', 'tab2_content.html');
    loadTabContent('tab3-content', 'tab3_content.html');
    loadTabContent('tab4-content', 'tab4_content.html');
    loadTabContent('tab5-content', 'tab5_content.html');
    loadTabContent('tab6-content', 'tab6_content.html');
    loadTabContent('tab7-content', 'tab7_content.html');
    loadTabContent('tab8-content', 'tab8_content.html');
    loadTabContent('tab9-content', 'tab9_content.html');
    loadTabContent('tab10-content', 'tab10_content.html');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Smooth scroll to top of content area on mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.content').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add smooth transitions and hover effects
    const style = document.createElement('style');
    style.textContent = `
        .tab-button {
            position: relative;
            overflow: hidden;
        }
        
        .tab-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        
        .tab-button:hover::before {
            left: 100%;
        }
        
        .content-body {
            opacity: 0;
            animation: contentFadeIn 0.5s ease-in forwards;
        }
        
        @keyframes contentFadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

