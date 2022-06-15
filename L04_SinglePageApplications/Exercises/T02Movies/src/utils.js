const sections = document.querySelectorAll('.hidden-section');

export function loadSection(section) {
    hideSections();
    showSection(section);
}

function hideSections() {
    sections.forEach(s => hideSection(s));
}

function showSection(section) {
    section.style.display = '';
}

function hideSection(section) {
    section.style.display = 'none';
}