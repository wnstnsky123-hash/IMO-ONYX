// IMO.ONYX 몬스터 도감 데이터

const monsterData = [
  // 우디위디 숲
  {
    id: 101,
    name: "쿠이",
    level: 2,
    hp: 15,
    exp: null,
    location: "우디위디 숲",
    respawn: "30초",
    drops: [
      "갑옷마법서(D등급)", "무명로브",
      "쿠이인형", "쿠이카드10",
      "네잎클로버", "하급체력물약",
      "하급마나물약", "막대사탕",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 102,
    name: "나무동그리",
    level: 3,
    hp: 30,
    exp: null,
    location: "우디위디 숲",
    respawn: "30초",
    drops: [
      "갑옷마법서(D등급)", "무명옷",
      "동그류", "하급체력물약",
      "하급마나물약", "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 103,
    name: "성난잎멧돼지",
    level: 4,
    hp: 41,
    exp: null,
    location: "우디위디 숲",
    respawn: "30초",
    drops: [
      "우든숏보우", "거친가죽",
      "멧돼지꼬리털", "멧돼지바베큐",
      "멧돼지고기", "빛나는열매",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 104,
    name: "나뭇잎멧돼지",
    level: 4,
    hp: 41,
    exp: null,
    location: "우디위디 숲",
    respawn: "30초",
    drops: [
      "연습용검", "거친가죽",
      "멧돼지꼬리털", "멧돼지바베큐",
      "멧돼지고기", "빛나는열매",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 105,
    name: "불도저주니어",
    level: 5,
    hp: 50,
    exp: null,
    location: "우디위디 숲",
    respawn: "2분 50초",
    drops: [
      "어금니고리", "질긴가죽",
      "멧돼지꼬리털", "펫 크리스탈",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },

  // 버섯늪지
  {
    id: 201,
    name: "불도저",
    level: 7,
    hp: 212,
    exp: null,
    location: "버섯늪지",
    respawn: "15분",
    drops: [
      "무기마법서(D등급)", "광기의송곳니",
      "불도저망토", "불도저이빨",
      "질긴가죽", "펫 크리스탈",
      "신비한돌", "작은보물상자",
      "작은가방", "블러쉬2", "해독2"
    ],
    image: "",
    description: "선공 · 빠름 · 근거리"
  },
  {
    id: 202,
    name: "불도저형님",
    level: 8,
    hp: 262,
    exp: null,
    location: "버섯늪지",
    respawn: "15분",
    drops: [
      "무기마법서(D등급)", "광기의송곳니",
      "불도저망토", "불도저이빨",
      "질긴가죽", "펫 크리스탈",
      "신비한돌", "작은보물상자",
      "작은가방", "블러쉬2", "해독2"
    ],
    image: "",
    description: "선공 · 빠름 · 근거리"
  },

  // 머쉬룸스포어
  {
    id: 301,
    name: "늪지버섯",
    level: 1,
    hp: 1,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "5분",
    drops: [
      "체력의망토", "버섯포자",
      "말린버섯", "영지버섯"
    ],
    image: "",
    description: "비선공 · 고정 · 공격 없음"
  },
  {
    id: 302,
    name: "독버섯돌이",
    level: 8,
    hp: 327,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "1분",
    drops: [
      "무기마법서(D등급)", "나무지팡이",
      "평키스킨벨트", "찢어진책자",
      "버섯포자", "말린버섯",
      "하급체력물약", "하급마나물약",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 303,
    name: "숲지꽃정령",
    level: 9,
    hp: 386,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "정보 확인 필요",
    drops: [
      "갑옷마법서(D등급)", "체력의망토",
      "강화가죽갑옷", "녹색가루",
      "하급마나물약", "작은보물상자"
    ],
    image: "",
    description: "비선공 · 고정 · 중거리"
  },
  {
    id: 304,
    name: "동굴박쥐",
    level: 9,
    hp: 361,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "1분",
    drops: [
      "마법서(D등급)", "우든숏소드",
      "체력의망토", "찢어진책자",
      "작은보물상자"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 305,
    name: "버금박쥐",
    level: 10,
    hp: 556,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "5분",
    drops: [
      "체력의망토", "유령의무릎뼈",
      "작은보물상자", "펫 크리스탈"
    ],
    image: "",
    description: "비선공 · 빠름 · 근거리"
  },
  {
    id: 306,
    name: "독왕버섯돌이",
    level: 12,
    hp: 810,
    exp: null,
    location: "머쉬룸스포어",
    respawn: "48분",
    drops: [
      "마법서(D등급)", "머쉬룸로브",
      "에리한목걸이", "찢어진책자",
      "영지버섯", "신비한돌",
      "펫 크리스탈", "작은보물상자"
    ],
    image: "",
    description: "선공 · 빠름 · 중거리"
  },

  // 윙프릴섬의 해변
  {
    id: 401,
    name: "유리병",
    level: 1,
    hp: 1,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "30초",
    drops: [
      "낡은천조각A", "낡은천조각B",
      "낡은천조각C", "찢어진책자"
    ],
    image: "",
    description: "비선공 · 고정 · 공격 없음"
  },
  {
    id: 402,
    name: "레드크랩",
    level: 10,
    hp: 150,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "30초",
    drops: [
      "마법서(D등급)", "병아리장갑",
      "라운드쉴드", "단단한껍질",
      "작은상호", "해적의주화"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 403,
    name: "샌드맨",
    level: 11,
    hp: 163,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "30초",
    drops: [
      "마법서(D등급)", "산호화살집",
      "상나무지팡이", "마법물품",
      "미지의돌"
    ],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 404,
    name: "우파루파",
    level: 12,
    hp: 181,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "30초",
    drops: [
      "마법서(D등급)", "물보우",
      "우파루파비늘", "작은상호"
    ],
    image: "",
    description: "선공 · 보통 · 근거리"
  },
  {
    id: 405,
    name: "우파루파",
    level: 13,
    hp: 200,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "30초",
    drops: [
      "마법서(C등급)", "물보우",
      "우파루파비늘"
    ],
    image: "",
    description: "선공 · 보통 · 근거리"
  },
  {
    id: 406,
    name: "변종우파",
    level: 13,
    hp: 316,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "10분",
    drops: [
      "마법서(C등급)", "물보우",
      "우파루파비늘"
    ],
    image: "",
    description: "선공 · 보통 · 중거리"
  },
  {
    id: 407,
    name: "우파루파족장",
    level: 14,
    hp: 1024,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "20분",
    drops: [
      "마법서(C등급)", "롱소드",
      "컴포짓보우", "우파루파비늘"
    ],
    image: "",
    description: "선공 · 보통 · 중거리"
  },
  {
    id: 408,
    name: "안킬로자라",
    level: 17,
    hp: 7777,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "특수 출현",
    drops: [
      "마법서(A등급)", "자라의왕관",
      "붉은자라껍질", "푸른자라껍질",
      "신비한오일", "펫 크리스탈"
    ],
    image: "",
    description: "선공 · 보통 · 근거리"
  },
  {
    id: 409,
    name: "홀리엔자라",
    level: 33,
    hp: 7777,
    exp: null,
    location: "윙프릴섬의 해변",
    respawn: "특수 출현",
    drops: [
      "마법서(A등급)", "자라의왕관",
      "붉은자라껍질", "푸른자라껍질",
      "신비한오일", "펫 크리스탈"
    ],
    image: "",
    description: "선공 · 보통 · 중거리"
  },

  // 해적선
  {
    id: 501,
    name: "빗자루",
    level: 18,
    hp: 400,
    exp: null,
    location: "해적선 1층",
    respawn: "1분",
    drops: [
      "마법서(D등급)", "해적의장갑",
      "해적의주화", "물약주머니"
    ],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 502,
    name: "청소부껄피",
    level: 18,
    hp: 500,
    exp: null,
    location: "해적선 1층",
    respawn: "5분",
    drops: [
      "마법서(D등급)", "해적의주화",
      "펫 크리스탈"
    ],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 503,
    name: "미믹주니어",
    level: 19,
    hp: 700,
    exp: null,
    location: "해적선 1층",
    respawn: "4분",
    drops: [
      "해적의반지", "선장실열쇠",
      "해적카드10", "해적의주화",
      "물약주머니"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 504,
    name: "해적해골",
    level: 19,
    hp: null,
    exp: null,
    location: "해적선 1층",
    respawn: "3분",
    drops: [
      "마법서(D등급)", "해적의장갑",
      "해적의주화"
    ],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 505,
    name: "해적유령",
    level: 20,
    hp: null,
    exp: null,
    location: "해적선 2층",
    respawn: "3분",
    drops: [
      "마법서(D등급)", "해적의장갑",
      "해적의주화"
    ],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 506,
    name: "미믹",
    level: 20,
    hp: 700,
    exp: null,
    location: "해적선 2층",
    respawn: "4분",
    drops: [
      "해적의반지", "붉은열쇠",
      "해적카드10", "해적의주화"
    ],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 507,
    name: "갑판장블랑카",
    level: 24,
    hp: 1800,
    exp: null,
    location: "해적선 2층",
    respawn: "30분~25분",
    drops: [
      "마법서(B등급)", "해적모",
      "해적의목걸이", "해적카드A",
      "고대의유물", "펫 크리스탈"
    ],
    image: "",
    description: "선공 · 빠름 · 중거리"
  },

  // 등대던전 1층
  {
    id: 601,
    name: "실험용유령",
    level: 15,
    hp: 239,
    exp: null,
    location: "등대던전 1층",
    respawn: "3분 50초",
    drops: [],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 602,
    name: "술취도리",
    level: 15,
    hp: 279,
    exp: null,
    location: "등대던전 1층",
    respawn: "3분 50초",
    drops: [],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 603,
    name: "은둔자",
    level: 15,
    hp: 10000,
    exp: null,
    location: "등대던전 1층",
    respawn: "정보 확인 필요",
    drops: [],
    image: "",
    description: "비선공 · 느림 · 근거리"
  },
  {
    id: 604,
    name: "해골",
    level: 17,
    hp: 388,
    exp: null,
    location: "등대던전 1층",
    respawn: "3분 50초",
    drops: [],
    image: "",
    description: "선공 · 빠름 · 근거리"
  },
  {
    id: 605,
    name: "매드가",
    level: 17,
    hp: 488,
    exp: null,
    location: "등대던전 1층",
    respawn: "정보 확인 필요",
    drops: [],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 606,
    name: "회색쥐돌",
    level: 18,
    hp: 556,
    exp: null,
    location: "등대던전 1층",
    respawn: "15분",
    drops: [],
    image: "",
    description: "선공 · 빠름 · 근거리"
  },
  {
    id: 607,
    name: "뼈척수",
    level: 18,
    hp: 2048,
    exp: null,
    location: "등대던전 1층",
    respawn: "1시간",
    drops: [],
    image: "",
    description: "선공 · 느림 · 근거리"
  },
  {
    id: 608,
    name: "블랙스컬",
    level: 23,
    hp: 2048,
    exp: null,
    location: "등대던전 1층",
    respawn: "56분 50초",
    drops: [],
    image: "",
    description: "선공 · 빠름 · 원거리"
  }
];

/* =========================================
   IMO.ONYX 등대던전 2~5층 추가 데이터
   monsters.js 맨 아래에 그대로 붙여넣기
   기존 1층 및 다른 지역 데이터 유지
========================================= */

(function () {
  "use strict";

  if (
    typeof monsterData === "undefined" ||
    !Array.isArray(monsterData)
  ) {
    console.error("monsterData를 찾을 수 없습니다.");
    return;
  }

  function add(id, floor, name, level, hp, respawn, drops, description) {
    const location = "등대던전 " + floor + "층";

    if (monsterData.some(m =>
      m.name === name && m.location === location
    )) {
      return;
    }

    monsterData.push({
      id,
      name,
      level,
      hp,
      exp: null,
      location,
      respawn,
      drops: Array.isArray(drops)
        ? [...drops]
        : drops.split("|").map(x => x.trim()).filter(Boolean),
      image: "",
      description
    });
  }

  function copyFloor(id, floor, name, fromFloor) {
    const old = monsterData.find(m =>
      m.name === name &&
      m.location === "등대던전 " + fromFloor + "층"
    );

    if (!old) {
      console.warn("복사할 몬스터 없음:", name, fromFloor);
      return;
    }

    add(
      id, floor, name,
      old.level, old.hp, old.respawn,
      old.drops, old.description
    );
  }

  // =====================================
  // 등대던전 2층
  // =====================================

  add(
    701, 2, "해골", 17, 388, "3분 50초",
    "마법서(C등급)|무딘숏소드|뼈갑옷|뼈조각|중급뼈도안|마력추출서|붕대|물약주머니|허름한상자|강인함2",
    "선공 · 빠름 · 근거리"
  );

  add(
    702, 2, "주시자", 18, 428, "3분 50초",
    "마법서(C등급)|주시자의눈|산호도복|신비한오일|마력추출서|동그류주스|하급체력물약|하급마나물약|물약주머니|허름한상자|약화2",
    "선공 · 느림 · 근거리"
  );

  add(
    703, 2, "눈풀린쿠이", 19, 457, "3분 50초",
    "마법서(C등급)|빛나는너클|고급마법사옷|쿠이카드J|쿠이카드K|쿠이카드Q|졸린쿠이인형|야자수칵테일|붕대|물약주머니|허름한상자|매디테이션2|마나피드1",
    "선공 · 느림 · 근거리 · 쿠이카드 수집 관련 몬스터"
  );

  add(
    704, 2, "고스트", 20, 612, "3분 50초",
    "마법서(B등급)|에리한롱소드|무딘숏소드|보일드레더아머|망자의수의|중급뼈도안|두꺼운붕대|웰빙허브빵|물약주머니|고대의유물|약화1|수호의기원1",
    "선공 · 느림 · 근거리 · 2층과 3층에 출현"
  );

  add(
    705, 2, "졸린쿠이", 20, 713, "20분",
    "마법서(B등급)|소용돌이활|빛나는너클|펫 크리스탈|쿠이카드K|쿠이카드Q|졸린쿠이인형|두꺼운붕대|웰빙허브빵|물약주머니|고대의유물",
    "선공 · 중간 · 원거리 · 쿠이카드 및 쿠이모자 제작 관련"
  );

  add(
    706, 2, "화이트스컬", 20, 1024, "15시간? 확인 필요",
    "마법서(B등급)|스컬쉴드|뼈갑옷|산호도복|펫 크리스탈|도안:블랙스컬갑옷|뼈조각|물약주머니|고대의유물|아이스랜스1",
    "선공 · 중간 · 원거리 · 재부활 시간은 원본 자료에 물음표 표기"
  );

  add(
    707, 2, "잠깬쿠이", 26, 3072, "63분 40초",
    "마법서(B등급)|파워글러브|에리한롱소드|소용돌이활|펫 크리스탈|쿠이카드A|쿠이카드K|조마의팬던트(거래불가)|조마의팬던트|고대의유물",
    "선공 · 빠름 · 원거리 · 파워글러브 획득처 · 쿠이카드 수집 관련"
  );

  // =====================================
  // 등대던전 3층
  // =====================================

  copyFloor(801, 3, "고스트", 2);

  add(
    802, 3, "뱀꼬리도마뱀", 21, 657, "3분 50초",
    "마법서(B등급)|도마뱀가죽옷|도마뱀가죽|신비한오일|동그류주스|웰빙허브빵|물약주머니|고대의유물|휩쓸기1|카타르의불꽃1",
    "선공 · 느림 · 근거리"
  );

  add(
    803, 3, "스네이크자드", 21, 657, "8시간 33분",
    "마법서(B등급)|맹독의화살집|도마뱀가죽옷|도마뱀가죽|펫 크리스탈|고대의유물|파괴의저주2",
    "선공 · 느림 · 근거리 · 파괴의저주2 추가 획득처: 이슬롯의 실험실 우르푸스"
  );

  add(
    804, 3, "어둠의주시자", 22, 697, "3분 50초",
    "마법서(B등급)|주시자의눈|신비한오일|동그류주스|웰빙허브빵|물약주머니|고대의유물|스톤스킨1|카타르의불꽃1|백하의권2",
    "선공 · 느림 · 근거리 · 3층과 4층에 출현"
  );

  add(
    805, 3, "스팩터", 22, 812, "4분 50초",
    "마법서(B등급)|카타나|그레이트보우|초보술사의봉|본 톤파|상급뼈도안|동그류주스|웰빙허브빵|물약주머니|고대의유물|펫 크리스탈|급소가격2",
    "선공 · 빠름 · 원거리 · 최대 5개체, 개체마다 고정 위치"
  );

  add(
    806, 3, "임프", 23, 745, "3분 50초",
    "마법서(B등급)|주술걸린옷|갑옷조각|동그류주스|웰빙허브빵|물약주머니|고대의유물|수호의기원2",
    "선공 · 느림 · 근거리 · 3층과 4층에 출현"
  );

  add(
    807, 3, "우헤헤", 29, 4048, "65분 20초",
    "마법서(B등급)|죽음의망토|반죽음의망토|조마의팬던트(거래불가)|조마의팬던트|고대의유물|물약주머니|펫 크리스탈",
    "선공 · 빠름 · 원거리 · 3층 특수 몬스터"
  );

  add(
    808, 3, "이히히", 29, 4048, "66분 40초",
    "마법서(B등급)|죽음의망토|반죽음의망토|조마의팬던트(거래불가)|조마의팬던트|고대의유물|물약주머니|펫 크리스탈",
    "선공 · 빠름 · 원거리 · 3층 특수 몬스터"
  );

  add(
    809, 3, "우히힉", 29, 4048, "68분 20초",
    "마법서(B등급)|재생의벨트|조마의팬던트(거래불가)|조마의팬던트|고대의유물|물약주머니|펫 크리스탈",
    "선공 · 빠름 · 원거리 · 재생의벨트 획득처"
  );

  // =====================================
  // 등대던전 4층
  // =====================================

  copyFloor(901, 4, "어둠의주시자", 3);
  copyFloor(902, 4, "임프", 3);

  add(
    903, 4, "흡혈꽃", 24, 832, "3분 50초",
    "마법서(B등급)|아이언쉴드|원소장갑|혈꽃줄기|비탄에잠긴피|신비한오일|중급마나물약|동그류주스|웰빙허브빵|두꺼운붕대|물약주머니|고대의유물|멀티샷2",
    "선공 · 고정 · 원거리 · 4층과 5층에 출현 · 멀티샷2 추가 획득처: 오염된숲 변종일벌"
  );

  add(
    904, 4, "핏빛사념체", 25, 842, "3분 50초",
    "마법서(B등급)|임프전사의건틀릿|망자의장갑|고대의사념|고대의피|고대의깃털|중급체력물약|중급마나물약|동그류주스|웰빙허브빵|두꺼운붕대|물약주머니|고대의유물|휩쓸기2",
    "선공 · 느림 · 근거리 · 4층과 5층에 출현 · 휩쓸기2 추가 획득처: 오염된숲 분노한나무"
  );

  const flyingDrops =
    "마법서(B등급)|바이킹검|각궁|주술사의봉|폭풍채찍|동그류주스|웰빙허브빵|물약주머니|고대의유물|펫 크리스탈|의지2";

  add(
    905, 4, "딩딩", 25, 922, "4분 50초",
    flyingDrops,
    "선공 · 빠름 · 원거리 · 의지2 추가 획득처: 오염된숲 찌어억"
  );

  add(
    906, 4, "동동", 25, 922, "4분 50초",
    flyingDrops,
    "선공 · 빠름 · 원거리 · 의지2 추가 획득처: 오염된숲 찌어억"
  );

  add(
    907, 4, "단단", 25, 922, "4분 50초",
    flyingDrops,
    "선공 · 빠름 · 원거리 · 의지2 추가 획득처: 오염된숲 찌어억"
  );

  add(
    908, 4, "가디언임프", 32, 5012, "65분 20초",
    "마법서(A등급)|가디언의반지|주술사의모자|탐험가의가방(5칸)|조마의팬던트(거래불가)|조마의팬던트|고대의유물|오래된주문서|펫 크리스탈|체력단련1|원소순환3",
    "선공 · 빠름 · 원거리 · 원소순환3 추가 획득처: 빛신 블랙스카이"
  );

  // =====================================
  // 등대던전 5층
  // =====================================

  copyFloor(1001, 5, "흡혈꽃", 4);
  copyFloor(1002, 5, "핏빛사념체", 4);

  add(
    1003, 5, "미이라", 26, 990, "3분 50초",
    "마법서(B등급)|스케일부츠|갑옷조각|상급뼈도안|두꺼운붕대|물약주머니|고대의유물|의지1|감각의증폭2",
    "선공 · 느림 · 근거리 · 갑옷조각 활용처: 등대 대기실 페일런 · 감각의증폭2 추가 획득처: 오염된숲 감염된여왕벌"
  );

  add(
    1004, 5, "엘리트임프", 27, 1030, "3분 50초",
    "마법서(B등급)|오트월의가죽장갑|갑옷조각|상급뼈도안|중급체력물약|두꺼운붕대|물약주머니|고대의유물|스턴2",
    "선공 · 느림 · 근거리 · 갑옷조각 활용처: 등대 대기실 페일런"
  );

  add(
    1005, 5, "전투미이라", 28, 1200, "4분 50초",
    "마법서(B등급)|글라디우스|헌터보우|신비술사의봉|아이언피스트|두꺼운붕대|물약주머니|고대의유물|펫 크리스탈",
    "선공 · 빠름 · 중거리 · 최대 4개체, 개체마다 고정 위치"
  );

  add(
    1006, 5, "데블랑", 34, 19999,
    "5시간 43분 → 5시간 33분 (자료 표기)",
    "마법서(A등급)|윙깃부츠|탐험가의가방(5칸)|고대실험증표|조마의팬던트(거래불가)|조마의팬던트|물약주머니|오래된주문서|펫 크리스탈|화염폭풍1",
    "선공 · 빠름 · 원거리 · 5층 보스 · 천사의문 입장 시 동굴 내 출현 · 천사의문은 5층 지도 12시 방향 · 뼈열쇠를 사용하여 데블랑 방 입장(열쇠 소모) · 휩쓸기: 단일 대상 추가 타격 · 스턴: 단일 대상 스턴 디버프"
  );

  console.log(
    "IMO.ONYX 등대던전 데이터 연결 완료:",
    monsterData.length + "종"
  );

})();

/* ===================================================
   IMO.ONYX 몬스터 도감 최종 보완
   - 등대던전 1층 실제 사진 기준 9종 수정
   - 기존 잘못된 1층 이름 교정
   - 1층 드롭 아이템 및 재부활 시간 반영
   - 화이트스컬 재부활 시간 추정 표기
   - 등대던전 3층 스펙터 이름 교정
   - 기존 직업 공략 / 2~5층 데이터 유지

   사용 방법:
   monsters.js 맨 마지막 줄 아래에 붙여넣기
=================================================== */

(function () {
  "use strict";

  if (
    typeof monsterData === "undefined" ||
    !Array.isArray(monsterData)
  ) {
    console.error(
      "IMO.ONYX: monsterData를 찾지 못했습니다."
    );
    return;
  }

  const LOCATION = "등대던전 1층";

  // 띄어쓰기와 1F / 1층 표현 차이 허용
  function isFloor1(monster) {
    const location = String(
      monster.location || ""
    ).replace(/\s+/g, "");

    return (
      location === "등대던전1층" ||
      location.toLowerCase() === "등대던전1f"
    );
  }

  function parseDrops(text) {
    return text
      .split("|")
      .map(item => item.trim())
      .filter(Boolean);
  }

  /* ==============================================
     1층 실제 사진 기준 데이터
  ============================================== */

  const floor1Data = [

    {
      name: "실험용우파",
      level: 15,
      hp: 239,
      respawn: "3분 50초",
      drops: parseDrops(
        "마법서(C등급)|" +
        "강화가죽장갑|" +
        "신비한오일|" +
        "붉은산호|" +
        "낡은여자반지|" +
        "중급뼈도안|" +
        "우파족발|" +
        "마력추출서|" +
        "물약주머니|" +
        "허름한상자"
      ),
      description:
        "선공 · 느림 · 근거리. " +
        "강화가죽장갑은 원본 자료에 " +
        "서로 다른 아이콘 2종으로 표시됨."
    },

    {
      name: "숲지동그리",
      level: 15,
      hp: 279,
      respawn: "3분 50초",
      drops: parseDrops(
        "마법서(C등급)|" +
        "전문마법사옷|" +
        "신비한오일|" +
        "동그리잎|" +
        "낡은여자반지|" +
        "중급뼈도안|" +
        "마력추출서|" +
        "야자수칵테일|" +
        "물약주머니|" +
        "허름한상자|" +
        "원소순환2"
      ),
      description:
        "비선공 · 느림 · 근거리. " +
        "원소순환2 드롭 몬스터."
    },

    {
      name: "은둔자",
      level: 15,
      hp: 10000,
      respawn: "11시간 23분",
      drops: parseDrops(
        "마법서(C등급)|" +
        "낡은여자반지|" +
        "허름한상자|" +
        "플레어2"
      ),
      description:
        "비선공 · 느림 · 근거리. " +
        "플레어2 드롭 몬스터."
    },

    {
      name: "지하거미",
      level: 16,
      hp: 328,
      respawn: "3분 50초",
      drops: parseDrops(
        "마법서(C등급)|" +
        "거미줄|" +
        "낡은여자반지|" +
        "마력추출서|" +
        "허름한상자|" +
        "강인함1|" +
        "쉬프트1"
      ),
      description:
        "선공 · 중간 속도 · 근거리."
    },

    {
      name: "해골",
      level: 17,
      hp: 388,
      respawn: "3분 50초",
      drops: parseDrops(
        "마법서(C등급)|" +
        "무딘숏소드|" +
        "뼈갑옷|" +
        "뼈조각|" +
        "중급뼈도안|" +
        "마력추출서|" +
        "붕대|" +
        "물약주머니|" +
        "허름한상자|" +
        "강인함2"
      ),
      description:
        "선공 · 빠름 · 근거리. " +
        "등대던전 2층에도 출현."
    },

    {
      name: "매드가",
      level: 17,
      hp: 488,
      respawn: "50분",
      drops: parseDrops(
        "매드가의심장|" +
        "매드가의뼈|" +
        "마력추출서|" +
        "허름한상자"
      ),
      description:
        "선공 · 느림 · 근거리. " +
        "NPC 복수자 시로에게 " +
        "매드가의심장 1개와 " +
        "매드가의뼈 1개를 가져가면 " +
        "매드가의버클 제작 가능. " +
        "재료 아이템은 거래불가."
    },

    {
      name: "회색해골",
      level: 18,
      hp: 556,
      respawn: "15분",
      drops: parseDrops(
        "마법서(C등급)|" +
        "무딘숏소드|" +
        "롱소드|" +
        "소용돌이활|" +
        "뼈갑옷|" +
        "뼈조각|" +
        "상급뼈도안|" +
        "마력추출서|" +
        "붕대|" +
        "물약주머니|" +
        "펫 크리스탈(*1)|" +
        "허름한상자|" +
        "전기부여3"
      ),
      description:
        "선공 · 느림 · 근거리. " +
        "소용돌이활, 전기부여3 드롭 몬스터."
    },

    {
      name: "왜소한해골",
      level: 18,
      hp: null,
      respawn: "1시간",
      drops: parseDrops(
        "마법서(C등급)|" +
        "여성의뼈"
      ),
      description:
        "선공 · 느림 · 근거리. " +
        "HP 정보 미등록. " +
        "여성의뼈는 영혼의링 제작 재료."
    },

    {
      name: "블랙스컬",
      level: 23,
      hp: 2048,
      respawn: "56분 50초",
      drops: parseDrops(
        "마법서(B등급)|" +
        "다크스컬|" +
        "에리한롱소드|" +
        "소용돌이활|" +
        "스컬쉴드|" +
        "블랙스컬|" +
        "상급뼈도안|" +
        "조마의팬던트(거래불가)|" +
        "조마의팬던트|" +
        "고대의유물|" +
        "전기부여3"
      ),
      description:
        "선공 · 빠름 · 원거리. " +
        "등대던전 1층 주요 몬스터."
    }

  ];

  /* ==============================================
     기존 1층 데이터의 잘못된 이름 보정

     아래 이름은 이전 입력 과정에서
     실제 사진과 다르게 기록된 이름입니다.
  ============================================== */

  const oldNameAliases = {
    "실험용우파": [
      "실험용유령"
    ],
    "숲지동그리": [
      "술취도리"
    ],
    "회색해골": [
      "회색쥐돌"
    ],
    "왜소한해골": [
      "뼈척수"
    ]
  };

  const oldFloor1 = monsterData.filter(
    isFloor1
  );

  const otherMonsters = monsterData.filter(
    monster => !isFloor1(monster)
  );

  // 다른 지역에서 사용 중인 ID는 유지
  const usedIds = new Set(
    otherMonsters.map(monster => monster.id)
  );

  let nextId = Math.max(
    1000,
    ...monsterData
      .map(monster => Number(monster.id))
      .filter(Number.isFinite)
  );

  function createId() {
    do {
      nextId += 1;
    } while (usedIds.has(nextId));

    usedIds.add(nextId);

    return nextId;
  }

  const usedOldRecords = new Set();

  function findOldMonster(name) {
    const possibleNames = [
      name,
      ...(oldNameAliases[name] || [])
    ];

    const found = oldFloor1.find(monster =>
      possibleNames.includes(monster.name) &&
      !usedOldRecords.has(monster)
    );

    if (found) {
      usedOldRecords.add(found);
    }

    return found || null;
  }

  // 기존 몬스터의 ID는 가능하면 그대로 유지
  const correctedFloor1 = floor1Data.map(info => {
    const previous = findOldMonster(info.name);

    let id;

    if (
      previous &&
      previous.id !== undefined &&
      previous.id !== null &&
      !usedIds.has(previous.id)
    ) {
      id = previous.id;
      usedIds.add(id);
    } else {
      id = createId();
    }

    return {
      id: id,
      name: info.name,
      level: info.level,
      hp: info.hp,
      exp: null,
      location: LOCATION,
      respawn: info.respawn,
      drops: [...info.drops],
      image:
        previous &&
        previous.name === info.name
          ? previous.image || ""
          : "",
      description: info.description
    };
  });

  // 기존 1층 항목만 교체
  // 나머지 지역과 2~5층은 그대로 유지
  monsterData.splice(
    0,
    monsterData.length,
    ...otherMonsters,
    ...correctedFloor1
  );

  /* ==============================================
     NPC 제작 정보

     기존 도감 구조를 변경하지 않기 위해
     관련 몬스터 설명에만 추가합니다.
  ============================================== */

  const ringRecipe =
    " NPC 에드반트(등대던전 1층): " +
    "낡은여자반지 1개(거래불가) + " +
    "여성의뼈 1개(거래불가) → " +
    "영혼의링(민첩2, 거래불가).";

  monsterData.forEach(monster => {
    if (
      monster.location === LOCATION &&
      [
        "실험용우파",
        "숲지동그리",
        "은둔자",
        "지하거미",
        "왜소한해골"
      ].includes(monster.name)
    ) {
      monster.description += ringRecipe;
    }
  });

  /* ==============================================
     화이트스컬 시간 수정

     원본 자료의 15시간? 은 추정치이므로
     확정 시간이 아닌 약 15시간으로 표시
  ============================================== */

  monsterData.forEach(monster => {
    if (
      monster.name === "화이트스컬" &&
      String(monster.location || "")
        .includes("등대던전 2")
    ) {
      monster.respawn = "약 15시간 (추정)";
    }
  });

  /* ==============================================
     3층 스펙터 이름 오타 수정
  ============================================== */

  monsterData.forEach(monster => {
    if (
      monster.name === "스팩터" &&
      String(monster.location || "")
        .includes("등대던전 3")
    ) {
      monster.name = "스펙터";
    }
  });

  /* ==============================================
     적용 확인
  ============================================== */

  const floor1Count = monsterData.filter(
    isFloor1
  ).length;

  const duplicateCheck = new Set();

  const duplicates = monsterData.filter(monster => {
    const key =
      String(monster.name) +
      "|" +
      String(monster.location);

    if (duplicateCheck.has(key)) {
      return true;
    }

    duplicateCheck.add(key);
    return false;
  });

  console.log(
    "✅ IMO.ONYX 몬스터 도감 최종 보완 완료"
  );

  console.log(
    "등대던전 1층:",
    floor1Count + "종"
  );

  console.log(
    "전체 몬스터:",
    monsterData.length + "종"
  );

  if (duplicates.length > 0) {
    console.warn(
      "중복 확인이 필요한 몬스터:",
      duplicates.map(m =>
        m.name + " / " + m.location
      )
    );
  }

})();

/* IMO.ONYX 등대던전 1~5층 지도 연결기능
   기존 monsters.js 맨 아래에 추가
   기존 코드 삭제 금지
*/
(function () {
  "use strict";

  if (window.__IMO_ONYX_LIGHTHOUSE_MAP_V1__) return;
  window.__IMO_ONYX_LIGHTHOUSE_MAP_V1__ = true;

  const PREFIX = "imo_onyx_lighthouse_v1_";
  const floors = [1, 2, 3, 4, 5];

  const extra = {
    1: [
      "윙프릴섬 해변에서 입장",
      "에드반트 NPC: 영혼의링 제작",
      "복수자 시로 NPC: 매드가의버클 제작",
      "2층으로 이어지는 통로"
    ],
    2: [
      "1층·3층으로 이어지는 통로",
      "동굴 NPC 및 시아·매드가 관련 묘지 위치는 원본 지도를 참고"
    ],
    3: [
      "고대의석상에서 신비한씨앗 1개로 4층 이동",
      "관련 퀘스트 완료 시 4층 무료 입장 가능",
      "시라스/라노스 항해사: 3~4층 관련 퀘스트"
    ],
    4: [
      "3층으로 돌아가는 통로와 5층으로 내려가는 통로",
      "고대의석장·호수 관련 지점은 원본 지도를 참고"
    ],
    5: [
      "4층으로 돌아가는 통로",
      "12시 방향 천사의문: 뼈열쇠로 데블랑 방 입장 (열쇠 소모)",
      "전투미이라는 고정 위치별 최대 4개체"
    ]
  };

  const photo = {};
  const marks = {};

  let floor = 1;
  let chosen = "";
  let activePin = -1;
  let placing = false;
  let overlay = null;
  let returnOverflow = "";

  function storageGet(key, fallback) {
    try {
      const value = localStorage.getItem(PREFIX + key);
      return value === null ? fallback : value;
    } catch (_) {
      return fallback;
    }
  }

  function storagePut(key, value) {
    try {
      localStorage.setItem(PREFIX + key, value);
      return true;
    } catch (_) {
      return false;
    }
  }

  function storageRemove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch (_) {}
  }

  function text(v, fallback = "정보 미등록") {
    return v === null || v === undefined || v === ""
      ? fallback
      : String(v);
  }

  function esc(v) {
    return String(v).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function monsterList(f) {
    const source =
      typeof monsterData !== "undefined" &&
      Array.isArray(monsterData)
        ? monsterData
        : [];

    return source.filter(m => {
      const loc = String(m.location || "")
        .replace(/\s/g, "")
        .toLowerCase();

      return (
        loc === "등대던전" + f + "층" ||
        loc === "등대던전" + f + "f"
      );
    }).sort(
      (a, b) =>
        (Number(a.level) || 999) -
        (Number(b.level) || 999)
    );
  }

  function drops(m) {
    return Array.isArray(m.drops)
      ? m.drops.map(v =>
          typeof v === "string"
            ? v
            : v && v.name
              ? String(v.name)
              : ""
        ).filter(Boolean)
      : [];
  }

  function savedPins(f) {
    if (!marks[f]) {
      try {
        const list = JSON.parse(
          storageGet("pins_" + f, "[]")
        );

        marks[f] = Array.isArray(list)
          ? list.filter(p =>
              p &&
              typeof p.name === "string" &&
              Number.isFinite(p.x) &&
              Number.isFinite(p.y) &&
              p.x >= 0 &&
              p.x <= 100 &&
              p.y >= 0 &&
              p.y <= 100
            )
          : [];
      } catch (_) {
        marks[f] = [];
      }
    }

    return marks[f];
  }

  function savedPhoto(f) {
    if (photo[f] === undefined) {
      photo[f] = storageGet("photo_" + f, "");
    }
    return photo[f];
  }

  function notice(message) {
    const output = overlay &&
      overlay.querySelector("#onx-map-notice");

    if (output) {
      output.textContent = message;
    }
  }

  function styleOnce() {
    if (document.getElementById("onx-light-map-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "onx-light-map-style";

    style.textContent = `
      #onx-map-launch {
        display: block;
        margin: 12px auto;
        padding: 12px 18px;
        border-radius: 12px;
        border: 1px solid #d4b369;
        background: #d4b369;
        color: #1c2636;
        font-size: 15px;
        font-weight: 800;
        cursor: pointer;
      }

      #onx-light-map {
        position: fixed;
        inset: 0;
        z-index: 2147483000;
        background: #0e1625;
        color: #eaf0fc;
        overflow: auto;
        overscroll-behavior: contain;
        font-family: inherit;
        font-size: 14px;
      }

      #onx-light-map * {
        box-sizing: border-box;
      }

      #onx-light-map .onx-shell {
        max-width: 900px;
        margin: auto;
        padding: 14px 14px 35px;
      }

      #onx-light-map .onx-top {
        position: sticky;
        top: 0;
        z-index: 4;
        background: #0e1625;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0 13px;
        border-bottom: 1px solid #36445a;
      }

      #onx-light-map h2 {
        font-size: 19px;
        margin: 0;
        flex: 1;
        color: #e9c477;
      }

      #onx-light-map button {
        font: inherit;
        cursor: pointer;
      }

      #onx-light-map .onx-close,
      #onx-light-map .onx-secondary {
        background: #26364f;
        color: #eaf0fc;
        border: 1px solid #60718c;
        border-radius: 10px;
        padding: 10px 12px;
      }

      #onx-light-map .onx-tabs {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
        margin: 17px 0 14px;
      }

      #onx-light-map .onx-tab {
        padding: 12px 2px;
        background: #26364f;
        border: 1px solid #566886;
        border-radius: 10px;
        color: #eaf0fc;
      }

      #onx-light-map .onx-tab.active {
        background: #d5b166;
        color: #182030;
        font-weight: 900;
      }

      #onx-light-map .onx-card {
        background: #182438;
        border: 1px solid #475670;
        border-radius: 14px;
        padding: 14px;
        margin: 12px 0;
      }

      #onx-light-map h3 {
        font-size: 17px;
        margin: 0 0 9px;
        color: #e9c477;
      }

      #onx-light-map .onx-sub {
        color: #b6c3d7;
        line-height: 1.65;
        font-size: 13px;
      }

      #onx-light-map .onx-photo {
        position: relative;
        margin: 12px 0 8px;
        line-height: 0;
        border: 2px solid #ccac6c;
        border-radius: 10px;
        overflow: hidden;
      }

      #onx-light-map .onx-photo img {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
        -webkit-user-drag: none;
      }

      #onx-light-map .onx-photo.placing {
        cursor: crosshair;
        outline: 3px solid #f0cf74;
      }

      #onx-light-map .onx-pin {
        position: absolute;
        transform: translate(-50%, -100%);
        border: 2px solid #fff;
        border-radius: 40px 40px 40px 4px;
        padding: 5px 7px;
        background: #d65d52;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.1;
        white-space: nowrap;
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 0 3px 8px #000a;
      }

      #onx-light-map .onx-pin.selected {
        background: #1b8e9b;
        border-color: #f5d47e;
      }

      #onx-light-map .onx-empty-map {
        border: 2px dashed #667995;
        border-radius: 12px;
        text-align: center;
        color: #ccd7e8;
        padding: 43px 20px;
        margin: 12px 0;
      }

      #onx-light-map .onx-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin: 10px 0;
      }

      #onx-light-map .onx-primary {
        color: #1b2533;
        background: #d6b369;
        border: 0;
        border-radius: 10px;
        font-weight: 800;
        padding: 11px 13px;
      }

      #onx-light-map .onx-list {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(210px, 1fr));
        gap: 8px;
      }

      #onx-light-map .onx-monster {
        text-align: left;
        color: #eaf0fc;
        padding: 12px;
        background: #25344c;
        border: 1px solid #596a86;
        border-radius: 10px;
        line-height: 1.65;
      }

      #onx-light-map .onx-monster.active {
        border: 2px solid #e7bd6c;
      }

      #onx-light-map .onx-hint {
        background: #25344c;
        border-left: 3px solid #e5c078;
        border-radius: 6px;
        padding: 10px 12px;
        line-height: 1.65;
        margin: 6px 0;
      }

      #onx-light-map .onx-detail {
        line-height: 1.8;
        overflow-wrap: anywhere;
      }

      #onx-light-map .onx-detail p {
        margin: 7px 0;
      }

      #onx-light-map .onx-detail strong {
        color: #f1d490;
      }

      #onx-light-map #onx-map-notice {
        color: #f3d594;
        font-size: 13px;
        margin: 7px 0;
      }

      #onx-light-map .onx-muted {
        color: #aebcd1;
        font-size: 12px;
      }

      @media (max-width: 380px) {
        #onx-light-map h2 {
          font-size: 16px;
        }

        #onx-light-map .onx-list {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function close() {
    if (overlay) {
      overlay.remove();
    }

    overlay = null;
    document.body.style.overflow = returnOverflow;
  }

  function open() {
    if (overlay) return;

    styleOnce();

    returnOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    overlay = document.createElement("div");
    overlay.id = "onx-light-map";

    overlay.innerHTML = `
      <div class="onx-shell">
        <div class="onx-top">
          <h2>🗺️ IMO.ONYX 등대던전 지도</h2>

          <button
            class="onx-close"
            data-action="close"
          >✕ 닫기</button>
        </div>

        <div
          class="onx-tabs"
          id="onx-map-tabs"
        ></div>

        <div id="onx-map-content"></div>

        <p
          id="onx-map-notice"
          role="status"
        ></p>

        <input
          type="file"
          id="onx-map-file"
          accept="image/*"
          style="display:none"
        >
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", onClick);

    overlay.querySelector("#onx-map-file")
      .addEventListener("change", onFile);

    draw();
  }

  function draw() {
    if (!overlay) return;

    const mons = monsterList(floor);
    const pins = savedPins(floor);
    const picture = savedPhoto(floor);

    if (!mons.some(m => m.name === chosen)) {
      chosen = "";
    }

    if (activePin >= pins.length) {
      activePin = -1;
    }

    overlay.querySelector("#onx-map-tabs")
      .innerHTML = floors.map(n => `
        <button
          class="onx-tab ${n === floor ? "active" : ""}"
          data-floor="${n}"
        >${n}층</button>
      `).join("");

    const notesHtml = extra[floor]
      .map(s => `
        <div class="onx-hint">${esc(s)}</div>
      `).join("");

    const pinHtml = pins.map((p, i) => `
      <button
        class="onx-pin ${activePin === i ? "selected" : ""}"
        data-pin="${i}"
        style="left:${p.x}%;top:${p.y}%"
        title="${esc(p.name)} 출현 위치"
      >${esc(p.name)}</button>
    `).join("");

    const mapHtml = picture
      ? `
        <div
          class="onx-photo ${placing ? "placing" : ""}"
          id="onx-map-photo"
        >
          <img
            src="${picture}"
            alt="등대던전 ${floor}층 지도 사진"
          >
          ${pinHtml}
        </div>
      `
      : `
        <div class="onx-empty-map">
          📷 ${floor}층 지도 사진이
          아직 연결되지 않았어요.

          <p>
            아래 사진 등록 버튼으로
            갤러리의 지도를 선택해 주세요.
          </p>
        </div>
      `;

    const selected = mons.find(
      m => m.name === chosen
    );

    const details = selected
      ? `
        <div
          class="onx-card onx-detail"
          id="onx-map-details"
        >
          <h3>👾 ${esc(selected.name)}</h3>

          <p>
            ⚔️ Lv.${esc(text(selected.level))}
            · ❤️ HP ${esc(text(selected.hp))}
            · ⭐ EXP ${esc(text(selected.exp))}
          </p>

          <p>
            🗺️ 출현:
            ${esc(text(selected.location))}
          </p>

          <p>
            ⏱️ 재부활:
            ${esc(text(selected.respawn))}
          </p>

          <p>
            🎁 <strong>드롭:</strong>
            ${esc(
              drops(selected).join(", ") ||
              "정보 미등록"
            )}
          </p>

          <p>
            📖 ${esc(text(selected.description))}
          </p>

          <div class="onx-actions">
            <button
              class="onx-primary"
              data-action="place"
            >
              📍 이 몬스터 위치 찍기
            </button>

            <button
              class="onx-secondary"
              data-action="back-to-book"
            >
              🔍 기존 도감에서 검색
            </button>
          </div>

          ${
            activePin >= 0 &&
            pins[activePin].name === selected.name
              ? `
                <button
                  class="onx-secondary"
                  data-action="delete-pin"
                >선택한 위치 핀 삭제</button>
              `
              : ""
          }
        </div>
      `
      : "";

    const monsterButtons = mons.map(
      (m, i) => `
        <button
          class="onx-monster ${
            chosen === m.name ? "active" : ""
          }"
          data-monster="${i}"
        >
          👾 <b>${esc(m.name)}</b>

          <div class="onx-muted">
            Lv.${esc(text(m.level))}
            · HP ${esc(text(m.hp))}
            · 리젠 ${esc(text(m.respawn))}
          </div>
        </button>
      `
    ).join("");

    overlay.querySelector("#onx-map-content")
      .innerHTML = `
        <div class="onx-card">
          <h3>
            📍 ${floor}층
            · 출현 몬스터 ${mons.length}종
            · 등록한 핀 ${pins.length}개
          </h3>

          <p class="onx-sub">
            사진 위 원하는 위치에
            몬스터 표시를 남길 수 있어요.
            정확하지 않은 좌표를
            자동으로 만들지 않습니다.
          </p>

          ${mapHtml}

          <div class="onx-actions">
            <button
              class="onx-primary"
              data-action="pick-photo"
            >
              📷 ${floor}층 지도 사진 등록/변경
            </button>

            ${
              picture
                ? `
                  <button
                    class="onx-secondary"
                    data-action="delete-photo"
                  >
                    지도 사진 삭제
                  </button>
                `
                : ""
            }

            ${
              placing
                ? `
                  <button
                    class="onx-secondary"
                    data-action="cancel-place"
                  >
                    위치 찍기 취소
                  </button>
                `
                : ""
            }
          </div>

          <p class="onx-sub">
            ${
              placing
                ? "📍 이제 사진에서 " +
                  esc(chosen) +
                  "가 출현하는 위치를 터치하세요."
                : "사용법: 아래 몬스터 선택 → " +
                  "위치 찍기 → 지도에서 출현 지점 터치"
            }
          </p>
        </div>

        <div class="onx-card">
          <h3>🚪 ${floor}층 이동·NPC 안내</h3>

          ${notesHtml}

          <p class="onx-muted">
            정확한 NPC 좌표는
            지도 사진을 기준으로
            확인해 주세요.
          </p>
        </div>

        <div class="onx-card">
          <h3>👹 ${floor}층 몬스터 목록</h3>

          <div class="onx-list">
            ${
              monsterButtons ||
              "<p>등록된 몬스터가 없습니다.</p>"
            }
          </div>
        </div>

        ${details}

        <p class="onx-muted">
          📱 지도 사진과 핀은
          이 휴대폰의 미리보기 브라우저에
          저장됩니다.
          길드원에게 자동 공유되지는 않아요.
          브라우저 데이터를 지우면
          사라질 수 있어요.
        </p>
      `;
  }

  function onClick(event) {
    const element = event.target.closest("button");

    if (element && element.dataset.floor) {
      floor = Number(element.dataset.floor);

      chosen = "";
      activePin = -1;
      placing = false;

      draw();
      overlay.scrollTo(0, 0);
      return;
    }

    if (
      element &&
      element.dataset.monster !== undefined
    ) {
      const m = monsterList(floor)[
        Number(element.dataset.monster)
      ];

      if (m) {
        chosen = m.name;
        activePin = -1;
        placing = false;

        draw();

        const details = overlay.querySelector(
          "#onx-map-details"
        );

        if (details) {
          details.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }

      return;
    }

    if (
      element &&
      element.dataset.pin !== undefined
    ) {
      const index = Number(element.dataset.pin);
      const p = savedPins(floor)[index];

      if (p) {
        chosen = p.name;
        activePin = index;
        placing = false;

        draw();

        const details = overlay.querySelector(
          "#onx-map-details"
        );

        if (details) {
          details.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }

      return;
    }

    const action = element &&
      element.dataset.action;

    if (action === "close") {
      close();
      return;
    }

    if (action === "pick-photo") {
      overlay.querySelector("#onx-map-file")
        .click();
      return;
    }

    if (action === "delete-photo") {
      if (confirm(
        floor +
        "층 지도 사진을 삭제할까요? " +
        "(몬스터 핀은 남습니다)"
      )) {
        photo[floor] = "";

        storageRemove("photo_" + floor);

        placing = false;
        draw();
      }

      return;
    }

    if (action === "place") {
      if (!savedPhoto(floor)) {
        notice(
          "먼저 이 층 지도 사진을 등록해 주세요."
        );
        return;
      }

      placing = true;
      activePin = -1;

      draw();

      const p = overlay.querySelector(
        "#onx-map-photo"
      );

      if (p) {
        p.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

      return;
    }

    if (action === "cancel-place") {
      placing = false;
      draw();
      return;
    }

    if (action === "delete-pin") {
      if (
        activePin >= 0 &&
        confirm("이 몬스터 위치 핀을 삭제할까요?")
      ) {
        savedPins(floor).splice(activePin, 1);

        storagePut(
          "pins_" + floor,
          JSON.stringify(savedPins(floor))
        );

        activePin = -1;

        draw();
      }

      return;
    }

    if (action === "back-to-book") {
      const name = chosen;

      close();

      const input = Array.from(
        document.querySelectorAll("input")
      ).find(i =>
        /search|text/i.test(i.type) &&
        i.offsetParent !== null
      );

      if (input) {
        input.value = name;

        input.dispatchEvent(
          new Event("input", {
            bubbles: true
          })
        );

        input.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

      return;
    }

    const targetMap = event.target.closest(
      "#onx-map-photo"
    );

    if (targetMap && placing && chosen) {
      const rect = targetMap.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x = Math.min(
        100,
        Math.max(
          0,
          100 * (
            event.clientX - rect.left
          ) / rect.width
        )
      );

      const y = Math.min(
        100,
        Math.max(
          0,
          100 * (
            event.clientY - rect.top
          ) / rect.height
        )
      );

      savedPins(floor).push({
        name: chosen,
        x: +x.toFixed(2),
        y: +y.toFixed(2)
      });

      const ok = storagePut(
        "pins_" + floor,
        JSON.stringify(savedPins(floor))
      );

      activePin = savedPins(floor).length - 1;
      placing = false;

      draw();

      notice(
        ok
          ? "📍 위치 핀을 저장했어요!"
          : "📍 핀을 표시했지만 " +
            "브라우저 저장이 제한돼 " +
            "재실행하면 사라질 수 있어요."
      );
    }
  }

  function onFile(event) {
    const file = event.target.files &&
      event.target.files[0];

    event.target.value = "";

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      notice("이미지 파일을 선택해 주세요.");
      return;
    }

    const targetFloor = floor;

    notice("지도 사진을 읽는 중...");

    const reader = new FileReader();

    reader.onerror = () => notice(
      "사진을 읽지 못했어요. " +
      "다른 사진으로 다시 시도해 주세요."
    );

    reader.onload = () => {
      const img = new Image();

      img.onerror = () => notice(
        "사진을 열 수 없습니다. " +
        "JPG 또는 PNG 사진을 사용해 주세요."
      );

      img.onload = () => {
        const scale = Math.min(
          1,
          1200 / img.width,
          1500 / img.height
        );

        const canvas = document.createElement(
          "canvas"
        );

        canvas.width = Math.max(
          1,
          Math.round(img.width * scale)
        );

        canvas.height = Math.max(
          1,
          Math.round(img.height * scale)
        );

        const context = canvas.getContext("2d");

        if (!context) {
          notice(
            "이미지 편집 기능을 사용할 수 없어요."
          );
          return;
        }

        context.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const compressed = canvas.toDataURL(
          "image/jpeg",
          0.70
        );

        photo[targetFloor] = compressed;

        const ok = storagePut(
          "photo_" + targetFloor,
          compressed
        );

        placing = false;

        draw();

        notice(
          ok
            ? "✅ 지도 사진 저장 완료! " +
              "몬스터를 선택하고 위치를 찍어 주세요."
            : "사진은 보이지만 저장공간 제한으로 " +
              "다음 실행 때 사라질 수 있어요."
        );
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  }

  // 지도 화면 실행 기능
  window.openLighthouseMap = open;

  // 기존 몬스터 도감에 지도 버튼 추가
  function addLaunchButton() {
    if (document.getElementById("onx-map-launch")) {
      return;
    }

    const visible = Array.from(
      document.querySelectorAll(
        "h1,h2,h3,h4"
      )
    ).find(node =>
      node.textContent.includes("몬스터 도감") &&
      node.getClientRects().length
    );

    let where = visible;

    if (!where) {
      const container =
        document.querySelector(".container") ||
        document.querySelector("#app");

      if (
        container &&
        container.innerText.includes(
          "IMO.ONYX 몬스터 도감"
        ) &&
        container.innerText.includes(
          "드롭 아이템"
        )
      ) {
        where = container.firstElementChild;
      }
    }

    if (!where) return;

    styleOnce();

    const button = document.createElement(
      "button"
    );

    button.id = "onx-map-launch";
    button.type = "button";

    button.textContent =
      "🗺️ 등대던전 1~5층 지도 보기";

    button.addEventListener(
      "click",
      open
    );

    where.insertAdjacentElement(
      "afterend",
      button
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      addLaunchButton
    );
  } else {
    addLaunchButton();
  }

  // 도감 화면을 다시 열어도 지도 버튼 유지
  let scheduled = false;

  new MutationObserver(() => {
    if (scheduled) return;

    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;
      addLaunchButton();
    });
  }).observe(
    document.documentElement,
    {
      childList: true,
      subtree: true
    }
  );

})();


