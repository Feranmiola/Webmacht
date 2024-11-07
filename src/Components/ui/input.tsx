'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion" // Import framer-motion

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType // This allows passing any custom icon component
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon: Icon, onFocus, onBlur, ...props }, ref) => {
    // Manage focus and value states 
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    // Ref for the input element 
    const inputRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => inputRef.current!)

    // Handle input changes to determine if the input has a value 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    // Handle focus and blur states, ensuring custom and passed callbacks are both called
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    // Determine if the input should be active based on focus or value presence 
    const isActive = isFocused || hasValue

    return (
      <div
        className={cn(
          "flex items-center border-b border-white transition-opacity duration-200",
          isActive ? "opacity-100" : "opacity-40",
          className
        )}
      >
        {Icon && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{
              rotate: isActive ? [0, -10, 10, -10, 10, 0] : 0, // Animate to rotate left and right
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.25, 0.5, 0.75, 1], // Control the timing of each rotation phase
              repeat: 0, // Only animate once when active
            }}
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
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
