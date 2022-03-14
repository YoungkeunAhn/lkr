type NavMenuType = {
  title: string
  sectionId: string
  korTitle: string
}

export const navMenu: NavMenuType[] = [
  { title: 'home', sectionId: 'main', korTitle: '메인' },
  { title: 'about us', sectionId: 'aboutUs', korTitle: '엘케이알소개' },
  {
    title: 'software Development',
    sectionId: 'software',
    korTitle: '소프트웨어개발',
  },
  { title: 'process', sectionId: 'process', korTitle: '프로세스' },
  {
    title: 'coupang Solution Service',
    sectionId: 'coupang',
    korTitle: '쿠팡솔루션 서비스',
  },
  {
    title: 'vietnam Solution Service',
    sectionId: 'vietnam',
    korTitle: '베트남 병원 솔루션 서비스',
  },
  { title: 'recruiment', sectionId: 'recruitment', korTitle: '인재채용' },
  { title: 'newsroom', sectionId: 'newsroom', korTitle: '뉴스룸' },
  { title: 'location', sectionId: 'location', korTitle: '찾아오시는길' },
]
