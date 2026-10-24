/**
 * Aseprite Pixel Art Sprite & Easter Egg Interaction Types
 */

export type SpriteCategory = 
  | 'flora'      // Flower, seedling, leaf
  | 'fauna'      // Butterfly
  | 'discipline' // Paintbrush, quill/book, music note, theatre mask, dance slipper
  | 'tech'       // Science flask, robot, circuit star
  | 'trophy';    // Pixel medal, laurel

export interface SpriteFrame {
  x: number;
  y: number;
  width: number;
  height: number;
  durationMs: number;
}

export interface SpriteAnimationConfig {
  name: string; // e.g. "idle", "bloom", "hover", "react"
  frames: SpriteFrame[];
  loop: boolean;
  frameRateFps?: number;
}

export interface PixelSpriteMetadata {
  id: string;
  name: string;
  category: SpriteCategory;
  width: number;       // Base pixel canvas width (e.g. 16, 24, 32, 48)
  height: number;      // Base pixel canvas height
  scale: number;       // Scaling factor for display (e.g. 2x, 3x)
  sourceFile: string;  // .aseprite path
  exportPng: string;   // PNG path
  palette: string[];   // Colors used
  animations?: Record<string, SpriteAnimationConfig>;
}

export interface EasterEggInteractionProps {
  id: string;
  ariaLabel: string;
  discoveryHint?: string;
  onTrigger?: () => void;
  disabledOnReducedMotion?: boolean;
}
