import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Schedule.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ul>
          <li>8:00 AM - Breakfast</li>
          <li>8:30 AM - All Activities Open</li>
          <li>9:00 AM - Pillowfighting</li>
          <li>9:15 AM - Family Game</li>
          <li>10:00 AM - All Activities Open</li>
          <li>11:00 AM - Lunch</li>
          <li>11:30 AM - Scavenger Hunt</li>
          <li>Noon - All Activities Open</li>
          <li>1:00 PM - Independent Time</li>
          <li>2:00 PM - Snack</li>
          <li>2:15 PM - Bike Ride</li>
          <li>3:00 PM - All Activities Open</li>
          <li>4:00 PM - Hill Rolling</li>
          <li>5:00 PM - Family Game</li>
          <li>6:00 PM - Dinner</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
