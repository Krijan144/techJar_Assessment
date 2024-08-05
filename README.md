# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Steps to run Project

-npm i
-npm run dev

## Steps to run Storybook
Storybook is used to view the components seperately with its usage
-npm run storybook

## Login Credentials

Login is performed by online mock api https://reqres.in/
{
"email": "eve.holt@reqres.in",
"password": "cityslicka"
}
Condition checked during login validation:
-password should be greater than 5 letters
-empty conditions
-email validation

formik and yup is used for form validation

## Why to use React-Redux and typescript
Redux Thunk is used for state management in the project.
Typescript is used for type checking.

-Redux is extremely useful in large projects with multiple developers.
-Redux keeps the code readable and clean.
-Debugging,tracking states and maintaining bugs are easier with the help redux devtools
-Due to centralized approach it is easy to access datas in redux from different components.
-Redux has large community so it is easier to get solution in redux 

Though Redux is very useful in large projects it may not be suitable for smaller projects as it may be time consuming for smaller projects.

Similarly typescript is also very useful in larger projects.Some benefits of using ts are:

-Early Error Detection: One of the main advantages of using typescript is detection of error early during development ,improving code quality and reducing runtime errors.

-Enhanced IDE Support: IDEs like Visual Studio provides various support like autosuggestion, highlight type issues during coding, refactoring capabilities etc. that makes the code more clean and increase productivity.

-Improved Code Quality: If types are declared properly then code could be more understandable for developers and helpful for future reference. Typescript is more useful in large projects where there are many developers so that their is less confusion in understanding the project.

-Advance Type features: Advance type feature like generics, interfaces, intersection, unions provide more accurate and flexible type definition ensuring flexibility, safety and robustness of the code.

There are also some setbacks in ts:
- It takes more time while coding in ts. 
- As typescript increases development time it may not be suitable for smaller projects.
-TypeScript adds an additional compilation step, which can complicate the build process and increase build times. 


## Styling
For Styling I have used scss for base and unstyled component(stitches) and radixUI for the styling of components.
Stitches is css in js stylings which has lesser runtime and takes lesser space than Styled components


## Routes
There are altogether 3 routes:
-dashboard(/)
-employee(/employee)
-login(/login)

dashboard and employee routes are protected
token is checked while accessing through these routes

## If any queries then feel free to contact 
Email:me.krijan@gmail.com
Phone: 9860405567
