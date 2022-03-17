export type SdItemType = {
  icon: string
  title: string
  items: string[]
}
export const sdItemList: SdItemType[] = [
  {
    icon: 'sd_sub_icon1.png',
    title: '프로그램 개발',
    items: ['Program Custom Solution', 'Responsive Web', 'Parallax'],
  },
  {
    icon: 'sd_sub_icon2.png',
    title: '웹사이트 구축 및 유지보수',
    items: ['Program Custom Solution', 'Responsive Web', 'Parallax'],
  },
  {
    icon: 'sd_sub_icon3.png',
    title: '솔루션 개발',
    items: [
      'Search Engine Optimization',
      'Publishing Homeostasis',
      'Security Check',
    ],
  },
  {
    icon: 'sd_sub_icon4.png',
    title: '디자인 개발',
    items: ['Design UI/UX', 'Responsive Web', 'Design Upgrade'],
  },
]
