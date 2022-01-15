import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

/**
 * 
 *  export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' 
 * (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate,
 *  Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, 
 * UNSAFE_RouteContext, createRoutesFromChildren, createSearchParams, generatePath, 
 * matchPath, matchRoutes, renderMatches, resolvePath, unstable_HistoryRouter, 
 * useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate,
 *  useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams)
 */

const Router = () =>{
    return (
        <BrowserRouter>
        <Header/>
        <Routes> 
        <Route exact path='/Home' element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="*" element={<Erro/>} />
        <Route path="/produto/:id" element={<Produto/>} />
        </Routes> 
        </BrowserRouter>
    )
}
export default Router;