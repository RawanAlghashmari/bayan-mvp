import type { Patient } from "@/types/patient";

export const patients: Patient[] = [
  {
    mrn: "MRN-1001", name: "Ahmed Alharbi", nationality: "Saudi Arabia", language: "Arabic", preferredLanguage: "Arabic", medicationsCount: 3,
    medications: [
      { id: "med-1", medicationName: "Amoxicillin", strength: "500 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule three times daily after meals." },
      { id: "med-2", medicationName: "Paracetamol", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 2 tablets when needed for pain." },
      { id: "med-3", medicationName: "Cetirizine", strength: "10 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet at bedtime. May cause drowsiness." },
    ],
  },
  {
    mrn: "MRN-1002", name: "Budi Santoso", nationality: "Indonesia", language: "Indonesian", preferredLanguage: "Indonesian", medicationsCount: 2,
    medications: [
      { id: "med-1", medicationName: "Amoxicillin", strength: "500 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule three times daily after meals." },
      { id: "med-2", medicationName: "Cetirizine", strength: "10 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet at bedtime. May cause drowsiness." },
    ],
  },
  {
    mrn: "MRN-1003", name: "Muhammad Usman", nationality: "Pakistan", language: "Urdu", preferredLanguage: "Urdu", medicationsCount: 4,
    medications: [
      { id: "med-1", medicationName: "Metformin", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet twice daily with meals." },
      { id: "med-2", medicationName: "Paracetamol", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 2 tablets when needed for pain." },
      { id: "med-3", medicationName: "Amoxicillin", strength: "500 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule three times daily after meals." },
      { id: "med-4", medicationName: "Cetirizine", strength: "10 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet at bedtime. May cause drowsiness." },
    ],
  },
  {
    mrn: "MRN-1004", name: "Rahman Ahmed", nationality: "Bangladesh", language: "Bengali", preferredLanguage: "Bengali", medicationsCount: 2,
    medications: [
      { id: "med-1", medicationName: "Omeprazole", strength: "20 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule once daily before breakfast." },
      { id: "med-2", medicationName: "Paracetamol", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 2 tablets when needed for pain." },
    ],
  },
  {
    mrn: "MRN-1005", name: "Mehmet Kaya", nationality: "Turkey", language: "Turkish", preferredLanguage: "Turkish", medicationsCount: 3,
    medications: [
      { id: "med-1", medicationName: "Amoxicillin", strength: "500 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule three times daily after meals." },
      { id: "med-2", medicationName: "Cetirizine", strength: "10 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet at bedtime. May cause drowsiness." },
      { id: "med-3", medicationName: "Omeprazole", strength: "20 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule once daily before breakfast." },
    ],
  },
  {
    mrn: "MRN-1006", name: "Pierre Martin", nationality: "France", language: "French", preferredLanguage: "French", medicationsCount: 2,
    medications: [
      { id: "med-1", medicationName: "Metformin", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet twice daily with meals." },
      { id: "med-2", medicationName: "Cetirizine", strength: "10 mg", dosageForm: "Tablet", doctorInstruction: "Take 1 tablet at bedtime. May cause drowsiness." },
    ],
  },
  {
    mrn: "MRN-1007", name: "Fatima Alqahtani", nationality: "Saudi Arabia", language: "Arabic", preferredLanguage: "Arabic", medicationsCount: 2,
    medications: [
      { id: "med-1", medicationName: "Omeprazole", strength: "20 mg", dosageForm: "Capsule", doctorInstruction: "Take 1 capsule once daily before breakfast." },
      { id: "med-2", medicationName: "Paracetamol", strength: "500 mg", dosageForm: "Tablet", doctorInstruction: "Take 2 tablets when needed for pain." },
    ],
  },
];
