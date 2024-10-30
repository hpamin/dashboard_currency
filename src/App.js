import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wallet from './component/wallet/Wallet';
import Dashboard from './component/dashboard/Dashboard';
import Auth from './component/auth/Auth';
import Loans from './component/loans/Loans';
import NavSide from './component/nav/NavSide';
import Tables from './component/tables/Tables';
import Billing from './component/billing/Billing';
import { UserProvider } from './component/context/UserProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="flex">
          <NavSide />
            <div className="grow">
              <Routes>
                <Route path='/' element={ <Dashboard /> } />
                <Route path='/wallet' element={ <Wallet /> } />
                <Route path='/loans' element={ <Loans /> } />
                <Route path='/tables' element={ <Tables /> } />
                <Route path='/billing' element={ <Billing /> } />
                <Route path='/auth' element={ <Auth /> } />
              </Routes>
            </div>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
