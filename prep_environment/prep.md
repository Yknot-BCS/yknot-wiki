# VS Code: Prepping the environment
### This guide will help you to prep your VS Code environment in order to run the repositories found on Yknot's Github in the intended way.
---
<br />

In order to work effectively and without difficulty, there are a few prerequisite dependencies to install onto your
system to avoid walking into errors when building your code. The tools you can use to install these dependencies are known as the 'command window' or 'Windows Powershell', both can be accessed on your system already.

<br />
Take note that when using Windows Powershell, make sure to run as administrator and if problems arise make sure that Powershell has the correct execution policies. This can be done by adding the following command into Powershell:

>Set-ExecutionPolicy Unrestricted

<br>

You will likey be working with the Telos Quasar Template and therefore will need to have the required dependencies
to use  Vue and Quasar to build a Telos webapp. The preferred package that Yknot uses is called 'yarn'.
<br>
But first, install Node.js via the following link: https://nodejs.org/en/
- Then install the <b>yarn package manager</b>:
<br>
You can follow the installation instructions at: https://classic.yarnpkg.com/en/

---

- Add the Vue and Quasar packages
<br>
> yarn global add @vue/cli <br>
yarn global add @quasar/cli

<br >
These commands can be pasted into the command window/Powershell and hit Enter.

---

- <b>Clone</b> the Github repository onto your device
<br>In order to do this, find the the desired GitHub repo, click on the green Code button and copy the HTTPS link.

![Clone repo](Clone-Repo.png)

Then type the following  in the command window, and paste the copied HTTPS link next to it as shown in the example below:

> git clone 
<br>

![Git clone](git-clone.png)

<br>
You will need to specify the location of the cloned repository

---
- Copy the example .env file to .env
<br>Within the VS Code environment, at the top left is an option to select the 'Terminal'. Click this option and select the 'New Terminal' option. The VS terminal will be availible at the bottom of the screen, which resembles the command window. Then add the following command into the VS code terminal.
> cp .env.example .env
<br>
---
- Prep the environment
<br> Within this terminal add the following command and run.
> yarn

<br>
To check the current version of yarn you have you can enter the command below:

> yarn --version

---
- Start the app in development mode
<br> The following commands can be used to start the webapp on your local device, which will not influence the main branch of the repo.

> yarn dev

or 

> quasar build

In case errors are present, make sure all dependencies are installed correctly and restart VS code as a precaution.
