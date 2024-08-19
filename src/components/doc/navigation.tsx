import React from 'react'
import { Link } from "merelyui"

export default function Navigation() {
  return (
    <nav className="w-full flex flex-row items-center justify-between mt-8">
    <Link label='Previous Page' href='#' secondary small position="left"/>
    <Link label='Next Page' href='#' secondary small position="right"/>
  </nav>
  )
}
