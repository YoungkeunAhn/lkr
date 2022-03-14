type NewsItemType = {
  category: string
  title: string
  tags: string
  image: string
  size?: 6
}
export const newsItem: NewsItemType[] = [
  {
    category: '공지사항',
    title: '쿠팡 메인페이지에 LKR 솔루션이 소개되었습니다!',
    tags: '#쿠팡솔루션 #국내최초 #우리솔루션최',
    image: 'sd_sub_bg.jpg',
    size: 6,
  },
  {
    category: '공지사항',
    title: '2022년 대형 호스팅서비스 갖출예정...',
    tags: '#호스팅 #국내호스팅 #해외호스',
    image: '',
  },
  {
    category: '공지사항',
    title: '엘케이알 교육사업 시작! 아카데미 1기 오픈합니다',
    tags: '#쿠팡셀러교육 #쿠팡판매자교',
    image: 'aboutUsSubBg.jpg',
  },
  {
    category: '공지사항',
    title: '엘케이알 또 일냈다!',
    tags: '#LKR #프로그램개',
    image: 'sonogram_steps_bg.jpg',
  },
  {
    category: '공지사항',
    title: '빅데이터-AI-클라우드 중심의 첨단 인프라 구축',
    tags: '#LKR #프로그램개',
    image: 'coupang_sub_img.png',
  },
]
