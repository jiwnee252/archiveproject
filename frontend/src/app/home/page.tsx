'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScreenSize } from '@/hooks/use-screen-size'
import DragElements from '@/fancy/components/blocks/drag-elements'

const urls = [
  '/home_images/image6.jpg',
  '/home_images/image7.jpg',
  '/home_images/image8.jpg',
  '/home_images/image9.jpg',
  '/home_images/image10.jpg',
  '/home_images/image11.jpg',
  '/home_images/image12.jpg',
  '/home_images/image13.jpg',
  '/home_images/image14.jpg',
  '/home_images/image15.jpg',
]

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function HomePage() {
  const screenSize = useScreenSize()
  const [imagePositions, setImagePositions] = useState([])
  const [initialized, setInitialized] = useState(false)

  // 컴포넌트가 처음 마운트될 때만 이미지 위치 초기화
  useEffect(() => {
    // 이미 초기화되었으면 다시 계산하지 않음
    if (initialized) return

    // 브라우저 환경인지 확인 (SSR 방지)
    if (typeof window === 'undefined') return

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    // 각 이미지에 대한 랜덤 위치 생성
    const positions = urls.map(() => {
      // 여백을 고려해 최대 위치값 조정 (화면 바깥으로 넘어가지 않도록)
      // const width = screenSize.lessThan('md') ? randomInt(100, 130) : randomInt(130, 160)
      // const height = screenSize.lessThan('md') ? randomInt(130, 150) : randomInt(160, 190)
      const width = (screenSize.lessThan('md') ? randomInt(100, 130) : randomInt(130, 160)) + 30
      const height = (screenSize.lessThan('md') ? randomInt(130, 150) : randomInt(160, 190)) + 30

      const maxWidth = windowWidth - width - 40 // 이미지 너비와 여백 고려
      const maxHeight = windowHeight - height - 40 // 이미지 높이와 여백 고려

      // 패딩 고려해서 최소값 설정 (화면 바깥에서 시작하지 않도록)
      const paddingX = 20
      const paddingY = 20

      return {
        x: randomInt(paddingX, maxWidth),
        y: randomInt(paddingY, maxHeight),
        rotation: randomInt(-12, 12),
        width: width,
        height: height,
      }
    })

    setImagePositions(positions)
    setInitialized(true)
  }, [screenSize, initialized])

  // 초기화가 안 됐을 때만 로딩 표시
  if (!initialized || imagePositions.length === 0) {
    return <div className="fixed inset-0 flex items-center justify-center font-bold text-xl">Loading...</div>
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <DragElements dragMomentum={false} className="absolute inset-0">
        {urls.map((url, index) => {
          const position = imagePositions[index]

          return (
            <div
              key={index}
              className="absolute flex items-start justify-center bg-white shadow-2xl p-2"
              style={{
                transform: `rotate(${position.rotation}deg)`,
                width: `${position.width}px`,
                height: `${position.height}px`,
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: `${position.width - 4}px`,
                  height: `${position.height - 30}px`,
                }}
              >
                <Image
                  src={url}
                  fill
                  alt={`Analog photo ${index + 1}`}
                  className="object-cover"
                  draggable={false}
                  priority={true}
                />
              </div>
            </div>
          )
        })}
      </DragElements>

      <h1
        className="
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          font-bold text-black dark:text-white z-10
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl select-none
        "
      >
        {/* taro's */}
        {/* <br /> */}
        archive.
      </h1>
    </div>
  )
}
