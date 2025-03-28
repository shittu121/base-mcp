"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const Frames = [
    {
      id: 1,
      video: "/1.mp4",
      defaultPos: { x: 0, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "", // Default empty string or provide an image URL
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 2,
      video: "/2.mp4",
      defaultPos: { x: 4, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 3,
      video: "/3.mp4",
      defaultPos: { x: 8, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 4,
      video: "/4.mp4",
      defaultPos: { x: 0, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 5,
      video: "/5.mp4",
      defaultPos: { x: 4, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 6,
      video: "/6.mp4",
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 7,
      video: "/7.mp4",
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 8,
      video: "/8.mp4",
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    },
    {
      id: 9,
      video: "/9.mp4",
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      borderThickness: 0,
      borderSize: 0,
    }
]

export function DaysRanting() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <DynamicFrameLayout 
        frames={Frames} 
        className="w-full h-full" 
        hoverSize={6}
        gapSize={4}
      />
    </div>
  )
}