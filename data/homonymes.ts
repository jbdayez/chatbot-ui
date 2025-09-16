export type HomonymeDefinition = {
  titre: string
  description: string
  exemple?: string
}

export type Homonyme = {
  mot: string
  nature?: string
  prononciation?: string
  definitions: HomonymeDefinition[]
}

export const HOMONYMES: Homonyme[] = [
  {
    mot: "Accord",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Entente",
        description: "Décision ou arrangement pris par plusieurs personnes ou groupes pour agir de concert.",
        exemple: "Les deux entreprises ont signé un accord de partenariat."
      },
      {
        titre: "Accord musical",
        description: "Ensemble de notes jouées simultanément pour former une harmonie.",
        exemple: "Le pianiste a conclu la chanson par un accord majeur lumineux."
      }
    ]
  },
  {
    mot: "Adresse",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Coordonnées d'un lieu",
        description: "Indication permettant de situer une personne ou un bâtiment dans l'espace urbain.",
        exemple: "Peux-tu me donner ton adresse complète pour l'invitation ?"
      },
      {
        titre: "Habileté",
        description: "Aptitude à réaliser un geste avec précision ou finesse.",
        exemple: "Elle manie le pinceau avec une adresse étonnante."
      }
    ]
  },
  {
    mot: "Aiguille",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Outil de couture",
        description: "Tige métallique fine et pointue permettant de coudre des tissus.",
        exemple: "J'ai besoin d'une aiguille plus fine pour broder ce motif."
      },
      {
        titre: "Sommet montagneux",
        description: "Pic très effilé caractéristique de certains reliefs alpins.",
        exemple: "Nous avons admiré l'aiguille du Midi au lever du soleil."
      }
    ]
  },
  {
    mot: "Aile",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Partie permettant le vol",
        description: "Appendice d'un animal ou d'un avion qui assure la portance dans l'air.",
        exemple: "L'oiseau a replié son aile blessée contre son corps."
      },
      {
        titre: "Aile de bâtiment",
        description: "Section latérale d'une construction principale.",
        exemple: "La bibliothèque se trouve dans l'aile est du château."
      }
    ]
  },
  {
    mot: "Aire",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Surface mesurée",
        description: "Étendue plane délimitée dont on calcule la mesure en unités carrées.",
        exemple: "L'aire du jardin a été doublée après les travaux."
      },
      {
        titre: "Lieu aménagé",
        description: "Espace réservé à un usage particulier, comme le repos ou le stationnement.",
        exemple: "Nous nous sommes arrêtés sur une aire d'autoroute pour déjeuner."
      }
    ]
  },
  {
    mot: "Allée",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Chemin bordé",
        description: "Passage aménagé, souvent bordé d'arbres, dans un jardin ou un parc.",
        exemple: "Les enfants courent le long de l'allée principale du parc."
      },
      {
        titre: "Couloir de circulation",
        description: "Passage entre des rangées de sièges ou de rayonnages.",
        exemple: "L'allée centrale du théâtre s'illumine quand le spectacle commence."
      }
    ]
  },
  {
    mot: "Appel",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Communication",
        description: "Action de contacter quelqu'un par téléphone ou un autre moyen vocal.",
        exemple: "J'ai reçu un appel de mon frère dans la soirée."
      },
      {
        titre: "Recours juridique",
        description: "Procédure permettant de contester une décision de justice devant une juridiction supérieure.",
        exemple: "L'avocate a immédiatement annoncé qu'elle ferait appel du jugement."
      }
    ]
  },
  {
    mot: "As",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Carte de jeu",
        description: "Carte marquée d'un symbole unique, souvent la plus forte dans de nombreux jeux.",
        exemple: "Il a gagné la partie en abattant un as de pique."
      },
      {
        titre: "Personne experte",
        description: "Individu particulièrement doué ou reconnu dans un domaine.",
        exemple: "C'est un as de la réparation automobile."
      }
    ]
  },
  {
    mot: "Avance",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Progression",
        description: "Action de se déplacer vers l'avant ou de faire progresser un projet.",
        exemple: "Le chantier est en bonne avance sur le calendrier."
      },
      {
        titre: "Somme versée avant échéance",
        description: "Paiement anticipé effectué avant que le service ou le bien ne soit livré.",
        exemple: "Le client a versé une avance pour réserver la salle."
      }
    ]
  },
  {
    mot: "Avocat",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Profession juridique",
        description: "Personne qui plaide et conseille en droit pour défendre les intérêts de ses clients devant un tribunal.",
        exemple: "Mon avocat a préparé un plaidoyer solide pour l'audience."
      },
      {
        titre: "Fruit tropical",
        description: "Fruit de l'avocatier, à la chair verte et crémeuse, souvent utilisé pour les salades et le guacamole.",
        exemple: "J'écrase un avocat bien mûr pour préparer du guacamole."
      }
    ]
  },
  {
    mot: "Baleine",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Mammifère marin",
        description: "Cétacé de grande taille vivant dans les océans.",
        exemple: "Nous avons aperçu une baleine au large des côtes bretonnes."
      },
      {
        titre: "Armature de parapluie",
        description: "Brin flexible qui soutient la toile d'un parapluie ou d'un corset.",
        exemple: "Une baleine du parapluie s'est brisée sous le vent."
      }
    ]
  },
  {
    mot: "Balance",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Instrument de mesure",
        description: "Appareil permettant de peser une masse.",
        exemple: "La balance de cuisine affiche le poids des ingrédients."
      },
      {
        titre: "Signe astrologique",
        description: "Septième signe du zodiaque, associé à l'équilibre et à la justice.",
        exemple: "Elle est née en octobre, sous le signe de la Balance."
      }
    ]
  },
  {
    mot: "Banc",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Siège",
        description: "Meuble allongé permettant à plusieurs personnes de s'asseoir.",
        exemple: "Nous nous sommes reposés sur un banc du jardin public."
      },
      {
        titre: "Groupement naturel",
        description: "Accumulation d'éléments similaires comme du sable ou un groupe de poissons.",
        exemple: "Un banc de sardines scintillait près de la surface."
      }
    ]
  },
  {
    mot: "Barre",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Pièce longue et rigide",
        description: "Tige solide, souvent en métal, utilisée pour soutenir ou fermer quelque chose.",
        exemple: "La barre métallique maintient la porte fermée."
      },
      {
        titre: "Barre de tribunal",
        description: "Table séparant les magistrats des parties lors d'une audience judiciaire.",
        exemple: "Le témoin a été appelé à la barre pour s'exprimer."
      }
    ]
  },
  {
    mot: "Bassin",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Réservoir d'eau",
        description: "Cuve ou étendue aménagée destinée à contenir de l'eau.",
        exemple: "Les poissons nagent dans le bassin du parc."
      },
      {
        titre: "Partie du squelette",
        description: "Structure osseuse reliant la colonne vertébrale aux membres inférieurs.",
        exemple: "Après la chute, elle s'est fracturé le bassin."
      }
    ]
  },
  {
    mot: "Batterie",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Instrument de musique",
        description: "Ensemble de percussions comprenant caisses et cymbales.",
        exemple: "Le batteur s'installe derrière sa batterie."
      },
      {
        titre: "Accumulateur d'énergie",
        description: "Dispositif qui stocke de l'énergie électrique pour la restituer ultérieurement.",
        exemple: "La batterie du téléphone doit être rechargée."
      }
    ]
  },
  {
    mot: "Bière",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Boisson fermentée",
        description: "Breuvage alcoolisé obtenu par fermentation de céréales maltées.",
        exemple: "Nous dégustons une bière artisanale bien fraîche."
      },
      {
        titre: "Cercueil",
        description: "Coffre dans lequel on dépose un défunt avant son inhumation.",
        exemple: "La cérémonie commence lorsque la bière est amenée dans l'église."
      }
    ]
  },
  {
    mot: "Bille",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Sphère de jeu",
        description: "Petite boule utilisée notamment pour jouer aux billes ou au billard.",
        exemple: "Il a perdu sa bille préférée dans le gravier."
      },
      {
        titre: "Tronc sectionné",
        description: "Morceau cylindrique de bois obtenu en débitant un arbre.",
        exemple: "Les billes de chêne sèchent avant d'être transformées en planches."
      }
    ]
  },
  {
    mot: "Botte",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Chaussure montante",
        description: "Chaussure couvrant le pied et le mollet, parfois jusqu'au genou.",
        exemple: "Elle enfile ses bottes de pluie avant de sortir."
      },
      {
        titre: "Fagot",
        description: "Ensemble de végétaux ou d'objets réunis et liés ensemble.",
        exemple: "Le maraîcher prépare une botte de radis pour le marché."
      }
    ]
  },
  {
    mot: "Bouton",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Fermeture vestimentaire",
        description: "Petit disque percé permettant de fermer un vêtement.",
        exemple: "Le bouton de sa chemise s'est détaché."
      },
      {
        titre: "Manifestation cutanée",
        description: "Petite éruption ou excroissance apparaissant sur la peau.",
        exemple: "Un bouton est apparu sur sa joue."
      }
    ]
  },
  {
    mot: "Bourse",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Sac ou portefeuille",
        description: "Petit sac destiné à contenir de l'argent ou des effets personnels.",
        exemple: "Elle range ses pièces dans une bourse en cuir."
      },
      {
        titre: "Marché financier",
        description: "Lieu réel ou virtuel où s'échangent des valeurs mobilières.",
        exemple: "Le cours de l'action a grimpé à la Bourse de Paris."
      }
    ]
  },
  {
    mot: "Branche",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Partie d'un arbre",
        description: "Ramification du tronc portant feuilles et bourgeons.",
        exemple: "Un oiseau est perché sur la branche du pommier."
      },
      {
        titre: "Secteur d'activité",
        description: "Subdivision d'un domaine professionnel ou scientifique.",
        exemple: "Il travaille dans la branche automobile de l'entreprise."
      }
    ]
  },
  {
    mot: "Brouillard",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Phénomène météorologique",
        description: "Suspension de fines gouttelettes d'eau qui réduit la visibilité.",
        exemple: "La route est glissante à cause du brouillard matinal."
      },
      {
        titre: "Registre comptable",
        description: "Livre auxiliaire où l'on note les opérations avant leur report définitif.",
        exemple: "Le comptable vérifie les écritures du brouillard quotidien."
      }
    ]
  },
  {
    mot: "Bureau",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Meuble de travail",
        description: "Table munie d'un plateau sur laquelle on écrit ou on pose du matériel.",
        exemple: "Mon ordinateur est installé sur un nouveau bureau."
      },
      {
        titre: "Lieu professionnel",
        description: "Local ou ensemble de pièces où s'exerce une activité administrative.",
        exemple: "Elle retourne au bureau après la pause déjeuner."
      }
    ]
  },
  {
    mot: "Cale",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Pièce de calage",
        description: "Objet utilisé pour bloquer ou stabiliser quelque chose.",
        exemple: "Il glisse une cale sous la porte pour la maintenir ouverte."
      },
      {
        titre: "Compartiment de navire",
        description: "Partie inférieure d'un bateau où l'on stocke la marchandise.",
        exemple: "La cale du cargo est remplie de conteneurs."
      }
    ]
  },
  {
    mot: "Canard",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Oiseau aquatique",
        description: "Palmipède vivant près des mares et des rivières.",
        exemple: "Un canard sauvage nage tranquillement sur l'étang."
      },
      {
        titre: "Journal",
        description: "Terme familier désignant un quotidien ou un hebdomadaire.",
        exemple: "Il lit son canard préféré chaque matin."
      }
    ]
  },
  {
    mot: "Canon",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Pièce d'artillerie",
        description: "Arme qui projette des projectiles à grande vitesse.",
        exemple: "Le canon a tonné pendant la reconstitution historique."
      },
      {
        titre: "Règle ou norme",
        description: "Modèle de référence, notamment en matière artistique ou morale.",
        exemple: "Ce bâtiment respecte les canons de l'architecture classique."
      }
    ]
  },
  {
    mot: "Carte",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Représentation géographique",
        description: "Document qui figure un territoire vu de haut.",
        exemple: "La carte de la région est affichée dans le hall."
      },
      {
        titre: "Support d'information",
        description: "Feuillet indiquant un menu, un titre de paiement ou une carte à jouer.",
        exemple: "Le serveur nous apporte la carte des desserts."
      }
    ]
  },
  {
    mot: "Carton",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Matière rigide",
        description: "Pâte de papier épaissie servant à fabriquer des emballages.",
        exemple: "Les cartons sont empilés dans le garage."
      },
      {
        titre: "Sanction sportive",
        description: "Avertissement matérialisé par une carte de couleur lors d'une compétition.",
        exemple: "Le défenseur a reçu un carton rouge après la faute."
      }
    ]
  },
  {
    mot: "Cave",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Sous-sol",
        description: "Pièce enterrée servant au stockage de denrées ou de vin.",
        exemple: "Les bouteilles vieillissent dans une cave fraîche."
      },
      {
        titre: "Personne naïve",
        description: "Argot pour désigner quelqu'un de crédule ou d'inexpérimenté.",
        exemple: "Les escrocs ont repéré un cave facile à duper."
      }
    ]
  },
  {
    mot: "Champ",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Terrain cultivé",
        description: "Étendue de terre destinée à l'agriculture.",
        exemple: "Le champ de blé ondule sous le vent."
      },
      {
        titre: "Domaine d'activité",
        description: "Ensemble des sujets ou des possibilités liés à une discipline.",
        exemple: "Ce projet ouvre un nouveau champ de recherche."
      }
    ]
  },
  {
    mot: "Charge",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Poids transporté",
        description: "Objet ou ensemble d'objets que l'on porte ou supporte.",
        exemple: "La charge du camion dépasse la limite autorisée."
      },
      {
        titre: "Accusation",
        description: "Reproche ou faute imputée à quelqu'un, notamment en justice.",
        exemple: "Les charges retenues contre lui ont été abandonnées."
      }
    ]
  },
  {
    mot: "Chasse",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Poursuite d'animaux",
        description: "Action de traquer et de capturer du gibier.",
        exemple: "La chasse au cerf est très réglementée."
      },
      {
        titre: "Dispositif sanitaire",
        description: "Mécanisme permettant d'évacuer l'eau d'une cuvette de toilettes.",
        exemple: "La chasse d'eau fonctionne mal et doit être réparée."
      }
    ]
  },
  {
    mot: "Chef",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Dirigeant",
        description: "Personne qui exerce une autorité ou une responsabilité sur un groupe.",
        exemple: "Le chef d'équipe organise la réunion."
      },
      {
        titre: "Extrémité",
        description: "Partie supérieure ou principale d'un objet ou d'un ouvrage.",
        exemple: "Le chef-d'œuvre désigne la pièce maîtresse d'un artisan."
      }
    ]
  },
  {
    mot: "Classe",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Groupe d'élèves",
        description: "Ensemble de personnes qui suivent le même enseignement.",
        exemple: "La classe de quatrième partira en voyage scolaire."
      },
      {
        titre: "Élégance",
        description: "Distinction, raffinement dans la tenue ou le comportement.",
        exemple: "Avec ce costume, il a vraiment de la classe."
      }
    ]
  },
  {
    mot: "Clé",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Outil d'ouverture",
        description: "Instrument permettant de verrouiller ou de déverrouiller une serrure.",
        exemple: "J'ai oublié la clé de l'appartement."
      },
      {
        titre: "Solution",
        description: "Élément indispensable pour comprendre ou résoudre un problème.",
        exemple: "La clé de l'énigme se cachait dans le texte."
      }
    ]
  },
  {
    mot: "Colle",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Substance adhésive",
        description: "Produit permettant de fixer durablement deux surfaces.",
        exemple: "La colle forte maintient solidement les pièces."
      },
      {
        titre: "Interrogation surprise",
        description: "Épreuve orale ou écrite imposée aux étudiants, en particulier en classes préparatoires.",
        exemple: "Les élèves de prépa redoutent la colle de mathématiques."
      }
    ]
  },
  {
    mot: "Commande",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Demande de biens",
        description: "Action de solliciter la livraison d'un produit ou d'un service.",
        exemple: "La commande de livres arrivera demain."
      },
      {
        titre: "Dispositif de pilotage",
        description: "Bouton, levier ou interface permettant de contrôler une machine.",
        exemple: "Il appuie sur la commande pour ouvrir le portail."
      }
    ]
  },
  {
    mot: "Compas",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Instrument de traçage",
        description: "Outil à deux branches permettant de tracer des cercles ou de mesurer des distances.",
        exemple: "Elle utilise un compas pour dessiner une rosace."
      },
      {
        titre: "Instrument de navigation",
        description: "Appareil qui indique la direction grâce au magnétisme ou à la gyroscopie.",
        exemple: "Le capitaine vérifie son compas avant de changer de cap."
      }
    ]
  },
  {
    mot: "Contrôle",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Vérification",
        description: "Action d'inspecter ou de surveiller pour s'assurer de la conformité.",
        exemple: "Le contrôle technique de la voiture est obligatoire."
      },
      {
        titre: "Épreuve évaluative",
        description: "Test ou interrogation permettant de mesurer les connaissances d'un élève.",
        exemple: "Les élèves révisent pour le contrôle de mathématiques."
      }
    ]
  },
  {
    mot: "Coquille",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Enveloppe protectrice",
        description: "Carapace externe dure de certains animaux ou de certains fruits.",
        exemple: "La coquille de l'huître est difficile à ouvrir."
      },
      {
        titre: "Erreur typographique",
        description: "Faute de frappe ou d'impression dans un texte.",
        exemple: "Une coquille s'est glissée dans le titre du journal."
      }
    ]
  },
  {
    mot: "Cornet",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Cône alimentaire",
        description: "Gaufrette en forme de cône qui supporte une glace.",
        exemple: "Elle commande un cornet de deux boules."
      },
      {
        titre: "Instrument de musique",
        description: "Cuivre à perce conique produisant un son puissant.",
        exemple: "Le cornet à pistons accompagne la fanfare."
      }
    ]
  },
  {
    mot: "Coupe",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Récipient",
        description: "Vase peu profond destiné à contenir un dessert ou une boisson.",
        exemple: "Nous partageons une coupe de fraises."
      },
      {
        titre: "Action de couper",
        description: "Résultat du découpage ou coiffure réalisée avec des ciseaux.",
        exemple: "Sa nouvelle coupe de cheveux lui va très bien."
      }
    ]
  },
  {
    mot: "Cour",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Espace extérieur",
        description: "Surface dégagée attenante à une habitation ou à une école.",
        exemple: "Les enfants jouent dans la cour de l'école."
      },
      {
        titre: "Institution judiciaire",
        description: "Assemblée de magistrats chargée de rendre la justice.",
        exemple: "L'affaire sera examinée par la cour d'appel."
      }
    ]
  },
  {
    mot: "Course",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Compétition de vitesse",
        description: "Épreuve où l'on cherche à parcourir une distance le plus rapidement possible.",
        exemple: "Il se prépare pour la course de 10 kilomètres."
      },
      {
        titre: "Commission",
        description: "Déplacement effectué pour acheter ou chercher quelque chose.",
        exemple: "Je fais une course rapide à l'épicerie."
      }
    ]
  },
  {
    mot: "Cours",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Enseignement",
        description: "Séance durant laquelle un professeur dispense un savoir.",
        exemple: "Le cours de littérature commence à neuf heures."
      },
      {
        titre: "Valeur financière",
        description: "Prix auquel s'échange une monnaie ou un titre sur un marché.",
        exemple: "Le cours de l'euro fluctue face au dollar."
      }
    ]
  },
  {
    mot: "Crème",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Produit laitier",
        description: "Partie la plus grasse du lait, utilisée en cuisine ou en pâtisserie.",
        exemple: "La crème fraîche donne de l'onctuosité à la sauce."
      },
      {
        titre: "Élite",
        description: "Ce qu'il y a de meilleur dans un groupe ou une société.",
        exemple: "Cette école rassemble la crème des jeunes musiciens."
      }
    ]
  },
  {
    mot: "Cure",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Traitement médical",
        description: "Période pendant laquelle on suit un programme thérapeutique.",
        exemple: "Elle part en cure thermale pour soigner son dos."
      },
      {
        titre: "Paroisse",
        description: "Charge ecclésiastique et territoire confiés à un curé.",
        exemple: "Le prêtre accueille les fidèles de la cure voisine."
      }
    ]
  },
  {
    mot: "Date",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Repère temporel",
        description: "Jour précis d'un calendrier.",
        exemple: "La date de la réunion a été fixée au 15 mai."
      },
      {
        titre: "Fruit du palmier",
        description: "Fruit sucré du dattier, consommé frais ou séché.",
        exemple: "Les dattes farcies sont un dessert traditionnel."
      }
    ]
  },
  {
    mot: "Défense",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Protection",
        description: "Action de repousser une attaque ou de préserver quelque chose.",
        exemple: "La défense du château était assurée par des murailles."
      },
      {
        titre: "Dent d'animal",
        description: "Longue dent proéminente de certains mammifères comme l'éléphant.",
        exemple: "La défense d'ivoire a été confisquée par les douanes."
      }
    ]
  },
  {
    mot: "Dent",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Organe de mastication",
        description: "Structure dure implantée sur les mâchoires des vertébrés.",
        exemple: "Le dentiste soigne une dent cariée."
      },
      {
        titre: "Saillie",
        description: "Relief pointu ou crénelé sur un outil ou un engrenage.",
        exemple: "La dent de la clé a été abîmée."
      }
    ]
  },
  {
    mot: "Dépôt",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Somme d'argent",
        description: "Versement placé sur un compte bancaire ou confié à une institution.",
        exemple: "Le dépôt a été enregistré sur le livret d'épargne."
      },
      {
        titre: "Lieu de stockage",
        description: "Endroit où l'on entrepose des marchandises ou des dossiers.",
        exemple: "Le dépôt municipal abrite les archives anciennes."
      }
    ]
  },
  {
    mot: "Décharge",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Libération",
        description: "Action de se délester d'une obligation ou d'une responsabilité.",
        exemple: "Le patient signe une décharge avant l'intervention."
      },
      {
        titre: "Lieu d'élimination",
        description: "Terrain où l'on dépose des déchets ou des gravats.",
        exemple: "La ville ferme une vieille décharge non conforme."
      }
    ]
  },
  {
    mot: "Diète",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Régime alimentaire",
        description: "Restriction volontaire de nourriture ou choix d'aliments spécifiques.",
        exemple: "Le médecin lui impose une diète sans sel."
      },
      {
        titre: "Assemblée politique",
        description: "Réunion délibérative de certains États historiques comme la Diète allemande.",
        exemple: "La Diète a voté une nouvelle loi commerciale."
      }
    ]
  },
  {
    mot: "Droit",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Ensemble de règles",
        description: "Système juridique régissant les relations entre les personnes.",
        exemple: "Elle étudie le droit international."
      },
      {
        titre: "Direction",
        description: "Côté opposé à la gauche ou trajectoire rectiligne.",
        exemple: "Tournez à droite après le pont."
      }
    ]
  },
  {
    mot: "Dragée",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Confiserie",
        description: "Bonbon recouvert d'une coque dure et colorée.",
        exemple: "Les dragées sont offertes aux invités du mariage."
      },
      {
        titre: "Projectile",
        description: "Petite balle ou plomb contenu dans certaines cartouches.",
        exemple: "Les chasseurs chargent leur fusil de dragées."
      }
    ]
  },
  {
    mot: "Éclair",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Phénomène lumineux",
        description: "Lueur brève produite par une décharge électrique atmosphérique.",
        exemple: "Un éclair a zébré le ciel orageux."
      },
      {
        titre: "Pâtisserie",
        description: "Gâteau allongé garni de crème et recouvert d'un glaçage.",
        exemple: "J'ai choisi un éclair au chocolat pour le dessert."
      }
    ]
  },
  {
    mot: "Éclat",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Brillance",
        description: "Lumière vive ou éclatante émise par un objet.",
        exemple: "Le diamant reflète un éclat impressionnant."
      },
      {
        titre: "Fragment",
        description: "Morceau projeté lors d'une rupture ou d'une explosion.",
        exemple: "Un éclat de verre s'est planté dans le tapis."
      }
    ]
  },
  {
    mot: "Échelle",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Outil d'accès",
        description: "Dispositif muni de barreaux permettant d'atteindre un niveau supérieur.",
        exemple: "Il grimpe sur une échelle pour repeindre la façade."
      },
      {
        titre: "Graduation",
        description: "Rapport de réduction ou de mesure sur un plan, une carte ou un graphique.",
        exemple: "Le plan est dessiné à l'échelle 1:50."
      }
    ]
  },
  {
    mot: "Étoffe",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Matière textile",
        description: "Tissu servant à confectionner des vêtements ou des tentures.",
        exemple: "Cette étoffe légère est parfaite pour l'été."
      },
      {
        titre: "Potentiel",
        description: "Qualités ou dispositions qui laissent présager de grandes capacités.",
        exemple: "Cette étudiante a l'étoffe d'une chercheuse."
      }
    ]
  },
  {
    mot: "Faille",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Fracture géologique",
        description: "Cassure des couches terrestres accompagnée d'un déplacement.",
        exemple: "La faille traverse toute la paroi rocheuse."
      },
      {
        titre: "Point faible",
        description: "Défaut ou vulnérabilité dans un système ou un raisonnement.",
        exemple: "L'enquête met en évidence une faille de sécurité."
      }
    ]
  },
  {
    mot: "Fiche",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Feuille individuelle",
        description: "Document court qui rassemble des informations synthétiques.",
        exemple: "Je classe chaque élève sur une fiche personnelle."
      },
      {
        titre: "Fiche électrique",
        description: "Pièce terminant le cordon d'un appareil et qui s'insère dans une prise.",
        exemple: "La fiche de l'appareil ne rentre pas dans la prise internationale."
      }
    ]
  },
  {
    mot: "File",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Queue de personnes",
        description: "Suite de personnes ou de véhicules alignés les uns derrière les autres.",
        exemple: "Une longue file se forme devant le musée."
      },
      {
        titre: "Voie de circulation",
        description: "Subdivision d'une chaussée réservée à un sens ou à un type de véhicules.",
        exemple: "Restez sur la file de droite avant la sortie."
      }
    ]
  },
  {
    mot: "Flamme",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Ardeur",
        description: "Langue de feu produite par la combustion.",
        exemple: "La flamme de la bougie vacille."
      },
      {
        titre: "Sentiment passionné",
        description: "Vive ardeur ou enthousiasme pour quelqu'un ou quelque chose.",
        exemple: "Ils entretiennent la flamme de leur amitié malgré la distance."
      }
    ]
  },
  {
    mot: "Flèche",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Projectile",
        description: "Trait lancé avec un arc ou une arbalète.",
        exemple: "La flèche s'est fichée dans la cible."
      },
      {
        titre: "Élément architectural",
        description: "Partie pointue qui couronne une tour ou un clocher.",
        exemple: "La flèche de la cathédrale domine la ville."
      }
    ]
  },
  {
    mot: "Fleur",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Organe végétal",
        description: "Partie reproductive des plantes angiospermes, souvent colorée.",
        exemple: "Cette fleur attire de nombreux pollinisateurs."
      },
      {
        titre: "Partie la plus fine",
        description: "Ce qu'il y a de plus délicat ou raffiné dans un produit.",
        exemple: "La fleur de farine donne des gâteaux très légers."
      }
    ]
  },
  {
    mot: "Fonte",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Action de fondre",
        description: "Transformation d'un solide en liquide sous l'effet de la chaleur.",
        exemple: "La fonte des neiges provoque la crue de la rivière."
      },
      {
        titre: "Alliage métallique",
        description: "Fer contenant du carbone utilisé pour fabriquer des pièces résistantes.",
        exemple: "Les plaques d'égout sont en fonte."
      }
    ]
  },
  {
    mot: "Forme",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Configuration",
        description: "Aspect extérieur ou silhouette d'un objet.",
        exemple: "La forme de ce vase est très élégante."
      },
      {
        titre: "État de santé",
        description: "Condition physique ou morale d'une personne.",
        exemple: "Elle est en grande forme pour le marathon."
      }
    ]
  },
  {
    mot: "Fourchette",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Ustensile de table",
        description: "Instrument muni de dents pour porter les aliments à la bouche.",
        exemple: "La fourchette est placée à gauche de l'assiette."
      },
      {
        titre: "Intervalle de valeurs",
        description: "Limites entre lesquelles peut varier un chiffre ou un prix.",
        exemple: "Le devis prévoit une fourchette de dépenses de 500 à 700 euros."
      }
    ]
  },
  {
    mot: "Frais",
    nature: "nom masculin pluriel / adjectif",
    definitions: [
      {
        titre: "Dépenses",
        description: "Sommes engagées pour réaliser une activité ou un déplacement.",
        exemple: "Les frais de voyage seront remboursés."
      },
      {
        titre: "Caractère de fraîcheur",
        description: "Qualité de ce qui est légèrement froid ou récemment préparé.",
        exemple: "Le matin est frais malgré le soleil."
      }
    ]
  },
  {
    mot: "Fuite",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Évasion",
        description: "Action de s'éloigner rapidement pour échapper à un danger.",
        exemple: "Sa fuite a été stoppée par la police."
      },
      {
        titre: "Perte involontaire",
        description: "Écoulement incontrôlé d'un liquide ou d'un gaz.",
        exemple: "Une fuite d'eau a été détectée sous l'évier."
      }
    ]
  },
  {
    mot: "Gaine",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Enveloppe protectrice",
        description: "Housse ou conduit qui protège un câble ou un organe.",
        exemple: "La gaine isolante évite tout court-circuit."
      },
      {
        titre: "Sous-vêtement sculptant",
        description: "Corset léger destiné à maintenir la taille ou le ventre.",
        exemple: "Elle porte une gaine discrète sous sa robe."
      }
    ]
  },
  {
    mot: "Garde",
    nature: "nom masculin ou féminin",
    definitions: [
      {
        titre: "Sentinelle",
        description: "Personne chargée de surveiller un lieu ou une personne.",
        exemple: "La garde veille devant le palais."
      },
      {
        titre: "Période de service",
        description: "Temps durant lequel un professionnel assure une permanence ou une surveillance.",
        exemple: "L'infirmière entame une garde de nuit."
      }
    ]
  },
  {
    mot: "Gorge",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Partie du corps",
        description: "Zone située entre la bouche et l'œsophage où passent aliments et air.",
        exemple: "Elle a mal à la gorge depuis hier."
      },
      {
        titre: "Défilé étroit",
        description: "Passage resserré entre deux montagnes.",
        exemple: "La gorge du Verdon attire de nombreux randonneurs."
      }
    ]
  },
  {
    mot: "Grille",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Clôture ajourée",
        description: "Structure de barreaux permettant de fermer un espace tout en laissant passer l'air.",
        exemple: "Le jardin est protégé par une grille en fer forgé."
      },
      {
        titre: "Tableau de répartition",
        description: "Système de cases ou de lignes permettant d'organiser des informations.",
        exemple: "La grille de programmes indique les horaires des émissions."
      }
    ]
  },
  {
    mot: "Grève",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Arrêt de travail",
        description: "Action collective par laquelle des salariés cessent leur activité pour revendiquer.",
        exemple: "La grève des transports a paralysé la ville."
      },
      {
        titre: "Plage de galets",
        description: "Bande de terrain située au bord de la mer ou d'un lac.",
        exemple: "Nous avons pique-niqué sur une grève ventée."
      }
    ]
  },
  {
    mot: "Gomme",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Objet effaçant",
        description: "Accessoire servant à effacer des traces de crayon ou d'encre.",
        exemple: "Cette gomme retire facilement le crayon."
      },
      {
        titre: "Résine naturelle",
        description: "Substance végétale sécrétée par certains arbres.",
        exemple: "La gomme arabique est utilisée en pâtisserie."
      }
    ]
  },
  {
    mot: "Grain",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Semence",
        description: "Petite partie dure produite par certaines plantes et servant à la reproduction.",
        exemple: "Un grain de blé suffit pour semer la parcelle."
      },
      {
        titre: "Texture",
        description: "Aspérité ou irrégularité qui donne du relief à une surface.",
        exemple: "Ce papier a un grain très fin."
      }
    ]
  },
  {
    mot: "Grue",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Oiseau migrateur",
        description: "Grand oiseau aux longues pattes vivant souvent en groupe.",
        exemple: "Une grue cendrée a été observée dans les marais."
      },
      {
        titre: "Machine de levage",
        description: "Engin muni d'une flèche pour soulever de lourdes charges.",
        exemple: "La grue du chantier déplace les poutres."
      }
    ]
  },
  {
    mot: "Huile",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Substance grasse",
        description: "Liquide visqueux obtenu par pression ou extraction de matières grasses.",
        exemple: "Cette huile d'olive vient de Provence."
      },
      {
        titre: "Personnage influent",
        description: "Familier pour désigner quelqu'un d'important ou de très compétent.",
        exemple: "C'est une huile du monde du cinéma."
      }
    ]
  },
  {
    mot: "Issue",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Sortie",
        description: "Passage permettant de quitter un lieu fermé.",
        exemple: "Repère l'issue de secours avant le décollage."
      },
      {
        titre: "Solution",
        description: "Façon de résoudre une difficulté ou de sortir d'une impasse.",
        exemple: "La négociation offre une issue pacifique au conflit."
      }
    ]
  },
  {
    mot: "Journal",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Quotidien d'information",
        description: "Publication périodique qui relate l'actualité.",
        exemple: "Il lit le journal chaque matin dans le métro."
      },
      {
        titre: "Carnet personnel",
        description: "Recueil où l'on note jour après jour des événements ou des impressions.",
        exemple: "Elle tient un journal depuis l'enfance."
      }
    ]
  },
  {
    mot: "Jumelle",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Sœur née le même jour",
        description: "Fille issue de la même grossesse qu'une autre.",
        exemple: "Ma jumelle habite dans une autre ville."
      },
      {
        titre: "Instrument optique",
        description: "Appareil composé de deux lunettes couplées permettant de voir de loin.",
        exemple: "J'observe les oiseaux avec des jumelles."
      }
    ]
  },
  {
    mot: "Lame",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Partie tranchante",
        description: "Pièce plate et affûtée d'un couteau ou d'une scie.",
        exemple: "La lame doit être affûtée avant utilisation."
      },
      {
        titre: "Nappe d'eau",
        description: "Vague plate qui se forme lors des grandes marées.",
        exemple: "Une lame de fond a surpris les pêcheurs."
      }
    ]
  },
  {
    mot: "Lance",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Arme de jet",
        description: "Perche terminée par une pointe utilisée autrefois au combat.",
        exemple: "Le chevalier brandit sa lance."
      },
      {
        titre: "Jet d'eau",
        description: "Tuyau projetant de l'eau sous pression pour l'arrosage ou les incendies.",
        exemple: "Le pompier dirige la lance sur les flammes."
      }
    ]
  },
  {
    mot: "Légende",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Récit traditionnel",
        description: "Histoire merveilleuse transmise depuis longtemps.",
        exemple: "La légende raconte qu'un trésor est caché ici."
      },
      {
        titre: "Annotation explicative",
        description: "Texte qui accompagne une illustration ou une carte pour en expliquer les signes.",
        exemple: "La légende de la carte précise les symboles utilisés."
      }
    ]
  },
  {
    mot: "Lettre",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Caractère alphabétique",
        description: "Signe graphique représentant un son.",
        exemple: "La lettre A ouvre l'alphabet latin."
      },
      {
        titre: "Correspondance",
        description: "Message écrit adressé à quelqu'un.",
        exemple: "J'ai reçu une lettre de ma cousine."
      }
    ]
  },
  {
    mot: "Librairie",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Magasin de livres",
        description: "Commerce où l'on vend des ouvrages imprimés.",
        exemple: "La librairie de quartier organise une séance de dédicaces."
      },
      {
        titre: "Bibliothèque logicielle",
        description: "En informatique, ensemble de fonctions prêtes à l'emploi.",
        exemple: "Le développeur installe une nouvelle librairie JavaScript."
      }
    ]
  },
  {
    mot: "Livre",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Ouvrage relié",
        description: "Ensemble de pages imprimées réunies en volume.",
        exemple: "Ce livre raconte l'histoire de Paris."
      },
      {
        titre: "Unité de poids",
        description: "Ancienne mesure valant environ cinq cents grammes selon les régions.",
        exemple: "La recette mentionne une livre de beurre."
      }
    ]
  },
  {
    mot: "Loge",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Foyer de théâtre",
        description: "Petit compartiment aménagé pour accueillir des spectateurs.",
        exemple: "Nous avons loué une loge pour la première."
      },
      {
        titre: "Appartement de gardien",
        description: "Habitation attenante à l'entrée d'un immeuble.",
        exemple: "La gardienne habite dans la loge du rez-de-chaussée."
      }
    ]
  },
  {
    mot: "Loupe",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Instrument grossissant",
        description: "Lentille convexe qui agrandit les objets observés.",
        exemple: "Il examine le minéral avec une loupe."
      },
      {
        titre: "Anomalie de croissance",
        description: "Excroissance du bois due à une poussée désordonnée.",
        exemple: "Ce plateau est taillé dans une loupe de noyer."
      }
    ]
  },
  {
    mot: "Lumière",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Rayonnement visible",
        description: "Radiation électromagnétique perceptible par l'œil.",
        exemple: "La lumière du matin illumine la pièce."
      },
      {
        titre: "Connaissance",
        description: "Clarté de l'esprit ou compréhension d'un sujet.",
        exemple: "Ce professeur apporte une lumière nouvelle sur le dossier."
      }
    ]
  },
  {
    mot: "Manche",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Partie de vêtement",
        description: "Tube de tissu qui entoure le bras.",
        exemple: "La manche de son pull est tachée."
      },
      {
        titre: "Bras de mer",
        description: "Bras maritime reliant deux étendues d'eau.",
        exemple: "La Manche sépare la France du Royaume-Uni."
      }
    ]
  },
  {
    mot: "Manière",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Méthode",
        description: "Façon particulière de réaliser une action.",
        exemple: "Il a une manière précise de tailler la pierre."
      },
      {
        titre: "Politesse",
        description: "Bonne éducation et comportement courtois.",
        exemple: "Elle remercie toujours avec beaucoup de manières."
      }
    ]
  },
  {
    mot: "Marche",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Gradin",
        description: "Surface horizontale d'un escalier sur laquelle on pose le pied.",
        exemple: "La marche est trop haute pour l'enfant."
      },
      {
        titre: "Déplacement",
        description: "Action de marcher ou manifestation collective.",
        exemple: "Une marche pour le climat est organisée samedi."
      }
    ]
  },
  {
    mot: "Mètre",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Unité de mesure",
        description: "Unité fondamentale de longueur du système international.",
        exemple: "Le tissu est vendu au mètre."
      },
      {
        titre: "Instrument pliant",
        description: "Règle articulée servant à mesurer des distances.",
        exemple: "Le charpentier consulte son mètre pliant."
      }
    ]
  },
  {
    mot: "Mine",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Exploitation souterraine",
        description: "Lieu où l'on extrait des minerais du sous-sol.",
        exemple: "La mine de charbon a fermé l'an dernier."
      },
      {
        titre: "Expression du visage",
        description: "Aspect extérieur traduisant l'état d'esprit ou de santé.",
        exemple: "Il a une mine rayonnante aujourd'hui."
      }
    ]
  },
  {
    mot: "Mode",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Tendance",
        description: "Façon de se vêtir ou de vivre adoptée par un groupe.",
        exemple: "La mode des années 90 revient."
      },
      {
        titre: "Modalité grammaticale",
        description: "Catégorie qui exprime l'attitude du locuteur par rapport à l'action.",
        exemple: "Le subjonctif est un mode verbal."
      }
    ]
  },
  {
    mot: "Monnaie",
    nature: "nom féminin",
    definitions: [
      {
        titre: "Système monétaire",
        description: "Ensemble des pièces et billets ayant cours légal dans un pays.",
        exemple: "La monnaie unique facilite les échanges."
      },
      {
        titre: "Rendu",
        description: "Somme rendue après un paiement supérieur au montant dû.",
        exemple: "La caissière rend la monnaie sur dix euros."
      }
    ]
  },
  {
    mot: "Motif",
    nature: "nom masculin",
    definitions: [
      {
        titre: "Raison",
        description: "Cause ou justification d'une action.",
        exemple: "Le motif de sa visite est confidentiel."
      },
      {
        titre: "Ornement",
        description: "Dessin répétitif servant de décoration.",
        exemple: "Le rideau présente un motif floral."
      }
    ]
  }
]
