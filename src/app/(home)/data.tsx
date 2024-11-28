import { StaticImageData } from 'next/image'
import demo1 from '@/assets/images/demo/1.png'
import demo2 from '@/assets/images/demo/2.png'
import demo3 from '@/assets/images/demo/3.png'
import demo4 from '@/assets/images/demo/4.png'
import demo5 from '@/assets/images/demo/5.png'
import demo6 from '@/assets/images/demo/6.png'

type ComingSoonType = {
  name: string
  image: StaticImageData
  path: string
}

export const comingSoonData: ComingSoonType[] = [
  {
    name: 'Index 1',
    image: demo1,
    path: '/demos/coming-soon-1',
  },
  {
    name: 'Index 2',
    image: demo2,
    path: '/demos/coming-soon-2',
  },
  {
    name: 'Index 3',
    image: demo3,
    path: '/demos/coming-soon-3',
  },
  {
    name: 'Index 4',
    image: demo4,
    path: '/demos/coming-soon-4',
  },
  {
    name: 'Index 5',
    image: demo5,
    path: '/demos/coming-soon-5',
  },
  {
    name: 'Index 6',
    image: demo6,
    path: '/demos/coming-soon-6',
  },
]
