<h1>Playwright Automation Framework - DemoQA</h1>
This project is a high-level automation framework built with Playwright and TypeScript, designed to demonstrate advanced testing techniques on the DemoQA platform.

![TypeScript](https://img.shields.io/badge/%20-TypeScript-gray?logo=tsnode)
![npm](https://img.shields.io/badge/%20-NPM-gray?logo=npm)
![Playwright](https://img.shields.io/badge/Playwright-gray?logo=producthunt)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-gray?logo=githubactions)

---
<h1>🚀 Key FeaturesDesign Pattern: </h1>

+ Robust Page Object Model (POM) for enhanced maintainability and scalability.
+ Architecture: Implementation of a BasePage to centralize common actions and custom wrappers.
+ Data-Driven Testing: Test data managed via JSON files to decouple logic from input values.
+ Advanced Interactions: Custom handling for complex UI components like Drag & Drop, Nested Frames, and Multi-level Menus.
+ Stability: Implementation of Web-First Assertions and smart waiting strategies to eliminate flakiness.
---

<h1>🛠️ Tech Stack</h1>

+ Language: TypeScript
+ Test Runner: Playwright
+ Reporter: Playwright HTML Reporter
+ CI/CD: GitHub Actions
+ Continuous Integration: Automated test execution via GitHub Actions with artifact reporting.

---
<h1>🧩 Challenges & Solutions</h1>

+ Complex Drag & Drop LogicIn the Droppable module
  + Encountered issues where overlapping elements or UI states blocked interactions. I implemented a low-level Mouse API solution to clear the workspace before performing critical actions, ensuring 100% test reliability.
+ Async State ManagementFor the Progress Bar and Dynamic Properties
  + Moved away from fixed timeouts. Instead, I utilized State-based Waiting (e.g., waiting for a specific button state or attribute change), which significantly reduced execution time.
+ Iframe & Tooltip Handling
  + Successfully managed Nested Iframes by chaining frameLocators and resolved tooltip "Strict Mode" violations by forcing mouse coordinates to $(0,0)$ to reset hover states between assertions.
+ CI/CD Stability  
  + Configured GitHub Actions to run in headless mode with a single worker to prevent resource contention on DemoQA’s server, ensuring consistent results in cloud environments.

---
<h1>📂 Project Structure</h1>

```
Playwright/
├───data/
│       avatar.png
│       formsPageData.json
│       textBoxData.json
│       webTablesData.json
├───fixtures/
│       myFixtures.ts
├───node_modules/
├───pages/
│   │   basePage.ts
│   ├───alertsFramesAndWindows/
│   │       alertsPage.ts
│   │       browserWindowsPage.ts
│   │       framesPage.ts
│   │       nestedFramesPage.ts
│   ├───elements/
│   │       buttonsPage.ts
│   │       checkBoxPage.ts
│   │       dynamicProperties.ts
│   │       linksPage.ts
│   │       radioButtonPage.ts
│   │       textBoxPage.ts
│   │       webTablesPage.ts
│   ├───forms/
│   │       formsPage.ts
│   ├───home/
│   │       homePage.ts
│   ├───interactions/
│   │       droppablePage.ts
│   │       sortablePage.ts
│   └───widgets/
│           progressBarPage.ts
│           sliderPage.ts
│           toolTipsPage.ts
├───playwright-report/
├───test-results/
└───tests/
    ├───alertsFramesAndWindowsPage/
    │       TC13_Verify_Browser_Window.spec.ts
    │       TC14_Verify_Alerts.spec.ts
    │       TC18_Verify_Frames.spec.ts
    ├───elementsPage/
    │       TC01_Verify_text_box_form_submission.spec.ts
    │       TC02_Verify_Check_Box_Selection.spec.ts
    │       TC03_Verify_Radio_Button_Selection.spec.ts
    │       TC04_Web_Tables_Data_Management.spec.ts
    │       TC08_Dynamic_And_Clicks.spec.ts
    ├───formsPage/
    │       TC11_Forms_And_Uploads_Suite.spec.ts
    ├───interactionsPage/
    │       TC35_Verify_Sortable_List.spec.ts
    │       TC36_Verify_Droppable.spec.ts
    └───widgetsPage/
            TC28_Verify_Slider.spec.ts
            TC29_Verify_ProgessBar.spec.ts
            TC30_Verify_ToolTips.spec.ts
```

---
<h1>⚙️ Setup & Execution </h1>
Clone the repository:

```
git clone https://github.com/OrlandoAlPe/Playwright-Framework/
```


Install dependencies:
```
npm install
```


Run all tests:
```
npx playwright test
```


View Test Report:
```
npx playwright show-report
```
---
<h1>👤 Contact</h1>
Orlando Álvarez

- 📧 Email: orlandoalpe97@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/orlando-%C3%A1lvarez-peregrina-b27398181/
- 📍 Location: Aguascalientes, México

📄 License
This project is open source and available under the MIT License.

Built with ❤️ for learning and demonstrating QA Automation skills
