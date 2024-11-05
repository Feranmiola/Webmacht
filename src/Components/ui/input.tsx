'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import * as RadixIcons from '@radix-ui/react-icons'

type IconName = keyof typeof RadixIcons

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const Icon = icon ? RadixIcons[icon] : null
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current!)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    const isActive = isFocused || hasValue

    return (
      <div className={cn(
        "flex items-center",
        "border-b border-white transition-opacity duration-200",
        !isActive && "opacity-70",
        isActive && "opacity-100",
        className
      )}>
        {Icon && <Icon className="mr-2 h-5 w-5 text-white" />}
        <input
          type={type}
          className={cn(
            "flex h-[64px] w-full bg-transparent px-0 py-1 text-base text-white",
            "placeholder:text-white",
            "focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "caret-white"
          )}
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }