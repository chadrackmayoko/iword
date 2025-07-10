import {lazy} from "react";

const Home = lazy(() => import('@/pages/multi-page/home'));
const About = lazy(() => import('@/pages/about'));
const Event = lazy(() => import('@/pages/event'));
const Blog = lazy(() => import('@/pages/blog'));
const Cause = lazy(() => import('@/pages/cause'));
const Contact = lazy(() => import('@/pages/other-pages/contact'));
const Error404 = lazy(() => import('@/pages/other-pages/error-404'));
const Faq = lazy(() => import('@/pages/other-pages/faq'));
const Service = lazy(() => import('@/pages/other-pages/service'));
const Team = lazy(() => import('@/pages/other-pages/team'));
const multiPageRoutes = [{
    path: '/', name: 'multi-page-home', element: <Home/>
}, {
   // path: '/multi-page/senior-citizen', name: 'multi-page-senior-citizen', element: <MultiPageSeniorCitizen/>
}];
const otherRoutes = [{
    path: '/about', name: 'about', element: <About/>
}, {
    path: '/event', name: 'event', element: <Event/>
},  {
    path: '/blog', name: 'blog', element: <Blog/>
}, {
    path: '/cause', name: 'cause', element: <Cause/>
},  {
    path: '/contact', name: 'pages-contact', element: <Contact/>
}, {
    path: '/pages/error-404', name: 'pages-error-404', element: <Error404/>
}, {
    path: '/faq', name: 'pages-faq', element: <Faq/>
}, {
    path: '/service', name: 'pages-service', element: <Service/>
}, {
    path: '/team', name: 'pages-team', element: <Team/>
}];
const landingRoutes = [...multiPageRoutes];
export {landingRoutes, otherRoutes};