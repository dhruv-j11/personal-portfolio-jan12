# Image Upload Guide

Upload your images to the following folders with these exact naming conventions:

## Gallery Images
**Folder:** `public/images/gallery/`

**File Names:**
- `gallery-1.jpg` (or `.png`, `.webp`)
- `gallery-2.jpg`
- `gallery-3.jpg`
- ... up to `gallery-15.jpg`

**Total:** 15 images

## Project Images
**Folder:** `public/images/projects/`

**File Names:**
- `project-1.jpg` (for first project)
- `project-2.jpg` (for second project)
- `project-3.jpg` (for third project)
- ... up to `project-6.jpg`

**Total:** 6 images (one per project card)

## Experience Images
**Folder:** `public/images/experience/`

**File Names:** Format is `{year}-{roleIndex}.jpg`

Examples:
- `2025-1.jpg` (first role in 2025)
- `2025-2.jpg` (second role in 2025)
- `2024-1.jpg` (first role in 2024)
- `2024-2.jpg` (second role in 2024)

**Note:** The numbering starts at 1 for each year. Check your `data/experience.ts` file to see how many roles are in each year.

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Image Recommendations
- **Gallery:** Landscape orientation, recommended size: 1200x800px
- **Projects:** Landscape orientation, recommended size: 1200x800px
- **Experience:** Square images, recommended size: 400x400px

After uploading, the images will automatically appear on your website!
