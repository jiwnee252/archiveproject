'use client'

import React, { useEffect, useRef, useState } from 'react'
import { InertiaOptions, motion } from 'motion/react'

type DragElementsProps = {
  children: React.ReactNode
  dragElastic?: number | { top?: number; left?: number; right?: number; bottom?: number } | boolean
  dragConstraints?: { top?: number; left?: number; right?: number; bottom?: number } | React.RefObject<Element>
  dragMomentum?: boolean
  dragTransition?: InertiaOptions
  dragPropagation?: boolean
  selectedOnTop?: boolean
  className?: string
}

const DragElements: React.FC<DragElementsProps> = ({
  children,
  dragElastic = 0,
  dragConstraints,
  dragMomentum = false,
  dragTransition = {
    bounceStiffness: 600,
    bounceDamping: 15,
    power: 0,
    timeConstant: 0,
    restDelta: 0.001,
  },
  dragPropagation = true,
  selectedOnTop = true,
  className,
}) => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [zIndices, setZIndices] = useState<number[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)

  useEffect(() => {
    setZIndices(Array.from({ length: React.Children.count(children) }, (_, i) => i))
  }, [children])

  const bringToFront = (index: number) => {
    if (selectedOnTop) {
      setZIndices((prevIndices) => {
        const newIndices = [...prevIndices]
        const currentIndex = newIndices.indexOf(index)
        newIndices.splice(currentIndex, 1)
        newIndices.push(index)
        return newIndices
      })
    }
  }

  const calculateConstraints = () => {
    if (dragConstraints && typeof dragConstraints !== 'object') {
      return dragConstraints
    }

    return false
  }

  return (
    <div ref={constraintsRef} className={`relative w-full h-full ${className}`}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          drag
          dragElastic={dragElastic}
          dragConstraints={calculateConstraints()}
          dragMomentum={dragMomentum}
          dragTransition={dragTransition}
          dragPropagation={dragPropagation}
          style={{
            zIndex: draggingIndex === index ? 999 : zIndices.indexOf(index),
            cursor: isDragging && draggingIndex === index ? 'grabbing' : 'grab',
          }}
          onDragStart={() => {
            bringToFront(index)
            setIsDragging(true)
            setDraggingIndex(index)
          }}
          onDragEnd={() => {
            setIsDragging(false)
            setDraggingIndex(null)
          }}
          whileTap={{ cursor: 'grabbing' }}
          className={'absolute touch-none'}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

export default DragElements
