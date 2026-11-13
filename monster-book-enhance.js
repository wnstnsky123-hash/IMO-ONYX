
/* IMO.ONYX | 몬스터 도감 업그레이드 */
(function () {
  "use strict";

  // 기존 몬스터 데이터는 그대로 사용합니다.
  const oldShowMonsterBook = window.showMonsterBook;

  function getData() {
    return (
      typeof monsterData !== "undefined" &&
      Array.isArray(monsterData)
    )
      ? monsterData.filter(m => m && typeof m === "object")
      : [];
  }

  function regionOf(location) {
    const text = String(location || "장소 미확인").trim();
    const match = text.match(/^(.*?)\s*(\d+)\s*(층|F)$/i);
    return match ? match[1].trim() : text;
  }

  function floorOf(location) {
    const match = String(location || "")
      .match(/(\d+)\s*(층|F)$/i);
    return match ? Number(match[1]) : null;
  }

  function dropNames(monster) {
    if (!Array.isArray(monster.drops)) return [];

    return monster.drops.map(item => {
      if (typeof item === "string") return item;
      if (item && typeof item.name === "string") {
        return item.name;
      }
      return "";
    }).filter(Boolean);
  }

  function displayValue(value) {
    return value === null ||
      value === undefined ||
      value === ""
      ? "정보 확인 중"
      : String(value);
  }

  function normalized(value) {
    return String(value || "")
      .toLocaleLowerCase()
      .replace(/\s+/g, "");
  }

  function option(value, label) {
    const el = document.createElement("option");
    el.value = value;
    el.textContent = label;
    return el;
  }

  function tag(text) {
    const el = document.createElement("span");
    el.className = "onx-tag";
    el.textContent = text;
    return el;
  }

  window.showMonsterBook = function () {
    const app = document.querySelector(".container");

    if (!app) {
      if (typeof oldShowMonsterBook === "function") {
        oldShowMonsterBook();
      }
      return;
    }

    const data = getData();

    const state = {
      keyword: "",
      mode: "all",
      region: "all",
      floor: "all"
    };

    const root = document.createElement("section");
    root.className = "onx-book";

    root.innerHTML = `
      <style>
        .onx-book {
          color: #edf2ff;
          line-height: 1.65;
        }

        .onx-book * {
          box-sizing: border-box;
        }

        .onx-book h2 {
          margin: 8px 0;
          color: #e8c77b;
        }

        .onx-book .onx-help {
          text-align: center;
          color: #aeb8c7;
          font-size: 13px;
          margin: 0 0 18px;
        }

        .onx-book .onx-searchrow {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .onx-book input {
          flex: 1;
          min-width: 0;
          padding: 13px;
          border: 2px solid #d8b66a;
          border-radius: 11px;
          background: #fff;
          color: #151515;
          font-size: 15px;
        }

        .onx-book button,
        .onx-book select {
          font: inherit;
        }

        .onx-book .onx-reset {
          border: 1px solid #74819a;
          background: #28394f;
          border-radius: 11px;
          color: white;
          padding: 0 12px;
          white-space: nowrap;
        }

        .onx-book .onx-modes {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 10px 0 14px;
        }

        .onx-book .onx-modes button {
          flex: 1;
          min-width: 65px;
          padding: 10px 5px;
          border: 1px solid #566983;
          border-radius: 10px;
          color: #e9eef7;
          background: #28394f;
        }

        .onx-book .onx-modes button.onx-active {
          color: #171e2b;
          background: #d8b66a;
          border-color: #d8b66a;
          font-weight: bold;
        }

        .onx-book .onx-filters {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin: 0 0 14px;
        }

        .onx-book select {
          min-width: 0;
          width: 100%;
          padding: 12px 8px;
          border-radius: 10px;
          background: #28394f;
          border: 1px solid #6b7c95;
          color: white;
        }

        .onx-book .onx-count {
          color: #e8c77b;
          font-size: 14px;
          margin: 13px 0;
        }

        .onx-book .onx-card {
          background: #1e293b;
          border: 1px solid #52627e;
          border-radius: 14px;
          margin: 12px 0;
          padding: 15px;
          overflow-wrap: anywhere;
        }

        .onx-book .onx-name {
          font-size: 19px;
          font-weight: bold;
          color: #f6d388;
          margin: 0 0 9px;
        }

        .onx-book .onx-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin: 7px 0 13px;
        }

        .onx-book .onx-tag {
          display: inline-block;
          padding: 5px 9px;
          border-radius: 7px;
          background: #344760;
          color: #f0f5ff;
          font-size: 13px;
        }

        .onx-book .onx-card p {
          margin: 7px 0;
          font-size: 14px;
        }

        .onx-book .onx-drops {
          color: #d6e4f9;
        }

        .onx-book .onx-details {
          border-top: 1px solid #485b72;
          margin-top: 13px;
          padding-top: 13px;
        }

        .onx-book .onx-detailbtn {
          width: 100%;
          margin-top: 11px;
          padding: 12px;
          border: 0;
          border-radius: 10px;
          background: #d8b66a;
          color: #172033;
          font-weight: bold;
        }

        .onx-book .onx-itembuttons {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 9px;
        }

        .onx-book .onx-itembuttons button {
          padding: 7px 9px;
          border-radius: 8px;
          border: 1px solid #7797c3;
          background: #273d5c;
          color: #d5e9ff;
          font-size: 13px;
          overflow-wrap: anywhere;
        }

        .onx-book .onx-empty {
          padding: 20px;
          text-align: center;
          border: 1px solid #566983;
          border-radius: 12px;
          color: #cbd5e1;
        }

        @media (max-width: 360px) {
          .onx-book .onx-filters {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <h2>👾 몬스터 도감</h2>

      <p class="onx-help">
        지역·층별 검색 / 아이템 드롭 역검색 / 상세 정보
      </p>

      <div class="onx-searchrow">
        <input
          type="search"
          id="onx-monster-search"
          aria-label="몬스터 도감 검색"
          placeholder="🔍 몬스터·아이템·사냥터 검색"
        >
        <button
          type="button"
          class="onx-reset"
        >초기화</button>
      </div>

      <div class="onx-modes" aria-label="검색 방식">
        <button type="button" data-mode="all">전체</button>
        <button type="button" data-mode="monster">몬스터</button>
        <button type="button" data-mode="item">아이템</button>
        <button type="button" data-mode="place">사냥터</button>
      </div>

      <div class="onx-filters">
        <select
          id="onx-region"
          aria-label="지역 선택"
        ></select>

        <select
          id="onx-floor"
          aria-label="층 선택"
        ></select>
      </div>

      <div class="onx-count" aria-live="polite"></div>
      <div class="onx-results"></div>

      <button type="button" class="btn onx-back">
        ← 홈으로
      </button>
    `;

    const search =
      root.querySelector("#onx-monster-search");

    const regionSelect =
      root.querySelector("#onx-region");

    const floorSelect =
      root.querySelector("#onx-floor");

    const count =
      root.querySelector(".onx-count");

    const results =
      root.querySelector(".onx-results");

    const modeButtons =
      root.querySelectorAll("[data-mode]");

    // 몬스터 데이터에서 지역 목록 자동 생성
    const regions = [
      ...new Set(data.map(m => regionOf(m.location)))
    ].sort((a, b) => a.localeCompare(b, "ko"));

    regionSelect.append(
      option("all", "🌍 전체 지역")
    );

    regions.forEach(name => {
      regionSelect.append(option(name, name));
    });

    // 지역 선택에 따라 층 목록 자동 생성
    function refreshFloorOptions() {
      const floors = [
        ...new Set(
          data
            .filter(m =>
              regionOf(m.location) === state.region
            )
            .map(m => floorOf(m.location))
            .filter(n => n !== null)
        )
      ].sort((a, b) => a - b);

      floorSelect.replaceChildren(
        option("all", "🏢 전체 층")
      );

      floors.forEach(n => {
        floorSelect.append(
          option(String(n), n + "F")
        );
      });

      if (!floors.some(n =>
        String(n) === state.floor
      )) {
        state.floor = "all";
      }

      floorSelect.value = state.floor;

      floorSelect.disabled =
        state.region === "all" ||
        floors.length === 0;

      floorSelect.title = floorSelect.disabled
        ? "지역을 먼저 선택해 주세요"
        : "층 선택";
    }

    // 몬스터 / 아이템 / 사냥터 검색
    function findMonsters() {
      const query = normalized(state.keyword);

      return data.filter(m => {
        if (
          state.region !== "all" &&
          regionOf(m.location) !== state.region
        ) {
          return false;
        }

        if (
          state.floor !== "all" &&
          String(floorOf(m.location)) !== state.floor
        ) {
          return false;
        }

        if (!query) return true;

        const monsterName = normalized(m.name);
        const place = normalized(m.location);
        const items = normalized(
          dropNames(m).join(" ")
        );

        if (state.mode === "monster") {
          return monsterName.includes(query);
        }

        if (state.mode === "item") {
          return dropNames(m).some(d =>
            normalized(d).includes(query)
          );
        }

        if (state.mode === "place") {
          return place.includes(query);
        }

        return monsterName.includes(query) ||
          place.includes(query) ||
          items.includes(query);
      }).sort((a, b) =>
        (Number(a.level) || 9999) -
        (Number(b.level) || 9999)
      );
    }

    // 드롭 아이템 클릭 시 전체 지역 역검색
    function searchItem(itemName) {
      state.keyword = itemName;
      state.mode = "item";
      state.region = "all";
      state.floor = "all";

      search.value = itemName;
      search.placeholder =
        "🔍 드롭 아이템 이름 입력";

      regionSelect.value = "all";

      refreshFloorOptions();
      draw();

      root.scrollIntoView({
        behavior: "auto",
        block: "start"
      });
    }

    // 몬스터 카드 제작
    function makeCard(m) {
      const card = document.createElement("article");
      card.className = "onx-card";

      const name = document.createElement("h3");
      name.className = "onx-name";
      name.textContent =
        "👾 " + displayValue(m.name);

      card.append(name);

      const tags = document.createElement("div");
      tags.className = "onx-tags";

      tags.append(
        tag("⚔️ Lv. " + displayValue(m.level)),
        tag("❤️ HP " + displayValue(m.hp)),
        tag("⭐ EXP " + displayValue(m.exp))
      );

      card.append(tags);

      const place = document.createElement("p");
      place.textContent =
        "🗺️ 출현 장소: " +
        displayValue(m.location);

      const timer = document.createElement("p");
      timer.textContent =
        "⏱️ 재부활: " +
        displayValue(m.respawn);

      card.append(place, timer);

      const drops = dropNames(m);

      const preview = document.createElement("p");
      preview.className = "onx-drops";

      preview.textContent =
        "🎁 드롭: " +
        (
          drops.length
            ? drops.slice(0, 5).join(", ") +
              (
                drops.length > 5
                  ? " 외 " +
                    (drops.length - 5) +
                    "개"
                  : ""
              )
            : "정보 확인 중"
        );

      card.append(preview);

      // 펼쳤을 때 표시할 상세 정보
      const detail = document.createElement("div");
      detail.className = "onx-details";
      detail.hidden = true;

      if (m.image) {
        const img = document.createElement("img");
        img.src = String(m.image);
        img.alt = String(m.name || "몬스터");

        img.style.cssText =
          "display:block;max-width:120px;" +
          "max-height:120px;object-fit:contain;" +
          "margin:5px auto 12px";

        img.onerror = () => img.remove();
        detail.append(img);
      }

      const description =
        document.createElement("p");

      description.textContent =
        "📖 특징: " +
        displayValue(m.description);

      const tip = document.createElement("p");
      tip.textContent =
        "아래 아이템을 누르면 해당 아이템을 " +
        "드롭하는 모든 몬스터를 찾습니다.";

      tip.style.color = "#aeb8c7";

      detail.append(description, tip);

      const itemBox = document.createElement("div");
      itemBox.className = "onx-itembuttons";

      if (drops.length) {
        drops.forEach(item => {
          const itemButton =
            document.createElement("button");

          itemButton.type = "button";
          itemButton.textContent = "🎁 " + item;

          itemButton.addEventListener(
            "click",
            () => searchItem(item)
          );

          itemBox.append(itemButton);
        });
      } else {
        const none = document.createElement("p");
        none.textContent =
          "드롭 아이템 자료가 아직 없습니다.";

        itemBox.append(none);
      }

      detail.append(itemBox);

      const toggle =
        document.createElement("button");

      toggle.type = "button";
      toggle.className = "onx-detailbtn";
      toggle.textContent = "📖 상세 정보 보기";

      toggle.addEventListener("click", () => {
        detail.hidden = !detail.hidden;

        toggle.textContent = detail.hidden
          ? "📖 상세 정보 보기"
          : "📖 상세 정보 닫기";
      });

      card.append(toggle, detail);

      return card;
    }

    // 화면 갱신
    function draw() {
      modeButtons.forEach(btn => {
        const active =
          btn.dataset.mode === state.mode;

        btn.classList.toggle(
          "onx-active",
          active
        );

        btn.setAttribute(
          "aria-pressed",
          String(active)
        );
      });

      const found = findMonsters();

      count.textContent =
        "📚 전체 " + data.length +
        "마리 · 검색 결과 " +
        found.length + "마리";

      results.replaceChildren();

      if (!data.length) {
        const empty =
          document.createElement("div");

        empty.className = "onx-empty";
        empty.textContent =
          "몬스터 데이터가 없습니다. " +
          "monsters.js 연결을 확인해 주세요.";

        results.append(empty);
        return;
      }

      if (
        state.mode === "item" &&
        !state.keyword.trim()
      ) {
        const empty =
          document.createElement("div");

        empty.className = "onx-empty";
        empty.textContent =
          "🔍 아이템 이름을 입력하면 " +
          "드롭하는 몬스터가 표시됩니다.";

        results.append(empty);
        return;
      }

      if (!found.length) {
        const empty =
          document.createElement("div");

        empty.className = "onx-empty";
        empty.textContent =
          "검색 결과가 없습니다. " +
          "다른 이름이나 지역으로 검색해 보세요.";

        results.append(empty);
        return;
      }

      const fragment =
        document.createDocumentFragment();

      found.forEach(m => {
        fragment.append(makeCard(m));
      });

      results.append(fragment);
    }

    // 검색 입력 이벤트
    search.addEventListener("input", () => {
      state.keyword = search.value;
      draw();
    });

    // 검색 유형 변경
    modeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;

        search.placeholder =
          state.mode === "item"
            ? "🔍 드롭 아이템 이름 입력"
            : "🔍 몬스터·아이템·사냥터 검색";

        draw();
      });
    });

    // 지역 변경
    regionSelect.addEventListener("change", () => {
      state.region = regionSelect.value;
      state.floor = "all";

      refreshFloorOptions();
      draw();
    });

    // 층 변경
    floorSelect.addEventListener("change", () => {
      state.floor = floorSelect.value;
      draw();
    });

    // 초기화
    root.querySelector(".onx-reset")
      .addEventListener("click", () => {
        state.keyword = "";
        state.mode = "all";
        state.region = "all";
        state.floor = "all";

        search.value = "";
        search.placeholder =
          "🔍 몬스터·아이템·사냥터 검색";

        regionSelect.value = "all";

        refreshFloorOptions();
        draw();
      });

    // 홈으로 돌아가기
    root.querySelector(".onx-back")
      .addEventListener("click", () => {
        if (typeof goHome === "function") {
          goHome();
        }
      });

    app.replaceChildren(root);

    refreshFloorOptions();
    draw();

    window.scrollTo(0, 0);
  };
})();
