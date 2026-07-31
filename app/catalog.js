export const commercialProducts = {
  product01: {
    type: "Commercial Product",
    num: "PRODUCT 01",
    title: "RF Beauty Device",
    sub: "Professional RF Beauty System",
    image: "/product01.png",
    overview:
      "전문적인 피부 관리 환경을 위해 설계된 고주파 RF 기반 상용 장비입니다. 정밀한 출력 제어와 사용자 중심의 운용 환경을 바탕으로 안정적인 시술 및 제품 운용을 지원합니다.",
    features: [
      "정밀 RF 출력 제어",
      "사용자 중심 인터페이스",
      "안정적인 장시간 운용",
      "제품 맞춤형 구성 지원"
    ],
    specs: [
      ["제품 구분", "전문가용 RF 장비"],
      ["제어 방식", "디지털 출력 제어"],
      ["적용 분야", "의료·뷰티 디바이스"],
      ["공급 형태", "제품 사양 협의"]
    ],
    applications: [
      "전문 피부 관리",
      "RF Beauty System",
      "맞춤형 OEM·ODM 제품"
    ]
  },

  product02: {
    type: "Commercial Product",
    num: "PRODUCT 02",
    title: "RF Handpiece System",
    sub: "Multi-Frequency RF Handpiece",
    image: "/product02.png",
    overview:
      "다양한 시술 환경에 적용할 수 있도록 설계된 전문 RF 핸드피스 시스템입니다. 안정적인 에너지 전달과 인체공학적 구조를 고려하여 개발합니다.",
    features: [
      "다중 주파수 대응",
      "안정적인 에너지 전달",
      "교체형 핸드피스 구성",
      "인체공학적 외형 설계"
    ],
    specs: [
      ["제품 구분", "RF Handpiece Platform"],
      ["운용 방식", "장비 연동형"],
      ["출력 구성", "다중 출력 모드"],
      ["공급 형태", "제품 사양 협의"]
    ],
    applications: [
      "RF 미용 장비",
      "전문가용 핸드피스",
      "맞춤형 카트리지 시스템"
    ]
  },

  product03: {
    type: "Commercial Product",
    num: "PRODUCT 03",
    title: "LED Care System",
    sub: "Professional LED Care Device",
    image: "/product03.png",
    overview:
      "다양한 LED 파장과 밝기 제어 기능을 적용한 전문가용 케어 시스템입니다. 제품 목적에 맞는 파장 구성과 동작 프로그램을 적용할 수 있습니다.",
    features: [
      "다중 LED 파장 지원",
      "단계별 광량 제어",
      "프로그램 모드 운용",
      "제품 맞춤형 외형 적용"
    ],
    specs: [
      ["광원", "Multi-Wavelength LED"],
      ["제어", "Digital Intensity Control"],
      ["동작", "Program Mode"],
      ["공급 형태", "제품 사양 협의"]
    ],
    applications: [
      "LED 피부 관리",
      "광 기반 케어 시스템",
      "맞춤형 LED 장비"
    ]
  }
};

export const pcbBoards = {
  board01: {
    type: "PCB Solution",
    num: "BOARD 01",
    title: "Cooling Mono RF Board",
    sub: "6.78 MHz High-Precision RF Control Platform",
    tagline: "의료·뷰티 RF 시스템을 위한 고정밀 제어 및 파워 플랫폼",
    image: "/board01.png",

    overview:
      "32-bit ARM Cortex-M4 MCU와 FPGA의 듀얼 프로세싱 아키텍처를 기반으로, 정밀 RF 출력 제어·실시간 계측·다중 안전 모니터링 기능을 하나의 6-Layer PCB에 통합한 RF 제어 보드입니다.",

    generalInfo: [
      ["PCB Structure", "6-Layer PCB"],
      ["Main Input", "48 VDC"],
      ["RF Frequency", "6.78 MHz"],
      ["Maximum Output", "200 Watt"],
      ["Control Structure", "ARM Cortex-M4 MCU + FPGA"],
      ["Output Control", "16-bit Precision DAC"],
      ["Main Application", "Medical & Beauty RF System"]
    ],

    environment: [
      ["Operating Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Storage Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Operating Humidity", "적용 제품 요구사항에 따라 협의"],
      ["Storage Humidity", "적용 제품 요구사항에 따라 협의"]
    ],

    applications: [
      "Medical RF System",
      "Beauty RF System",
      "Cooling Mono RF Device",
      "Custom OEM RF Platform"
    ],

    specGroups: [
      {
        title: "RF Output",
        rows: [
          ["Operating Frequency", "6.78 MHz"],
          ["Output Waveform", "Sine Wave"],
          ["Maximum Output Power", "200 Watt"],
          ["Load Impedance Range", "75–400 Ω"],
          ["Nominal Load", "250 Ω"],
          ["Power Control", "16-bit Precision Control"],
          ["Dual Output", "Supported"]
        ]
      },
      {
        title: "Processor",
        rows: [
          ["Main Processor", "32-bit ARM Cortex-M4 MCU"],
          ["Logic Processor", "Low-Power FPGA"],
          ["Processing Structure", "MCU + FPGA Dual Processing"]
        ]
      },
      {
        title: "Measurement & Control",
        rows: [
          ["Main Measurement ADC", "16-bit High-Speed Multi-Channel ADC"],
          ["Auxiliary ADC", "12-bit Multi-Channel ADC"],
          ["Output Control DAC", "16-bit Precision DAC"],
          ["Measurement Signals", "RF Current / Voltage / Phase"],
          ["Feedback Control", "Real-Time Measurement Feedback"]
        ]
      },
      {
        title: "Communication",
        rows: [
          ["Serial Communication", "RS232 최대 6채널"],
          ["Internal Communication", "SPI"],
          ["LCD Communication", "Supported"],
          ["I/O Expansion", "SPI I/O Expander"],
          ["External Interface", "Handpiece / Foot Switch / External Device"]
        ]
      },
      {
        title: "Power Sources",
        rows: [
          ["Main Input", "48 VDC"],
          ["Internal Power Rails", "13종"],
          ["Power Rail Range", "+48 V ~ +1.2 V, ±12 V, ±5 V 등"],
          ["Isolated Power", "Isolated DC-DC Converter"],
          ["RF Power Switching", "SiC MOSFET"],
          ["Low-Noise Power", "아날로그 회로 전용 클린 전원 공급"]
        ]
      },
      {
        title: "Monitoring & Protection",
        rows: [
          ["Temperature Monitoring", "4채널 실시간 온도 감시"],
          ["Current Monitoring", "Detection / Output / Power 다중 채널"],
          ["PLL Lock Monitoring", "Supported"],
          ["Pressure / Level Input", "2 Channels"],
          ["Foot Switch Input", "2 Channels"],
          ["Discharge Circuit", "Supported"],
          ["Watchdog", "Supported"],
          ["Thermal Shutdown", "60 °C"],
          ["Monitoring Structure", "다중 안전 모니터링"]
        ]
      },
      {
        title: "Customization & Technical Support",
        rows: [
          ["Circuit Customization", "고객 요구사항에 따른 회로 설계 변경 지원"],
          ["Firmware Customization", "운용 조건에 따른 제어 펌웨어 개발 지원"],
          ["LCD Interface", "LCD 통신 및 사용자 인터페이스 연동 지원"],
          ["External Interface", "핸드피스 및 외부 장치 인터페이스 변경 지원"],
          ["Test & Inspection", "제품 시험 및 검사 과정의 기술 대응 지원"],
          ["Technical Documents", "시험 및 인증 준비에 필요한 기술 자료 전달 가능"],
          ["Medical Device Standards", "의료기기 관련 규격 요구사항을 고려한 설계 및 개발 지원"]
        ]
      }
    ]
  },

  board02: {
    type: "PCB Solution",
    num: "BOARD 02",
    title: "Dynamic Bipolar RF Board",
    sub: "Quad-Channel Bipolar RF Generator Platform",
    tagline: "4채널 독립 출력을 지원하는 피부의료용 Bipolar RF 플랫폼",
    image: "/board02.png",

    overview:
      "4개의 독립 RF 출력 채널을 기반으로 각 채널당 최대 50 W의 Bipolar RF 출력을 지원하며, 채널별로 1 MHz와 2 MHz 주파수를 선택할 수 있도록 설계된 멀티채널 RF Generator Board입니다.",

    generalInfo: [
      ["Board Type", "Quad-Channel Bipolar RF Generator"],
      ["Main Input", "48 VDC"],
      ["RF Frequency", "1 MHz / 2 MHz"],
      ["Output Channels", "4 Channels"],
      ["Output per Channel", "50 Watt"],
      ["Total Output", "Maximum 200 Watt"],
      ["Nominal Load", "250 Ω"],
      ["Control Structure", "STM32F405VG MCU + Cyclone 10 LP FPGA"],
      ["Main Application", "Medical & Beauty Bipolar RF System"]
    ],

    environment: [
      ["Operating Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Storage Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Operating Humidity", "적용 제품 요구사항에 따라 협의"],
      ["Storage Humidity", "적용 제품 요구사항에 따라 협의"]
    ],

    applications: [
      "Dynamic Bipolar RF Device",
      "Multipolar RF System",
      "Medical RF Skin Care System",
      "Custom OEM RF Platform"
    ],

    specGroups: [
      {
        title: "RF Output",
        rows: [
          ["Output Type", "Bipolar RF"],
          ["Operating Frequency", "1 MHz / 2 MHz"],
          ["Output Channels", "4 Independent Channels"],
          ["Output Power", "50 Watt per Channel"],
          ["Total Output Power", "Maximum 200 Watt"],
          ["Nominal Load", "250 Ω"],
          ["Frequency Selection", "Channel-by-Channel Selection"],
          ["Handpiece Support", "Bipolar Handpiece 4 Types"]
        ]
      },
      {
        title: "Processor",
        rows: [
          ["Main Processor", "STM32F405VG"],
          ["Processor Core", "32-bit ARM Cortex-M4"],
          ["Logic Processor", "Cyclone 10 LP FPGA"],
          ["FPGA Device", "10CL006YE144"],
          ["Processing Structure", "MCU + FPGA Dual Processing"]
        ]
      },
      {
        title: "Measurement & Control",
        rows: [
          ["Current Measurement", "4-Channel Output Current Monitoring"],
          ["Current Detection", "4-Channel Detection Current Monitoring"],
          ["Measurement ADC", "MCP3464RT 16-bit Multi-Channel ADC"],
          ["Signal Amplifier", "AD8226 Instrumentation Amplifier"],
          ["Power Adjustment", "AD5272 Digital Potentiometer"],
          ["Output Control", "Independent Channel Control"],
          ["PLL Lock Monitoring", "Supported"]
        ]
      },
      {
        title: "Communication",
        rows: [
          ["Serial Communication", "RS232 / UART"],
          ["MCU UART", "USART2 / USART3 / USART6"],
          ["MCU-FPGA Communication", "UART"],
          ["Measurement Interface", "SPI"],
          ["External Interface", "Foot Switch / Handpiece / External Device"],
          ["Foot Switch Input", "2 Channels"]
        ]
      },
      {
        title: "Power Sources",
        rows: [
          ["Main Input", "48 VDC"],
          ["Internal Power", "5 VDC / 3.3 VDC / ±12 VDC"],
          ["Variable DC Output", "4 Independent DC Power Outputs"],
          ["DC-DC Controller", "LM70880-Q1"],
          ["Output Adjustment", "AD5272 Digital Potentiometer"],
          ["RF Gate Supply", "12 VDC"],
          ["Power Monitoring", "Current and DC Output Monitoring"]
        ]
      },
      {
        title: "RF Power Stage",
        rows: [
          ["RF Channels", "4 Independent Channels"],
          ["Gate Driver", "IX4310TTR"],
          ["Power MOSFET", "IPB600N25N3G"],
          ["Channel Structure", "Push-Pull Bipolar RF Amplifier"],
          ["Output Transformer", "Custom RF Transformer"],
          ["Matching Network", "Channel-Specific LC Matching Circuit"],
          ["Heat Dissipation", "FET 및 전원부 방열판 적용 구조"]
        ]
      },
      {
        title: "Monitoring & Protection",
        rows: [
          ["Current Monitoring", "4-Channel Real-Time Monitoring"],
          ["PLL Lock Detection", "Supported"],
          ["Watchdog", "Supported"],
          ["System Reset", "Automatic Reset Support"],
          ["Foot Switch Monitoring", "2 Channels"],
          ["DC Power Enable", "Independent Control"],
          ["Thermal Design", "RF FET 및 DC-DC 전원부 방열 구조 적용"],
          ["Monitoring Structure", "다중 안전 모니터링"]
        ]
      },
      {
        title: "Customization & Technical Support",
        rows: [
          ["Circuit Customization", "고객 요구사항에 따른 회로 설계 변경 지원"],
          ["Firmware Customization", "채널 제어 및 동작 조건에 따른 펌웨어 개발 지원"],
          ["Frequency Customization", "RF 주파수 및 채널 운용 조건 변경 지원"],
          ["Handpiece Interface", "Bipolar 핸드피스 인터페이스 변경 지원"],
          ["LCD Interface", "LCD 통신 및 사용자 인터페이스 연동 지원"],
          ["Test & Inspection", "제품 시험 및 검사 과정의 기술 대응 지원"],
          ["Technical Documents", "시험 및 인증 준비에 필요한 기술 자료 전달 가능"],
          ["Medical Device Standards", "의료기기 관련 규격 요구사항을 고려한 설계 및 개발 지원"]
        ]
      }
    ]
  },

  board03: {
    type: "PCB Solution",
    num: "BOARD 03",
    title: "HKC Board",
    sub: "Multi-Frequency Mono / Bipolar RF Platform",
    tagline:
      "1 MHz, 1.5 MHz, 2 MHz를 지원하는 Mono / Bipolar RF 통합 제어 보드",
    image: "/board03.png",

    overview:
      "STM32F405 기반 메인 제어 구조와 다중 주파수 RF 생성 회로를 기반으로, Monopolar 및 Bipolar 핸드피스를 모두 지원하도록 설계된 RF Generator Board입니다. 1 MHz, 1.5 MHz, 2 MHz 주파수 선택, RF 출력 제어, 전류 모니터링, 통신 및 전원 관리를 하나의 플랫폼에 통합했습니다.",

    generalInfo: [
      ["Board Type", "Mono / Bipolar RF Generator Board"],
      ["Input Voltage", "35–55 VDC"],
      ["RF Frequency", "1 MHz / 1.5 MHz / 2 MHz"],
      ["RF Mode", "Monopolar / Bipolar"],
      ["Handpiece Support", "Mono 1종 / Bipolar 3종"],
      ["Main Processor", "STM32F405VGT6"],
      ["Output Control", "Digital Potentiometer Control"],
      ["Communication", "RS232 / UART"],
      ["Main Application", "Medical & Beauty RF System"]
    ],

    environment: [
      ["Operating Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Storage Temperature", "적용 제품 요구사항에 따라 협의"],
      ["Operating Humidity", "적용 제품 요구사항에 따라 협의"],
      ["Storage Humidity", "적용 제품 요구사항에 따라 협의"]
    ],

    applications: [
      "Mono RF Beauty System",
      "Bipolar RF Beauty System",
      "Multi-Frequency RF Device",
      "Custom OEM RF Platform"
    ],

    specGroups: [
      {
        title: "RF Output",
        rows: [
          ["Output Type", "Monopolar / Bipolar RF"],
          ["Operating Frequency", "1 MHz / 1.5 MHz / 2 MHz"],
          ["Frequency Selection", "Selectable by Control Logic"],
          ["Monopolar Output", "Supported"],
          ["Bipolar Output", "3 Handpiece Channels"],
          ["Output Structure", "Single RF Amplifier Platform"],
          ["RF Output Monitoring", "Supported"]
        ]
      },
      {
        title: "Processor",
        rows: [
          ["Main Processor", "STM32F405VGT6"],
          ["Processor Core", "32-bit ARM Cortex-M4"],
          ["Clock", "8 MHz Main Oscillator"],
          ["Memory", "External EEPROM Support"],
          ["Watchdog", "Supported"],
          ["Debug Interface", "JTAG / SWD"]
        ]
      },
      {
        title: "Frequency Control",
        rows: [
          ["Frequency Modes", "1 MHz / 1.5 MHz / 2 MHz"],
          ["Frequency Selection Logic", "Digital Logic Control"],
          ["Frequency Enable", "Supported"],
          ["High / Low Frequency Output", "Supported"],
          ["RF Timing Control", "Digital Logic Circuit"],
          ["Frequency Feedback", "Monitoring Support"]
        ]
      },
      {
        title: "Measurement & Control",
        rows: [
          ["Current Measurement", "RF Output Current Monitoring"],
          ["Current Sensor", "Instrumentation Amplifier Based"],
          ["Output Adjustment", "AD5272 Digital Potentiometer"],
          ["Power Good Monitoring", "Supported"],
          ["Current Monitor Output", "Supported"],
          ["Relay Control", "3 Channels"],
          ["Handpiece Selection", "Mono / Bipolar Selection"]
        ]
      },
      {
        title: "Communication",
        rows: [
          ["Serial Communication", "RS232 / UART"],
          ["UART Channels", "USART2 / USART3"],
          ["External Communication", "MAX3232 RS232 Transceiver"],
          ["USB Debug", "FT231XS USB-UART"],
          ["External Interface", "LCD / External Controller"],
          ["Firmware Development", "Custom Firmware Available"]
        ]
      },
      {
        title: "Power Sources",
        rows: [
          ["Main Input", "35–55 VDC"],
          ["Primary DC Output", "Variable DC Output"],
          ["Internal Power", "15 VDC / -15 VDC / 5 VDC / 3.3 VDC"],
          ["DC-DC Controller", "LT8390"],
          ["Output Adjustment", "AD5272 Digital Potentiometer"],
          ["Isolated Power", "Isolated 5 VDC Supply"],
          ["Fan Output", "4 Channels"]
        ]
      },
      {
        title: "RF Power Stage",
        rows: [
          ["RF Amplifier", "Single RF Amplifier"],
          ["Gate Driver", "UCC27614"],
          ["Power Transistor", "High-Speed RF Power Transistor"],
          ["Output Transformer", "Custom RF Transformer"],
          ["Matching Network", "Frequency-Selectable LC Network"],
          ["Handpiece Output", "Mono 1 / Bipolar 3"],
          ["Heat Dissipation", "FET Bottom-Side Heatsink Structure"]
        ]
      },
      {
        title: "Monitoring & Protection",
        rows: [
          ["Output Current Monitoring", "Supported"],
          ["DC-DC Power Good", "Supported"],
          ["DC-DC Current Monitor", "Supported"],
          ["Watchdog Monitoring", "Supported"],
          ["Relay Status Control", "3 Channels"],
          ["Fan Control", "4 Channels"],
          ["Isolation", "Digital Isolator Applied"],
          ["Monitoring Structure", "다중 안전 모니터링"]
        ]
      },
      {
        title: "Customization & Technical Support",
        rows: [
          [
            "Circuit Customization",
            "고객 요구사항에 따른 회로 설계 변경 지원"
          ],
          [
            "Firmware Customization",
            "주파수 선택 및 핸드피스 제어 펌웨어 개발 지원"
          ],
          [
            "Frequency Customization",
            "1 MHz / 1.5 MHz / 2 MHz 운용 조건 변경 지원"
          ],
          [
            "Handpiece Interface",
            "Mono 및 Bipolar 핸드피스 인터페이스 변경 지원"
          ],
          [
            "LCD Interface",
            "LCD 통신 및 사용자 인터페이스 연동 지원"
          ],
          [
            "Test & Inspection",
            "제품 시험 및 검사 과정의 기술 대응 지원"
          ],
          [
            "Technical Documents",
            "시험 및 인증 준비에 필요한 기술 자료 전달 가능"
          ],
          [
            "Medical Device Standards",
            "의료기기 관련 규격 요구사항을 고려한 설계 및 개발 지원"
          ]
        ]
      }
    ]
  },

  board04: {
    type: "PCB Solution",
    num: "BOARD 04",
    title: "LED Driver Board",
    sub: "RGB LED Control Platform",
    image: "/board04.png",
    overview:
      "RGB LED 및 LED Bar의 색상, 밝기, 동작 모드를 제어하는 전용 보드입니다.",
    features: [
      "RGB 색상 제어",
      "PWM 밝기 제어",
      "다양한 표시 모드",
      "상태 표시 기능"
    ],
    specs: [
      ["광원", "RGB LED Driver"],
      ["밝기 제어", "PWM Control"],
      ["동작", "Multi-Mode"],
      ["통신", "Board Communication"]
    ],
    applications: [
      "제품 상태 표시",
      "LED Bar 제어",
      "미용·의료 장비 조명"
    ]
  },

  board05: {
    type: "PCB Solution",
    num: "BOARD 05",
    title: "Sensor Interface Board",
    sub: "Sensor & ADC Interface",
    image: "/board05.png",
    overview:
      "온도, IMU, ADC 등 다양한 센서 신호를 수집하고 처리하는 인터페이스 보드입니다.",
    features: [
      "다중 센서 입력",
      "아날로그 신호 수집",
      "디지털 필터링",
      "메인보드 연동"
    ],
    specs: [
      ["센서", "Temperature / IMU"],
      ["변환", "ADC Interface"],
      ["통신", "I2C / SPI"],
      ["신호 처리", "Signal Conditioning"]
    ],
    applications: [
      "온도 측정",
      "동작·자세 감지",
      "아날로그 계측 시스템"
    ]
  },

  board06: {
    type: "PCB Solution",
    num: "BOARD 06",
    title: "Communication Board",
    sub: "UART / CAN / RS485 Interface",
    image: "/board06.png",
    overview:
      "장비 내부 및 외부 시스템과 안정적으로 통신하기 위한 전용 인터페이스 보드입니다.",
    features: [
      "다중 통신 규격",
      "절연 설계 대응",
      "프로토콜 변환",
      "시스템 확장 지원"
    ],
    specs: [
      ["통신 1", "UART"],
      ["통신 2", "CAN"],
      ["통신 3", "RS485"],
      ["프로토콜", "Custom Protocol"]
    ],
    applications: [
      "장비 간 통신",
      "PC·디스플레이 연동",
      "산업용 통신 인터페이스"
    ]
  }
};