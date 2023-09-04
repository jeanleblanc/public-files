#physique #gptdoc 
# La mécanique

## Cinématique

### Scalaires et vecteurs

- Scalaires : Quantités physiques dont l'ampleur est limitée (par exemple, la masse, le temps, la température).
- Vecteurs : Quantités physiques ayant à la fois une magnitude et une direction (par exemple, le déplacement, la vitesse, la force).
- Addition, soustraction et multiplication de vecteurs (produits en points et en croix)

### b. Position, déplacement et distance

- Position : Emplacement d'un objet par rapport à un point de référence
- Déplacement (vecteur) : Δx = x_final - x_initial
- Distance (scalaire) : Longueur totale du chemin parcouru par un objet

### c. Vélocité et vitesse

- Vitesse (vecteur) : Taux de changement de position
- Vitesse moyenne (v_avg) = Δx / Δt
- Vitesse instantanée (v) = dx/dt
- Vitesse (scalaire) : Ampleur de la vitesse
- Vitesse moyenne = Distance totale / Temps total

### d. Accélération

- Accélération (vecteur) : Taux de variation de la vitesse
- Accélération moyenne (a_avg) = Δv / Δt
- Accélération instantanée (a) = dv/dt

### e. Mouvement en une dimension

- Équations d'accélération constante :
- v = v_0 + at
- x = x_0 + v_0t + 0,5at^2
- v^2 = v_0^2 + 2a(x - x_0)

### f. Mouvement d'un projectile

- Mouvement bidimensionnel sous l'effet d'une accélération gravitationnelle constante (g = 9,81 m/s^2)
- Les mouvements horizontaux et verticaux sont indépendants
- Equations du mouvement :
- Horizontal : x = x_0 + v_x0*t
- Vertical : y = y_0 + v_y0*t - 0,5gt^2
- Le temps de vol, la portée et la hauteur maximale peuvent être déterminés à partir de ces équations.

### g. Mouvement circulaire

- Déplacement angulaire (θ), vitesse angulaire (ω) et accélération angulaire (α)
- Relations entre les quantités linéaires et angulaires :
- v = rω
- a = rα
- Accélération centripète (a_c) = v^2 / r = rω^2
- Force centripète (F_c) = m*v^2 / r = m*rω^2

### h. Mouvement relatif

- Mouvement observé à partir d'un cadre de référence mobile
- Vitesse relative (v_rel) = v_A - v_B, où v_A et v_B sont les vitesses des objets A et B, respectivement.

## Dynamique

### a. Lois du mouvement de Newton

- Première loi (inertie) : Un objet au repos reste au repos, et un objet en mouvement reste en mouvement avec une vitesse constante à moins d'être soumis à une force extérieure nette.
- Deuxième loi (F = ma) : La force nette agissant sur un objet est égale à la masse de l'objet multipliée par son accélération.
- Troisième loi (action et réaction) : Pour chaque action, il y a une réaction égale et opposée.

### b. Masse et poids

- Masse : Mesure de la quantité de matière contenue dans un objet (scalaire, unité : kg)
- Poids : La force gravitationnelle agissant sur un objet (vecteur, unité : N)
- Poids = masse × accélération gravitationnelle (W = mg)

### c. Inertie

- Inertie : résistance d'un objet à modifier son état de mouvement.
- Directement proportionnelle à la masse de l'objet

### d. Friction

- Friction : Force de résistance entre deux surfaces en contact qui s'oppose à un mouvement ou à un mouvement imminent.
- Types : Statique (entre des surfaces stationnaires) et cinétique (entre des surfaces en mouvement).
- Force de frottement (f) = coefficient de frottement (μ) × force normale (N)

### e. Traînée

- Traînée : force de résistance subie par un objet se déplaçant dans un fluide (par exemple, l'air, l'eau).
- Dépend des propriétés du fluide, de la forme de l'objet et de la vitesse.
- Pour les faibles vitesses, relation linéaire : F_drag = -kv
- Pour les vitesses élevées, relation quadratique : F_drag = -kv^2

### f. Tension et force normale

- Tension : La force exercée par une corde, un câble ou un objet similaire lorsqu'il est tendu.
- Force normale : La force exercée par une surface qui est perpendiculaire à la surface et qui empêche les objets de passer à travers elle.

### g. Mouvement circulaire et force centripète

- Mouvement circulaire : Mouvement d'un objet en cercle à vitesse constante.
- Force centripète : La force nette vers l'intérieur agissant sur un objet en mouvement circulaire, pointant vers le centre du cercle.
- F_centripète = mv^2 / r = mr*ω^2

### h. Travail, énergie et puissance

- Travail (W) : Transfert d'énergie lorsqu'une force est appliquée à un objet sur une certaine distance (unité : Joule, J).
- W = Fdcos(θ), où θ est l'angle entre les vecteurs force et déplacement
- Énergie : Capacité à effectuer un travail (unité : Joule, J)
- Énergie cinétique (KE) : Énergie due au mouvement (KE = 0,5mv^2)
- Énergie potentielle (EP) : Énergie due à la position ou à la configuration (par exemple, l'énergie gravitationnelle = mgh).
- Puissance (P) : vitesse à laquelle le travail est effectué ou l'énergie transférée (unité : Watt, W)
- P = W / Δt = F * v * cos(θ)

### i. Conservation de l'énergie

- L'énergie totale dans un système fermé reste constante
- Énergie mécanique (EM) = KE + PE
- En l'absence de forces extérieures, ME_initial = ME_final

### j. Collisions et quantité de mouvement

- Momentum (p) : Quantité vectorielle représentant le produit de la masse et de la vitesse d'un objet (p = mv).
- Impulsion (J) : La variation de la quantité de mouvement d'un objet (J = Δp = F_avg * Δt).
- Types de collisions : élastiques (la quantité de mouvement et l'énergie cinétique sont conservées) et inélastiques (la quantité de mouvement est conservée, mais énergie cinétique non conservée ; peut être partiellement ou totalement inélastique)
- Équations de la collision élastique (1D) :
- m1 * v1_initial + m2 * v2_initial = m1 * v1_final + m2 * v2_final
- 0,5 * m1 * v1_initial^2 + 0,5 * m2 * v2_initial^2 = 0,5 * m1 * v1_final^2 + 0,5 * m2 * v2_final^2
- Équation de la collision inélastique (1D) :
- m1 * v1_initial + m2 * v2_initial = (m1 + m2) * v_final).
## k. Conservation de la quantité de mouvement
- La quantité de mouvement totale d'un système fermé reste constante
- p_initial = p_final
- En présence de forces extérieures, la quantité de mouvement n'est pas conservée et il faut tenir compte de l'impulsion.

## Statique
## a. Équilibre
- Situation dans laquelle la force nette et le couple net d'un objet sont tous deux nuls.
- Équilibre statique : L'objet est au repos
- Équilibre dynamique : L'objet se déplace à vitesse constante
- ΣF = 0 et Στ = 0

### b. Couple et moment d'inertie
- Couple (τ) : L'équivalent rotationnel de la force (unité : Nm)
- τ = r × F = rF sin(θ), où θ est l'angle entre les vecteurs force et radial.
- Moment d'inertie (I) : L'équivalent de la masse en rotation, dépend de la distribution de la masse autour de l'axe de rotation.
- Pour une masse ponctuelle, I = m * r^2
- Pour une distribution de masse continue, I = ∫ r^2 dm

### c. Centre de masse
- Point où l'on peut considérer que toute la masse d'un objet ou d'un système est concentrée.
- Pour un système de particules, la position du centre de masse (COM) : R_COM = (Σm_i * r_i) / Σm_i
- Pour une distribution de masse continue, R_COM = (1/M) * ∫ r dm, où M est la masse totale.

### d. Stabilité
- Équilibre stable : Un léger déplacement par rapport à l'équilibre se traduit par une force ou un couple de rappel.
- Équilibre instable : Un léger déplacement se traduit par une force ou un couple croissant qui éloigne le système de l'équilibre.
- Équilibre neutre : Pas de force ou de couple de rappel ou d'augmentation en cas de déplacement.

### e. Structures et forces (fermes, poutres, etc.)
- Fermes : Structures triangulaires conçues pour supporter des charges avec un minimum de matériaux.
- Poutres : Éléments structuraux qui supportent des charges principalement par flexion.
- Méthodes d'analyse : Diagrammes de corps libres, méthode des joints, méthode des sections, équations d'équilibre.

## Mécanique des fluides
### a. Propriétés des fluides (densité, viscosité, pression)
- Densité (ρ) : Masse par unité de volume (unité : kg/m^3)
- Viscosité (η) : Mesure de la résistance d'un fluide à la déformation (unité : Pa-s)
- Pression (P) : Force par unité de surface agissant sur une surface (unité : Pa)

### b. Hydrostatique
- Pression hydrostatique : Pression dans un fluide au repos, dépend de la densité du fluide et de la profondeur
- P = ρgh + P_0, où h est la profondeur sous la surface et P_0 la pression atmosphérique.

### c. Principe d'Archimède et flottabilité
- Principe d'Archimède : la force de flottaison exercée sur un objet immergé dans un fluide est égale au poids du fluide déplacé par l'objet.
- Force de flottaison (F_b) = ρ_fluide * V_déplacé * g

### d. Dynamique des fluides (équation de Bernoulli, équation de continuité)
- Équation de Bernoulli : Principe de conservation de l'énergie pour les fluides idéaux incompressibles en écoulement continu
- P + 0,5ρv^2 + ρgh = constante le long d'une ligne de courant
- Équation de continuité : Le produit de la section transversale (A) et de la vitesse du fluide (v) est constant le long d'une trajectoire d'écoulement pour les fluides incompressibles.
- A_1v_1 = A_2v_2

### e. Écoulement laminaire et turbulent
- Écoulement laminaire : Mouvement fluide lisse et ordonné avec des lignes de courant parallèles.
- Écoulement turbulent : Mouvement irrégulier et chaotique des fluides avec des tourbillons.
- Le nombre de Reynolds (Re) caractérise le régime d'écoulement : Re = ρvL/η, où ρ est la densité du fluide, v est la vitesse d'écoulement, L est une longueur caractéristique et η est la viscosité du fluide.
- Écoulement laminaire : Re < 2 000
- Écoulement transitoire : 2 000 < Re < 4 000
- Écoulement turbulent : Re > 4 000

### f. Tension superficielle et action capillaire
- Tension superficielle (γ) : La force par unité de longueur agissant sur la surface d'un fluide qui minimise sa surface (unité : N/m).
- Permet aux gouttelettes d'être sphériques et aux insectes de "marcher" sur l'eau.
- Action capillaire : Mouvement d'un fluide dans un espace étroit dû à la combinaison des forces de tension superficielle, d'adhésion et de cohésion.
- Loi de Jurin pour la montée/descente capillaire : $h = (2γ*cos(θ))/(ρ*g*r)$, où h est la hauteur, γ la tension superficielle, θ l'angle de contact, ρ la densité du fluide, g l'accélération gravitationnelle et r le rayon du tube.

# Thermodynamique

## Température et chaleur
### a. L'équilibre thermique
- Lorsque deux objets en contact ont la même température et qu'il n'y a pas de flux de chaleur entre eux.
- Condition préalable à la mesure de la température

### b. Échelles de température
- Celsius (°C), Kelvin (K) et Fahrenheit (°F)
- K = °C + 273,15
- °F = (9/5)°C + 32

### c. Transfert de chaleur (conduction, convection, rayonnement)
- Conduction : Transfert de chaleur par contact direct entre des objets, régi par la loi de Fourier
- q = -kA(ΔT/L), où q est le taux de transfert de chaleur, k la conductivité thermique, A la surface de contact, ΔT la différence de température et L l'épaisseur.
- Convection : Transfert de chaleur à travers un fluide en mouvement, régi par la loi de Newton sur le refroidissement
- q = hA(ΔT), où h est le coefficient de transfert de chaleur par convection.
- Rayonnement : Transfert de chaleur par ondes électromagnétiques, régi par la loi de Stefan-Boltzmann
- q = εσAT^4, où ε est l'émissivité, σ est la constante de Stefan-Boltzmann et T est la température

## Travail et chaleur dans les processus thermodynamiques
### a. Processus isothermes
- Température constante
- Gaz idéal : PV = nRT
- Travail effectué : W = nRT * ln(Vf/Vi)

### b. Processus adiabatiques
- Pas de transfert de chaleur
- Gaz idéal : PV^γ = constante, où γ = Cp/Cv (rapport de capacité thermique)
- Travail effectué : W = (PfVf - PiVi)/(γ - 1)

### c. Processus isobares
- Pression constante
- Travail effectué : W = P(ΔV)

### d. Processus isochoriques
- Volume constant
- Pas de travail effectué : W = 0

## Lois de la thermodynamique
### a. Zeroth law of thermodynamics (loi zéro de la thermodynamique)
- Si deux systèmes sont en équilibre thermique avec un troisième système, ils sont en équilibre thermique l'un avec l'autre.

### b. Première loi de la thermodynamique
- Principe de conservation de l'énergie appliqué à la chaleur et au travail
- ΔU = Q - W, où ΔU est la variation de l'énergie interne, Q la chaleur ajoutée et W le travail effectué par le système.

### c. Deuxième loi de la thermodynamique
- La chaleur circule spontanément des objets chauds vers les objets froids
- L'entropie d'un système isolé ne diminue jamais.

### d. Troisième loi de la thermodynamique
- Lorsque la température se rapproche du zéro absolu, l'entropie d'un cristal parfait se rapproche de zéro.

## Entropie
### a. Définition microscopique
- S = k_B * ln(Ω), où S est l'entropie, k_B la constante de Boltzmann et Ω le nombre de micro-états.

### b. Définition macroscopique
- dS = δQ/T, où dS est le changement d'entropie, δQ est le transfert de chaleur et T est la température.

### c. Entropie et moteurs thermiques
- Rendement d'un moteur thermique : η = 1 - (T_c/T_h), où T_c est la température du réservoir froid et T_h la température du réservoir chaud.

### d. Cycle de Carnot et rendement
- Cycle théorique réversible composé de deux processus isothermes et de deux processus adiabatiques.
- Rendement de Carnot : η_C = 1 - (T_c/T_h)
# C. Optique

## Optique géométrique
### a. Réflexion
#### i. Miroirs plans
- Ils produisent des images virtuelles, droites, de la même taille que l'objet.
- La distance de l'image est égale à la distance de l'objet
- Formation de l'image : di = do, où di est la distance de l'image et do la distance de l'objet.
#### ii. Miroirs sphériques
- Miroirs concaves (convergents) : Peuvent produire des images réelles, inversées, ou des images virtuelles, droites, en fonction de la distance de l'objet.
- Miroirs convexes (divergents) : produisent des images virtuelles droites plus petites que l'objet.
- Équation du miroir : 1/f = 1/do + 1/di, où f est la distance focale
- Grossissement : M = -di/do

### b. Réfraction
#### i. Loi de Snell
- n1 * sin(θ1) = n2 * sin(θ2), où n1 et n2 sont les indices de réfraction des deux milieux, et θ1 et θ2 les angles d'incidence et de réfraction, respectivement.
#### ii. Réflexion interne totale
- Se produit lorsque l'angle d'incidence dépasse l'angle critique, θ_c = arcsin(n2/n1)
- Aucune lumière n'est transmise dans le second milieu, et toute la lumière est réfléchie dans le premier milieu.
#### iii. Dispersion et prismes
- Dispersion : Séparation de la lumière en ses longueurs d'onde constitutives (couleurs) en raison d'indices de réfraction différents pour les différentes longueurs d'onde.
- Prismes : Pièces de verre ou d'autres matériaux transparents de forme triangulaire qui dispersent la lumière dans un spectre.
- Équation de dispersion : n = A + B/λ^2, où n est l'indice de réfraction, λ est la longueur d'onde, et A et B sont des constantes.

### c. Lentilles minces
####i. Lentilles convergentes
- Lentilles convexes qui amènent des rayons lumineux parallèles à un point focal.
- Peuvent produire des images réelles, inversées, ou des images virtuelles, droites, en fonction de la distance de l'objet.

#### ii. Lentilles divergentes
- Lentilles concaves qui diffusent des rayons lumineux parallèles vers l'extérieur.
- Elles produisent toujours des images virtuelles droites plus petites que l'objet.

#### iii. Équation de Lensmaker
- 1/f = (n-1)(1/R1 - 1/R2), où f est la distance focale, n l'indice de réfraction et R1 et R2 les rayons de courbure des surfaces de la lentille.
- Équation de la lentille mince : 1/f = 1/do + 1/di

### d. Instruments optiques (télescopes, microscopes, etc.)
#### i. Télescopes
- Télescope réfracteur : Utilise des lentilles convergentes pour former des images agrandies d'objets éloignés.
- Grossissement angulaire : M = -f_objectif/f_oculaire, où f_objectif et f_oculaire sont les distances focales de l'objectif et de l'oculaire, respectivement.
- Télescope à réflexion : Utilise des miroirs (généralement concaves) pour former des images agrandies d'objets distants.
#### ii. Microscopes
- Microscope composé : Utilise une combinaison d'objectifs et d'oculaires pour grossir de petits objets.
- Grossissement total : M_total = M_objectif * M_eyepiece, où M_objectif et M_eyepiece sont respectivement les grossissements de l'objectif et de l'oculaire.

## Optique physique
### a. Nature ondulatoire de la lumière
- La lumière présente à la fois un comportement ondulatoire et un comportement particulaire (dualité onde-particule).
- Les ondes lumineuses sont des ondes électromagnétiques qui oscillent perpendiculairement à la direction de propagation.
- Les propriétés des ondes comprennent la longueur d'onde, la fréquence et la vitesse.

### b. Interférence
#### i. Expérience de la double fente de Young
- Démontre la nature ondulatoire de la lumière et l'interférence
- Lorsque la lumière passe à travers deux fentes rapprochées, elle crée une figure d'interférence de bandes claires et sombres sur un écran.
- Formule : d * sin(θ) = m * λ, où d est l'espacement des fentes, θ est l'angle de la frange claire, m est un nombre entier (ordre de la frange) et λ est la longueur d'onde de la lumière.
-  ii. Interférence de couches minces
- Se produit lorsque la lumière se réfléchit sur les surfaces supérieure et inférieure d'un film mince.
- Les deux ondes réfléchies peuvent interférer de manière constructive ou destructive en fonction de l'épaisseur du film et de la longueur d'onde de la lumière.
- Formule : 2 * n * t * cos(θ) = m * λ (constructive), (m + 1/2) * λ (destructive), où n est l'indice de réfraction, t est l'épaisseur du film, θ est l'angle d'incidence, et m est un nombre entier.

### c. Diffraction
#### i. Diffraction sur une seule fente
- La lumière qui passe à travers une fente étroite crée une tache centrale brillante entourée de bandes alternativement brillantes et sombres.
- Formule : a * sin(θ) = m * λ, où a est la largeur de la fente, θ est l'angle avec la frange sombre, m est un nombre entier et λ est la longueur d'onde de la lumière.

#### ii. Réseau de diffraction
- Série de fentes étroites qui produisent un motif de points brillants par interférence.
- Formule : d * sin(θ) = m * λ, où d est l'espacement du réseau, θ est l'angle de la frange brillante, m est un nombre entier et λ est la longueur d'onde de la lumière.

### d. Polarisation
- Orientation des oscillations d'une onde électromagnétique.
- Polarisation linéaire : limite les oscillations à un seul plan
- Polarisation circulaire : Les oscillations tournent de manière hélicoïdale.

## Optique moderne
### a. Lasers
- Amplification de la lumière par émission stimulée de rayonnement
- Production d'une lumière cohérente et monochromatique avec une faible divergence du faisceau

### b. Fibres optiques
- Fibres minces et flexibles utilisées pour transmettre la lumière sur de longues distances.
- Utilisent la réflexion interne totale pour minimiser la perte de signal

### c. Holographie
- Technique permettant de produire des images tridimensionnelles en utilisant l'interférence des ondes lumineuses.

### d. Optique non linéaire
- L'étude de l'interaction de la lumière avec la matière dans laquelle la réponse de la matière est une fonction non linéaire de l'intensité de la lumière.

# Électromagnétisme

## Électrostatique
### a. Charge électrique
- Propriété fondamentale de la matière, positive ou négative
- Charge élémentaire (e) : 1,6 × 10^(-19) C (Coulombs)
- Conservation de la charge : La charge totale d'un système isolé reste constante

### b. Loi de Coulomb
- Décrit la force entre deux particules chargées
- Formule : F = k * |q1 * q2| / r^2, où F est la force, k est la constante de Coulomb (8,99 × 10^9 Nm^2/C^2), q1 et q2 sont les charges et r est la distance qui les sépare.
- La force est attractive pour les charges opposées et répulsive pour les charges similaires.

### c. Champ électrique
- Décrit la force par unité de charge sur une charge d'essai.
- Formule : E = F/q, où E est le champ électrique, F est la force et q est la charge d'essai.
- Les lignes de champ électrique indiquent la direction de la force sur une charge positive.

### d. Potentiel électrique et énergie potentielle
- Potentiel électrique (V) : Travail effectué par unité de charge pour déplacer une charge entre deux points dans un champ électrique.
- Formule : V = W/q, où W est le travail effectué
- Énergie potentielle électrique (U) : L'énergie que possède une particule chargée en raison de sa position dans un champ électrique.
- Formule : U = qV, où q est le travail effectué : U = qV, où q est la charge et V le potentiel électrique

### e. Capacité et condensateurs
- Capacité (C) : capacité à stocker une charge électrique.
- Formule : C = Q/V, où Q est la charge et V la différence de potentiel.
- Condensateurs : Composants électroniques qui stockent la charge électrique, constitués de deux plaques conductrices séparées par un isolant (diélectrique).

### f. Diélectriques
- Matériaux isolants qui affectent le champ électrique entre les plaques du condensateur.
- Constante diélectrique (κ) : Quantité sans dimension décrivant l'effet d'un diélectrique sur la capacité.
- Formule : C' = κC, où C' est la capacité avec diélectrique et C est la capacité sans diélectrique.

### g. Loi de Gauss
- Relie le champ électrique à la distribution des charges
- Formule : ∮ E - dA = Q_enclosed / ε_0, où E est le champ électrique, dA est le vecteur différentiel de surface, Q_enclosed est la charge enfermée par la surface gaussienne, et ε_0 est la permittivité du vide (8,85 × 10^(-12) C^2/Nm^2).

## Magnétostatique
### a. Pôles et champs magnétiques
- Pôles magnétiques : Pôles Nord et Sud, analogues aux charges électriques
- Champs magnétiques (B) : Décrit la force exercée sur une charge en mouvement ou un conducteur porteur de courant.

### b. Force magnétique sur les charges mobiles
- Formule : F = q(v × B), où F est la force, q est la charge, v est la vitesse de la charge et B est le champ magnétique.
- La force est perpendiculaire à la fois à la vitesse et au champ magnétique.

### c. Force magnétique sur les conducteurs porteurs de courant
- Formule : F = I(L × B), où F est la force, I est le courant, L est la longueur du conducteur et B est le champ magnétique.

### d. Champ magnétique dû au courant
- Les charges en mouvement créent des champs magnétiques
- Formule (pour un long fil droit) : B = μ_0 * I / (2 * π * r), où B est le champ magnétique, μ_0 est la perméabilité de l'espace libre (4π × 10^(-7) Tm/A), I est le courant et r est la distance du fil.

### e. Loi d'Ampère
- Relie le champ magnétique à la distribution du courant
- Formule : ∮ B - dl = μ_0 * I_enclosed, où B est le champ magnétique, dl est la longueur du chemin différentiel, μ_0 est la perméabilité de l'espace libre, et I_enclosed est le courant enfermé par la boucle ampérienne.

### f. Loi de Biot-Savart
- Décrit le champ magnétique produit par un courant électrique constant.
- Formule : dB = (μ_0 / 4π) * (Idl × r̂) / r^2, où dB est le champ magnétique infinitésimal, μ_0 est la perméabilité de l'espace libre, I est le courant, dl est la longueur infinitésimale de l'élément de courant, r̂ est le vecteur unitaire pointant de l'élément de courant vers le point d'observation, et r est la distance entre l'élément de courant et le point d'observation.

### g. Matériaux magnétiques (diamagnétisme, paramagnétisme, ferromagnétisme)
- Diamagnétisme : Matériaux sans électrons non appariés, faiblement repoussés par un champ magnétique.
- Paramagnétisme : Matériaux avec électrons non appariés, faiblement attirés par un champ magnétique
- Ferromagnétisme : Matériaux comportant des électrons non appariés et des domaines magnétiques internes puissants, fortement attirés par un champ magnétique et pouvant être magnétisés.

## Électrodynamique
### a. Loi d'Ohm
- Décrit la relation entre la tension, le courant et la résistance.
- Formule : V = IR, où V est la tension, I est le courant et R est la résistance.

### b. Énergie électrique et puissance
- Énergie électrique (W) : Le travail effectué par un courant électrique
- Formule : W = QV, où Q est la charge et V la tension.
- Puissance électrique (P) : vitesse à laquelle l'énergie électrique est transférée.
- Formule : P = IV, où I est la charge et V la tension : P = IV, où I est le courant et V la tension

### c. Lois de Kirchhoff (lois de la tension et du courant)
- Loi de Kirchhoff sur la tension (KVL) : La somme des tensions autour d'une boucle fermée est nulle.
- Loi de Kirchhoff sur le courant (KCL) : La somme des courants entrant dans une jonction est égale à la somme des courants sortant de la jonction.

### d. Circuits en série et en parallèle
- Circuits en série : Composants connectés bout à bout, le même courant circule dans chaque composant.
- Circuits parallèles : Composants connectés côte à côte, même tension à travers chaque composant.

### e. Circuits RC, RL et RLC
- Circuits RC : Contiennent des résistances et des condensateurs
- Constante de temps (τ) : τ = RC, où R est la résistance et C la capacité.
- Circuits RL : contiennent des résistances et des inductances
- Constante de temps (τ) : τ = L/R, où L est l'inductance et R la résistance.
- Circuits RLC : contiennent des résistances, des inductances et des condensateurs
- Fréquence de résonance : f = 1/(2π√(LC))

### f. Circuits à courant alternatif (CA) et impédance
- CA : le courant change de direction périodiquement
- Impédance (Z) : L'opposition totale à la circulation du courant alternatif.
- Formule : Z = √(R^2 + (XL - XC)^2), où R est la résistance, XL la réactance inductive et XC la réactance capacitive.

### g. Transformateurs et inductance
- Transformateurs : Dispositifs qui modifient la tension et le courant dans un circuit à courant alternatif.
- Inductance (L) : Capacité d'une bobine à stocker de l'énergie magnétique.
- Formule (pour un solénoïde) : L = μ_0 * N^2 * A / l, où μ_0 est la perméabilité de l'espace libre, N est le nombre de spires, A est la surface de la section transversale et l est la longueur du solénoïde.

### h. Équations de Maxwell
- Loi de Gauss pour l'électricité : ∮ E - dA = Q_enclosed / ε_0
- Loi de Gauss pour le magnétisme : ∮ B - dA = 0
- Loi de Faraday sur l'induction électromagnétique : ∮ E - dl = -dΦ_B/dt
- Loi d'Ampère avec ajout de Maxwell : ∮ B - dl = μ_0 * (I_enclosed + ε_0 * dΦ_E/dt)

## Les ondes électromagnétiques
### a. Génération d'ondes électromagnétiques
- Produites par l'accélération de charges ou la modification de champs magnétiques
- Exemples : charges oscillantes dans les antennes, courants variables dans les circuits ou processus nucléaires.

### b. Équation des ondes et vitesse de la lumière
- Décrit la propagation des ondes électromagnétiques
- Formule : ∇^2 E = ε_0 * μ_0 * ∂^2 E/∂t^2, où E est le champ électrique, ε_0 la permittivité de l'espace libre, μ_0 la perméabilité de l'espace libre et t le temps.
- Vitesse de la lumière (c) : c = 1/√(ε_0 * μ_0) ≈ 3 * 10^8 m/s dans le vide.

### c. Propriétés des ondes électromagnétiques (polarisation, énergie, quantité de mouvement)
- Polarisation : L'orientation du champ électrique dans une onde électromagnétique.
- L'énergie : Proportionnelle au carré de l'amplitude des champs électriques et magnétiques
- Formule : U = 1/2 * ε_0 * E^2 * V, où U est l'énergie, ε_0 est la permittivité de l'espace libre, E est l'amplitude du champ électrique et V est le volume.
- Momentum : p = U/c, où p est le momentum, U l'énergie et c la vitesse de la lumière.

### d. Spectre électromagnétique
#### i. Ondes radio
- Fréquence : de 3 Hz à 300 GHz
- Applications : Radiodiffusion, communication, radar et systèmes de navigation
#### ii. Micro-ondes
- Fréquence : 300 MHz à 300 GHz
- Applications : Communication, radar, technologie des satellites et fours à micro-ondes
#### iii. Infrarouges
- Fréquence : 300 GHz à 400 THz
- Applications : Télécommandes, imagerie thermique et vision nocturne
#### iv. Lumière visible
- Fréquence : 400 THZ à 790 THZ
- Longueur d'onde : 700 nm (rouge) à 400 nm (violet)
- Applications : Vision, photographie et communication optique
#### v. Ultraviolet
- Fréquence : 790 THz à 30 PHz
- Applications : Stérilisation, bronzage et fluorescence
#### vi. Rayons X
- Fréquence : 30 PHz à 30 EHz
- Applications : Imagerie médicale, analyse des matériaux et sécurité
#### vii. Rayons gamma
- Fréquence : > 30 EHz > 30 EHz
- Sources : réactions nucléaires et événements cosmiques : Réactions nucléaires et événements cosmiques
- Applications : Thérapie du cancer, stérilisation et astrophysique




