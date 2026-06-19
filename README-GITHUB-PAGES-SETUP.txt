GitHub Pages Setup Guide

1. Create a GitHub repository
   - Go to https://github.com/new
   - Repository name: portfolio (or a name you prefer)
   - Set visibility: Public
   - Do not add README/.gitignore/licenses (you already have files)

2. Add GitHub remote locally
   - In your portfolio folder, run:
     git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
     git branch -M main
     git push -u origin main

3. Enable GitHub Pages
   - Open your repo on GitHub
   - Go to Settings > Pages
   - Under "Source", choose branch: main and folder: / (root)
   - Save
   - Your site will publish at: https://YOUR_USERNAME.github.io/REPO_NAME/

4. Update your portfolio
   - Your live demo link now works if the repo is deployed:
     ./projects/project_01/index.html
   - Use the GitHub Pages URL in any resume or recruiter message.

Optional: If you want a custom URL for the demo project only,
use:
https://YOUR_USERNAME.github.io/REPO_NAME/projects/animesky-shop/index.html
