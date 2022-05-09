# fit-blog

# 15 Project 2: Interactive Full-Stack Application <!-- omit in toc -->

Projects play a key role in your journey to becoming a full-stack web developer. As you enter the last phase of the boot camp, you’ll begin to apply for development jobs. If you want to land interviews, your portfolio must feature high-quality deployed examples of your work—-and you can use your finished projects for that very purpose.

As your first opportunity to show employers your collaborative skills and coding abilities, this particular project will be a focal point of your portfolio. Employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job.

## Table of Contents <!-- omit in toc -->

- [Project Requirements](#project-requirements)
- [Presentation Requirements](#presentation-requirements)
- [Grading Requirements](#grading-requirements)
- [How to Submit Your Interactive Full-Stack Project](#how-to-submit-your-interactive-full-stack-project)
- [Proposal Requirements](#proposal-requirements)
- [Milestones](#milestones)

## Project Requirements

You and your group will use everything you’ve learned over the past six units to create a real-world full-stack application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

- Use Node.js and Express.js to create a RESTful API.

- Use Handlebars.js as the template engine.

- Use MySQL and the Sequelize ORM for the database.

- Have both GET and POST routes for retrieving and adding new data.

- Use at least one new library, package, or technology that we haven’t discussed.

- Have a folder structure that meets the MVC paradigm.

- Include authentication (express-session and cookies).

- Protect API keys and sensitive information with environment variables.

- Be deployed using Heroku (with data).

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

- Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following:

- Elevator pitch: a one minute description of your application

- Concept: What is your user story? What was your motivation for development?

- Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

- Demo: Show your stuff!

- Directions for Future Development

- Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.

## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

- Satisfies the following code requirements:

  - Application uses a Node.js and Express.js back end and uses both GET and POST routes for retrieving and adding new data.

  - Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.

  - Application is backed by a MySQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.

  - Application includes user authentication (express-session and cookies).

  - Application uses at least one new library, package, or technology not covered in class.

### Concept 10%

- Application should be a unique and novel idea.

- Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

- Application deployed at live URL on Heroku and loads with no errors.

- Application GitHub URL submitted.

### Repository Quality: 10%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id-naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application is responsive.

### Presentation 10%

- Your group should present using Powerpoint or a similar presentation software.

- Every group member should speak during the presentation.

- Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

- There are no major disparities in the number of GitHub contributions between group members.

## How to Submit Your Interactive Full-Stack Project

**Each member of your group** is required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository, with a unique name and a README describing the project.

## Proposal Requirements

Complete a project proposal document and share it with <jdesroseirs@2u.com> and <mscharf@instructors.2u.com>. Be sure to grant permission to comment.

The proposal should include the following sections:

- Table of Contents
- Team Name
- Working title for the app
- Link to the GitHub repo
- Names of contributors
- One paragraph summary of the concept
- User stories and acceptance criteria
- Breakdown of responsibilities by person (key pages/functions, slide deck,
  readme, team captain, etc. Some people will have multiple responsibilities)
- A rough timeline working backwards from final deployment and presentation on
  the last day with targeted milestones for each day. (Don't worry about who
  will do each thing as that can be hard to estimate beyond the next day.)
- Links to resources and documentation for JavaScript libraries and APIs you
  intend to use.

## Milestones

- Mon, May 9: Project proposal
- Thu, May 12: Deploy MVP and Prepare for presentations
- Fri, May 13: Present and Demo for class

The following breakdown is a recommendation. Depending on the nature of your
app, this schedule may not be ideal for your team. Use this breakdown as a
general guideline for scheduling your project work and tracking progress.

### Project Day 1 <!-- omit in toc -->

- Quickly decide on a name for your team.
- Brainstorm and select concept from a few top ideas. (Focusing on users and
  problems not apps will tend to lead to better ideas.)
- Choose a working title for the app.
- Define and document (use Google Docs) one or more [user personas and write
  user
  stories](https://www.justinmind.com/blog/user-personas-scenarios-user-stories-and-storyboards-whats-the-difference/).
- Setup repo in GitHub. Add collaborators and branch protection rules.
  (see [GitHub Repository Setup for Collaborative Projects](../../06-Server-Side-APIs/01-Activities/25-Stu_Git-Repo-Setup/README.md))
- Setup Kanban board in GitHub.
- Create a written proposal using Google Docs. (see [Proposal Requirements](#proposal-requirements))
- Share the proposal with your instructor: <jdesrosiers@2u.com>. _Be sure to
  grant permission to comment._
- Create detailed Mockups/Wireframes. (Pen/Paper, white board, Google Slides,
  [Figma](https://www.figma.com/), [InVision](https://www.invisionapp.com/),
  photoshop, Paint, Photoshop, or other apps are suitable. Add mockup files to
  the repo if the app you are using does not provide shareable access.
- Create a diagram or set of tables depicting models including fields, types, constraints and
  relationships.
- Create a list of routes including data (`api`) routes and view routes. Be sure
  to specify the `METHOD`, `PATH`, response type (json, html, text, etc), and
  description/purpose of each route.
- Create issues and add them as cards in the Kanban. All work should be tracked
  by an issue and placed on the Kanban to facilitate clear communication
  throughout the project. (Keep issues small! Issues should never take longer
  than about 4 hours to complete. If someone is working on an issue longer than
  4 hours, there is a problem which needs the entire team's attention. Ask for
  help when you realize you are falling behind when working on an issue.
- Signup for APIs as needed. Make sure at least two people on the team have an
  account with each api.)
- Find a boilerplate/template to use for the project. (Recommend using the provided project starter.)

### Project Day 2 <!-- omit in toc -->

- Create views (handlebars) for all pages.
- Experiment with APIs and getting some example code working fetching data required in the app.
- First "draft" of responsive layout and styles. Don't worry about perfecting the UI yet.
- Remember to commit often! Each person on the team should make one or more commits **each day**. (This is part of the grade for collaboration.)

#### Front End <!-- omit in toc -->

- Create routes for each view without passing in any data.
- Create hbars views for all pages using fake placeholder data.
- First "draft" of responsive layout and styles. Don't worry about perfecting
  the UI yet. Do your mobile layout first. Then, add responsiveness for
  tablet/desktop as needed if time permits.

#### Back End <!-- omit in toc -->

- Define all models.
- Define relationships between models as needed.
- Create seed script with example data as needed.
- Create api routes.

### Project Day 3 <!-- omit in toc -->

- Get forms, events, and Server side api calls working.
- Update front-end ("home routes") to use data from model and remove place holders.
- Complete majority of core functionality today.
- Focus on functionality and avoid spending too much time working on
  css/styling.
- Remember to commit often! Each person should try to finish a _minimum_ of one
  issue including a pull-request for the issue today.

### Project Day 4 <!-- omit in toc -->

- Deploy project to GitHub pages and debug as needed. (Its okay to deploy even if you don't have everything working yet. Do this early in the day in case you need help debugging deployment.)
- **Get working MVP deployed in the morning.**
- Outline presentation with entire team.
- Create slide deck.
- Practice presentation.

- **After MVP is Deployed**
  - Find bugs and create issues for them. (Just find them first before fixing anything.)
  - Fix bugs.
  - Polish UI. Now is the time to get the CSS and UI looking amazing.
  - Avoid major changes! (Especially to your models.)

### Project Day 5 <!-- omit in toc -->

- Practice presentation.
- Submit links to GitHub and deployed URL (Heroku) in BCS.
- Create a professional README for the project
- 🎉 Celebrate your accomplishments with your team!

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
