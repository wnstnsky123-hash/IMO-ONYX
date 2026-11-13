/* IMO.ONYX | 무도가 초급 공략
 * 파일명: breaker-guide.js
 * 설치: Index.html의 </body> 바로 위에 <script src="breaker-guide.js"></script>
 * 기준: 사용자가 보내준 무도가 초급 공략 캡처
 * 현재 버전: 초급만 구현 / 중급·고급은 추후 추가
 */
(function () {
  "use strict";

  const E = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));

  const line = (label, value) => ({ label, value });
  const part = (min, max, title, rows, kind = "growth") => ({ min, max, title, rows, kind });
  const gear = (level, type, title, rows) => ({ level, type, title, rows });
  const gold = (title, rows) => ({ title, rows });

  /* -------------------------
   * 기본 정보
   * ------------------------- */
  const origin = [
    line("추천", "체력 16 / 힘 15 / 지능 15"),
    line("대안 1", "체력 13 / 힘 18 / 지능 15"),
    line("대안 2", "체력 13 / 힘 15 / 지능 18"),
    line("힘", "근접 데미지 (주력)"),
    line("민첩", "원거리 데미지, 명중, 크리티컬 및 크리회피"),
    line("지능", "마법 데미지, 마법저항률"),
    line("체력", "최대 체력량, 체력 재생량 증가"),
    line("지혜", "최대 마나량, 마나 재생량 증가")
  ];

  const collection = {
    "초급": [
      line("명중", "1순번"),
      line("크리티컬", "3순번"),
      line("이동속도", "2순번"),
      line("PVE 데미지(+)", "2순번"),
      line("PVE 데미지(%)", "3순번"),
      line("힘, 아머", "4순번"),
      line("지능", "5순번"),
      line("체력(+)", "0순번")
    ],
    "중급": [],
    "고급": []
  };

  const gems = {
    "초급": [
      line("힘 + 체력", "여신의축복 : 일정 시간 받는 데미지 감소"),
      line("힘 + 체력", "아드레날린 : 몬스터 처치 시 데미지 증가"),
      line("힘 + 체력", "빈틈봉쇄 : 피격 시 크리 저항 증가")
    ],
    "중급": [],
    "고급": []
  };

  /* -------------------------
   * 초급 육성 / 퀘스트 / 스킬 / 추가정보
   * ------------------------- */
  const beginnerSteps = [
    part(1, 3, "Lv.1~3 · 튜토리얼(1)", [
      line("보상", "4칸 가방 1개, +4 기본무기, +0 견습용장갑, 연격 1"),
      line("추천", "초보 무도가 패키지 (500pt)")
    ], "quest"),

    part(3, 5, "Lv.3~5 · 우디마을 퀘스트", [
      line("사냥", "우디숲 쿠이, 동그리 사냥"),
      line("NPC", "우디마을 시안"),
      line("보상", "4칸 가방 4개, 꼬마쿠이 펫 1개, +2 기본갑옷(전직업)")
    ], "quest"),

    part(4, 6, "Lv.4~6 · 기초육성(1)", [
      line("사냥", "우디숲 멧돼지 사냥"),
      line("필수 획득", "어금니고리")
    ], "growth"),

    part(6, 9, "Lv.6~9 · 버섯늪지 퀘스트", [
      line("사냥", "버섯늪지 몬스터 사냥"),
      line("필수 획득", "가죽도복 (옵션 상관 X)"),
      line("NPC", "버섯늪지 대장 뵈르샤"),
      line("보상", "연격 2/3, 도약 1/2, 냉기부여 2, 무도의1격 1, +5 정찰대너클, +3 목호신부, 모험가의신발/벨트/망토/목걸이")
    ], "quest"),

    part(8, 10, "Lv.8~10 · 기초육성(2)", [
      line("사냥", "머쉬룸스포어 몬스터 사냥"),
      line("득템", "체력의망토(독버섯돌이), 펑기스킨벨트(늪지꽃정령, 동굴박쥐)")
    ], "growth"),

    part(10, 10, "Lv.10 · 길드가입", [
      line("효과", "길드 소속 시 경험치 10% 증가 (상시 적용)"),
      line("길드 개설", "우디마을 길드 관리인 / 1만 골드"),
      line("길드 가입", "우측 상단 메뉴 > 길드 > 길드가입"),
      line("비고", "2개의 선택지 중 1개 선택하여 가입")
    ], "other"),

    part(10, 10, "Lv.10 · 프리미엄멤버 추천", [
      line("추천", "프리미엄멤버 (200pt)"),
      line("이유", "암거래중개인을 이용해 거래 가능 / 육성 중 아이템 판매 및 구매를 원활하게 할 수 있음")
    ], "other"),

    part(10, 10, "Lv.10 · 스킬북 구매(1)", [
      line("NPC", "해변 독서가"),
      line("구매", "전기부여 1")
    ], "skill"),

    part(10, 15, "Lv.10~15 · 해변 퀘스트", [
      line("사냥", "윙프림섬의 해변 몬스터 사냥"),
      line("필수 획득", "+0 산호호신부"),
      line("NPC", "해변 레딘 / 라딘"),
      line("보상", "+3 산호너클")
    ], "quest"),

    part(10, 15, "Lv.10~15 · 콜린 퀘스트", [
      line("NPC", "버섯늪지 콜린"),
      line("보상", "천사의눈물 (등대던전 입장 아이템)")
    ], "quest"),

    part(12, 16, "Lv.12~16 · 기초육성(3) : 이노티아대륙", [
      line("사냥", "해지는노을숲(시), 라노스평원(라) 몬스터 사냥"),
      line("필수 획득", "전기부여 2"),
      line("NPC", "달리아(시), 호야(라)"),
      line("보상", "까막이반지")
    ], "growth"),

    part(14, 18, "Lv.14~18 · 등대던전1F 퀘스트", [
      line("사냥", "등대던전1F 몬스터 사냥"),
      line("필수 획득", "강화가죽장갑(실험용우파) 명중2 이상, 원소순환2"),
      line("NPC", "등대1F 복수자 시로"),
      line("보상", "매드가이벨트 (필수)")
    ], "quest"),

    part(14, 18, "Lv.14~18 · 등대던전1F 경험치 퀘스트", [
      line("NPC", "등대1F 크리스티"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(15, 15, "Lv.15 · 스킬북 구매(2)", [
      line("해변 독서가", "원소순환 1 (구매)")
    ], "skill"),

    part(15, 15, "Lv.15 · 아이템 제작(해변)", [
      line("해변 라딘", "신속의장화 (이속 3% 또는 5%)"),
      line("해변 사라", "산호반지"),
      line("레딘", "강화우파모자(크리1~3), 강화우파도복(크리1~2)")
    ], "other"),

    part(17, 19, "Lv.17~19 · 기초육성(4) : 해적선", [
      line("사냥", "해적선 몬스터 사냥"),
      line("필수 획득", "무도의1격 2"),
      line("NPC", "해변 라타스(시) / 라프릴(라)"),
      line("보상", "녹슨열쇠 (해적선 입장 아이템)")
    ], "growth"),

    part(17, 19, "Lv.17~19 · 등대던전2F 퀘스트", [
      line("사냥", "등대던전2F 몬스터 사냥"),
      line("획득", "빛나는너클, 산호도복"),
      line("NPC", "등대2F 알라스"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(20, 20, "Lv.20 · 폭풍의 전장 참여 필수", [
      line("NPC", "폭풍의 전장 관리인"),
      line("참여 보상", "참여 및 우승진영 보상 : 경험치 20% 증가 / 1시간"),
      line("1전장", "Lv.20~26 : 용기의팬던트 / 거래불가"),
      line("2전장", "Lv.26~33 : 용기의팬던트 / 거래불가"),
      line("3전장", "Lv.34~39 : 명예의팬던트 / 거래가능"),
      line("4전장", "Lv.40~46 : 명예의팬던트 / 거래가능"),
      line("5전장", "Lv.47 이상 : 명예의팬던트 / 거래가능")
    ], "other"),

    part(20, 20, "Lv.20 · 폭전 팬던트 교환", [
      line("20개", "견습투사의너클 (Lv.20 본톤파 등급)"),
      line("30개", "숙련투사의너클 (Lv.27 아이언피스트 등급)"),
      line("3개", "전장 보급품"),
      line("10개", "큰가방 (6칸)"),
      line("60개", "도약 3"),
      line("추가", "전장 보급품 교환 시 2% 확률로 투사의망토 / 벨트 / 목걸이 / 반지 획득 가능"),
      line("중요", "너클을 먼저 확보한 후 +6 또는 +7이 되었을 때 전장보급품 교환 추천")
    ], "other"),

    part(20, 20, "Lv.20 · 스킬북 구매(3)", [
      line("NPC", "해변 독서가"),
      line("구매", "백하의권 1, 원소방출 1")
    ], "skill"),

    part(20, 23, "Lv.20~23 · 이노티아대륙 퀘스트", [
      line("사냥", "카타르산맥(시), 폐허가있는숲(라) 몬스터 사냥"),
      line("NPC", "가렘(시) / 바이갈(라)"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(21, 22, "Lv.21~22 · 등대던전3F 퀘스트", [
      line("사냥", "등대던전3F 몬스터 사냥"),
      line("필수 획득", "백하의권 2"),
      line("NPC", "해변 시라스항해사(시) / 라노스항해사(라)"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(22, 25, "Lv.22~25 · 등대던전4F 퀘스트", [
      line("사냥", "등대던전4F 몬스터 사냥"),
      line("필수 획득", "원소장갑(흡혈꽃) 명중2, 힘2 이상"),
      line("NPC", "해변 시라스항해사(시) / 라노스항해사(라)"),
      line("보상", "많은 경험치, 등대던전4F 무료입장")
    ], "quest"),

    part(21, 26, "Lv.21~26 · 오염된숲 퀘스트", [
      line("사냥", "오염된숲 몬스터 사냥"),
      line("획득", "서리호신부(쩌억) 지능3, 이속2 이상"),
      line("NPC", "닐(시) / 시구르드(라)"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(25, 25, "Lv.25 · 스킬북 구매(4)", [
      line("NPC", "시라스/라노스성 독서가"),
      line("구매", "충격단련 1")
    ], "skill"),

    part(25, 28, "Lv.25~28 · 하늘성채 퀘스트(1)", [
      line("사냥", "고대의누각 몬스터 사냥"),
      line("필수 획득", "폭풍호신부(토네이도) 지능3, 이속2 이상"),
      line("획득", "합금반지(하늘박쥐, 아이폿)"),
      line("NPC", "우디마을 하늘문지기"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(25, 28, "Lv.25~28 · 하늘성채 퀘스트(2)", [
      line("사냥", "하늘성채 서부 몬스터 사냥(시) / 하늘성채 동부 몬스터 사냥(라)"),
      line("NPC", "우디마을 하늘문지기"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(28, 28, "Lv.28 · 크라운락 퀘스트(1)", [
      line("사냥", "이슬롯의 실험실 몬스터 사냥"),
      line("NPC", "우디마을 하늘문지기"),
      line("보상", "많은 경험치")
    ], "quest"),

    part(23, 33, "Lv.23~33 · 기초육성(5)", [
      line("Lv.23~28", "등대던전5F 몬스터 사냥"),
      line("Lv.23~28", "하늘성채 고대의누각 몬스터 사냥"),
      line("Lv.25~28", "하늘성채 서부 몬스터 사냥(시)"),
      line("Lv.25~28", "하늘성채 동부 몬스터 사냥(라)"),
      line("Lv.27~32", "이슬롯의실험실 몬스터 사냥"),
      line("Lv.29~33", "모래무덤골짜기 몬스터 사냥(시)"),
      line("Lv.29~33", "건조한초원 몬스터 사냥(라)")
    ], "growth"),

    part(30, 30, "Lv.30 · 스킬북 구매(5)", [
      line("NPC", "시라스/라노스성 독서가"),
      line("구매", "급소간파 1")
    ], "skill"),

    part(1, 33, "주요 퀘스트 순서", [
      line("1", "튜토리얼(1)"),
      line("2", "우디마을"),
      line("3", "버섯늪지"),
      line("4", "튜토리얼(2)"),
      line("5", "윙프림섬의 해변"),
      line("6", "버섯늪지 콜린"),
      line("7", "등대던전 1/2F"),
      line("8", "해지는노을숲(시) / 라노스평원(라)"),
      line("9", "카타르산맥(시) / 폐허가있는숲(라)"),
      line("10", "오염된 숲"),
      line("11", "등대던전 3/4F"),
      line("12", "하늘성채 고대의누각"),
      line("13", "하늘성채 서부(시) / 동부(라)")
    ], "other"),

    part(1, 16, "텔레포터", [
      line("이동", "일정 비용을 지불하고 Lv.2~16 사냥터 및 시라스/라노스성 이동 가능")
    ], "other")
  ];

  /* -------------------------
   * 초급 장비 점검
   * ------------------------- */
  const beginnerGear = [
    gear("10", "basic", "Lv.10 구간 · 아이템 점검(1)", [
      line("스킬", "연격3, 냉기부여2, 도약2, 무도의1격1"),
      line("무기", "+5 정찰대너클"),
      line("보조", "+3 목호신부"),
      line("모자", "-"),
      line("갑옷", "+0 가죽도복"),
      line("장갑", "+0 견습용장갑"),
      line("장화", "+0 모험가의신발"),
      line("망토", "모험가의망토 & 체력의망토"),
      line("목걸이", "모험가의목걸이"),
      line("반지", "어금니고리"),
      line("벨트", "모험가의벨트 & 펑기스킨벨트"),
      line("펫", "꼬마쿠이")
    ]),

    gear("14", "basic", "Lv.14~19 구간 · 아이템 점검(2)", [
      line("스킬", "무도의1격2, 전기부여2, 원소순환2"),
      line("무기", "+6 빛나는너클"),
      line("보조", "+4 산호호신부 & +3 목호신부"),
      line("모자", "+4 강화우파모자(크리1~2) & +4 무도가모자"),
      line("갑옷", "+4 강화우파도복(크리1~2) & +4 산호도복"),
      line("장갑", "+4 강화가죽장갑(명중2 이상)"),
      line("장화", "+4 신속의장화(이속3% 또는 5%)"),
      line("망토", "체력의망토"),
      line("목걸이", "모험가의목걸이"),
      line("반지", "까막이반지 & 해적의반지"),
      line("벨트", "매드가이벨트"),
      line("펫", "꼬마쿠이")
    ]),

    gear("23", "basic", "Lv.23 구간 · 아이템 점검(3)", [
      line("스킬", "백하의권2, 원소방출1"),
      line("무기", "+6 견습투사의너클"),
      line("보조", "+4 산호호신부"),
      line("모자", "+4 강화우파모자(크리1~2) & +4 무도가모자"),
      line("갑옷", "+4 강화우파도복(크리1~2) & +4 산호도복"),
      line("장갑", "+4 강화가죽장갑(명중2 이상)"),
      line("장화", "+4 신속의장화 & +4 야만의부츠"),
      line("망토", "불도저망토 & 투사의망토 & 의지의망토(0.2)"),
      line("목걸이", "모험가의목걸이 & 투사의목걸이 & 해적의목걸이"),
      line("반지", "해적의반지 & 투사의반지(물리)"),
      line("벨트", "매드가이벨트 & 투사의벨트 & 강화가죽벨트"),
      line("펫", "신규 일반 펫 & 꼬마쿠이")
    ]),

    gear("27", "basic", "Lv.27 구간 · 아이템 점검(4)", [
      line("스킬", "충격단련1, 기의장막1/2"),
      line("무기", "+6 숙련투사의너클(아이언피스트)"),
      line("보조", "+4 서리호신부 & +4 폭풍호신부"),
      line("모자", "+4 강화우파모자(크리1~2) & +4 무도가모자"),
      line("갑옷", "+4 강화우파도복(크리1~2) & +4 산호도복"),
      line("장갑", "+4 원소장갑(명중2, 힘2 이상)"),
      line("장화", "+4 신속의장화 & +4 야만의부츠"),
      line("망토", "불도저망토 & 투사의망토 & 의지의망토(0.2)"),
      line("목걸이", "레이븐목걸이 & 투사의목걸이 & 해적의목걸이"),
      line("반지", "해적의반지 & 투사의반지(물리) & 합금반지(크리2)"),
      line("벨트", "매드가이벨트 & 투사의벨트 & 강화가죽벨트"),
      line("펫", "신규 일반 펫 & 꼬마쿠이")
    ]),

    gear("32", "basic", "Lv.32 구간 · 아이템 점검(5)", [
      line("스킬", "급소간파1/2, 기의장막3"),
      line("무기", "+6~7 스톰브레이커 & +7 숙련투사의너클(아이언피스트)"),
      line("보조", "+4 붉은호신부 & +4 폭풍호신부"),
      line("모자", "+4 구름의두건(크리3 이상) & +4 강화우파모자"),
      line("갑옷", "+4 번개도복 & +4 강화우파도복(크리1~2)"),
      line("장갑", "+4 구름의장갑 & +4 원소장갑(명중2 힘2 이상)"),
      line("장화", "+4 혹한의장화(지능2, 이속6 이상) & +4 야만의부츠"),
      line("망토", "투사의망토 & 의지의망토 & 반죽음의망토"),
      line("목걸이", "투사의목걸이 & 해적의목걸이 & 다크스컬"),
      line("반지", "합금반지(크리2) & 투사의반지(물리)"),
      line("벨트", "투사의벨트 & 강화가죽벨트 & 신념의벨트"),
      line("펫", "신규 일반 펫 & 신규 레어 펫"),
      line("Why", "+9 숙련투사의너클(아이언피스트)와 +6 스톰브레이커는 성능 동급 / 27제 무기 고강보다 골드벌이 후 32제 무기 기본강화 추천")
    ])
  ];

  /* -------------------------
   * 초급 골드벌이
   * ------------------------- */
  const beginnerGold = [
    gold("골드벌이(1) · 해변 · 추천 ★★★", [
      line("사냥", "윙프림섬의 우파루이 사냥"),
      line("득템", "집중3, 슬램2/출혈3 외 장비아이템")
    ]),

    gold("골드벌이(2) · 해적선 · 추천 ★★", [
      line("사냥", "해적선 몬스터 사냥"),
      line("득템", "해적의장갑, 해적의반지, 예리한감각2, 카니발라이즈2, 무도의1격2, 원소방출2")
    ]),

    gold("골드벌이(3) · 등대던전2F · 추천 ★★", [
      line("사냥", "등대던전2F 몬스터 사냥"),
      line("득템", "주시자의눈, 예리한롱소드, 망자의수의, 빛나는너클, 약화2, 매디테이션2 외 장비/재료아이템")
    ]),

    gold("골드벌이(4) · 등대던전3F · 추천 ★", [
      line("사냥", "등대던전3F 몬스터 사냥"),
      line("득템", "카타나, 그레이트보우, 초보술사의봉, 본톤파 외 장비/재료아이템")
    ]),

    gold("골드벌이(5) · 등대던전4F · 추천 ★", [
      line("사냥", "등대던전4F 몬스터 사냥"),
      line("득템", "바이킹검, 각궁, 주술사의봉, 폭풍채찍 외 장비/재료아이템")
    ]),

    gold("골드벌이(6) · 등대던전5F · 추천 ★", [
      line("사냥", "등대던전5F 몬스터 사냥"),
      line("득템", "글라디우스, 헌터보우, 신비술사의봉, 아이언피스트, 감각의증폭2 외 장비/재료아이템")
    ]),

    gold("골드벌이(7) · 오염된숲 · 추천 ★", [
      line("사냥", "오염된숲 몬스터 사냥"),
      line("득템", "휩쓸기3, 멀티샷2 외 장비/재료아이템")
    ]),

    gold("골드벌이(8) · 이슬롯의실험실 · 추천 ★★", [
      line("사냥", "이슬롯의실험실 몬스터 사냥"),
      line("득템", "샤콘그리브, 맹독의장화, 설원의저주장화, 혹한의장화, 서리지든화살집 외 재료아이템")
    ])
  ];

  const communityInfo = [
    line("오픈카톡", "아이모 무도가협회 : https://open.kakao.com/o/gGcrP3ri")
  ];

  /* -------------------------
   * 통합 데이터
   * ------------------------- */
  const allSteps = {
    "초급": beginnerSteps,
    "중급": [],
    "고급": []
  };

  const allGear = {
    "초급": beginnerGear,
    "중급": [],
    "고급": []
  };

  const tabs = [
    ["all", "전체"],
    ["growth", "육성 순서"],
    ["equipment", "추천 장비"],
    ["quests", "퀘스트"],
    ["skills", "스킬"],
    ["collection", "도감"],
    ["gems", "보석"],
    ["gold", "골드벌이"],
    ["other", "추가 정보"]
  ];

  function rowsHTML(rows) {
    return `
      <dl class="bk-rows">
        ${rows.map((r) => `
          <div class="bk-rows-item">
            <dt>${E(r.label)}</dt>
            <dd>${E(r.value)}</dd>
          </div>
        `).join("")}
      </dl>
    `;
  }

  function card(title, rows, marker = "") {
    return `<section class="bk-card"><h3>${marker}${E(title)}</h3>${rowsHTML(rows)}</section>`;
  }

  function section(title, html) {
    return `
      <section class="bk-section">
        <h2>${E(title)}</h2>
        ${html || '<div class="bk-empty">📌 아직 등록된 자료가 없습니다.</div>'}
      </section>
    `;
  }

  function stepsHTML(tier, mode, level) {
    const source = allSteps[tier] || [];
    const filtered = source
      .filter((s) => {
        if (mode === "growth") return s.kind === "growth";
        if (mode === "quests") return s.kind === "quest";
        if (mode === "skills") return s.kind === "skill";
        if (mode === "other") return s.kind === "other";
        return true;
      })
      .filter((s) => !level || (s.min <= Number(level) && s.max >= Number(level)));

    return filtered.map((s) => {
      const marker =
        s.kind === "quest" ? "📜 " :
        s.kind === "skill" ? "📚 " :
        s.kind === "other" ? "✨ " :
        "🥊 ";
      return card(s.title, s.rows, marker);
    }).join("");
  }

  function gearHTML(tier, level) {
    const source = allGear[tier] || [];
    const filtered = source.filter((g) => !level || g.level === level);
    return filtered.map((g) => card(g.title, g.rows, "🛡️ ")).join("");
  }

  function goldHTML(tier) {
    if (tier !== "초급") return "";
    return beginnerGold.map((g) => card(g.title, g.rows, "💰 ")).join("");
  }

  function placeholderHTML(tier) {
    if (tier === "초급") return "";
    return `
      <div class="bk-empty">
        ${E(tier)} 자료는 아직 추가 전입니다.<br>
        지금은 무도가 초급 공략만 구현되어 있어요.
      </div>
    `;
  }

  window.renderIMOBreaker = function (target, startTier = "초급") {
    const root = typeof target === "string" ? document.querySelector(target) : target;
    if (!root) return false;

    let tier = ["초급", "중급", "고급"].includes(startTier) ? startTier : "초급";
    let cat = "all";
    let levelFilter = "";
    let gearLevel = "";

    root.innerHTML = `
      <div class="bk-app">
        <style>
          .bk-app{
            background:#111a2a;
            color:#ecf3ff;
            border:1px solid #33435d;
            border-radius:14px;
            padding:12px;
            font-family:system-ui,'Malgun Gothic',sans-serif;
            line-height:1.65;
            font-size:14px;
          }
          .bk-app *{box-sizing:border-box}
          .bk-app [hidden]{display:none !important}
          .bk-hero{text-align:center;padding:13px 5px 8px}
          .bk-hero strong{display:block;color:#f8d185;font-size:23px}
          .bk-hero small{color:#afbdd0}
          .bk-tabs{
            display:flex;
            gap:6px;
            overflow-x:auto;
            padding:10px 0;
            scrollbar-width:thin;
          }
          .bk-tabs button{
            border:1px solid #53647e;
            background:#24364e;
            color:#fff;
            border-radius:9px;
            padding:8px 11px;
            white-space:nowrap;
            font-size:13px;
            cursor:pointer;
          }
          .bk-tabs button.on{
            background:#b18a3f;
            border-color:#f0c87f;
            color:#101a2b;
            font-weight:700;
          }
          .bk-filter{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
            gap:8px;
            background:#19283d;
            padding:12px;
            border-radius:10px;
            margin:10px 0;
          }
          .bk-filter label{
            color:#d4e0f3;
            font-size:13px;
            display:grid;
            gap:5px;
          }
          .bk-filter select{
            background:#293d58;
            color:#fff;
            border:1px solid #607491;
            border-radius:7px;
            padding:10px;
            min-width:0;
          }
          .bk-section{margin:18px 0}
          .bk-section h2{
            font-size:17px;
            text-align:left;
            color:#efc978;
            border-left:3px solid #efc978;
            padding-left:9px;
            margin:8px 0;
          }
          .bk-card{
            background:#1c2b41;
            border:1px solid #374d69;
            border-radius:11px;
            padding:11px 12px;
            margin:9px 0;
            overflow-wrap:anywhere;
          }
          .bk-card h3{
            font-size:15px;
            line-height:1.45;
            color:#9dd9f8;
            margin:0 0 10px;
          }
          .bk-rows{margin:0}
          .bk-rows-item{
            display:flex;
            gap:10px;
            padding:6px 0;
            border-top:1px solid #2d4058;
          }
          .bk-rows-item dt{
            flex:0 0 82px;
            color:#edc985;
            font-weight:700;
          }
          .bk-rows-item dd{
            flex:1;
            margin:0;
            white-space:pre-wrap;
            overflow-wrap:anywhere;
          }
          .bk-empty{
            color:#b6c4d6;
            background:#1a293c;
            padding:12px;
            border-radius:9px;
          }
          .bk-info{
            font-size:12px;
            color:#abbdd3;
            margin-top:18px;
            border-top:1px solid #39485a;
            padding-top:11px;
          }
          @media(max-width:370px){
            .bk-rows-item{display:block}
            .bk-rows-item dt{margin-bottom:2px}
          }
        </style>

        <div class="bk-hero">
          <strong>🥊 무도가 공략</strong>
          <small>IMO.ONYX · 현재 초급 구현 완료</small>
        </div>

        <div class="bk-tabs" data-bk-tiers></div>
        <div class="bk-tabs" data-bk-tabs></div>
        <div class="bk-filter" data-bk-filter hidden></div>
        <div data-bk-content></div>

        <p class="bk-info">
          📌 사용자 캡처 기준으로 정리한 무도가 초급 공략입니다.<br>
          일부 아이템명/옵션명은 캡처 해상도 때문에 다르게 보일 수 있어요.<br>
          중급·고급은 다음에 이어서 추가하면 됩니다.
        </p>
      </div>
    `;

    const tierBar = root.querySelector("[data-bk-tiers]");
    const catBar = root.querySelector("[data-bk-tabs]");
    const filterBar = root.querySelector("[data-bk-filter]");
    const content = root.querySelector("[data-bk-content]");

    function paint() {
      tierBar.innerHTML = ["초급", "중급", "고급"]
        .map((t) => `<button type="button" data-tier="${t}" class="${t === tier ? "on" : ""}">${t}</button>`)
        .join("");

      catBar.innerHTML = tabs
        .map(([id, label]) => `<button type="button" data-cat="${id}" class="${cat === id ? "on" : ""}">${E(label)}</button>`)
        .join("");

      filterBar.hidden = !(tier === "초급" && (cat === "growth" || cat === "quests" || cat === "skills" || cat === "other" || cat === "equipment"));

      if (tier === "초급" && cat === "equipment") {
        filterBar.innerHTML = `
          <label>
            장비 구간
            <select data-filter="gearLevel">
              <option value="">전체 보기</option>
              <option value="10" ${gearLevel === "10" ? "selected" : ""}>Lv.10</option>
              <option value="14" ${gearLevel === "14" ? "selected" : ""}>Lv.14~19</option>
              <option value="23" ${gearLevel === "23" ? "selected" : ""}>Lv.23</option>
              <option value="27" ${gearLevel === "27" ? "selected" : ""}>Lv.27</option>
              <option value="32" ${gearLevel === "32" ? "selected" : ""}>Lv.32</option>
            </select>
          </label>
        `;
      } else if (tier === "초급" && ["growth", "quests", "skills", "other"].includes(cat)) {
        filterBar.innerHTML = `
          <label>
            확인할 레벨
            <select data-filter="level">
              <option value="">전체 보기</option>
              ${Array.from({ length: 33 }, (_, i) => {
                const v = String(i + 1);
                return `<option value="${v}" ${levelFilter === v ? "selected" : ""}>Lv.${v}</option>`;
              }).join("")}
            </select>
          </label>
        `;
      } else {
        filterBar.innerHTML = "";
      }

      if (tier !== "초급") {
        content.innerHTML = placeholderHTML(tier);
      } else {
        let html = "";

        if (cat === "all") {
          html += section("📊 생성 능력치", card("무도가 능력치 선택과 효과", origin, "🥊 "));
          html += section("🌱 육성 순서", stepsHTML("초급", "growth", ""));
          html += section("🛡️ 추천 장비", gearHTML("초급", ""));
          html += section("📜 퀘스트", stepsHTML("초급", "quests", ""));
          html += section("📚 스킬", stepsHTML("초급", "skills", ""));
          html += section("📖 도감", card("무도가 도감 선택사항", collection["초급"], "📖 "));
          html += section("💎 보석", card("무도가 보석 추천", gems["초급"], "💎 "));
          html += section("💰 골드벌이", goldHTML("초급"));
          html += section("✨ 추가 정보", stepsHTML("초급", "other", "") + card("커뮤니티", communityInfo, "💬 "));
        } else if (cat === "growth") {
          html += section("🌱 육성 순서", stepsHTML("초급", "growth", levelFilter));
        } else if (cat === "equipment") {
          html += section("🛡️ 추천 장비", gearHTML("초급", gearLevel));
        } else if (cat === "quests") {
          html += section("📜 퀘스트", stepsHTML("초급", "quests", levelFilter));
        } else if (cat === "skills") {
          html += section("📚 스킬", stepsHTML("초급", "skills", levelFilter));
        } else if (cat === "collection") {
          html += section("📖 도감", card("무도가 도감 선택사항", collection["초급"], "📖 "));
        } else if (cat === "gems") {
          html += section("💎 보석", card("무도가 보석 추천", gems["초급"], "💎 "));
        } else if (cat === "gold") {
          html += section("💰 골드벌이", goldHTML("초급"));
        } else if (cat === "other") {
          html += section("✨ 추가 정보", stepsHTML("초급", "other", levelFilter) + card("커뮤니티", communityInfo, "💬 "));
        }

        content.innerHTML = html;
      }

      tierBar.querySelectorAll("[data-tier]").forEach((btn) => {
        btn.addEventListener("click", () => {
          tier = btn.dataset.tier;
          cat = "all";
          levelFilter = "";
          gearLevel = "";
          paint();
        });
      });

      catBar.querySelectorAll("[data-cat]").forEach((btn) => {
        btn.addEventListener("click", () => {
          cat = btn.dataset.cat;
          paint();
        });
      });

      filterBar.querySelectorAll("[data-filter]").forEach((el) => {
        el.addEventListener("change", () => {
          if (el.dataset.filter === "level") levelFilter = el.value;
          if (el.dataset.filter === "gearLevel") gearLevel = el.value;
          paint();
        });
      });
    }

    paint();
    return true;
  };

  /* -------------------------
   * 기존 앱에 연결
   * ------------------------- */
  function installIntoExistingApp() {
    function showBreakerPage(level) {
      const area =
        document.querySelector("main.container") ||
        document.querySelector(".container") ||
        document.querySelector("main");

      if (!area) return false;

      const mount = document.createElement("div");
      mount.id = "imo-breaker-mount";
      area.replaceChildren(mount);

      window.renderIMOBreaker(mount, level);

      const back = document.createElement("button");
      back.type = "button";
      back.className = "btn";
      back.textContent = "← 무도가 단계 선택으로";
      back.style.cssText =
        "display:block;width:100%;margin:18px 0;padding:13px;background:#d8b66a;color:#111722;border:0;border-radius:11px;font-weight:bold";

      back.addEventListener("click", () => {
        if (typeof window.showLevels === "function") window.showLevels("무도가");
        else if (typeof window.showJobs === "function") window.showJobs();
        else history.back();
      });

      area.append(back);

      if (typeof window.scrollTo === "function") window.scrollTo(0, 0);
      return true;
    }

    if (typeof window.showGuide === "function" && !window.showGuide.__bkWrapped) {
      const old = window.showGuide;
      const wrapped = function (job, level) {
        if (job === "무도가") return showBreakerPage(level);
        return old.apply(this, arguments);
      };
      wrapped.__bkWrapped = true;
      window.showGuide = wrapped;
    }

    if (typeof window.showJobDetail === "function" && !window.showJobDetail.__bkWrapped) {
      const old = window.showJobDetail;
      const wrapped = function (job, level) {
        if (job === "무도가") return showBreakerPage(level);
        return old.apply(this, arguments);
      };
      wrapped.__bkWrapped = true;
      window.showJobDetail = wrapped;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installIntoExistingApp);
  } else {
    installIntoExistingApp();
  }
})();

/* IMO.ONYX 무도가 중급 확장
   기존 breaker-guide.js 맨 아래에 추가
*/
(function () {
  "use strict";

  const original = window.renderIMOBreaker;
  if (typeof original !== "function" || original.__middleReady) return;

  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[c]));

  const row = (a, b) => [a, b];

  const card = (title, rows) => `
    <section class="bm-card">
      <h3>${esc(title)}</h3>
      ${rows.map(r => `
        <div class="bm-row">
          <b>${esc(r[0])}</b>
          <span>${esc(r[1])}</span>
        </div>
      `).join("")}
    </section>
  `;

  const sect = (title, html) => `
    <section class="bm-section">
      <h2>${esc(title)}</h2>
      ${html || '<p class="bm-muted">자료 준비 중</p>'}
    </section>
  `;

  // 중급 도감
  const encyclopedia = [
    row("명중", "2순번"),
    row("회피", "우선순위 표기 없음"),
    row("크리티컬", "2순번"),
    row("불저항 · 냉기저항 · 번개저항 · 속성저항", "우선순위 표기 없음"),
    row("체력", "0순번"),
    row("마나", "우선순위 표기 없음"),
    row("체력재생", "4순번"),
    row("마나재생", "우선순위 표기 없음"),
    row("힘", "3순번"),
    row("지능", "3순번"),
    row("민첩", "우선순위 표기 없음"),
    row("이동속도", "1순번"),
    row("아머", "4순번"),
    row("PVE 데미지", "1순번"),
    row("PVE 데미지 감소", "2순번"),
    row("PVP 데미지 · PVP 데미지 감소", "우선순위 표기 없음"),
    row("아이템 드랍", "0순번"),
    row("골드 드랍", "0순번"),
    row("보스 데미지 · 크리티컬 저항 · 크리티컬 데미지 감소", "우선순위 표기 없음")
  ];

  // 중급 보석
  const gems = [
    row("힘 & 체력 · 여신의축복", "일정 시간 받는 데미지 감소"),
    row("힘 & 체력 · 아드레날린", "몬스터 처치 시 데미지 증가"),
    row("힘 & 체력 · 빈틈봉쇄", "피격 시 크리 저항 증가")
  ];

  // 중급 퀘스트
  const quests = [
    card("Lv.33~39 · 죽음의 늪 퀘스트", [
      row("사냥", "죽음의 늪 몬스터 사냥"),
      row("NPC", "이프릴"),
      row("보상", "많은 경험치")
    ]),
    card("Lv.36~39 · 모르포시즈 뿌리 퀘스트", [
      row("사냥", "모르포시즈 뿌리 몬스터 사냥"),
      row("NPC", "길잡이 애셔"),
      row("보상", "많은 경험치")
    ]),
    card("Lv.40~44 · 숲의 미궁 퀘스트", [
      row("사냥", "숲의 미궁 몬스터 사냥"),
      row("NPC", "안드리우스(시) / 쿠스타스(라)"),
      row("보상", "많은 경험치, 대장의 추천장")
    ])
  ];

  // 중급 사냥터
  const hunting = [
    card("Lv.33~39 · 기초육성(6)", [
      row("Lv.29~33", "모래무덤골짜기(시), 건조한초원(라)"),
      row("Lv.32~39", "죽음의 늪"),
      row("Lv.32~36", "돌무더기 요새"),
      row("Lv.33~36", "알수없는 미로"),
      row("Lv.36~41", "뜨거운 모래사막"),
      row("Lv.36~39", "모르포시즈 뿌리"),
      row("Lv.30~47", "헌팅그라운드")
    ]),
    card("Lv.40~44 · 기초육성(7)", [
      row("Lv.39~43", "타락한 신전"),
      row("Lv.40~44", "숲의 미궁"),
      row("Lv.39~44", "이슬롯의 신전"),
      row("Lv.30~47", "헌팅그라운드")
    ])
  ];

  // 길드 및 도감
  const other = [
    card("Lv.40~55 · 길드 던전", [
      row("필수", "저지의관 리에티 클리어"),
      row("목표", "길드 코인 획득 → 파공각 구매 준비")
    ]),
    card("Lv.1~55 · 도감 완성", [
      row("재료", "재료 아이템 도감 작업 (이전 육성 맵에서 획득)"),
      row("장비", "장비 아이템 도감 작업"),
      row("코스튬", "코스튬 아이템 도감 작업")
    ])
  ];

  // 중급 추천 장비
  const gear = [
    {
      level: "30~37",
      budget: "일반",
      rows: [
        row("스킬", "원소순환3, 육감1/2, 급소간파3 외 무도의격3, 백하의권3, 원소순환3 (필수)"),
        row("무기", "+6~7 스톰브레이커 & +6~7 글라시아 & +6~7 황혼의송곳니"),
        row("보조", "+4~5 붉은호신부 (크리2)"),
        row("모자", "+4~5 구름의두건(크리4) → +4~5 수련의모자(크리5)"),
        row("갑옷", "+4~5 번개도복(크리2)"),
        row("장갑", "+5 구름의장갑(명중2, 힘2) → +4~5 혹한의장갑(명중4, 힘4)"),
        row("장화", "+5 혹한의장화 (2/6)"),
        row("망토", "힘1 의지의망토(1.0) & 반죽음의망토"),
        row("목걸이", "힘1 해적의목걸이 & 다크스컬"),
        row("반지", "힘1 합금반지(크리2) & 대천사(크리2) & 가디언의반지"),
        row("벨트", "힘1 강화가죽벨트 & 신념의벨트"),
        row("펫", "힘3 신규 일반 펫 & 신규 레어 펫")
      ]
    },
    {
      level: "30~37",
      budget: "자본",
      rows: [
        row("스킬", "원소순환3, 육감1/2, 급소간파3, 백하의권3 외 전기부여4, 무도의격4 (목표)"),
        row("무기", "+7~8 글라시아 & +7~8 황혼의송곳니"),
        row("보조", "+4~5 붉은호신부(크리2) → +5 나비호신부(크리2)"),
        row("모자", "+4~5 구름의두건(크리4) → +5 수련의모자(크리5)"),
        row("갑옷", "+5 번개도복(크리2)"),
        row("장갑", "+5 구름의장갑(명중2, 힘2) → +5 혹한의장갑(명중4, 힘4)"),
        row("장화", "+5 혹한의장화(2/6+) & +6 윙깃부츠(이속10+)"),
        row("망토", "힘2~3 반죽음의망토 & 죽음의망토"),
        row("목걸이", "힘2~3 다크스컬 & 대자연 & 황금목걸이"),
        row("반지", "힘2~3 대천사(크리2) & 가디언의반지"),
        row("벨트", "힘2~3 강화가죽벨트 & 신념의벨트"),
        row("펫", "힘3 신규 레어 펫")
      ]
    },
    {
      level: "38~43",
      budget: "일반",
      rows: [
        row("스킬", "격양1/2 외 냉기/전기부여4, 연격4, 무도의격4 (목표)"),
        row("무기", "+7~8 뇌강"),
        row("보조", "+4~5 나비호신부(크리2) & +4~5 크라운락호신부"),
        row("모자", "+4~5 힘의띠(크리6)"),
        row("갑옷", "+4~5 번개도복(크리2) & +4~5 톨레이도복(지능3)"),
        row("장갑", "+4~5 혹한의장갑(명중3, 힘4)"),
        row("장화", "+5 혹한의장화(2/6)"),
        row("망토", "힘1~2 의지의망토(1.0) & 반죽음의망토"),
        row("목걸이", "힘1~2 다크스컬"),
        row("반지", "힘1~2 대천사(크리2) & 가디언의반지 → 운명개척의반지(크리2)"),
        row("벨트", "힘1~2 청록의파편벨트"),
        row("펫", "힘3 신규 레어 펫")
      ]
    },
    {
      level: "38~43",
      budget: "자본",
      rows: [
        row("스킬", "격양1/2, 냉기부여4 (선택) 외 전기부여4, 연격4, 무도의격4 (필수)"),
        row("무기", "+8 뇌강"),
        row("보조", "+5 나비호신부(크리2) → +4~5 크라운락호신부"),
        row("모자", "+4~5 힘의띠(크리6~7)"),
        row("갑옷", "+5 번개도복(크리2) & +5 톨레이도복(지능3)"),
        row("장갑", "+5~6 혹한의장갑(명중4, 힘4)"),
        row("장화", "+5~6 혹한의장화(2/6)"),
        row("망토", "힘2~3 반죽음의망토 & 죽음의망토"),
        row("목걸이", "힘2~3 다크스컬 & 대자연 & 황금목걸이"),
        row("반지", "힘2~3 대천사(크리2) → 운명개척의반지(크리2~3)"),
        row("벨트", "힘2~3 청록의파편벨트"),
        row("펫", "힘3 신규 레어 펫")
      ]
    }
  ];

  const skills = [
    card("Lv.30~37 · 주요 스킬", [
      row("기본", "원소순환3, 육감1/2, 급소간파3"),
      row("필수", "무도의격3, 백하의권3, 원소순환3"),
      row("자본 목표", "전기부여4, 무도의격4")
    ]),
    card("Lv.38~43 · 주요 스킬", [
      row("기본", "격양1/2"),
      row("일반 목표", "냉기/전기부여4, 연격4, 무도의격4"),
      row("자본", "냉기부여4(선택), 전기부여4·연격4·무도의격4(필수)")
    ])
  ];

  const wired = new WeakSet();

  let activeTab = "전체";
  let activeLevel = "";
  let activeBudget = "";

  function middle(root) {
    const choices = [
      "전체", "장비", "사냥터", "퀘스트",
      "스킬", "도감", "보석", "길드/기타"
    ];

    root.innerHTML = `
      <div class="bm-app">
        <style>
          .bm-app {
            background: #111a2a;
            color: #edf2fb;
            border-radius: 13px;
            padding: 13px;
            line-height: 1.65;
            font-family: system-ui, sans-serif;
          }
          .bm-app * { box-sizing: border-box; }
          .bm-app h2 {
            font-size: 17px;
            color: #f1c978;
            margin: 15px 0 8px;
          }
          .bm-title {
            text-align: center;
            font-size: 22px;
            font-weight: 800;
            color: #efcc83;
            padding: 12px 0;
          }
          .bm-nav {
            display: flex;
            gap: 7px;
            overflow-x: auto;
            padding: 7px 0;
          }
          .bm-nav button {
            border: 1px solid #54647a;
            border-radius: 9px;
            padding: 8px 12px;
            color: white;
            background: #263b56;
            white-space: nowrap;
            font-size: 13px;
          }
          .bm-nav button.on {
            background: #b18a3f;
            color: #131b2b;
            font-weight: 800;
          }
          .bm-card {
            background: #1c2d42;
            border: 1px solid #374a61;
            border-radius: 11px;
            padding: 12px;
            margin: 9px 0;
          }
          .bm-card h3 {
            color: #9bdcfb;
            font-size: 15px;
            margin: 0 0 8px;
          }
          .bm-row {
            display: flex;
            gap: 9px;
            padding: 6px 0;
            border-top: 1px solid #304055;
            font-size: 14px;
            overflow-wrap: anywhere;
          }
          .bm-row b {
            min-width: 56px;
            max-width: 75px;
            flex-shrink: 0;
            color: #f2ca7e;
          }
          .bm-row span {
            flex: 1;
            white-space: pre-wrap;
          }
          .bm-filters {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
            padding: 10px 0;
          }
          .bm-filters select {
            background: #283b54;
            color: white;
            border: 1px solid #526b88;
            border-radius: 8px;
            padding: 9px;
            flex: 1;
            min-width: 120px;
          }
          .bm-muted {
            color: #b9c6d7;
            font-size: 13px;
          }
        </style>

        <div class="bm-title">🥊 무도가 · 중급 공략</div>

        <div class="bm-nav" data-bm-tiers>
          <button data-bm-tier="초급">초급</button>
          <button class="on" data-bm-tier="중급">중급</button>
          <button data-bm-tier="고급">고급</button>
        </div>

        <div class="bm-nav" data-bm-cats>
          ${choices.map(c => `
            <button data-bm-cat="${c}"
              class="${activeTab === c ? "on" : ""}">
              ${c}
            </button>
          `).join("")}
        </div>

        <div data-bm-filters></div>
        <div data-bm-content></div>

        <p class="bm-muted">
          중급 자료는 전달받은 공략 사진을 기준으로 정리했습니다.
          고급은 자료 준비 중입니다.
        </p>
      </div>
    `;

    const filter = root.querySelector("[data-bm-filters]");

    if (activeTab === "전체" || activeTab === "장비") {
      filter.innerHTML = `
        <div class="bm-filters">
          <select data-bm-level>
            <option value="">전체 레벨</option>
            <option value="30~37"
              ${activeLevel === "30~37" ? "selected" : ""}>
              Lv.30~37
            </option>
            <option value="38~43"
              ${activeLevel === "38~43" ? "selected" : ""}>
              Lv.38~43
            </option>
          </select>

          <select data-bm-budget>
            <option value="">일반 + 자본</option>
            <option value="일반"
              ${activeBudget === "일반" ? "selected" : ""}>
              일반
            </option>
            <option value="자본"
              ${activeBudget === "자본" ? "selected" : ""}>
              자본
            </option>
          </select>
        </div>
      `;
    } else {
      filter.innerHTML = "";
    }

    const selectedGear = gear
      .filter(g =>
        (!activeLevel || activeLevel === g.level) &&
        (!activeBudget || activeBudget === g.budget)
      )
      .map(g =>
        card(`Lv.${g.level} · ${g.budget} 장비 점검`, g.rows)
      )
      .join("");

    const html = [];

    const add = (name, title, body) => {
      if (activeTab === "전체" || activeTab === name) {
        html.push(sect(title, body));
      }
    };

    add("장비", "🛡️ 중급 추천 장비", selectedGear);
    add("사냥터", "🗺️ 레벨별 사냥터", hunting.join(""));
    add("퀘스트", "📜 주요 퀘스트", quests.join(""));
    add("스킬", "📚 추천 스킬", skills.join(""));
    add("도감", "📖 도감 우선순위",
      card("중급 무도가 도감", encyclopedia));
    add("보석", "💎 추천 보석",
      card("힘 + 체력 보석", gems));
    add("길드/기타", "✨ 길드·도감 완성", other.join(""));

    root.querySelector("[data-bm-content]").innerHTML = html.join("");

    root.querySelectorAll("[data-bm-cat]").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.dataset.bmCat;
        middle(root);
      });
    });

    root.querySelectorAll("[data-bm-tier]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.bmTier === "중급") return;
        original(root, btn.dataset.bmTier);
      });
    });

    const levelEl = root.querySelector("[data-bm-level]");
    const budgetEl = root.querySelector("[data-bm-budget]");

    if (levelEl) {
      levelEl.addEventListener("change", () => {
        activeLevel = levelEl.value;
        middle(root);
      });
    }

    if (budgetEl) {
      budgetEl.addEventListener("change", () => {
        activeBudget = budgetEl.value;
        middle(root);
      });
    }

    return true;
  }

  function hook(root) {
    if (wired.has(root)) return;

    wired.add(root);

    root.addEventListener("click", e => {
      const btn = e.target.closest &&
        e.target.closest('button[data-tier="중급"]');

      if (btn && root.contains(btn)) {
        e.preventDefault();
        e.stopImmediatePropagation();

        activeTab = "전체";
        activeLevel = "";
        activeBudget = "";

        middle(root);
      }
    }, true);
  }

  const integrated = function (target, startTier = "초급") {
    const root = typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!root) return false;

    hook(root);

    if (startTier === "중급") {
      activeTab = "전체";
      activeLevel = "";
      activeBudget = "";
      return middle(root);
    }

    return original(root, startTier);
  };

  integrated.__middleReady = true;
  window.renderIMOBreaker = integrated;
})();
