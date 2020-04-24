import robot0 from '@/assets/images/robot0.jpeg'
import robot1 from '@/assets/images/robot1.jpeg'
import robot2 from '@/assets/images/robot2.jpeg'
import robot3 from '@/assets/images/robot3.jpeg'
import robot4 from '@/assets/images/robot4.jpeg'
import robot5 from '@/assets/images/robot5.jpeg'

import user0 from '@/assets/images/user0.jpeg'
import user1 from '@/assets/images/user1.jpeg'
import user2 from '@/assets/images/user2.jpeg'
import user3 from '@/assets/images/user3.jpeg'
import user4 from '@/assets/images/user4.jpeg'
import user5 from '@/assets/images/user5.jpeg'
import user6 from '@/assets/images/user6.jpeg'
import user7 from '@/assets/images/user7.jpeg'

export type ImageType =
  | 'robot0.jpeg'
  | 'robot1.jpeg'
  | 'robot2.jpeg'
  | 'robot3.jpeg'
  | 'robot4.jpeg'
  | 'robot5.jpeg'
  | 'user0.jpeg'
  | 'user1.jpeg'
  | 'user2.jpeg'
  | 'user3.jpeg'
  | 'user4.jpeg'
  | 'user5.jpeg'
  | 'user6.jpeg'
  | 'user7.jpeg'
  | 'no-robot-image'
  | 'no-user-image'

const images = new Map<ImageType, any>()

images.set('robot0.jpeg', robot0)
images.set('robot1.jpeg', robot1)
images.set('robot2.jpeg', robot2)
images.set('robot3.jpeg', robot3)
images.set('robot4.jpeg', robot4)
images.set('robot5.jpeg', robot5)

images.set('user0.jpeg', user0)
images.set('user1.jpeg', user1)
images.set('user2.jpeg', user2)
images.set('user3.jpeg', user3)
images.set('user4.jpeg', user4)
images.set('user5.jpeg', user5)
images.set('user6.jpeg', user6)
images.set('user7.jpeg', user7)

images.set('no-robot-image', robot0)
images.set('no-user-image', user0)

export { images }
