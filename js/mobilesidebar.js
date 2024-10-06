// Function to toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.toggle('show');
}

// Function to toggle dropdown menu
function toggleDropdown(event) {
    event.preventDefault(); // Prevents default anchor behavior
    const dropdown = event.target.closest('.dropdown');
    
    // Close other dropdowns if they are open
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(item => {
        if (item !== dropdown) {
            item.classList.remove('show'); // Close other dropdowns
        }
    });

    dropdown.classList.toggle('show'); // Toggle the clicked dropdown menu visibility
}
