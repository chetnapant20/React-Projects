import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Homelayout from './pages/Homelayout';
import Landing, { loader } from './pages/Landing';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import {action as newsletterAction} from './pages/Newsletter'
import { loader as pageLoader } from './pages/Landing';
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Cocktail from './pages/Cocktail';
import { loader as cocktailLoader } from './pages/Cocktail';
import Error from './pages/Error'
import SinglePageError from './pages/SinglePageError';

export const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <Error></Error>,
        loader: pageLoader(queryClient),
      },
      {
        path: "about",
        element: <About></About>,
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <Newsletter></Newsletter>,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail></Cocktail>,
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <QueryClientProvider client={queryClient}>

  <RouterProvider router={router}/>
  <ReactQueryDevtools initialIsOpen=  'false'></ReactQueryDevtools>
    
  </QueryClientProvider>
};
export default App;
