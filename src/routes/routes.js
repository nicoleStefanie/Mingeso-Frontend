/* No pescar */
import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/cuenta/TableList.vue'
import Notifications from '@/pages/Notifications.vue'
import Agregar from '@/pages/UserProfile/AddPolitico.vue'
import Editar from '@/pages/UserProfile/EditPolitico.vue'
import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

/*##############################################################*/
import Rack from '@/pages/Rack.vue'
import Home from '@/pages/Home.vue' 
import Login from '@/pages/Login.vue'
import Reservas from '@/pages/Reservas.vue'
import ReservaSimple from '@/pages/ReservaSimple.vue'
import ReservaMultiple from '@/pages/ReservaMultiple.vue'
import ReservaEntradas from '@/pages/ReservaEntradas.vue'
import ModificarReservaSimple from '@/pages/ModificarSimple.vue'
import ModificarReservaEntradas from '@/pages/ModificarEntradas.vue'
import ModificarReservaMultiple from '@/pages/ModificarMultiple.vue'

/*##############################################################*/ 

const routes = [

  {
    path: '/',
    component: DashboardLayout,
    redirect: '/Home',
    children: [
      {
        path: 'reservaSimple',
        name: 'ReservaSimple',
        component: ReservaSimple
      },
      {
        path: 'reservaMultiple',
        name: 'ReservaMultiple',
        component: ReservaMultiple
      },
      {
        path: 'reservaEntradas',
        name: 'ReservaEntradas',
        component: ReservaEntradas
      },
      {
        path: 'modificarReservaSimple',
        name: 'ModificarReservaSimple',
        component: ModificarReservaSimple
      },
      {
        path: 'modificarReservaMultiple',
        name: 'ModificarReservaMultiple',
        component: ModificarReservaMultiple
      },
      {
        path: 'modificarReservaEntradas',
        name: 'ModificarReservaEntradas',
        component: ModificarReservaEntradas
      },
      {
        path: 'reservas',
        name: 'Reservas',
        component: Reservas
      },
      {
        path: 'rack',
        name: 'Rack',
        component: Rack
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },        
      {
        path: 'Home',
        name: 'Home',
        component: Home
      },
    ]
  }
]

export default routes
