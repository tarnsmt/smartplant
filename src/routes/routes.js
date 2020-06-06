import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'

// Measurement pages
import Light from 'src/components/Dashboard/Views/Measurement/Light.vue'
import Water from 'src/components/Dashboard/Views/Measurement/Water.vue'
import Temperature from 'src/components/Dashboard/Views/Measurement/Temperature.vue'

// Pages
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Controller from 'src/components/Dashboard/Views/Pages/Controller.vue'
// import ControllerCreate from 'src/components/Dashboard/Views/Pages/ControllerCreate.vue'

// Calendar
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'

// Plan
import Plan from 'src/components/Dashboard/Views/Plan.vue'

// Summary
import Summary from 'src/components/Dashboard/Views/Summary.vue'

// Controller Select
// import ControllerSelect from 'src/components/Dashboard/Views/ControllerSelect.vue'


let measurementMenu = {
  path: '/measurement',
  component: DashboardLayout,
  redirect: '/measurement/light',
  children: [
    {
      path: 'temperature',
      name: 'Temperature Measurement',
      component: Temperature
    },
    {
      path: 'light',
      name: 'Light Measurement',
      component: Light
    },
    {
      path: 'water',
      name: 'Water Measurement',
      component: Water
    }]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

let controllerPage = {
  path: '/controller',
  name: 'Controller',
  component: Controller
}
/*
let controllerCreatePage = {
  path: '/controllerCreate',
  name: 'ControllerCreate',
  component: ControllerCreate
}
*/
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: loginPage,
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'plan',
        name: 'Plan',
        component: Plan
      },
      {
        path: 'summary',
        name: 'Summary',
        component: Summary
      }// ,
      // {
        // path: 'controllerselect',
        // name: 'Select a Controller',
        // component: ControllerSelect
      // }
    ]
  },
  loginPage,
  controllerPage,
  // controllerCreatePage,
  registerPage,
  measurementMenu,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/controller',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      }
    ]
  },

  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
