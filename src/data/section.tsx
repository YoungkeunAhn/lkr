import AboutUs from 'section/about-us/AboutUs'
import Coupang from 'section/coupang/Coupang'
import Footer from 'section/footer/Footer'
import Intro from 'section/intro/Intro'
import KeyMembers from 'section/key-members/KeyMembers'
import Location from 'section/location/Location'
import Newsroom from 'section/newsroom/Newsroom'
import Process from 'section/process/Process'
import Recruitment from 'section/recruitment/Recruitment'
import SoftwareDevelopment from 'section/software-development/SoftwareDevelopment'
import Vietnam from 'section/vietnam/Vietnam'

type SectionType = {
  id: string
  view: JSX.Element
}

export const sectionList: SectionType[] = [
  {
    id: 'intro',
    view: <Intro />,
  },
  {
    id: 'aboutUs',
    view: <AboutUs />,
  },
  {
    id: 'software',
    view: <SoftwareDevelopment />,
  },
  {
    id: 'process',
    view: <Process />,
  },
  {
    id: 'coupang',
    view: <Coupang />,
  },
  {
    id: 'vietnam',
    view: <Vietnam />,
  },
  {
    id: 'recruitment',
    view: <Recruitment />,
  },
  {
    id: 'key-members',
    view: <KeyMembers />,
  },
  {
    id: 'newsroom',
    view: <Newsroom />,
  },
  {
    id: 'location',
    view: <Location />,
  },
  {
    id: 'footer',
    view: <Footer />,
  },
]
