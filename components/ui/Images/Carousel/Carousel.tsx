import { useState, useEffect } from 'react'
import CarouselControls from './Controls'
import CarouselItems from './Items'
import { CAROUSEL_ITEM } from '../../../../interfaces/HTML'

type Props = {
  label: string
  carouselItems: CAROUSEL_ITEM[]
  interval?: number
}

function Carousel({ label, carouselItems, interval = 3000 }: Props) {
  const [paused, pausePlay] = useState(false)
  const [step, setStep] = useState(1)
  const SIZE = carouselItems.length

  function increment() {
    step < SIZE ? setStep(step + 1) : setStep(1)
  }

  function decrement() {
    step > 1 ? setStep(step - 1) : setStep(SIZE)
  }

  function play() {
    pausePlay(!paused)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused) increment()
    }, interval)
    return () => clearInterval(timer)
  })

  return (
    <section aria-roledescription="carousel" aria-label={label}>
      <CarouselControls
        paused={paused}
        play={play}
        increment={increment}
        decrement={decrement}
      />
      <CarouselItems items={carouselItems} step={step} play={play} />
    </section>
  )
}
export default Carousel
