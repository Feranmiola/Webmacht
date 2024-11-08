'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon: Icon, isError = false, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const inputRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => inputRef.current!)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const isActive = isFocused || hasValue

    return (
      <motion.div
        className={cn(
          "flex items-center border-b border-white transition-opacity duration-200",
          isActive ? "opacity-100" : "opacity-40",
          className
        )}
        animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5, times: [0, 0.25, 0.5, 0.75, 1] }}
      >
        {Icon && (
          <motion.div
            animate={
              isActive
                ? { scale: [1, 1.2, 1], transition: { duration: 0.3 } }
                : { scale: 1 }
            }
            className="pr-2"
          >
            <Icon />
          </motion.div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[64px] w-full bg-transparent px-0 py-1 text-base text-white placeholder:text-white",
            "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 caret-white"
          )}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          {...props}
        />
      </motion.div>
    )
  }
)

Input.displayName = "Input"

export { Input }