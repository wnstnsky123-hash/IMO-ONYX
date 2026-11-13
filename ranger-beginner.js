
/* IMO.ONYX 레인저 초급 Lv.1~33 통합 공략 */
(function () {
  "use strict";

  const stats = {
    recommended: "민첩 18 / 체력 15",
    alternative: "민첩 15 / 체력 18"
  };

  const quests = [
    [1,3,"튜토리얼","튜토리얼","4칸 가방, +4 기본무기, 견습용장갑, 더블샷1"],
    [3,5,"우디마을 퀘스트","우디숲","4칸 가방 4개, 꼬마루이 펫, 기본갑옷"],
    [4,6,"기초육성(1)","우디숲 멧돼지","어금니고리"],
    [6,9,"버섯늪지 퀘스트","버섯늪지","강화가죽갑옷, 가죽화살집, 더블샷, 쉬프트, 집중"],
    [8,10,"기초육성(2)","머쉬룸스포어","체력의망토, 펑기스킨벨트"],
    [10,10,"길드 가입","우디마을","길드 가입 및 경험치 혜택 확인"],
    [10,15,"해변 퀘스트","윙프릴섬 해변","+3 산호활"],
    [10,15,"쿨린 퀘스트","버섯늪지","천사의눈물"],
    [12,16,"기초육성(3)","해지는노을숲 / 라노스평원","까막이반지"],
    [14,18,"등대던전 1F","등대던전 1층","매드가의벨트, 영혼의링"],
    [17,19,"해적선 퀘스트","해적선","녹슨열쇠"],
    [17,19,"등대던전 2F","등대던전 2층","경험치"],
    [20,23,"이노티아대륙 퀘스트","카타르산맥 / 폐허가있는숲","경험치"],
    [21,22,"등대던전 3F","등대던전 3층","경험치"],
    [21,26,"오염된숲 퀘스트","오염된 숲","경험치"],
    [22,25,"등대던전 4F","등대던전 4층","경험치, 무료입장"],
    [23,33,"기초육성(5)","등대던전 5F / 하늘성채 / 이슬롯의 실험실","구간별 사냥"],
    [25,28,"하늘성채 퀘스트(1)","고대의누각","경험치"],
    [25,28,"하늘성채 퀘스트(2)","하늘성채 서부 / 동부","경험치"],
    [28,28,"크라운락 퀘스트","이슬롯의 실험실","경험치"],
    [29,33,"추가 사냥터","모래무덤골짜기 / 건조한초원","스카우트띠"]
  ];

  const equipment = [
    {
      level: 10,
      weapon: "+5 정찰대활",
      offhand: "가죽화살집",
      armor: "강화가죽갑옷",
      gloves: "견습용장갑",
      boots: "모험가의신발",
      ring: "어금니고리",
      belt: "모험가의벨트 / 펑기스킨벨트",
      skills: "더블샷3, 쉬프트1, 집중2, 가시덩굴1, 충격샷1"
    },
    {
      level: 14,
      weapon: "+6 컴포짓보우 / 소용돌이활",
      offhand: "+4 산호화살집",
      armor: "+4 거미줄뼈갑옷",
      gloves: "+4 강화가죽장갑",
      boots: "+4 신속의장화",
      ring: "영혼의링 / 까막이반지",
      belt: "매드가의벨트",
      skills: "올가미1, 날렵함1, 예리한감각1, 약화1"
    },
    {
      level: 23,
      weapon: "+6 겁습투사의활",
      offhand: "+4 사냥꾼의화살집",
      armor: "+4 거미줄뼈갑옷",
      gloves: "+4 강화가죽장갑",
      boots: "+4 신속의장화 / 야만의부츠",
      ring: "해적의반지 / 투사의반지",
      belt: "매드가의벨트 / 투사의벨트",
      skills: "예리한감각2, 멀티샷1/2, 스톤스킨1"
    },
    {
      level: 27,
      weapon: "+6~7 숙련투사의활",
      offhand: "+4 사냥꾼의화살집 / 벌침화살집",
      armor: "+4 거미줄뼈갑옷",
      gloves: "+4 오트월의가죽장갑",
      boots: "+4 신속의장화 / 야만의부츠",
      ring: "합금반지 / 투사의반지",
      belt: "투사의벨트 / 강화가죽벨트",
      skills: "예리한감각3, 감각의증폭1/2"
    },
    {
      level: 32,
      weapon: "+7~8 숙련투사의활 / +6~7 링의날개",
      offhand: "+4 스카우트띠",
      armor: "+4 거미줄뼈갑옷",
      gloves: "+4 오트월의가죽장갑",
      boots: "+4 맹독의장화 / 야만의부츠",
      ring: "합금반지 / 투사의반지",
      belt: "투사의벨트 / 신념의벨트",
      skills: "본능자극1, 소울드레인샷1"
    }
  ];

  const gold = [
    ["윙프릴섬 해변","★","집중3, 장비 아이템"],
    ["해적선","★★","해적의장갑, 해적의반지, 예리한감각2"],
    ["등대던전 1F","★★","강화가죽장갑, 전기부여3"],
    ["등대던전 2F","★★","주시자의눈, 약화2"],
    ["등대던전 3F","★★","그레이트보우, 맹독의화살집"],
    ["등대던전 4F","★","각궁, 장비 아이템"],
    ["등대던전 5F","★★","헌터보우, 감각의증폭2"],
    ["오염된 숲","★★★","멀티샷2, 사냥꾼의화살집"],
    ["이슬롯의 실험실","★★","맹독의장화, 서리깃든화살집"]
  ];

  function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#39;"
    })[c]);
  }

  function card(title, content) {
    return '<section class="rg-card"><h3>' +
      safe(title) + '</h3>' + content + '</section>';
  }

  function line(label, value) {
    return '<p><b>' + safe(label) + '</b> ' +
      safe(value) + '</p>';
  }

  function levelHTML(lv) {
    const matches = quests.filter(q => lv >= q[0] && lv <= q[1]);
    const gear = equipment.filter(g => g.level <= lv).slice(-1)[0];

    let html = card("📊 추천 능력치",
      line("추천", stats.recommended) +
      line("대안", stats.alternative)
    );

    html += card("📜 해당 레벨 육성 / 퀘스트",
      matches.length
        ? matches.map(q =>
            '<details><summary>' + safe(q[2]) + '</summary>' +
            line("사냥터",q[3]) +
            line("보상 / 참고",q[4]) +
            '</details>'
          ).join("")
        : "<p>해당 레벨 전용 퀘스트 자료 준비 중</p>"
    );

    if (gear) {
      html += card("🛡️ 추천 장비 (Lv." + gear.level + " 기준)",
        line("무기",gear.weapon) +
        line("보조",gear.offhand) +
        line("갑옷",gear.armor) +
        line("장갑",gear.gloves) +
        line("신발",gear.boots) +
        line("반지",gear.ring) +
        line("벨트",gear.belt)
      );
      html += card("📚 추천 스킬",line("스킬",gear.skills));
    } else {
      html += card("🛡️ 장비 / 스킬",
        "<p>Lv.10 장비 점검 이전 구간</p>");
    }

    if (typeof rangerHuntingData !== "undefined" &&
        rangerHuntingData[lv]) {
      html += card("🗺️ 기존 사냥터 공략",
        rangerHuntingData[lv]);
    }

    return html;
  }

  window.renderIMORangerBeginner = function(target, level) {
    const el = typeof target === "string"
      ? document.querySelector(target) : target;

    if (!el) return false;

    let selectedLevel = Number(level) || 1;
    if (selectedLevel < 1 || selectedLevel > 33) selectedLevel = 1;

    el.innerHTML = `
      <div class="rg-wrap">
        <style>
          .rg-wrap{background:#101827;color:#eaf1ff;
            padding:14px;border-radius:12px;line-height:1.6}
          .rg-wrap *{box-sizing:border-box}
          .rg-wrap h2,.rg-wrap h3{color:#f1c86e}
          .rg-card{background:#1d2b40;border:1px solid #34445d;
            border-radius:10px;padding:12px;margin:10px 0}
          .rg-card p{margin:6px 0}
          .rg-card b{color:#9bd8f4}
          .rg-wrap button,.rg-wrap select{
            padding:9px;border-radius:8px;
            background:#283a54;color:white;border:1px solid #62718b}
          .rg-tabs{display:flex;gap:5px;flex-wrap:wrap}
          .rg-tabs button.active{background:#a47c36}
          .rg-wrap summary{cursor:pointer;color:#f1c86e}
          .rg-wrap [hidden]{display:none!important}
        </style>
        <h2>🏹 레인저 초급 Lv.1~33</h2>
        <label>레벨 선택 </label>
        <select id="rg-level"></select>
        
<div class="rg-tabs">
  <button data-tab="level" class="active">전체</button>
  <button data-tab="equipment">장비</button>
  <button data-tab="hunting">사냥터</button>
  <button data-tab="quests">퀘스트</button>
  <button data-tab="skills">스킬</button>
  <button data-tab="gold">골드벌이</button>
  <button data-tab="gems">보석</button>
  <button data-tab="collection">도감</button>
  <button data-tab="battle">폭전</button>
</div>

        <div id="rg-content"></div>
      </div>
    `;

    const select = el.querySelector("#rg-level");
    for(let i=1;i<=33;i++){
      const option=document.createElement("option");
      option.value=i;
      option.textContent="Lv."+i;
      select.append(option);
    }
    select.value=selectedLevel;

    const content=el.querySelector("#rg-content");
    let tab="level";
    
function categoryHTML(lv, category) {
  const temp = document.createElement("div");
  temp.innerHTML = levelHTML(lv);

  const cards = [...temp.querySelectorAll(".rg-card")];

if (category === "equipment") {
  const gear = equipment
    .filter(g => g.level <= lv)
    .slice(-1)[0];

  if (!gear) {
    return card("🛡️ 추천 장비",
      "<p>Lv.10 이전 장비 자료 준비 중</p>");
  }

  return card("🛡️ 추천 장비 (Lv." + gear.level + " 기준)",
    line("무기", gear.weapon) +
    line("보조", gear.offhand) +
    line("갑옷", gear.armor) +
    line("장갑", gear.gloves) +
    line("신발", gear.boots) +
    line("반지", gear.ring) +
    line("벨트", gear.belt)
  );
}

  const keywords = {
    equipment: ["추천 장비", "장비 / 스킬"],
    hunting: ["사냥터"],
    quests: ["퀘스트", "레벨 육성"],
    skills: ["추천 스킬", "장비 / 스킬"]
  };

  if (category === "stats") {
    return cards.filter(card =>
      card.textContent.includes("추천 능력치")
    ).map(card => card.outerHTML).join("");
  }

  const words = keywords[category] || [];

  const result = cards.filter(card => {
    const heading = card.querySelector("h3");
    const title = heading ? heading.textContent : "";
    return words.some(word => title.includes(word));
  });

  if (result.length) {
    return result.map(card => card.outerHTML).join("");
  }

  const data =
    typeof guideData !== "undefined"
      ? guideData?.["레인저"]?.["초급"] || {}
      : {};

  const fields = {
    gems: "추천 보석",
    collection: "도감 우선순위",
    skills: "스킬 가이드",
    hunting: "레벨별 사냥터"
  };

  const value = data[fields[category]];

  return value
    ? '<div class="rg-card">' + value + '</div>'
    : '<div class="rg-card">📚 자료 준비 중</div>';
}


    function update(){
      const lv=Number(select.value);

    
if (tab === "level") {
  content.innerHTML = levelHTML(lv);
} else if (
  ["equipment", "hunting", "quests", "skills",
   "gems", "collection"].includes(tab)
) {
  content.innerHTML = categoryHTML(lv, tab);
}

      else if(tab==="gold"){
        content.innerHTML=gold.map(g=>
          card(g[0]+" "+g[1],line("주요 드롭",g[2]))
        ).join("");
      }else{
        content.innerHTML=
          card("⚔️ 폭풍의 전장",
            line("참여 레벨","Lv.20 이상")+
            line("1전장","Lv.20~26")+
            line("2전장","Lv.26~33")+
            line("참여 주기","2시간마다 (원본 공략 기준)")+
            line("교환","용기의팬던트로 장비 및 보급품 교환")
          );
      }
    }

    select.addEventListener("change",update);

    el.querySelectorAll("[data-tab]").forEach(btn=>{
      btn.addEventListener("click",()=>{
        tab=btn.dataset.tab;
        el.querySelectorAll("[data-tab]").forEach(b=>
          b.classList.toggle("active",b===btn));
        update();
      });
    });

    update();
    return true;
  };
})();
