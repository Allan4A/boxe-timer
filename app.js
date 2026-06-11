"use strict";

/* ============ PROGRAMMES — ALLAN ============
   Matériel : KB 10 kg, sandbag 30 kg, haltères 10 kg, élastiques 5/15/40 kg. */
const PROGRAMS_ALLAN = {
  complet: {
    label: "Complet",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 180, desc: "Corde imaginaire, rotations, mobilité épaules et hanches" },
      { name: "Shadow 1 — Jabs & directs", tag: "shadow", dur: 180, desc: "Jab, jab-cross, déplacements avant/arrière" },
      { name: "Shadow 2 — Crochets & uppercuts", tag: "shadow", dur: 180, desc: "Crochets, uppercuts, enchaînements 3-4 coups" },
      { name: "Installation", tag: "rest", dur: 30, desc: "Prépare la kettlebell et le sandbag" },
      { name: "Circuit 1A — Squat goblet KB 10 kg", tag: "circuit", dur: 45, desc: "Kettlebell tenue à la poitrine, descente contrôlée" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Pose la KB, place-toi devant le sandbag" },
      { name: "Circuit 1B — Squat sandbag 30 kg", tag: "circuit", dur: 45, desc: "Sandbag serré contre la poitrine, dos droit" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde le sandbag à portée" },
      { name: "Circuit 1C — Row sandbag 30 kg", tag: "circuit", dur: 45, desc: "Buste penché, tire le sandbag vers le ventre" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Range le sandbag, accroche l'élastique 40 kg" },
      { name: "Circuit 1D — Row élastique 40 kg", tag: "circuit", dur: 45, desc: "Tirage horizontal, omoplates serrées" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Range l'élastique, marche, bois une gorgée" },
      { name: "Round 1 — Technique (70%)", tag: "round", dur: 120, desc: "Shadow rythme round : combinaisons propres à 70%" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 2 — Vitesse", tag: "round", dur: 120, desc: "Volume maximal, mains relâchées, enchaîne sans pause" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 3 — Max effort", tag: "round", dur: 120, desc: "Dernier round : intensité maximale, vide tout" },
      { name: "Repos + installation", tag: "rest", dur: 60, desc: "Respire, attrape les haltères 10 kg" },
      { name: "Circuit 2A — Curl haltères 10 kg", tag: "circuit", dur: 45, desc: "Curls biceps alternés, mouvement contrôlé" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde les haltères en main" },
      { name: "Circuit 2B — Press épaules haltères", tag: "circuit", dur: 45, desc: "Développé militaire haltères, gainage" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Pose les haltères, prends l'élastique 15 kg" },
      { name: "Circuit 2C — Face-pull élastique 15 kg", tag: "circuit", dur: 45, desc: "Tirage visage, coudes hauts, arrière d'épaules" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Range l'élastique, relâche les épaules" },
      { name: "Shadow 3 — Défense & contre", tag: "shadow", dur: 180, desc: "Esquives, blocages, contres immédiats" },
      { name: "Finisher — KB swings 10 kg", tag: "cardio", dur: 60, desc: "Swings explosifs, hanches dynamiques" },
      { name: "Récupération & étirements", tag: "rest", dur: 180, desc: "Étirements épaules, dos, jambes, respiration" }
    ]
  },
  express: {
    label: "Express",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 120, desc: "Corde imaginaire, mobilité rapide" },
      { name: "Shadow — Combinaisons libres", tag: "shadow", dur: 180, desc: "Toutes combinaisons, déplacements actifs" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Prépare la kettlebell" },
      { name: "Circuit A — Squat goblet + pompes", tag: "circuit", dur: 40, desc: "Superset : squats KB 10 kg puis pompes" },
      { name: "Repos + installation", tag: "rest", dur: 20, desc: "Pose la KB, accroche l'élastique 40 kg" },
      { name: "Circuit B — Row élastique 40 kg", tag: "circuit", dur: 40, desc: "Tirage horizontal, omoplates serrées" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Range l'élastique, mets-toi en garde" },
      { name: "Round 1 — Technique (70%)", tag: "round", dur: 120, desc: "Shadow rythme round : combinaisons propres" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 2 — Défense & contre", tag: "round", dur: 90, desc: "Esquives, blocages, contres immédiats" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 3 — Max effort", tag: "round", dur: 90, desc: "Intensité maximale, vide tout" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Attrape la kettlebell pour le finisher" },
      { name: "Finisher — KB swings", tag: "cardio", dur: 45, desc: "Swings explosifs, hanches dynamiques" },
      { name: "Étirements", tag: "rest", dur: 120, desc: "Étirements complets, respiration" }
    ]
  },
  boxe: {
    label: "Boxe",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 180, desc: "Corde imaginaire, rotations, échauffement poignets et épaules" },
      { name: "Shadow — Mise en route", tag: "shadow", dur: 180, desc: "Combinaisons souples, garde haute, déplacements" },
      { name: "Round 1 — Jabs & directs", tag: "round", dur: 120, desc: "Jab, jab-cross, précision et allonge" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 2 — Crochets & uppercuts", tag: "round", dur: 120, desc: "Coups circulaires, rotation des hanches" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 3 — Niveau bas", tag: "round", dur: 120, desc: "Flexions + frappes au corps imaginaires, jambes actives" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 4 — Vitesse", tag: "round", dur: 120, desc: "Volume maximal, mains relâchées, sans pause" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 5 — Défense & contre", tag: "round", dur: 120, desc: "Esquives, blocages, contres immédiats" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Dernier repos avant le round final" },
      { name: "Round 6 — Max effort", tag: "round", dur: 120, desc: "Round final : intensité maximale, vide tout" },
      { name: "Repos", tag: "rest", dur: 60, desc: "Grosse récupération, respire profondément" },
      { name: "Shadow — Retour au calme", tag: "shadow", dur: 120, desc: "Mouvements lents et techniques, respiration" },
      { name: "Étirements", tag: "rest", dur: 180, desc: "Étirements épaules, poignets, dos, respiration" }
    ]
  },
  haut: {
    label: "Haut du corps",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 180, desc: "Corde imaginaire, rotations épaules, poignets" },
      { name: "Shadow — Technique légère", tag: "shadow", dur: 120, desc: "Combinaisons souples à 50%, échauffement spécifique" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Prépare haltères et élastiques" },
      { name: "Tour 1 — Pompes", tag: "circuit", dur: 45, desc: "Rythme régulier, gainage serré" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Attrape les haltères" },
      { name: "Tour 1 — Press épaules haltères", tag: "circuit", dur: 45, desc: "Développé militaire 10 kg, gainage" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde les haltères en main" },
      { name: "Tour 1 — Curl haltères 10 kg", tag: "circuit", dur: 45, desc: "Curls biceps alternés, contrôle" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Pose les haltères, accroche l'élastique 40 kg" },
      { name: "Tour 1 — Row élastique 40 kg", tag: "circuit", dur: 45, desc: "Tirage horizontal, omoplates serrées" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Passe sur l'élastique 15 kg" },
      { name: "Tour 1 — Face-pull élastique 15 kg", tag: "circuit", dur: 45, desc: "Coudes hauts, arrière d'épaules" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche sur place, secoue les bras" },
      { name: "Tour 2 — Pompes", tag: "circuit", dur: 45, desc: "Rythme régulier, gainage serré" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Attrape les haltères" },
      { name: "Tour 2 — Press épaules haltères", tag: "circuit", dur: 45, desc: "Développé militaire 10 kg, gainage" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde les haltères en main" },
      { name: "Tour 2 — Curl haltères 10 kg", tag: "circuit", dur: 45, desc: "Curls biceps alternés, contrôle" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Pose les haltères, accroche l'élastique 40 kg" },
      { name: "Tour 2 — Row élastique 40 kg", tag: "circuit", dur: 45, desc: "Tirage horizontal, omoplates serrées" },
      { name: "Repos + installation", tag: "rest", dur: 30, desc: "Passe sur l'élastique 15 kg" },
      { name: "Tour 2 — Face-pull élastique 15 kg", tag: "circuit", dur: 45, desc: "Coudes hauts, arrière d'épaules" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Range le matériel, mets-toi en garde" },
      { name: "Round 1 — Technique (70%)", tag: "round", dur: 120, desc: "Shadow rythme round : combinaisons propres" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Récupération entre rounds" },
      { name: "Round 2 — Max effort", tag: "round", dur: 120, desc: "Intensité maximale, vide tout" },
      { name: "Repos", tag: "rest", dur: 60, desc: "Respire profondément" },
      { name: "Étirements", tag: "rest", dur: 180, desc: "Étirements épaules, pectoraux, dos, bras" }
    ]
  },
  bas: {
    label: "Bas du corps",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 180, desc: "Corde imaginaire, rotations hanches, chevilles, genoux" },
      { name: "Shadow — Jeu de jambes", tag: "shadow", dur: 180, desc: "Déplacements uniquement : avancées, retraits, pivots, esquives" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Prépare la kettlebell et le sandbag" },
      { name: "Tour 1 — Squat goblet KB 10 kg", tag: "circuit", dur: 45, desc: "Kettlebell à la poitrine, descente contrôlée" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Pose la KB" },
      { name: "Tour 1 — Fentes alternées", tag: "circuit", dur: 45, desc: "Fentes avant alternées, KB ou poids du corps" },
      { name: "Repos + installation", tag: "rest", dur: 15, desc: "Place-toi devant le sandbag" },
      { name: "Tour 1 — Squat sandbag 30 kg", tag: "circuit", dur: 45, desc: "Sandbag serré contre la poitrine, dos droit" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde le sandbag à portée" },
      { name: "Tour 1 — Soulevé de terre roumain sandbag", tag: "circuit", dur: 45, desc: "Hanches en arrière, dos plat, ischio-jambiers" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Range le sandbag, trouve un mur" },
      { name: "Tour 1 — Chaise murale", tag: "circuit", dur: 45, desc: "Dos contre le mur, cuisses parallèles au sol" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Secoue les jambes" },
      { name: "Tour 1 — Squats sautés", tag: "circuit", dur: 30, desc: "Explosif, réception amortie" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche sur place, bois une gorgée" },
      { name: "Tour 2 — Squat goblet KB 10 kg", tag: "circuit", dur: 45, desc: "Kettlebell à la poitrine, descente contrôlée" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Pose la KB" },
      { name: "Tour 2 — Fentes alternées", tag: "circuit", dur: 45, desc: "Fentes avant alternées, KB ou poids du corps" },
      { name: "Repos + installation", tag: "rest", dur: 15, desc: "Place-toi devant le sandbag" },
      { name: "Tour 2 — Squat sandbag 30 kg", tag: "circuit", dur: 45, desc: "Sandbag serré contre la poitrine, dos droit" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Garde le sandbag à portée" },
      { name: "Tour 2 — Soulevé de terre roumain sandbag", tag: "circuit", dur: 45, desc: "Hanches en arrière, dos plat, ischio-jambiers" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Range le sandbag, trouve un mur" },
      { name: "Tour 2 — Chaise murale", tag: "circuit", dur: 45, desc: "Dos contre le mur, cuisses parallèles au sol" },
      { name: "Repos", tag: "rest", dur: 15, desc: "Secoue les jambes" },
      { name: "Tour 2 — Squats sautés", tag: "circuit", dur: 30, desc: "Explosif, réception amortie" },
      { name: "Repos", tag: "rest", dur: 30, desc: "Attrape la kettlebell pour le finisher" },
      { name: "Finisher — KB swings 10 kg", tag: "cardio", dur: 60, desc: "Swings explosifs, hanches dynamiques" },
      { name: "Étirements", tag: "rest", dur: 180, desc: "Étirements quadriceps, ischios, mollets, fessiers" }
    ]
  }
};

/* ============ PROGRAMMES — LIORA (grossesse, 2e trimestre) ============
   Règles : pas de charges lourdes (élastiques 5/15 kg et poids du corps uniquement),
   pas de sauts ni d'impacts, pas d'exercices allongée sur le dos, pas de crunchs,
   intensité modérée (toujours en aisance respiratoire), gainage doux uniquement. */
const LIORA_ABDOS = [
  { name: "Abdos doux — Bird-dog", tag: "circuit", dur: 40, desc: "À 4 pattes : bras et jambe opposés tendus, dos neutre, sans cambrer" },
  { name: "Repos", tag: "rest", dur: 15, desc: "Respire tranquillement" },
  { name: "Abdos doux — Gainage latéral genoux (gauche)", tag: "circuit", dur: 30, desc: "Sur le côté, appui sur les genoux, bassin aligné" },
  { name: "Repos", tag: "rest", dur: 15, desc: "Change de côté" },
  { name: "Abdos doux — Gainage latéral genoux (droite)", tag: "circuit", dur: 30, desc: "Sur le côté, appui sur les genoux, bassin aligné" },
  { name: "Repos", tag: "rest", dur: 15, desc: "Respire" },
  { name: "Respiration & périnée", tag: "circuit", dur: 60, desc: "Bascules de bassin douces + respiration profonde, engage le périnée à l'expiration" }
];
const PROGRAMS_LIORA = {
  complet: {
    label: "Complet",
    phases: [
      { name: "Échauffement mobilité", tag: "cardio", dur: 300, desc: "Marche sur place, rotations épaules, cercles de bassin, chevilles" },
      { name: "Marche active & mobilité", tag: "cardio", dur: 180, desc: "Marche rythmée sur place, montées de genoux douces, bras actifs" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Prépare les élastiques 5 et 15 kg et une chaise solide" },
      { name: "Tour 1 — Squat poids du corps", tag: "circuit", dur: 40, desc: "Amplitude confortable, appuie-toi à la chaise si besoin" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 1 — Row élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux, buste droit, épaules basses" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Élévations latérales élastique 5 kg", tag: "circuit", dur: 40, desc: "Bras à l'horizontale maximum, sans à-coups" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Fentes statiques (chaise)", tag: "circuit", dur: 40, desc: "Petite amplitude, une main sur la chaise pour l'équilibre" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Pompes au mur", tag: "circuit", dur: 40, desc: "Mains sur le mur, corps gainé, rythme lent" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, bois une gorgée" },
      { name: "Tour 2 — Squat poids du corps", tag: "circuit", dur: 40, desc: "Amplitude confortable, appuie-toi à la chaise si besoin" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 2 — Row élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux, buste droit, épaules basses" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Élévations latérales élastique 5 kg", tag: "circuit", dur: 40, desc: "Bras à l'horizontale maximum, sans à-coups" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Fentes statiques (chaise)", tag: "circuit", dur: 40, desc: "Petite amplitude, une main sur la chaise pour l'équilibre" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Pompes au mur", tag: "circuit", dur: 40, desc: "Mains sur le mur, corps gainé, rythme lent" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, prépare un tapis pour le sol" }
    ].concat(LIORA_ABDOS, [
      { name: "Marche récupération", tag: "cardio", dur: 120, desc: "Marche tranquille, bras relâchés, respiration ample" },
      { name: "Étirements & relaxation", tag: "rest", dur: 300, desc: "Étirements doux jamais forcés, respiration profonde" }
    ])
  },
  haut: {
    label: "Haut du corps",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 240, desc: "Marche sur place, rotations épaules, poignets, nuque" },
      { name: "Cardio doux — bras actifs", tag: "cardio", dur: 120, desc: "Marche sur place avec cercles et extensions de bras, épaules relâchées" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Élastiques 5 et 15 kg à portée, mur dégagé" },
      { name: "Tour 1 — Pompes au mur", tag: "circuit", dur: 40, desc: "Mains sur le mur, corps gainé, rythme lent" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 1 — Row élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux, buste droit" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Élévations latérales élastique 5 kg", tag: "circuit", dur: 40, desc: "Sans à-coups, bras à l'horizontale maximum" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Curl élastique 5 kg", tag: "circuit", dur: 40, desc: "Élastique sous les pieds, flexion lente des coudes" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Face-pull élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux vers le visage, coudes hauts" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, secoue les bras" },
      { name: "Tour 2 — Pompes au mur", tag: "circuit", dur: 40, desc: "Mains sur le mur, corps gainé, rythme lent" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 2 — Row élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux, buste droit" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Élévations latérales élastique 5 kg", tag: "circuit", dur: 40, desc: "Sans à-coups, bras à l'horizontale maximum" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Curl élastique 5 kg", tag: "circuit", dur: 40, desc: "Élastique sous les pieds, flexion lente des coudes" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Face-pull élastique 15 kg", tag: "circuit", dur: 40, desc: "Tirage doux vers le visage, coudes hauts" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, prépare un tapis" }
    ].concat(LIORA_ABDOS, [
      { name: "Étirements", tag: "rest", dur: 240, desc: "Étirements doux épaules, nuque, bras, respiration" }
    ])
  },
  bas: {
    label: "Bas du corps",
    phases: [
      { name: "Échauffement", tag: "cardio", dur: 240, desc: "Marche sur place, cercles de hanches, chevilles, genoux" },
      { name: "Marche active & équilibre", tag: "cardio", dur: 120, desc: "Marche rythmée, pas latéraux, transferts d'appui en douceur" },
      { name: "Installation", tag: "rest", dur: 20, desc: "Une chaise solide à portée de main" },
      { name: "Tour 1 — Squat poids du corps", tag: "circuit", dur: 40, desc: "Amplitude confortable, appui chaise si besoin" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 1 — Fentes statiques (chaise)", tag: "circuit", dur: 40, desc: "Petite amplitude, main sur la chaise" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Extensions de hanche (kickback chaise)", tag: "circuit", dur: 40, desc: "Jambe tendue vers l'arrière, sans cambrer le dos" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Mollets debout (chaise)", tag: "circuit", dur: 40, desc: "Montées lentes sur la pointe des pieds, appui chaise" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 1 — Chaise murale douce", tag: "circuit", dur: 30, desc: "Dos au mur, flexion légère, respire normalement" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, bois une gorgée" },
      { name: "Tour 2 — Squat poids du corps", tag: "circuit", dur: 40, desc: "Amplitude confortable, appui chaise si besoin" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire tranquillement" },
      { name: "Tour 2 — Fentes statiques (chaise)", tag: "circuit", dur: 40, desc: "Petite amplitude, main sur la chaise" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Extensions de hanche (kickback chaise)", tag: "circuit", dur: 40, desc: "Jambe tendue vers l'arrière, sans cambrer le dos" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Mollets debout (chaise)", tag: "circuit", dur: 40, desc: "Montées lentes sur la pointe des pieds, appui chaise" },
      { name: "Repos", tag: "rest", dur: 20, desc: "Respire" },
      { name: "Tour 2 — Chaise murale douce", tag: "circuit", dur: 30, desc: "Dos au mur, flexion légère, respire normalement" },
      { name: "Repos actif", tag: "rest", dur: 60, desc: "Marche doucement, prépare un tapis" }
    ].concat(LIORA_ABDOS, [
      { name: "Étirements", tag: "rest", dur: 240, desc: "Étirements doux jambes et hanches, jamais forcés" }
    ])
  }
};

/* ============ PROFILS ============ */
const PROFILES = {
  allan: {
    name: "Allan", avatar: "🥊", color: "#ea580c",
    programs: PROGRAMS_ALLAN, progression: true, allowHard: true,
    defaultProgram: "complet", note: null
  },
  liora: {
    name: "Liora", avatar: "🧘‍♀️", color: "#7c3aed",
    programs: PROGRAMS_LIORA, progression: false, allowHard: false,
    defaultProgram: "complet",
    note: "🤰 Séances adaptées à la grossesse : reste toujours en aisance respiratoire (tu dois pouvoir parler), hydrate-toi, évite la surchauffe. Stoppe en cas de douleur, contraction, vertige ou essoufflement inhabituel. Programme à faire valider par ta sage-femme ou ton médecin."
  }
};

const TAG_COLORS = { shadow: "#7c3aed", round: "#ea580c", circuit: "#db2777", cardio: "#d97706", rest: "#6b7280" };
const TAGS = ["shadow", "round", "circuit", "cardio", "rest"];
const PREP_DUR = 5;
const INTENSITY = {
  facile:    { work: 0.8, rest: 1.2, label: "Facile" },
  normal:    { work: 1,   rest: 1,   label: "Normal" },
  difficile: { work: 1.2, rest: 0.8, label: "Difficile" }
};

/* ============ ILLUSTRATIONS ============ */
const ILLUS = {
  rope: { a: "bob", s: '<g class="m"><circle cx="60" cy="24" r="8" fill="currentColor" stroke="none"/><path d="M60 32 V62"/><path d="M60 40 L44 52 M60 40 L76 52"/><path d="M60 62 L50 92 M60 62 L70 92"/></g><path d="M44 52 Q60 112 76 52"/>' },
  shadow: { a: "punch", s: '<circle cx="52" cy="26" r="8" fill="currentColor" stroke="none"/><path d="M52 34 L56 64"/><path d="M52 42 L38 52"/><circle cx="36" cy="54" r="5" fill="currentColor" stroke="none"/><g class="m"><path d="M53 44 L84 40"/><circle cx="88" cy="40" r="5" fill="currentColor" stroke="none"/></g><path d="M56 64 L42 94 M56 64 L70 94"/>' },
  squat: { a: "bob", s: '<g class="m"><circle cx="60" cy="30" r="8" fill="currentColor" stroke="none"/><path d="M60 38 V62"/><path d="M60 46 L78 54"/><circle cx="83" cy="58" r="6"/><path d="M60 62 L46 76 L46 96"/><path d="M60 62 L74 76 L74 96"/></g>' },
  sbsquat: { a: "bob", s: '<g class="m"><circle cx="60" cy="22" r="8" fill="currentColor" stroke="none"/><path d="M60 30 V58"/><rect x="42" y="38" width="36" height="15" rx="7" fill="currentColor" stroke="none" opacity="0.85"/><path d="M60 58 L46 74 L46 94"/><path d="M60 58 L74 74 L74 94"/></g>' },
  sbrow: { a: "press", s: '<path d="M60 58 L50 94 M60 58 L70 94"/><circle cx="76" cy="26" r="8" fill="currentColor" stroke="none"/><path d="M60 58 L76 34"/><g class="m"><path d="M70 44 L70 60"/><rect x="52" y="60" width="36" height="15" rx="7" fill="currentColor" stroke="none" opacity="0.85"/></g>' },
  pushup: { a: "bob", s: '<g class="m"><circle cx="26" cy="58" r="8" fill="currentColor" stroke="none"/><path d="M34 62 L78 70 L102 78"/><path d="M44 64 L44 92"/></g><path d="M14 96 H106"/>' },
  row: { a: "pull", s: '<path d="M102 16 V96" stroke-width="6"/><circle cx="46" cy="30" r="8" fill="currentColor" stroke="none"/><path d="M46 38 L48 68"/><path d="M48 68 L38 96 M48 68 L60 96"/><g class="m"><path d="M47 48 L70 50"/><circle cx="74" cy="50" r="5" fill="currentColor" stroke="none"/><path d="M74 50 L102 46" stroke-dasharray="4 6" stroke-width="3"/></g>' },
  press: { a: "press", s: '<circle cx="60" cy="34" r="8" fill="currentColor" stroke="none"/><path d="M60 42 V72"/><path d="M60 72 L48 98 M60 72 L72 98"/><g class="m"><path d="M60 50 L42 30 M60 50 L78 30"/><path d="M34 30 H50 M70 30 H86" stroke-width="6"/></g>' },
  curl: { a: "curl", s: '<circle cx="56" cy="28" r="8" fill="currentColor" stroke="none"/><path d="M56 36 L58 68"/><path d="M58 68 L46 96 M58 68 L68 96"/><path d="M57 44 L66 58"/><g class="m" style="transform-origin:66px 58px;transform-box:view-box"><path d="M66 58 L84 54"/><path d="M84 46 V62" stroke-width="6"/></g>' },
  facepull: { a: "pull", s: '<path d="M104 12 V96" stroke-width="6"/><circle cx="42" cy="30" r="8" fill="currentColor" stroke="none"/><path d="M42 38 L44 70"/><path d="M44 70 L34 96 M44 70 L56 96"/><g class="m"><path d="M43 44 L66 38 M43 52 L66 46"/><circle cx="70" cy="38" r="4" fill="currentColor" stroke="none"/><circle cx="70" cy="46" r="4" fill="currentColor" stroke="none"/><path d="M70 38 L104 30 M70 46 L104 34" stroke-dasharray="4 6" stroke-width="3"/></g>' },
  swing: { a: "swing", s: '<circle cx="58" cy="28" r="8" fill="currentColor" stroke="none"/><path d="M58 36 L58 64"/><path d="M58 64 L44 80 L44 96"/><path d="M58 64 L72 80 L72 96"/><g class="m" style="transform-origin:58px 46px;transform-box:view-box"><path d="M58 46 L58 74"/><circle cx="58" cy="82" r="8"/></g>' },
  lunge: { a: "bob", s: '<g class="m"><circle cx="56" cy="26" r="8" fill="currentColor" stroke="none"/><path d="M56 34 L58 64"/><path d="M56 42 L44 52 M56 42 L68 52"/><path d="M58 64 L76 72 L76 94"/><path d="M58 64 L42 80 L30 92"/></g><path d="M14 96 H106"/>' },
  hinge: { a: "hinge", s: '<path d="M60 64 L52 96 M60 64 L68 96"/><g class="m" style="transform-origin:60px 64px;transform-box:view-box"><circle cx="60" cy="30" r="8" fill="currentColor" stroke="none"/><path d="M60 38 V64"/><path d="M60 46 L74 58"/><path d="M74 58 L74 70"/><circle cx="74" cy="76" r="6"/></g>' },
  wallsit: { a: "breathe", s: '<path d="M92 10 V98" stroke-width="6"/><g class="m"><circle cx="76" cy="34" r="8" fill="currentColor" stroke="none"/><path d="M82 42 L84 66"/><path d="M84 66 L56 68"/><path d="M56 68 L56 96"/><path d="M82 50 L70 60"/></g><path d="M30 98 H92"/>' },
  jump: { a: "jump", s: '<g class="m"><circle cx="60" cy="26" r="8" fill="currentColor" stroke="none"/><path d="M60 34 V58"/><path d="M60 42 L44 28 M60 42 L76 28"/><path d="M60 58 L48 72 L48 88"/><path d="M60 58 L72 72 L72 88"/></g><path d="M14 98 H106"/>' },
  stretch: { a: "sway", s: '<g class="m" style="transform-origin:60px 96px;transform-box:view-box"><circle cx="52" cy="30" r="8" fill="currentColor" stroke="none"/><path d="M60 70 Q58 48 54 38"/><path d="M58 52 Q70 40 82 36"/><path d="M56 44 L42 50"/></g><path d="M60 70 L52 96 M60 70 L68 96"/>' },
  birddog: { a: "breathe", s: '<g class="m"><circle cx="36" cy="42" r="8" fill="currentColor" stroke="none"/><path d="M42 50 L80 54"/><path d="M50 52 L50 80"/><path d="M74 54 L74 80"/><path d="M44 48 L16 42"/><path d="M78 54 L106 50"/></g><path d="M12 86 H108"/>' },
  sideplank: { a: "breathe", s: '<circle cx="30" cy="40" r="8" fill="currentColor" stroke="none"/><g class="m"><path d="M36 48 L84 64"/><path d="M84 64 L100 84"/><path d="M44 52 L44 80"/><path d="M60 56 L60 82"/></g><path d="M16 88 H108"/>' },
  rest: { a: "breathe", s: '<circle cx="60" cy="28" r="8" fill="currentColor" stroke="none"/><g class="m" style="transform-origin:60px 70px;transform-box:view-box"><path d="M60 36 V68"/></g><path d="M60 44 L46 58 M60 44 L74 58"/><path d="M60 68 L50 96 M60 68 L70 96"/><path d="M84 24 h10 M88 17 h10" stroke-width="3"/>' }
};

function illuKey(p) {
  const n = (p.name || "").toLowerCase();
  if (n.includes("échauffement")) return "rope";
  if (n.includes("bird-dog")) return "birddog";
  if (n.includes("gainage latéral")) return "sideplank";
  if (n.includes("respiration") || n.includes("bascule")) return "rest";
  if (n.includes("marche")) return "rope";
  if (n.includes("saut")) return "jump";
  if (n.includes("mollet")) return "jump";
  if (n.includes("sandbag")) {
    if (n.includes("row")) return "sbrow";
    if (n.includes("soulevé")) return "hinge";
    return "sbsquat";
  }
  if (n.includes("squat")) return "squat";
  if (n.includes("pompes")) return "pushup";
  if (n.includes("row")) return "row";
  if (n.includes("élévation")) return "press";
  if (n.includes("press") || n.includes("développé")) return "press";
  if (n.includes("curl")) return "curl";
  if (n.includes("face-pull")) return "facepull";
  if (n.includes("swing")) return "swing";
  if (n.includes("fente")) return "lunge";
  if (n.includes("kickback") || n.includes("extension")) return "lunge";
  if (n.includes("soulevé")) return "hinge";
  if (n.includes("chaise")) return "wallsit";
  if (n.includes("étirement") || n.includes("récupération") || n.includes("relaxation")) return "stretch";
  if (p.tag === "round" || p.tag === "shadow") return "shadow";
  if (p.tag === "rest") return "rest";
  if (p.tag === "cardio") return "rope";
  return "shadow";
}
function illuSvg(key) {
  const il = ILLUS[key] || ILLUS.shadow;
  return '<svg viewBox="0 0 120 120" class="a-' + il.a + '" xmlns="http://www.w3.org/2000/svg">' +
    '<g stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
    il.s + "</g></svg>";
}

/* ============ ÉTAT ============ */
let profileId = null;
let currentProgram = "complet";
let intensity = "normal";
let durTarget = "auto";
let themePref = "auto";
let phases = [];
let phaseIndex = 0;
let remaining = 0;
let running = false;
let started = false;
let prepMode = false;
let prepRemaining = PREP_DUR;
let lastTick = null;
let rafId = null;
let lastBeepSecond = null;
let saidTenSeconds = false;
let saidHalf = false;
let soundOn = true;
let voiceOn = true;
let vibeOn = true;
let history = [];
let progLevel = 0;
let customs = {};

/* ============ PERSISTANCE (cloisonnée par profil) ============ */
function sk(base) { return base + "." + profileId; }
function migrateOldStorage() {
  try {
    if (localStorage.getItem("boxingTimerPrefs") && !localStorage.getItem("boxingTimerPrefs.allan")) {
      ["boxingTimerPrefs", "boxingTimerHistory", "boxingTimerCustom"].forEach(k => {
        const v = localStorage.getItem(k);
        if (v !== null) { localStorage.setItem(k + ".allan", v); localStorage.removeItem(k); }
      });
    }
  } catch (e) {}
}
function loadPrefs() {
  intensity = "normal"; durTarget = "auto"; themePref = "auto";
  soundOn = true; voiceOn = true; vibeOn = true;
  currentProgram = PROFILES[profileId].defaultProgram;
  try {
    const s = JSON.parse(localStorage.getItem(sk("boxingTimerPrefs")) || "{}");
    if (s.program) currentProgram = s.program;
    if (s.intensity && INTENSITY[s.intensity]) intensity = s.intensity;
    if (s.durTarget) durTarget = s.durTarget;
    if (s.themePref) themePref = s.themePref;
    if (typeof s.soundOn === "boolean") soundOn = s.soundOn;
    if (typeof s.voiceOn === "boolean") voiceOn = s.voiceOn;
    if (typeof s.vibeOn === "boolean") vibeOn = s.vibeOn;
  } catch (e) {}
}
function savePrefs() {
  try {
    localStorage.setItem(sk("boxingTimerPrefs"), JSON.stringify({
      program: currentProgram, intensity, durTarget, themePref, soundOn, voiceOn, vibeOn
    }));
  } catch (e) {}
}
function loadHistory() {
  try { history = JSON.parse(localStorage.getItem(sk("boxingTimerHistory")) || "[]"); }
  catch (e) { history = []; }
  if (!Array.isArray(history)) history = [];
}
function saveHistory() {
  try { localStorage.setItem(sk("boxingTimerHistory"), JSON.stringify(history)); } catch (e) {}
}
function loadCustoms() {
  try { customs = JSON.parse(localStorage.getItem(sk("boxingTimerCustom")) || "{}"); }
  catch (e) { customs = {}; }
  if (!customs || typeof customs !== "object") customs = {};
}
function saveCustoms() {
  try { localStorage.setItem(sk("boxingTimerCustom"), JSON.stringify(customs)); } catch (e) {}
}
function getPrograms() { return PROFILES[profileId].programs; }
function getProgram(key) { return getPrograms()[key] || customs[key] || null; }

/* ============ SEMAINES / PROGRESSION ============ */
function weekKey(dt) {
  const d = new Date(dt);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  d.setHours(12, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}
function shiftWeek(key, delta) {
  const d = new Date(key + "T12:00:00");
  d.setDate(d.getDate() + 7 * delta);
  return d.toISOString().slice(0, 10);
}
function weekCounts() {
  const c = {};
  history.forEach(h => { const k = weekKey(h.d); c[k] = (c[k] || 0) + 1; });
  return c;
}
function computeProgLevel() {
  if (!PROFILES[profileId].progression) return 0;
  const c = weekCounts();
  let lvl = 0;
  const wk = weekKey(new Date());
  if ((c[wk] || 0) >= 2) lvl++;
  let prev = shiftWeek(wk, -1);
  while ((c[prev] || 0) >= 2) { lvl++; prev = shiftWeek(prev, -1); }
  return Math.min(lvl, 6);
}
function computeStreak() {
  const c = weekCounts();
  const wk = weekKey(new Date());
  let s = 0;
  if ((c[wk] || 0) >= 1) s++;
  let prev = shiftWeek(wk, -1);
  while ((c[prev] || 0) >= 1) { s++; prev = shiftWeek(prev, -1); }
  return s;
}

/* ============ PHASES EFFECTIVES ============ */
function buildPhases() {
  const prog = getProgram(currentProgram);
  const f = INTENSITY[intensity];
  const bonus = progLevel * 5;
  const baseTotal = prog.phases.reduce((a, p) => a + p.dur, 0);
  let scale = 1;
  if (durTarget !== "auto" && baseTotal > 0) {
    scale = Math.min(1.4, Math.max(0.7, (parseInt(durTarget, 10) * 60) / baseTotal));
  }
  return prog.phases.map(p => {
    let d = p.dur * scale * (p.tag === "rest" ? f.rest : f.work);
    if (p.tag !== "rest") d += bonus;
    d = Math.max(10, Math.round(d / 5) * 5);
    return Object.assign({}, p, { dur: d });
  });
}

/* ============ AUDIO + VIBRATIONS ============ */
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}
function beep(freq, durMs, vol) {
  if (!audioCtx || !soundOn) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMs / 1000);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + durMs / 1000);
}
function vibrate(pattern) {
  if (vibeOn && navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) {} }
}
const beepCountdown = () => { beep(880, 150, 0.3); vibrate(60); };
const beepFinal = () => { beep(1320, 450, 0.4); vibrate(250); };
const beepHalf = () => { beep(990, 220, 0.3); vibrate(120); };
function beepStart() {
  beep(660, 120, 0.35);
  setTimeout(() => beep(990, 160, 0.35), 160);
  vibrate([80, 60, 120]);
}

/* ============ MUSIQUE ============ */
let ytPlayer = null;
let audioEl = null;
let localTracks = [];
let localIdx = 0;
let musicSource = null;
let musicPlaying = false;

function parseYt(u) {
  const l = (u || "").match(/[?&]list=([\w-]+)/);
  const v = (u || "").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return { list: l && l[1], vid: v && v[1] };
}
function loadYtApi(cb) {
  if (window.YT && window.YT.Player) return cb();
  window.onYouTubeIframeAPIReady = cb;
  if (!document.getElementById("ytapi")) {
    const s = document.createElement("script");
    s.id = "ytapi";
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  }
}
function loadYt() {
  const { list, vid } = parseYt(document.getElementById("ytUrl").value);
  const now = document.getElementById("musicNow");
  if (!list && !vid) { now.textContent = "Lien YouTube non reconnu."; return; }
  document.getElementById("ytWrap").innerHTML = '<div id="ytPlayer"></div>';
  now.textContent = "Chargement…";
  loadYtApi(() => {
    const vars = { autoplay: 1 };
    if (list) { vars.listType = "playlist"; vars.list = list; }
    ytPlayer = new YT.Player("ytPlayer", {
      height: "80", width: "100%",
      videoId: vid || undefined,
      playerVars: vars,
      events: {
        onReady: e => {
          e.target.setVolume(80);
          e.target.playVideo();
          musicSource = "yt";
          musicPlaying = true;
          now.textContent = "Lecture YouTube";
          updateMusicBtn();
        }
      }
    });
  });
}
function ensureAudioEl() {
  if (!audioEl) {
    audioEl = document.createElement("audio");
    audioEl.addEventListener("ended", () => playLocal((localIdx + 1) % localTracks.length));
  }
  return audioEl;
}
function playLocal(i) {
  if (!localTracks.length) return;
  localIdx = i;
  const a = ensureAudioEl();
  a.src = localTracks[i].url;
  a.volume = 0.9;
  a.play().catch(() => {});
  musicSource = "local";
  musicPlaying = true;
  document.getElementById("musicNow").textContent = "♪ " + localTracks[i].name;
  updateMusicBtn();
}
function loadLocalFiles(files) {
  localTracks = Array.from(files || []).map(f => ({ name: f.name, url: URL.createObjectURL(f) }));
  if (localTracks.length) playLocal(0);
}
function toggleMusic() {
  if (musicSource === "yt" && ytPlayer) {
    try { musicPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo(); } catch (e) { return; }
  } else if (musicSource === "local" && audioEl) {
    musicPlaying ? audioEl.pause() : audioEl.play().catch(() => {});
  } else return;
  musicPlaying = !musicPlaying;
  updateMusicBtn();
}
function updateMusicBtn() {
  const b = document.getElementById("btnMusic");
  if (b) b.textContent = musicPlaying ? "⏸ Pause musique" : "▶ Lecture musique";
}
function duckMusic() {
  if (ytPlayer && ytPlayer.setVolume) { try { ytPlayer.setVolume(12); } catch (e) {} }
  if (audioEl) audioEl.volume = 0.12;
}
function restoreMusic() {
  if (ytPlayer && ytPlayer.setVolume) { try { ytPlayer.setVolume(80); } catch (e) {} }
  if (audioEl) audioEl.volume = 0.9;
}

/* ============ VOIX ============ */
const synth = window.speechSynthesis || null;
let frVoice = null;
function pickVoice() {
  if (!synth) return;
  const voices = synth.getVoices();
  frVoice = voices.find(v => v.lang === "fr-FR") ||
            voices.find(v => v.lang && v.lang.startsWith("fr")) || null;
}
if (synth) { pickVoice(); synth.onvoiceschanged = pickVoice; }
function speak(text) {
  if (!synth || !voiceOn) return;
  synth.cancel();
  duckMusic();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  if (frVoice) u.voice = frVoice;
  u.rate = 1.05;
  u.onend = u.onerror = () => restoreMusic();
  setTimeout(restoreMusic, 8000);
  synth.speak(u);
}
function roundInfo(idx) {
  const rounds = phases.map((p, i) => p.tag === "round" ? i : -1).filter(i => i >= 0);
  const pos = rounds.indexOf(idx);
  return pos >= 0 ? `Round ${pos + 1} / ${rounds.length}` : "";
}
function announcePhase(idx) {
  const p = phases[idx];
  if (p.tag === "rest") {
    const next = phases[idx + 1];
    let txt = p.name + ", " + Math.round(p.dur) + " secondes.";
    if (next) txt += " Ensuite : " + next.name + ".";
    speak(txt);
  } else {
    let txt = p.name + ".";
    const ri = roundInfo(idx);
    if (p.tag === "round" && ri) txt = p.name + ". " + ri.replace("/", "sur") + ".";
    speak(txt);
  }
}

/* ============ WAKE LOCK ============ */
let wakeLock = null;
async function acquireWake() {
  if (navigator.wakeLock && navigator.wakeLock.request) {
    try { wakeLock = await navigator.wakeLock.request("screen"); } catch (e) {}
  }
}
function releaseWake() {
  if (wakeLock) { try { wakeLock.release(); } catch (e) {} wakeLock = null; }
}
document.addEventListener("visibilitychange", () => {
  if (running && document.visibilityState === "visible") acquireWake();
});

/* ============ THÈME ============ */
const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
function applyTheme() {
  const resolved = themePref === "auto" ? (mq && mq.matches ? "dark" : "light") : themePref;
  document.body.dataset.theme = resolved;
  const b = document.getElementById("btnTheme");
  if (b) b.textContent = "🌓 Thème : " + (themePref === "auto" ? "auto" : themePref === "dark" ? "sombre" : "clair");
}
if (mq && mq.addEventListener) mq.addEventListener("change", () => { if (themePref === "auto") applyTheme(); });

/* ============ DOM ============ */
const $ = id => document.getElementById(id);
const elTime = $("timeDisplay"), elFill = $("progressFill"),
      elName = $("phaseName"), elDesc = $("phaseDesc"),
      elBadge = $("phaseBadge"), elCounter = $("phaseCounter"),
      elRound = $("roundIndicator"), elTotal = $("totalRemaining"),
      elList = $("phaseList"), elMain = $("btnMain"),
      elFinish = $("finishScreen"), elMainView = $("mainView"),
      elSound = $("btnSound"), elVoice = $("btnVoice"),
      elVibe = $("btnVibe"),
      elIllu = $("illu"), elBanner = $("progBanner"),
      elProgSel = $("programSelect");

/* ============ HELPERS ============ */
function fmt(sec) {
  sec = Math.max(0, Math.ceil(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
function fmtLong(sec) {
  const h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60);
  return h > 0 ? h + " h " + String(m).padStart(2, "0") : m + " min";
}
function totalRemainingSec() {
  let t = remaining;
  for (let i = phaseIndex + 1; i < phases.length; i++) t += phases[i].dur;
  return t;
}

/* ============ PROFILS — RENDU & SÉLECTION ============ */
function renderProfileScreen() {
  const wrap = $("profileCards");
  wrap.innerHTML = "";
  Object.entries(PROFILES).forEach(([id, P]) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    const av = document.createElement("div");
    av.className = "pc-avatar";
    av.style.background = P.color;
    av.textContent = P.avatar;
    const nm = document.createElement("div");
    nm.className = "pc-name";
    nm.textContent = P.name;
    card.appendChild(av);
    card.appendChild(nm);
    card.addEventListener("click", () => selectProfile(id));
    wrap.appendChild(card);
  });
}
function selectProfile(id) {
  if (!PROFILES[id]) return;
  profileId = id;
  const P = PROFILES[id];
  try { localStorage.setItem("boxingTimerActiveProfile", id); } catch (e) {}
  loadPrefs();
  loadCustoms();
  loadHistory();
  if (!P.allowHard && intensity === "difficile") intensity = "normal";
  if (!getProgram(currentProgram)) currentProgram = P.defaultProgram;
  document.querySelectorAll("#intensitySelect button").forEach(b => {
    if (b.dataset.int === "difficile") b.style.display = P.allowHard ? "" : "none";
    b.classList.toggle("active", b.dataset.int === intensity);
  });
  document.querySelectorAll("#durSelect button").forEach(b =>
    b.classList.toggle("active", b.dataset.dur === durTarget));
  const pb = $("btnProfile");
  if (pb) { pb.textContent = P.avatar; pb.title = "Profil : " + P.name + " — changer"; }
  applyTheme();
  renderToggles();
  renderProgramButtons();
  edRenderSelect();
  edRenderPhases();
  $("profileScreen").classList.add("hidden");
  reset();
}
function showProfileScreen() {
  if (running) startPause();
  $("profileScreen").classList.remove("hidden");
}

/* ============ RENDU ============ */
function renderProgramButtons() {
  elProgSel.innerHTML = "";
  const all = Object.assign({}, getPrograms(), customs);
  Object.entries(all).forEach(([key, prog]) => {
    const total = prog.phases.reduce((a, p) => a + p.dur, 0);
    const b = document.createElement("button");
    b.dataset.prog = key;
    b.innerHTML = (customs[key] ? "⭐ " : "") + prog.label +
      '<span class="p-min">' + Math.round(total / 60) + " min</span>";
    b.classList.toggle("active", key === currentProgram);
    b.addEventListener("click", () => selectProgram(key));
    elProgSel.appendChild(b);
  });
}
function buildList() {
  elList.innerHTML = "";
  phases.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "phase-item";
    row.id = "phase-row-" + i;
    row.innerHTML =
      `<span class="p-num">${i + 1}</span>` +
      `<span class="badge ${p.tag}">${p.tag}</span>` +
      `<span class="p-name">${p.name}</span>` +
      `<span class="p-dur">${fmt(p.dur)}</span>`;
    elList.appendChild(row);
  });
}
function setIllu(p) {
  elIllu.innerHTML = illuSvg(illuKey(p));
  elIllu.style.color = TAG_COLORS[p.tag] || TAG_COLORS.rest;
}
function renderPhase() {
  if (prepMode) {
    elName.textContent = "Préparation";
    elDesc.textContent = "Mets-toi en place… Premier exercice : " + phases[0].name;
    elBadge.textContent = "prêt ?";
    elBadge.className = "badge rest";
    elCounter.textContent = `Phase 1 / ${phases.length}`;
    elRound.textContent = "";
    elFill.style.background = TAG_COLORS.rest;
    setIllu(phases[0]);
    renderTime();
    return;
  }
  const p = phases[phaseIndex];
  elName.textContent = p.name;
  elDesc.textContent = p.desc || "";
  elBadge.textContent = p.tag;
  elBadge.className = "badge " + p.tag;
  elCounter.textContent = `Phase ${phaseIndex + 1} / ${phases.length}`;
  elRound.textContent = p.tag === "round" ? roundInfo(phaseIndex) : "";
  elFill.style.background = TAG_COLORS[p.tag];
  setIllu(p);
  phases.forEach((_, i) => {
    const row = $("phase-row-" + i);
    if (!row) return;
    row.classList.toggle("current", i === phaseIndex);
    row.classList.toggle("done", i < phaseIndex);
  });
  const activeRow = $("phase-row-" + phaseIndex);
  if (activeRow && activeRow.scrollIntoView) activeRow.scrollIntoView({ block: "nearest", behavior: "smooth" });
  renderTime();
}
function renderTime() {
  if (prepMode) {
    elTime.textContent = fmt(prepRemaining);
    elTime.classList.toggle("warning", prepRemaining <= 3);
    elFill.style.width = Math.max(0, (prepRemaining / PREP_DUR) * 100) + "%";
    elTotal.textContent = fmt(totalRemainingSec());
    return;
  }
  const p = phases[phaseIndex];
  elTime.textContent = fmt(remaining);
  elTime.classList.toggle("warning", remaining <= 3 && started);
  elFill.style.width = Math.max(0, (remaining / p.dur) * 100) + "%";
  elTotal.textContent = fmt(totalRemainingSec());
}
function renderBanner() {
  const P = PROFILES[profileId];
  if (P.note) {
    elBanner.textContent = P.note;
    return;
  }
  if (progLevel > 0) {
    elBanner.innerHTML = "📈 <strong>Progression : +" + (progLevel * 5) +
      " s par exercice</strong> — " + progLevel +
      " semaine" + (progLevel > 1 ? "s" : "") + " consécutive" + (progLevel > 1 ? "s" : "") +
      " à 2 séances ou plus. Continue !";
  } else {
    elBanner.textContent = "📈 Progression : enchaîne 2 séances par semaine pour allonger automatiquement les exercices (+5 s par semaine d'assiduité, max +30 s).";
  }
}
function renderDurInfo() {
  const total = phases.reduce((a, p) => a + p.dur, 0);
  const prog = getProgram(currentProgram);
  $("durInfo").textContent = "Séance effective : ≈ " + Math.round(total / 60) + " min (" +
    prog.label + ", " + INTENSITY[intensity].label +
    (durTarget !== "auto" ? ", cible " + durTarget + " min" : "") + ")";
}
function renderStats() {
  $("statSessions").textContent = history.length;
  $("statTime").textContent = fmtLong(history.reduce((a, h) => a + (h.t || 0), 0));
  const wkNow = weekKey(new Date());
  $("statWeek").textContent = history.filter(h => weekKey(h.d) === wkNow).length;
  $("statStreak").textContent = computeStreak();
  $("statRounds").textContent = history.reduce((a, h) => {
    const pr = getProgram(h.p);
    return a + (pr ? pr.phases.filter(x => x.tag === "round").length : 0);
  }, 0);
  $("statLevel").textContent = "+" + (progLevel * 5) + " s";
  const split = {};
  history.forEach(h => { split[h.p] = (split[h.p] || 0) + 1; });
  $("statsSplit").textContent = history.length
    ? "Répartition : " + Object.entries(split).map(([k, v]) => {
        const pr = getProgram(k);
        return (pr ? pr.label : k) + " ×" + v;
      }).join(" · ")
    : "Aucune séance enregistrée pour l'instant.";
  const list = $("histList");
  list.innerHTML = "";
  history.slice(-8).reverse().forEach(h => {
    const row = document.createElement("div");
    row.className = "h-row";
    const dt = new Date(h.d);
    const pr = getProgram(h.p);
    const d1 = document.createElement("span");
    d1.className = "h-date";
    d1.textContent = dt.toLocaleDateString("fr-FR", { weekday: "short", day: "2-digit", month: "2-digit" });
    const d2 = document.createElement("span");
    d2.textContent = pr ? pr.label : h.p;
    const d3 = document.createElement("span");
    d3.textContent = Math.round((h.t || 0) / 60) + " min";
    row.appendChild(d1); row.appendChild(d2); row.appendChild(d3);
    if (h.n) {
      const note = document.createElement("div");
      note.className = "h-note";
      note.textContent = "📝 " + h.n;
      row.appendChild(note);
    }
    list.appendChild(row);
  });
}
function renderToggles() {
  elSound.textContent = soundOn ? "🔊 Sons : activés" : "🔇 Sons : coupés";
  elSound.classList.toggle("on", soundOn);
  elVoice.textContent = voiceOn ? "🗣 Voix : activée" : "🤐 Voix : coupée";
  elVoice.classList.toggle("on", voiceOn);
  elVibe.textContent = vibeOn ? "📳 Vibreur : activé" : "📴 Vibreur : coupé";
  elVibe.classList.toggle("on", vibeOn);
}

/* ============ MOTEUR ============ */
function tick(now) {
  if (!running) return;
  const dt = (now - lastTick) / 1000;
  lastTick = now;

  if (prepMode) {
    prepRemaining -= dt;
    const sec = Math.ceil(prepRemaining);
    if (sec >= 1 && sec <= 3 && sec !== lastBeepSecond) { lastBeepSecond = sec; beepCountdown(); }
    if (prepRemaining <= 0) {
      prepMode = false;
      lastBeepSecond = null;
      beepStart();
      announcePhase(0);
      renderPhase();
    } else {
      renderTime();
    }
    rafId = requestAnimationFrame(tick);
    return;
  }

  remaining -= dt;
  const sec = Math.ceil(remaining);
  const p = phases[phaseIndex];

  if (!saidHalf && (p.tag === "round" || p.tag === "shadow") && p.dur >= 90 && remaining <= p.dur / 2) {
    saidHalf = true;
    beepHalf();
    speak("Moitié du round");
  }
  if (sec === 10 && !saidTenSeconds && p.tag !== "rest" && p.dur >= 30) {
    saidTenSeconds = true;
    speak("10 secondes");
  }
  if (sec >= 1 && sec <= 3 && sec !== lastBeepSecond) { lastBeepSecond = sec; beepCountdown(); }

  if (remaining <= 0) {
    beepFinal();
    nextPhase();
    if (!started) return;
  }
  renderTime();
  rafId = requestAnimationFrame(tick);
}

function nextPhase() {
  if (phaseIndex >= phases.length - 1) { finishSession(); return; }
  phaseIndex++;
  remaining = phases[phaseIndex].dur;
  lastBeepSecond = null;
  saidTenSeconds = false;
  saidHalf = false;
  if (phases[phaseIndex].tag !== "rest") beepStart();
  announcePhase(phaseIndex);
  renderPhase();
}

function startPause() {
  ensureAudio();
  if (!running) {
    running = true;
    if (!started) {
      started = true;
      prepMode = true;
      prepRemaining = PREP_DUR;
      lastBeepSecond = null;
      speak("Préparation. Premier exercice : " + phases[0].name + ".");
      renderPhase();
    }
    acquireWake();
    lastTick = performance.now();
    elMain.textContent = "Pause";
    elMain.classList.add("running");
    rafId = requestAnimationFrame(tick);
  } else {
    running = false;
    cancelAnimationFrame(rafId);
    if (synth) synth.cancel();
    restoreMusic();
    releaseWake();
    elMain.textContent = "Reprendre";
    elMain.classList.remove("running");
  }
}

function skip() {
  ensureAudio();
  if (prepMode) {
    prepMode = false;
    lastBeepSecond = null;
    beepStart();
    announcePhase(0);
    if (running) lastTick = performance.now();
    renderPhase();
    return;
  }
  if (phaseIndex >= phases.length - 1) { finishSession(); return; }
  beepFinal();
  nextPhase();
  if (running) lastTick = performance.now();
  renderTime();
}

function reset() {
  running = false;
  started = false;
  prepMode = false;
  cancelAnimationFrame(rafId);
  if (synth) synth.cancel();
  restoreMusic();
  releaseWake();
  if (!getProgram(currentProgram)) currentProgram = PROFILES[profileId].defaultProgram;
  progLevel = computeProgLevel();
  phases = buildPhases();
  buildList();
  phaseIndex = 0;
  remaining = phases[0].dur;
  prepRemaining = PREP_DUR;
  lastBeepSecond = null;
  saidTenSeconds = false;
  saidHalf = false;
  elMain.textContent = "Démarrer";
  elMain.classList.remove("running");
  elFinish.classList.remove("visible");
  elMainView.classList.remove("hidden");
  renderBanner();
  renderDurInfo();
  renderStats();
  renderPhase();
}

function finishSession() {
  running = false;
  started = false;
  cancelAnimationFrame(rafId);
  releaseWake();
  const total = phases.reduce((a, p) => a + p.dur, 0);
  history.push({ d: new Date().toISOString(), p: currentProgram, t: total });
  saveHistory();
  progLevel = computeProgLevel();
  renderBanner();
  renderStats();
  const wkNow = weekKey(new Date());
  const n = history.filter(h => weekKey(h.d) === wkNow).length;
  $("finishMsg").textContent = "Séance " + n + " cette semaine — " +
    Math.round(total / 60) + " min. Hydrate-toi et récupère.";
  $("noteInput").value = "";
  $("btnSaveNote").textContent = "Enregistrer la note";
  speak("Séance terminée. Bien joué !");
  elMainView.classList.add("hidden");
  elFinish.classList.add("visible");
}

function selectProgram(prog) {
  if (!getProgram(prog)) prog = PROFILES[profileId].defaultProgram;
  currentProgram = prog;
  document.querySelectorAll("#programSelect button").forEach(b =>
    b.classList.toggle("active", b.dataset.prog === prog));
  savePrefs();
  reset();
}
function selectIntensity(int) {
  intensity = int;
  document.querySelectorAll("#intensitySelect button").forEach(b =>
    b.classList.toggle("active", b.dataset.int === int));
  savePrefs();
  reset();
}
function selectDur(v) {
  durTarget = v;
  document.querySelectorAll("#durSelect button").forEach(b =>
    b.classList.toggle("active", b.dataset.dur === v));
  savePrefs();
  reset();
}

/* ============ ÉDITEUR DE SÉANCES ============ */
let edPhases = [];
let editingId = null;

function edRenderSelect() {
  const sel = $("edSelect");
  sel.innerHTML = '<option value="">— Nouvelle séance —</option>';
  Object.entries(customs).forEach(([k, v]) => {
    const o = document.createElement("option");
    o.value = k;
    o.textContent = v.label;
    sel.appendChild(o);
  });
  sel.value = editingId || "";
}
function edRenderPhases() {
  const wrap = $("edPhases");
  wrap.innerHTML = "";
  edPhases.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "ed-phase";
    const name = document.createElement("input");
    name.type = "text"; name.value = p.name; name.placeholder = "Nom de la phase";
    name.addEventListener("input", () => { p.name = name.value; });
    const tag = document.createElement("select");
    TAGS.forEach(t => {
      const o = document.createElement("option");
      o.value = t; o.textContent = t;
      tag.appendChild(o);
    });
    tag.value = p.tag;
    tag.addEventListener("change", () => { p.tag = tag.value; });
    const dur = document.createElement("input");
    dur.type = "number"; dur.min = "5"; dur.step = "5"; dur.value = p.dur;
    dur.addEventListener("input", () => { p.dur = parseInt(dur.value, 10) || 30; });
    const up = document.createElement("button");
    up.textContent = "↑";
    up.addEventListener("click", () => {
      if (i > 0) { [edPhases[i - 1], edPhases[i]] = [edPhases[i], edPhases[i - 1]]; edRenderPhases(); }
    });
    const del = document.createElement("button");
    del.textContent = "✕";
    del.addEventListener("click", () => { edPhases.splice(i, 1); edRenderPhases(); });
    row.appendChild(name); row.appendChild(tag); row.appendChild(dur);
    row.appendChild(up); row.appendChild(del);
    wrap.appendChild(row);
  });
}
function edLoad(id) {
  editingId = id || null;
  if (id && customs[id]) {
    $("edName").value = customs[id].label;
    edPhases = customs[id].phases.map(p => Object.assign({}, p));
  } else {
    $("edName").value = "";
    edPhases = [];
  }
  $("btnEdDelete").classList.toggle("hidden", !editingId);
  edRenderPhases();
}
function edDup() {
  const prog = getProgram(currentProgram);
  editingId = null;
  $("edName").value = prog.label + " (perso)";
  edPhases = prog.phases.map(p => Object.assign({}, p));
  $("btnEdDelete").classList.add("hidden");
  edRenderSelect();
  edRenderPhases();
}
function edSave() {
  const name = $("edName").value.trim();
  if (!name || !edPhases.length) {
    $("edName").placeholder = "⚠ Donne un nom et au moins une phase";
    return;
  }
  const id = editingId || "c" + Date.now();
  customs[id] = {
    label: name,
    phases: edPhases.map(p => ({
      name: p.name || "Exercice",
      tag: TAGS.includes(p.tag) ? p.tag : "circuit",
      dur: Math.max(5, parseInt(p.dur, 10) || 30),
      desc: p.desc || ""
    }))
  };
  editingId = id;
  saveCustoms();
  edRenderSelect();
  $("btnEdDelete").classList.remove("hidden");
  renderProgramButtons();
  selectProgram(id);
}
function edDelete() {
  if (editingId && customs[editingId]) {
    delete customs[editingId];
    saveCustoms();
    edLoad(null);
    edRenderSelect();
    renderProgramButtons();
    if (!getProgram(currentProgram)) selectProgram(PROFILES[profileId].defaultProgram);
  }
}

/* ============ ÉVÉNEMENTS ============ */
elMain.addEventListener("click", startPause);
$("btnSkip").addEventListener("click", skip);
$("btnReset").addEventListener("click", reset);
$("btnRestart").addEventListener("click", reset);
$("timerCard").addEventListener("click", () => { if (started) startPause(); });
$("btnProfile").addEventListener("click", showProfileScreen);
document.querySelectorAll("#intensitySelect button").forEach(b =>
  b.addEventListener("click", () => selectIntensity(b.dataset.int)));
document.querySelectorAll("#durSelect button").forEach(b =>
  b.addEventListener("click", () => selectDur(b.dataset.dur)));
elSound.addEventListener("click", () => { soundOn = !soundOn; savePrefs(); renderToggles(); });
elVoice.addEventListener("click", () => {
  voiceOn = !voiceOn;
  if (!voiceOn && synth) { synth.cancel(); restoreMusic(); }
  savePrefs(); renderToggles();
});
elVibe.addEventListener("click", () => { vibeOn = !vibeOn; savePrefs(); renderToggles(); });
$("btnTheme").addEventListener("click", () => {
  themePref = themePref === "auto" ? "light" : themePref === "light" ? "dark" : "auto";
  savePrefs();
  applyTheme();
});
$("btnClearHist").addEventListener("click", () => {
  if (confirm("Effacer tout l'historique des séances de ce profil ?")) {
    history = [];
    saveHistory();
    progLevel = computeProgLevel();
    renderBanner();
    renderStats();
  }
});
$("btnSaveNote").addEventListener("click", () => {
  const v = $("noteInput").value.trim();
  if (v && history.length) {
    history[history.length - 1].n = v;
    saveHistory();
    renderStats();
    $("btnSaveNote").textContent = "✓ Note enregistrée";
  }
});
$("btnYtLoad").addEventListener("click", loadYt);
$("btnMusic").addEventListener("click", toggleMusic);
$("musicFiles").addEventListener("change", e => loadLocalFiles(e.target.files));
$("edSelect").addEventListener("change", e => edLoad(e.target.value));
$("btnEdDup").addEventListener("click", edDup);
$("btnEdAddPhase").addEventListener("click", () => {
  edPhases.push({ name: "", tag: "circuit", dur: 45, desc: "" });
  edRenderPhases();
});
$("btnEdSave").addEventListener("click", edSave);
$("btnEdDelete").addEventListener("click", edDelete);

/* ============ PWA ============ */
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ============ INIT ============ */
migrateOldStorage();
applyTheme();
renderProfileScreen();
