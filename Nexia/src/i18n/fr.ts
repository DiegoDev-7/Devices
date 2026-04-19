const fr = {
  common: {
    login: "Se connecter",
    logout: "Se déconnecter",
    email: "Email",
    password: "Mot de passe",
    footer: {
      copyright: "© Nexia 2026. Tous droits réservés.",
      terms: "Termes et conditions"
    }
  },
  settings: {
    title: "Paramètres"
  },
  navigation: {
    start: "Début",
    description: "Description",
    apps: "Applications",
    devices: "Appareils",
    gratitude: "Nexia"
  },
  home: {
    start: {
      description1: "Un système d'exploitation mobile entièrement recréé sur le web. Nexia n'est pas une maquette visuelle. C'est un environnement interactif qui simule le comportement réel d'un smartphone moderne.",
      description2: "Déverrouillage d'écran, barre d'état dynamique, panneau coulissant, navigation inférieure et applications interconnectées.",
      selectDevice: "Sélectionner l'appareil"
    },
    description: {
      title: "Description",
      text1: "Nexia a été conçu comme une représentation fonctionnelle d'un téléphone réel, construit à partir de zéro comme une application web structurée.",
      text2: "Le système intègre la gestion d'état global, la communication inter-modules, la simulation de matériel logique et la connexion avec des API externes.",
      text3: "Ce n'est pas seulement l'interface. C'est l'architecture, la logique et la cohérence systémique."
    },
    apps: {
      title: "Applications",
      description: "Chaque application a été conçue et développée indépendamment, mais toutes partagent l'état et réagissent aux événements du système."
    },
    devices: {
      title: "Appareils",
      description: "Nexia ne se limite pas à l'environnement mobile. Le système inclut un ATM connecté directement avec l'application bancaire de l'appareil.",
      mobile: {
        title: "Appareil mobile",
        text: "Système d'exploitation interactif avec applications connectées et comportement dynamique."
      },
      atm: {
        title: "ATM",
        text: "Interface externe liée au système bancaire interne du téléphone, permettant la synchronisation des données en temps réel."
      },
      authRequired: "Vous devez vous connecter ou vous inscrire pour utiliser les appareils",
      bankRequired: "Vous devez créer un compte bancaire pour utiliser l'ATM"
    },
    thanks: {
      title: "Merci d'explorer Nexia",
      text1: "Nexia est un projet entièrement gratuit. Toutes ses fonctionnalités sont disponibles sans coûts cachés, abonnements ou paiements obligatoires.",
      text2: "Ce projet représente le design, l'architecture et l'exécution technique. Un système complet développé sur le web.",
      text3: "L'objectif du projet est d'offrir un outil accessible à toute personne, permettant l'utilisation gratuite des appareils virtuels directement depuis le navigateur. Nexia sera toujours gratuit et se concentrera sur l'offre d'une expérience ouverte, simple et sans barrières pour les utilisateurs."
    }
  },
  auth: {
    login: {
      title: "Se connecter",
      forgotPassword: "Mot de passe oublié?",
      divider: "ou",
      email: "Email",
      emailPlaceholder: "email@exemple.com",
      password: "Mot de passe",
      passwordPlaceholder: "********",
      show: "Afficher",
      hide: "Masquer",
      submit: "Accéder",
      error: "Erreur de connexion"
    },
    register: {
      title: "Créer un compte",
      divider: "ou",
      name: "Nom",
      namePlaceholder: "Nom",
      lastname: "Prénom",
      lastnamePlaceholder: "Prénom",
      email: "Email",
      emailPlaceholder: "email@exemple.com",
      password: "Mot de passe",
      passwordPlaceholder: "********",
      show: "Afficher",
      hide: "Masquer",
      bankOptional: "Créer un compte bancaire (Facultatif)",
      atmOptional: "Créer un compte ATM (Facultatif)",
      acceptTerms: "J'accepte les termes et conditions",
      submit: "S'inscrire",
      googleError: "L'inscription Google n'a pas été complétée"
    },
    reset: {
      request: {
        title: "Récupérer le mot de passe",
        email: "Email",
        emailPlaceholder: "email@exemple.com",
        sending: "Envoi en cours...",
        submit: "Envoyer le code"
      },
      verify: {
        title: "Vérifier le code",
        instructionText: "Entrez le code à 6 chiffres que vous avez reçu dans votre e-mail",
        incompleteCode: "Code incomplet",
        invalidCode: "Code invalide"
      },
      newPassword: {
        title: "Nouveau mot de passe",
        password: "Nouveau mot de passe",
        passwordPlaceholder: "Nouveau mot de passe",
        changing: "Changement en cours...",
        submit: "Changer le mot de passe"
      }
    },
    termsPrivacy: {
      prefix: "En vous connectant ou en créant un compte, vous acceptez nos",
      and: "et notre",
      privacy: "Politique de Confidentialité"
    },
    deleteAccount: "Supprimer le compte",
    profile: {
      title: "Profil",
      intro: "Dans votre profil, vous pouvez accéder aux outils système, gérer les paramètres personnels et utiliser des services tels que la banque, le guichet automatique et d'autres applications disponibles dans l'environnement Nexia.",
      applications: "Applications",
      applicationsDesc: "Accédez aux applications disponibles dans le système et naviguez entre elles à partir de l'interface mobile.",
      finance: "Système Financier",
      financeDesc: "Vérifiez l'état de votre banque et effectuez des opérations à partir du guichet automatique dans l'environnement Nexia.",
      settings: "Paramètres",
      settingsDesc: "Gérez les informations de votre compte et ajustez les options disponibles dans votre profil."
    },
    support: {
      title: "Support",
      description: "Si vous rencontrez un problème en utilisant Nexia, vous pouvez contacter l'équipe d'assistance technique en soumettant le formulaire ci-dessous.",
      fullName: "Nom complet",
      email: "Email",
      message: "Décrivez votre problème...",
      send: "Envoyer",
      divider: "ou",
      supportEmail: "Email de support",
      copy: "Copier",
      copied: "✔",
      successMessage: "Message envoyé avec succès",
      errorMessage: "Erreur inattendue"
    },
    settings: {
      title: "Paramètres",
      accountInfo: "Informations du compte",
      name: "Nom",
      lastname: "Prénom",
      email: "Email",
      newPassword: "Nouveau mot de passe",
      updateData: "Mettre à jour les données",
      logout: "Déconnexion",
      logoutButton: "Déconnexion",
      deleteAccountSection: "Supprimer le compte",
      deleteAccountButton: "Supprimer le compte",
      updateSuccess: "Mise à jour réussie",
      deleteSuccess: "Compte supprimé avec succès",
      errorMessage: "Erreur inattendue",
      unexpectedError: "Erreur inattendue"
    },
    header: {
      intro: "Connectez-vous pour enregistrer vos préférences et utiliser Nexia.",
      login: "Connexion",
      register: "S'inscrire",
      menu: {
        profile: "Profil",
        support: "Assistance",
        config: "Paramètres"
      }
    },
    components: {
      deleteButton: {
        error: "Erreur lors de la suppression du compte avec google"
      },
      loginButton: {
        error: "Erreur lors de la connexion avec google",
        continueGoogle: "Continuer avec Google"
      },
      registerButton: {
        error: "Erreur lors de la création de compte avec google",
        createGoogle: "Créer un compte avec Google",
        incompleteRegister: "L'inscription avec Google n'a pas été complétée"
      }
    }
  },
  terms: {
    title: "Termes et conditions d'utilisation",
    welcome: "Bienvenue sur Nexia. En accédant et utilisant ce site web, vous acceptez d'être lié par ces Termes et Conditions d'Utilisation. Si vous n'êtes pas d'accord avec l'un des termes, veuillez ne pas utiliser ce site.",
    definitions: {
      title: "1. Définitions",
      content: "\"Site\" fait référence à la plateforme web de Nexia. \"Utilisateur\" fait référence à toute personne qui accède ou utilise le Site. \"Contenu\" comprend le texte, les images, l'audio, la vidéo, le code et d'autres matériaux disponibles sur le Site."
    },
    access: {
      title: "2. Accès et utilisation",
      content: "L'accès au Site est gratuit sauf indication contraire. L'Utilisateur s'engage à utiliser le Site conformément à la loi, à la bonne foi et à ces termes, s'abstenant de toute conduite pouvant endommager, désactiver, surcharger ou détériorer le Site ou empêcher sa jouissance normale par d'autres utilisateurs."
    },
    obligations: {
      title: "3. Obligations de l'utilisateur",
      list: [
        "Ne pas introduire de malware, virus ou tout code causant des dommages.",
        "Ne pas enregistrer de comptes faux ni usurper l'identité de tiers.",
        "Ne pas utiliser le Site à des fins illicites, diffamatoires ou immorales."
      ]
    },
    intellectual: {
      title: "4. Contenu et propriété intellectuelle",
      content1: "Sauf indication expresse, tout le Contenu du Site appartient à Nexia ou à ses concédants de licence et est protégé par la réglementation de la propriété intellectuelle. La reproduction, la distribution ou l'exploitation est interdite sans autorisation expresse.",
      content2: "En particulier, toutes les icônes utilisées sur ce Site ont été profondément conçues et développées par l'auteur de Nexia ; elles n'ont pas été copiées de tiers sauf pour les icônes de réseaux sociaux (par exemple les icônes officielles de plateformes comme X, GitHub ou Discord), qui sont affichées uniquement comme liens vers ces services."
    },
    thirdParty: {
      title: "5. Contenus tiers et liens",
      content: "Le Site peut inclure des liens vers des ressources externes ou des contenus tiers. Ces liens sont fournis uniquement pour la commodité de l'Utilisateur ; Nexia ne contrôle ni ne garantit la véracité, l'utilité ou la disponibilité des sites liés et n'assume aucune responsabilité pour leur contenu."
    },
    privacy: {
      title: "6. Protection des données et confidentialité",
      content: "Le traitement des données personnelles est régi par la Politique de Confidentialité du Site. En utilisant le Site, vous consentez aux pratiques décrites dans cette politique concernant la collecte et l'utilisation de vos données."
    },
    cookies: {
      title: "7. Cookies et suivi",
      content: "Notre Site peut utiliser des cookies et des technologies similaires pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser les contenus. Consultez la Politique des Cookies pour plus d'informations et comment les désactiver."
    },
    userContent: {
      title: "8. Contenu fourni par les utilisateurs",
      content: "Si le Site permet aux utilisateurs de télécharger du contenu, l'utilisateur garantit qu'il possède les droits nécessaires sur ce contenu et accorde à Nexia une licence non exclusive, mondiale et sous-licenciable pour utiliser, reproduire et afficher ce contenu sur le Site."
    },
    disclaimer: {
      title: "9. Exclusion de responsabilité",
      content: "Le Site est fourni \"tel quel\" et \"selon disponibilité\". Nexia ne garantit pas l'absence d'erreurs, la disponibilité continue ni l'adéquation à un objectif spécifique. Dans la mesure maximale permise par la loi, Nexia exclut toute responsabilité pour les dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le Site."
    },
    security: {
      title: "10. Sécurité",
      content: "Bien que nous mettions en œuvre des mesures raisonnables pour protéger le Site et les données des utilisateurs, aucun système n'est complètement sécurisé. Les utilisateurs doivent adopter des pratiques sécurisées (mots de passe robustes, maintenir les systèmes à jour) et signaler toute activité suspecte."
    },
    modifications: {
      title: "11. Modifications du service et des termes",
      content: "Nexia se réserve le droit de modifier, suspendre ou interrompre le Site ou l'une de ses caractéristiques à tout moment. Il peut également mettre à jour ces termes ; les modifications seront effectives à partir de leur publication sur cette page. Il est recommandé de les examiner régulièrement."
    },
    termination: {
      title: "12. Résiliation",
      content: "Nexia peut, lorsqu'elle le juge opportun et sans préavis, refuser ou retirer l'accès à ce Site à ceux des utilisateurs qui enfreignent ces termes ou dont les comportements sont considérés comme inappropriés."
    },
    jurisdiction: {
      title: "13. Loi applicable et juridiction",
      content: "Ces termes seront régis et interprétés conformément aux lois applicables dans la juridiction où Nexia a son siège. Pour la résolution de tout conflit découlant de ces termes, les parties se soumettent aux tribunaux compétents correspondants."
    },
    contact: {
      title: "14. Contact et support",
      intro: "Pour toute question concernant ces termes ou le Site, vous pouvez contacter l'auteur directement par email",
      discord: " ou via Discord. Cherchez l'utilisateur dxvv_7 sur Discord ou utilisez le canal de contact qui apparaît sur le site.",
      response: "Nous essaierons de répondre aux demandes dans un délai raisonnable."
    },
    lastUpdate: "Dernière mise à jour : mars 2026."
  },
  apps: {
    files: "Fichiers",
    bank: "Banque",
    calculator: "Calculatrice",
    calendar: "Calendrier",
    money: "Argent",
    clock: "Horloge",
    contact: "Contact",
    messages: "Messages",
    gallery: "Galerie",
    notes: "Notes",
    radio: "Radio",
    phone: "Téléphone",
    rewards: "Récompenses",
    security: "Sécurité",
    settings: "Paramètres",
    sim: "Sim",
    simpsons: "Simpsons"
  },
  devices: {
    phone: {
      appsTitle: "Applications disponibles",
      appsDescription1: "L'appareil mobile de Nexia dispose d'un ensemble d'applications intégrées qui simulent les fonctions essentielles d'un téléphone réel. Celles-ci incluent calculatrice, ToDo, notes, configuration, météo, fichiers, horloge et autres utilitaires système.",
      appsDescription2: "Chacune de ces applications est entièrement fonctionnelle et permet à l'utilisateur d'interagir de manière réaliste, que ce soit en gérant des tâches, en créant des notes, en explorant des fichiers, en consultant l'horloge ou en ajustant la configuration de l'appareil. Tout l'environnement est conçu pour offrir une expérience cohérente et intuitive, similaire à l'utilisation d'un appareil mobile physique."
    },
    atm: {
      title: "ATM Intelligent",
      description1: "Cet appareil vous permet de vous authentifier à l'aide de votre carte bancaire pour accéder en toute sécurité à votre compte.",
      description2: "Une fois à l'intérieur, vous pouvez renvoyer de l'argent à la banque, transférer des fonds à d'autres utilisateurs en utilisant leur numéro de téléphone, et gérer vos opérations financières directement depuis l'appareil.",
      description3: "Vous aurez également accès à la consultation du solde à la fois sur votre compte bancaire et sur l'ATM, ainsi qu'à un historique détaillé de toutes les transactions effectuées."
    }
  }
}

export default fr