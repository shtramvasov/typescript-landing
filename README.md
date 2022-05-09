# Hosting service landing page
__Perandus__ is a landing page written in TypeScript, designed for hosting services startups made with React and Redux.

## Demo
Deployed on Vercel— [perandus](https://perandus.vercel.app/)

##  Features
-  [React](https://reactjs.org/) – a JS framework for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) support for type checking
- [Redux Toolkit](https://redux-toolkit.js.org/) – state management library built on top of Redux with improved toolset
- CSS Modules – solves many of the problems with traditional CSS
- [Framer Motion](https://www.framer.com/motion/) – a production-ready motion library for React
 - Responsive Design – highly responsive and reusable UI components that fits for every screen size
 - One click deployment with __Vercel__ (or manual deployment to any hosting services)

##  Overview

Example of an interface of a Button component using TypeScript:
```javascript
interface Props {
  text: string,
  color: 'blue' | 'yellow',
  type?: 'button' | 'submit'
  link: string,
  disabled?: boolean,
  fn?: () => void
}
```
---
![Buttons](/src/img/readme/buttons.PNG)

---

This is a Redux dispatch action in Tarif Helper component:
```javascript
  const dispatch = useDispatch();
  const createProps = () => {
    const props: Props ={
        props: {
        name: 'Custom',
        price: Math.ceil((traffic * 0.05) + (space * 0.01) + members),
        members: {
          quant: members,
        },
        traffic: {
          quant: traffic,
        },
        space: {
          quant: space,
        },
        isOnline: space >= 300 || traffic >= 50 ? true : false,
        }
    };
    dispatch(updateTariff(props));
  };
```
---
![Buttons](/src/img/readme/helper.PNG)

---

Example of responsive design:

Large screen
![Large screen](/src/img/readme/large.PNG)

---
Medium screen
![Medium screen](/src/img/readme/medium.PNG)

---
Small screen
![Small screen](/src/img/readme/small.PNG)
