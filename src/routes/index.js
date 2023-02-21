import HomeTemplate from "../client/pages";
import Home from "../client/pages/Home";
import Menu from "../client/pages/Menu";
import Order from "../client/pages/Order";
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
    {
        exact: true,
        path: "/order",
        component: Order
    }
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