
/* IMO.ONYX 전사 통합 공략 */
(function () {
  "use strict";

  
const categories = [
  ["📊 추천 능력치", "stats"],
  ["🛡️ 추천 장비", "equipment"],
  ["🗺️ 추천 사냥터", "hunting"],
  ["📜 필수 퀘스트", "quests"],
  ["📚 추천 스킬", "skills"],
  ["💰 골드 벌이", "gold"],
  ["💎 추천 보석", "gems"],
  ["📖 도감 우선순위", "collection"]
];


  function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);
  }

  function available(value) {
    return value != null &&
      String(value).trim() !== "" &&
      !String(value).includes("자료 확인 중") &&
      !String(value).includes("정리 예정");
  }

  function getData(tier, level) {
    if (tier === "초급") {
      if (typeof getWarriorGuide === "function") {
        return getWarriorGuide(Number(level));
      }
      return {};
    }

    if (typeof guideData === "undefined") {
      return {};
    }
    
const data = guideData?.["전사"]?.[tier] || {};

return {
  stats: data["추천 능력치"] || "",
  equipment: data["추천 장비"] || "",
  hunting: data["레벨별 사냥터"] || "",
  quests: data["필수 퀘스트"] || data["퀘스트"] || "",

skills: data["스킬 가이드"] || "",
gold: data["골드 벌이"] || "",
gems: data["추천 보석"] || "",
collection: data["도감 우선순위"] || ""

};
  }

  window.renderIMOWarrior = function(target, startLevel) {
    const root = typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!root) return false;

    root.innerHTML = `
      <div class="wg-app">
        <style>
          .wg-app {
            background:#101827;
            color:#eaf1ff;
            padding:14px;
            border-radius:12px;
            line-height:1.7;
          }
          .wg-app * { box-sizing:border-box; }
          .wg-app h2,.wg-app h3 {
            color:#f1c86e;
          }
          .wg-app h2 { text-align:center; }
          .wg-tabs {
            display:flex;
            gap:6px;
            flex-wrap:wrap;
            margin:12px 0;
          }
          .wg-app button,.wg-app select {
            background:#283a54;
            color:white;
            border:1px solid #52647c;
            padding:9px;
            border-radius:8px;
          }
          .wg-app button.active {
            background:#a47c36;
            border-color:#e9bf6b;
          }
          .wg-card {
            background:#1d2b40;
            border:1px solid #34445d;
            border-radius:10px;
            padding:12px;
            margin:10px 0;
            overflow-wrap:anywhere;
          }
          .wg-card h3 { margin-top:0; }
          .wg-card p { margin:7px 0; }
          .wg-card h4 { color:#9bd8f4; }
          .wg-muted { color:#a8b6cb; }
          .wg-app [hidden] { display:none!important; }
        </style>

        <h2>⚔️ 전사 통합 육성 공략</h2>

        <div class="wg-tabs" id="wg-tiers">
          <button data-tier="초급">초급</button>
          <button data-tier="중급">중급</button>
          <button data-tier="고급">고급</button>
        </div>

        <div id="wg-level-box">
          <label for="wg-level">레벨 선택 </label>
          <select id="wg-level"></select>
        </div>

        <div class="wg-tabs" id="wg-categories">
          <button data-category="all">전체</button>
          <button data-category="equipment">장비</button>
          <button data-category="hunting">사냥터</button>
          <button data-category="quests">퀘스트</button>
          
<button data-category="gold">골드벌이</button>
<button data-category="gems">보석</button>
<button data-category="collection">도감</button>

        </div>

        <div id="wg-content"></div>
        <p class="wg-muted">
          ※ 이용자 제공 공략 자료 기준
        </p>
      </div>
    `;

    let tier = "초급";
    let category = "all";
    let level = Number(startLevel) || 1;

    if (level < 1 || level > 33) level = 1;

    const select = root.querySelector("#wg-level");
    const content = root.querySelector("#wg-content");

    for (let i = 1; i <= 33; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = "Lv." + i;
      select.append(option);
    }

    select.value = level;

    function update() {
      root.querySelectorAll("[data-tier]").forEach(btn => {
        btn.classList.toggle(
          "active", btn.dataset.tier === tier
        );
      });

      root.querySelectorAll("[data-category]").forEach(btn => {
        btn.classList.toggle(
          "active", btn.dataset.category === category
        );
      });

      root.querySelector("#wg-level-box").hidden =
        tier !== "초급";

      const data = getData(tier, level);
      content.replaceChildren();

if (tier === "중급" &&
    (category === "all" || category === "equipment")) {

  const gearHTML = data.equipment || "";

  const sections = [
    {
      level: "30",
      type: "normal",
      title: "Lv.30~37 일반 장비",
      start: "Lv.30~37 일반 아이템 점검",
      end: "Lv.30~37 자본 아이템 점검"
    },
    {
      level: "30",
      type: "funded",
      title: "Lv.30~37 자본 장비",
      start: "Lv.30~37 자본 아이템 점검",
      end: "Lv.38~43 일반 아이템 점검"
    },
    {
      level: "38",
      type: "normal",
      title: "Lv.38~43 일반 장비",
      start: "Lv.38~43 일반 아이템 점검",
      end: "Lv.38~43 자본 아이템 점검"
    },
    {
      level: "38",
      type: "funded",
      title: "Lv.38~43 자본 장비",
      start: "Lv.38~43 자본 아이템 점검",
      end: ""
    }
  ];

  let selectedLevel = root.dataset.gearLevel || "30";
  let selectedType = root.dataset.gearType || "normal";

  const panel = document.createElement("section");
  panel.className = "wg-card";

  panel.innerHTML = `
    <h3>🛡️ 전사 중급 장비 선택</h3>
    <p>레벨 구간</p>
    <div class="wg-tabs">
      <button data-gear-level="30">Lv.30~37</button>
      <button data-gear-level="38">Lv.38~43</button>
    </div>
    <p>장비 유형</p>
    <div class="wg-tabs">
      <button data-gear-type="normal">일반 장비</button>
      <button data-gear-type="funded">자본 장비</button>
    </div>
    <div id="wg-selected-gear"></div>
  `;

  content.append(panel);

  function showSelectedGear() {
    const section = sections.find(s =>
      s.level === selectedLevel &&
      s.type === selectedType
    );

    const temp = document.createElement("div");
    temp.innerHTML = gearHTML;

    const headings = [...temp.querySelectorAll("h4")];

    const startIndex = headings.findIndex(h =>
      h.textContent.includes(section.start)
    );

    const endIndex = section.end
      ? headings.findIndex(h =>
          h.textContent.includes(section.end))
      : -1;

    const output = document.createElement("div");

    if (startIndex >= 0) {
      let node = headings[startIndex];

      while (node && node !== headings[endIndex]) {
        const next = node.nextSibling;
        output.append(node.cloneNode(true));
        node = next;
      }
    } else {
      output.textContent = "해당 장비 자료를 찾지 못했습니다.";
    }

    panel.querySelector("#wg-selected-gear")
      .replaceChildren(output);

    panel.querySelectorAll("[data-gear-level]")
      .forEach(btn => {
        btn.classList.toggle("active",
          btn.dataset.gearLevel === selectedLevel);
      });

    panel.querySelectorAll("[data-gear-type]")
      .forEach(btn => {
        btn.classList.toggle("active",
          btn.dataset.gearType === selectedType);
      });
  }

  panel.querySelectorAll("[data-gear-level]")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        selectedLevel = btn.dataset.gearLevel;
        root.dataset.gearLevel = selectedLevel;
        showSelectedGear();
      });
    });

  panel.querySelectorAll("[data-gear-type]")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        selectedType = btn.dataset.gearType;
        root.dataset.gearType = selectedType;
        showSelectedGear();
      });
    });

  showSelectedGear();
}

      const heading = document.createElement("h3");
      heading.textContent = tier === "초급"
        ? "⚔️ 전사 Lv." + level
        : "⚔️ 전사 " + tier + " 공략";
      content.append(heading);

      const selected = categories.filter(([label, key]) =>
        category === "all" || category === key
      );

      selected.forEach(([label, key]) => {
        if (tier === "중급" && key === "equipment") return;
        const card = document.createElement("section");
        card.className = "wg-card";

        const title = document.createElement("h3");
        title.textContent = label;
        card.append(title);

        const value = data?.[key];

        const body = document.createElement("div");

        if (available(value)) {
          if (typeof value === "string") {
            body.innerHTML = value;
          } else {
            body.textContent = JSON.stringify(value);
          }
        } else {
          body.textContent = "📚 자료 준비 중";
          body.className = "wg-muted";
        }

        card.append(body);
        content.append(card);
      });
    }

    select.addEventListener("change", () => {
      level = Number(select.value);
      update();
    });

    root.querySelectorAll("[data-tier]").forEach(btn => {
      btn.addEventListener("click", () => {
        tier = btn.dataset.tier;
        category = "all";
        update();
      });
    });

    root.querySelectorAll("[data-category]").forEach(btn => {
      btn.addEventListener("click", () => {
        category = btn.dataset.category;
        update();
      });
    });

    update();
    return true;
  };
})();
