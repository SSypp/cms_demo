import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/spin'
import Natifi from './pages/ui/notification'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/swiper'
import LoginForm from './pages/form/login'
import RegisterForm from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import RichText from './pages/rich'
import City from './pages/city'
import Order from './pages/order'
import Common from './common'
import OrderDetail from './pages/order/detail'
class RouterS extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin' component={Home}></Route>
                                    <Route path='/ui/buttons' component={Buttons}></Route>
                                    <Route path='/ui/modals' component={Modals}></Route>
                                    <Route path='/ui/loadings' component={Loading}></Route>
                                    <Route path='/ui/notification' component={Natifi}></Route>
                                    <Route path='/ui/messages' component={Message}></Route>
                                    <Route path='/ui/tabs' component={Tabs}></Route>
                                    <Route path='/ui/gallery' component={Gallery}></Route>
                                    <Route path='/ui/carousel' component={Carousel}></Route>
                                    <Route path='/form/login' component={LoginForm}></Route>
                                    <Route path='/form/reg' component={RegisterForm}></Route>
                                    <Route path='/table/basic' component={BasicTable}></Route>
                                    <Route path='/table/high' component={HighTable}></Route>
                                    <Route path='/rich' component={RichText}></Route>
                                    <Route path='/city' component={City}></Route>
                                    <Route path='/order' component={Order}></Route>
                                </Switch>
                            </Admin>
                        } />
                    </Switch>

                </App>
            </HashRouter>
        )
    }
}
export default RouterS;