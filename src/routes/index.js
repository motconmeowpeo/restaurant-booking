import HomeTemplate from "../client/pages";
import Home from "../client/pages/Home";
import Menu from "../client/pages/Menu";
const HomeRoute = [
    //Home
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        exact: true,
        path: "/menu",
        component: Menu
    },
]
const renderRouterHome = () => {
    return HomeRoute.map((root, index) => {
        return <HomeTemplate
            key={index}
            exact={root.exact}
            path={root.path}
            component={root.component}
        />
    })
}
export { renderRouterHome };