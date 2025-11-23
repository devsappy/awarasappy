STATIC IMAGES FOLDER
====================

Place your static images here.

Folder Structure:
-----------------
public/images/
  ├── hero/          - Hero section images
  ├── gallery/       - Gallery images
  ├── showcase/      - Feature/showcase images
  └── icons/         - Icon images (if not SVG)

How to Use:
-----------
In your React components, reference images like this:

<img src="/images/your-image.jpg" alt="Description" />

or in CSS:

background-image: url('/images/your-image.jpg');

Examples:
---------
- /images/logo.png
- /images/hero/background.jpg
- /images/gallery/project-1.jpg
- /images/icons/feature-icon.svg

Tips:
-----
1. Optimize images before adding (compress, resize)
2. Use JPG for photos, PNG for transparency, SVG for icons
3. Keep filenames lowercase with dashes (my-image.jpg)
4. Organize in subfolders for better structure

See IMAGE_GUIDE.md for complete documentation!
