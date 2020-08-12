import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Samuel Fun Thursday</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Fun Thursday</h1>
        <h2>Thursday, Aug. 13</h2>
        <h3>S House San Diego</h3>
        <p>Fun Thursday will be a full day of fun! There'll be games, activities, and FOOD! So get started, and click one of the tabs below to explore the event. Then, when you're ready, follow the in-app instructions to get started!</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
