export function showToast(message, type = "info") {
  const root = document.getElementById("toastRoot");
  if (!root) return;

  const id = `t_${Date.now()}`;
  const color =
    type === "success" ? "text-bg-success" :
    type === "danger"  ? "text-bg-danger"  :
    type === "warning" ? "text-bg-warning" : "text-bg-info";

  root.insertAdjacentHTML("beforeend", `
    <div id="${id}" class="toast align-items-center ${color} border-0 show mb-2" role="alert">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
      </div>
    </div>
  `);

  const toastEl = document.getElementById(id);
  toastEl.querySelector(".btn-close").addEventListener("click", () => toastEl.remove());
  setTimeout(() => toastEl.remove(), 3500);
}
