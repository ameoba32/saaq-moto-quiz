"use strict";

(function initQuizI18n(global) {
  const fr = {
    chapters: {
      ch1: "Chapitre 1 – Manœuvrer une moto",
      ch2: "Chapitre 2 – Manœuvrer une moto sur la route",
      ch3: "Chapitre 3 – Agir de façon sécuritaire, coopérative et responsable"
    },
    sections: {
      ch1_p1: "P1 – Contexte particulier",
      ch1_p2: "P2 – Lois de la physique",
      ch1_p3: "P3 – Fonctionnement d’une moto",
      ch1_p4: "P4 – Opérations de base",
      ch1_p5a: "P5a – Position de conduite et direction du regard",
      ch1_p5b: "P5b – Utilisation des commandes",
      ch1_p5c: "P5c – Contrepoids et contrebraquage",
      ch1_p6: "P6 – Manœuvres",
      ch1_p7: "P7 – Réagir aux situations particulières",

      ch2_p1a:
        "P1a – Techniques de conduite : signalisation, réglementation et vérifications visuelles",
      ch2_p1b: "P1b – Techniques de conduite : vitesse et marges de sécurité",
      ch2_p1c: "P1c – Techniques de conduite : communication et tiers de voie",
      ch2_p2: "P2 – Manœuvres sur la route",
      ch2_p3: "P3 – Autres usagers",
      ch2_p4: "P4 – Pièges de la circulation",

      ch3_p1: "P1 – Risques liés au conducteur",
      ch3_p2: "P2 – Risques liés au contexte routier",
      ch3_p3: "P3 – Risques liés au véhicule utilisé",
      ch3_p4: "P4 – Planification des déplacements"
    },
    questions: {
      ch1_p1_q1:
        "Le rapport poids-puissance d’une moto est la relation entre le poids de la moto et la puissance de son moteur.",
      ch1_p1_q2: "Tous les types de motos se conduisent de la même façon.",
      ch1_p1_q3:
        "Il est recommandé de porter un équipement de protection complet et approprié dès le début de sa formation en circuit fermé.",
      ch1_p1_q4: "À moto, la vitesse n’influence pas l’équilibre.",
      ch1_p1_q5:
        "Le type de moto et les conditions environnementales peuvent affecter la stabilité de la moto et donc affecter l’équilibre.",

      ch1_p2_q1:
        "Les charges supplémentaires placées sur une moto peuvent influencer son centre de gravité.",
      ch1_p2_q2:
        "La force centrifuge attire un véhicule vers l’intérieur d’un virage ou d’une courbe.",
      ch1_p2_q3:
        "La force centrifuge diminue en fonction de la vitesse de la moto, de son poids et du rayon du virage ou de la courbe.",
      ch1_p2_q4: "Les effets de la force centrifuge se font davantage sentir à très basse vitesse.",
      ch1_p2_q5: "La force centrifuge n’influence pas la prise d’une courbe.",
      ch1_p2_q6: "L’inertie est la résistance qu’un corps oppose à la variation du mouvement.",
      ch1_p2_q7: "L’inertie est la tendance du véhicule à aller en ligne droite.",
      ch1_p2_q8: "Plus la rotation des roues de la moto est rapide, plus grand est l’effet gyroscopique.",
      ch1_p2_q9:
        "Plus grand est l’effet gyroscopique, plus il est facile de maintenir l’équilibre sur une moto.",
      ch1_p2_q10: "La force d’impact est liée à l’énergie cinétique.",
      ch1_p2_q11: "La vitesse et le poids influencent l’accumulation d’énergie cinétique.",
      ch1_p2_q12:
        "En cas de collision, l’énergie cinétique se dissipe entre autres par le frottement des pneus sur l’asphalte et par la déformation du métal.",
      ch1_p2_q13:
        "Il est possible d’amortir le choc en cas de collision en se cramponnant au guidon de la moto.",
      ch1_p2_q14:
        "Le corps du conducteur absorbe l’énergie cinétique accumulée en cas de collision.",
      ch1_p2_q15: "La distance de freinage d’une moto est plus grande si ses pneus sont usés.",

      ch1_p3_q1: "Le levier du frein avant est situé sur la poignée gauche.",
      ch1_p3_q2: "L’interrupteur d’urgence est situé sur la poignée droite.",
      ch1_p3_q3: "La pédale du frein arrière est située à gauche.",
      ch1_p3_q4: "Le démarreur est situé sur la poignée droite.",
      ch1_p3_q5: "La commande des clignotants est située sur la poignée droite.",
      ch1_p3_q6: "Le klaxon est situé sur la poignée droite.",
      ch1_p3_q7: "Le levier d’embrayage est situé sur la poignée gauche.",
      ch1_p3_q8:
        "Pour manœuvrer une moto de façon sécuritaire, il faut d’abord être capable d’utiliser les commandes sans les regarder.",
      ch1_p3_q9: "Le frein arrière est le plus puissant des deux freins.",
      ch1_p3_q10:
        "C’est après avoir mis la clé de contact à la position « ON » qu’il faut appuyer sur le démarreur.",
      ch1_p3_q11: "L’interrupteur d’urgence permet d’éteindre instantanément le moteur.",
      ch1_p3_q12: "Toutes les motos sont munies d’un enrichisseur qui dose le mélange air-essence.",
      ch1_p3_q13: "Manipuler l’enrichisseur pendant que la moto est en mouvement est sécuritaire.",
      ch1_p3_q14:
        "Le système de freinage d’une moto peut avoir des incidences sur la façon de freiner.",
      ch1_p3_q15: "On trouve un robinet d’essence sur tous les modèles de motos.",

      ch1_p4_q1:
        "Lors du déplacement d’une moto sans l’aide du moteur, serrer le levier du frein avant peut aider à garder l’équilibre.",
      ch1_p4_q2:
        "Il est important de vérifier si les deux pieds touchent le sol lorsque la moto est immobilisée, car sinon, c’est que le type de moto ne convient probablement pas à la stature de son conducteur.",
      ch1_p4_q3: "Il n’y a pas de méthode précise pour relever une moto.",
      ch1_p4_q4: "Il faut s’assurer de fermer le robinet d’essence d’une moto avant de la relever.",
      ch1_p4_q5:
        "Pour relever une moto de façon sécuritaire, il faut d’abord s’assurer d’éteindre le moteur.",
      ch1_p4_q6:
        "Le démarrage d’une moto s’effectue différemment selon qu’elle est munie ou non d’un enrichisseur.",
      ch1_p4_q7: "L’enrichisseur doit être utilisé lors du démarrage du moteur à froid.",
      ch1_p4_q8: "Avant de partir sur la route, il est nécessaire de laisser le moteur réchauffer.",

      ch1_p5a_q1: "La position de conduite n’a aucune influence sur la façon de manœuvrer une moto.",
      ch1_p5a_q2: "La position de conduite diffère selon le type de moto conduit.",
      ch1_p5a_q3: "La fatigue du conducteur peut influencer sa position de conduite.",
      ch1_p5a_q4:
        "Bien placer ses mains permet d’utiliser les commandes plus agilement et réduit les risques de fausses manœuvres.",
      ch1_p5a_q5: "Une mauvaise position des mains peut entraîner une accélération involontaire.",
      ch1_p5a_q6:
        "La position des pieds et des genoux n’influence pas la façon de faire un contrepoids ou un contrebraquage.",
      ch1_p5a_q7: "Serrer ses genoux contre le réservoir augmente les risques d’accident dans une courbe.",
      ch1_p5a_q8: "Un véhicule a tendance à se diriger à l’endroit où son conducteur regarde.",
      ch1_p5a_q9:
        "La direction du regard est particulièrement importante lors de la prise d’un virage ou d’une courbe ou de l’évitement d’un obstacle.",

      ch1_p5b_q1: "Contrôler l’embrayage permet de trouver le point de friction.",
      ch1_p5b_q2:
        "Contrôler l’embrayage favorise le maintien de l’équilibre lors de manœuvres exécutées à basse vitesse.",
      ch1_p5b_q3: "Le point de friction est atteint lorsque la roue arrière commence à se mettre en mouvement.",
      ch1_p5b_q4: "Contrôler la poignée des gaz permet de maintenir une vitesse constante.",
      ch1_p5b_q5: "Le freinage en moto est progressif et implique l’utilisation des deux freins.",
      ch1_p5b_q6:
        "Doser l’utilisation des freins, c’est appliquer une plus grande force sur le levier du frein avant.",

      ch1_p5c_q1:
        "Faire un contrepoids, c’est déplacer son corps pour compenser le débalancement du poids de la moto.",
      ch1_p5c_q2:
        "Le contrepoids est la technique utilisée pour prendre un virage, pour prendre une courbe ou pour éviter un obstacle lorsque la vitesse est supérieure à 25 km/h.",
      ch1_p5c_q3:
        "À basse vitesse, il est nécessaire de faire un contrepoids puisque l’effet gyroscopique ne se fait presque pas sentir.",
      ch1_p5c_q4: "On utilise le contrebraquage seulement lorsqu’on circule à une vitesse inférieure à 25 km/h.",
      ch1_p5c_q5:
        "On utilise le contrebraquage seulement lorsqu’on prend une courbe à une vitesse supérieure à 25 km/h.",
      ch1_p5c_q6:
        "Le contrebraquage est une technique qui permet de prendre un virage ou une courbe ou d’éviter un obstacle lorsque la vitesse est supérieure à 25 km/h.",
      ch1_p5c_q7:
        "Faire un contrebraquage permet entre autres de contrer l’effet gyroscopique et l’inertie.",
      ch1_p5c_q8: "Faire un contrebraquage permet de contrer la force centrifuge.",
      ch1_p5c_q9:
        "Faire un contrebraquage, c’est pousser sur la poignée droite du guidon quand on veut diriger la moto vers la gauche.",
      ch1_p5c_q10: "Faire un contrebraquage à 50 km/h ou à 75 km/h ne comporte aucune différence.",

      ch1_p6_q1:
        "Pour mettre une moto en mouvement, il faut utiliser les techniques suivantes : utiliser les freins, contrôler l’embrayage, utiliser le sélecteur de vitesses, contrôler la poignée des gaz.",
      ch1_p6_q2:
        "Que ce soit pour ralentir ou pour accélérer, le changement de vitesse s’effectue de façon totalement identique.",
      ch1_p6_q3: "Sauter un rapport lors d’une accélération n’augmente pas le temps nécessaire pour faire un dépassement.",
      ch1_p6_q4: "Sauter un rapport lors d’une rétrogradation entraîne une forte compression du moteur.",
      ch1_p6_q5: "Avant d’appliquer les freins, il est préférable de ralentir et de rétrograder.",
      ch1_p6_q6: "Doser l’utilisation des deux freins aide à prévenir le blocage des roues.",
      ch1_p6_q7:
        "Freiner dans une courbe nécessite la même distance de freinage que freiner en ligne droite.",
      ch1_p6_q8:
        "Lors d’un freinage d’urgence, si le frein avant est appliqué avec trop de force, il y aura transfert de poids vers la suspension avant.",
      ch1_p6_q9:
        "Lors d’un freinage d’urgence dans une courbe, il faut tenir compte de l’inclinaison de la moto.",
      ch1_p6_q10: "La trajectoire sécuritaire pour prendre une courbe va de l’extérieur vers l’intérieur.",
      ch1_p6_q11: "Éviter un obstacle s’effectue différemment selon la vitesse à laquelle on circule.",

      ch1_p7_q1:
        "Le guidonnage et le louvoiement de la moto peuvent être liés à une mauvaise répartition des charges.",
      ch1_p7_q2: "Freiner peut amplifier l’effet du guidonnage et du louvoiement.",
      ch1_p7_q3: "Le bris du câble d’embrayage rend la rétrogradation presque impossible.",
      ch1_p7_q4: "Il est impossible de débloquer la poignée des gaz.",
      ch1_p7_q5: "L’aquaplanage occasionne une perte d’adhérence des pneus.",
      ch1_p7_q6: "Il faut absolument éviter de freiner lors de l’aquaplanage.",

      ch2_p1a_q1: "Les yeux fournissent environ 60 % de l’information nécessaire pour conduire.",
      ch2_p1a_q2: "Le champ visuel, c’est la vision centrale et la vision périphérique.",
      ch2_p1a_q3: "Le champ visuel est réduit de moitié à une vitesse de 100 km/h.",
      ch2_p1a_q4: "Rouler à une vitesse élevée n’influence pas la dimension du champ visuel.",
      ch2_p1a_q5: "Rouler à une vitesse élevée entraîne la concentration du regard sur un seul point.",
      ch2_p1a_q6: "Le port d’un casque peut engendrer une diminution de la vision périphérique.",
      ch2_p1a_q7:
        "Le conducteur doit réduire sa vitesse lorsque la visibilité est insuffisante ou lorsque la chaussée est glissante.",

      ch2_p1b_q1:
        "Adapter sa vitesse au contexte routier, c’est tenir compte des conditions de la circulation et des conditions environnementales dans le choix de sa vitesse.",
      ch2_p1b_q2: "Le temps de réaction influence la distance d’arrêt.",
      ch2_p1b_q3: "Un système de freinage ABS réduit la distance de freinage.",

      ch2_p1c_q1: "Ne pas signaler ses intentions n’augmente pas les risques de faire un accident.",
      ch2_p1c_q2: "La voie publique se divise en trois quand on conduit une moto.",
      ch2_p1c_q3: "Le tiers de voie droit est le plus utilisé.",
      ch2_p1c_q4: "Le tiers de voie gauche est le plus approprié pour dépasser ou pour tourner à gauche.",
      ch2_p1c_q5: "Le tiers de voie central est la position stratégique lors de grands vents.",
      ch2_p1c_q6: "Le tiers de voie gauche est la position stratégique lorsqu’un véhicule lourd s’approche en sens inverse.",
      ch2_p1c_q7: "Le tiers de voie gauche est une position plus prudente avant d’arriver au sommet d’une côte.",
      ch2_p1c_q8: "Il est plus sécuritaire de limiter à huit le nombre de motocyclistes d’un groupe.",
      ch2_p1c_q9: "La formation en zigzag permet de circuler de façon sécuritaire.",
      ch2_p1c_q10:
        "Lors de la conduite en groupe, il faut maintenir des marges de sécurité d’au moins deux secondes entre les véhicules.",

      ch2_p2_q1: "La visibilité est souvent en cause dans les accidents se produisant aux intersections.",
      ch2_p2_q2:
        "À l’approche d’une intersection, il faut se placer dans le tiers de voie qui permettra d’exécuter la manœuvre de façon sécuritaire.",
      ch2_p2_q3:
        "Pour prendre un virage à une intersection, il faut suivre la trajectoire qui permettra de maintenir des marges de sécurité.",
      ch2_p2_q4: "Les accidents dans les courbes sont souvent occasionnés par une vitesse inadaptée au rayon de la courbe.",
      ch2_p2_q5: "Sur une route comportant des courbes successives, il faut accélérer à la sortie de chacune des courbes.",
      ch2_p2_q6: "Pendant la prise d’une courbe, il faut maintenir une vitesse constante.",
      ch2_p2_q7: "Il faut adapter sa vitesse à celle des autres véhicules pour entrer sur une autoroute.",
      ch2_p2_q8: "Pour quitter une autoroute, il faut accélérer.",
      ch2_p2_q9: "Pour effectuer un dépassement de façon sécuritaire, il faut faire des vérifications visuelles adéquates.",
      ch2_p2_q10: "Pour se stationner, il faut placer la moto en parallèle avec la bordure du trottoir.",

      ch2_p3_q1: "Il faut éviter de se trouver dans les angles morts d’un véhicule lourd.",
      ch2_p3_q2: "Les véhicules lourds ne créent pas de turbulences lorsqu’ils circulent à vitesse élevée.",
      ch2_p3_q3:
        "Pour agir de façon sécuritaire, il faut augmenter ses marges de sécurité lorsqu’on circule à proximité d’un véhicule lourd.",
      ch2_p3_q4: "Il est plus sécuritaire de ne jamais suivre de près un véhicule d’urgence.",
      ch2_p3_q5: "Le corridor de sécurité est une mesure de protection pour certains travailleurs de la route.",
      ch2_p3_q6:
        "Pour respecter le corridor de sécurité, il faut ralentir et, si possible, changer de voie lorsqu’un véhicule d’urgence est immobilisé.",
      ch2_p3_q7: "Bloquer un passage pour piétons avec son véhicule n’est pas une façon d’agir de façon coopérative.",
      ch2_p3_q8: "Les piétons n’ont jamais de difficulté à évaluer la vitesse d’un véhicule venant vers eux.",
      ch2_p3_q9: "Il faut anticiper que des cyclistes se faufilent parfois entre les véhicules.",
      ch2_p3_q10: "Établir un contact visuel avec un cycliste est une bonne façon d’agir de façon coopérative.",

      ch2_p4_q1:
        "De nombreux accidents ont lieu aux intersections. Si des arbres ou des véhicules stationnés diminuent la visibilité, il faut redoubler de prudence.",
      ch2_p4_q2:
        "Il est sécuritaire de se trouver dans le tiers droit de la voie lorsqu’un véhicule lourd tourne à droite.",
      ch2_p4_q3:
        "Faire toujours soi-même toutes les vérifications visuelles nécessaires est plus sécuritaire que de les confier aux autres usagers de la route.",
      ch2_p4_q4: "Lorsqu’un conducteur indique que la voie est libre, on peut exécuter la manœuvre.",
      ch2_p4_q5: "Ne pas circuler à proximité d’un véhicule lourd est une bonne habitude à prendre.",
      ch2_p4_q6: "Il peut s’avérer risqué de circuler en moto dans une rue où des voitures sont stationnées.",
      ch2_p4_q7:
        "Circuler dans le tiers de voie droit dans une rue où des véhicules sont stationnés est une bonne façon de prévenir les risques.",
      ch2_p4_q8: "Si une voie ferrée traverse la route en oblique, il faut la franchir en ligne droite.",

      ch3_p1_q1:
        "Il est impossible que l’âge d’un motocycliste diminue sa capacité à manœuvrer une moto de façon sécuritaire, coopérative et responsable.",
      ch3_p1_q2:
        "Avec l’âge, les fonctions cognitives sont modifiées, ce qui peut rendre plus difficile la coordination des mouvements.",
      ch3_p1_q3: "Les raisons pour lesquelles une personne apprend à conduire n’ont jamais d’influence sur la sécurité routière.",
      ch3_p1_q4:
        "Il est impossible que la personnalité d’un motocycliste influence sa façon de conduire et de se conduire sur la route.",
      ch3_p1_q5: "Les émotions peuvent affecter la concentration et la capacité de jugement.",
      ch3_p1_q6: "Garder son sang-froid lors de situations conflictuelles est une bonne façon de ne pas provoquer d’escalade.",
      ch3_p1_q7:
        "Conduire en étant stressé peut rendre la communication avec les autres usagers de la route plus difficile.",
      ch3_p1_q8:
        "Il est impossible qu’un motocycliste soit influencé par les comportements téméraires d’un autre motocycliste.",
      ch3_p1_q9:
        "Se croire meilleur conducteur qu’on ne l’est en réalité peut compromettre sa sécurité et celle des autres.",
      ch3_p1_q10: "Un manque de sommeil entraîne inévitablement une fatigue physique et mentale.",
      ch3_p1_q11: "Un manque de sommeil de cinq heures a le même effet que quelques verres de vin.",
      ch3_p1_q12: "La fatigue est l’une des principales causes de décès sur les routes.",
      ch3_p1_q13: "Conduire une moto demande moins d’effort physique que conduire une voiture.",
      ch3_p1_q14: "Consommer de l’alcool peut réduire la vision périphérique.",
      ch3_p1_q15: "La consommation de médicaments n’a aucun effet sur la conduite d’une moto.",
      ch3_p1_q16: "Consommer de l’alcool n’augmente pas le temps de réaction.",

      ch3_p2_q1:
        "Sous la pluie, pour conserver la capacité de freinage, il faut assécher les freins en freinant à intervalles réguliers.",
      ch3_p2_q2:
        "L’eau peut s’infiltrer entre les plaquettes des freins et les disques et augmenter la distance de freinage.",
      ch3_p2_q3:
        "Il peut être plus sécuritaire de se ranger sur le bord de la route que de circuler en moto par temps de brouillard.",
      ch3_p2_q4: "Les vents latéraux peuvent déporter la moto hors de son tiers de voie.",
      ch3_p2_q5: "En présence de vents, il faut circuler dans le tiers gauche de la voie.",
      ch3_p2_q6:
        "Pour combattre la poussée des vents, il peut s’avérer nécessaire de faire un contrebraquage.",
      ch3_p2_q7: "La nuit, réduire ses dépassements peut être un bon moyen pour diminuer les risques.",
      ch3_p2_q8:
        "Pour conduire de façon sécuritaire dans des conditions environnementales particulières, il faut réduire sa vitesse et augmenter ses marges de sécurité.",
      ch3_p2_q9: "Les routes de terre ou de gravier offrent une traction équivalente aux routes asphaltées.",
      ch3_p2_q10: "Circuler sur une route de terre ou de gravier peut occasionner du guidonnage ou du louvoiement.",
      ch3_p2_q11:
        "Peu importe le type de surface sur laquelle une moto circule, les risques de dérapage demeurent toujours les mêmes.",
      ch3_p2_q12:
        "En moto, la distance de freinage sur une route asphaltée et de gravier est la même.",
      ch3_p2_q13: "Les lignes sur la chaussée ne sont jamais glissantes.",
      ch3_p2_q14:
        "Agir de façon sécuritaire, c’est porter des vêtements aux couleurs claires dans des conditions environnementales particulières.",

      ch3_p3_q1: "Il n’est jamais nécessaire de vérifier le niveau d’huile d’une moto.",
      ch3_p3_q2: "C’est dans le manuel de votre moto que se trouvent les informations relatives à la pression des pneus.",
      ch3_p3_q3: "Il n’est jamais nécessaire de consulter le manuel de sa moto.",
      ch3_p3_q4:
        "Le transport de charges supplémentaires influence la prise de courbes et la conduite de la moto à basse vitesse.",
      ch3_p3_q5: "Une mauvaise répartition des charges peut entraîner du guidonnage ou du louvoiement.",
      ch3_p3_q6:
        "Il peut s’avérer nécessaire d’adapter la hauteur du phare pour compenser le changement d’inclinaison de la moto quand on transporte des charges supplémentaires.",
      ch3_p3_q7:
        "Pour installer des bagages, il faut maintenir le poids de la charge aussi bas et aussi près du centre que possible.",
      ch3_p3_q8:
        "Pour agir de façon sécuritaire, avant de partir avec un passager, il est nécessaire d’établir un mode de communication avec lui.",

      ch3_p4_q1: "Il n’est jamais possible de réduire ses risques d’accident sur la route.",
      ch3_p4_q2: "Quand on est fatigué, le temps de réaction peut être jusqu’à deux fois plus lent que d’habitude.",
      ch3_p4_q3: "Partir en moto alors qu’on est fatigué augmente les risques.",
      ch3_p4_q4:
        "Boire une boisson énergisante après avoir consommé quelques verres de vin réduit les risques d’accident.",
      ch3_p4_q5: "Lorsqu’il pleut à boire debout, il est plus sécuritaire de se déplacer autrement qu’en moto.",
      ch3_p4_q6:
        "Partir avec une moto dont l’état mécanique n’a pas été vérifié depuis longtemps augmente les risques.",
      ch3_p4_q7:
        "À l’arrivée de la nouvelle saison de moto, il est plus sécuritaire de se réhabituer graduellement à conduire avant de partir pour un long trajet.",
      ch3_p4_q8:
        "Être un motocycliste responsable, c’est prendre l’habitude de porter un équipement de protection complet en tout temps, même quand il fait très chaud.",
      ch3_p4_q9: "Apprendre une mauvaise nouvelle et partir tout de suite en moto n’augmente jamais les risques.",
      ch3_p4_q10: "Partir sur la route avec un motocycliste téméraire ne peut pas influencer la conduite.",
      ch3_p4_q11: "Le plus grand facteur de risque sur les routes, c’est la personne qui conduit.",
      ch3_p4_q12:
        "Agir de façon sécuritaire, coopérative et responsable, c’est évaluer les trois types de risques avant de prendre le guidon."
    }
  };

  global.quizI18n = { ...(global.quizI18n ?? {}), fr };
})(typeof window !== "undefined" ? window : globalThis);

