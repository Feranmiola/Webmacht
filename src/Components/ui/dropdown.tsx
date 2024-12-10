
/* eslint-disable */
// @ts-nocheck
"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useController, Control } from "react-hook-form"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import CountryIcon from "../Icons/CountryIcon"

interface CustomSelectProps {
  options: string[]
  placeholder: string
  name: string
  control: Control<any>
  className?: string
  style?: string
  disabled?: boolean
  icon?: React.ElementType
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  name,
  control,
  className,
  style,
  disabled = false,
  icon: Icon = CountryIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
  })

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (selectedValue: string) => {
    if (!disabled) {
      onChange(selectedValue)
      setIsOpen(false)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isActive = isOpen || value

  return (
    <motion.div
      ref={selectRef}
      className={cn(
        "relative max-w-full w-[395.5px]",
        className,
        style
      )}
      animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5, times: [0, 0.25, 0.5, 0.75, 1] }}
    >
      <motion.div
        onClick={toggleDropdown}
        className={cn(
          "flex items-center justify-between cursor-pointer border-b border-white transition-opacity duration-200 w-full",
          isOpen ? "opacity-100" : "opacity-40 hover:opacity-70",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-2 h-[64px] w-full">
          <motion.div
            animate={
              isActive
                ? { scale: [1, 1.2, 1], transition: { duration: 0.3 } }
                : isHovered && !isActive
                ? { scale: 1.2 }
                : { scale: 1 }
            }
            className="flex-shrink-0"
          >
            <Icon />
          </motion.div>
          <p className={cn(
            "text-base text-white placeholder:text-white flex-grow truncate",
          )}>
            {value || placeholder}
          </p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="opacity-50 flex-shrink-0"
          >
            <ChevronDownIcon color="white" />
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-1 w-full bg-black border border-gray-300 rounded-md shadow-lg max-h-[220px] overflow-y-auto"
          >
            {options.map((option) => (
              <motion.div
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white truncate"
                transition={{ duration: 0.2 }}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

