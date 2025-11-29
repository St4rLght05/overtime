// ===== EVENTS NAV FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".event__tab");
  const contents = document.querySelectorAll(".event__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Desactivar todo
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Activar el seleccionado
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.event);
      target.classList.add("active");
    });
  });
});
