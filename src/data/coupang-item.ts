export type CoupangItemType = {
  icon: string
  title: string
}

export const leftCoupangItems: CoupangItemType[] = [
  { icon: 'coupang_item_icon1.png', title: '상품관리 / 수정' },
  { icon: 'coupang_item_icon2.png', title: '주문 정보 수집' },
  { icon: 'coupang_item_icon3.png', title: '송장 출력 전송' },
  { icon: 'coupang_item_icon4.png', title: '상품 품절 처리' },
  { icon: 'coupang_item_icon5.png', title: 'CS&게시판 관리' },
]

export const rightCoupangItems: CoupangItemType[] = [
  { icon: 'coupang_item_icon6.png', title: '상품별 광고 관리' },
  { icon: 'coupang_item_icon7.png', title: '상품별 매출 분석' },
  { icon: 'coupang_item_icon8.png', title: '상품별 매출 통계' },
  { icon: 'coupang_item_icon9.png', title: '상품별 광고전환율' },
  { icon: 'coupang_item_icon10.png', title: '상품별 판매 순위' },
]
