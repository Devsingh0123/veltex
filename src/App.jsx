import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import MainLayout from './components/layout/MainLayout';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
