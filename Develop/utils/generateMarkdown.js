// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }

  const badges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  };

  return badges[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }

  const links = {
      MIT: "https://opensource.org/licenses/MIT",
      Apache: "https://opensource.org/licenses/Apache-2.0",
      GPL: "https://www.gnu.org/licenses/gpl-3.0"
  };

  return links[license] || '';
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  return `## License
This project is licensed under the [${license} license](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
**Problem Solved:**  
${data.solution}

**Target Demographic:**  
${data.demographic}

**Key Goals/Objectives:**  
${data.goals}

---

## Table of Contents
- [Description](#description)
- [Goals](#key-goalsobjectives)
- [License](#license)
- [GitHub Repo](#github-repo)

---

## GitHub Repo
You can find the project repository at:  
🔗 [${data.repo}](${data.repo})

---

${renderLicenseSection(data.license)}
`;
}

// Export all functions
export {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
