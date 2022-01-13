
## **Project Description**

This website is ecommerce store for the fictional skincare brand, Aurora, powered by Stripe API. It is built with Next.JS and uses Tailwind for styling. 

⚡️ **[View Live Demo](https://ecomm-site.vercel.app/)** ⚡️


## Screenshots

![desktop-hero.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fed0ec44-c23f-4f76-b17b-bc78fbaead3c/desktop-hero.png)

![cart.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a32dd06-7c2b-4b97-bac1-a051811c1d0e/cart.png)

| ![Mobile](images/mobilehero.PNG.png) | ![Timer](screenshots/02-Timer.png) |
| :---------------------------------------: | :--------------------------------: |
|               Mobile               |         _Countdown Timer_          |

### **Development Process**

Requirements

- Add and manage a dynamic grid of products
- Set up and configure products in Stripe
- Manage local state with React's useState hook
- Create a custom React hook
- Use the React Context API to manage global state
- Store and persist app state with localstorage
- Integrate Stripe Checkout to let people purchase your products
- Deploy app to Vercel

Some items of note:

- The React Context API is used to manage the state of the cart. It makes the cart state globally available so that the cart on the nav bar would be managed and up to date on every page and later allow our cart page to pull the stored & update-to-date cart information so customers can view and manage their products . This is globally available by creating a cart context that wraps around our entire app.
- Next.JS Dynamic Routes allows us to dynamically create paths and pages for applications. I used 2 Next.JS API’s in order to first get the static paths for the app then pass in those props into each page that gets created. The first one is getStaticPaths function where we loop through our products to create and return each path. Then getStaticProps gets the data for that page and returns it as a prop. With the product data as a prop, we are able to fill in the static pages with dynamic data. This was extremelu useful when creating Product Pages!

## **Ideas for Future Development**

- As of right now, the products information is static. Moving forward, I will update the product information dynamically using Stripe API.
- Although building the cart out myself was a learning experience, I would perfer using out an of the box tool such as use-shopping-cart in the future.
- Currently the menu button is not working. In the future, I will add an About page, a shopping page, and contact page the create a menu within the navbar.
- A delete button on the cart. Right now, it just updates the quantity of the cart.
- Integrate MailChimp as a newsletter provider.

## **⚡️ Technologies**

- Next.JS
- Tailwind
- Stripe API
- Hosted on Vercel
