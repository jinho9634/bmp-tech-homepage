export const commercialProducts = {
  product01: {
    type: "Commercial Product",
    num: "PRODUCT 01",
    title: "RF Beauty Device",
    sub: "Professional RF Beauty System",
    image: "/product01.png",
    overview: "전문적인 피부 관리 환경을 위해 설계된 고주파 RF 기반 상용 장비입니다. 정밀한 출력 제어와 사용자 중심의 운용 환경을 바탕으로 안정적인 시술 및 제품 운용을 지원합니다.",
    features: ["정밀 RF 출력 제어", "사용자 중심 인터페이스", "안정적인 장시간 운용", "제품 맞춤형 구성 지원"],
    specs: [["제품 구분", "전문가용 RF 장비"], ["제어 방식", "디지털 출력 제어"], ["적용 분야", "의료·뷰티 디바이스"], ["공급 형태", "제품 사양 협의"]],
    applications: ["전문 피부 관리", "RF Beauty System", "맞춤형 OEM·ODM 제품"]
  },
  product02: {
    type: "Commercial Product",
    num: "PRODUCT 02",
    title: "RF Handpiece System",
    sub: "Multi-Frequency RF Handpiece",
    image: "/product02.png",
    overview: "다양한 시술 환경에 적용할 수 있도록 설계된 전문 RF 핸드피스 시스템입니다. 안정적인 에너지 전달과 인체공학적 구조를 고려하여 개발합니다.",
    features: ["다중 주파수 대응", "안정적인 에너지 전달", "교체형 핸드피스 구성", "인체공학적 외형 설계"],
    specs: [["제품 구분", "RF Handpiece Platform"], ["운용 방식", "장비 연동형"], ["출력 구성", "다중 출력 모드"], ["공급 형태", "제품 사양 협의"]],
    applications: ["RF 미용 장비", "전문가용 핸드피스", "맞춤형 카트리지 시스템"]
  },
  product03: {
    type: "Commercial Product",
    num: "PRODUCT 03",
    title: "LED Care System",
    sub: "Professional LED Care Device",
    image: "/product03.png",
    overview: "다양한 LED 파장과 밝기 제어 기능을 적용한 전문가용 케어 시스템입니다. 제품 목적에 맞는 파장 구성과 동작 프로그램을 적용할 수 있습니다.",
    features: ["다중 LED 파장 지원", "단계별 광량 제어", "프로그램 모드 운용", "제품 맞춤형 외형 적용"],
    specs: [["광원", "Multi-Wavelength LED"], ["제어", "Digital Intensity Control"], ["동작", "Program Mode"], ["공급 형태", "제품 사양 협의"]],
    applications: ["LED 피부 관리", "광 기반 케어 시스템", "맞춤형 LED 장비"]
  }
};

export const pcbBoards = {
  board01: { type: "PCB Solution", num: "BOARD 01", title: "RF Generator Board", sub: "RF 신호 생성 및 출력 제어", image: "/board01.png", overview: "고주파 RF 신호 생성과 출력 제어를 위한 핵심 회로 보드입니다. 목표 주파수와 출력 조건에 맞춰 회로 및 PCB를 설계합니다.", features: ["RF 주파수 생성", "출력 레벨 제어", "보호 로직 연동", "시스템 통신 지원"], specs: [["기능", "RF Generator"], ["제어", "Digital Control"], ["주파수", "Custom Frequency"], ["개발 범위", "시제품·양산 대응"]], applications: ["RF Beauty Device", "의료·산업용 RF 시스템", "고주파 출력 장치"] },
  board02: { type: "PCB Solution", num: "BOARD 02", title: "RF Power Board", sub: "High-Power RF Amplifier", image: "/board02.png", overview: "RF 신호를 목표 출력으로 증폭하기 위한 고출력 전력 보드입니다. 출력 안정성과 보호 기능을 고려하여 설계합니다.", features: ["고출력 RF 증폭", "출력 안정화", "전류·온도 보호", "임피던스 조건 대응"], specs: [["기능", "RF Power Stage"], ["보호", "Protection Circuit"], ["모니터링", "Power Monitoring"], ["설계", "Custom Design"]], applications: ["RF 전력 증폭", "의료·뷰티 RF 장비", "산업용 고주파 시스템"] },
  board03: { type: "PCB Solution", num: "BOARD 03", title: "Main Control Board", sub: "Embedded Main Controller", image: "/board03.png", overview: "장비의 동작 순서와 입출력, 통신을 통합 제어하는 메인 제어 보드입니다. 하드웨어와 펌웨어를 연계하여 개발합니다.", features: ["MCU 기반 제어", "다중 입출력", "상태 모니터링", "펌웨어 맞춤 개발"], specs: [["제어부", "Embedded MCU"], ["통신", "UART / CAN / RS485"], ["입출력", "Sensor Interface"], ["소프트웨어", "Custom Firmware"]], applications: ["장비 메인 제어", "모터·센서 통합 제어", "사용자 인터페이스 연동"] },
  board04: { type: "PCB Solution", num: "BOARD 04", title: "LED Driver Board", sub: "RGB LED Control Platform", image: "/board04.png", overview: "RGB LED 및 LED Bar의 색상, 밝기, 동작 모드를 제어하는 전용 보드입니다.", features: ["RGB 색상 제어", "PWM 밝기 제어", "다양한 표시 모드", "상태 표시 기능"], specs: [["광원", "RGB LED Driver"], ["밝기 제어", "PWM Control"], ["동작", "Multi-Mode"], ["통신", "Board Communication"]], applications: ["제품 상태 표시", "LED Bar 제어", "미용·의료 장비 조명"] },
  board05: { type: "PCB Solution", num: "BOARD 05", title: "Sensor Interface Board", sub: "Sensor & ADC Interface", image: "/board05.png", overview: "온도, IMU, ADC 등 다양한 센서 신호를 수집하고 처리하는 인터페이스 보드입니다.", features: ["다중 센서 입력", "아날로그 신호 수집", "디지털 필터링", "메인보드 연동"], specs: [["센서", "Temperature / IMU"], ["변환", "ADC Interface"], ["통신", "I2C / SPI"], ["신호 처리", "Signal Conditioning"]], applications: ["온도 측정", "동작·자세 감지", "아날로그 계측 시스템"] },
  board06: { type: "PCB Solution", num: "BOARD 06", title: "Communication Board", sub: "UART / CAN / RS485 Interface", image: "/board06.png", overview: "장비 내부 및 외부 시스템과 안정적으로 통신하기 위한 전용 인터페이스 보드입니다.", features: ["다중 통신 규격", "절연 설계 대응", "프로토콜 변환", "시스템 확장 지원"], specs: [["통신 1", "UART"], ["통신 2", "CAN"], ["통신 3", "RS485"], ["프로토콜", "Custom Protocol"]], applications: ["장비 간 통신", "PC·디스플레이 연동", "산업용 통신 인터페이스"] }
};
