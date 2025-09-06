const data = {
  html: [
    { keyword: "html", description: "Root element of an HTML document." },
    { keyword: "head", description: "Contains metadata and links." },
    { keyword: "body", description: "Contains visible page content." },
    { keyword: "div", description: "Generic block container." },
    { keyword: "span", description: "Generic inline container." },
  ],
  css: [
    { keyword: "color", description: "Sets text color." },
    { keyword: "margin", description: "Sets outer spacing." },
    { keyword: "padding", description: "Sets inner spacing." },
    { keyword: "border", description: "Sets border style." },
    { keyword: "display", description: "Controls layout type." },
  ],
  js: [
    { keyword: "var", description: "Declares a function-scoped variable." },
    { keyword: "let", description: "Declares a block-scoped variable." },
    { keyword: "const", description: "Declares a block-scoped constant." },
    { keyword: "function", description: "Defines a function." },
    { keyword: "return", description: "Returns a value from function." },
  ],
};

const tabs = document.querySelectorAll(".tab-btn");
const keywordsContainer = document.getElementById("keywordsContainer");
const searchInput = document.getElementById("searchInput");

let activeTab = "html";

function renderKeywords(tab) {
  keywordsContainer.innerHTML = "";
  const filtered = data[tab].filter((item) =>
    item.keyword.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if (filtered.length === 0) {
    keywordsContainer.innerHTML = `<p style="text-align:center;color:#666;">No results found.</p>`;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${item.keyword}</h3><p>${item.description}</p>`;
    keywordsContainer.appendChild(card);
  });
}

// Tab switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    searchInput.value = "";
    renderKeywords(activeTab);
  });
});

// Search filter
searchInput.addEventListener("input", () => {
  renderKeywords(activeTab);
});

// Initial render
renderKeywords(activeTab);
