document.addEventListener('mousemove', (event) => {
    const shade = document.querySelector('.shade');
    const shadeSize = shade.offsetWidth / 2;
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;
    shade.style.transform = `translate(${x - shadeSize}px, ${y - shadeSize}px)`;
  });


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#details a');

window.onscroll = () => {
  sections.forEach(sec => {  
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('#details a[href*=' + id + ']').classList.add('active');
      });
    } ;
  });
};

document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight / 5 * 4;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in-visible');
    } else {
      section.classList.remove('fade-in-visible');
    }
  });
});

// Initialize fade-in sections on page load
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight / 5 * 4;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in-visible');
    }
  });
});

var app = document.getElementById('typewriter');

        var typewriter = new Typewriter(app, {
            loop: true
        });

        typewriter.typeString('Frontend Developer')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Web Developer')
            .pauseFor(2500)
            .start();


            document.addEventListener('DOMContentLoaded', function() {
              // Gallery configuration
              const galleryConfig = {
                  container: document.getElementById('gallery-container'),
                  dotsContainer: document.getElementById('gallery-dots'),
                  groups: document.querySelectorAll('.gallery-group'),
                  currentGroup: 0,
                  interval: 4000 // Time between slides in milliseconds
              };
          
              // Create navigation dots
              function createDots() {
                  galleryConfig.groups.forEach((_, index) => {
                      const dot = document.createElement('button');
                      dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === 0 ? 'bg-green-500' : 'bg-gray-600'
                      }`;
                      dot.addEventListener('click', () => showGroup(index));
                      galleryConfig.dotsContainer.appendChild(dot);
                  });
              }
          
              // Show specific group
              function showGroup(index) {
                  galleryConfig.currentGroup = index;
                  galleryConfig.container.style.transform = `translateX(-${index * 100}%)`;
                  
                  // Update dots
                  const dots = galleryConfig.dotsContainer.children;
                  Array.from(dots).forEach((dot, i) => {
                      dot.className = `w-2 h-2 rounded-full transition-colors duration-200 ${
                          i === index ? 'bg-green-500' : 'bg-gray-600'
                      }`;
                  });
          
                  // Update opacity
                  galleryConfig.groups.forEach((group, i) => {
                      const images = group.querySelectorAll('div');
                      images.forEach(img => {
                          img.style.opacity = i === index ? '1' : '0.3';
                      });
                  });
              }
          
              // Next group
              function nextGroup() {
                  const nextIndex = (galleryConfig.currentGroup + 1) % galleryConfig.groups.length;
                  showGroup(nextIndex);
              }
          
              // Initialize gallery
              createDots();
              setInterval(nextGroup, galleryConfig.interval);
          });

          function animateCounter(element, start, end, duration = 2000) {
            let startTimestamp = null;
            const totalSteps = end - start;
          
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
          
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = Math.floor(progress * totalSteps + start);
          
              element.textContent = currentValue.toLocaleString();
          
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                element.textContent = end.toLocaleString();
              }
            };
          
            window.requestAnimationFrame(step);
          }
          
          document.addEventListener('DOMContentLoaded', () => {
            const counterElement = document.getElementById('followersCount');
            const totalFollowers = 1900;
          
            animateCounter(counterElement, 0, totalFollowers, 2000);
          });

          function animateCounter(element, start, end, duration = 2000) {
            let startTimestamp = null;
            const totalSteps = end - start;
          
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
          
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = Math.floor(progress * totalSteps + start);
          
              element.textContent = currentValue.toLocaleString();
          
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                element.textContent = end.toLocaleString();
              }
            };
          
            window.requestAnimationFrame(step);
          }
          
          document.addEventListener('DOMContentLoaded', () => {
            const counterElement = document.getElementById('InstagramfollowersCount');
            const totalFollowers = 400;
          
            animateCounter(counterElement, 0, totalFollowers, 2000);
          });


          const latestPost = {
            title: "“ The Saturn Effect: Finding Cosmic Harmony in Gen Z’s World. ”",
            excerpt: "In the intricate dance of our solar system, every planet has a purpose. Saturn, known for its breathtaking rings...",
            date: "January 29, 2025",
            link: "https://medium.com/@vaibhavsaini709/the-saturn-effect-finding-cosmic-harmony-in-gen-zs-world-273261ce3e11"
        };
        
        // Function to format the date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }
        
        // Function to create and display the blog post
        function displayLatestPost(post) {
            const postContainer = document.getElementById('latestPost');
            
            const postHTML = `
                <div class="space-y-2">
                    <h3 class="font-semibold text-lg text-gray-200">${post.title}</h3>
                    <p class="text-sm text-gray-300 line-clamp-2">${post.excerpt}</p>
                    <p class="text-xs text-gray-300">${formatDate(post.date)}</p>
                </div>
                <button 
                    onclick="window.open('${post.link}', '_blank')"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md
                           text-sm font-medium text-gray-200
                           hover:bg-slate-800 transition-colors duration-200
                           flex items-center justify-center gap-2">
                    Read on Medium
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         class="h-4 w-4" 
                         fill="none" 
                         viewBox="0 0 24 24" 
                         stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
            `;
            
            postContainer.innerHTML = postHTML;
        }
        
        // 3D tilt effect implementation
        function initTiltEffect() {
            // Configuration for the tilt effect
            const config = {
                max: 15,         // Maximum rotation angle
                scale: 1.05,     // Hover scale factor
                speed: 1000,     // Animation speed
                easing: 'cubic-bezier(.03,.98,.52,.99)' // Smooth easing function
            };

            // Function to create tilt effect for a specific card
            function createTiltForCard(cardId, shineId) {
                const card = document.getElementById(cardId);
                const shine = document.getElementById(shineId);
                
                if (!card || !shine) return;

                // Handle mouse movement
                function handleMouseMove(event) {
                    const rect = card.getBoundingClientRect();
                    
                    // Calculate mouse position relative to card center
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const mouseX = event.clientX - centerX;
                    const mouseY = event.clientY - centerY;
                    
                    // Calculate rotation angles
                    const rotateX = (mouseY / (rect.height / 2)) * -config.max;
                    const rotateY = (mouseX / (rect.width / 2)) * config.max;
                    
                    // Apply transformations
                    card.style.transform = `
                        perspective(${config.speed}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale3d(${config.scale}, ${config.scale}, ${config.scale})
                    `;
                    
                    // Update shine effect
                    shine.style.opacity = '0.15';
                    shine.style.transform = `
                        translateX(${mouseX}px)
                        translateY(${mouseY}px)
                    `;
                }

                // Reset card position
                function handleMouseLeave() {
                    card.style.transform = `
                        perspective(${config.speed}px)
                        rotateX(0deg)
                        rotateY(0deg)
                        scale3d(1, 1, 1)
                    `;
                    shine.style.opacity = '0';
                }

                // Add event listeners
                card.addEventListener('mousemove', handleMouseMove);
                card.addEventListener('mouseleave', handleMouseLeave);
            }

            // Apply tilt effect to both cards
            createTiltForCard('tiltCard', 'shine');
            createTiltForCard('upcomingCard', 'upcomingShine');
        }
        
        // Initialize everything when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            displayLatestPost(latestPost);
            initTiltEffect();
        });         




    


