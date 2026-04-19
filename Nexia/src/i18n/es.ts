const es = {
  common: {
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    email: "Correo",
    password: "Contraseña",
    footer: {
      copyright: "© Nexia 2026. Todos los derechos reservados.",
      terms: "Terminos y condiciones"
    }
  },
  settings: {
    title: "Configuración"
  },
  navigation: {
    start: "Inicio",
    description: "Descripción",
    apps: "Aplicaciones",
    devices: "Dispositivos",
    gratitude: "Nexia"
  },
  home: {
    start: {
      description1: "Un sistema operativo móvil recreado completamente en la web. Nexia no es una maqueta visual. Es un entorno interactivo que simula el comportamiento real de un smartphone moderno.",
      description2: "Desbloqueo de pantalla, barra de estado dinámica, panel deslizante, navegación inferior y aplicaciones conectadas entre sí.",
      selectDevice: "Seleccionar dispositivo"
    },
    description: {
      title: "Descripción",
      text1: "Nexia fue diseñado como una representación funcional de un teléfono real, construido desde cero como aplicación web estructurada.",
      text2: "El sistema integra gestión de estado global, comunicación entre módulos, simulación de hardware lógico y conexión con APIs externas.",
      text3: "No es solo interfaz. Es arquitectura, lógica y coherencia sistémica."
    },
    apps: {
      title: "Aplicaciones",
      description: "Cada aplicación fue diseñada y desarrollada de forma independiente, pero todas comparten estado y reaccionan a eventos del sistema."
    },
    devices: {
      title: "Dispositivos",
      description: "Nexia no se limita al entorno móvil. El sistema incluye un ATM conectado directamente con la aplicación bancaria del dispositivo.",
      mobile: {
        title: "Dispositivo móvil",
        text: "Sistema operativo interactivo con aplicaciones conectadas y comportamiento dinámico."
      },
      atm: {
        title: "ATM",
        text: "Interfaz externa vinculada al sistema bancario interno del teléfono, permitiendo sincronización de datos en tiempo real."
      },
      authRequired: "Necesitas iniciar sesión o registrarte para usar los dispositivos",
      bankRequired: "Debes crear una cuenta bancaria para usar el ATM"
    },
    thanks: {
      title: "Gracias por explorar Nexia",
      text1: "Nexia es un proyecto de uso completamente gratuito. Todas sus funcionalidades estan disponibles sin costos ocultos, suscripciones ni pagos obligatorios.",
      text2: "Este proyecto representa diseño, arquitectura y ejecución técnica. Un sistema completo desarrollado en la web.",
      text3: "El objetivo del proyecto es ofrecer una herramienta accesible para cualquier persona, permitiendo el uso libre de los dispositivos virtuales directamente desde el navegador. Nexia siempre sera gratuito y estara enfocado en brindar una experiencia abierta, simple y sin barreras para los usuarios."
    }
  },
  auth: {
    login: {
      title: "Iniciar sesión",
      forgotPassword: "¿Olvidaste tu contraseña?",
      divider: "o",
      email: "Correo",
      emailPlaceholder: "correo@ejemplo.com",
      password: "Contraseña",
      passwordPlaceholder: "********",
      show: "Ver",
      hide: "Cerrar",
      submit: "Acceder",
      error: "Error al iniciar sesión"
    },
    register: {
      title: "Crear cuenta",
      divider: "o",
      name: "Nombre",
      namePlaceholder: "Nombre",
      lastname: "Apellido",
      lastnamePlaceholder: "Apellido",
      email: "Correo",
      emailPlaceholder: "correo@ejemplo.com",
      password: "Contraseña",
      passwordPlaceholder: "********",
      show: "Ver",
      hide: "Cerrar",
      bankOptional: "Crear cuenta en la app del banco (Opcional)",
      atmOptional: "Crear cuenta para el ATM (Opcional)",
      acceptTerms: "Acepto los terminos y condiciones",
      submit: "Registrarse",
      googleError: "No se completó el registro con google"
    },
    reset: {
      request: {
        title: "Recuperar contraseña",
        email: "Correo",
        emailPlaceholder: "correo@ejemplo.com",
        sending: "Enviando...",
        submit: "Enviar código"
      },
      verify: {
        title: "Verificar código",
        instructionText: "Ingresa el código de 6 dígitos que recibiste en tu correo",
        incompleteCode: "Código incompleto",
        invalidCode: "Código inválido"
      },
      newPassword: {
        title: "Nueva contraseña",
        password: "Nueva contraseña",
        passwordPlaceholder: "Nueva contraseña",
        changing: "Cambiando...",
        submit: "Cambiar contraseña"
      }
    },
    termsPrivacy: {
      prefix: "Al iniciar sesion o crear una cuenta aceptas nuestros",
      and: "y la",
      privacy: "Política de Privacidad"
    },
    deleteAccount: "Eliminar cuenta",
    profile: {
      title: "Perfil",
      intro: "En tu perfil podrás acceder a herramientas del sistema, gestionar configuraciones personales y utilizar servicios como el banco, el cajero automático y otras aplicaciones disponibles dentro del entorno Nexia.",
      applications: "Aplicaciones",
      applicationsDesc: "Accede a las aplicaciones disponibles dentro del sistema y navega entre ellas desde la interfaz móvil.",
      finance: "Sistema Financiero",
      financeDesc: "Consulta el estado de tu banco y realiza operaciones desde el cajero automático del entorno Nexia.",
      settings: "Configuración",
      settingsDesc: "Administra la información de tu cuenta y ajusta las opciones disponibles en tu perfil."
    },
    support: {
      title: "Soporte",
      description: "Si experimenta algún problema al usar Nexia, puede ponerse en contacto con el equipo de soporte técnico enviando el formulario a continuación.",
      fullName: "Nombre completo",
      email: "Correo",
      message: "Describe tu problema...",
      send: "Enviar",
      divider: "o",
      supportEmail: "Correo de soporte",
      copy: "Copiar",
      copied: "✔",
      successMessage: "Mensaje enviado correctamente",
      errorMessage: "Error inesperado"
    },
    settings: {
      title: "Configuración",
      accountInfo: "Información de la cuenta",
      name: "Nombre",
      lastname: "Apellido",
      email: "Correo",
      newPassword: "Nueva contraseña",
      updateData: "Actualizar datos",
      logout: "Cerrar sesión",
      logoutButton: "Cerrar sesión",
      deleteAccountSection: "Eliminar cuenta",
      deleteAccountButton: "Eliminar cuenta",
      updateSuccess: "Actualización exitosa",
      deleteSuccess: "Cuenta eliminada correctamente",
      errorMessage: "Error inesperado",
      unexpectedError: "Error inesperado"
    },
    header: {
      intro: "Accede para guardar preferencias y poder usar Nexia.",
      login: "Iniciar sesion",
      register: "Registrarse",
      menu: {
        profile: "Perfil",
        support: "Soporte",
        config: "Configuración"
      }
    },
    components: {
      deleteButton: {
        error: "Error al eliminar cuenta con google"
      },
      loginButton: {
        error: "Error al iniciar sesión con google",
        continueGoogle: "Continuar con Google"
      },
      registerButton: {
        error: "Error al crear cuenta con google",
        createGoogle: "Crear cuenta con Google",
        incompleteRegister: "No se completó el registro con google"
      }
    }
  },
  terms: {
    title: "Términos y condiciones de uso",
    welcome: "Bienvenido a Nexia. Al acceder y utilizar este sitio web usted acepta quedar obligado por los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de los términos, por favor no utilice este sitio.",
    definitions: {
      title: "1. Definiciones",
      content: "\"Sitio\" se refiere a la plataforma web de Nexia. \"Usuario\" hace referencia a cualquier persona que accede o utiliza el Sitio. \"Contenido\" incluye texto, imágenes, audio, vídeo, código y demás materiales disponibles en el Sitio."
    },
    access: {
      title: "2. Acceso y uso",
      content: "El acceso al Sitio es gratuito salvo indicación contraria. El Usuario se compromete a utilizar el Sitio conforme a la ley, a la buena fe y a estos términos, absteniéndose de cualquier conducta que pueda dañar, inutilizar, sobrecargar o deteriorar el Sitio o impedir su normal disfrute por otros usuarios."
    },
    obligations: {
      title: "3. Obligaciones del usuario",
      list: [
        "No introducir malware, virus o cualquier código que cause daños.",
        "No registrar cuentas falsas ni suplantar a terceros.",
        "No utilizar el Sitio para fines ilícitos, difamatorios o inmorales."
      ]
    },
    intellectual: {
      title: "4. Contenido y propiedad intelectual",
      content1: "Salvo indicación expresa, todo el Contenido del Sitio es titularidad de Nexia o de sus licenciantes y está protegido por la normativa de propiedad intelectual. Queda prohibida su reproducción, distribución o explotación sin autorización expresa.",
      content2: "En particular, todos los iconos usados en este Sitio han sido diseñados y desarrollados profundamente por el autor de Nexia; no han sido copiados de terceros excepto los iconos utilizados para redes sociales (por ejemplo iconos oficiales de plataformas como X, GitHub o Discord), que se muestran únicamente como enlaces a dichos servicios."
    },
    thirdParty: {
      title: "5. Contenidos de terceros y enlaces",
      content: "El Sitio puede incluir enlaces a recursos externos o contenidos de terceros. Dichos enlaces se facilitan únicamente para comodidad del Usuario; Nexia no controla ni garantiza la veracidad, utilidad o disponibilidad de los sitios enlazados y no asume responsabilidad alguna por su contenido."
    },
    privacy: {
      title: "6. Protección de datos y privacidad",
      content: "El tratamiento de datos personales se rige por la Política de Privacidad del Sitio. Al utilizar el Sitio usted consiente las prácticas descritas en dicha política en relación con la recogida y uso de sus datos."
    },
    cookies: {
      title: "7. Cookies y seguimiento",
      content: "Nuestro Sitio puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y personalizar contenidos. Consulte la Política de Cookies para más información y cómo desactivarlas."
    },
    userContent: {
      title: "8. Contenido aportado por usuarios",
      content: "En caso de que el Sitio permita a usuarios subir contenido, el usuario garantiza que posee los derechos necesarios sobre dicho contenido y concede a Nexia una licencia no exclusiva, mundial y sublicenciable para usar, reproducir y mostrar ese contenido en el Sitio."
    },
    disclaimer: {
      title: "9. Exención de responsabilidad",
      content: "El Sitio se proporciona \"tal cual\" y \"según disponibilidad\". Nexia no garantiza la ausencia de errores, la disponibilidad continua ni la idoneidad para un propósito concreto. En la máxima medida permitida por la ley, Nexia excluye cualquier responsabilidad por daños derivados del uso o imposibilidad de uso del Sitio."
    },
    security: {
      title: "10. Seguridad",
      content: "Aunque implementamos medidas razonables para proteger el Sitio y los datos de los usuarios, ningún sistema es totalmente seguro. Los usuarios deben adoptar prácticas seguras (contraseñas robustas, mantener sus sistemas actualizados) y notificar cualquier actividad sospechosa."
    },
    modifications: {
      title: "11. Modificaciones del servicio y de los términos",
      content: "Nexia se reserva el derecho a modificar, suspender o interrumpir el Sitio o cualquiera de sus características en cualquier momento. También podrá actualizar estos términos; las modificaciones serán efectivas desde su publicación en esta página. Se recomienda revisarlos con regularidad."
    },
    termination: {
      title: "12. Terminación",
      content: "Nexia podrá, cuando lo considere oportuno y sin previo aviso, denegar o retirar el acceso a este Sitio a aquellos usuarios que incumplan estos términos o cuyas conductas considere inapropiadas."
    },
    jurisdiction: {
      title: "13. Legislación aplicable y jurisdicción",
      content: "Estos términos se regirán e interpretarán conforme a las leyes aplicables en la jurisdicción donde Nexia tenga su sede. Para la resolución de cualquier conflicto derivado de estos términos, las partes se someten a los tribunales competentes que correspondan."
    },
    contact: {
      title: "14. Contacto y soporte",
      intro: "Para cualquier consulta relativa a estos términos o al Sitio, puede ponerse en contacto directamente con el autor a través del correo electrónico",
      discord: " o mediante Discord. Busque el usuario dxvv_7 en Discord o utilice el canal de contacto que aparezca en el sitio.",
      response: "Intentaremos responder a las consultas en un plazo razonable."
    },
    lastUpdate: "Última actualización: marzo de 2026."
  },
  apps: {
    files: "Archivos",
    bank: "Banco",
    calculator: "Calculadora",
    calendar: "Calendario",
    money: "Dinero",
    clock: "Reloj",
    contact: "Contacto",
    messages: "Mensajes",
    gallery: "Galeria",
    notes: "Notas",
    radio: "Radio",
    phone: "Teléfono",
    rewards: "Recompensas",
    security: "Seguridad",
    settings: "Ajustes",
    sim: "Sim",
    simpsons: "Simpsons"
  },
  devices: {
    phone: {
      appsTitle: "Aplicaciones disponibles",
      appsDescription1: "El dispositivo movil de Nexia cuenta con un conjunto de aplicaciones integradas que simulan las funciones esenciales de un telefono real. Entre ellas se incluyen calculadora, ToDo, notas, configuracion, clima, archivos, reloj y otras utilidades del sistema.",
      appsDescription2: "Cada una de estas aplicaciones es completamente funcional y permite al usuario interactuar de forma realista, ya sea gestionando tareas, creando notas, explorando archivos, consultar el reloj o ajustar la configuracion del dispositivo. Todo el entorno esta diseñado para ofrecer una experiencia coherente e intuitiva, similar al uso de un dispositivo movil fisico."
    },
    atm: {
      title: "ATM Inteligente",
      description1: "Este dispositivo permite autenticarte mediante tu tarjeta bancaria para acceder de forma segura a tu cuenta.",
      description2: "Una vez dentro, podrás enviar dinero de regreso al banco, transferir fondos a otros usuarios utilizando su número telefónico, y gestionar tus operaciones financieras de manera directa desde el dispositivo.",
      description3: "También tendrás acceso a la consulta de saldo tanto en tu cuenta bancaria como en el ATM, así como un historial detallado de todas las transacciones realizadas."
    }
  }
}

export default es