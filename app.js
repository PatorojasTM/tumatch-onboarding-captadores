/* ============================================================
   TuMatch · Onboarding CAPTADOR 2026 · v2
   10 módulos · 5 preguntas a rendir (banco rotativo de 20 por módulo)
   Prueba Final: 10 preguntas a rendir (banco rotativo de 50)
   Bloqueo: 5 errores acumulados = 10 min (en módulos y en prueba final)
   Alternativas con posición aleatorizada en cada render.
   Al equivocarse: mensaje simpático + correcta + por qué + por qué NO las demás.
   ============================================================ */

const WHATSAPP_NUMBER = "56934107448";
const WHATSAPP_MESSAGE = "Hola TuMatch, terminé el Onboarding Captador y quiero activar mi perfil para captar y recibir leads del Team Leader.";

const FRIENDLY_MISS = [
  "Tómate tu tiempo, evalúa bien las respuestas. Una decisión pensada vale más que diez apuradas.",
  "Respira y relee con calma. Este material lo vas a usar con clientes reales.",
  "Sin prisa. Cada error bien entendido suma más que una respuesta correcta al azar.",
  "Tranquilidad. Relee el enunciado, piensa cuál encaja con lo que haría TuMatch y vuelve.",
  "Todo captador top se equivocó varias veces aprendiendo. Ajusta y sigue.",
];

const commissionData = [
  { lado: "Arrendatario",  referido: "5%",  captador: "10%", note: "Referido + orden de visita (5% + 5%)" },
  { lado: "Arrendador",    referido: "25%", captador: "30%", note: "Referido + acuerdo de captación (25% + 5%)" },
  { lado: "Comprador",     referido: "25%", captador: "30%", note: "Desde enero 2026: referido sube de 5% a 25%. Captador = referido + acuerdo (25% + 5%)" },
  { lado: "Vendedor",      referido: "5%",  captador: "10%", note: "Referido + acuerdo de captación (5% + 5%)" }
];

const circlesData = [
  { type: "hot",  temp: "Caliente", title: "Familia, amigos íntimos", desc: "Confianza total. Con una llamada conversan, con una invitación se reúnen. Son el 80% de tus primeros 3 cierres.", kpi: "1 de 3", kpiLbl: "Cierre por conversación" },
  { type: "warm", temp: "Tibio",    title: "Conocidos · colegas · ex-clientes", desc: "Saben quién eres pero no saben que vendes propiedades. Requieren re-conexión genuina antes de la propuesta comercial.", kpi: "1 de 10", kpiLbl: "Cierre por conversación" },
  { type: "cold", temp: "Frío",     title: "Desconocidos · redes · portales", desc: "Sin relación previa. Requieren construir confianza con contenido, testimonios y seguimiento consistente 3–5 meses.", kpi: "1 de 40", kpiLbl: "Cierre por contacto" }
];

/* ============================================================
   BANCO DE PREGUNTAS POR MÓDULO · 20 preguntas por módulo
   Formato: { q, opts, correct, why, whyNot[] }
   whyNot[i] explica por qué esa opción está mal ('' si es la correcta)
   ============================================================ */
const quizBank = {
1: [
  { q:"El captador en TuMatch puede ganar hasta:", opts:["15% por lado","25% por lado","30% por lado (referido + acuerdo)","50% por lado"], correct:2, why:"El captador suma referido + 5% por acuerdo de captación. En arrendador/comprador eso da 30% del lado.", whyNot:["Subestima: omite el 5% adicional del acuerdo.","Solo el referido, falta sumar el 5% del acuerdo.","","Supera el máximo; el tope con gestión + TL es 60%."] },
  { q:"'Rentabilizar tus redes' significa:", opts:["Publicar más en Instagram","Monetizar contactos actuales con comisiones por referidos y captación","Solo cobrar suscripciones","Abrir una academia"], correct:1, why:"El programa convierte tu red en un flujo de comisiones formal y trazable.", whyNot:["Medio útil, no el objetivo.","","Modelo equivocado: no cobramos por suscripción al captador.","No es el propósito del captador."] },
  { q:"El diferencial del captador frente al referido es:", opts:["Nada","El captador además formaliza el acuerdo (propiedad) o la orden de visita (arrendatario)","Pagar más","Ser socio"], correct:1, why:"El captador agrega el 5% adicional por gestionar la formalización.", whyNot:["Hay diferencia clara: referido solo presenta.","","El captador no paga; recibe más por el extra.","Ser socio es otro rol contractual."] },
  { q:"El captador puede serlo sin ejecutar la gestión:", opts:["Falso, siempre debe gestionar","Verdadero, otros corredores pueden ejecutar y él cobra su parte","Solo si es socio","Solo arrendamientos"], correct:1, why:"Puede trabajar 'sentado en su escritorio'; el equipo del TL ejecuta.", whyNot:["Incorrecto: el captador puede delegar ejecución.","","Ser socio no es requisito.","Aplica a todos los lados, no solo arriendos."] },
  { q:"El enfoque principal del captador TuMatch:", opts:["Fotografía profesional","Traer y formalizar buenos clientes a la red","Mantención de propiedades","Marketing digital"], correct:1, why:"El rol es traer oportunidad y formalizarla; la gestión puede delegarse.", whyNot:["Es una herramienta, no el rol.","","No es parte del rol de captador.","Marketing es soporte, no rol principal."] },
  { q:"Puede postular al programa 'Rentabiliza tus Redes':", opts:["Solo corredores con título","Solo personas con capital","Cualquiera con una red activa de contactos","Solo ex-bancarios"], correct:2, why:"Es abierto: se capacita y formaliza a cualquiera que quiera rentabilizar su red.", whyNot:["No se exige título.","No se exige capital.","","No se exige industria previa."] },
  { q:"Beneficio clave de tener TL asignado:", opts:["El TL te refiere propiedades para que captes en su zona","Te paga sueldo fijo","Te da un auto","Te certifica solo"], correct:0, why:"El TL deriva leads de captación y coordina al equipo.", whyNot:["","No hay sueldo fijo; es modelo de comisión.","No hay beneficios físicos; es modelo digital.","La certificación es del programa, no del TL individual."] },
  { q:"Mejor forma de presentarte:", opts:["'Vendo casas'","'Trabajo con TuMatch Inmobiliario y ayudo a tu red a arrendar, comprar o vender'","'Soy free-lance'","'Busco comprador urgente'"], correct:1, why:"Presentarte asociado a la marca aumenta confianza y precisa el servicio.", whyNot:["Rol impreciso; no eres cerrador.","","Falta claridad del respaldo TuMatch.","Urgencia sin contexto espanta contactos."] },
  { q:"Meta inicial de todo captador nuevo:", opts:["Captar 10 propiedades en un mes","Cerrar 3 primeros casos desde círculo caliente en 60 días","Publicar 100 fotos","Hacer 1 llamada"], correct:1, why:"Prueba rápida con alta confianza = mejor primera experiencia.", whyNot:["Meta irreal para un novato.","","Publicar no es cerrar.","Una llamada es mínimo y no meta."] },
  { q:"Principal razón por la que un captador fracasa:", opts:["Tasas altas","Falta de constancia diaria y abandono tras los primeros 'no'","Mala suerte","Poca comisión"], correct:1, why:"El 70% abandona antes del mes 3; constancia diaria es el diferencial.", whyNot:["Variable externa, no causa principal.","","Excusa que no explica la realidad.","La comisión es competitiva, el problema es ejecución."] },
  { q:"Un captador que solo trae un referido (sin formalizar) cobra:", opts:["10%","30%","Solo la comisión de referido del lado (5% o 25%)","0%"], correct:2, why:"Sin orden de visita o acuerdo de captación, el 5% extra no se gatilla.", whyNot:["10% exige orden de visita/acuerdo formalizado.","30% exige acuerdo formal y firma.","","Sí cobra, solo el referido del lado."] },
  { q:"El captador puede actuar sobre arrendatario, arrendador, comprador o vendedor:", opts:["Solo sobre vendedor","Solo sobre arriendo","Sobre los cuatro lados, según sus contactos y capacidad de formalizar","Solo si es dueño"], correct:2, why:"Cada lado tiene su tabla; el captador elige según su red.", whyNot:["Incluye todos los lados.","Incluye venta y compra también.","","No se requiere ser dueño."] },
  { q:"La diferencia entre referidor externo y captador es:", opts:["Ninguna","El externo firma acuerdo de referido con TuMatch pero no formaliza captación","Externo gana más","Externo gana menos"], correct:1, why:"Los externos presentan, no formalizan el acuerdo con el cliente; no es captación.", whyNot:["Hay diferencia contractual y de porcentaje.","","Gana menos, no más: no accede al 5% del acuerdo.","No es una regla simple de 'menos': depende del lado."] },
  { q:"Si eres empleado full-time y quieres captar part-time:", opts:["Está prohibido","Es permitido y promovido: captas en tu tiempo libre","Debes renunciar a tu trabajo","Debes pagar membresía alta"], correct:1, why:"El modelo es flexible y compatible con otras ocupaciones.", whyNot:["No se prohíbe; se fomenta.","","Justo al revés: puedes compatibilizar.","No hay membresía costosa para captadores."] },
  { q:"El certificado del onboarding te acredita como:", opts:["Corredor de propiedades","Captador TuMatch certificado","Socio fundador","Gerente"], correct:1, why:"La certificación acredita dominio del onboarding captador y habilita el perfil.", whyNot:["Corredor exige estudios adicionales.","","Ser socio es un rol societario, no formativo.","No es una posición ejecutiva."] },
  { q:"Un captador que también quiere ejecutar debe:", opts:["No puede hacerlo","Capacitarse como corredor freelance y acumular roles (captador + gestor)","Ser familiar del TL","Tener 20 años de experiencia"], correct:1, why:"Los roles pueden acumularse si el corredor se capacita para ejecutar.", whyNot:["Sí puede; debe capacitarse.","","No hay requisitos familiares.","No exige tanta experiencia."] },
  { q:"Captar 'sentado en tu escritorio' implica:", opts:["Nunca salir","No necesitas ir a visitas, ni a notaría ni a coordinar ejecución si no quieres","Ser pasivo total","No responder WhatsApp"], correct:1, why:"El captador conecta + formaliza; la ejecución la toma el equipo.", whyNot:["Puedes salir si quieres; no es obligatorio.","","Pasividad total no gana: debes activar red.","Responder ágil es parte del rol."] },
  { q:"El captador es fundamental para TuMatch porque:", opts:["Firma contratos masivos","Alimenta el stock de propiedades que el equipo ejecuta","Es el que arma las fotos","Paga las cuentas"], correct:1, why:"Sin captación no hay stock ni negocio. La captación es el motor.", whyNot:["No se trata de firma masiva, sino de formalización puntual.","","No es rol del captador tomar fotos.","Orden financiero está fuera del rol."] },
  { q:"Tu mejor argumento con un contacto del círculo caliente:", opts:["Que ganas comisión","Que TuMatch te respalda y que tú mismo controlas el proceso","Que es urgente","Rebajas del mes"], correct:1, why:"La confianza + el respaldo de la marca abre la conversación.", whyNot:["Hablar de tu comisión enfría la conversación.","","Urgencia sin razón repele.","No vendemos con descuentos."] },
  { q:"Un captador ideal tiene:", opts:["Miedo a hablar","Red amplia y capacidad de escucha activa para detectar oportunidades","Solo capital","Título universitario obligatorio"], correct:1, why:"Red + escucha = detectar a quien va a arrendar/comprar/vender en corto plazo.", whyNot:["La comunicación abierta es imprescindible.","","Capital no es requisito.","Título tampoco es obligatorio."] },
],
2: [
  { q:"Comisión del captador arrendatario:", opts:["5%","10%","15%","25%"], correct:1, why:"Captador arrendatario = referido 5% + orden de visita 5% = 10%.", whyNot:["Solo el referido; falta orden de visita.","","No existe ese tramo en el esquema.","Esa es la del referido de arrendador/comprador."] },
  { q:"Comisión del captador arrendador:", opts:["10%","20%","30%","50%"], correct:2, why:"Captador arrendador = referido 25% + acuerdo 5% = 30%.", whyNot:["Esa es la del captador de arrendatario/vendedor.","No existe ese tramo.","","Supera el tope; 60% se llega con gestión + TL."] },
  { q:"Desde enero 2026, el referido de comprador es:", opts:["5%","10%","25%","50%"], correct:2, why:"Subió de 5% a 25% para equipararse al de arrendador.", whyNot:["Era el valor anterior; fue actualizado.","No existe ese tramo.","","Supera el tope del referido."] },
  { q:"El captador de vendedor recibe:", opts:["5%","10%","25%","30%"], correct:1, why:"Captador vendedor = referido 5% + acuerdo 5% = 10%.", whyNot:["Solo el referido; falta acuerdo.","","No aplica al lado vendedor.","Aplica al lado arrendador/comprador, no vendedor."] },
  { q:"Para que un referido genere comisión debe:", opts:["Ser familiar","Estar registrado formalmente antes del primer contacto con el corredor ejecutor","Dar propina","No firmar nada"], correct:1, why:"Registro previo en CRM o comunicación escrita es obligatorio.", whyNot:["No hay requisito de parentesco.","","Es absurdo; no aplica al proceso.","Sin formalización, no hay derecho."] },
  { q:"Los referidores externos pueden operar si:", opts:["Son informales","Suscriben previamente un acuerdo de referido con TuMatch","Cobran el doble","Están prohibidos"], correct:1, why:"Se les formaliza un acuerdo específico como externos.", whyNot:["No opera informalmente.","","No cobran el doble: tabla igual.","No están prohibidos."] },
  { q:"En un arriendo, el referido de arrendador y el de arrendatario:", opts:["Se suman","Son independientes: cada lado genera su propia comisión","Se anulan","Los paga uno solo"], correct:1, why:"Cada lado es un negocio separado con su tabla propia.", whyNot:["Son independientes, no acumulables entre sí.","","No se anulan; conviven.","Cada lado distribuye aparte."] },
  { q:"Corredor freelance sin TL gestionando un lado recibe:", opts:["5%","35%","60%","100%"], correct:1, why:"Sin TL, la gestión por lado es 35% (freelance).", whyNot:["Esa es la del referido.","","60% requiere TL asignado + roles acumulados.","No existe ese tramo."] },
  { q:"Con TL, captador + gestor del lado comprador puede llegar a:", opts:["30%","60% (30% captador + 30% gestión)","90%","100%"], correct:1, why:"Máximo distribuible con TL son 60%; TL toma 7,5% sobre eso.", whyNot:["Solo captador; falta gestión.","","No existe tramo 90%.","No existe tramo 100%."] },
  { q:"Las actualizaciones al esquema de comisiones:", opts:["Se aplican inmediatamente","Se comunican con al menos 30 días de anticipación","Se aplican retroactivamente","No se avisan"], correct:1, why:"El contrato exige 30 días mínimos de aviso previo.", whyNot:["Hay periodo de aviso.","","No afectan operaciones en curso.","Sí se notifican por contrato."] },
  { q:"Captador arrendador sin referidor externo:", opts:["No cobra captador","Cobra 30% si él mismo es el referidor y formaliza el acuerdo","Cobra solo 5%","Cobra 100%"], correct:1, why:"Puede acumular referido + acuerdo si los genera él; 25% + 5% = 30%.", whyNot:["Cobra si formaliza.","","El acuerdo añade 5% al referido propio.","Supera el máximo."] },
  { q:"El Team Leader percibe sobre la comisión del lado:", opts:["7,5% sobre la comisión del lado","25% sobre el precio","30% del lado","100% fijo"], correct:0, why:"El TL cobra 7,5% sobre la comisión del lado en que participa.", whyNot:["","% sobre precio no aplica.","Ese es el tope del corredor con TL, no del TL.","No hay montos fijos."] },
  { q:"Comisión del captador si tiene también rol de gestor con TL, lado arrendador:", opts:["30%","60% (30% captador + 30% gestión con TL)","90%","100%"], correct:1, why:"La acumulación captador + gestor con TL llega a 60% del lado (tope).", whyNot:["Solo captador; falta gestión.","","No existe tramo 90%.","No existe tramo 100%."] },
  { q:"La fecha de corte para aplicar la nueva tabla 2026:", opts:["1 de enero de 2026 (acuerdos o inicios formales posteriores a esa fecha)","31 de diciembre de 2025","Cualquier día","No hay corte"], correct:0, why:"Aplica a operaciones con acuerdo o inicio formal posterior al 1-ene-2026.", whyNot:["","Era el fin del año anterior; la nueva parte luego.","Debe haber fecha de corte clara.","Sí hay corte en el anexo."] },
  { q:"Si un captador actúa también como referidor externo en la misma operación:", opts:["No puede","No aplica: o es corredor o es externo, no ambos para la misma operación","Cobra doble","Cobra 75%"], correct:1, why:"Un mismo sujeto no puede ser referidor externo y corredor TuMatch simultáneamente en la misma operación.", whyNot:["Aclarado en el anexo.","","No se duplica la comisión por rol.","No existe ese tramo."] },
  { q:"TuMatch retiene, luego de pagar corredor(es) y TL:", opts:["Ninguna parte","El porcentaje restante según lado (60% arrendatario, 40% arrendador, ~35% venta)","100% siempre","Solo 5%"], correct:1, why:"Los ejemplos muestran esa repartición típica por lado.", whyNot:["Sí retiene; mantiene operación.","","Contradice la repartición por lado.","Es mucho más que eso."] },
  { q:"La comisión del captador se paga cuando:", opts:["Al firmar el acuerdo","Al cierre formal de la operación (firma de contrato/escritura)","Al año","Nunca"], correct:1, why:"Se paga contra cierre efectivo, que es cuando TuMatch factura al cliente.", whyNot:["El acuerdo habilita; no gatilla pago final.","","No hay demora anual.","Sí se paga cuando se cierra."] },
  { q:"Registro previo del referido debe hacerse:", opts:["Cuando quieras","Antes del primer contacto formal del cliente con el corredor ejecutor","A fin de año","No es obligatorio"], correct:1, why:"Timing determina derecho: previo al primer contacto.", whyNot:["Timing es clave.","","Tarde: pierde derecho.","Sin registro no hay derecho."] },
  { q:"El 5% adicional del 'acuerdo de captación' se gatilla cuando:", opts:["Nunca","El captador formaliza el acuerdo con el propietario (o la orden de visita con el arrendatario/comprador)","Hay tasación","Se paga IVA"], correct:1, why:"Es la formalización escrita la que acredita el rol de captador.", whyNot:["Sí se gatilla.","","La tasación es insumo técnico, no el gatillo.","IVA es tributario; no afecta el gatillo."] },
  { q:"Contrato base del captador certificado:", opts:["Contrato laboral","Contrato de Corredor Asociado + Anexo N°2 Referidos y Captación","Ninguno","Pacto verbal"], correct:1, why:"Se firma el Contrato de Corredor Asociado con el anexo N°2.", whyNot:["No es relación laboral; es asociado.","","Sin contrato no hay certificación ni derechos.","No se acepta pacto verbal."] },
],
3: [
  { q:"Tu círculo caliente son:", opts:["Tus seguidores en Instagram","Familia, amigos y personas con alta confianza contigo","Todos tus colegas del trabajo pasado","Los leads del CRM"], correct:1, why:"El caliente es confianza profunda donde una llamada gatilla reunión.", whyNot:["Son tibio/frío según relación real.","","Tibio: confianza profesional, no íntima.","Son leads que llegan externos, no tu red."] },
  { q:"Tasa de conversión típica del círculo caliente:", opts:["1%","5%","33% (1 de cada 3 conversaciones)","80%"], correct:2, why:"Por la alta confianza, 1 de cada 3 conversaciones genera oportunidad.", whyNot:["Demasiado bajo para caliente.","Es cifra de tibio.","","Sería irreal y dependiente del azar."] },
  { q:"El círculo tibio son personas que:", opts:["No te conocen","Te conocen pero no saben a qué te dedicas hoy","Son ex-parejas","Son de otro país"], correct:1, why:"Requieren reconectar antes de presentar servicio comercial.", whyNot:["Eso es frío.","","Categoría emocional, no de red.","País no define círculo."] },
  { q:"Peor error en círculo frío:", opts:["Contenido de valor","Mensaje genérico de venta directa","Testimonios","Contactos recurrentes"], correct:1, why:"El frío responde a valor y relación, nunca a pitch directo.", whyNot:["Es buena práctica.","","Testimonios suman.","Recurrencia bien hecha es útil."] },
  { q:"Buen primer paso con círculo tibio:", opts:["Pedir referidos inmediatamente","Conversación real sin agenda comercial, luego cuentas tu rol","Bloquearlos","Enviar promoción"], correct:1, why:"Reconectar genuino antes de vender respeta la relación y abre puerta.", whyNot:["Salta pasos; daña confianza.","","Pierde la relación.","Promociones masivas queman la lista."] },
  { q:"Constancia esperada con círculo frío para cerrar:", opts:["1 mensaje","3–5 meses de seguimiento consistente","1 año exacto","10 años"], correct:1, why:"Construir confianza toma trimestres, no días.", whyNot:["Muy poco para frío.","","Rígido; varía por caso.","Sobre-extensión innecesaria."] },
  { q:"Orden correcto para un captador nuevo:", opts:["Frío primero","Caliente → tibio → frío","Tibio → frío → caliente","Solo caliente"], correct:1, why:"Empezar donde hay confianza = primeros cierres rápidos.", whyNot:["Sin experiencia, el frío quema energía.","","Desordena la curva natural.","Dejas dinero en la mesa al ignorar tibio/frío después."] },
  { q:"Un WhatsApp masivo a tu red:", opts:["Es óptimo","Quema la lista; mejor 1-a-1 personalizado","Lo exige TuMatch","Es obligatorio"], correct:1, why:"Los masivos bajan conversión y dañan marca personal.", whyNot:["Justo al revés.","","No lo exige; al contrario.","No es obligatorio; perjudica si se hace."] },
  { q:"Al cerrar tu primer caso caliente:", opts:["Ocultarlo","Contarlo con permiso y transformarlo en testimonio","Bajarlo de redes","No hablar nunca"], correct:1, why:"Multiplica credibilidad con el círculo tibio.", whyNot:["Pierdes valor social.","","Bajarlo de redes no aplica en contexto.","Silenciarlo desperdicia el capital social ganado."] },
  { q:"Respuesta a '¿cuánto cobras?':", opts:["Dar el número y terminar","Explicar la comisión sobre arriendo/venta y qué servicio recibe","Evadir","Pedir datos bancarios"], correct:1, why:"Claridad + promesa de valor construye confianza profesional.", whyNot:["Falta contexto de valor.","","La evasión genera desconfianza.","Es impropio en ese momento."] },
  { q:"Un 'no' definitivo del círculo tibio se maneja:", opts:["Insistiendo","Agradeciendo y dejando puerta abierta para 3–6 meses después","Bloqueando","Con descuento"], correct:1, why:"El 'no' hoy no es el 'no' de mañana; la relación se protege.", whyNot:["Daña la relación.","","Cerrar puerta te resta opciones futuras.","Descuentos no aplican al modelo."] },
  { q:"Cuando una persona del caliente te pregunta por un amigo suyo:", opts:["Ignorarla","Tomar el dato, registrarlo como referido en CRM y agendar contacto","Hacer pitch al amigo directo","Esperar"], correct:1, why:"Registrar y gestionar con método protege tu derecho y da seguimiento.", whyNot:["Pierdes la oportunidad.","","Sin presentación, el contacto directo quema.","Esperar pierde el momentum."] },
  { q:"Contenido útil para alimentar al frío:", opts:["Solo precios","Datos de mercado + testimonios + casos reales + consejos prácticos","Memes ofensivos","Publicidad agresiva"], correct:1, why:"Mix de valor construye autoridad y confianza.", whyNot:["Pobre y transaccional.","","Daña marca personal.","Baja conversión y credibilidad."] },
  { q:"Tasa típica del círculo tibio cuando está bien trabajado:", opts:["1%","~10% (1 de 10)","80%","0,1%"], correct:1, why:"Benchmark captadores TuMatch: reconexión bien hecha convierte ~10%.", whyNot:["Sería frío, no tibio.","","Irreal.","Sería frío sin trabajar."] },
  { q:"Re-conexión genuina incluye:", opts:["Copy-paste","Recordar algo específico del pasado común antes de hablar de ti","Spam","Cadena de oración"], correct:1, why:"Detalle específico demuestra que te importa la persona, no la venta.", whyNot:["Se detecta al instante.","","Daña toda la red.","No profesional."] },
  { q:"Un buen guion de apertura con caliente es:", opts:["'Te vendo X'","'Te cuento que empecé a trabajar con TuMatch; ¿conoces a alguien pensando en arrendar/comprar/vender?'","'Dame tu cédula'","'Págame'"], correct:1, why:"Presenta el nuevo rol y hace pregunta abierta que activa red.", whyNot:["Transaccional.","","Invasivo.","Violento e impropio."] },
  { q:"El círculo frío se 'calienta' con:", opts:["Spam","Valor repetido + visibilidad + respuestas útiles por 3–5 meses","Promesas vacías","Regalos caros"], correct:1, why:"Construir autoridad percibida convierte desconocidos en clientes.", whyNot:["Pierde marca.","","Dañan al cerrar.","No sostenibles y poco efectivos."] },
  { q:"Una señal de que tu red caliente está activa:", opts:["No responden","Te reenvían oportunidades o te presentan personas nuevas","Te dejan de seguir","Te piden dinero"], correct:1, why:"Cuando la red te reenvía oportunidad, el rol está instalado.", whyNot:["Es señal de falla.","","Baja interés; ajustar comunicación.","No es señal de rol."] },
  { q:"Contactos que no responden se deben:", opts:["Borrar","Dejar en seguimiento largo con 1 touch trimestral","Llamar 10 veces al día","Demandar"], correct:1, why:"Un touch trimestral mantiene viva la opción sin invadir.", whyNot:["Pierdes oportunidad.","","Invasivo.","Irrisorio."] },
  { q:"El mejor ratio de mezcla inicial (mes 1):", opts:["100% frío","100% caliente","80% caliente + 20% tibio","100% tibio"], correct:2, why:"Primer mes se apuesta a confianza alta; tibio se abre en paralelo.", whyNot:["Frío puro quema energía inicial.","Abandonas tibio que luego cuesta reactivar.","","Tibio sin caliente te priva de los quick wins."] },
],
4: [
  { q:"Métrica diaria principal del captador:", opts:["Seguidores","N° de conversaciones significativas iniciadas","Fotos tomadas","Cafés tomados"], correct:1, why:"Conversaciones = oportunidades; lo demás no produce negocio.", whyNot:["Vanity metric.","","No generan negocio directo.","Social, no laboral."] },
  { q:"Rutina mínima recomendada:", opts:["1 hora al mes","30–60 min diarios de actividad de red + CRM","10 horas el lunes","Solo fines de semana"], correct:1, why:"Constancia diaria vence a sprints heroicos semanales.", whyNot:["Muy poco para un rol activo.","","Insostenible.","Pierde días hábiles."] },
  { q:"Tras 3 meses sin cierres:", opts:["Renunciar","Revisar hábitos con tu TL y ajustar foco","Bajarse la comisión","Enojarse con los leads"], correct:1, why:"Mes 3 es umbral típico: ajuste, no abandono.", whyNot:["Abandono prematuro.","","No aplica.","No es la causa."] },
  { q:"Bloquear tiempo de captación en la agenda:", opts:["Opcional","Clave: tiempo defendido diario protege actividad","Molesta","No existe"], correct:1, why:"Sin agenda, la captación queda siempre para mañana.", whyNot:["La constancia exige estructura.","","Prejuicio; bien gestionado es respetado.","Se crea y se defiende."] },
  { q:"Motivación principal de largo plazo:", opts:["Comisión única","Ingresos recurrentes + pertenencia a equipo TuMatch","Bono anual","Regalo navidad"], correct:1, why:"El modelo premia relación + consistencia, no ventas únicas.", whyNot:["Pobre si es lo único.","","No es el principal driver.","No corresponde al modelo."] },
  { q:"Cuando un contacto dice 'no' definitivo:", opts:["Insistir","Agradecer, puerta abierta y volver en 6 meses","Bloquear","Bajar comisión"], correct:1, why:"El 'no' de hoy no es el de mañana.", whyNot:["Daña relación.","","Cierra opción futura.","No aplica al modelo."] },
  { q:"Forma rápida de bajar motivación:", opts:["Leer","Compararte con otros captadores en vez de tu línea base","Dormir","Tomar agua"], correct:1, why:"Compararse frustra; tu benchmark eres tú hace 30 días.", whyNot:["Hábito útil.","","Indispensable.","Indispensable."] },
  { q:"La constancia se construye mejor con:", opts:["Grandes objetivos anuales","Rituales pequeños diarios (5 WhatsApp, 3 llamadas, 1 reunión)","Solo cuando hay ganas","Solo en año nuevo"], correct:1, why:"Rituales pequeños diarios superan metas gigantes sin ejecución.", whyNot:["Intimidantes sin plan.","","La motivación no es diaria; la rutina sí.","Falsa sensación de arranque."] },
  { q:"Compartir avances con otros captadores:", opts:["Debilita","Fortalece aprendizaje y accountability","Es obligatorio grabarlo","Es contraproducente"], correct:1, why:"El aprendizaje colectivo acelera curvas.", whyNot:["Falso; potencia.","","No se exige grabar.","Contradice evidencia del equipo."] },
  { q:"Buena meta inicial 30 días:", opts:["Captar 100 clientes","Agendar 10 reuniones reales + 2 acuerdos firmados","Vender 5 propiedades","Ganar $3M"], correct:1, why:"Foco en actividad y formalización, no cierre final.", whyNot:["Irreal.","","Difícil en mes 1.","No debe ser el foco inicial."] },
  { q:"El burnout típico del captador ocurre cuando:", opts:["Saca vacaciones","Trabaja 12+ horas sin rituales de recuperación","Toma agua","Duerme bien"], correct:1, why:"Falta de descanso mata constancia.", whyNot:["Es parte del cuidado.","","Hábito bueno.","Hábito bueno."] },
  { q:"Un buen tablero personal incluye:", opts:["Solo cierres","Conversaciones/día, reuniones/semana, acuerdos/mes, cierres/trimestre","Solo comisiones","Redes sociales"], correct:1, why:"Métricas encadenadas muestran dónde romper la cadena.", whyNot:["No refleja actividad.","","Consecuencia, no causa.","No refleja negocio."] },
  { q:"Celebrar micro-logros:", opts:["Es superficial","Refuerza hábitos y sostiene motivación","Solo si hay premio","Es perder tiempo"], correct:1, why:"Refuerzo positivo mantiene cadencia, psicológicamente comprobado.", whyNot:["Mirada estrecha.","","No depende de premio material.","Inversión pequeña con alto retorno."] },
  { q:"Ritual recomendado de lunes:", opts:["Nada","Revisar meta semanal + pipeline + 3 prioridades","Solo cafecito","Dormir hasta tarde"], correct:1, why:"Arranque claro define la semana.", whyNot:["Pierdes foco.","","Falta de plan.","Lo contrario a constancia."] },
  { q:"Cuando un mes es malo:", opts:["Culpar a la suerte","Auditar actividad real (no feelings) y ajustar con TL","Ignorarlo","Renunciar"], correct:1, why:"Datos revelan la causa; feelings, no.", whyNot:["Excusa no accionable.","","Sin aprender.","Prematuro."] },
  { q:"Dormir menos de 6 horas crónicamente:", opts:["Potencia","Deteriora decisiones y bajas conversión","No importa","Es señal de éxito"], correct:1, why:"Sueño impacta juicio y energía para conversar.", whyNot:["Miopía.","","Impacta directo.","Cultura tóxica."] },
  { q:"Una buena pregunta de accountability:", opts:["¿Estás bien?","¿Hiciste tus 10 conversaciones esta semana?","¿Cuánto ganaste?","¿Cuánto subiste?"], correct:1, why:"Preguntas concretas activan responsabilidad sobre actividad.", whyNot:["Abstracta.","","Solo resultado, no proceso.","No aplica al rol diario."] },
  { q:"La mentalidad correcta frente al 'no':", opts:["Tomárselo personal","Es información: ese contacto no está listo hoy","Rendirse","Rebajar precio"], correct:1, why:"Despersonalizar el no protege la motivación sostenida.", whyNot:["Destruye constancia.","","Condena al fracaso.","No aplica."] },
  { q:"Foco mensual en un captador serio:", opts:["1 métrica","3–5 métricas de actividad + 1 resultado","20 métricas","Ninguna"], correct:1, why:"Pocas métricas, bien elegidas, mueven el negocio.", whyNot:["Insuficiente.","","Ruido; paraliza.","Navegar ciego."] },
  { q:"Rol del TL en motivación:", opts:["Presionar","Coaching: escuchar, ajustar plan y celebrar logros","Criticar","Ignorar"], correct:1, why:"El TL es socio: aporta claridad sin imponer ansiedad.", whyNot:["Daña relación.","","No produce cambio.","Pierde el rol."] },
],
5: [
  { q:"TuMatch ofrece principalmente:", opts:["Solo arriendos","Corretaje integral: arriendo, compraventa, asesoría y herramientas digitales","Solo obra nueva","Préstamos"], correct:1, why:"Red integral con plataforma digital y herramientas propias.", whyNot:["Subestima el alcance.","","Obra nueva es un vertical, no único.","No damos préstamos."] },
  { q:"CRM oficial en:", opts:["tumatch.cl","tumatch-leads.vercel.app","Google Drive","Facebook"], correct:1, why:"tumatch-leads.vercel.app es el CRM oficial.", whyNot:["Landing, no CRM.","","Almacenamiento, no CRM.","Red social, no CRM."] },
  { q:"Herramientas a dominar:", opts:["Solo calculadora","Calculadora hipotecaria, tasación, rentabilidad y calculadora de comisión","Solo Excel","Solo fotos"], correct:1, why:"El set completo en /herramientas/ es parte del servicio.", whyNot:["Incompleto.","","No es oficial TuMatch.","Complemento, no el core."] },
  { q:"Ser fiel a la marca significa:", opts:["Prometer imposible","Ofrecer solo lo que TuMatch realmente entrega","Decir que cubrimos todo el país","Inventar servicios"], correct:1, why:"La credibilidad se daña con promesas fuera del core.", whyNot:["Destruye confianza.","","Impreciso hoy.","Cataliza reclamos."] },
  { q:"Rol del TL:", opts:["Vigilar","Referir propiedades, coordinar equipo y apoyar","Cobrar","Competir"], correct:1, why:"El TL es aliado: deriva y ejecuta con el equipo.", whyNot:["No es supervisor policial.","","No cobra por 'vigilar'.","Equipo gana si colabora, no si compite."] },
  { q:"Corredores freelance del equipo ejecutan:", opts:["Solo obra nueva","Las captaciones del equipo, incluyendo las que tú traes","Nada","Solo leads propios"], correct:1, why:"Así el captador puede cobrar sin ejecutar.", whyNot:["Excluye categorías.","","Contradice el modelo.","Restringir perjudica al equipo."] },
  { q:"Honorarios al cliente se informan:", opts:["Al final","Desde el primer contacto, siempre transparente","Ocultos","Tras firmar"], correct:1, why:"Transparencia desde el inicio evita fricción.", whyNot:["Tarde: genera desconfianza.","","Ilegal y poco ético.","Tarde."] },
  { q:"Acuerdos con clientes TuMatch siempre son:", opts:["Verbales","Por escrito, en plataforma o formato oficial","Solo WhatsApp","Sin papel"], correct:1, why:"Todo acuerdo debe quedar por escrito y trazable.", whyNot:["Sin prueba, sin derechos.","","Canal informal, no formato oficial.","Falta trazabilidad."] },
  { q:"Estándar de marca TuMatch:", opts:["Descuido","Profesionalismo visual, lenguaje y uso correcto de logos/colores","Marcas propias","Imitar competencia"], correct:1, why:"Coherencia de marca = diferencia competitiva.", whyNot:["Dañina.","","Confunde al cliente.","Ni original ni funcional."] },
  { q:"Si piden servicio fuera del core:", opts:["Mentir","Ser honesto, derivar a partner y mantener relación","Cobrar por intentarlo","Ignorar"], correct:1, why:"Honestidad construye confianza de largo plazo.", whyNot:["Destruye reputación.","","Abusivo.","Indiferencia aleja."] },
  { q:"Herramienta de rentabilidad aplica a:", opts:["Arrendador","Inversionista compra+renta","Cualquier lead","Ninguno"], correct:1, why:"Cap rate/plusvalía/payback se calcula para inversión residencial.", whyNot:["Aplica indirecto, no primario.","","No a todos (primera vivienda p.ej.).","Sí se usa."] },
  { q:"Herramienta de tasación es útil para:", opts:["Solo venta","Captación de vendedor y validación de precio para comprador","Solo financiera","Ninguno"], correct:1, why:"Sirve a ambos lados para anclar precio objetivamente.", whyNot:["Limitado.","","Es de mercado, no financiera.","Contradice el manual."] },
  { q:"La calculadora hipotecaria sirve:", opts:["Solo para bancos","Para mostrar dividendo y capacidad al comprador","Nada útil","Solo para AFP"], correct:1, why:"Anclaje claro al comprador en UF.", whyNot:["Herramienta pública.","","Contradice evidencia.","Nada que ver."] },
  { q:"Calculadora de comisión sirve:", opts:["Nada","Estimar cuánto vas a ganar con el caso antes de aceptarlo","Pagar al SII","Postear"], correct:1, why:"Permite decidir si el caso vale el tiempo.", whyNot:["Sí sirve.","","No tributario.","No funcional."] },
  { q:"Valores TuMatch con clientes:", opts:["Opacidad","Transparencia, profesionalismo y servicio","Presión","Distancia"], correct:1, why:"Esos valores se repiten en materiales oficiales.", whyNot:["Contrario al estándar.","","Daña cierre.","Daña cierre."] },
  { q:"Privacidad de datos personales:", opts:["Ignorar","Ley 19.628 debe respetarse: manejo con accesos restringidos","Publicar","Vender"], correct:1, why:"La ley chilena exige manejo responsable y trazable.", whyNot:["Ilegal.","","Grave.","Gravísimo."] },
  { q:"Cuando el cliente pide 'acuerdo simbólico verbal':", opts:["Aceptar","Explicar que TuMatch exige documento para proteger a ambos","Firmar servilleta","Grabarlo"], correct:1, why:"Un documento escrito es política y protección.", whyNot:["Riesgo para ambos.","","No válido.","Inseguro legalmente."] },
  { q:"Herramienta recomendada para inversionistas:", opts:["Calculadora hipotecaria + Rentabilidad + Tasación","Solo fotos","Nada","Excel casero"], correct:0, why:"Combinación estándar del playbook TuMatch.", whyNot:["","Emocional, no técnico.","Ciego.","Sin datos actualizados."] },
  { q:"CRM integra con:", opts:["Nada","Herramientas TuMatch + WhatsApp + portales","Solo email","Solo Facebook"], correct:1, why:"Integración nativa es ventaja diferencial.", whyNot:["Infrautilizado.","","Incompleto.","Muy limitado."] },
  { q:"Frente a cliente con expectativas irreales:", opts:["Callar","Realismo con datos; ofrecer plan alternativo","Prometer","Acusar"], correct:1, why:"Honestidad temprana evita frustración y renegociaciones.", whyNot:["Perjudica al cliente y al caso.","","Daña confianza al incumplir.","Impropio."] },
],
6: [
  { q:"URL oficial del embudo:", opts:["/leads","/embudo-captacion","/dashboard","/admin"], correct:1, why:"El embudo vive en tumatch-leads.vercel.app/embudo-captacion.", whyNot:["Otra sección.","","No existe esa ruta pública.","Acceso restringido."] },
  { q:"Primera acción al recibir lead:", opts:["Llamarlo sin datos","Cargarlo al CRM con tipo de negocio y origen","Imprimir ficha","Subirlo a Instagram"], correct:1, why:"Sin CRM, no hay trazabilidad ni derecho a comisión.", whyNot:["Desordenado y sin registro.","","Anticuado; no es el medio.","Violación de privacidad."] },
  { q:"Estados mínimos del embudo:", opts:["Solo 'abierto' y 'cerrado'","Lead → Contactado → Reunión → Acuerdo → Publicado → Cerrado","Solo ganados","Ninguno"], correct:1, why:"Cada etapa tiene acciones y plazos distintos.", whyNot:["Falta granularidad.","","No refleja el proceso.","Imposible operar sin estados."] },
  { q:"Si olvidas cargar el lead:", opts:["Nada","Puedes perder la comisión si otro lo registra primero","Se carga solo","Se paga igual"], correct:1, why:"Registro previo es condición de derecho.", whyNot:["Consecuencia real.","","No es automático.","No hay pago sin registro."] },
  { q:"Lead con docs completas:", opts:["No sirve","Se valida con perfil estrella y habilita captación arrendatario","Se elimina","Igual que otros"], correct:1, why:"La estrella es la marca visual del captador que completó docs.", whyNot:["Máximo valor.","","Contradice proceso.","Diferencia crítica."] },
  { q:"Quién ve el pipeline:", opts:["Todo Chile","Captador, TL y admins TuMatch","Nadie","Familia"], correct:1, why:"Privacidad + supervisión del TL.", whyNot:["Violación de privacidad.","","Pierde supervisión.","Rompe confidencialidad."] },
  { q:"Lead frío (30+ días sin movimiento):", opts:["Descartar","Marcar 'seguimiento largo' y nutrir","Borrar","Vender"], correct:1, why:"Un lead frío bien nutrido puede reactivarse.", whyNot:["Dinero dejado.","","Contrario al proceso.","Ilegal."] },
  { q:"Notas en CRM:", opts:["Solo emojis","Documentar interacción con fecha y próximo paso","Secretas","Borrar"], correct:1, why:"Trazabilidad sostiene derechos y calidad.", whyNot:["Insuficiente.","","Contradice rol.","Pierde historial."] },
  { q:"Cliente pide privacidad absoluta:", opts:["No cargar","Cargar con acceso restringido respetando la política","Vender","Ignorar"], correct:1, why:"CRM maneja niveles de acceso para confidencialidad.", whyNot:["Pierde derecho.","","Ilegal.","No es opción."] },
  { q:"CRM se integra con:", opts:["Solo Excel","Herramientas TuMatch, WhatsApp y portales","Ninguna","Solo email"], correct:1, why:"Integración nativa.", whyNot:["Muy limitado.","","Falso.","Incompleto."] },
  { q:"Campos obligatorios al crear lead:", opts:["Solo nombre","Nombre, tipo de negocio, origen, zona y próximo paso","Solo teléfono","Cumpleaños"], correct:1, why:"Mínimo para priorizar y asignar.", whyNot:["Insuficiente.","","Falta tipo/zona.","Irrelevante."] },
  { q:"Reasignar un lead a otro corredor:", opts:["No es posible","Se hace con el TL para casos específicos (conflicto de agenda, zona)","Cualquiera lo hace","Se borra"], correct:1, why:"Con gobernanza del TL, evitando conflicto.", whyNot:["Sí es posible.","","Debe haber control.","Destruye historial."] },
  { q:"Etiquetar perfil 'Comprador Inversionista':", opts:["Decorativo","Activa InvestmentAnalysisCard y lenguaje correcto del CRM","Ilegal","Sin efecto"], correct:1, why:"El sistema adapta herramientas y prompts por segmento.", whyNot:["Funcional, no estético.","","Absurdo.","Tiene efectos prácticos."] },
  { q:"Seguimiento post-reunión:", opts:["Opcional","Registrar 24–48h post-reunión: conclusión + próximo paso","Al mes","Nunca"], correct:1, why:"Captar la conversación fresca evita pérdida de contexto.", whyNot:["Pierdes momentum.","","Tarde.","Ceguera total."] },
  { q:"Un lead duplicado:", opts:["Duplicar pago","Se fusiona manteniendo historial y asignando al registro previo","Se borra uno","Lo compramos"], correct:1, why:"Fusión protege la trazabilidad del primer registrador.", whyNot:["No corresponde.","","Pierde historial.","No aplica."] },
  { q:"Asignación por zona:", opts:["Aleatoria","Basada en TL territorial y capacidad","Por orden alfabético","Nunca se asigna"], correct:1, why:"Zona + TL optimiza ejecución local.", whyNot:["Injusto y subóptimo.","","No es criterio de negocio.","Imposible operar."] },
  { q:"Reporte mensual del captador:", opts:["Redes sociales","Actividad + pipeline + cierres + comisiones","Nada","Solo ingresos"], correct:1, why:"Visión completa para ajuste con TL.", whyNot:["No es reporte.","","Falta información.","Falta proceso."] },
  { q:"Adjuntos permitidos en CRM:", opts:["Ninguno","Documentos PDF, imágenes, contratos escaneados (cumpliendo privacidad)","Sólo JPG","Sólo TXT"], correct:1, why:"Formatos usuales para diligencia y traceability.", whyNot:["Bloquea operación.","","Muy limitado.","Insuficiente."] },
  { q:"Historial de interacciones se guarda:", opts:["A discreción","De forma sistemática y consultable por usuarios autorizados","Solo en papel","Se borra en 30 días"], correct:1, why:"Historial sistemático es columna del CRM.", whyNot:["Inconsistencia daña.","","No es canal oficial.","Violaría auditoría."] },
  { q:"El embudo de captación permite:", opts:["Solo ver leads","Ver flujo de captación + estado + tiempos + responsables","Gestionar pagos bancarios","Declarar impuestos"], correct:1, why:"Es tablero operativo del captador.", whyNot:["Función restringida.","","No es ese rol.","No corresponde."] },
],
7: [
  { q:"Acuerdo CON exclusividad implica:", opts:["TuMatch comparte","Solo TuMatch puede comercializar durante el plazo","El dueño vende solo","El corredor compra"], correct:1, why:"Concentra esfuerzo e inversión.", whyNot:["Contradice la figura.","","Permite conflicto.","No es esa figura."] },
  { q:"La exclusividad no es recomendable cuando:", opts:["Hay tiempo","Hay multicorretaje activo sin control (conflicto)","Precio ok","Buena foto"], correct:1, why:"Si hay muchos corredores en paralelo, conviene abierto y formalizar después.", whyNot:["No es criterio relevante.","","No afecta.","No afecta."] },
  { q:"Ventaja para el cliente con exclusividad:", opts:["Pagar más","Inversión real en marketing, tasación y difusión coordinada","Ninguna","Más corredores"], correct:1, why:"Justifica inversión del corredor.", whyNot:["No es ventaja.","","Contradice evidencia.","Conflicto, no valor."] },
  { q:"Ventaja para captador:", opts:["Menos trabajo","Mayor probabilidad + comisión asegurada al cerrar","Gratis","No existe"], correct:1, why:"Protege comisión y justifica inversión.", whyNot:["No es menos trabajo, es más foco.","","Falso.","Hay."] },
  { q:"Duración típica exclusividad:", opts:["1 semana","3–6 meses (ajustable)","10 años","Indefinido"], correct:1, why:"Plazo suficiente para comercializar; renovable.", whyNot:["Insuficiente.","","Abusivo.","No común."] },
  { q:"Sin exclusividad implica:", opts:["Nada","Paralelo con otros; se cobra solo si cierras primero","Paga más","No hay acuerdo"], correct:1, why:"Es opción válida para propietarios renuentes.", whyNot:["Hay acuerdo básico.","","Falso.","Hay acuerdo."] },
  { q:"Cliente indeciso con exclusividad:", opts:["Obligar","Ofrecer plazo corto (90 días) con opción de extender","No atender","Bajar comisión"], correct:1, why:"Reduce riesgo percibido.", whyNot:["Daña relación.","","Pierde oportunidad.","No aplica."] },
  { q:"Documento de captación incluye:", opts:["Solo precio","Precio, plazo, comisión, modalidad, deberes mutuos","Nada escrito","Solo foto"], correct:1, why:"Protege a ambas partes.", whyNot:["Insuficiente.","","Sin prueba.","Insuficiente."] },
  { q:"Si propietario vende por fuera en exclusividad:", opts:["Se pierde todo","Acuerdo contempla cláusula penal o compensación","Felicitaciones","Nada"], correct:1, why:"Las cláusulas penales protegen inversión.", whyNot:["No se pierde; hay derecho.","","Es incumplimiento.","Contradice contrato."] },
  { q:"Al firmar captación debes:", opts:["Guardarlo en celular","Subirlo al CRM y actualizar estado","Esconderlo","Subirlo a redes"], correct:1, why:"Sin CRM, no se gatilla el 5% adicional.", whyNot:["Insuficiente.","","Pierde registro.","Viola confidencialidad."] },
  { q:"Extensión de plazo exclusividad:", opts:["Automática","Opcional por escrito si hay desempeño acordado","Obligatoria","No existe"], correct:1, why:"Extensiones se pactan según resultados y tiempo restante.", whyNot:["No es automática.","","No es obligatoria.","Es común."] },
  { q:"Cláusula de salida anticipada:", opts:["No existe","Debe estar clara: causales y condiciones de término","Oculta","Obligatoria 100%"], correct:1, why:"Transparencia protege a ambos.", whyNot:["Sí existe.","","Debe ser clara.","Puede pactarse flexible."] },
  { q:"Marketing en no-exclusivo:", opts:["Igual","Menor inversión, solo portales básicos","Más","No hay"], correct:1, why:"Se ajusta al menor compromiso.", whyNot:["No es igual.","","No corresponde.","Hay marketing básico."] },
  { q:"Subir acuerdo al CRM:", opts:["Opcional","Obligatorio para trazabilidad y comisión del 5%","Por correo","Por WhatsApp"], correct:1, why:"Sin CRM, no se gatilla el acuerdo formal.", whyNot:["Es obligatorio.","","Insuficiente.","Insuficiente."] },
  { q:"Multicorretaje 'regulado' =", opts:["Ilegal","Acuerdo sin exclusividad con reglas claras de atribución","Obligatorio","Sin reglas"], correct:1, why:"Es la vía controlada para entrar a propiedades compartidas.", whyNot:["No es ilegal.","","Opción, no obligación.","Sin reglas = caos."] },
  { q:"Precio del acuerdo con exclusividad se fija:", opts:["A ojo","Con tasación profesional (precio probable) + margen 5–10%","Al doble","Sin base"], correct:1, why:"El número se defiende con datos.", whyNot:["Inseguro.","","Fuera de mercado.","Sin defensa técnica."] },
  { q:"Si hay ofertas bajas repetidas:", opts:["Ignorar","Revisar precio, strategy y comunicación con el propietario","Subir precio","Despedir cliente"], correct:1, why:"Señal del mercado; re-calibrar.", whyNot:["Ceguera.","","Contraproducente.","No aplica."] },
  { q:"Cláusula de honorarios:", opts:["Implícita","Debe estar explícita en el acuerdo con % y caso de cobro","Depende","Se dice verbal"], correct:1, why:"Explícito evita disputa.", whyNot:["Ambigua → reclamo.","","Ambigua.","Sin valor probatorio."] },
  { q:"Exclusividad con cláusula resolutoria:", opts:["No existe","Permitida si no se alcanzan hitos (visitas, ofertas) en plazo","Obligatoria","Sin efecto"], correct:1, why:"Da salida técnica si hay bajo desempeño.", whyNot:["Sí existe.","","Opcional.","Tiene efecto legal."] },
  { q:"Quién firma el acuerdo de captación:", opts:["Nadie","Propietario/arrendador (o arrendatario/comprador según caso) y corredor","TuMatch SpA siempre","Un testigo"], correct:1, why:"Partes principales del contrato.", whyNot:["Sin firma, sin derechos.","","No siempre; depende del formato.","Testigo no sustituye parte."] },
],
8: [
  { q:"Captar 'en precio' significa:", opts:["Precio alto","Precio alineado con el mercado para vender en plazo razonable","Bajar 20%","Regalarla"], correct:1, why:"Precio sobre-mercado quema tiempo y relación.", whyNot:["Quema oportunidad.","","Descuento arbitrario.","No aplica."] },
  { q:"Herramienta de tasación está en:", opts:["/contacto","/herramientas/tasacion","/admin","/blog"], correct:1, why:"Ruta oficial en tumatch-leads.vercel.app.", whyNot:["Otra sección.","","Ruta restringida.","No aplica."] },
  { q:"Precio sobre-mercado genera:", opts:["Venta rápida","Largos plazos sin ofertas y desgaste","Mejor comisión","Nada"], correct:1, why:"Mercado calibra; silencio es la señal.", whyNot:["Al revés.","","Si no cierra, 0.","Hay efecto real."] },
  { q:"Al presentar tasación:", opts:["Solo el número","Metodología: comparables, UF/m², rangos","Inventar","No justificar"], correct:1, why:"Datos convierten opinión en hecho.", whyNot:["Sin base = débil.","","Fraude.","Pierdes credibilidad."] },
  { q:"Cliente insiste +20% sobre tasación:", opts:["Firmar igual","Dejar por escrito la recomendación y el riesgo, plazo corto o rechazar","Mentir","Pelear"], correct:1, why:"Documentar protege reputación del corredor.", whyNot:["Quemas tiempo sin cobertura.","","Ético inaceptable.","Pierdes al cliente."] },
  { q:"Tasación se combina con:", opts:["Nada","Calculadora hipotecaria y análisis de rentabilidad","Solo fotos","Solo redes"], correct:1, why:"Trío da diagnóstico completo.", whyNot:["Ciegos.","","Estético, no técnico.","No es diagnóstico."] },
  { q:"Principal error captación arrendador:", opts:["Cobrar poco","Aceptar canon sobre-mercado que deja vacía la propiedad","No saludar","Llegar tarde"], correct:1, why:"Vacancia prolongada daña más que un UF menos de canon.", whyNot:["Menor impacto.","","No es técnico.","Protocolo aparte."] },
  { q:"Pedido vs probable:", opts:["Iguales","Pedido suele estar 5–10% sobre el probable","Pedido menor","Da lo mismo"], correct:1, why:"Margen razonable para negociar.", whyNot:["No lo son.","","No típico.","Afecta comercialización."] },
  { q:"Dato crítico al captar:", opts:["El color","UF/m² del sector últimos 6 meses","La edad del dueño","El vecino"], correct:1, why:"Ancla objetiva de precio.", whyNot:["Cosmético.","","Irrelevante.","Irrelevante."] },
  { q:"Cuándo usar la herramienta:", opts:["Nunca","Antes de firmar acuerdo con el cliente","Al final","Anualmente"], correct:1, why:"Alinear expectativas antes del compromiso.", whyNot:["Incumple estándar.","","Tarde.","Innecesario."] },
  { q:"Un comparable es útil si:", opts:["Tiene 10 años","Es reciente (≤6 meses), mismo sector y tipología similar","Es en otra ciudad","Muy lejos"], correct:1, why:"Cercanía temporal y física.", whyNot:["Obsoleto.","","Irrelevante.","Irrelevante."] },
  { q:"Orientación (norte, oriente, etc.):", opts:["No afecta","Puede impactar valor +/−5%","Solo en casas","Solo sur"], correct:1, why:"Variable clásica del mercado residencial.", whyNot:["Afecta.","","También en deptos.","No solo al sur."] },
  { q:"Piso alto en edificio:", opts:["No afecta","En general suma valor (vista, luz)","Baja valor","No existe"], correct:1, why:"Regla general aceptada en estudios de mercado.", whyNot:["Afecta.","","Al revés.","Irrisorio."] },
  { q:"Condición de la propiedad:", opts:["Irrelevante","Impacta tasación (remodelada, estándar, a refaccionar)","Solo en venta","Solo arriendo"], correct:1, why:"Es variable clave en el análisis.", whyNot:["Clave.","","Aplica a ambos.","Aplica a ambos."] },
  { q:"Si el sector tiene poco stock reciente:", opts:["Inventar comparables","Ampliar radio geográfico y ajustar por ubicación","Abandonar","Poner precio 0"], correct:1, why:"Metodología estándar cuando escasean comparables.", whyNot:["Fraude.","","Pierdes el caso.","Irrisorio."] },
  { q:"Benchmarks públicos útiles:", opts:["Ninguno","Portales (Portalinmobiliario, Yapo), INE, informes inmobiliarios","WhatsApp","Horóscopo"], correct:1, why:"Triangular con fuentes públicas da base defendible.", whyNot:["Hay datos.","","No es fuente.","Broma."] },
  { q:"Precio de arriendo vs cap rate:", opts:["Independientes","Relacionados: cap rate bruto = canon anual / valor","Inventados","Iguales"], correct:1, why:"Cap rate ancla la razonabilidad del canon.", whyNot:["No lo son.","","Metodología clara.","Distintos conceptos."] },
  { q:"Captar con canon UF vs pesos:", opts:["Igual","UF protege al arrendador frente a inflación","Pesos mejor","Ninguno"], correct:1, why:"UF ajusta al IPC.", whyNot:["Hay diferencia.","","Al revés.","Hay opción."] },
  { q:"Si el cliente no acepta tasación:", opts:["Firmar","Documentar recomendación y aceptar plazo corto con riesgo claro","Cancelar abrupto","Presionar"], correct:1, why:"Manejo con dignidad y técnica.", whyNot:["Sin cobertura.","","Daña relación.","Impropio."] },
  { q:"Tasación bancaria vs tasación comercial:", opts:["Iguales","Distintas: bancaria para crédito (conservadora), comercial para mercado","Ilegal","No existe bancaria"], correct:1, why:"Cumplen roles distintos y pueden diferir.", whyNot:["No lo son.","","Ambas legales.","Sí existe."] },
],
9: [
  { q:"Captación arrendatario COMPLETADA requiere:", opts:["Solo datos básicos","Entregar el lead con documentación cargada + validación con perfil estrella","Una foto","Solo su RUT"], correct:1, why:"Sin docs, no activa estrella y no gatilla el 10%.", whyNot:["Insuficiente.","","No es prueba documental.","Insuficiente."] },
  { q:"Docs mínimos del arrendatario:", opts:["Solo nombre","Cédula, 3 liquidaciones o renta acreditable, AFP, Dicom/score","Solo AFP","Solo carnet"], correct:1, why:"Set mínimo para filtro de riesgo.", whyNot:["Insuficiente.","","Incompleto.","Incompleto."] },
  { q:"Perfil estrella valida:", opts:["Al corredor","Que el lead cumplió documentación completa","Nada","Estético"], correct:1, why:"Marca visual del captador que cumplió la tarea.", whyNot:["No califica al corredor.","","Tiene efecto.","Es funcional."] },
  { q:"Sin perfil estrella el 5% adicional:", opts:["Se paga","No se gatilla: el caso cuenta como referido (5%)","Se duplica","Va a familia"], correct:1, why:"5% extra exige evidencia documental.", whyNot:["No corresponde.","","No se duplica.","Impropio."] },
  { q:"Si el cliente tarda con docs:", opts:["Cerrar lead","Agendar recordatorios automáticos y acompañar","Pelear","Abandonar"], correct:1, why:"Acompañamiento cierra el expediente.", whyNot:["Prematuro.","","Daña relación.","Prematuro."] },
  { q:"Candidato con Dicom:", opts:["Siempre se acepta","Evaluar con aval calificado o garantía adicional","Se paga doble","Bloqueo automático"], correct:1, why:"No descarte automático; mitigar riesgo.", whyNot:["Riesgoso sin cobertura.","","No corresponde.","Ley exige evaluación individual."] },
  { q:"Orden de visita del arrendatario es:", opts:["Contrato","Compromiso formal del arrendatario con el corredor que lo acompaña","Nada","Saludo"], correct:1, why:"Gatilla el 5% extra de captador.", whyNot:["No es contrato.","","Es documento formal.","Frívolo."] },
  { q:"Datos sensibles (cédula, liquidaciones):", opts:["Libres","Cargar al CRM con accesos restringidos según ley 19.628","Venderse","Perder"], correct:1, why:"Trato responsable y trazable.", whyNot:["Ilegal.","","Ilegal.","Negligente."] },
  { q:"Presentar arrendatario al arrendador:", opts:["Solo nombre","Carpeta digital con docs validadas, score y recomendación","Nada","Un emoji"], correct:1, why:"Presentación profesional acelera aprobación.", whyNot:["Insuficiente.","","Insuficiente.","Impropio."] },
  { q:"Arrendatario se arrepiente tras firmar orden:", opts:["Nada pasa","Queda registrado en CRM y se evalúa según política","Se borra","Se cobra doble"], correct:1, why:"Trazabilidad + protocolo.", whyNot:["Sí tiene consecuencia.","","Pierde historial.","Impropio."] },
  { q:"Renta líquida mínima razonable:", opts:["1×","3× el canon mensual","0,5×","100×"], correct:1, why:"Regla estándar de mercado.", whyNot:["Riesgoso.","","Muy bajo.","Absurdo."] },
  { q:"Arrendatario independiente acredita renta con:", opts:["Nada","Boletas últimos 6 meses + F22 + estado de cuenta","Solo palabra","Pasaporte"], correct:1, why:"Conjunto estándar para calzar capacidad de pago.", whyNot:["No califica.","","Insuficiente.","No es ingreso."] },
  { q:"Pensionado acredita con:", opts:["Nada","Certificado IPS/AFP + cartola de pensión","Palabra","Foto"], correct:1, why:"Fuente verificable del ingreso.", whyNot:["No califica.","","Sin respaldo.","Impropio."] },
  { q:"Aval calificado es:", opts:["Cualquiera","Tercero solvente que responde solidariamente si el arrendatario no paga","Inútil","Obligatorio siempre"], correct:1, why:"Mitiga riesgo en perfiles marginales.", whyNot:["Debe calificar.","","Útil en ciertos casos.","No en todos los casos."] },
  { q:"Seguro de arriendo:", opts:["No existe","Alternativa ~UF 0,15/mes para cubrir mora y daños","Gratis","Caro siempre"], correct:1, why:"Costo típico; sustituye aval en ciertas pólizas.", whyNot:["Existe.","","Pago.","No siempre."] },
  { q:"Extranjero arrendatario:", opts:["Prohibido","Válido con RUT, cédula vigente, visa, y renta acreditable","Si es europeo","Ninguno"], correct:1, why:"Se evalúa igual, con docs locales.", whyNot:["No está prohibido.","","Sin criterio nacionalidad.","Incompleto."] },
  { q:"Referencia de arrendador anterior:", opts:["Inútil","Complemento valioso del expediente","Ilegal","Obligatoria"], correct:1, why:"Valida conducta de pago y cuidado.", whyNot:["Es útil.","","No es ilegal.","Recomendada, no obligatoria."] },
  { q:"Juicios de arrendamiento previos:", opts:["Sin señal","Bandera roja: evaluar con cautela","Obligatorio","Irrelevante"], correct:1, why:"Historial conflictivo aumenta riesgo.", whyNot:["Es señal.","","No es requisito.","Muy relevante."] },
  { q:"Cargar docs por canal oficial:", opts:["WhatsApp personal","CRM con accesos restringidos","Redes","Email corporativo"], correct:1, why:"Ley 19.628 y protocolo TuMatch.", whyNot:["Inseguro.","","Ilegal.","Acepta con cuidado, pero CRM es principal."] },
  { q:"Perfil estrella se pierde si:", opts:["Nunca","Falta un doc crítico o la orden de visita","Cliente lo pide","Aleatoriamente"], correct:1, why:"La estrella exige completitud.", whyNot:["Sí puede perderse.","","No es unilateral.","No es azaroso."] },
],
10: [
  { q:"¿Quién paga la comisión del Team Leader?", opts:["El captador, de su 30%","TuMatch, desde su propia tajada","El cliente, aparte","Los otros corredores"], correct:1, why:"La comisión del TL sale de la retención de TuMatch, no del captador. Tu 30% se mantiene intacto siempre.", whyNot:["Falso: el captador no pierde nada por tener TL.","","El cliente paga la comisión total de TuMatch, no al TL por separado.","No hay descuento al resto del equipo para pagar al TL."] },
  { q:"Con TL asignado, el captador:", opts:["Pierde parte de su 30%","Conserva íntegro su 30% y además gana un aliado que acelera cierres","Queda bloqueado","Gana menos"], correct:1, why:"El TL no resta al captador; suma velocidad de cierre y calidad de ejecución. Por eso el captador gana más seguido.", whyNot:["Mito común: el captador nunca pierde por tener TL.","","No hay bloqueo, hay coordinación.","Al contrario: más cierres = más ingresos."] },
  { q:"Rol principal del TL frente al captador:", opts:["Supervisarlo con dureza","Ser aliado: guiar zonas, coachear, revisar acuerdos y coordinar al equipo que ejecuta","Cobrarle","Competir por clientes"], correct:1, why:"TL es socio: aporta tiempo, conocimiento y apoyo para que tus captaciones cierren.", whyNot:["Contrario al modelo: el TL acompaña, no fiscaliza.","","Es TuMatch quien remunera al TL, no el captador.","No compiten: el TL gana cuando el captador gana."] },
  { q:"¿Por qué le conviene al TL tener captadores activos?", opts:["Porque los controla","Porque sus captaciones alimentan al equipo ejecutor del TL; todos ganan cuando cierran","Por caridad","Por obligación"], correct:1, why:"Cada captación que tú traes es una oportunidad de cierre para el equipo, y un cobro para él. Incentivos 100% alineados.", whyNot:["Modelo errado; no hay control jerárquico duro.","","Es negocio, no caridad.","No es obligación, es conveniencia mutua."] },
  { q:"Sin el equipo del TL, ¿qué pasaría con tu captación?", opts:["Cerraría sola","Quedaría publicada sin ejecutor y probablemente expiraría sin cierre","Se pagaría igual","La ejecuta TuMatch central"], correct:1, why:"Una captación sin alguien que la trabaje es una oportunidad perdida. El TL y su equipo hacen que tu esfuerzo se transforme en cobro.", whyNot:["Las propiedades no cierran solas.","","No hay cobro sin cierre efectivo.","TuMatch centraliza plataforma, no ejecuta todas las operaciones."] },
  { q:"Un buen TL te aporta, entre otras cosas:", opts:["Nada","Guía de dónde captar (zonas con rotación/precio alineado) + coaching + revisión de acuerdos","Un sueldo fijo","Vacaciones"], correct:1, why:"El TL te dirige hacia donde sí se cierra y te acompaña para profesionalizar tu trabajo.", whyNot:["Aporta mucho.","","No hay sueldos; modelo de comisión.","No es el beneficio laboral."] },
  { q:"La sinergia captador + TL + equipo significa:", opts:["Sumar rivalidades","Que mientras más captas, más trabaja el equipo, mejor conoces tu zona y más comisiones ganan todos","Repartir mejor","Nada especial"], correct:1, why:"La sinergia es un círculo virtuoso: tus captaciones alimentan al equipo, el equipo cierra, tú cobras, el TL gana y capitaliza todo el sistema.", whyNot:["Contrario a la sinergia.","","No se trata de repartos, sino de generación colectiva.","Es el corazón del modelo."] },
  { q:"Tu 30% de captador con TL asignado es:", opts:["25%","30% íntegro, siempre","22,5%","Depende del TL"], correct:1, why:"Tu comisión como captador (referido 25% + acuerdo 5%) no cambia con o sin TL.", whyNot:["Falso: no hay descuento.","","Falso.","No depende del TL; es contractual."] },
  { q:"¿Puede un captador trabajar sin TL?", opts:["No","Técnicamente sí, pero pierde al aliado que convierte captación en cierre rápido","Obligatoriamente sí","Solo en regiones"], correct:1, why:"Trabajar sin TL es posible pero menos eficiente: pierdes la capacidad ejecutora y el coaching.", whyNot:["Es posible, pero no óptimo.","","No es obligación.","No depende de la región."] },
  { q:"De captador a corredor freelance:", opts:["Imposible","Posible con capacitación en círculo frío y herramientas avanzadas, junto al apoyo del TL","Hay que irse","Pagar caro"], correct:1, why:"El onboarding es la puerta; el TL acompaña la transición si el captador quiere crecer.", whyNot:["Es una ruta real.","","No corresponde.","No hay barrera monetaria."] },
  { q:"Captador part-time:", opts:["No se acepta","Permitido y recomendado para empezar; el TL ejecuta en paralelo","Obliga full-time","Ilegal"], correct:1, why:"Modelo flexible; el TL + equipo mantienen el flujo mientras tú captas.", whyNot:["Se acepta.","","No obliga.","Totalmente legal."] },
  { q:"Tras aprobar el onboarding:", opts:["Nada","Contactar por WhatsApp para activar CRM, asignar TL y firmar Anexo N°2","Esperar 6 meses","Pagar matrícula"], correct:1, why:"El captador da el paso proactivo; TuMatch activa infraestructura y TL.", whyNot:["Hay siguiente paso activo.","","No hay espera larga.","No hay matrícula."] },
  { q:"Certificado activa:", opts:["Nada","Acceso al CRM + asignación de TL + capacitación continua","Auto","Solo un PDF"], correct:1, why:"La certificación habilita toda la infraestructura TuMatch.", whyNot:["Sí activa.","","No hay premios físicos.","Es mucho más que un PDF."] },
  { q:"Rol del captador en TuMatch:", opts:["Secundario","Estratégico: sin captación no hay stock ni negocio, y tu aliado TL lo sabe","Opcional","Administrativo"], correct:1, why:"La captación es materia prima del negocio; por eso el TL te da tiempo y apoyo real.", whyNot:["Valor central.","","No opcional.","No administrativo."] },
  { q:"Referidor externo no corredor:", opts:["Imposible","Firma acuerdo de referido externo con TuMatch y cobra su tramo","Acepta sin firmar","Nada aplica"], correct:1, why:"Externos participan con acuerdo formal previo.", whyNot:["Está permitido.","","Ilegal sin firma.","Tabla sí aplica."] },
  { q:"Un captador puede cambiar de TL:", opts:["Nunca","Sí, coordinándolo con TuMatch por razones justificadas (zona, estilo de trabajo)","Cuando quiera sin aviso","Cada semana"], correct:1, why:"Gobernanza + estabilidad operativa, pero con flexibilidad si hay razones reales.", whyNot:["Es posible.","","Rompe la operación del equipo.","Rompe la continuidad del negocio."] },
  { q:"Capacitaciones continuas:", opts:["No existen","TuMatch las ofrece regularmente; el TL te indica las prioritarias para tu perfil","Solo al inicio","Se pagan aparte"], correct:1, why:"Capacitación continua es parte del valor del programa y el TL te guía.", whyNot:["Existen.","","Son continuas.","Sin costo adicional."] },
  { q:"El TL revisa tus acuerdos antes de firmar:", opts:["Nunca","Sí, como coaching: mejora tu acuerdo y aumenta probabilidad de cierre","Solo si lo pides","Es una intrusión"], correct:1, why:"Control de calidad + coaching evita acuerdos mal armados que se caen después.", whyNot:["Es parte natural del rol de aliado.","","Por defecto te apoya.","No es intrusión, es apoyo profesional."] },
  { q:"Zona geográfica del captador:", opts:["Irrelevante","Se define junto al TL para que captes donde hay mayor rotación y cierres","Cualquiera","Solo Santiago"], correct:1, why:"Zona + TL optimizan calidad de captación y velocidad de cierre.", whyNot:["Muy relevante.","","Sin foco = energía perdida.","No solo Santiago; es nacional."] },
  { q:"WhatsApp oficial TuMatch para activar tu perfil:", opts:["Ninguno","+56 9 3410 7448","Cualquier número","Solo email"], correct:1, why:"Canal único oficial: soporte y activación.", whyNot:["Existe.","","Canal oficial definido.","Hay WhatsApp oficial activo."] },
]
};

/* ============================================================
   BANCO FINAL · 50 preguntas únicas · DIFICULTAD ALTA
   Escenarios, cálculos, decisiones, compliance y edge cases.
   Sin duplicados con los bancos por módulo.
   ============================================================ */
const finalBank = [
  /* 1-8 · CÁLCULOS DE COMISIÓN CON ESCENARIOS */
  { q:"Un captador arrendador firma exclusividad 90 días sin ejecutar él. Un corredor freelance del equipo del TL cierra el arriendo por $900.000/mes (comisión equivalente 1 mes). ¿Cuánto gana el captador?", opts:["$45.000","$270.000","$90.000","$315.000"], correct:1, why:"Captador arrendador = 30% del lado = 0,30 × $900.000 = $270.000.", whyNot:["Es sólo el referido 5%; no incluye el 5% del acuerdo.","","Corresponde al captador arrendatario (10%), lado distinto.","35% es gestión freelance sin TL, no rol de captador."] },
  { q:"Compraventa de UF 4.800. Una captadora trae al comprador (25%) y firma orden de visita (5%). Otro corredor del equipo ejecuta. Comisión total del lado comprador: UF 96 (2% del precio). ¿Cuánto le corresponde a la captadora?", opts:["UF 4,80","UF 19,20","UF 28,80","UF 33,60"], correct:2, why:"Captador comprador = 30% del lado. 30% de UF 96 = UF 28,80.", whyNot:["Es el 5% del acuerdo solamente.","Corresponde al 20%; ese tramo no existe.","","Supera el tope del captador puro."] },
  { q:"Arriendo $600.000/mes. Referidora externa (no corredora) trae al arrendador y firma acuerdo TuMatch. ¿Cuánto recibe la referidora externa?", opts:["$30.000 (5%)","$60.000 (10%)","$150.000 (25%)","$180.000 (30%)"], correct:2, why:"Una referidora externa con acuerdo de referido cobra el tramo de referido arrendador: 25%.", whyNot:["5% es el referido de arrendatario/vendedor.","10% es captador arrendatario, no aplica a arrendador.","","30% es captador formalizado; la externa sin rol de captador no accede."] },
  { q:"Operación vendedor, precio UF 5.000, comisión estándar 2% = UF 100. Un captador trae al vendedor y acompaña toda la gestión acumulando roles (sin TL). ¿Techo de ingreso del captador?", opts:["UF 5 (5%)","UF 10 (10%)","UF 35 (35% freelance)","UF 45 (10% captador + 35% gestión)"], correct:3, why:"Captador vendedor 10% + gestión freelance sin TL 35% = 45% del lado. 45% × UF 100 = UF 45.", whyNot:["Sólo referido.","Sólo captador sin ejecutar.","Sólo gestión sin captación.",""] },
  { q:"Una captadora comprador + ejecutora, con TL, cierra $200.000.000. Comisión total al cliente: 2% = $4.000.000. ¿Cuánto recibe ella en total?", opts:["$1.200.000 (30%)","$1.800.000 (no existe)","$2.400.000 (60% del lado)","$2.800.000 (70%)"], correct:2, why:"Captador 30% + gestor con TL 30% = 60% del lado = $2.400.000.", whyNot:["Solo el rol captador; falta gestión.","Tramo inexistente.","","Excede el máximo distribuible con TL."] },
  { q:"En el escenario anterior, ¿cuánto recibe el TL sobre ese lado?", opts:["$0","$180.000","$300.000","$600.000"], correct:1, why:"TL = 7,5% × comisión del corredor 60% = 4,5% del lado. 4,5% × $4.000.000 = $180.000. Lo paga TuMatch, no el corredor.", whyNot:["El TL sí cobra y su ingreso sale de TuMatch.","","Es 7,5% sobre la comisión del lado, no del corredor.","Equivale a 15%, no existe."] },
  { q:"Misma operación anterior ($4.000.000 del lado comprador): ¿cuánto retiene TuMatch?", opts:["40%","35,5%","30%","25%"], correct:1, why:"Corredor 60% + TL 4,5% = 64,5%. TuMatch retiene 35,5% ($1.420.000).", whyNot:["40% es la retención sin TL.","","30% no alcanza para cubrir los pagos anteriores.","Mucho menor al residual real."] },
  { q:"Un captador arrendador trabaja sin TL y también ejecuta la gestión. Arriendo $1.200.000 (comisión equivalente 1 mes). ¿Cuánto gana en total?", opts:["$60.000 (solo 5%)","$360.000 (solo captador 30%)","$420.000 (solo gestión 35%)","$780.000 (captador 30% + gestión freelance 35%)"], correct:3, why:"Captador 30% + gestión freelance sin TL 35% = 65% del lado. $1.200.000 × 65% = $780.000.", whyNot:["Solo referido; omite acuerdo y ejecución.","Omite la gestión.","Omite el rol de captador.",""] },

  /* 9-15 · ACUERDOS Y EXCLUSIVIDAD */
  { q:"Cliente arrendador te pide acuerdo pero ya tiene 3 corredores en paralelo. ¿Qué es lo más profesional?", opts:["Pedir exclusividad inmediata","Firmar multicorretaje regulado 30–60 días con reglas claras de atribución","Rechazar el cliente","Trabajarlo sin acuerdo"], correct:1, why:"Entrar abierto con reglas claras permite demostrar servicio; escalar a exclusividad si hay desempeño.", whyNot:["Imponer exclusividad rompe la relación.","","Perder oportunidad.","Sin acuerdo no hay derecho a comisión."] },
  { q:"En un acuerdo con exclusividad, el dueño vende directamente por fuera a una semana de vencer el plazo. ¿Qué aplica?", opts:["Nada","Cláusula penal o compensación proporcional pactada","Se anula todo","Doble comisión"], correct:1, why:"La exclusividad debe incluir cláusula penal que protege la inversión del corredor.", whyNot:["Hay derecho a compensar.","","No se anula; el incumplimiento da derecho.","No existe esa figura."] },
  { q:"Precio probable de venta UF 4.500. ¿Precio pedido razonable para comercializar?", opts:["UF 4.500 exacto","UF 4.750–4.950 (5–10% margen)","UF 5.600 (25% sobre)","UF 4.000 (bajo mercado)"], correct:1, why:"Margen 5–10% sobre el probable permite negociar sin quemar la comercialización.", whyNot:["Sin margen de negociación.","","Fuera de mercado; no se mueve.","Regalar valor del dueño."] },
  { q:"Exclusividad 90 días. Al día 60 no hay una sola visita real. ¿Mejor práctica?", opts:["Esperar que se cumpla","Revisar precio, fotos, portal y comunicación con el propietario","Culpar al dueño","Terminar inmediatamente"], correct:1, why:"El silencio es señal del mercado; se recalibra antes de perder el plazo.", whyNot:["Ceguera activa.","","Improductivo, daña relación.","Prematuro sin diagnosticar."] },
  { q:"Una extensión de exclusividad debe:", opts:["Ser automática","Pactarse por escrito con plazos y condiciones explícitas","Verbalizarse","No existir"], correct:1, why:"Cada extensión es un nuevo acuerdo; formal y trazable.", whyNot:["No es automática; se evalúa.","","Sin registro pierde validez.","Es una figura común y válida."] },
  { q:"Un acuerdo sin exclusividad implica que TuMatch:", opts:["No puede comercializar","Puede comercializar en paralelo con otros corredores, cobra sólo si cierra","Debe pagar al dueño","No cobra nunca"], correct:1, why:"El multicorretaje permite trabajar en paralelo; cobra quien cierra primero.", whyNot:["Sí puede trabajar.","","Relación al revés.","Cobra cuando cierra."] },
  { q:"Cláusula resolutoria en exclusividad se justifica cuando:", opts:["Al cliente le gusta","Se pactan hitos (número de visitas, ofertas) y no se cumplen","El corredor se aburre","El portal no funciona"], correct:1, why:"Da salida técnica medible si el desempeño no alcanza lo acordado.", whyNot:["No es criterio válido.","","No aplica.","Insuficiente como causal."] },

  /* 16-22 · CRM Y COMPLIANCE */
  { q:"Subes una liquidación de sueldo de un arrendatario al CRM. La persona te pregunta por WhatsApp si puedes compartirla con un amigo suyo. ¿Qué corresponde?", opts:["Enviarla sin problema","No compartirla; los datos personales tienen acceso restringido por Ley 19.628","Cobrar por enviarla","Subirla a portales"], correct:1, why:"La ley de datos personales exige manejo reservado y con autorización específica para cada uso.", whyNot:["Ilegal.","","Agrava la infracción.","Ilegal y nocivo."] },
  { q:"Detectas dos fichas del mismo lead cargadas por dos captadores distintos. ¿Acción correcta?", opts:["Borrar la más antigua","Fusionar en el CRM manteniendo historial y asignar al primer registrador previo al contacto formal","Quedarse con la tuya","Reportarlo como fraude"], correct:1, why:"La fusión protege la trazabilidad; el derecho a comisión va al registro previo.", whyNot:["Pérdida de historial y de registro primario.","","No respeta el criterio de prioridad.","Normalmente es duplicado, no fraude."] },
  { q:"Un lead pasó 45 días sin movimiento. ¿Mejor manejo?", opts:["Archivarlo","Marcar 'seguimiento largo' y ponerlo en nurture trimestral","Borrarlo","Llamarlo todos los días"], correct:1, why:"Nurture de largo plazo puede reactivar el lead sin invadir.", whyNot:["Oportunidad perdida.","","Pérdida de datos.","Quema el contacto."] },
  { q:"Un corredor te pide 'intercambiar' un lead porque vive cerca de la propiedad. ¿Cómo lo canalizas?", opts:["Acordarlo verbal","Coordinar con el TL reasignación formal documentando razón (conflicto de zona/agenda)","Rechazar siempre","Quedarse con él"], correct:1, why:"Reasignaciones formales con gobernanza del TL evitan conflictos futuros.", whyNot:["Sin trazabilidad, riesgo de disputa.","","Inflexible.","No es el criterio correcto."] },
  { q:"Una nota óptima en el CRM tras una reunión registra:", opts:["Una frase vaga","Fecha, conclusión, objeción detectada y próximo paso con plazo","Emojis","Nada si no hubo cierre"], correct:1, why:"Profundidad = trazabilidad y argumento para reabrir después.", whyNot:["Inútil.","","No es registro profesional.","Pierdes el aprendizaje del caso."] },
  { q:"Llega un lead externo (fuera de red) y llama al teléfono de TuMatch. ¿Qué pasa con la atribución?", opts:["Se pierde","Se asigna por política interna; un captador individual no puede reclamarlo a menos que lo registre previamente","Se reparte","Es del primer corredor que llame"], correct:1, why:"Sin registro previo del captador, el lead es del flujo central TuMatch.", whyNot:["Se gestiona siempre.","","No se reparte automáticamente.","No hay regla de 'primer que llama'."] },
  { q:"Un cliente te pide no cargar sus datos en 'ninguna plataforma'. ¿Qué corresponde?", opts:["No cargar y perder el registro","Explicar que el CRM es interno, con accesos restringidos por Ley 19.628, y cargarlo con nivel de privacidad acordado","Cargarlo sin decir","Cancelar el servicio"], correct:1, why:"El CRM maneja niveles de acceso; se puede respetar privacidad cumpliendo la ley.", whyNot:["Pierde derecho.","","Violación de confianza.","Rigidez innecesaria."] },

  /* 23-29 · CAPTACIÓN ARRENDATARIO (perfil estrella + edge cases) */
  { q:"Arrendatario con renta líquida $900.000 pide canon $350.000. Tiene Dicom por deuda consumo de $400.000 recién activada. ¿Cómo procedes?", opts:["Descartarlo","Evaluarlo con aval calificado o seguro de arriendo para mitigar el riesgo","Aceptarlo sin más","Exigir 12 meses de garantía"], correct:1, why:"Dicom no es descarte automático; se mitiga. La renta sí cumple 3× canon.", whyNot:["Descarte injusto; hay herramientas para mitigar.","","Sin respaldo, riesgo alto.","Impracticable comercialmente."] },
  { q:"Arrendatario independiente con boletas irregulares. ¿Qué documentos acreditan su renta?", opts:["Su palabra","Últimas 6 boletas + F22 + cartolas bancarias por 6 meses","Solo pasaporte","AFP únicamente"], correct:1, why:"El conjunto permite estimar renta promedio y estabilidad.", whyNot:["No válido.","","Sin respaldo de flujos.","Insuficiente para independientes."] },
  { q:"Arrendatario pensionado acredita ingreso con:", opts:["Una declaración jurada","Certificado IPS/AFP + cartola de la pensión mensual","Una selfie","Su edad"], correct:1, why:"Fuente verificable y continua.", whyNot:["No acredita monto.","","No acredita nada.","No es acreditación."] },
  { q:"Extranjero quiere arrendar, tiene visa temporaria vigente y contrato de trabajo en Chile. ¿Viable?", opts:["No, es extranjero","Sí, con cédula vigente, visa, contrato/rentas y aval calificado si se requiere","Solo si es europeo","Prohibido"], correct:1, why:"La nacionalidad no es criterio; se evalúa por documentación estándar.", whyNot:["Discriminatorio e ilegal.","","No criterio válido.","Falso."] },
  { q:"Tu captación tiene historial de juicio de arrendamiento previo hace 2 años. ¿Señal?", opts:["Irrelevante","Bandera roja que exige evaluación profunda + posiblemente aval calificado","Ignorarlo","Cobrar más"], correct:1, why:"Historial conflictivo aumenta riesgo; se mitiga o se descarta.", whyNot:["Muy relevante.","","Negligencia profesional.","No aplica."] },
  { q:"Una referencia de arrendador anterior imposible de contactar (número cambiado, no responde):", opts:["Validar igual","Reemplazarla con otra fuente verificable o marcar el riesgo en la ficha","Inventarla","Exigir aval obligatorio"], correct:1, why:"Documentar la imposibilidad protege al captador; se compensa con otra fuente.", whyNot:["Sin validación pierde sentido.","","Fraude.","Desproporcionado sin más contexto."] },
  { q:"Un arrendatario firma orden de visita y a los 3 días se arrepiente. ¿Tu derecho como captador?", opts:["Perdido","Queda registrado; se evalúa según política TuMatch (generalmente no gatilla 10% si no hay cierre)","Cobrar full","Demandarlo"], correct:1, why:"La comisión se paga contra cierre; la orden sola no basta si hay desistimiento temprano.", whyNot:["Dramático sin matiz.","","No se gatilla sin cierre.","Desproporcionado."] },

  /* 30-35 · PRECIO Y TASACIÓN */
  { q:"Un propietario insiste en precio 18% sobre el probable de venta. ¿Mejor estrategia?", opts:["Firmar exclusividad larga al precio pedido","Aceptar plazo corto (60d) con recomendación escrita de ajuste si no hay ofertas","Romper la relación","Bajarle al 10% sin hablarlo"], correct:1, why:"Plazo corto + documentación protege al corredor y fuerza realidad del mercado.", whyNot:["Quema tiempo y marca.","","Pierdes al cliente.","Traicionas el margen pactado."] },
  { q:"Para tasar, un comparable es útil si cumple:", opts:["Cualquier venta","Sector, tipología, metraje similar y cerrado ≤ 6 meses","Tiene 5 años","Misma región"], correct:1, why:"Cercanía temporal + geográfica + tipológica es condición de validez.", whyNot:["Sin criterio, ruido.","","Obsoleto.","Demasiado amplio."] },
  { q:"Departamento 1D1B orientación poniente piso 3 vs igual orientación norte piso 10, misma zona y tipología. Diferencia de valor estimada:", opts:["0%","2–8% favor norte y piso alto","30%+","Negativa"], correct:1, why:"Orientación y piso suman entre 2% y 8% en mercado residencial.", whyNot:["Hay impacto medible.","","Impacto real, no masivo.","Contrario a evidencia."] },
  { q:"En un sector con poco stock reciente (<3 comparables en 6 meses), ¿cómo tasar?", opts:["Renunciar","Ampliar radio + período y aplicar ajustes por ubicación y antigüedad","Copiar precio del portal","Usar el más caro"], correct:1, why:"Metodología estándar cuando escasean comparables directos.", whyNot:["Pierdes al cliente.","","Inflado, sin base técnica.","Sesgado."] },
  { q:"Arrendar en pesos vs UF en contrato:", opts:["Da lo mismo","UF protege al arrendador frente a inflación; pesos se erosiona con IPC","Pesos mejor","UF sólo para venta"], correct:1, why:"Contrato en UF ajusta automáticamente el canon al IPC.", whyNot:["Hay impacto acumulado.","","Al revés.","UF aplica a arriendo también."] },
  { q:"Tasación bancaria y tasación comercial:", opts:["Son iguales","Pueden diferir: la bancaria es conservadora para crédito, la comercial refleja precio de mercado","La bancaria es ilegal","No existen"], correct:1, why:"Cumplen roles distintos; normalmente la bancaria tiende a ser menor.", whyNot:["No lo son.","","Es legal y regulada.","Sí existen y conviven."] },

  /* 36-40 · TL Y SINERGIA */
  { q:"Un captador decide trabajar sin TL asignado. ¿Consecuencia más probable?", opts:["Cobra más","Sus captaciones quedan sin ejecutor y vencen sin cerrarse","No pasa nada","Sube su estatus"], correct:1, why:"Sin equipo ejecutor, la captación es stock sin tracción; la comisión no se materializa.", whyNot:["Pierde velocidad de cierre.","","Consecuencia real.","No hay correlación."] },
  { q:"¿Qué aporta el TL que cambia la economía del captador?", opts:["Sólo presión","Equipo que ejecuta, coaching para mejorar cierre y guía de zonas de alta rotación","Trámites legales","Membresía"], correct:1, why:"Traducción: más cierres × ticket mejor = captador cobra más seguido.", whyNot:["Contrario al rol.","","No es el rol.","No hay membresía."] },
  { q:"El TL te sugiere captar en otra zona a la que planeabas. ¿Qué haces?", opts:["Ignorarlo","Escuchar su razonamiento (rotación, precio alineado) y ajustar estrategia","Cambiar de TL","Reclamar"], correct:1, why:"La guía del TL optimiza calidad de captación y velocidad de cierre.", whyNot:["Desperdicia información.","","Rompe continuidad.","No es criterio razonable."] },
  { q:"Co-captación (dos captadores para un mismo acuerdo) es viable si:", opts:["Imposible","Se pacta por escrito la distribución con conocimiento del TL","Lo decide uno solo","Ilegal"], correct:1, why:"Con acuerdo explícito + gobernanza del TL se evita conflicto.", whyNot:["Posible.","","Sin acuerdo es conflicto.","Perfectamente legal."] },
  { q:"Un captador quiere crecer a corredor freelance full-time. ¿Ruta correcta?", opts:["Se certifica solo","Formación adicional (círculo frío, negociación, herramientas) acompañado por el TL","Debe irse de TuMatch","Necesita título universitario"], correct:1, why:"El onboarding habilita; la evolución se acompaña.", whyNot:["Insuficiente.","","Al contrario, hay camino interno.","No es requisito."] },

  /* 41-45 · PSICOLOGÍA, CÍRCULOS Y MOTIVACIÓN */
  { q:"Tu primer cierre del círculo caliente ocurre en el mes 1. ¿Uso correcto?", opts:["Callarlo","Con permiso, transformarlo en testimonio para activar el círculo tibio","Publicarlo sin permiso","Presumir en redes ajenas"], correct:1, why:"El testimonio del primer caso multiplica credibilidad sin exponer datos del cliente.", whyNot:["Pierdes capital social ganado.","","Viola privacidad.","Marca personal dañada."] },
  { q:"Contacto frío abandona el chat tras 2 mensajes. ¿Error más probable?", opts:["Mensaje genérico de venta directa","El formato PDF","La hora del mensaje","El color del logo"], correct:0, why:"El frío rechaza pitch transaccional; requiere valor antes que propuesta.", whyNot:["","Anecdótico.","Ruido.","Sin relación."] },
  { q:"Al mes 3, el captador nuevo típicamente enfrenta:", opts:["Abundancia de cierres","Meseta con dudas: 70% abandona aquí sin ajuste con el TL","Nada","Vacaciones forzadas"], correct:1, why:"Conocido como 'punto de fricción del mes 3': revisar hábitos, no abandonar.", whyNot:["Irreal tan temprano.","","Niega la realidad del proceso.","No aplica."] },
  { q:"Métrica diaria que predice cierres futuros:", opts:["Seguidores","Conversaciones significativas por día","Horas frente al CRM","Número de cafés con prospectos"], correct:1, why:"Conversaciones = entrada al embudo. Predice cierres 30–60 días adelante.", whyNot:["Vanity metric.","Tiempo no cierra.","","Anecdótico."] },
  { q:"Tasa de conversión esperada por círculo, en un captador rodado:", opts:["Todos iguales","Caliente ~33%, tibio ~10%, frío ~2,5% (aprox. 1 de 40 contactos)","Solo caliente convierte","Solo frío convierte"], correct:1, why:"Los benchmarks reflejan la confianza acumulada en cada capa.", whyNot:["Ignora la realidad.","","Subestima tibio y frío.","Contrario a datos."] },

  /* 46-50 · ÉTICA, CONTACTO Y MARCA */
  { q:"Cliente te pide una regularización municipal fuera del core. ¿Respuesta profesional?", opts:["Prometer hacerlo","Ser honesto, derivar a un profesional partner y mantener la relación","Cobrar por intentarlo","Ignorar"], correct:1, why:"Honestidad construye confianza de largo plazo más que prometer sin entregar.", whyNot:["Daña reputación.","","Abusivo.","Frío e indiferente."] },
  { q:"Envío masivo a 200 contactos de tu red con mensaje comercial:", opts:["Óptimo","Quema la lista; preferir 1-a-1 personalizado en base a contexto real","Lo exige TuMatch","Neutro"], correct:1, why:"Masivos bajan conversión, dañan marca personal y activan filtros.", whyNot:["Al revés.","","Contradice el protocolo.","Tiene impacto negativo comprobable."] },
  { q:"Una persona que no es corredora quiere referir a un amigo. Canal correcto:", opts:["Verbal","Suscribir acuerdo de referidor externo con TuMatch previo al primer contacto","Pagar en efectivo","Nada"], correct:1, why:"Sin acuerdo formal previo, no hay derecho a comisión de referido externo.", whyNot:["Sin prueba.","","No es el canal.","Pérdida del derecho."] },
  { q:"Documentos sensibles (cédula, F22, cartolas) se transmiten por:", opts:["WhatsApp personal","CRM con acceso restringido y cifrado","Email público","Redes sociales"], correct:1, why:"Ley 19.628 + estándar TuMatch: trazabilidad + restricción por defecto.", whyNot:["Canal inseguro.","","Riesgo alto.","Grave."] },
  { q:"Canal oficial de TuMatch para contacto y activación del captador certificado:", opts:["Email personal","WhatsApp +56 9 3410 7448 / corretaje@tumatchinmobiliario.cl","Chat en vivo de la web","Formulario de contacto general"], correct:1, why:"Son los canales únicos oficiales para soporte y activación de perfil.", whyNot:["No es oficial.","","No existe como canal oficial.","Es para consultas generales, no activación."] }
];

/* ============================================================
   APP CORE
   ============================================================ */
const App = (() => {
  const TOTAL_MODULES = 10;
  const STORAGE_KEY = 'tumatch_taller_captador_onboarding_v2';
  const QUESTIONS_PER_MODULE = 5;
  const FINAL_QUESTIONS = 10;
  const MAX_WRONGS = 5;
  const MAX_WRONGS_FINAL = 5;
  const LOCK_MINUTES = 10;

  const MODULE_NAMES = [
    'Inicio',
    'Sé Captador de TuMATCH',
    'Comisiones 2026 · Referido y Captador',
    'Círculos · Caliente, Tibio y Frío',
    'Motivación y Constancia',
    'Ecosistema y Servicios TuMatch',
    'CRM · Embudo de Captación',
    'Acuerdos · Con y Sin Exclusividad',
    'Captar en Precio · Tasación',
    'Captación de Arrendatario ★',
    'TL, Equipo y Rentabiliza tus Redes',
    'Prueba Final · 10 preguntas (banco 50)'
  ];

  const state = {
    current: 0,
    unlocked: 1,
    completedModules: [],
    finalPassed: false,
    locks: {},
    wrongCount: {},
    finalLockUntil: 0,
    finalWrongCount: 0,
  };

  function load() {
    try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) Object.assign(state, JSON.parse(raw)); } catch(e) {}
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
  }
  function shuffle(arr) {
    const a = [...arr];
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }
  function pickQuestions(pool, n) { return shuffle(pool).slice(0, n).map(shuffleOpts); }
  function shuffleOpts(q) {
    const ixs = shuffle(q.opts.map((_, i) => i));
    const newOpts = ixs.map(i => q.opts[i]);
    const newWhyNot = q.whyNot ? ixs.map(i => q.whyNot[i] || '') : null;
    const newCorrect = ixs.indexOf(q.correct);
    return Object.assign({}, q, { opts: newOpts, correct: newCorrect, whyNot: newWhyNot, __origCorrect: q.correct });
  }
  function randomMiss() { return FRIENDLY_MISS[Math.floor(Math.random() * FRIENDLY_MISS.length)]; }

  function show(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    const el = document.getElementById(moduleId);
    if (el) { el.classList.add('active'); window.scrollTo({top:0, behavior:'smooth'}); }
  }

  function goToModule(n) {
    if (n === 0) { show('mod-0'); state.current = 0; save(); renderNav(); updateProgress(); return; }
    if (n >= 1 && n <= TOTAL_MODULES) {
      if (n > state.unlocked) { showLockedWarning(n); return; }
      state.current = n; show('mod-' + n); mountModule(n);
      save(); renderNav(); updateProgress(); return;
    }
    if (n === 11) {
      if (state.unlocked < 11) { showLockedWarning(11); return; }
      state.current = 11; show('mod-final'); mountFinalTest();
      save(); renderNav(); updateProgress(); return;
    }
    if (n === 12) {
      state.current = 12; show('mod-done'); mountConclusion();
      save(); renderNav(); updateProgress();
    }
  }

  function showLockedWarning(n) {
    alert('Módulo bloqueado 🔒\n\nDebes completar los módulos anteriores para desbloquear "' + MODULE_NAMES[n] + '".');
  }
  function startModule(n) { goToModule(n); }

  function restart() {
    if (!confirm('¿Seguro que quieres reiniciar el onboarding desde cero? Perderás tu progreso.')) return;
    state.current = 0; state.unlocked = 1; state.completedModules = [];
    state.finalPassed = false; state.locks = {}; state.wrongCount = {};
    state.finalLockUntil = 0; state.finalWrongCount = 0;
    save(); goToModule(0);
  }

  function renderNav() {
    const nav = document.getElementById('modnavInner');
    if (!nav) return;
    const items = [
      {n:0, label:'Inicio'},
      ...Array.from({length:TOTAL_MODULES}, (_,i)=>({n:i+1, label:'M'+(i+1)})),
      {n:11, label:'Prueba Final'},
    ];
    nav.innerHTML = items.map(it => {
      let cls = 'modnav-btn';
      if (state.current === it.n) cls += ' active';
      if (it.n >= 1 && it.n <= TOTAL_MODULES) {
        if (state.completedModules.includes(it.n)) cls += ' done';
        else if (it.n > state.unlocked) cls += ' locked';
      }
      if (it.n === 11 && state.unlocked < 11) cls += ' locked';
      if (it.n === 11 && state.finalPassed) cls += ' done';
      return '<button class="' + cls + '" onclick="App.goToModule(' + it.n + ')"><span class="mod-n">' +
        (it.n===0?'':it.n===11?'★':('0'+it.n).slice(-2)) + '</span>' + it.label + '</button>';
    }).join('');
  }

  function updateProgress() {
    const TOTAL_Q = TOTAL_MODULES * QUESTIONS_PER_MODULE + FINAL_QUESTIONS;
    const moduleCorrect = state.completedModules.length * QUESTIONS_PER_MODULE;
    const finalCorrect = state.finalPassed ? FINAL_QUESTIONS : 0;
    let inProgressCorrect = 0;
    if (state.current >= 1 && state.current <= TOTAL_MODULES && !state.completedModules.includes(state.current)) {
      const qs = quizState[state.current];
      if (qs) inProgressCorrect = Math.min(qs.correct || 0, QUESTIONS_PER_MODULE);
    }
    const totalCorrect = moduleCorrect + finalCorrect + inProgressCorrect;
    const pct = Math.min(100, Math.round(totalCorrect / TOTAL_Q * 100));
    const fill = document.getElementById('progressFill');
    const num = document.getElementById('progressNum');
    if (fill) fill.style.width = pct + '%';
    if (num) num.textContent = pct + '%';
  }

  function mountModule(n) {
    if (n === 2) mountCommissionsGrid();
    if (n === 3) mountCirclesGrid();
    renderQuizGate(n);
  }

  function mountCommissionsGrid() {
    const el = document.getElementById('commissions-grid');
    if (!el || el.innerHTML.trim()) return;
    el.innerHTML = commissionData.map(c => (
      '<div class="commission-cell">' +
        '<div class="commission-lado">' + c.lado + '</div>' +
        '<div class="commission-captador">' + c.captador + '</div>' +
        '<div class="commission-referido">Referido ' + c.referido + '</div>' +
        '<div class="commission-note">' + c.note + '</div>' +
      '</div>'
    )).join('');
  }
  function mountCirclesGrid() {
    const el = document.getElementById('circles-grid');
    if (!el || el.innerHTML.trim()) return;
    el.innerHTML = circlesData.map(c => (
      '<div class="circle-card circle-' + c.type + '">' +
        '<div class="circle-temp">' + c.temp + '</div>' +
        '<h4>' + c.title + '</h4>' +
        '<p>' + c.desc + '</p>' +
        '<div class="circle-kpi">' + c.kpi + '<small>' + c.kpiLbl + '</small></div>' +
      '</div>'
    )).join('');
  }

  /* ---------- QUIZ GATE ---------- */
  const quizState = {};

  function isLocked(moduleN) {
    const until = state.locks[moduleN];
    return until && Date.now() < until;
  }
  function lockRemainingMs(moduleN) {
    return Math.max(0, (state.locks[moduleN] || 0) - Date.now());
  }

  function renderQuizGate(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    if (!container) return;
    if (state.completedModules.includes(moduleN)) { container.innerHTML = renderQuizDoneInlineHTML(moduleN); return; }
    if (isLocked(moduleN)) { renderLockedState(moduleN); return; }
    if (!quizState[moduleN]) {
      const pool = quizBank[moduleN];
      quizState[moduleN] = { current: pickQuestions(pool, QUESTIONS_PER_MODULE), index: 0, correct: 0, wrongs: 0, answered: false };
    }
    renderCurrentQuestion(moduleN);
  }

  function renderLockedState(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const remMs = lockRemainingMs(moduleN);
    const remMin = Math.ceil(remMs / 60000);
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">🔒</div>' +
        '<div class="quiz-locked-title">Módulo bloqueado temporalmente</div>' +
        '<div class="quiz-locked-desc">Acumulaste ' + MAX_WRONGS + ' errores. Respira, relee los contenidos y vuelve en <strong id="lock-timer-' + moduleN + '">' + remMin + ' min</strong>.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkLock(' + moduleN + ')">Reintentar ahora</button>' +
      '</div>';
    const id = 'lock-timer-' + moduleN;
    const tick = () => {
      const ms = lockRemainingMs(moduleN);
      const el = document.getElementById(id);
      if (!el) return;
      if (ms <= 0) { renderQuizGate(moduleN); return; }
      const s = Math.ceil(ms / 1000);
      const mm = Math.floor(s / 60);
      const ss = (s % 60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkLock(moduleN) {
    if (!isLocked(moduleN)) {
      state.wrongCount[moduleN] = 0;
      delete state.locks[moduleN];
      delete quizState[moduleN];
      save(); renderQuizGate(moduleN);
    } else {
      const ms = lockRemainingMs(moduleN);
      const mm = Math.floor(ms/60000);
      const ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('Aún bloqueado. Quedan ' + mm + ':' + ss + '.');
    }
  }

  function renderCurrentQuestion(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const qs = quizState[moduleN];
    const q = qs.current[qs.index];
    const mn = MODULE_NAMES[moduleN];
    const lifeLeft = Math.max(0, MAX_WRONGS - (state.wrongCount[moduleN] || 0));
    const dots = Array.from({length:QUESTIONS_PER_MODULE}, (_, i) => {
      let c = 'qp-dot'; if (i < qs.index) c += ' done'; else if (i === qs.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" onclick="App.answerQuestion(' + moduleN + ', ' + i + ')" data-i="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65+i) + '</span><span>' + opt + '</span>' +
      '</button>'
    )).join('');

    container.innerHTML =
      '<div class="quiz-gate-head">' +
        '<div class="quiz-icon">🎯</div>' +
        '<div><div class="quiz-title">Quiz: ' + mn + '</div>' +
        '<div class="quiz-sublabel">5 preguntas · banco rotativo de 20 · desbloquea el siguiente módulo</div></div>' +
      '</div>' +
      '<div class="quiz-sub">Responde correctamente las 5 preguntas para avanzar. Si fallas, la pregunta rota. <strong>Tras ' + MAX_WRONGS + ' errores acumulados se bloquea 10 minutos.</strong></div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress">' + dots + '</div>' +
        '<div class="quiz-progress-label">' + qs.correct + '/' + QUESTIONS_PER_MODULE + ' correctas</div>' +
        '<div class="quiz-life-label">Intentos · ' + lifeLeft + '/' + MAX_WRONGS + '</div>' +
      '</div>' +
      '<div class="quiz-q">' +
        '<div class="quiz-q-label">Pregunta ' + (qs.index + 1) + ' de ' + QUESTIONS_PER_MODULE + '</div>' +
        '<div class="quiz-q-text">' + q.q + '</div>' +
        '<div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-feedback" id="feedback-' + moduleN + '"></div>' +
        '<div class="quiz-next" id="next-' + moduleN + '"></div>' +
      '</div>';
  }

  function buildWrongFeedbackHTML(q, optIdx) {
    const otherRows = q.opts.map((opt, i) => {
      if (i === q.correct) return '';
      const wn = (q.whyNot && q.whyNot[i]) ? q.whyNot[i] : '';
      return '<div class="fb-otherwrong"><span class="fb-x">✗</span><strong>' + String.fromCharCode(65+i) + '.</strong> ' + opt + (wn ? ' <em>— ' + wn + '</em>' : '') + '</div>';
    }).join('');
    return (
      '<div class="quiz-feedback-title">✗ Respuesta incorrecta</div>' +
      '<div class="friendly-miss">' + randomMiss() + '</div>' +
      '<div class="quiz-feedback-body">' +
        '<div class="fb-block fb-block-wrong">' +
          '<div class="fb-label">Tu respuesta:</div>' +
          '<div class="fb-text"><span class="fb-x">✗</span> ' + String.fromCharCode(65+optIdx) + '. ' + q.opts[optIdx] + '</div>' +
        '</div>' +
        '<div class="fb-block fb-block-right">' +
          '<div class="fb-label">Respuesta correcta:</div>' +
          '<div class="fb-text"><span class="fb-check">✓</span> ' + String.fromCharCode(65+q.correct) + '. ' + q.opts[q.correct] + '</div>' +
        '</div>' +
        '<div class="fb-why-label">¿Por qué es la correcta?</div>' +
        '<div class="fb-why">' + q.why + '</div>' +
        (otherRows ? '<div class="fb-why-label">¿Por qué no las otras?</div><div class="fb-others">' + otherRows + '</div>' : '') +
      '</div>'
    );
  }

  function answerQuestion(moduleN, optIdx) {
    const qs = quizState[moduleN];
    if (qs.answered) return;
    const q = qs.current[qs.index];
    const isCorrect = optIdx === q.correct;
    qs.answered = true;

    const container = document.getElementById('quiz-' + moduleN);
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === q.correct) b.classList.add('correct');
      if (i === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-' + moduleN);
    if (isCorrect) {
      qs.correct++; updateProgress();
      fb.className = 'quiz-feedback correct show';
      fb.innerHTML = '<div class="quiz-feedback-title">✓ Respuesta correcta</div><div class="quiz-feedback-body"><div class="fb-why-label">Por qué es la correcta:</div><div class="fb-why">' + q.why + '</div></div>';
    } else {
      qs.wrongs++;
      state.wrongCount[moduleN] = (state.wrongCount[moduleN] || 0) + 1;
      save();
      fb.className = 'quiz-feedback wrong show';
      fb.innerHTML = buildWrongFeedbackHTML(q, optIdx);
      if (state.wrongCount[moduleN] >= MAX_WRONGS) {
        state.locks[moduleN] = Date.now() + LOCK_MINUTES * 60 * 1000;
        save();
        setTimeout(() => renderLockedState(moduleN), 2500);
        return;
      }
    }
    const nx = document.getElementById('next-' + moduleN);
    const isLast = qs.index === QUESTIONS_PER_MODULE - 1;
    if (isCorrect) {
      nx.innerHTML = isLast
        ? '<button class="btn btn-success" onclick="App.finishQuiz(' + moduleN + ')">Finalizar quiz →</button>'
        : '<button class="btn btn-primary" onclick="App.nextQuestion(' + moduleN + ')">Siguiente pregunta →</button>';
    } else {
      const pool = quizBank[moduleN];
      const usedQs = new Set(qs.current.map(x => x.q));
      const candidates = pool.filter(p => !usedQs.has(p.q));
      if (candidates.length > 0) {
        const newQ = candidates[Math.floor(Math.random() * candidates.length)];
        qs.current[qs.index] = shuffleOpts(newQ);
      } else {
        qs.current[qs.index] = shuffleOpts(q);
      }
      nx.innerHTML = '<button class="btn btn-ghost" onclick="App.retryQuestion(' + moduleN + ')">Reintentar con nueva pregunta →</button>';
    }
  }

  function nextQuestion(moduleN) { const qs=quizState[moduleN]; qs.index++; qs.answered=false; renderCurrentQuestion(moduleN); }
  function retryQuestion(moduleN) { const qs=quizState[moduleN]; qs.answered=false; renderCurrentQuestion(moduleN); }
  function finishQuiz(moduleN) {
    const qs = quizState[moduleN];
    if (qs.correct >= QUESTIONS_PER_MODULE) {
      if (!state.completedModules.includes(moduleN)) state.completedModules.push(moduleN);
      state.unlocked = Math.max(state.unlocked, moduleN + 1);
      if (state.unlocked > TOTAL_MODULES) state.unlocked = 11;
      state.wrongCount[moduleN] = 0;
      save(); renderNav(); updateProgress();
      const container = document.getElementById('quiz-' + moduleN);
      container.innerHTML = renderQuizDoneInlineHTML(moduleN);
    }
  }

  function renderQuizDoneInlineHTML(moduleN) {
    const nextN = moduleN + 1;
    const isLast = moduleN === TOTAL_MODULES;
    const nextLabel = isLast ? 'Ir a la Prueba Final →' : 'Ir al Módulo ' + nextN + ' →';
    const nextTarget = isLast ? 11 : nextN;
    return '<div class="quiz-done"><div class="quiz-done-icon">✓</div><div class="quiz-done-title">¡Módulo completado!</div><div class="quiz-done-desc">Desbloqueaste el siguiente paso.</div><button class="btn btn-primary" onclick="App.goToModule(' + nextTarget + ')">' + nextLabel + '</button></div>';
  }

  /* ---------- PRUEBA FINAL ---------- */
  function isFinalLocked() { return state.finalLockUntil && Date.now() < state.finalLockUntil; }
  function finalLockRemainingMs() { return Math.max(0, (state.finalLockUntil || 0) - Date.now()); }

  function mountFinalTest() {
    const container = document.getElementById('quiz-final');
    if (state.finalPassed) {
      container.innerHTML = '<div class="quiz-done"><div class="quiz-done-icon">🏆</div><div class="quiz-done-title">Prueba final aprobada</div><div class="quiz-done-desc">Puedes volver a descargar tu certificado.</div><button class="btn btn-primary" onclick="App.goToModule(12)">Ver certificado →</button></div>';
      return;
    }
    if (isFinalLocked()) { renderFinalLocked(); return; }
    if (!quizState.final) {
      quizState.final = { current: pickQuestions(finalBank, FINAL_QUESTIONS), index: 0, correct: 0, wrongs: 0, answered: false };
    }
    renderFinalQuestion();
  }

  function renderFinalLocked() {
    const container = document.getElementById('quiz-final');
    const remMs = finalLockRemainingMs();
    const remMin = Math.ceil(remMs / 60000);
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">🔒</div>' +
        '<div class="quiz-locked-title">Prueba Final bloqueada temporalmente</div>' +
        '<div class="quiz-locked-desc">Acumulaste ' + MAX_WRONGS_FINAL + ' errores en la prueba. Respira, repasa los módulos y vuelve en <strong id="final-lock-timer">' + remMin + ' min</strong>.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkFinalLock()">Reintentar ahora</button>' +
      '</div>';
    const tick = () => {
      const ms = finalLockRemainingMs();
      const el = document.getElementById('final-lock-timer'); if (!el) return;
      if (ms <= 0) { mountFinalTest(); return; }
      const s = Math.ceil(ms / 1000), mm = Math.floor(s/60), ss = (s%60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkFinalLock() {
    if (!isFinalLocked()) {
      state.finalWrongCount = 0; state.finalLockUntil = 0;
      delete quizState.final;
      save(); mountFinalTest();
    } else {
      const ms = finalLockRemainingMs(), mm = Math.floor(ms/60000), ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('Aún bloqueada. Quedan ' + mm + ':' + ss + '.');
    }
  }

  function renderFinalQuestion() {
    const container = document.getElementById('quiz-final');
    const qs = quizState.final; const q = qs.current[qs.index];
    const lifeLeft = Math.max(0, MAX_WRONGS_FINAL - (state.finalWrongCount || 0));
    const dots = Array.from({length:FINAL_QUESTIONS}, (_, i) => {
      let c = 'qp-dot'; if (i < qs.index) c += ' done'; else if (i === qs.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" onclick="App.answerFinal(' + i + ')" data-i="' + i + '"><span class="opt-letter">' + String.fromCharCode(65+i) + '</span><span>' + opt + '</span></button>'
    )).join('');
    container.innerHTML =
      '<div class="quiz-gate-head"><div class="quiz-icon">🏆</div><div><div class="quiz-title">Prueba Final · Certificación Captador</div>' +
      '<div class="quiz-sublabel">10 preguntas · banco rotativo de 50 · 10/10 para certificarte</div></div></div>' +
      '<div class="quiz-sub">Responde correctamente las 10. Si fallas, la pregunta rota. <strong>Tras ' + MAX_WRONGS_FINAL + ' errores acumulados la prueba se bloquea 10 minutos.</strong></div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress">' + dots + '</div>' +
        '<div class="quiz-progress-label">' + qs.correct + '/' + FINAL_QUESTIONS + ' correctas</div>' +
        '<div class="quiz-life-label">Intentos · ' + lifeLeft + '/' + MAX_WRONGS_FINAL + '</div>' +
      '</div>' +
      '<div class="quiz-q"><div class="quiz-q-label">Pregunta ' + (qs.index + 1) + ' de ' + FINAL_QUESTIONS + '</div>' +
        '<div class="quiz-q-text">' + q.q + '</div>' +
        '<div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-feedback" id="feedback-final"></div>' +
        '<div class="quiz-next" id="next-final"></div>' +
      '</div>';
  }

  function answerFinal(optIdx) {
    const qs = quizState.final;
    if (qs.answered) return;
    const q = qs.current[qs.index];
    const isCorrect = optIdx === q.correct;
    qs.answered = true;
    const container = document.getElementById('quiz-final');
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === q.correct) b.classList.add('correct');
      if (i === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-final');
    if (isCorrect) {
      qs.correct++; updateProgress();
      fb.className = 'quiz-feedback correct show';
      fb.innerHTML = '<div class="quiz-feedback-title">✓ Correcta</div><div class="quiz-feedback-body"><div class="fb-why-label">Por qué:</div><div class="fb-why">' + q.why + '</div></div>';
    } else {
      qs.wrongs++;
      state.finalWrongCount = (state.finalWrongCount || 0) + 1;
      save();
      fb.className = 'quiz-feedback wrong show';
      fb.innerHTML = buildWrongFeedbackHTML(q, optIdx);
      if (state.finalWrongCount >= MAX_WRONGS_FINAL) {
        state.finalLockUntil = Date.now() + LOCK_MINUTES * 60 * 1000;
        save();
        setTimeout(() => renderFinalLocked(), 2500);
        return;
      }
    }
    const nx = document.getElementById('next-final');
    const isLast = qs.index === FINAL_QUESTIONS - 1;
    if (isCorrect) {
      nx.innerHTML = isLast
        ? '<button class="btn btn-success" onclick="App.finishFinal()">Finalizar prueba →</button>'
        : '<button class="btn btn-primary" onclick="App.nextFinal()">Siguiente pregunta →</button>';
    } else {
      const usedQs = new Set(qs.current.map(x => x.q));
      const candidates = finalBank.filter(p => !usedQs.has(p.q));
      if (candidates.length) qs.current[qs.index] = shuffleOpts(candidates[Math.floor(Math.random()*candidates.length)]);
      else qs.current[qs.index] = shuffleOpts(q);
      nx.innerHTML = '<button class="btn btn-ghost" onclick="App.retryFinal()">Reintentar con nueva pregunta →</button>';
    }
  }

  function nextFinal() { const qs=quizState.final; qs.index++; qs.answered=false; renderFinalQuestion(); }
  function retryFinal() { const qs=quizState.final; qs.answered=false; renderFinalQuestion(); }
  function finishFinal() {
    const qs = quizState.final;
    if (qs.correct >= FINAL_QUESTIONS) {
      state.finalPassed = true;
      state.finalWrongCount = 0; state.finalLockUntil = 0;
      save(); renderNav(); updateProgress(); goToModule(12);
    }
  }

  /* ---------- CERTIFICADO / CIERRE ---------- */
  function mountConclusion() {
    const wrap = document.getElementById('done-content');
    const now = new Date();
    const fecha = now.toLocaleDateString('es-CL', {year:'numeric', month:'long', day:'numeric'});
    const waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);
    const savedName = localStorage.getItem('tumatch_cert_name') || '';
    const nameHtml = savedName ? savedName : '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre aquí</span>';
    const modulesListHtml = [];
    for (let i=1; i<=TOTAL_MODULES; i++) {
      modulesListHtml.push('<li><span class="cert-mod-n">' + String(i).padStart(2,'0') + '</span><span>' + MODULE_NAMES[i] + '</span></li>');
    }
    wrap.innerHTML =
      '<div class="sec-header" style="text-align:center;margin-bottom:30px">' +
        '<div class="sec-tag" style="margin:0 auto 14px"><span class="dot"></span>¡Te certificaste como Captador TuMatch!</div>' +
        '<h2 class="sec-h2" style="margin:0 auto">Bienvenido al equipo de captadores</h2>' +
        '<p class="sec-desc" style="margin:0 auto;max-width:680px">Dominas los acuerdos de captación, el embudo del CRM, la captación en precio, los arrendatarios con perfil estrella y los círculos de red. Descarga tu certificado y contáctanos por WhatsApp para activar tu perfil.</p>' +
      '</div>' +

      '<div class="cert-name-form" style="max-width:520px;margin:0 auto 24px;background:var(--ui-surface);border:1.5px solid var(--ui-border);border-radius:14px;padding:20px 22px;display:flex;flex-direction:column;gap:10px">' +
        '<label style="font-family:\'Cinzel\',serif;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--capt-pinkDk)">Tu nombre para el certificado</label>' +
        '<input id="certNameInput" type="text" placeholder="Ej. María José Pérez González" value="' + savedName.replace(/"/g,'&quot;') + '" oninput="App.updateCertName(this.value)" style="font-family:\'DM Sans\',sans-serif;font-size:16px;padding:12px 14px;border:1.5px solid var(--ui-border);border-radius:10px;color:var(--ui-text);background:var(--ui-bg);outline:none;transition:border-color .15s">' +
      '</div>' +

      '<div class="tm-cert" id="cert">' +
        '<div class="tm-cert-border">' +
          '<div class="tm-cert-corner tl"></div><div class="tm-cert-corner tr"></div><div class="tm-cert-corner bl"></div><div class="tm-cert-corner br"></div>' +

          '<div class="tm-cert-logo-block"><img class="tm-cert-logo-img" src="assets/tumatch_horizontal_positivo.jpg" alt="TuMatch Inmobiliario"></div>' +

          '<div class="tm-cert-eyebrow">Certificado Oficial · Academia de Corredores</div>' +
          '<h1 class="tm-cert-title">Captador TuMatch<em>Programa Oficial para Captadores · 2026</em></h1>' +
          '<div class="tm-cert-divider"></div>' +
          '<div class="tm-cert-subtitle">Onboarding Captador · TuMatch Inmobiliario SpA</div>' +

          '<p class="tm-cert-intro">Se otorga el presente reconocimiento a</p>' +
          '<div class="tm-cert-name" id="tmCertName">' + nameHtml + '</div>' +

          '<p class="tm-cert-body">Por haber completado satisfactoriamente los diez módulos del onboarding y aprobado la prueba final con 10 de 10 correctas (banco rotativo de 50 preguntas), acreditando dominio en acuerdos de captación con y sin exclusividad, uso del CRM y embudo de captación, estimación de precio de mercado, captación de arrendatario con perfil estrella, comisiones de referido y captador 2026, círculos de red y rentabilización de contactos.</p>' +

          '<div class="tm-cert-modules-block">' +
            '<div class="tm-cert-modules-title">Módulos aprobados</div>' +
            '<ol class="tm-cert-modules">' + modulesListHtml.join('') + '</ol>' +
            '<div class="tm-cert-final-badge"><span class="badge-label">Calificación final</span><span class="badge-score">10<span class="badge-slash">/</span>10</span><span class="badge-sub">Prueba final aprobada</span></div>' +
          '</div>' +

          '<div class="tm-cert-footer">' +
            '<div class="tm-cert-date">Santiago, ' + fecha + '</div>' +
            '<div class="tm-cert-seal">' +
              '<div class="tm-cert-seal-mark"><img src="assets/tumatch_simbolo_positivo.jpg" alt="TuMatch"></div>' +
              '<div class="tm-cert-seal-label">Sello de<br>certificación</div>' +
            '</div>' +
            '<div class="tm-cert-sign">' +
              '<div class="tm-cert-stamp">' +
                '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="tm-cert-stamp-svg">' +
                  '<defs><path id="tmCaptStampArcTop" d="M 34,120 A 86,86 0 0 1 206,120" fill="none"/><path id="tmCaptStampArcBottom" d="M 38,120 A 82,82 0 0 0 202,120" fill="none"/></defs>' +
                  '<circle cx="120" cy="120" r="114" fill="none" stroke="#0D1B2A" stroke-width="4"/>' +
                  '<circle cx="120" cy="120" r="108" fill="none" stroke="#D4A017" stroke-width="0.8"/>' +
                  '<circle cx="120" cy="120" r="100" fill="none" stroke="#E8307A" stroke-width="2.2"/>' +
                  '<circle cx="120" cy="120" r="76" fill="none" stroke="#0D1B2A" stroke-width="1" stroke-dasharray="1 3"/>' +
                  '<text font-family="Cinzel, serif" font-size="12" font-weight="800" letter-spacing="4.5" fill="#0D1B2A"><textPath href="#tmCaptStampArcTop" startOffset="50%" text-anchor="middle">TUMATCH · INMOBILIARIO</textPath></text>' +
                  '<text font-family="Cinzel, serif" font-size="9" font-weight="700" letter-spacing="5" fill="#C42D8E"><textPath href="#tmCaptStampArcBottom" startOffset="50%" text-anchor="middle">CAPTADOR CERTIFICADO · 2026</textPath></text>' +
                  '<text x="120" y="108" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="3.5" text-anchor="middle" fill="#0D1B2A">APROBADO</text>' +
                  '<text x="120" y="140" font-family="Cinzel, serif" font-size="28" font-weight="900" letter-spacing="3" text-anchor="middle" fill="#C42D8E">10/10</text>' +
                  '<text x="120" y="168" font-family="EB Garamond, serif" font-style="italic" font-weight="600" font-size="13" text-anchor="middle" fill="#0D1B2A">captador TuMatch</text>' +
                '</svg>' +
              '</div>' +
              '<div class="tm-cert-sign-line"></div>' +
              '<div class="tm-cert-sign-name">Patricio Rojas</div>' +
              '<div class="tm-cert-sign-role">Representante · TuMatch Inmobiliario SpA</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="tm-cert-actions">' +
        '<button class="btn btn-primary" onclick="App.downloadCert()">⬇️ Descargar PNG</button>' +
        '<button class="btn btn-ghost" onclick="window.print()">🖨️ Imprimir</button>' +
        '<button class="btn btn-ghost" onclick="App.restart()">↻ Reiniciar onboarding</button>' +
      '</div>' +
      '<div style="text-align:center;margin:40px 0 20px">' +
        '<div style="font-family:\'Cinzel\',serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--capt-pinkDk);margin-bottom:16px;font-weight:800">Paso final · Activa tu perfil</div>' +
        '<a class="whatsapp-cta" href="' + waUrl + '" target="_blank" rel="noopener" id="whatsappCta">' +
          '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 0h-.008C7.172 0 0 7.174 0 16c0 3.502 1.128 6.745 3.046 9.377L1.052 31.35l6.18-1.975A15.92 15.92 0 0 0 16.004 32C24.832 32 32 24.826 32 16S24.832 0 16.004 0zm9.308 22.59c-.386 1.09-1.922 1.996-3.146 2.26-.836.178-1.93.32-5.604-1.202-4.696-1.944-7.718-6.716-7.954-7.026-.224-.31-1.876-2.494-1.876-4.754 0-2.26 1.15-3.366 1.612-3.836.384-.388.836-.564 1.118-.564.27 0 .544.01.782.024.25.014.586-.094.916.696.338.808 1.15 2.794 1.252 2.996.102.202.17.436.034.702-.136.268-.204.432-.406.662-.202.23-.424.52-.606.696-.202.196-.412.406-.18.80.232.392 1.03 1.7 2.214 2.752 1.524 1.356 2.812 1.78 3.204 1.984.392.202.622.17.85-.102.23-.27.984-1.15 1.244-1.544.26-.394.52-.328.878-.196.358.136 2.274 1.076 2.666 1.27.392.196.652.294.748.458.098.162.098.938-.288 2.026z"/></svg>' +
          'Contactar a TuMatch por WhatsApp' +
        '</a>' +
        '<p style="margin:18px auto 0;max-width:520px;font-family:\'EB Garamond\',serif;font-size:17px;color:var(--ui-text-soft);line-height:1.6;font-style:italic">Activamos tu acceso al CRM, asignamos tu Team Leader y coordinamos la firma del Anexo N°2 de Referidos y Captación.</p>' +
      '</div>';
  }

  function saveCertName(v) { try { localStorage.setItem('tumatch_cert_name', v); } catch(e){} }
  function updateCertName(v) {
    saveCertName(v);
    const el = document.getElementById('tmCertName');
    if (el) el.innerHTML = v && v.trim() ? v : '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre aquí</span>';
  }
  function downloadCert() {
    if (typeof html2canvas === 'undefined') { alert('La librería para descargar no está disponible.'); return; }
    const el = document.getElementById('cert');
    html2canvas(el, {scale:2, backgroundColor:'#FAF8F4'}).then(canvas => {
      const link = document.createElement('a');
      link.download = 'Certificado_TuMatch_Captador.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  /* ---------- THEME ---------- */
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('tumatch_theme', next); } catch(e){}
    updateLogoForTheme();
  }
  function updateLogoForTheme() {
    const theme = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const img = theme === 'dark' ? 'assets/tumatch_horizontal_negativo.jpg' : 'assets/tumatch_horizontal_positivo.jpg';
    const bImg = document.getElementById('brandLogoImg');
    const hImg = document.getElementById('heroLogoImg');
    if (bImg) bImg.src = img;
    if (hImg) hImg.src = img;
  }

  function updateResumeBanner() {
    const banner = document.getElementById('resumeBanner');
    if (!banner) return;
    const hasProgress = state.completedModules.length > 0 || state.current > 0;
    if (!hasProgress) { banner.style.display = 'none'; return; }
    banner.style.display = 'flex';
    const nextN = state.finalPassed ? 12 : Math.min(state.unlocked, 11);
    const txt = state.finalPassed
      ? 'Ya estás certificado. Puedes volver a descargar tu certificado.'
      : 'Próximo paso: ' + (nextN === 11 ? 'Prueba Final' : 'Módulo ' + nextN + ' · ' + MODULE_NAMES[nextN]) + '.';
    const tEl = document.getElementById('resumeBannerText');
    if (tEl) tEl.textContent = txt;
    const bEl = document.getElementById('resumeBannerBtn');
    if (bEl) bEl.onclick = () => goToModule(nextN);
  }

  function init() {
    load(); renderNav(); updateProgress(); updateResumeBanner(); updateLogoForTheme();
    const t = document.getElementById('themeToggle');
    if (t) t.addEventListener('click', toggleTheme);
  }

  return {
    init, goToModule, startModule, restart,
    answerQuestion, nextQuestion, retryQuestion, finishQuiz,
    answerFinal, nextFinal, retryFinal, finishFinal,
    toggleTheme, saveCertName, updateCertName, downloadCert, checkLock, checkFinalLock,
    // Expuesto para admin view
    _data: { quizBank, finalBank, commissionData, circlesData, MODULE_NAMES, TOTAL_MODULES, QUESTIONS_PER_MODULE, FINAL_QUESTIONS, MAX_WRONGS, MAX_WRONGS_FINAL, LOCK_MINUTES },
  };
})();

document.addEventListener('DOMContentLoaded', App.init);

/* Exponer bancos globalmente para admin.html */
window.quizBank = quizBank;
window.finalBank = finalBank;
window.commissionData = commissionData;
window.circlesData = circlesData;
window.FRIENDLY_MISS = FRIENDLY_MISS;
