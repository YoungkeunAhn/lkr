export type ProcessItemType = {
  title: string
  text: string[]
}

export const processItemList: ProcessItemType[] = [
  {
    title: '상담 및 견적',
    text: [
      '모든 초기 단계는 고객과의 협의를 통해 결정합니다. 홈페이지의 제작 목적, 용도, 업종, 기업 이미지 파악후에 기초 정보를 수집하고 분석 후 필요한 프로그래밍과 디자인 견적을 냅니다.',
    ],
  },
  {
    title: '스토리보드 기획, 디자인시안 제작',
    text: [
      '홈페이지에 무엇을 담을 것인지에 대한 구체적인 기획을 세우고, 포인트를 찾아 전체적인 틀을 구성합니다.',
      '설계된 기획안에 따라 디자인 시간을 작성하여 클라이언트와 컨택합니다.',
    ],
  },
  {
    title: '사이트 제작 및 프로그래밍',
    text: [
      '사이트 제작을 시작합니다. 확정된 시안을 가지고 코딩 단계를 거친 후에 프로그램 작업을 진행합니다.',
      '이때 어떻게 표현하느냐에 따라 다양한 결과물로 표현 됩니다.',
    ],
  },
  {
    title: '디자인 제작 시작',
    text: [
      '구체적인 스토리보드와 클라이언트의 의견을 바탕으로 홈페이지를 제작합니다. 중간중간 디자이너와 클라이언트의 의견을 수렴하여 시안이 변경되기도 합니다.',
    ],
  },
  {
    title: '최종 작업 완료 단계',
    text: [
      '프로그램과 홈페이지 제작 최종 작업 완료 확인 후에도 도메인, 호스팅을 확인하여 연결 대기 상태입니다.',
    ],
  },
  {
    title: '기타 수정사항',
    text: [
      '제작 완료 이후 최대 1개월간 클라이언트와 협의를 통하여 잔수정 및 오탈자 보완 작업을 진행합니다. 제작된 자료를 서버에 올려두고 클라이언트와 의견수렴과정을 거쳐 보완 과정을 마무리합니다.',
    ],
  },
]
