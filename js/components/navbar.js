import { getCurrentUser } from "../services/authService.js";

export function renderNavbar(containerId = "appNavbar") {
  const root = document.getElementById(containerId);
  if (!root) return;

  const user = getCurrentUser();

  root.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="./index.html">
          <span>Intel Learn</span>
          <span class="badge text-bg-light border">Smart Learn</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav ms-auto">
            ${user ? `
              <li class="nav-item"><a class="nav-link" href="./dashboard.html">Dashboard</a></li>
              <li class="nav-item"><a class="nav-link" href="./questionnaire.html">Assessment</a></li>
              <li class="nav-item"><a class="nav-link" href="./report.html">Report</a></li>
            ` : `
              <li class="nav-item"><a class="nav-link" href="./index.html">Login</a></li>
            `}
          </ul>
        </div>
      </div>
    </nav>
  `;
}
