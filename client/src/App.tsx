import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import GlobalNavBar from './Component/gnb/GlobalNavBar';
import ChattingList from './Component/chat/ChattingList';
import Home from './Component/home/Home';
import GameList from './Component/game/GameList';
import NotFound from './Component/notfound/NotFound';

const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width:974px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 975px)',
  });
  return (
    <BrowserRouter>
      <GlobalNavBar isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => <Home isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />}
        />
        <Route
          path="/game"
          exact
          render={() => <GameList isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />}
        />
        <Route
          path="/chat"
          exact
          render={() => <ChattingList isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
