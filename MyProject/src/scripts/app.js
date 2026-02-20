// ===== Navigation & Page Management =====
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageName + 'Page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// ===== Job Data =====
const jobsData = [
    {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'Tech Startup Inc.',
        location: 'Remote',
        type: 'Internship',
        salary: '$500-800/month',
        postedDate: '2 days ago',
        description: 'Looking for a passionate frontend developer to join our team. Experience with React and TypeScript preferred.',
        tags: ['React', 'JavaScript', 'CSS', 'Remote']
    },
    {
        id: 2,
        title: 'Full Stack Developer',
        company: 'Digital Solutions Ltd.',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$60k-80k/year',
        postedDate: '5 days ago',
        description: 'Seeking a full stack developer with experience in Node.js and React. Must have strong problem-solving skills.',
        tags: ['Node.js', 'React', 'MongoDB', 'AWS']
    },
    {
        id: 3,
        title: 'UI/UX Design Intern',
        company: 'Creative Agency',
        location: 'San Francisco, CA',
        type: 'Internship',
        salary: '$600-900/month',
        postedDate: '1 week ago',
        description: 'Join our design team to create beautiful and intuitive user interfaces. Figma experience required.',
        tags: ['Figma', 'UI Design', 'Prototyping']
    },
    {
        id: 4,
        title: 'Backend Developer',
        company: 'Cloud Services Co.',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$70k-90k/year',
        postedDate: '3 days ago',
        description: 'Backend developer needed for scalable microservices architecture. Python and Docker experience preferred.',
        tags: ['Python', 'Docker', 'Microservices', 'API']
    },
    {
        id: 5,
        title: 'Data Science Intern',
        company: 'Analytics Corp',
        location: 'Boston, MA',
        type: 'Internship',
        salary: '$700-1000/month',
        postedDate: '4 days ago',
        description: 'Work with real-world data to build predictive models. Strong Python and statistics background required.',
        tags: ['Python', 'Machine Learning', 'Data Analysis']
    },
    {
        id: 6,
        title: 'Mobile App Developer',
        company: 'App Innovations',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$65k-85k/year',
        postedDate: '1 week ago',
        description: 'Develop cutting-edge mobile applications for iOS and Android. Flutter experience is a plus.',
        tags: ['React Native', 'Flutter', 'Mobile', 'API']
    }
];

// ===== Render Job Cards =====
function renderJobs() {
    const jobsGrid = document.getElementById('jobsGrid');
    if (!jobsGrid) return;

    jobsGrid.innerHTML = '';

    jobsData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        const typeBadgeClass = job.type === 'Internship' ? 'badge-internship' : 'badge-fulltime';
        
        jobCard.innerHTML = `
            <div class="job-card-header">
                <div class="job-card-info">
                    <div class="job-company-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="job-card-title">
                        <h3>${job.title}</h3>
                        <p>${job.company}</p>
                    </div>
                </div>
                <button class="bookmark-btn" onclick="toggleBookmark(this)">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>

            <div class="job-card-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-clock"></i> ${job.postedDate}</span>
                <span><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
            </div>

            <p class="job-card-description">${job.description}</p>

            <div class="job-card-tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>

            <div class="job-card-actions">
                <button class="btn btn-primary">Apply Now</button>
                <button class="btn btn-outline">Details</button>
            </div>

            <span class="job-type-badge ${typeBadgeClass}">${job.type}</span>
        `;

        jobsGrid.appendChild(jobCard);
    });
}

// ===== Bookmark Toggle =====
function toggleBookmark(button) {
    button.classList.toggle('active');
}

// ===== Filter Management =====
let selectedFilters = [];

function toggleFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Handle filter checkbox changes
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('filter-checkbox')) {
        const filterValue = e.target.getAttribute('data-filter');
        
        if (e.target.checked) {
            selectedFilters.push(filterValue);
        } else {
            selectedFilters = selectedFilters.filter(f => f !== filterValue);
        }
        
        updateActiveFilters();
    }
});

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    const filterCount = document.getElementById('filterCount');
    
    if (!activeFiltersContainer) return;

    // Update filter count
    if (filterCount) {
        if (selectedFilters.length > 0) {
            filterCount.textContent = selectedFilters.length;
            filterCount.style.display = 'inline-block';
        } else {
            filterCount.style.display = 'none';
        }
    }

    // Update active filters display
    if (selectedFilters.length > 0) {
        activeFiltersContainer.innerHTML = selectedFilters.map(filter => `
            <span class="filter-tag">
                ${filter}
                <button onclick="removeFilter('${filter}')">
                    <i class="fas fa-times"></i>
                </button>
            </span>
        `).join('') + `
            <button class="link-primary" onclick="clearAllFilters()">Clear all</button>
        `;
        activeFiltersContainer.style.display = 'flex';
    } else {
        activeFiltersContainer.style.display = 'none';
    }
}

function removeFilter(filterValue) {
    selectedFilters = selectedFilters.filter(f => f !== filterValue);
    
    // Uncheck the corresponding checkbox
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.getAttribute('data-filter') === filterValue) {
            checkbox.checked = false;
        }
    });
    
    updateActiveFilters();
}

function clearAllFilters() {
    selectedFilters = [];
    
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    updateActiveFilters();
}

// ===== Login/Signup Toggle =====
let isLoginMode = true;

function toggleLoginSignup() {
    isLoginMode = !isLoginMode;
    
    const loginTitle = document.getElementById('loginTitle');
    const loginSubtitle = document.getElementById('loginSubtitle');
    const nameGroup = document.getElementById('nameGroup');
    const skillsGroup = document.getElementById('skillsGroup');
    const rememberMe = document.getElementById('rememberMe');
    const submitBtnText = document.getElementById('submitBtnText');
    const toggleText = document.getElementById('toggleText');
    const toggleLink = document.getElementById('toggleLink');
    
    if (isLoginMode) {
        loginTitle.textContent = 'Welcome Back!';
        loginSubtitle.textContent = 'Sign in to access your job alerts';
        nameGroup.style.display = 'none';
        skillsGroup.style.display = 'none';
        rememberMe.style.display = 'flex';
        submitBtnText.textContent = 'Sign In';
        toggleText.textContent = "Don't have an account? ";
        toggleLink.textContent = 'Sign up';
    } else {
        loginTitle.textContent = 'Create Account';
        loginSubtitle.textContent = 'Join thousands of students finding opportunities';
        nameGroup.style.display = 'block';
        skillsGroup.style.display = 'block';
        rememberMe.style.display = 'none';
        submitBtnText.textContent = 'Create Account';
        toggleText.textContent = 'Already have an account? ';
        toggleLink.textContent = 'Sign in';
    }
}

// ===== Password Toggle =====
function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const icon = document.querySelector('.password-toggle');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', function() {
    // Render job cards
    renderJobs();
    
    // Set initial page
    showPage('home');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===== Close mobile menu when clicking outside =====
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});
