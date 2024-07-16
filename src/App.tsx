import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/DashboardPages/Dashboard/Dashboard'
import History from './Pages/DashboardPages/History/History'
import ShipmentDetails from './Pages/DashboardPages/ShipmentDetails/ShipmentDetails'
// import InTransitDetails from './Pages/DashboardPages/ShipmentDetails/InTransitDetails'

function App(): JSX.Element {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/history" element={<History  />} />
        <Route path="/shipment/:tno" element={<ShipmentDetails />} />
        {/* <Route path="/inTransit/:tno" element={<InTransitDetails />} /> */}
      </Routes>
  )
}

export default App
