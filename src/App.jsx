import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import NewHireInitiationFlow from './pages/NewHireInitiationFlow/index'

function App() {
  return (
    <ProSidebarProvider>
      <NewHireInitiationFlow />
    </ProSidebarProvider>
  );
}

export default App;
