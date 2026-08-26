export interface Medication {
  id: string;
  medicationName: string;
  strength: string;
  dosageForm: string;
  doctorInstruction: string;
}

export interface Patient {
  mrn: string;
  name: string;
  nationality: string;
  language: string;
  preferredLanguage: string;
  medicationsCount: number;
  medications: Medication[];
}
