
/* IMO.ONYX | 마법사 통합 공략 */
(function () {
  "use strict";

  const E = value => String(value ?? "").replace(
    /[&<>"']/g,
    ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch])
  );

  const line = (label, value) => ({ label, value });
  const part = (min, max, title, rows, kind = "growth") =>
    ({ min, max, title, rows, kind });
  const gear = (level, type, title, rows) =>
    ({ level, type, title, rows });

  const origin = [
    line("추천 생성 능력치", "지능 18 / 체력 8 / 지혜 18"),
    line("대안 1", "지능 18 / 체력 13 / 지혜 13"),
    line("대안 2", "지능 16 / 체력 16 / 지혜 12"),
    line("힘", "근접 데미지"),
    line("민첩", "원거리 데미지, 명중, 크리티컬 및 크리티컬 회피"),
    line("지능", "마법 데미지, 마법 저항률 (주력)"),
    line("체력", "최대 체력량, 체력 재생량"),
    line("지혜", "최대 마나량, 마나 재생량")
  ];

  const collection = {
    "초급": [
      line("크리티컬", "3순번"),
      line("마나재생", "3순번"),
      line("이동속도", "1순번"),
      line("PVE 데미지(+)", "4순번"),
      line("PVE 데미지(%)", "2순번"),
      line("지능", "2순번"),
      line("체력(+)", "0순번")
    ],
    "중급": [
      line("명중·회피·불저항·냉기저항·번개저항·속성저항", "도감 대상"),
      line("크리티컬", "2순번"),
      line("체력", "0순번"),
      line("마나", "0순번"),
      line("체력재생", "4순번"),
      line("마나재생", "4순번"),
      line("힘·민첩", "도감 대상"),
      line("지능", "1순번"),
      line("이동속도", "1순번"),
      line("아머", "4순번"),
      line("PVE 데미지(+)", "도감 대상"),
      line("PVE 데미지(%)", "1순번"),
      line("PVE 데미지 감소", "3순번"),
      line("PVP 데미지·PVP 데미지 감소", "도감 대상"),
      line("아이템 드랍·골드 드랍", "0순번"),
      line("보스 데미지·크리티컬 저항·크리티컬 데미지 감소", "도감 대상")
    ],
    "고급": [
      line("명중", "도감 대상"),
      line("회피", "도감 90% 도달 시 추천"),
      line("크리티컬", "3↑ / 4 / 5"),
      line("불저항·냉기저항·번개저항·속성저항", "도감 대상"),
      line("체력", "500↑"),
      line("마나", "100↑"),
      line("체력재생", "4↑ / 10"),
      line("마나재생", "2↑ / 5"),
      line("힘·민첩", "도감 80% 도달 시 추천"),
      line("지능", "4↑ / 8 / 11↑"),
      line("이동속도", "6%↑ / 10"),
      line("아머", "6↑ / 10 / 18↑"),
      line("PVE 데미지(+)", "15↑ → 25↑"),
      line("PVE 데미지(%)", "10%↑ → 20%↑"),
      line("PVE 데미지 감소", "도감 80% 도달 시 추천"),
      line("PVP 데미지·PVP 데미지 감소", "도감 80% 도달 시 추천"),
      line("아이템 드랍", "최소 20 / 권장 50 / 100↑"),
      line("골드 드랍", "최소 20 / 권장 50 / 100↑"),
      line("보스 데미지", "도감 90% 도달 시 추천"),
      line("크리티컬 저항", "도감 80% 도달 시 추천"),
      line("크리티컬 데미지 감소", "도감 90% 도달 시 추천")
    ]
  };

  const gems = [
    line("지능 + 여신의축복", "일정 시간 받는 데미지 감소"),
    line("지능 + 아드레날린", "몬스터 처치 시 데미지 증가"),
    line("지능 + 빈틈봉쇄", "피격 시 크리티컬 저항 증가")
  ];

  const skillPriority = [
    line("1순번", "프레임쇼크, 플레어, 화이어볼트, 화염폭풍"),
    line("2순번", "매디테이션, 카니발라이즈, 파괴의저주"),
    line("3순번", "텔레포트, 라이트힐링, 쉴드, 수호의기원, 치유의물결"),
    line("4순번", "결빙, 아이스프리즌, 스턴"),
    line("5순번", "중독, 해독, 아이스랜스, 카타르의불꽃")
  ];

  const beginnerSteps = [
    part(1, 3, "Lv.1~3 · 튜토리얼(1)", [
      line("보상", "4칸 가방 1개, +4 기본무기, +0 견습용장갑, 프레임쇼크 1"),
      line("선택 추천", "초보 마법사 패키지(500pt)")
    ], "quest"),

    part(3, 5, "Lv.3~5 · 우디마을 퀘스트", [
      line("사냥", "우디숲 쿠이·동그리 사냥"),
      line("NPC", "우디마을 시안"),
      line("보상", "4칸 가방 4개, 꼬마쿠이 펫 1개, +2 기본갑옷(전직업)")
    ], "quest"),

    part(4, 6, "Lv.4~6 · 기초육성(1)", [
      line("사냥", "우디숲 멧돼지"),
      line("필수 획득", "어금니고리")
    ]),

    part(6, 9, "Lv.6~9 · 버섯늪지 퀘스트", [
      line("사냥", "버섯늪지 몬스터"),
      line("필수 획득", "숙련마법사옷(옵션 무관)"),
      line("NPC", "버섯늪지 대장 뵈르샤"),
      line("보상", "프레임쇼크 2/3, 라이트힐링 1/2, 결빙 1, 중독 1, +5 정찰대지팡이, 스킬포인트 물약 3개, 모험가의 신발·벨트·망토·목걸이")
    ], "quest"),

    part(8, 10, "Lv.8~10 · 기초육성(2)", [
      line("사냥", "머쉬룸스포어"),
      line("획득", "체력의망토(독버섯돌이), 펑기스킨벨트(늪지꽃정령·동굴박쥐)")
    ]),

    part(10, 10, "Lv.10 · 길드 가입", [
      line("효과", "길드 소속 시 경험치 10% 증가(상시 적용)"),
      line("방법", "우측 상단 메뉴 → 길드 → 길드 가입"),
      line("대안", "우디마을 길드 관리인에게 길드 개설")
    ], "other"),

    part(10, 10, "Lv.10 · 스킬북 구매(1)", [
      line("장소", "해변 독서가 NPC"),
      line("구매", "아이스프리즌 1, 화이어볼트 1, 텔레포트 1")
    ], "skill"),

    part(10, 15, "Lv.10~15 · 해변 퀘스트", [
      line("사냥", "윙프림섬의 해변 몬스터"),
      line("스킬북 드롭", "쉴드 3, 라이트힐링 3, 화이어볼트 2"),
      line("안내", "스킬북 획득은 필수 아님. 육성 중 획득 시 배우기"),
      line("NPC", "해변 레딘/라디"),
      line("보상", "+3 산호지팡이")
    ], "quest"),

    part(10, 15, "Lv.10~15 · 콜린 퀘스트", [
      line("NPC", "버섯늪지 콜린"),
      line("보상", "천사의눈물(등대던전 입장 아이템)")
    ], "quest"),

    part(12, 16, "Lv.12~16 · 기초육성(3): 이노티아대륙", [
      line("사냥", "해지는노을숲 / 라노스평원 몬스터"),
      line("드롭", "카니발라이즈 3 (필수 아님)"),
      line("NPC", "달리아(시라스) / 호야(라노스)"),
      line("보상", "까막이반지")
    ]),

    part(14, 18, "Lv.14~18 · 등대던전 1F 퀘스트", [
      line("사냥", "등대던전 1F 몬스터"),
      line("필수 획득", "낡은여자반지(에드반트 반지 퀘스트)"),
      line("NPC 에드반트", "처녀의링 (필수)"),
      line("NPC 복수자 시로", "매드가이벨트 (필수)"),
      line("NPC 크리스티", "많은 경험치")
    ], "quest"),

    part(15, 15, "Lv.15 · 스킬북 구매(2)", [
      line("해변 라딘", "신속의장화(이속 3% 또는 5%)"),
      line("해변 독서가", "플레어 1, 매디테이션 1, 카니발라이즈 1")
    ], "skill"),

    part(17, 19, "Lv.17~19 · 등대던전 2F 퀘스트", [
      line("사냥", "등대던전 2F 몬스터"),
      line("필수 획득", "주시자의눈(지능 3+), 망자의수의(지능 1), 매디테이션 2"),
      line("NPC", "등대 2F 알라스"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(17, 19, "Lv.17~19 · 기초육성(4): 해적선", [
      line("사냥", "해적선 몬스터"),
      line("드롭", "카니발라이즈 2 (필수 아님)"),
      line("NPC", "해변 라타스(시라스) / 라프렐(라노스)"),
      line("보상", "녹슨열쇠(해적선 입장 아이템)")
    ]),

    part(20, 20, "Lv.20 · 폭전 참여 및 펜던트 교환", [
      line("참여", "폭풍의 전장 관리인, 짝수 시간 2시간마다"),
      line("보상", "참여 및 우승 진영: 경험치 20% 증가 / 1시간"),
      line("1전장", "Lv.20~26 / 용기의펜던트(거래불가)"),
      line("2전장", "Lv.26~33 / 용기의펜던트(거래불가)"),
      line("교환", "20개 → 견습투사의지팡이, 30개 → 숙련투사의지팡이"),
      line("추가 교환", "3개 → 전장 보급품 / 10개 → 6칸가방 / 60개 → 화이어볼트 3"),
      line("주의", "+6~7 지팡이와 화이어볼트 3을 확보한 뒤 전장 보급품 교환 권장")
    ], "other"),

    part(20, 20, "Lv.20 · 스킬북 구매(3)", [
      line("해변 독서가", "수호의기원 1, 파괴의저주 1")
    ], "skill"),

    part(20, 23, "Lv.20~23 · 이노티아대륙 퀘스트", [
      line("사냥", "카타르산맥(시라스) / 폐허가있는숲(라노스) 몬스터"),
      line("NPC", "가렘(시라스) / 바이갈(라노스)"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(21, 22, "Lv.21~22 · 등대던전 3F 퀘스트", [
      line("사냥", "등대던전 3F 몬스터"),
      line("필수 획득", "수호의기원 2, 파괴의저주 2, 망자의수의, 주시자의눈"),
      line("안내", "장비를 준비하지 못한 경우 꼭 획득"),
      line("NPC", "해변 시라스항해사 / 라노스항해사"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(22, 25, "Lv.22~25 · 등대던전 4F 퀘스트", [
      line("사냥", "등대던전 4F 몬스터"),
      line("필수 획득", "망자의장갑(핏빛사념체, 지능 2 이상)"),
      line("NPC", "해변 시라스항해사 / 라노스항해사"),
      line("보상", "많은 경험치, 등대던전 4F 무료 입장")
    ], "quest"),

    part(21, 26, "Lv.21~26 · 오염된 숲 퀘스트", [
      line("사냥", "오염된숲 몬스터"),
      line("NPC", "닐(시라스) / 시구르드(라노스)"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(23, 33, "Lv.23~33 · 기초육성(5): 사냥터", [
      line("Lv.23~28", "등대던전 5F / 하늘성채 고대의누각"),
      line("Lv.25~28", "하늘성채 서부 / 하늘성채 동부"),
      line("Lv.27~32", "이슬롯의 실험실"),
      line("Lv.29~33", "모래무덤골짜기(시라스) / 건조한초원(라노스)")
    ]),

    part(25, 25, "Lv.25 · 스킬북 구매(4)", [
      line("시라스/라노스성 독서가", "치유의물결 1, 스턴 1")
    ], "skill"),

    part(25, 28, "Lv.25~28 · 하늘성채 퀘스트", [
      line("사냥", "고대의누각 / 하늘성채 서부(시라스)·동부(라노스) 몬스터"),
      line("NPC", "우디마을 하늘문지기"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(28, 28, "Lv.28 · 크라운락 퀘스트(1)", [
      line("사냥", "이슬롯의 실험실 몬스터"),
      line("NPC", "우디마을 하늘문지기"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(30, 30, "Lv.30 · 스킬북 구매(5)", [
      line("시라스/라노스성 독서가", "화염폭풍 1, 침묵 1")
    ], "skill")
  ];

  const beginnerGear = [
    gear("10", "basic", "Lv.10 · 아이템 점검(1)", [
      line("스킬", "프레임쇼크 3, 결빙 2, 라이트힐링 2, 쉴드 2"),
      line("무기", "+5 정찰대지팡이"),
      line("모자", "자료 표시 없음"),
      line("갑옷", "+0 숙련마법사옷"),
      line("장갑", "+0 견습용장갑"),
      line("장화", "+0 모험가의신발"),
      line("망토", "모험가의망토 / 체력의망토"),
      line("목걸이", "모험가의목걸이"),
      line("반지", "어금니고리"),
      line("벨트", "모험가의벨트 / 펑기스킨벨트"),
      line("펫", "꼬마쿠이")
    ]),

    gear("14", "basic", "Lv.14~19 · 아이템 점검(2)", [
      line("스킬", "카니발라이즈 2/3, 매디테이션 2, 화이어볼트 2, 아이스프리즌 1, 텔레포트 1"),
      line("무기", "+3 산호지팡이 / +6~7 마법사지팡이"),
      line("모자", "+4 주시자의눈(지능 3 이상)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+0 견습용장갑 / +4 해적의장갑"),
      line("장화", "+4 신속의장화(이속 3% 또는 5%)"),
      line("망토", "체력의망토"),
      line("목걸이", "모험가의목걸이"),
      line("반지", "처녀의링(지능 2)"),
      line("벨트", "매드가이벨트"),
      line("펫", "꼬마쿠이")
    ]),

    gear("23", "basic", "Lv.23 · 아이템 점검(3)", [
      line("스킬", "파괴의저주 2, 수호의기원 2"),
      line("무기", "+6~7 견습투사의지팡이(초보술사의봉)"),
      line("모자", "+4 주시자의눈(지능 3 이상)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+0 견습용장갑 / +4 해적의장갑"),
      line("장화", "+4 신속의장화 / +4 야만의부츠"),
      line("망토", "불도저망토 / 투사의망토 / 의지의망토(0.2)"),
      line("목걸이", "레이븐목걸이 / 투사의목걸이 / 해적의목걸이"),
      line("반지", "처녀의링 / 투사의반지(마법)"),
      line("벨트", "매드가이벨트 / 투사의벨트 / 마력재생벨트"),
      line("펫", "신규 일반 펫 / 꼬마쿠이")
    ]),

    gear("27", "basic", "Lv.27 · 아이템 점검(4)", [
      line("스킬", "치유의물결 1, 스턴 2"),
      line("무기", "+6~7 숙련투사의지팡이(신비술사의봉)"),
      line("모자", "+4 주시자의눈(지능 3 이상)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+4 망자의장갑(지능 2 이상)"),
      line("장화", "+4 신속의장화 / +4 야만의부츠"),
      line("망토", "불도저망토 / 투사의망토 / 의지의망토(0.2)"),
      line("목걸이", "레이븐목걸이 / 투사의목걸이 / 해적의목걸이"),
      line("반지", "처녀의링 / 투사의반지(마법)"),
      line("벨트", "매드가이벨트 / 투사의벨트 / 마력재생벨트"),
      line("펫", "신규 일반 펫 / 꼬마쿠이")
    ]),

    gear("32", "basic", "Lv.32 · 아이템 점검(5)", [
      line("스킬", "화염폭풍 1, 침묵 1"),
      line("무기", "+7~8 숙련투사의지팡이(신비술사의봉)"),
      line("모자", "+4 주시자의눈(지능 3 이상)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+4 망자의장갑(지능 2 이상)"),
      line("장화", "+4 설원의저주장화(지능 2, 이속 6% 이상)"),
      line("망토", "불도저망토 / 투사의망토 / 의지의망토(0.2)"),
      line("목걸이", "레이븐목걸이 / 투사의목걸이 / 해적의목걸이"),
      line("반지", "처녀의링 / 투사의반지(마법) / 약속의반지(지능 3+)"),
      line("벨트", "매드가이벨트 / 투사의벨트 / 마력재생벨트"),
      line("펫", "신규 일반 펫 / 신규 레어 펫"),
      line("메모", "마법사옷은 44제 세계수잎로브 이전까지 가성비 장비")
    ])
  ];

  const beginnerGold = [
    line("윙프림섬의 해변 · 추천 ★~★★", "우파루파 — 집중 3, 슬램 2/출혈 3, 화이어볼트 2 외 장비"),
    line("등대던전 1F · 추천 ★", "실험용우파 — 강화가죽장갑, 전기부여 3 외 장비"),
    line("등대던전 2F · 추천 ★★★", "주시자의눈, 예리한롱소드, 망자의수의, 약화 2, 매디테이션 2"),
    line("해적선 · 추천 ★★★", "해적의장갑, 해적의반지, 예리한감각 2, 카니발라이즈 2 등"),
    line("이노티아대륙 · 추천 ★", "해지는노을숲 / 라노스평원 — 충격샷 2, 야성의돌진 2, 강인함 3, 카니발라이즈 3"),
    line("등대던전 3F · 추천 ★★", "카타나, 그레이트보우, 초보술사의봉, 본톤파, 주시자의눈, 파괴의저주 2"),
    line("등대던전 4F · 추천 ★★★", "바이킹검, 각궁, 주술사의봉, 폭풍채찍, 주시자의눈, 망자의장갑"),
    line("등대던전 5F · 추천 ★★", "글라디우스, 헌터보우, 신비술사의봉, 아이언피스트, 스턴 2"),
    line("오염된숲 · 추천 ★", "휩쓸기 3, 멀티샷 2 외 장비·재료"),
    line("이슬롯의 실험실 · 추천 ★★★", "샤콘그리브, 맹독의장화, 설원의저주장화, 혹한의장화 외 재료")
  ];

  const midSteps = [
    part(33, 39, "Lv.33~39 · 죽음의 늪 퀘스트", [
      line("사냥", "죽음의 늪 몬스터"),
      line("NPC", "이프릴"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(36, 39, "Lv.36~39 · 모르포시즈 뿌리 퀘스트", [
      line("사냥", "모르포시즈 뿌리 몬스터"),
      line("NPC", "길잡이 애셔"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(40, 44, "Lv.40~44 · 숲의 미궁 퀘스트", [
      line("사냥", "숲의 미궁 몬스터"),
      line("NPC", "안드리우스(시라스) / 쿠스타스(라노스)"),
      line("보상", "많은 경험치, 대장의추천장")
    ], "quest"),

    part(33, 39, "Lv.33~39 · 기초육성(6)", [
      line("Lv.29~33", "모래무덤골짜기 / 건조한초원"),
      line("Lv.32~39", "죽음의 늪"),
      line("Lv.32~36", "톰무더기 요새"),
      line("Lv.33~36", "알수없는 미로"),
      line("Lv.36~41", "뜨거운 모래사막"),
      line("Lv.36~39", "모르포시즈 뿌리"),
      line("Lv.30~47", "헌팅그라운드")
    ]),

    part(40, 44, "Lv.40~44 · 기초육성(7)", [
      line("Lv.39~43", "타락한 신전"),
      line("Lv.40~44", "숲의 미궁"),
      line("Lv.39~44", "이슬롯의 신전"),
      line("Lv.30~47", "헌팅그라운드")
    ]),

    part(40, 55, "Lv.40~55 · 길드 던전", [
      line("필수", "저지의관 리에티 클리어"),
      line("목표", "길드코인 획득 → 에피파니 구매 준비")
    ], "other"),

    part(1, 55, "Lv.1~55 · 도감 완성", [
      line("재료 도감", "재료 아이템 도감 작업"),
      line("장비 도감", "장비 아이템 도감 작업"),
      line("코스튬 도감", "코스튬 아이템 도감 작업")
    ], "other")
  ];

  const midGear = [
    gear("30", "normal", "Lv.30~37 · 일반 장비 (5-1)", [
      line("스킬", "플레어 2/3, 화이어볼트 2/3, 화염폭풍 2 (필수)"),
      line("무기", "+8 신비술사의봉(숙련투사의지팡이) / +7 고대의봉"),
      line("보조", "없음"),
      line("모자", "+4 주시자의눈(지능 5~6) / +4 현자의눈(지능 6~7)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+4 현인의장갑(지능 5)"),
      line("장화", "+4 설원의저주장화(지능 2/이속 6% 이상)"),
      line("망토", "지능 1 의지의망토(1.0) / 반죽음의망토"),
      line("목걸이", "지능 1 레이븐목걸이 / 해적의목걸이 / 다크스컬"),
      line("반지", "지능 1 약속의반지(지능 3)"),
      line("벨트", "지능 1 마력재생벨트 / 강화가죽벨트 / 신념의벨트"),
      line("펫", "지능 3 신규 일반 펫 / 신규 레어 펫")
    ]),

    gear("30", "capital", "Lv.30~37 · 자본 장비 (5-2)", [
      line("스킬", "프레임쇼크 4 / 플레어 2/3 / 화이어볼트 2/3 / 화염폭풍 2 (필수)"),
      line("무기", "+7~8 고대의봉"),
      line("보조", "없음"),
      line("모자", "+5 주시자의눈(지능 6~7) / +4 현자의눈(지능 6~7)"),
      line("갑옷", "+5 망자의수의(지능 1)"),
      line("장갑", "+5 현인의장갑(지능 5~6)"),
      line("장화", "+5 설원의저주장화(지능 3/이속 7% 이상)"),
      line("망토", "지능 2~3 반죽음의망토 / 죽음의망토"),
      line("목걸이", "지능 2~3 다크스컬 / 대자연 / 황금목걸이"),
      line("벨트", "지능 2~3 마력재생벨트 / 강화가죽벨트 / 신념의벨트"),
      line("펫", "지능 3 신규 레어 펫"),
      line("안내", "제공된 사진에서 일부 행이 잘려 있어 확인된 항목만 기재")
    ]),

    gear("38", "normal", "Lv.38~43 · 일반 장비 (6-1)", [
      line("스킬", "지옥의불길 1/2, 무효화 1 (필수) / 침묵 2 / 세라의축복 2"),
      line("무기", "+7 고요의지팡이"),
      line("보조", "없음"),
      line("모자", "+4 고요의모자(지능 7) → +4 학자의모자(지능 9)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+4 수도사의장갑(지능 4) / +4 현인의장갑(지능 5)"),
      line("장화", "+4 설원의저주장화(지능 2/이속 6% 이상)"),
      line("망토", "지능 1~2 의지의망토(1.0) / 반죽음의망토"),
      line("목걸이", "지능 1~2 레이븐목걸이 / 해적의목걸이 / 다크스컬"),
      line("반지", "지능 1~2 약속의반지(지능 3)"),
      line("벨트", "지능 1~2 건조한마력의벨트"),
      line("펫", "지능 3 신규 일반 펫 / 신규 레어 펫")
    ]),

    gear("38", "capital", "Lv.38~43 · 자본 장비 (6-2)", [
      line("스킬", "화이어볼트 4, 지옥의불길 1/2, 무효화 1/2 (필수), 카타르의불꽃 4 (선택)"),
      line("무기", "+8 고요의지팡이 / +8 고대의봉"),
      line("보조", "없음"),
      line("모자", "+4 고요의모자(지능 7) → +5 학자의모자(지능 9~10)"),
      line("갑옷", "+4 망자의수의(지능 1)"),
      line("장갑", "+5~6 현인의장갑(지능 5~6)"),
      line("장화", "+5~6 설원의저주장화(지능 3/이속 7% 이상)"),
      line("망토", "지능 2~3 죽음의망토 / 반죽음의망토"),
      line("목걸이", "지능 2~3 대자연 / 황금목걸이 / 다크스컬"),
      line("반지", "지능 2~3 생명소생의반지(지능 5~6)"),
      line("벨트", "지능 2~3 건조한마력의벨트"),
      line("펫", "지능 3 신규 레어 펫")
    ])
  ];

  const highSteps = [
    part(46, 49, "Lv.46~49 · 모르포시즈 정원 퀘스트", [
      line("사냥", "모르포시즈 정원 몬스터"),
      line("NPC", "하이젠"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(46, 49, "Lv.46~49 · 모르포시즈 금서고 퀘스트", [
      line("사냥", "모르포시즈 금서고 몬스터"),
      line("NPC", "관리자 마셜"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(44, 53, "Lv.44~53 · 기초육성(7)", [
      line("Lv.43~47", "루나프 / 비탄의 제단"),
      line("Lv.47~49", "모르포시즈 정원"),
      line("Lv.49~53", "모르포시즈 금서고")
    ]),

    part(48, 55, "Lv.48~55 · 최종육성", [
      line("Lv.48~55", "헌팅그라운드")
    ]),

    part(40, 55, "Lv.40~55 · 길드 던전", [
      line("필수", "저지의관 리에티 클리어"),
      line("목표", "길드코인 획득 → 에피파니 구매 준비")
    ], "other"),

    part(1, 55, "Lv.1~55 · 도감 완성", [
      line("재료", "재료 아이템 도감 작업"),
      line("장비", "장비 아이템 도감 작업"),
      line("코스튬", "코스튬 아이템 도감 작업")
    ], "other")
  ];

  const highGear = [
    gear("44", "normal", "Lv.44~53 · 일반 장비 (7-1)", [
      line("스킬", "에피파니"),
      line("무기", "+7 번개맞은나무 / +7 파괴의홀 / +7 순수의개화 → +8 고대의봉 / +8 고요의지팡이 → +8 번개맞은나무 / +8 파괴의홀 → +9 고요의지팡이 / +8 순수의개화"),
      line("보조", "없음"),
      line("모자", "+4 학자의모자 / +4 심문관의모자(지능 9)"),
      line("갑옷", "+4 세계수잎로브(지능 2)"),
      line("장갑", "+4~5 현인의장갑 / +4 정화의장갑(지능 5~6)"),
      line("장화", "+4~5 설원의저주장화(3/7+) → +4 끈질긴기억의단화(3/10+)"),
      line("망토", "지능 1~2 의지의망토(1.0) / 반죽음의망토"),
      line("목걸이", "지능 1~2 다크스컬 / 대자연 / 황금목걸이"),
      line("반지", "지능 1~2 생명소생의반지(지능 5~6) / 약속의반지(지능 3~4)"),
      line("벨트", "지능 1~2 건조한마력의벨트"),
      line("펫", "지능 3 신규 레어 펫")
    ]),

    gear("44", "capital", "Lv.44~53 · 자본 장비 (7-2)", [
      line("스킬", "에피파니"),
      line("무기", "+8 번개맞은나무 / +8 파괴의홀 → +9 고요의지팡이 / +8 순수의개화 → +8 소울이터"),
      line("보조", "없음"),
      line("모자", "+4~5 학자의모자 / +4~5 심문관의모자(지능 9~10)"),
      line("갑옷", "+4~5 세계수잎로브(지능 2, 마나)"),
      line("장갑", "+4~5 현인의장갑 / +4~5 정화의장갑(지능 5~6) → +4~5 환영술사의장갑(지능 6)"),
      line("장화", "+4~6 설원의저주장화(3/7+) / +4~5 끈질긴기억의단화(3/10+) → +4~5 빛새김의신발(3/11+)"),
      line("망토", "지능 2~3 죽음의망토"),
      line("목걸이", "지능 2~3 대자연 / 황금목걸이"),
      line("반지", "지능 2~3 생명소생의반지(지능 5~6) / 전지의오만(지능 6~7)"),
      line("벨트", "지능 2~3 건조한마력의벨트"),
      line("펫", "지능 3 신규 레어 펫")
    ]),

    gear("48", "final", "Lv.48~55 · 종결 장비 (8)", [
      line("스킬", "에피파니 3"),
      line("무기", "+9 고대의봉 / +8 파괴의홀 → +9 고요의지팡이 / +8 순수의개화 → +8 소울이터 / +8 시마티 → +9 번개맞은나무 / +9 파괴의홀 / +9 순수의개화 → +9 소울이터 → +9 시마티"),
      line("보조", "없음"),
      line("모자", "+5~6 학자의모자 / +5~6 심문관의모자(지능 10~11) → +6 마음의눈(지능 10~12)"),
      line("갑옷", "+6 기록가의수의 / +6 세계수잎로브(지능 3)"),
      line("장갑", "+6 환영술사의장갑(지능 6~7) → +6 파워글러브 / +6 조마의손아귀"),
      line("장화", "+6 빛새김의신발(3/12+)"),
      line("망토", "지능 3 열광의망토"),
      line("목걸이", "지능 3 로자리오 / 대자연"),
      line("반지", "지능 3 생명소생의반지(지능 5~6) / 전지의오만(지능 6~7) → 끝없는전지의오만(지능 7~8)"),
      line("벨트", "지능 3 응축된마나의벨트(지능 1+) / 건조한마력의벨트"),
      line("펫", "지능 3 신규 레어 펫")
    ])
  ];

  const allGear = {
    "초급": beginnerGear,
    "중급": midGear,
    "고급": highGear
  };

  const allSteps = {
    "초급": beginnerSteps,
    "중급": midSteps,
    "고급": highSteps
  };

  const tabs = [
    ["all", "전체"],
    ["growth", "육성 순서"],
    ["equipment", "추천 장비"],
    ["hunting", "사냥터"],
    ["quests", "퀘스트"],
    ["skills", "스킬"],
    ["collection", "도감"],
    ["gems", "보석"],
    ["gold", "골드벌이"],
    ["other", "추가 정보"]
  ];

  function rowsHTML(rows) {
    return `<dl class="mg-rows">${rows.map(r => `
      <div class="mg-rows-item">
        <dt>${E(r.label)}</dt>
        <dd>${E(r.value)}</dd>
      </div>
    `).join("")}</dl>`;
  }

  function card(title, rows, marker = "") {
    return `
      <section class="mg-card">
        <h3>${marker}${E(title)}</h3>
        ${rowsHTML(rows)}
      </section>
    `;
  }

  function section(title, html) {
    return `
      <section class="mg-section">
        <h2>${E(title)}</h2>
        ${html || '<div class="mg-empty">📚 사진에서 확인된 자료가 아직 없습니다.</div>'}
      </section>
    `;
  }

  function stepsHTML(tier, mode, level) {
    const filtered = allSteps[tier].filter(s => {
      if (mode === "growth") {
        return s.kind === "growth" || s.kind === "other";
      }
      if (mode === "quests") return s.kind === "quest";
      if (mode === "hunting") return s.kind === "growth";
      if (mode === "skills") return s.kind === "skill";
      if (mode === "other") return s.kind === "other";
      return true;
    }).filter(s =>
      !level || (s.min <= Number(level) && s.max >= Number(level))
    );

    return filtered.map(s => card(
      s.title,
      s.rows,
      s.kind === "quest" ? "📜 " :
      s.kind === "skill" ? "📚 " :
      s.kind === "other" ? "✨ " : "🗺️ "
    )).join("");
  }

  function gearHTML(tier, level, budget) {
    const filtered = allGear[tier].filter(g =>
      (!level || g.level === level) &&
      (!budget || g.type === budget)
    );

    return filtered.map(g =>
      card(g.title, g.rows, "🛡️ ")
    ).join("");
  }

  window.renderIMOMage = function(target, startTier = "초급") {
    const root = typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!root) return false;

    let tier =
      typeof startTier === "string" &&
      ["초급", "중급", "고급"].includes(startTier)
        ? startTier
        : "초급";

    let cat = "all";

    let beginnerLevel =
      typeof startTier === "number" &&
      startTier >= 1 && startTier <= 33
        ? String(startTier)
        : "";

    let selectedGearLevel = "";
    let selectedBudget = "";

    root.innerHTML = `
      <div class="mg-app">
        <style>
          .mg-app {
            background:#111a2a;
            color:#ecf3ff;
            border:1px solid #33435d;
            border-radius:14px;
            padding:12px;
            font-family:system-ui,sans-serif;
            line-height:1.65;
            font-size:14px;
          }

          .mg-app * { box-sizing:border-box; }
          .mg-app [hidden] { display:none!important; }

          .mg-hero {
            text-align:center;
            padding:13px 5px 6px;
          }

          .mg-hero strong {
            display:block;
            color:#f8d185;
            font-size:23px;
          }

          .mg-hero small { color:#afbdd0; }

          .mg-tabs {
            display:flex;
            gap:6px;
            overflow-x:auto;
            padding:10px 0;
          }

          .mg-tabs button {
            border:1px solid #53647e;
            background:#24364e;
            color:white;
            border-radius:9px;
            padding:8px 11px;
            white-space:nowrap;
            font-size:13px;
            cursor:pointer;
          }

          .mg-tabs button.on {
            background:#b18a3f;
            border-color:#f0c87f;
            color:#101a2b;
            font-weight:700;
          }

          .mg-filter {
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
            gap:8px;
            background:#19283d;
            padding:12px;
            border-radius:10px;
            margin:10px 0;
          }

          .mg-filter label {
            color:#d4e0f3;
            font-size:13px;
            display:grid;
            gap:5px;
          }

          .mg-filter select {
            background:#293d58;
            color:white;
            border:1px solid #607491;
            border-radius:7px;
            padding:10px;
            min-width:0;
          }

          .mg-section { margin:18px 0; }

          .mg-section h2 {
            font-size:17px;
            text-align:left;
            color:#efc978;
            border-left:3px solid #efc978;
            padding-left:9px;
            margin:8px 0;
          }

          .mg-card {
            background:#1c2b41;
            border:1px solid #374d69;
            border-radius:11px;
            padding:11px 12px;
            margin:9px 0;
            overflow-wrap:anywhere;
          }

          .mg-card h3 {
            font-size:15px;
            line-height:1.45;
            color:#9dd9f8;
            margin:0 0 10px;
          }

          .mg-rows { margin:0; }

          .mg-rows-item {
            display:flex;
            gap:10px;
            padding:6px 0;
            border-top:1px solid #2d4058;
          }

          .mg-rows-item dt {
            flex:0 0 73px;
            color:#edc985;
            font-weight:700;
          }

          .mg-rows-item dd {
            flex:1;
            margin:0;
            white-space:pre-wrap;
            overflow-wrap:anywhere;
          }

          .mg-empty {
            color:#b6c4d6;
            background:#1a293c;
            padding:12px;
            border-radius:9px;
          }

          .mg-info {
            font-size:12px;
            color:#abbdd3;
            margin-top:18px;
            border-top:1px solid #39485a;
            padding-top:11px;
          }

          @media(max-width:370px) {
            .mg-rows-item { display:block; }
            .mg-rows-item dt { margin-bottom:2px; }
          }
        </style>

        <div class="mg-hero">
          <strong>🧙‍♂️ 마법사 통합 공략</strong>
          <small>IMO.ONYX · Lv.1~55</small>
        </div>

        <div class="mg-tabs" data-mg-tiers></div>
        <div class="mg-tabs" data-mg-tabs></div>
        <div class="mg-filter" data-mg-filter hidden></div>
        <div data-mg-content></div>

        <p class="mg-info">
          📌 제공된 공략 사진 기준.
          장비 교체 순서는 원문을 참고했으며,
          게임 업데이트에 따라 달라질 수 있습니다.
        </p>
      </div>
    `;

    const tierBar = root.querySelector("[data-mg-tiers]");
    const catBar = root.querySelector("[data-mg-tabs]");
    const filterBar = root.querySelector("[data-mg-filter]");
    const content = root.querySelector("[data-mg-content]");

    function paint() {
      tierBar.innerHTML = ["초급", "중급", "고급"].map(t => `
        <button type="button" data-tier="${t}"
          class="${t === tier ? "on" : ""}">
          ${t}
        </button>
      `).join("");

      catBar.innerHTML = tabs.map(([id, label]) => `
        <button type="button" data-cat="${id}"
          class="${cat === id ? "on" : ""}">
          ${E(label)}
        </button>
      `).join("");

      filterBar.hidden = !(
        cat === "equipment" ||
        (tier === "초급" &&
          ["growth", "hunting", "quests", "skills", "other"].includes(cat))
      );

      const ranges =
        tier === "초급"
          ? ["10", "14", "23", "27", "32"].map(l =>
              [l, "Lv." + l + (l === "14" ? "~19" : "")])
          : tier === "중급"
            ? [["30", "Lv.30~37"], ["38", "Lv.38~43"]]
            : [["44", "Lv.44~53"], ["48", "Lv.48~55"]];

      if (cat === "equipment") {
        const budgetOptions =
          tier === "초급"
            ? []
            : [
                ["normal", "일반 장비"],
                ["capital", "자본 장비"],
                ...(tier === "고급"
                  ? [["final", "종결 장비"]]
                  : [])
              ];

        filterBar.innerHTML = `
          <label>
            레벨 구간
            <select data-filter="gearLevel">
              <option value="">전체 구간</option>
              ${ranges.map(([v, label]) => `
                <option value="${v}"
                  ${selectedGearLevel === v ? "selected" : ""}>
                  ${label}
                </option>
              `).join("")}
            </select>
          </label>

          ${budgetOptions.length ? `
            <label>
              장비 유형
              <select data-filter="budget">
                <option value="">전체 유형</option>
                ${budgetOptions.map(([v, label]) => `
                  <option value="${v}"
                    ${selectedBudget === v ? "selected" : ""}>
                    ${label}
                  </option>
                `).join("")}
              </select>
            </label>
          ` : ""}
        `;
      } else if (tier === "초급") {
        filterBar.innerHTML = `
          <label>
            확인할 레벨
            <select data-filter="beginnerLevel">
              <option value="">전체 레벨 보기</option>
              ${Array.from({ length:33 }, (_, i) => `
                <option value="${i + 1}"
                  ${beginnerLevel === String(i + 1)
                    ? "selected" : ""}>
                  Lv.${i + 1}
                </option>
              `).join("")}
            </select>
          </label>
        `;
      } else {
        filterBar.innerHTML = "";
      }

      let html = "";

      if (tier === "초급" && (cat === "all" || cat === "stats")) {
        html += section(
          "📊 생성 능력치",
          card("마법사 능력치 선택과 효과", origin)
        );
      }

      if (cat === "all" || cat === "growth") {
        html += section(
          "🌱 레벨별 육성 순서",
          stepsHTML(
            tier,
            "growth",
            cat === "all" ? "" : beginnerLevel
          )
        );
      }

      if (cat === "all" || cat === "equipment") {
        html += section(
          "🛡️ 레벨별 추천 장비",
          gearHTML(
            tier,
            cat === "equipment" ? selectedGearLevel : "",
            cat === "equipment" ? selectedBudget : ""
          )
        );
      }

      if (cat === "all" || cat === "quests") {
        html += section(
          "📜 퀘스트·NPC·보상",
          stepsHTML(
            tier,
            "quests",
            cat === "all" ? "" : beginnerLevel
          )
        );
      }

      if (cat === "all" || cat === "hunting") {
        html += section(
          "🗺️ 주요 사냥터",
          stepsHTML(
            tier,
            "hunting",
            cat === "all" ? "" : beginnerLevel
          )
        );
      }

      if (cat === "all" || cat === "skills") {
        let skillHtml =
          tier === "초급"
            ? card("스킬포인트가 부족할 때 우선순위", skillPriority)
            : "";

        if (tier === "초급") {
          skillHtml += stepsHTML(
            tier,
            "skills",
            cat === "all" ? "" : beginnerLevel
          );
        }

        if (tier === "고급") {
          skillHtml += card("고급 필수 스킬", [
            line("Lv.44~53", "에피파니"),
            line("Lv.48~55", "에피파니 3")
          ]);
        }

        if (tier === "중급") {
          skillHtml += card("중급 장비 점검에 기재된 스킬", [
            line(
              "Lv.30~37",
              "플레어 2/3, 화이어볼트 2/3, 화염폭풍 2(필수), 프레임쇼크 4(자본)"
            ),
            line(
              "Lv.38~43",
              "지옥의불길 1/2, 무효화 1/2(필수), 침묵 2, 세라의축복 2, 화이어볼트 4(자본)"
            )
          ]);
        }

        html += section("📚 주요 스킬", skillHtml);
      }

      if (cat === "all" || cat === "collection") {
        html += section(
          "📖 도감 우선순위",
          card(tier + " 도감", collection[tier])
        );
      }

      if (cat === "all" || cat === "gems") {
        html += section(
          "💎 추천 보석",
          card("마법사 지능 보석", gems)
        );
      }

      if (cat === "all" || cat === "gold") {
        html += section(
          "💰 골드벌이",
          tier === "초급"
            ? card("초급 골드벌이·드롭 아이템", beginnerGold)
            : ""
        );
      }

      if (cat === "all" || cat === "other") {
        html += section(
          "✨ 길드·폭전·도감 등 추가 정보",
          stepsHTML(
            tier,
            "other",
            cat === "all" ? "" : beginnerLevel
          )
        );
      }

      content.innerHTML = html;

      tierBar.querySelectorAll("[data-tier]").forEach(btn => {
        btn.addEventListener("click", () => {
          tier = btn.dataset.tier;
          cat = "all";
          beginnerLevel = "";
          selectedGearLevel = "";
          selectedBudget = "";
          paint();
        });
      });

      catBar.querySelectorAll("[data-cat]").forEach(btn => {
        btn.addEventListener("click", () => {
          cat = btn.dataset.cat;
          paint();
        });
      });

      filterBar.querySelectorAll("[data-filter]").forEach(sel => {
        sel.addEventListener("change", () => {
          if (sel.dataset.filter === "beginnerLevel") {
            beginnerLevel = sel.value;
          }
          if (sel.dataset.filter === "gearLevel") {
            selectedGearLevel = sel.value;
          }
          if (sel.dataset.filter === "budget") {
            selectedBudget = sel.value;
          }
          paint();
        });
      });
    }

    paint();
    return true;
  };

  // 기존 직업 선택 구조 유지
  // 마법사 메뉴만 새 통합 공략으로 연결
  function installIntoExistingApp() {

    function showMagePage(level) {
      const area =
        document.querySelector("main.container") ||
        document.querySelector(".container") ||
        document.querySelector("main");

      if (!area) return false;

      const mount = document.createElement("div");
      mount.id = "imo-mage-mount";
      area.replaceChildren(mount);

      window.renderIMOMage(mount, level);

      const back = document.createElement("button");
      back.type = "button";
      back.className = "btn";
      back.textContent = "← 마법사 단계 선택으로";

      back.style.cssText = `
        display:block;
        width:100%;
        margin:18px 0;
        padding:13px;
        background:#d8b66a;
        color:#111722;
        border:0;
        border-radius:11px;
        font-weight:bold;
      `;

      back.addEventListener("click", () => {
        if (typeof window.showLevels === "function") {
          window.showLevels("마법사");
        } else if (typeof window.showJobs === "function") {
          window.showJobs();
        } else {
          history.back();
        }
      });

      area.append(back);

      if (typeof window.scrollTo === "function") {
        window.scrollTo(0, 0);
      }

      return true;
    }

    if (
      typeof window.showGuide === "function" &&
      !window.showGuide.__mgWrapped
    ) {
      const old = window.showGuide;

      const wrapped = function(job, level) {
        if (job === "마법사") {
          return showMagePage(level);
        }
        return old.apply(this, arguments);
      };

      wrapped.__mgWrapped = true;
      window.showGuide = wrapped;
    }

    if (
      typeof window.showJobDetail === "function" &&
      !window.showJobDetail.__mgWrapped
    ) {
      const old = window.showJobDetail;

      const wrapped = function(job, level) {
        if (job === "마법사") {
          return showMagePage(level);
        }
        return old.apply(this, arguments);
      };

      wrapped.__mgWrapped = true;
      window.showJobDetail = wrapped;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      installIntoExistingApp
    );
  } else {
    installIntoExistingApp();
  }
})();
