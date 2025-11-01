# Download Playwright
npm init playwright@latest

# Download cucumber
npm install --save-dev cucumber

# Download ts-node
npm install –save-dev @cucumber/cucumber

# Update playwright and all dependencies
npm install @playwright/test@latest && npx playwright install --with-deps

# How to run the tags from index.ts file
npm run cucumber -- contactUs
