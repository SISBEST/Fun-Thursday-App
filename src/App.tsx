import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, homeOutline, fastFoodOutline, listOutline } from 'ionicons/icons';
import Activities from './pages/Activities';
import Food from './pages/Food';
import Schedule from './pages/Schedule';
import Home from './pages/Home';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/activities" component={Activities} exact={true} />
          <Route path="/food" component={Food} exact={true} />
          <Route path="/schedule" component={Schedule} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="activities" href="/activities">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Activities</IonLabel>
          </IonTabButton>
          <IonTabButton tab="food" href="/food">
            <IonIcon icon={fastFoodOutline} />
            <IonLabel>Food</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/schedule">
            <IonIcon icon={listOutline} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
