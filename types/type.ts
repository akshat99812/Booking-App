

export interface Session {
    id: number;
    date: Date;
    slot: string; // Example: "7:00 - 8:00 AM"
    duration: number; // Duration in minutes, e.g., 60 for 1 hour
    booked: boolean; // Indicates if the session is booked or not
    typeId: number; // Foreign key to consultation type
    type: ConsultationType; // Reference to the consultation type
    consultations: Consultation[]; // List of consultations associated with this session
  }
  
  export interface ConsultationType {
    id: number;
    name: string;
    sessions: Session[]; // List of sessions of this type
  }
  
  export interface Consultation {
    id: number;
    session: Session; // Reference to the session this consultation is associated with
    // Other consultation details
  }

  export interface bookingStateType{
    date: Date;
    slot: string;
    available: boolean
  }
  