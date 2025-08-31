#!/bin/bash

# Add your GitHub repository as remote origin
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/maingard-properties.git

# Push to GitHub
git branch -M main
git push -u origin main

echo "Code pushed to GitHub successfully!"
echo "Now go to https://vercel.com/new to import and deploy your project"