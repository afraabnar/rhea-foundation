// Shared nav component
function renderNav(activePage) {
  return `
  <nav id="main-nav">
    <a href="../index.html" class="nav-logo">
      <div class="nav-logo-mark">R</div>
      <div class="nav-logo-text">
        Rhea Mothers Alliance
        <span>Foundation</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="../index.html#mission" ${activePage==='mission'?'class="active"':''}>Mission</a></li>
      <li><a href="../index.html#projects" ${activePage==='projects'?'class="active"':''}>Projects</a></li>
      <li><a href="../index.html#newsletter">Updates</a></li>
      <li><a href="donate.html" class="btn-donate-nav ${activePage==='donate'?'active':''}">Donate</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="../index.html">Home</a>
    <a href="../index.html#mission">Mission</a>
    <a href="../index.html#projects">Projects</a>
    <a href="../index.html#newsletter">Updates</a>
    <a href="donate.html">Donate</a>
  </div>`;
}

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
}
