
/* IMO.ONYX 몬스터 도감 업그레이드
   monsters.js 다음에 불러오기
   기존 monsters.js 및 직업 공략 코드는 수정하지 않음
*/
(function () {
  "use strict";

  const KEY = "imo_onyx_monster_favorites_v1";
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const norm = value => String(value ?? "").trim().toLocaleLowerCase();
  const getMonsters = () => {
    const list = typeof monsterData !== "undefined" ? monsterData : window.monsterData;
    return Array.isArray(list) ? list : [];
  };
  let favorites = new Set();
  try { favorites = new Set(JSON.parse(localStorage.getItem(KEY) || "[]").map(String)); }
  catch (_) { favorites = new Set(); }

  const state = { tab: "all", query: "", place: "", levels: "all", open: new Set() };
  let layer = null;

  const css = `
    .mc-layer{position:fixed;inset:0;z-index:2147483000;background:#101724;color:#e9effb;
      font-family:system-ui,-apple-system,sans-serif;overflow:auto;overscroll-behavior:contain}
    .mc-layer *{box-sizing:border-box}
    .mc-wrap{max-width:900px;margin:0 auto;padding:0 14px 30px}
    .mc-top{position:sticky;top:0;z-index:1;background:#101724ee;backdrop-filter:blur(8px);
      display:flex;gap:10px;align-items:center;padding:13px 0;border-bottom:1px solid #344156}
    .mc-top strong{flex:1;font-size:17px;color:#f3cf80}
    .mc-btn,.mc-layer select,.mc-layer input{border:1px solid #4d5e76;background:#23344e;color:#fff;
      padding:11px;border-radius:10px;font-size:14px}
    .mc-btn{cursor:pointer}
    .mc-btn.mc-on{background:#d5ac57;color:#15191f;font-weight:800;border-color:#e4c475}
    .mc-search{width:100%;margin-top:15px;outline:none}
    .mc-line{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}
    .mc-line>select{flex:1;min-width:120px}
    .mc-tabs{display:flex;gap:7px;overflow:auto;padding:3px 0 8px}
    .mc-tabs button{white-space:nowrap;flex-shrink:0}
    .mc-count{color:#b9c7dd;font-size:13px;padding:9px 1px}
    .mc-card{border:1px solid #857344;border-radius:13px;padding:15px;margin:12px 0;background:#172131}
    .mc-head{display:flex;gap:10px;align-items:center;justify-content:space-between}
    .mc-head h3{font-size:19px;color:#fff;margin:0;min-width:0;overflow-wrap:anywhere}
    .mc-meta{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0}
    .mc-meta span{background:#2c3e59;border-radius:8px;padding:5px 9px;font-size:12px}
    .mc-card p{margin:8px 0;font-size:14px;line-height:1.65;overflow-wrap:anywhere}
    .mc-label{font-weight:700;color:#e2bc66}
    .mc-drops{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
    .mc-drop{background:#273953;border:1px solid #40516b;color:#e5eefc;
      border-radius:999px;padding:6px 9px;font-size:12px;cursor:pointer}
    .mc-note{font-size:12px;color:#a9b7c9}
    .mc-more{margin-top:10px;width:100%;background:#ceaa62;color:#151c2b;font-weight:800}
    .mc-item{display:flex;gap:8px;align-items:center;justify-content:space-between;
      padding:13px;border:1px solid #40536f;border-radius:10px;margin:9px 0;background:#19263a}
    .mc-item>div{min-width:0;overflow-wrap:anywhere}
    .mc-item small{color:#b6c6df;display:block;margin-top:4px}
    .mc-empty{text-align:center;color:#b9c7dd;padding:45px 10px;line-height:1.7}
    .mc-launch{margin:10px 0;padding:13px 18px;border-radius:10px;border:1px solid #e0bf72;
      background:#d5ad5d;color:#182033;font-size:15px;font-weight:800;width:100%;cursor:pointer}
    .mc-pill{background:transparent;border:1px solid #657892;border-radius:10px;
      padding:8px 10px;color:#ffe1a1;font-size:14px}
  `;

  function saveFavorites() {
    try { localStorage.setItem(KEY, JSON.stringify([...favorites])); }
    catch (_) { /* 저장이 차단된 경우 현재 화면에서만 유지 */ }
  }

  function matchLevel(level) {
    if (state.levels === "all") return true;
    if (!Number.isFinite(Number(level))) return false;
    const n = Number(level);
    return state.levels === "1-10" ? n <= 10
      : state.levels === "11-20" ? n >= 11 && n <= 20
      : state.levels === "21-30" ? n >= 21 && n <= 30
      : n >= 31;
  }

  function filteredMonsters() {
    return getMonsters().filter(m => {
      if (state.place && m.location !== state.place) return false;
      if (!matchLevel(m.level)) return false;
      if (state.tab === "fav" && !favorites.has(String(m.id))) return false;
      const q = norm(state.query);
      if (!q) return true;
      const nameOrArea = norm(`${m.name} ${m.location} ${m.description || ""}`);
      if (state.tab === "monster") return nameOrArea.includes(q);
      const drops = Array.isArray(m.drops) ? m.drops.join(" ") : "";
      return norm(`${nameOrArea} ${drops}`).includes(q);
    }).sort((a, b) => Number(a.level) - Number(b.level) || a.id - b.id);
  }

  function allItems() {
    const items = new Map();
    getMonsters()
      .filter(m => (!state.place || m.location === state.place) && matchLevel(m.level))
      .forEach(m => (Array.isArray(m.drops) ? m.drops : []).forEach(item => {
        if (!items.has(item)) items.set(item, new Map());
        items.get(item).set(String(m.id), m);
      }));
    return [...items.entries()]
      .filter(([name]) => norm(name).includes(norm(state.query)))
      .sort((a, b) => a[0].localeCompare(b[0], "ko"));
  }

  function monsterCard(m) {
    const id = String(m.id);
    const drops = Array.isArray(m.drops) ? m.drops : [];
    const expanded = state.open.has(id);
    const exp = m.exp === null || m.exp === undefined ? "정보 미등록" : `${m.exp}`;
    const hp = m.hp === null || m.hp === undefined ? "정보 미등록" : `${m.hp}`;
    const respawn = m.respawn || "정보 미등록";

    return `
      <article class="mc-card">
        <div class="mc-head">
          <h3>👾 ${esc(m.name)}</h3>
          <button type="button" class="mc-pill" data-fav="${esc(id)}"
            aria-label="즐겨찾기 전환">${favorites.has(id) ? "★ 즐겨찾기" : "☆ 즐겨찾기"}</button>
        </div>
        <div class="mc-meta">
          <span>⚔️ Lv.${esc(m.level)}</span>
          <span>❤️ HP ${esc(hp)}</span>
          <span>⭐ EXP ${esc(exp)}</span>
        </div>
        <p>🗺️ <span class="mc-label">출현 장소:</span> ${esc(m.location || "정보 미등록")}</p>
        <p>⏱️ <span class="mc-label">재출현:</span> ${esc(respawn)}</p>
        <p>🎁 <span class="mc-label">드롭 아이템:</span></p>
        ${drops.length
          ? `<div class="mc-drops">${drops.map(item => `<button type="button" class="mc-drop"
                 data-item="${esc(item)}" title="이 아이템을 드롭하는 몬스터 찾기">${esc(item)}</button>`).join("")}</div>`
          : '<p class="mc-note">드롭 정보 미등록 (드롭 없음으로 확정된 것은 아님)</p>'}
        <button type="button" class="mc-btn mc-more" data-detail="${esc(id)}">
          📖 상세 정보 ${expanded ? "닫기" : "보기"}
        </button>
        ${expanded ? `<div>
          <p>📖 <span class="mc-label">특징:</span> ${esc(m.description || "정보 미등록")}</p>
          <p class="mc-note">몬스터 ID: ${esc(id)} · 현재 경험치가 없으면 추정값을 표시하지 않습니다.</p>
          ${m.image ? `<img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy"
            style="max-width:100%;max-height:190px;object-fit:contain">` : ""}
        </div>` : ""}
      </article>`;
  }

  function render() {
    if (!layer) return;
    const result = layer.querySelector("[data-mc-result]");
    const count = layer.querySelector("[data-mc-count]");
    layer.querySelectorAll("[data-tab]").forEach(btn =>
      btn.classList.toggle("mc-on", btn.dataset.tab === state.tab));

    if (state.tab === "item") {
      const items = allItems();
      count.textContent = `아이템 ${items.length}종 · 이름을 누르면 드롭 몬스터를 볼 수 있어요`;
      result.innerHTML = items.length ? items.map(([name, monsters]) => `
        <div class="mc-item">
          <div>🎁 <b>${esc(name)}</b>
            <small>등록된 드롭 몬스터 ${monsters.size}종</small></div>
          <button type="button" class="mc-btn" data-item="${esc(name)}">몬스터 보기</button>
        </div>`).join("") : '<div class="mc-empty">등록된 검색 결과가 없어.<br>아이템 이름을 바꿔 검색해봐!</div>';
    } else {
      const mobs = filteredMonsters();
      count.textContent = `몬스터 ${mobs.length}마리 / 총 ${getMonsters().length}마리`;
      result.innerHTML = mobs.length ? mobs.map(monsterCard).join("")
        : '<div class="mc-empty">해당 조건의 몬스터가 없어.<br>검색어 또는 필터를 바꿔봐!</div>';
    }
  }

  let layerPrevOverflow = "";

  function closeCatalog() {
    if (layer) layer.remove();
    layer = null;
    document.body.style.overflow = layerPrevOverflow;
  }

  function openCatalog() {
    if (layer) return;
    const mobs = getMonsters();
    if (!mobs.length) {
      alert("몬스터 데이터를 찾지 못했어. monsters.js 연결을 확인해줘.");
      return;
    }

    state.tab = "all";
    state.query = "";
    state.place = "";
    state.levels = "all";

    const locations = [...new Set(mobs.map(m => m.location).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "ko"));

    layer = document.createElement("div");
    layer.className = "mc-layer";
    layer.innerHTML = `
      <div class="mc-wrap">
        <header class="mc-top">
          <button type="button" class="mc-btn" data-close>← 돌아가기</button>
          <strong>📖 IMO.ONYX 몬스터 도감</strong>
        </header>

        <input class="mc-search" data-search type="search"
          placeholder="🔍 몬스터 · 드롭 아이템 · 사냥터 검색" autocomplete="off">

        <nav class="mc-tabs" aria-label="도감 메뉴">
          <button type="button" class="mc-btn mc-on" data-tab="all">전체 검색</button>
          <button type="button" class="mc-btn" data-tab="monster">몬스터</button>
          <button type="button" class="mc-btn" data-tab="item">아이템 역검색</button>
          <button type="button" class="mc-btn" data-tab="fav">★ 즐겨찾기</button>
        </nav>

        <div class="mc-line">
          <select data-place aria-label="지역 선택">
            <option value="">전체 지역</option>
            ${locations.map(p => `<option value="${esc(p)}">${esc(p)}</option>`).join("")}
          </select>
          <select data-levels aria-label="레벨 선택">
            <option value="all">전체 레벨</option>
            <option value="1-10">Lv.1~10</option>
            <option value="11-20">Lv.11~20</option>
            <option value="21-30">Lv.21~30</option>
            <option value="31+">Lv.31 이상</option>
          </select>
        </div>

        <div class="mc-count" data-mc-count></div>
        <main data-mc-result></main>
        <p class="mc-note">자료에 없는 수치는 '정보 미등록'으로 표시돼. 즐겨찾기는 이 기기에 저장돼.</p>
      </div>`;

    layerPrevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.append(layer);

    layer.querySelector("[data-close]").addEventListener("click", closeCatalog);
    layer.querySelector("[data-search]").addEventListener("input", e => {
      state.query = e.target.value;
      render();
    });
    layer.querySelector("[data-place]").addEventListener("change", e => {
      state.place = e.target.value;
      render();
    });
    layer.querySelector("[data-levels]").addEventListener("change", e => {
      state.levels = e.target.value;
      render();
    });

    layer.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;

      if (btn.hasAttribute("data-tab")) {
        state.tab = btn.dataset.tab;
        render();
      } else if (btn.hasAttribute("data-fav")) {
        const id = btn.dataset.fav;
        favorites.has(id) ? favorites.delete(id) : favorites.add(id);
        saveFavorites();
        render();
      } else if (btn.hasAttribute("data-detail")) {
        const id = btn.dataset.detail;
        state.open.has(id) ? state.open.delete(id) : state.open.add(id);
        render();
      } else if (btn.hasAttribute("data-item")) {
        state.tab = "all";
        state.query = btn.dataset.item;
        layer.querySelector("[data-search]").value = state.query;
        layer.scrollTop = 0;
        render();
      }
    });

    render();
  }

  // 기존 도감 검색창 아래에 새 도감 버튼 추가
  function addLauncher() {
    const inputs = document.querySelectorAll('input[placeholder]');

    for (const input of inputs) {
      if (input.closest(".mc-layer")) continue;
      const placeholder = input.getAttribute("placeholder") || "";
      if (!placeholder.includes("몬스터") || !placeholder.includes("사냥터")) continue;
      if (input.nextElementSibling?.classList.contains("mc-launch")) continue;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mc-launch";
      btn.textContent = "📖 업그레이드 도감 열기 (아이템 역검색 · 즐겨찾기)";
      btn.addEventListener("click", openCatalog);
      input.insertAdjacentElement("afterend", btn);
    }
  }

  function init() {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);

    addLauncher();

    const watcher = new MutationObserver(addLauncher);
    watcher.observe(document.body, { childList: true, subtree: true });

    window.openIMOMonsterCatalog = openCatalog;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
