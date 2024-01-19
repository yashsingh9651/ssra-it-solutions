import { Tilt_Prism,Phudu,Ubuntu,Tektur } from 'next/font/google';

export const tiltPrism = Tilt_Prism({
  subsets: ['latin'],
  weight:'400'
});
export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight:['400','500','700']
});
export const tektur = Tektur({
    subsets: ['latin'],
    weight:['400','500','600','700']
})
export const phudu = Phudu({
  subsets: ['latin'],
  weight:['400','600','700','800']
});