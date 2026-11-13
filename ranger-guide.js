
/* IMO.ONYX 레인저 통합 공략 */
(function () {
  "use strict";

  const categories = [
    ["📊 능력치", "stats"],
    ["🛡️ 장비", "equipment"],
    ["🗺️ 사냥터", "hunting"],
    ["📜 퀘스트", "quests"],
    ["📚 스킬", "skills"],
    ["💰 골드벌이", "gold"],
    ["💎 보석", "gems"],
    ["📖 도감", "collection"]
  ];

  const fieldNames = {
    stats: ["추천 능력치"],
    equipment: ["추천 장비"],
    hunting: ["레벨별 사냥터", "추천 사냥터"],
    quests: ["필수 퀘스트", "퀘스트"],
    skills: ["스킬 가이드", "추천 스킬"],
    gold: ["골드 벌이"],
    gems: ["추천 보석"],
    collection: ["도감 우선순위"]
  };

  // 사용자가 보내준 고급 공략 중 확인된 내용
  const advanced = {
    stats: `
      <h3>🏹 레인저 고급 능력치</h3>
      <p>민첩(DEX): 원거리 공격 관련 주요 능력치</p>
      <p>장비와 도감을 통한 명중, 민첩,
      크리티컬 보강을 함께 확인하세요.</p>
    `,
    equipment: `
      <h3>🛡️ 레인저 고급 추천 장비</h3>

      <h4>Lv.44~53 일반 장비</h4>
      <p><b>스킬:</b> 더블샷4, 충격샷3(필수),
      포레스트아이</p>
      <p><b>무기:</b> +7 샤도우보우 →
      +7 임페리얼보우 &amp; +8 샤도우보우 →
      +8 임페리얼보우 &amp; +7 오염된순수 →
      +8 오염된순수</p>
      <p><b>보조:</b> +4~5 방랑자의화살집
      (명중4~)</p>
      <p><b>모자:</b> +4~5 방랑자의모자,
      +4~5 맹신의모자(크리7~9)</p>
      <p><b>갑옷:</b> +4~5 세계수가죽갑옷</p>
      <p><b>장갑:</b> +4~6 오트윌의가죽장갑,
      +4~5 스카우트장갑, 숲요정의장갑</p>
      <p><b>장화:</b> +4~5 맹독의장화</p>
      <p><b>망토:</b> 민첩1~2 의지의망토,
      반죽음의망토</p>
      <p><b>목걸이:</b> 민첩1~2 다크스컬,
      대자연, 황금목걸이</p>
      <p><b>반지:</b> 민첩1~2 대천사,
      정화된힘의반지(크리2)</p>
      <p><b>벨트:</b> 민첩1~2 서약자의벨트</p>
      <p><b>펫:</b> 민첩3 신규 레어 펫</p>

      <h4>Lv.44~53 자본 장비</h4>
      <p><b>스킬:</b> 더블샷4,
      충격샷3~4(필수), 포레스트아이</p>
      <p><b>무기:</b> +7~8 샤도우보우 →
      +8 임페리얼보우 &amp; +7 오염된순수 →
      +8 오염된순수 &amp; +7 페일노트 →
      +8 페일노트</p>
      <p><b>보조:</b> +5~6 방랑자의화살집
      (명중4~), 강철바람의유산
      (명중4+, 민첩2+)</p>
      <p><b>모자:</b> +5~6 방랑자의모자,
      +5~6 방신의모자(크리9~11)</p>
      <p><b>갑옷:</b> +5~6 세계수가죽갑옷
      (크리2~3)</p>
      <p><b>장갑:</b> +5~6 연격의장갑
      (명3+/크5+/민5+), +6 파워글러브</p>
      <p><b>장화:</b> +5~6 설원추적자장화
      (민3+/이속11+), +6~7 윙깃부츠</p>
      <p><b>망토:</b> 민첩3 죽음의망토</p>
      <p><b>목걸이:</b> 민첩3 대자연,
      황금목걸이</p>
      <p><b>반지:</b> 민첩3 정화된힘의반지 →
      전능의역설</p>
      <p><b>벨트:</b> 민첩3 서약자의벨트</p>
      <p><b>펫:</b> 민첩3 신규 레어 펫</p>

      <h4>Lv.48~55 종결 장비</h4>
      <p><b>스킬:</b> 더블샷4,
      충격샷4(필수), 포레스트아이</p>
      <p><b>무기:</b> +8 오염된순수 →
      +8 페일노트 → +8 임흘루</p>
      <p><b>보조:</b> +6 강철바람의유산
      (명중4+, 민첩2+)</p>
      <p><b>모자:</b> +6 추격의모자
      (크리10+/민첩3+)</p>
      <p><b>갑옷:</b> +6 파수꾼경갑옷,
      +6 마나깃든경갑(크리3, 불저)</p>
      <p><b>장갑:</b> +6 연격의장갑 →
      +6 파워글러브 &amp; +6 조마의손아귀</p>
      <p><b>장화:</b> +6 설원추적자장화,
      +7 윙깃부츠</p>
      <p><b>망토:</b> 민첩3 열광의망토</p>
      <p><b>목걸이:</b> 민첩3 인트루더,
      대자연</p>
      <p><b>반지:</b> 민첩3 전능의역설 →
      빛나는전능의역설</p>
      <p><b>벨트:</b> 민첩3 이계의벨트 →
      신속한마나의벨트</p>
      <p><b>펫:</b> 민첩3 신규 레어 펫</p>
    `,
    hunting: `
      <h3>🗺️ 고급 레벨별 사냥터</h3>
      <p><b>Lv.43~47:</b> 루나프,
      비탄의 제단</p>
      <p><b>Lv.47~49:</b> 모르포시즈 정원</p>
      <p><b>Lv.49~53:</b> 모르포시즈 금서고</p>
      <p><b>Lv.48~55:</b> 헌팅그라운드</p>
    `,
    quests: `
      <h3>📜 고급 주요 퀘스트</h3>
      <h4>Lv.46~49 모르포시즈 정원</h4>
      <p>모르포시즈 정원 몬스터 사냥</p>
      <p>NPC: 하이젠</p>
      <p>보상: 많은 경험치</p>

      <h4>Lv.46~49 모르포시즈 금서고</h4>
      <p>모르포시즈 금서고 몬스터 사냥</p>
      <p>NPC: 관리자 마셜</p>
      <p>보상: 많은 경험치</p>

      <h4>Lv.40~55 길드 던전</h4>
      <p>전지의관 리에티 클리어(필수)</p>
      <p>길드코인 획득 후
      포레스트아이 구매 준비</p>

      <h4>Lv.1~55 도감 완성</h4>
      <p>재료·장비·코스튬 아이템 도감</p>
    `,
    skills: `
      <h3>📚 고급 주요 스킬</h3>
      <p>더블샷4</p>
      <p>충격샷3~4 (필수)</p>
      <p>포레스트아이</p>
    `,
    gems: `
      <h3>💎 고급 추천 보석</h3>
      <p>🔷 민첩 — 여신의축복</p>
      <p>🔹 민첩 — 아드레날린</p>
      <p>🔻 민첩 — 영웅의힘</p>
    `,
    collection: `
      <h3>📖 고급 도감 우선순위</h3>
      <p>명중: 5↑ / 8 / 9 / 11↑</p>
      <p>크리티컬: 3↑ / 4 / 5</p>
      <p>체력: 500↑</p>
      <p>체력재생: 4↑ / 10</p>
      <p>민첩: 4↑ / 8 / 11↑</p>
      <p>이동속도: 6%↑ / 10</p>
      <p>아머: 6↑ / 10 / 18↑</p>
      <p>PVE 데미지: 20↑ / 8%↑ →
      35↑ / 16%↑</p>
      <p>아이템 드랍: 최소20 /
      권장50 / 100↑</p>
      <p>골드 드랍: 최소20 /
      권장50 / 100↑</p>
      <p>회피, 저항, PVP 관련 수치,
      보스 데미지 등도 함께 점검</p>
    `
  };

  function existingData(tier) {
    if (typeof guideData === "undefined") return {};
    return guideData?.["레인저"]?.[tier] || {};
  }

  function getValue(tier, key) {
    const data = existingData(tier);
    const fields = fieldNames[key] || [];
    for (const field of fields) {
      if (typeof data[field] === "string" &&
          data[field].trim()) {
        // 기존 자료를 우선 사용
        if (tier !== "고급" || !advanced[key]) {
          return data[field];
        }
      }
    }
    return tier === "고급" ? advanced[key] || "" : "";
  }

  function filterEquipment(html, range, type) {
    const temp = document.createElement("div");
    temp.innerHTML = html;

    const headings = [...temp.querySelectorAll("h4")];
    const groups = headings.filter(h => {
      const name = h.textContent.replace(/\s/g, "");
      const matchesRange =
        range === "all" ||
        (range === "30" && /30.{0,2}37/.test(name)) ||
        (range === "38" && /38.{0,2}43/.test(name)) ||
        (range === "44" && /44.{0,2}53/.test(name)) ||
        (range === "48" && /48.{0,2}55/.test(name));
      const matchesType =
        type === "all" ||
        (type === "normal" && /일반|아이템점검\(7-1\)/.test(name)) ||
        (type === "capital" && /자본/.test(name)) ||
        (type === "final" && /종결/.test(name));
      return matchesRange && matchesType;
    });

    if (!headings.length || !groups.length) {
      return html;
    }

    const output = document.createElement("div");
    for (const heading of groups) {
      let node = heading;
      while (node) {
        if (node !== heading &&
            node.tagName === "H4") break;
        output.append(node.cloneNode(true));
        node = node.nextElementSibling;
      }
    }
    return output.innerHTML || html;
  }

  window.renderIMORanger = function(target, startLevel) {
    const root = typeof target === "string"
      ? document.querySelector(target) : target;
    if (!root) return false;

    root.innerHTML = `
      <div class="rr-app">
        <style>
          .rr-app {
            background:#101827;
            color:#eaf1ff;
            padding:14px;
            border-radius:12px;
            line-height:1.7;
          }
          .rr-app * {box-sizing:border-box}
          .rr-app h2,.rr-app h3 {color:#f1c86e}
          .rr-app h2 {text-align:center}
          .rr-tabs {
            display:flex;
            gap:6px;
            flex-wrap:wrap;
            margin:12px 0;
          }
          .rr-app button,.rr-app select {
            background:#283a54;
            color:white;
            border:1px solid #52647c;
            padding:9px;
            border-radius:8px;
          }
          .rr-app button.active {
            background:#a47c36;
            border-color:#e9bf6b;
          }
          .rr-card {
            background:#1d2b40;
            border:1px solid #34445d;
            border-radius:10px;
            padding:12px;
            margin:10px 0;
            overflow-wrap:anywhere;
          }
          .rr-card h4 {
            color:#9bd8f4;
            border-top:1px solid #34445d;
            padding-top:12px;
          }
          .rr-card p {margin:7px 0}
          .rr-muted {color:#a8b6cb}
          .rr-filter {
            background:#19283b;
            padding:12px;
            border-radius:10px;
          }
          .rr-filter label {
            display:block;
            margin:7px 0;
          }
          .rr-filter select {width:100%}
          .rr-app [hidden] {display:none!important}
        </style>

        <h2>🏹 레인저 통합 육성 공략</h2>

        <div class="rr-tabs" id="rr-tiers">
          <button data-tier="초급">초급</button>
          <button data-tier="중급">중급</button>
          <button data-tier="고급">고급</button>
        </div>

        <div id="rr-beginner" hidden>
          <div id="rr-original"></div>
        </div>

        <div id="rr-advanced" hidden>
          <div class="rr-tabs" id="rr-categories">
            <button data-category="all">전체</button>
            <button data-category="stats">능력치</button>
            <button data-category="equipment">장비</button>
            <button data-category="hunting">사냥터</button>
            <button data-category="quests">퀘스트</button>
            <button data-category="skills">스킬</button>
            <button data-category="gold">골드벌이</button>
            <button data-category="gems">보석</button>
            <button data-category="collection">도감</button>
          </div>

          <div class="rr-filter" id="rr-filter" hidden>
            <label>레벨 구간</label>
            <select id="rr-range"></select>
            <label>장비 유형</label>
            <select id="rr-type">
              <option value="all">전체 장비</option>
              <option value="normal">일반 장비</option>
              <option value="capital">자본 장비</option>
              <option value="final">종결 장비</option>
            </select>
          </div>

          <div id="rr-content"></div>
          <p class="rr-muted">
            ※ 제공된 공략 자료 기준
          </p>
        </div>
      </div>
    `;

    let tier = "초급";
    let category = "all";
    let range = "all";
    let type = "all";

    const beginner = root.querySelector("#rr-beginner");
    const advancedBox = root.querySelector("#rr-advanced");
    const content = root.querySelector("#rr-content");
    const filter = root.querySelector("#rr-filter");
    const rangeSelect = root.querySelector("#rr-range");
    const typeSelect = root.querySelector("#rr-type");

    function showBeginner() {
      if (beginner.dataset.loaded) return;
      const target = root.querySelector("#rr-original");

      if (typeof renderIMORangerBeginner === "function") {
        renderIMORangerBeginner(target, startLevel);
        beginner.dataset.loaded = "true";
      } else {
        target.textContent =
          "레인저 초급 파일 연결을 확인해 주세요.";
      }
    }

    function setRangeOptions() {
      const options = tier === "중급"
        ? [
            ["all", "전체 구간"],
            ["30", "Lv.30~37"],
            ["38", "Lv.38~43"]
          ]
        : [
            ["all", "전체 구간"],
            ["44", "Lv.44~53"],
            ["48", "Lv.48~55"]
          ];

      rangeSelect.replaceChildren();
      options.forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        rangeSelect.append(option);
      });
      range = "all";
      type = "all";
      typeSelect.value = "all";
    }

    function showGuides() {
      content.replaceChildren();
      filter.hidden = category !== "equipment";

      const selected = categories.filter(
        ([label, key]) =>
          category === "all" || category === key
      );

      selected.forEach(([label, key]) => {
        const card = document.createElement("section");
        card.className = "rr-card";

        const title = document.createElement("h3");
        title.textContent = label;
        card.append(title);

        const body = document.createElement("div");
        let value = getValue(tier, key);

        if (key === "equipment" &&
            category === "equipment" &&
            typeof value === "string" &&
            value.trim()) {
          value = filterEquipment(value, range, type);
        }

        if (typeof value === "string" && value.trim()) {
          body.innerHTML = value;
        } else {
          body.textContent = "📚 자료 준비 중";
          body.className = "rr-muted";
        }

        card.append(body);
        content.append(card);
      });
    }

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

      beginner.hidden = tier !== "초급";
      advancedBox.hidden = tier === "초급";

      if (tier === "초급") showBeginner();
      else showGuides();
    }

    root.querySelectorAll("[data-tier]").forEach(btn => {
      btn.addEventListener("click", () => {
        tier = btn.dataset.tier;
        category = "all";
        setRangeOptions();
        update();
      });
    });

    root.querySelectorAll("[data-category]").forEach(btn => {
      btn.addEventListener("click", () => {
        category = btn.dataset.category;
        update();
      });
    });

    rangeSelect.addEventListener("change", () => {
      range = rangeSelect.value;
      showGuides();
    });

    typeSelect.addEventListener("change", () => {
      type = typeSelect.value;
      showGuides();
    });

    setRangeOptions();
    update();
    return true;
  };
})();
