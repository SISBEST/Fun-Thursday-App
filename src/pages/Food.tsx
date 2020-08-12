import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Food.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Food</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ul>
          <li>Breakfast</li>
          <ul>
            <li>Bagel</li>
            <li>Bread</li>
            <li>Coffee</li>
            <li>Butter</li>
            <li>Jam</li>
          </ul>
          <li>Lunch</li>
          <ul>
            <li>Pasta Bowl</li>
            <li>Spinach</li>
          </ul>
          <li>Dinner</li>
          <ul>
            <li>Quesadilla</li>
            <li>Avocadoes</li>
          </ul>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
