import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Activities.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Activities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ul>
          <li>Family Games</li>
          <ul>
            <li>Ticket To Ride</li>
            <li>Trivia</li>
            <li>Dinner Games</li>
            <li>Mille Bournes</li>
            <li>Battleship</li>
            <li>Weird Things Humans Search For</li>
            <li>Monopoly</li>
            <li>Exploding Kittens</li>
          </ul>
          <li>Performances &amp; Shows</li>
          <ul>
            <li>Concert (3:00 PM - Living Room)</li>
            <li>Minecraft ban appeals, but you lose brain cells. (8:30 AM, 10:00 AM, 3:30 PM - HT1)</li>
          </ul>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
