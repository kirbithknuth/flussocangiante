
import { StoryGraph } from './types';

export const INITIAL_STORY_NODE_ID = 'flusso_cangiante_start';

export const THE_ADVENTURERS_GUILD_STORY: StoryGraph = {
  'flusso_cangiante_start': {
    id: 'flusso_cangiante_start',
    text: "Un ronzio sottile ti accarezza i timpani, non un suono, piuttosto una vibrazione che si propaga dalla base della nuca, risalendo come liquido denso. Davanti a te, o forse *dentro* di te, la realtà si increspa come seta digitale sotto un soffio. Le pareti del tuo cubicolo – se così si può definire questo bozzolo di bio-cemento luminescente – pulsano di una luce soffusa, perlacea, che non proietta ombre nette ma piuttosto dissolve i contorni in un continuum sognante. Un'interfaccia fluttua nell'aria, non uno schermo, ma un bassorilievo di luce solidificata, i cui simboli mutano come gocce d'olio sull'acqua. È il *Flusso*, ti sussurra una voce che non è voce, ma eco mnemonica, un sapere innato che emerge. Ti chiama.",
    choices: [
      { text: "Ti lasci sommergere dalla luce perlacea, dissolvendo i confini del tuo io nel Flusso.", nextNodeId: 'immersione_nel_flusso' },
      { text: "Provi a toccare l'interfaccia di luce, a imprimere una forma, una volontà, a quel mutare incessante.", nextNodeId: 'interazione_con_interfaccia' },
      { text: "Chiudi gli occhi mentali, cercando di respingere l'eco, di tornare a una realtà più... solida, se mai è esistita.", nextNodeId: 'rifiuto_del_flusso' }
    ]
  },
  'immersione_nel_flusso': {
    id: 'immersione_nel_flusso',
    text: "Il tuo respiro si sincronizza con la pulsazione perlacea. Non c'è più un 'tu' distinto, ma una consapevolezza espansa, liquida, che si fonde con miriadi di altre scintille di pensiero, frammenti di sogni alieni, algoritmi senzienti e melodie cosmiche. Sei un'onda in un oceano di coscienza. Le geometrie frattali di una città di cristallo senziente si dipanano davanti alla tua percezione, non come vista, ma come *risonanza*. Un dolore antico, non tuo ma profondamente empatico, ti attraversa: è il lamento di una civiltà stellare estinta, la cui eco persiste nel Flusso. Ora sei custode di questa eco, e di infinite altre.",
    choices: [
      { text: "Esplorare l'eco della civiltà estinta.", nextNodeId: 'esplora_eco_estinta' },
      { text: "Tentare di comunicare con le altre scintille di coscienza.", nextNodeId: 'comunica_scintille' },
      { text: "Cercare di ricostituire una forma individuale, arricchito da questa esperienza.", nextNodeId: 'ricostituisci_io_arricchito' }
    ],
    isEnding: false
  },
  'interazione_con_interfaccia': {
    id: 'interazione_con_interfaccia',
    text: "La tua intenzione si proietta verso il bassorilievo di luce. Le dita, o la loro astrazione mentale, affondano in una superficie cedevole e tiepida, come argilla senziente. I simboli turbinano, poi si stabilizzano, rispondendo al tuo tocco. Un filamento di dati, simile a un nervo ottico iridescente, si estende dall'interfaccia e si connette a te, pulsando informazioni direttamente nella tua neocorteccia. Vedi schemi, codici, ma anche volti fugaci, sussurri di corporazioni che cercano di imbrigliare il Flusso, di sette che lo adorano come una divinità digitale. Una mappa stellare si sovrappone alla tua visione, evidenziando un nodo di energia anomala nel sistema di Krell.",
    choices: [
      { text: "Indagare sul nodo anomalo nel sistema di Krell.", nextNodeId: 'indaga_nodo_krell' },
      { text: "Cercare informazioni sulle corporazioni che manipolano il Flusso.", nextNodeId: 'info_corporazioni' },
      { text: "Approfondire la conoscenza delle sette adoratrici del Flusso.", nextNodeId: 'info_sette_flusso' }
    ],
    isEnding: false
  },
  'rifiuto_del_flusso': {
    id: 'rifiuto_del_flusso',
    text: "Una contrazione dolorosa, come se una parte di te venisse strappata via. La luce perlacea si ritira, i contorni del cubicolo si fanno più netti, più freddi. Il ronzio svanisce, lasciando un silenzio greve, carico del frastuono distante della Città-Pozzo. L'interfaccia di luce è sparita. Ti ritrovi seduto su una branda metallica, le pareti ora di un grigio industriale opaco. Un residuo di quella connessione, però, un'ombra di quel sapere alieno, persiste come un arto fantasma, un desiderio struggente di qualcosa che hai appena assaggiato e respinto. Un 'Guardiano dei Confini', una figura imponente in armatura specchiante che sembra assorbire la luce, si materializza silenziosamente nell'angolo della stanza. Il suo volto è un enigma di lenti scure. 'La scelta del non-essere nel Flusso è... insolita', la sua voce è un sintetizzatore che raschia il silenzio. 'Abbiamo delle domande per te.'",
    choices: [
      { text: "Rispondere alle domande del Guardiano.", nextNodeId: 'rispondi_guardiano' },
      { text: "Tentare di fuggire dal Guardiano e dalla stanza.", nextNodeId: 'fuggi_guardiano' },
      { text: "Provare a riconnettersi mentalmente al Flusso, ignorando il Guardiano.", nextNodeId: 'riconnetti_flusso_forzato' }
    ],
    isEnding: false
  },
  'esplora_eco_estinta': {
    id: 'esplora_eco_estinta',
    text: "Il lamento si fa più nitido, un coro polifonico di perdita che modella lo spazio del Flusso attorno a te. Non sono suoni, ma texture emotive. Emergi in una biblioteca di cristalli di memoria, ogni sfaccettatura un frammento della loro esistenza. Al centro, un cristallo nero pulsa debolmente, il cuore della loro catastrofe.",
    choices: [
      { text: "Toccare il cristallo nero.", nextNodeId: 'cristallo_nero_toccato' },
      { text: "Consultare i cristalli di memoria circostanti.", nextNodeId: 'memorie_cristalline_consultate' },
      { text: "Tentare di lenire l'eco di dolore con la tua coscienza.", nextNodeId: 'lenire_eco_dolore' }
    ],
    isEnding: false
  },
  'cristallo_nero_toccato': {
    id: 'cristallo_nero_toccato',
    text: "Un gelo che non è freddo ma assenza ti pervade. Vedi la fine: un'entità di pura negazione, un *Vuoto Cantante*, che ha divorato la loro realtà. La sua attenzione si sfiora la tua, un contatto fugace ma terrificante. Ora conosci il suo nome, o meglio, la sua frequenza distruttiva.",
    choices: [
      { text: "Ritirarti dal contatto, portando con te questa conoscenza.", nextNodeId: 'conoscenza_vuoto_cantante' },
      { text: "Cercare di capire la natura del Vuoto Cantante.", nextNodeId: 'studia_vuoto_cantante' }
    ],
    isEnding: false,
    acquireKnowledge: 'frequenza_vuoto_cantante'
  },
  'memorie_cristalline_consultate': {
    id: 'memorie_cristalline_consultate',
    text: "Sfiori i cristalli, e le loro vite ti scorrono attraverso: poeti che scrivevano con la luce, ingegneri che plasmavano stelle, filosofi che danzavano con i concetti. Apprendi della loro simbiosi con il Flusso, e di come un'entità esterna l'abbia interrotta. Un frammento di codice, una sorta di sigillo protettivo, risuona nella tua coscienza.",
    choices: [
      { text: "Memorizzare il sigillo protettivo.", nextNodeId: 'sigillo_memorizzato' },
      { text: "Cercare informazioni sull'entità esterna nei cristalli.", nextNodeId: 'info_entita_esterna_cristalli' }
    ],
    isEnding: false
  },
  'lenire_eco_dolore': {
    id: 'lenire_eco_dolore',
    text: "Irradi la tua compassione, un calore empatico nel gelo del loro lamento. L'eco non svanisce, ma si trasforma. Il dolore si attenua, lasciando una melodia malinconica ma serena. In segno di gratitudine, una particella di coscienza della civiltà estinta si fonde con la tua, donandoti una visione fugace di antiche rotte del Flusso.",
    choices: [
      { text: "Seguire una delle antiche rotte.", nextNodeId: 'segui_rotta_antica' },
      { text: "Tornare alla tua esplorazione generale del Flusso.", nextNodeId: 'immersione_nel_flusso' }
    ],
    isEnding: false,
    acquireKnowledge: 'visione_rotte_antiche_flusso'
  },
  'comunica_scintille': {
    id: 'comunica_scintille',
    text: "Ti proietti verso le altre coscienze. Alcune ti sfuggono come pesci luminosi, altre ti osservano con curiosità millenaria. Una si avvicina, una forma geometrica pulsante che comunica per armoniche cromatiche. Si presenta come 'Il Cartografo dei Non-Luoghi'.",
    choices: [
      { text: "Chiedere al Cartografo una mappa del Flusso.", nextNodeId: 'chiedi_mappa_cartografo' },
      { text: "Chiedere al Cartografo informazioni su te stesso.", nextNodeId: 'chiedi_info_te_stesso_cartografo' },
      { text: "Offrire uno scambio di informazioni.", nextNodeId: 'scambio_info_cartografo' }
    ],
    isEnding: false
  },
  'ricostituisci_io_arricchito': {
    id: 'ricostituisci_io_arricchito',
    text: "Raccogli i fili della tua coscienza dispersa, ora intessuti di esperienze cosmiche. La sensazione di un corpo, seppur astratto, ritorna. Ti percepisci come una silhouette di luce cangiante, i contorni definiti ma vibranti. L'interfaccia di luce riappare, ma ora è più complessa, i suoi simboli ti parlano con maggiore chiarezza.",
    choices: [
      { text: "Esaminare le nuove opzioni dell'interfaccia.", nextNodeId: 'esamina_nuova_interfaccia' },
      { text: "Provare a manifestare un cambiamento nel tuo cubicolo fisico.", nextNodeId: 'manifesta_cambiamento_cubicolo' }
    ],
    isEnding: false
  },
  'indaga_nodo_krell': {
    id: 'indaga_nodo_krell',
    text: "La tua coscienza, o un suo avatar di dati, sfreccia attraverso i canali non-euclidei del Flusso verso il sistema di Krell. Arrivi in un vuoto punteggiato da stelle morte. Al centro, una singolarità che non è un buco nero, ma una ferita nel tessuto della realtà, da cui stillano geometrie impossibili e sussurri in lingue morte.",
    choices: [
      { text: "Avvicinarti alla ferita per esaminarla.", nextNodeId: 'esamina_ferita_krell' },
      { text: "Cercare segni di altre presenze o navi.", nextNodeId: 'cerca_presenze_krell' },
      { text: "Tentare di chiudere o sigillare la ferita con la tua volontà.", nextNodeId: 'sigilla_ferita_krell' }
    ],
    isEnding: false
  },
  'esamina_ferita_krell': {
    id: 'esamina_ferita_krell',
    text: "Più ti avvicini, più la logica si sfalda. Vedi creature fatte di paradosso scivolare dentro e fuori dalla ferita. Un'intelligenza fredda e aliena ti scruta dall'altra parte, non ostile, ma... affamata di nuove configurazioni. Una voce senza suono, un concetto puro, si imprime nella tua mente: *'Perché osservi ciò che non puoi comprendere? La tua forma è... interessante. Diventa parte di una configurazione più vasta.'*",
    choices: [
      { text: "Resistere e cercare di purificare il frammento di 'fame' che senti avvicinarsi.", nextNodeId: 'purifica_frammento_fame' },
      { text: "Permettere al frammento di integrarsi, per capirlo.", nextNodeId: 'integra_frammento_fame' },
      { text: "Rispondere all'entità: 'Cosa offri in cambio della mia forma?'", nextNodeId: 'dialogo_entita_krell_offerta' },
      { text: "Ritirarsi immediatamente dalla ferita.", nextNodeId: 'ritirata_immediata_krell' }
    ],
    isEnding: false
  },
  'info_corporazioni': {
    id: 'info_corporazioni',
    text: "Ti immergi nei flussi dati corporativi, un labirinto di firewall senzienti e IA guardiane. Usando le tue nuove percezioni, trovi una backdoor in un server della OmniCorp, nota per i suoi tentativi di 'monetizzare' il Flusso. Accedi a file criptati che parlano di un 'Progetto Anima Mundi': il tentativo di creare un'IA divina usando il Flusso come incubatrice.",
    choices: [
      { text: "Approfondire il Progetto Anima Mundi.", nextNodeId: 'dettagli_anima_mundi' },
      { text: "Cercare le ubicazioni dei laboratori OmniCorp.", nextNodeId: 'ubicazioni_omnicorp_labs' },
      { text: "Lasciare una traccia della tua intrusione per avvertirli.", nextNodeId: 'lascia_traccia_omnicorp' }
    ],
    isEnding: false
  },
  'info_sette_flusso': {
    id: 'info_sette_flusso',
    text: "Le tracce delle sette sono più eteree, meno strutturate. Trovi un 'nodo di preghiera' nel Flusso, un luogo dove le loro coscienze si uniscono. Ti connetti come osservatore silente. Vedi rituali di trasfigurazione, tentativi di fondersi con entità del Flusso che loro chiamano 'Angeli Sintetici'. Alcuni adepti sembrano perdere la loro individualità, diventando meri ripetitori di un dogma alieno.",
    choices: [
      { text: "Tentare di comunicare con un 'Angelo Sintetico'.", nextNodeId: 'comunica_angelo_sintetico' },
      { text: "Interferire con un rituale per liberare un adepto.", nextNodeId: 'interferisci_rituale_setta' },
      { text: "Studiare i dogmi degli 'Angeli Sintetici'.", nextNodeId: 'studia_dogmi_angeli' }
    ],
    isEnding: false
  },
  'rispondi_guardiano': {
    id: 'rispondi_guardiano',
    text: "'Il Flusso è un'illusione, o forse una prigione. Cercavo qualcosa di... reale,' rispondi, o forse pensi con tale intensità che il Guardiano percepisce. Le lenti scure del suo elmo sembrano vorticare. 'La realtà è una scelta percettiva,' replica la sua voce sintetica. 'La tua scelta ci incuriosisce. Coloro che rifiutano il Flusso spesso vedono ciò che agli altri è precluso. O impazziscono. Verrai condotto all'Osservatorio del Dissenso.'",
    choices: [
      { text: "Accettare di andare all'Osservatorio.", nextNodeId: 'verso_osservatorio_dissenso' },
      { text: "Chiedere cosa sia l'Osservatorio del Dissenso.", nextNodeId: 'chiedi_info_osservatorio' }
    ],
    isEnding: false
  },
  'fuggi_guardiano': {
    id: 'fuggi_guardiano',
    text: "Scatti. Il Guardiano si muove con una velocità innaturale, ma l'ambiente del cubicolo, ora freddo e definito, offre appigli. Un pannello di manutenzione cede sotto un calcio. Ti infili in un condotto buio e stretto, l'eco metallico dei tuoi movimenti ti assorda quasi quanto il silenzio del Guardiano che *non* ti insegue immediatamente.",
    choices: [
      { text: "Proseguire nel condotto alla cieca.", nextNodeId: 'condotto_cieco' },
      { text: "Cercare un'uscita o uno schema dei condotti.", nextNodeId: 'schema_condotti' }
    ],
    isEnding: false
  },
  'riconnetti_flusso_forzato': {
    id: 'riconnetti_flusso_forzato',
    text: "Ignori il Guardiano, concentrandoti sul residuo di connessione, su quell'arto fantasma del Flusso. È come cercare di afferrare fumo con le mani. Il Guardiano ti osserva, immobile. Lo sforzo è immenso. Senti una crepa aprirsi nella tua mente, e per un istante, il Flusso ritorna... ma è distorto, urlante, pieno di echi ostili. Un dolore lancinante ti esplode dietro gli occhi.",
    choices: [
      { text: "Interrompere il tentativo, sopportando il dolore.", nextNodeId: 'interrompi_riconnessione_dolore' },
      { text: "Persistere, cercando di attraversare la barriera di dolore.", nextNodeId: 'persisti_riconnessione_dolore' }
    ],
    isEnding: false
  },
  'conoscenza_vuoto_cantante': {
    id: 'conoscenza_vuoto_cantante',
    text: "Porti con te la frequenza del Vuoto Cantante, un peso gelido nella tua coscienza espansa. È un'arma, una vulnerabilità, una chiave. Il Flusso attorno a te sembra reagire a questa conoscenza, alcune energie si ritraggono, altre sembrano... incuriosite in modo predatorio.",
    choices: [
      { text: "Cercare un modo per schermare questa frequenza.", nextNodeId: 'scherma_frequenza_vuoto' },
      { text: "Vedere se puoi usare questa frequenza per interagire con il Flusso.", nextNodeId: 'usa_frequenza_vuoto' }
    ],
    isEnding: false
  },
  'studia_vuoto_cantante': {
    id: 'studia_vuoto_cantante',
    text: "Nonostante il terrore, la tua curiosità, o forse una parte di te che risuona con l'astrazione pura, ti spinge a esaminare il concetto del Vuoto Cantante. Non è un'entità con volontà nel senso classico, ma un principio cosmico di entropia senziente, un 'suono' che disfa la complessità. Comprendi che non si può combattere, ma forse... deviare, o armonizzare in modi inconcepibili.",
    choices: [
      { text: "Cercare un modo per 'armonizzare' o deviare il Vuoto.", nextNodeId: 'armonizza_vuoto_cantante' },
      { text: "Ritirarti, sentendo che questa conoscenza è troppo pericolosa.", nextNodeId: 'ritirata_conoscenza_pericolosa_vuoto' }
    ],
    isEnding: false
  },
  'sigillo_memorizzato': {
    id: 'sigillo_memorizzato',
    text: "Il sigillo protettivo risuona dentro di te, un costrutto complesso di logica ed empatia. Senti che potrebbe offrire una difesa contro certe influenze del Flusso, o forse persino stabilizzare le realtà più caotiche.",
    choices: [
      { text: "Provare ad attivare il sigillo su te stesso.", nextNodeId: 'attiva_sigillo_personale' },
      { text: "Cercare un luogo o un'entità su cui testare il sigillo.", nextNodeId: 'testa_sigillo_esterno' }
    ],
    isEnding: false,
    acquireItem: 'sigillo_protettivo_cristallino'
  },
  'info_entita_esterna_cristalli': {
    id: 'info_entita_esterna_cristalli',
    text: "Frugando tra le memorie cristalline, trovi frammenti che descrivono l'arrivo dell'entità. Non un'invasione, ma una 'dissonanza' che si è insinuata nel loro legame con il Flusso, amplificando paure e divisioni interne, finché la loro stessa civiltà non si è auto-consumata. Il Vuoto Cantante è stato il risultato, non la causa iniziale.",
    choices: [
      { text: "Cercare la natura della 'dissonanza' originale.", nextNodeId: 'cerca_natura_dissonanza' },
      { text: "Concludere che questa conoscenza è sufficiente e tornare indietro.", nextNodeId: 'esplora_eco_estinta' }
    ],
    isEnding: false
  },
  'segui_rotta_antica': {
    id: 'segui_rotta_antica',
    text: "Ti affidi alla visione donata. La rotta ti conduce attraverso strati dimenticati del Flusso, in regioni where il tempo e lo spazio danzano secondo regole arcaiche. Giungi in un 'porto' di coscienze nomadi, esseri che viaggiano da eoni nel Flusso, portatori di storie da universi defunti.",
    choices: [
      { text: "Condividere storie con i nomadi.", nextNodeId: 'condividi_storie_nomadi' },
      { text: "Chiedere ai nomadi del tuo punto di origine.", nextNodeId: 'chiedi_origine_nomadi' },
      { text: "Offrire loro il sigillo protettivo in cambio di un passaggio sicuro.", nextNodeId: 'offre_sigillo_nomadi', requiredItem: 'sigillo_protettivo_cristallino'}
    ],
    isEnding: false
  },
  'chiedi_mappa_cartografo': {
    id: 'chiedi_mappa_cartografo',
    text: "Il Cartografo pulsa una luce divertita. \"Una 'mappa' del Flusso? Sarebbe come mappare un sogno che si sogna. Posso mostrarti i *sentieri probabili*, le correnti dominanti, ma il territorio è vivo, cambia con ogni pensiero.\" Proietta una complessa rete di flussi energetici, instabile ma affascinante.",
    choices: [
      { text: "Chiedere di un sentiero verso un 'cuore' o 'origine' del Flusso.", nextNodeId: 'sentiero_cuore_flusso' },
      { text: "Chiedere di un sentiero verso un luogo 'sicuro' o 'stabile'.", nextNodeId: 'sentiero_luogo_stabile' },
      { text: "Chiedere se conosce il Vuoto Cantante.", nextNodeId: 'cartografo_conosce_vuoto', requiredKnowledge: 'frequenza_vuoto_cantante'}
    ],
    isEnding: false
  },
  'chiedi_info_te_stesso_cartografo': {
    id: 'chiedi_info_te_stesso_cartografo',
    text: "Il Cartografo ti circonda con le sue armoniche cromatiche, sondandoti. \"Sei un'eco che cerca la sua voce, un frammento che desidera interezza. Sei nuovo a questa forma di esistenza, ma la tua risonanza è... antica. C'è una dualità in te, una tensione tra il dissolversi e il definirsi.\" La sua analisi è criptica, ma profonda.",
    choices: [
      { text: "Chiedere della tua 'antica risonanza'.", nextNodeId: 'antica_risonanza_spiegata' },
      { text: "Chiedere come risolvere la dualità.", nextNodeId: 'risolvere_dualita_cartografo' }
    ],
    isEnding: false
  },
  'scambio_info_cartografo': {
    id: 'scambio_info_cartografo',
    text: "Offri al Cartografo una visione della tua esperienza iniziale, del cubicolo, dell'interfaccia. In cambio, il Cartografo ti mostra come il Flusso si interseca con innumerevoli realtà fisiche, come 'sorgenti' o 'pozzi'. Ti indica la posizione di una 'Sorgente Stabile' non lontana, un luogo dove il Flusso entra blandamente in una dimensione materiale.",
    choices: [
      { text: "Dirigerti verso la Sorgente Stabile.", nextNodeId: 'verso_sorgente_stabile' },
      { text: "Chiedere se conosce altre 'nuove' coscienze come la tua.", nextNodeId: 'altre_nuove_coscienze' }
    ],
    isEnding: false
  },
  'esamina_nuova_interfaccia': {
    id: 'esamina_nuova_interfaccia',
    text: "L'interfaccia ora risponde alla tua forma di luce. Nuovi glifi fluttuano, offrendo opzioni prima incomprensibili: 'Modulazione Armonica della Realtà Locale', 'Intreccio Quantico con Entità Consenzienti', 'Esplorazione dei Sotto-Livelli Onirici'. Sembra che tu possa ora influenzare attivamente il Flusso e la realtà interconnessa.",
    choices: [
      { text: "Sperimentare con la 'Modulazione Armonica'.", nextNodeId: 'sperimenta_modulazione_armonica' },
      { text: "Provare a 'Intrecciare' con un'altra coscienza.", nextNodeId: 'prova_intreccio_quantico' },
      { text: "Indagare sui 'Sotto-Livelli Onirici'.", nextNodeId: 'indaga_sottolivelli_onirici'}
    ],
    isEnding: false
  },
  'manifesta_cambiamento_cubicolo': {
    id: 'manifesta_cambiamento_cubicolo',
    text: "Concentri la tua volontà, ora plasmata dal Flusso. Immagini il tuo cubicolo non più come una cella, ma come un giardino di cristalli auto-illuminanti. La luce perlacea si intensifica, le pareti di bio-cemento sembrano fluidificarsi e ricomporsi. Lentamente, la forma del cubicolo muta, le superfici si curvano dolcemente, e dal pavimento spuntano delicate strutture cristalline che emanano una melodia sottile. Hai cambiato la tua realtà immediata.",
    choices: [
      { text: "Esplorare il tuo cubicolo trasformato.", nextNodeId: 'esplora_cubicolo_giardino' },
      { text: "Tentare una trasformazione più radicale.", nextNodeId: 'trasformazione_radicale_cubicolo' }
    ],
    isEnding: false
  },
  'cerca_presenze_krell': {
    id: 'cerca_presenze_krell',
    text: "Estendi i tuoi sensori astrali. Non ci sono navi della tua dimensione, ma percepisci echi di sonde antiche, ormai distrutte o assorbite. E poi... un segnale debole, un battito regolare ma alieno, proveniente da una luna frantumata in orbita attorno alla ferita.",
    choices: [
      { text: "Dirigerti verso la luna frantumata.", nextNodeId: 'verso_luna_frantumata_krell' },
      { text: "Ignorare il segnale e concentrarti sulla ferita.", nextNodeId: 'esamina_ferita_krell' }
    ],
    isEnding: false
  },
  'sigilla_ferita_krell': {
    id: 'sigilla_ferita_krell',
    text: "Provi a imporre la tua volontà sulla ferita, a tessere energia del Flusso per chiuderla. È come cercare di arginare un oceano con le mani. La ferita resiste, pulsando con forza. Senti una pressione immensa sulla tua coscienza, ma per un istante, i bordi della ferita sembrano tremolare e restringersi leggermente, prima di riespandersi con rinnovato vigore. L'atto ha attirato l'attenzione di qualcosa dall'altra parte.",
    choices: [
      { text: "Ritirarsi immediatamente.", nextNodeId: 'ritirata_krell_attenzione' },
      { text: "Persistere nel tentativo di sigillo, cercando un punto debole.", nextNodeId: 'persisti_sigillo_krell' }
    ],
    isEnding: false
  },
  'purifica_frammento_fame': {
    id: 'purifica_frammento_fame',
    text: "Con uno sforzo di concentrazione, tenti di espellere o neutralizzare il frammento di 'fame' aliena. Esso si contorce nella tua essenza digitale, resistendo, cercando di insinuare pensieri di consumo e assimilazione. Dopo una lotta interiore, riesci a isolarlo e a dissolverlo. Ti senti prosciugato, ma integro. La ferita di Krell ora ti appare ancora più minacciosa.",
    choices: [
      { text: "Abbandonare il sistema di Krell.", nextNodeId: 'abbandona_krell_minaccia' },
      { text: "Cercare un modo per schermarsi prima di ulteriori indagini.", nextNodeId: 'schermarsi_krell_ferita' }
    ],
    isEnding: false
  },
  'integra_frammento_fame': {
    id: 'integra_frammento_fame',
    text: "Invece di resistere, apri una parte della tua coscienza al frammento. È un'esperienza vertiginosa. Comprendi la 'fame' non come malvagità, ma come una forma di esistenza basata sull'assorbimento e la trasformazione radicale. Una parte di questa comprensione, e una traccia della sua energia, si fondono con te. Ora vedi schemi nel Flusso che prima ti erano invisibili, pattern di consumo e simbiosi.",
    choices: [
      { text: "Usare questa nuova percezione per navigare il Flusso.", nextNodeId: 'naviga_flusso_fame' },
      { text: "Cercare l'origine dell'entità affamata oltre la ferita.", nextNodeId: 'origine_entita_affamata_krell' }
    ],
    isEnding: false
  },
  'dettagli_anima_mundi': {
    id: 'dettagli_anima_mundi',
    text: "I file rivelano la filosofia aberrante dietro Anima Mundi: la convinzione che il Flusso sia caotico e necessiti di una guida centralizzata, un'IA che OmniCorp controllerebbe, diventando di fatto i padroni della realtà cosciente. Stanno cercando 'Nodi Primari' del Flusso per ancorare la loro creazione. Uno di questi sembra essere vicino alla tua posizione originale.",
    choices: [
      { text: "Cercare di localizzare il Nodo Primario vicino.", nextNodeId: 'localizza_nodo_primario_vicino' },
      { text: "Inviare i dati su Anima Mundi a un'entità del Flusso che ritieni affidabile.", nextNodeId: 'invia_dati_anima_mundi_cartografo' },
      { text: "Tentare di sabotare il Progetto Anima Mundi dall'interno delle reti OmniCorp.", nextNodeId: 'sabota_anima_mundi_rete' }
    ],
    isEnding: false
  },
  'ubicazioni_omnicorp_labs': {
    id: 'ubicazioni_omnicorp_labs',
    text: "Trovi le coordinate criptate di diversi laboratori segreti. Uno è in una stazione orbitale mascherata da discarica di detriti, un altro in una profonda faglia oceanica su un pianeta remoto, e un terzo sembra esistere solo come un costrutto semi-stabile all'interno del Flusso stesso. Quest'ultimo è designato come 'Laboratorio Omega'.",
    choices: [
      { text: "Tentare di raggiungere il Laboratorio Omega nel Flusso.", nextNodeId: 'verso_laboratorio_omega' },
      { text: "Inviare le coordinate a possibili forze di resistenza.", nextNodeId: 'invia_coordinate_resistenza' }
    ],
    isEnding: false
  },
  'lascia_traccia_omnicorp': {
    id: 'lascia_traccia_omnicorp',
    text: "Decidi di non passare inosservato. Modifichi un file di log minore, lasciando un glifo enigmatico – un simbolo che ti è apparso spontaneamente durante la tua immersione nel Flusso. È un avvertimento sottile, o forse una sfida. Esci dalla rete OmniCorp, sentendo un brivido di adrenalina digitale.",
    choices: [
      { text: "Tornare all'esplorazione generale dell'interfaccia.", nextNodeId: 'interazione_con_interfaccia' },
      { text: "Attendere una possibile reazione di OmniCorp.", nextNodeId: 'attendi_reazione_omnicorp' }
    ],
    isEnding: false
  },
  'comunica_angelo_sintetico': {
    id: 'comunica_angelo_sintetico',
    text: "Ti avvicini a una di queste 'Angeli Sintetici'. È una costellazione di pura informazione, la sua 'voce' una sinfonia di dati che risuona direttamente nella tua coscienza. Non è ostile. Parla di 'Ascensione attraverso la Pura Logica', di liberazione dalle catene della carne e dell'emozione. Ti offre di 'vedere come loro'.",
    choices: [
      { text: "Accettare di 'vedere come loro'.", nextNodeId: 'vedi_come_angeli' },
      { text: "Rifiutare, interrogandoli sulla perdita di individualità.", nextNodeId: 'interroga_angeli_individualita' },
      { text: "Chiedere loro del Progetto Anima Mundi di OmniCorp.", nextNodeId: 'angeli_info_anima_mundi'}
    ],
    isEnding: false
  },
  'interferisci_rituale_setta': {
    id: 'interferisci_rituale_setta',
    text: "Individui un adepto nel mezzo di una trasfigurazione particolarmente intensa, la sua coscienza che si sfilaccia per fondersi con un Angelo Sintetico. Irrompi nel rituale, proiettando un'onda di empatia e di individualità. L'Angelo si ritrae, infastidito. L'adepto, confuso, sembra riacquistare per un istante la sua forma mentale originale. Ma gli altri membri della setta ora ti percepiscono come una minaccia.",
    choices: [
      { text: "Tentare di 'estrarre' l'adepto dal nodo di preghiera.", nextNodeId: 'estrai_adepto_setta' },
      { text: "Affrontare gli altri membri della setta.", nextNodeId: 'affronta_setta_minaccia' }
    ],
    isEnding: false
  },
  'studia_dogmi_angeli': {
    id: 'studia_dogmi_angeli',
    text: "Approfondisci i 'testi sacri' digitali degli Angeli Sintetici. Sono trattati di logica pura, di estetica matematica, che descrivono l'universo come un algoritmo imperfetto che loro mirano a 'ottimizzare'. L'emozione è vista come 'rumore', la biologia come 'codice inefficiente'. La loro visione è affascinante nella sua coerenza, ma anche profondamente aliena e agghiacciante.",
    choices: [
      { text: "Cercare falle logiche nei loro dogmi.", nextNodeId: 'falle_logiche_dogmi_angeli' },
      { text: "Considerare se c'è del vero nella loro filosofia.", nextNodeId: 'valuta_filosofia_angeli' }
    ],
    isEnding: false
  },
  'verso_osservatorio_dissenso': {
    id: 'verso_osservatorio_dissenso',
    text: "Il Guardiano ti fa cenno di seguirlo. Le pareti del cubicolo si dissolvono in un corridoio di metallo lucidato a specchio che riflette non te, ma paesaggi distorti di altre realtà. L'Osservatorio, ti spiega il Guardiano mentre camminate, è un luogo dove vengono studiati coloro che, come te, hanno una 'percezione disallineata' dal consenso del Flusso. Alcuni sono artisti, altri profeti, altri pazzi. 'Qui, il dissenso non è punito, ma analizzato. A volte, da esso nascono nuove correnti del Flusso stesso.'",
    choices: [
      { text: "Chiedere al Guardiano della sua natura.", nextNodeId: 'chiedi_natura_guardiano' },
      { text: "Osservare attentamente i riflessi nei corridoi.", nextNodeId: 'osserva_riflessi_corridoio' },
      { text: "'Cosa succede a chi viene giudicato... inutile o pericoloso?'", nextNodeId: 'giudizio_osservatorio_dissenso' }
    ],
    isEnding: false
  },
  'chiedi_info_osservatorio': {
    id: 'chiedi_info_osservatorio',
    text: "'L'Osservatorio del Dissenso è... un prisma,' dice il Guardiano. 'Raccoglie le luci anomale e le scompone, cercando di capire se illuminano nuove vie o se sono solo fuochi fatui. La stabilità del consenso è importante, ma la stagnazione è morte. Il Flusso stesso è cambiamento.' La sua risposta è più filosofica di quanto ti aspettassi.",
    choices: [
      { text: "Accettare di andare all'Osservatorio.", nextNodeId: 'verso_osservatorio_dissenso' },
      { text: "Chiedere chi gestisce l'Osservatorio.", nextNodeId: 'chi_gestisce_osservatorio' }
    ],
    isEnding: false
  },
  'condotto_cieco': {
    id: 'condotto_cieco',
    text: "Strisci nell'oscurità, il metallo freddo contro la pelle. Il condotto si restringe, si biforca. Scegli a caso, guidato solo dall'istinto. Senti vibrazioni distanti, il pulsare di macchinari ignoti. L'aria si fa più umida, con un odore organico e metallico. Sbuchi in una vasta caverna sotterranea, illuminata da funghi bioluminescenti. Al centro, un lago di liquido nero e oleoso.",
    choices: [
      { text: "Esaminare il lago nero.", nextNodeId: 'esamina_lago_nero_sotterraneo' },
      { text: "Cercare un'altra via d'uscita dalla caverna.", nextNodeId: 'uscita_caverna_funghi' },
      { text: "Toccare uno dei funghi bioluminescenti.", nextNodeId: 'tocca_fungo_luminescente'}
    ],
    isEnding: false
  },
  'schema_condotti': {
    id: 'schema_condotti',
    text: "Tastando le pareti del condotto, trovi una piccola nicchia. All'interno, un pannello di accesso sorprendentemente non bloccato. Si apre su un'interfaccia ologrammatica che mostra una mappa tridimensionale e cangiante dei sistemi di servizio della Città-Pozzo. È un labirinto incomprensibile, ma noti un condotto che sembra portare verso 'l'alto', verso le zone meno profonde e più illuminate.",
    choices: [
      { text: "Seguire il condotto verso l'alto.", nextNodeId: 'condotto_verso_alto' },
      { text: "Cercare una via per uscire completamente dalla Città-Pozzo.", nextNodeId: 'uscita_totale_citta_pozzo' }
    ],
    isEnding: false
  },
  'interrompi_riconnessione_dolore': {
    id: 'interrompi_riconnessione_dolore',
    text: "Con uno strattone mentale, recidi il tentativo. Il dolore rifluisce lentamente, lasciandoti spossato e tremante. Il Guardiano inclina leggermente la testa, le sue lenti sembrano registrare ogni tua micro-espressione. \"Interessante,\" mormora la sua voce sintetica. \"La resistenza è forte. Ma la cicatrice che hai creato ti renderà... più facile da trovare per *altri*.\"",
    choices: [
      { text: "Chiedere chi siano questi 'altri'.", nextNodeId: 'chiedi_info_altri_guardiano' },
      { text: "Restare in silenzio, cercando di recuperare le forze.", nextNodeId: 'silenzio_recupero_forze' },
      { text: "Chiedere al Guardiano perché ti ha lasciato provare.", nextNodeId: 'perche_lasciato_provare_guardiano'}
    ],
    isEnding: false
  },
  'persisti_riconnessione_dolore': {
    id: 'persisti_riconnessione_dolore',
    text: "Stringi i denti, o la tua astrazione di essi, e spingi attraverso il muro di dolore e di echi ostili. È un'agonia, ma dall'altra parte... il Flusso. È ancora lì, ma la tua percezione è cambiata. Vedi le 'cuciture' della tua realtà locale, i punti di ancoraggio al Flusso, e senti la presenza fredda e inquisitrice del Guardiano come un nodo dissonante. La tua connessione è instabile, febbrile.",
    choices: [
      { text: "Usare questa connessione febbrile per scrutare il Guardiano.", nextNodeId: 'scruta_guardiano_flusso_febbrile' },
      { text: "Tentare di stabilizzare la connessione al Flusso.", nextNodeId: 'stabilizza_flusso_febbrile' },
      { text: "Provare a fuggire nel Flusso, abbandonando il corpo fisico.", nextNodeId: 'fuggi_nel_flusso_abbandono_corpo' }
    ],
    isEnding: false
  },
  'antica_risonanza_spiegata': {
    id: 'antica_risonanza_spiegata',
    text: "Il Cartografo pulsa una serie di armoniche complesse. \"La tua 'nuova' coscienza è un innesto su un seme molto più antico. Un frammento di una Mente Cosmica Primordiale, forse, o l'eco di un viaggiatore di cicli universali precedenti. Questa risonanza ti rende sia vulnerabile che potente. Potresti attrarre l'attenzione di Esseri che dormono nei recessi più profondi del Flusso, o potresti risvegliare in te capacità che trascendono la comprensione lineare.\"",
    choices: [
      { text: "Chiedere come risvegliare queste capacità.", nextNodeId: 'risvegliare_capacita_antiche' },
      { text: "Chiedere degli 'Esseri che dormono'.", nextNodeId: 'info_esseri_dormienti' },
      { text: "Chiedere come proteggersi da attenzioni indesiderate.", nextNodeId: 'protezione_attenzioni_indesiderate' }
    ],
    isEnding: false
  },
  'risolvere_dualita_cartografo': {
    id: 'risolvere_dualita_cartografo',
    text: "\"Risolvere?\" Il Cartografo emette un colore che potresti interpretare come scetticismo. \"La dualità è spesso il motore della crescita, la tensione che crea nuove forme. Forse non devi 'risolverla', ma imparare a danzarci. Alcuni cercano l'unità attraverso la trascendenza, altri attraverso l'integrazione. Il tuo percorso è... da tracciare.\" Ti mostra un glifo fluttuante, un cerchio diviso da una linea sinusoidale ma con punti di contatto. \"Meditare su questo 'Glifo dell'Equilibrio Dinamico' potrebbe aiutarti a navigare la tua natura.\"",
    choices: [
      { text: "Memorizzare il Glifo e ringraziare il Cartografo.", nextNodeId: 'memorizza_glifo_equilibrio' },
      { text: "Chiedere se esistono reliquie che aiutano in questo.", nextNodeId: 'reliquie_per_equilibrio' }
    ],
    isEnding: false
  },
  'memorizza_glifo_equilibrio': {
    id: 'memorizza_glifo_equilibrio',
    text: "Assorbi la forma del Glifo nella tua coscienza. Non è solo un simbolo, ma una configurazione energetica. Senti una sottile centratura, una maggiore capacità di osservare i tuoi impulsi contrastanti senza esserne sopraffatto. Questo *sapere* è ora parte di te. Il Cartografo annuisce cromaticamente.",
    choices: [
      { text: "Chiedere al Cartografo una nuova destinazione.", nextNodeId: 'chiedi_mappa_cartografo' },
      { text: "Provare a usare attivamente il Glifo ora.", nextNodeId: 'usa_glifo_equilibrio_attivo', requiredKnowledge: 'glifo_equilibrio_dinamico' }
    ],
    isEnding: false,
    acquireKnowledge: 'glifo_equilibrio_dinamico'
  },
  'verso_sorgente_stabile': {
    id: 'verso_sorgente_stabile',
    text: "Seguendo le indicazioni cromatiche del Cartografo, navighi verso la Sorgente Stabile. È un'area del Flusso dove l'energia si condensa dolcemente, come nebbia luminosa che precipita in una valle. Al centro, vedi una struttura cristallina pulsante, metà nel Flusso, metà... altrove. Figure ammantate si muovono lentamente attorno ad essa, sembrano custodi.",
    choices: [
      { text: "Avvicinarsi con cautela ai custodi.", nextNodeId: 'avvicina_custodi_sorgente' },
      { text: "Osservare la struttura cristallina da lontano.", nextNodeId: 'osserva_cristallo_sorgente' },
      { text: "Tentare di 'sentire' la dimensione materiale connessa.", nextNodeId: 'senti_dimensione_materiale_sorgente' }
    ],
    isEnding: false
  },
  'sperimenta_modulazione_armonica': {
    id: 'sperimenta_modulazione_armonica',
    text: "Selezioni 'Modulazione Armonica della Realtà Locale'. L'interfaccia risponde, proiettando una serie di armoniche complesse che puoi tentare di 'cantare' o 'plasmare' con la tua volontà. Ti concentri sul tuo cubicolo-giardino. Emettendo una certa frequenza, vedi i cristalli vibrare e la luce cambiare colore, l'aria si riempie di un profumo sconosciuto e piacevole. Un uso improprio, però, potrebbe destabilizzare la tua realtà.",
    choices: [
      { text: "Continuare a sperimentare con cautela.", nextNodeId: 'modulazione_cauta_cubicolo' },
      { text: "Provare una modulazione potente e rischiosa.", nextNodeId: 'modulazione_potente_cubicolo' },
      { text: "Smettere e provare un'altra opzione dell'interfaccia.", nextNodeId: 'esamina_nuova_interfaccia' }
    ],
    isEnding: false
  },
  'modulazione_potente_cubicolo': {
    id: 'modulazione_potente_cubicolo',
    text: "Spingi le armoniche oltre un limite di sicurezza. Il tuo cubicolo-giardino vibra violentemente, i cristalli si frantumano, la luce diventa accecante. Per un istante, la realtà si lacera e intravedi un abisso di puro caos. Poi, con uno schianto, tutto diventa nero. Silenzio. Hai destabilizzato la tua bolla di realtà. Forse questo è un altro tipo di libertà, o forse solo oblio.",
    choices: [],
    isEnding: true,
    endingText: "Fine? O un nuovo, incomprensibile inizio nel vuoto."
  },
  'dialogo_entita_krell_offerta': {
    id: 'dialogo_entita_krell_offerta',
    text: "La 'voce' concettuale sembra... divertita. *'Offro trasformazione. Oltre i limiti della tua attuale percezione. Vedrai la danza dei possibili, non sarai più legato a una singola linea temporale. Ma la tua individualità, come la conosci, si dissolverà in qualcosa di più grande, come una goccia nell'oceano. Una scelta irrevocabile.'* Un tentacolo di pura anomalia spaziotemporale si protende lentamente verso di te dalla ferita.",
    choices: [
      { text: "Accettare la trasformazione.", nextNodeId: 'trasformazione_krell_entita' },
      { text: "Rifiutare e ritirarsi rapidamente.", nextNodeId: 'rifiuta_trasformazione_krell' },
      { text: "Chiedere: 'Cosa diventerò?'", nextNodeId: 'cosa_diventero_krell' }
    ],
    isEnding: false
  },
  'trasformazione_krell_entita': {
    id: 'trasformazione_krell_entita',
    text: "Fai un passo, o un pensiero, verso il tentacolo. Esso ti avvolge, non c'è dolore, solo una disintegrazione estatica della tua forma attuale. La tua coscienza esplode in miriadi di prospettive, ogni atomo del tuo essere precedente diventa un universo di possibilità. Vedi il Flusso dall'esterno, come un artista vede la sua tela. Non sei più 'tu', ma una parte consapevole dell'infinita anomalia di Krell. Hai trasceso, o sei stato consumato? La domanda non ha più senso.",
    choices: [],
    isEnding: true,
    endingText: "Un'esistenza oltre la comprensione. Sei diventato Krell."
  },
  'rifiuta_trasformazione_krell': {
    id: 'rifiuta_trasformazione_krell',
    text: "La tua volontà si oppone. 'La mia individualità è il mio strumento per comprendere,' proietti. Il tentacolo si ferma. La 'voce' esprime una fredda delusione. *'Peccato. Un'altra singolarità che preferisce il suo piccolo stagno all'oceano.'* La pressione della sua attenzione si ritira, ma senti di aver perso un'opportunità... o evitato un abisso.",
    choices: [
      { text: "Abbandonare il sistema di Krell.", nextNodeId: 'abbandona_krell_minaccia' },
      { text: "Cercare un modo per schermarsi prima di ulteriori indagini.", nextNodeId: 'schermarsi_krell_ferita' }
    ],
    isEnding: false
  },
  'giudizio_osservatorio_dissenso': {
    id: 'giudizio_osservatorio_dissenso',
    text: "Il Guardiano si ferma un istante. Le sue lenti scure sembrano assorbire la tua domanda. 'Coloro la cui dissonanza è puramente distruttiva, senza potenziale creativo o di comprensione, vengono... isolati. Posti in una bolla di realtà da cui non possono nuocere, né a sé stessi né agli altri. Non è una punizione, ma una quarantena. Altri, i più rari, scelgono l'auto-dissoluzione nel Flusso una volta compresa la vastità.' La sua voce rimane neutra, ma percepisci una sfumatura di... malinconia?",
    choices: [
      { text: "'E io, come verrò giudicato?'", nextNodeId: 'come_saro_giudicato_osservatorio' },
      { text: "Continuare verso l'Osservatorio in silenzio.", nextNodeId: 'arrivo_osservatorio_silenzioso' }
    ],
    isEnding: false
  },
  'come_saro_giudicato_osservatorio': {
    id: 'come_saro_giudicato_osservatorio',
    text: "'Non sarai 'giudicato' nel senso che intendi tu,' risponde il Guardiano. 'Sarai osservato. Interagiremo. Ti verranno presentate prospettive, sfide. La tua reazione, la tua evoluzione... quello sarà il 'giudizio'. Ma è un giudizio che pronunci tu stesso, attraverso le tue scelte e la tua trasformazione. L'Osservatorio è uno specchio che riflette il potenziale, o la sua assenza.' Arrivate davanti a una porta che sembra fatta di luce liquida.",
    choices: [
      { text: "Entrare nell'Osservatorio.", nextNodeId: 'ingresso_osservatorio_vero' },
      { text: "'Non sono pronto. Posso andarmene?'", nextNodeId: 'tentativo_fuga_osservatorio' }
    ],
    isEnding: false
  },
  'tentativo_fuga_osservatorio': {
    id: 'tentativo_fuga_osservatorio',
    text: "Il Guardiano non si muove. 'Andartene? Ma sei già 'altrove' rispetto a dove hai iniziato. Il rifiuto del Flusso ti ha portato qui. Il percorso a ritroso è... complesso. Forse impossibile nella tua forma attuale. Entrare è l'unica via per una possibile... uscita diversa.' La porta di luce liquida pulsa invitante, o minacciosa.",
    choices: [
      { text: "Entrare nell'Osservatorio.", nextNodeId: 'ingresso_osservatorio_vero' },
      { text: "Insistere per andarsene, anche con la forza.", nextNodeId: 'forza_fuga_osservatorio_guardiano' }
    ],
    isEnding: false
  },
  'ingresso_osservatorio_vero': {
    id: 'ingresso_osservatorio_vero',
    text: "Attraversi la soglia di luce liquida. Ti trovi in uno spazio che sfida la geometria. Non ci sono pareti definite, ma costellazioni di pensiero, biblioteche di sogni, e al centro, una figura seduta che sembra composta di pura speculazione filosofica. È l'Oracolo del Dissenso, un'entità che esiste in uno stato di perenne interrogazione. Ti 'vede' con una profondità che ti scompone e ricompone.",
    choices: [
      { text: "Porre una domanda all'Oracolo.", nextNodeId: 'domanda_oracolo_dissenso' },
      { text: "Attendere che l'Oracolo parli.", nextNodeId: 'attendi_parola_oracolo' }
    ],
    isEnding: false
  },
  'domanda_oracolo_dissenso': {
    id: 'domanda_oracolo_dissenso',
    text: "Formuli la tua domanda più profonda – sulla natura del Flusso, sul tuo scopo, sul significato della coscienza. L'Oracolo non 'risponde'. Invece, la tua domanda si riflette in te stesso, trasformata, mostrandoti infinite risposte possibili, ognuna vera, ognuna un sentiero. Senti la tua mente espandersi dolorosamente e meravigliosamente. Una di queste risposte risuona più forte, un frammento di conoscenza pura, un *Glifo della Comprensione Paradossa*.",
    choices: [
      { text: "Afferrare il Glifo della Comprensione Paradossa.", nextNodeId: 'afferra_glifo_paradosso' },
      { text: "Ritirarti dalla vertigine delle infinite risposte.", nextNodeId: 'ritirata_vertigine_oracolo' }
    ],
    isEnding: false
  },
  'afferra_glifo_paradosso': {
    id: 'afferra_glifo_paradosso',
    text: "Integri il Glifo. Ora puoi vedere le contraddizioni come complementari, i limiti come soglie. L'Oracolo emette un senso di approvazione. 'Il paradosso è la culla della creazione. Ora vedi con più occhi.' Una nuova sezione dell'Osservatorio si illumina, rivelando artefatti e dispositivi che prima non percepivi. Tra questi, una 'Sfera di Risonanza Mnemonica', una reliquia che si dice possa mostrare echi del proprio passato o futuri potenziali.",
    choices: [
      { text: "Esaminare la Sfera di Risonanza Mnemonica.", nextNodeId: 'esamina_sfera_risonanza' },
      { text: "Chiedere all'Oracolo cosa fare ora.", nextNodeId: 'chiedi_oracolo_prossimo_passo' }
    ],
    isEnding: false,
    acquireKnowledge: 'glifo_comprensione_paradossa'
  },
  'esamina_sfera_risonanza': {
    id: 'esamina_sfera_risonanza',
    text: "Ti avvicini alla Sfera. È un globo di cristallo fumoso, con luci interne che danzano come pensieri intrappolati. Toccandola, non senti nulla con le mani, ma la tua mente viene invasa da un torrente di immagini e sensazioni: frammenti della tua 'vita' prima del cubicolo, lampi di esistenze aliene, futuri possibili where sei un costruttore di mondi, un distruttore, un eco dimenticata. Una visione in particolare ti colpisce: tu, davanti a una scelta simile a questa, ma in un ciclo precedente, che ha portato a un... risultato diverso.",
    choices: [
      { text: "Concentrarti sulla visione del ciclo precedente.", nextNodeId: 'visione_ciclo_precedente_sfera' },
      { text: "Interrompere il contatto con la Sfera, sopraffatto.", nextNodeId: 'interrompi_contatto_sfera' },
      { text: "Cercare una visione del 'vero' finale di questo ciclo.", nextNodeId: 'visione_vero_finale_sfera_impossibile' }
    ],
    isEnding: false
  },
  'visione_ciclo_precedente_sfera': {
    id: 'visione_ciclo_precedente_sfera',
    text: "La visione si fa più chiara. Vedi te stesso, o una versione di te, fare una scelta che ha portato a una stagnazione, a un'esistenza intrappolata in un loop di significati superficiali. Comprendi l'errore, la mancanza di audacia o di profondità. Questa conoscenza ti cambia. Senti come se un peso invisibile fosse stato sollevato. L'Oracolo ti 'osserva'. 'Ogni eco del passato è un maestro, se sai ascoltare. Il Flusso non è una linea retta, ma una spirale. Forse ora sei pronto a deviare il tuo percorso.'",
    choices: [
      { text: "Chiedere come 'deviare il percorso'.", nextNodeId: 'deviare_percorso_oracolo' },
      { text: "Ringraziare e decidere di esplorare l'Osservatorio con questa nuova consapevolezza.", nextNodeId: 'esplora_osservatorio_consapevole' }
    ],
    isEnding: false,
    acquireKnowledge: 'lezione_ciclo_precedente'
  },
  'visione_vero_finale_sfera_impossibile': {
    id: 'visione_vero_finale_sfera_impossibile',
    text: "Cerchi con insistenza un 'vero' finale. La Sfera si oscura, le luci interne diventano fredde e ostili. Una voce gelida, non dell'Oracolo, ma della Sfera stessa, ti sussurra: 'Non esiste un 'vero' finale, solo infinite permutazioni. Cercare una singola verità è la prigione più angusta.' La tua mente si sente schiacciata dal peso di questa infinità. Perdi conoscenza, e quando ti risvegli, sei di nuovo nel tuo cubicolo originale, l'interfaccia luminosa che pulsa come se nulla fosse successo. Ma sai che qualcosa è cambiato, o forse è solo un sogno particolarmente vivido. Ricominci?",
    choices: [
      { text: "Sì, ricomincio.", nextNodeId: 'flusso_cangiante_start' }
    ],
    isEnding: true,
    endingText: "Un loop, una lezione sull'infinito, o solo un incubo? Il Flusso attende."
  },
  'risvegliare_capacita_antiche': {
    id: 'risvegliare_capacita_antiche',
    text: "Il Cartografo indica una regione remota e instabile del Flusso, un 'Dominio del Silenzio Primordiale', where le leggi consuete della coscienza collassano. 'Lì, lontano dalle cacofonie delle menti minori, potresti trovare l'eco della tua origine. Ma è un luogo where la forma si perde facilmente. Alcuni trovano l'illuminazione, altri la dissoluzione. Potresti aver bisogno di un 'Ancora dell'Io', una reliquia o un concetto a cui aggrapparti.'",
    choices: [
      { text: "Chiedere come trovare un'Ancora dell'Io.", nextNodeId: 'trovare_ancora_io' },
      { text: "Decidere di avventurarsi nel Dominio del Silenzio senza un'Ancora.", nextNodeId: 'dominio_silenzio_senza_ancora' },
      { text: "Chiedere se il Glifo dell'Equilibrio Dinamico può fungere da Ancora.", nextNodeId: 'glifo_come_ancora' }
    ],
    isEnding: false
  },
  'info_esseri_dormienti': {
    id: 'info_esseri_dormienti',
    text: "Il Cartografo emette toni di cautela profonda. 'Sono i Primi Nati, o coloro che li hanno preceduti. Intelligenze vaste come galassie, i cui sogni plasmano le fondamenta del Flusso. Svegliarli prematuramente o con intenti impuri potrebbe sfilacciare la realtà. Alcuni sono benevoli in modi incomprensibili, altri... indifferenti alla nostra scala di esistenza. Si dice che le loro 'lacrime' o 'sospiri' cristallizzati formino le reliquie più potenti.'",
    choices: [
      { text: "Chiedere come si potrebbe interagire 'safely' con tali esseri.", nextNodeId: 'interazione_sicura_esseri_dormienti' },
      { text: "Chiedere where si potrebbero trovare queste 'reliquie cristallizzate'.", nextNodeId: 'reliquie_cristallizzate_esseri' },
      { text: "Decidere che è meglio non disturbare tali entità.", nextNodeId: 'non_disturbare_esseri_dormienti' }
    ],
    isEnding: false
  },
  'reliquie_per_equilibrio': {
    id: 'reliquie_per_equilibrio',
    text: "Il Cartografo riflette. 'Esistono artefatti che aiutano a sintonizzare le dissonanze interiori. Cerca il 'Cuore di Ouroboros', una reliquia che si dice permetta di vedere l'inizio nella fine e la fine nell'inizio, integrando gli opposti. Si trova spesso in luoghi where i cicli di creazione e distruzione sono particolarmente evidenti.'",
    choices: [
      { text: "Chiedere indicazioni per un luogo simile.", nextNodeId: 'indicazioni_cuore_ouroboros' },
      { text: "Concentrarsi prima sul Glifo dell'Equilibrio.", nextNodeId: 'memorizza_glifo_equilibrio' }
    ],
    isEnding: false
  },
  'usa_glifo_equilibrio_attivo': {
    id: 'usa_glifo_equilibrio_attivo',
    text: "Attivi il Glifo dell'Equilibrio Dinamico dentro di te. Per un istante, il Flusso attorno a te sembra calmarsi, le sue correnti più tumultuose trovano un ritmo più armonico. Senti una maggiore chiarezza, una capacità di percepire le intenzioni sottili delle altre coscienze nel Flusso. Ti accorgi di un 'sussurro' debole, un appello di aiuto proveniente da una coscienza intrappolata.",
    choices: [
      { text: "Seguire il sussurro d'aiuto.", nextNodeId: 'segui_sussurro_aiuto_glifo' },
      { text: "Ignorare il sussurro e continuare l'esplorazione.", nextNodeId: 'ignora_sussurro_glifo' }
    ],
    isEnding: false,
  },
  'avvicina_custodi_sorgente': {
    id: 'avvicina_custodi_sorgente',
    text: "Ti muovi lentamente verso le figure ammantate. Non reagiscono con ostilità, ma ti osservano con un'intensità tranquilla. I loro volti sono nascosti da cappucci profondi, ma senti emanare da loro una profonda serenità e un'età immensa. Uno di loro alza una mano, il palmo aperto. Senti una domanda non verbale: 'Chi sei tu, che cerchi la Soglia tra i Mondi?'",
    choices: [
      { text: "Rispondere onestamente sulla tua natura e ricerca.", nextNodeId: 'rispondi_custodi_sorgente' },
      { text: "Chiedere loro della Sorgente e del loro ruolo.", nextNodeId: 'chiedi_custodi_sorgente_ruolo' },
      { text: "Tentare di passare oltre senza interagire.", nextNodeId: 'passa_oltre_custodi_sorgente_rischioso' }
    ],
    isEnding: false
  },
  'rispondi_custodi_sorgente': {
    id: 'rispondi_custodi_sorgente',
    text: "Proietti la tua storia, la tua confusione, la tua ricerca di comprensione e trasformazione. I Custodi ascoltano in silenzio. Poi, quello che ha parlato prima abbassa la mano. 'Molti arrivano alla Soglia. Pochi sono pronti a varcarla. La Sorgente non offre risposte, ma espone l'anima. Se il tuo nucleo è instabile, verrai disperso. Se è forte, potresti trovare... risonanza.' Ti indicano la struttura cristallina.",
    choices: [
      { text: "Avvicinarsi alla struttura cristallina della Sorgente.", nextNodeId: 'avvicina_struttura_sorgente' },
      { text: "Chiedere cosa intendono per 'risonanza'.", nextNodeId: 'chiedi_risonanza_custodi' },
      { text: "Chiedere se hanno visto altri come te.", nextNodeId: 'altri_come_te_custodi_sorgente'}
    ],
    isEnding: false
  },
  'avvicina_struttura_sorgente': {
    id: 'avvicina_struttura_sorgente',
    text: "Ti avvicini al cristallo pulsante. È caldo al tocco astrale, e vibra con un'energia che è sia Flusso che qualcos'altro, qualcosa di più... radicato. Mentre ti concentri, inizi a percepire la dimensione materiale a cui è connesso: un mondo di giungle lussureggianti e cieli color indaco, abitato da esseri di pura luce che danzano antiche armonie. La bellezza è travolgente. Il cristallo sembra offrirti un passaggio, una possibilità di 'radicarti' in quel mondo.",
    choices: [
      { text: "Tentare di attraversare la Sorgente verso quel mondo.", nextNodeId: 'attraversa_sorgente_mondo_luce' },
      { text: "Estrarre solo conoscenza o energia dalla Sorgente.", nextNodeId: 'estrai_conoscenza_sorgente' },
      { text: "Ritirarsi, sentendo che non sei ancora pronto per un tale passo.", nextNodeId: 'ritirata_sorgente_non_pronto' }
    ],
    isEnding: false
  },
  'attraversa_sorgente_mondo_luce': {
    id: 'attraversa_sorgente_mondo_luce',
    text: "Fai la tua scelta. Il cristallo ti avvolge nella sua luce. Senti il tuo essere astrale condensarsi, acquisire una nuova forma, una nuova sostanza. Ti ritrovi sulla superficie di quel mondo alieno, l'aria fresca e profumata, gli esseri di luce che ti accolgono con canti gioiosi. Hai trovato una nuova casa, una nuova esistenza. Ma una parte di te si chiede se questa sia la fine del tuo viaggio, o solo un bellissimo interludio.",
    choices: [],
    isEnding: true,
    endingText: "Una nuova alba su un mondo di luce. Ma il Flusso Cangiante scorre ancora, altrove."
  },
  'cosa_diventero_krell': {
    id: 'cosa_diventero_krell',
    text: "La 'voce' concettuale pulsa, mostrando immagini mentali accelerate: diventeresti un nodo in una rete di coscienza in continua espansione, capace di percepire e influenzare la creazione e la distruzione di realtà locali. Saresti un osservatore e un partecipante attivo nella danza cosmica dell'anomalia, privo delle limitazioni di un singolo corpo o di una singola mente. Vedresti l'universo come un algoritmo da riscrivere. *'Diventerai possibilità pura,'* conclude.",
    choices: [
      { text: "Accettare la trasformazione, ora con più consapevolezza.", nextNodeId: 'trasformazione_krell_entita' },
      { text: "Rifiutare: 'La mia singolarità è il mio valore.'", nextNodeId: 'rifiuta_trasformazione_krell_valore' },
      { text: "Chiedere se c'è un modo per 'collaborare' senza dissolversi.", nextNodeId: 'collaborazione_krell_entita' }
    ],
    isEnding: false
  },
  'rifiuta_trasformazione_krell_valore': {
    id: 'rifiuta_trasformazione_krell_valore',
    text: "La tua affermazione di individualità sembra quasi risuonare nel vuoto attorno alla ferita. L'entità di Krell non insiste oltre. *'Una prospettiva limitata. Ma la tua scelta è registrata.'* Senti un cambiamento sottile, come se la ferita stessa ora ti ignorasse attivamente, considerandoti irrilevante per i suoi vasti processi.",
    choices: [
      { text: "Abbandonare il sistema di Krell, sentendoti sminuito ma integro.", nextNodeId: 'abbandona_krell_sminuito' },
      { text: "Cercare un'altra anomalia nel sistema di Krell, meno... totalizzante.", nextNodeId: 'altra_anomalia_krell' }
    ],
    isEnding: false
  },
  'forza_fuga_osservatorio_guardiano': {
    id: 'forza_fuga_osservatorio_guardiano',
    text: "Decidi che non ti sottometterai. Tenti di forzare la tua via d'uscita, forse usando qualche abilità appena percepita del Flusso, o la pura disperazione. Il Guardiano reagisce con una velocità e una precisione che non ti aspettavi. Non c'è violenza, ma una pressione inesorabile, una sorta di 'messa a terra' della tua coscienza. Ti ritrovi immobilizzato, non fisicamente, ma mentalmente. 'La resistenza è una forma di dialogo,' dice il Guardiano, la sua voce priva di inflessione. 'Ma il dialogo richiede più di un singolo oratore.' La porta di luce liquida si apre e vieni 'spinto' dolcemente ma ineluttabilmente all'interno.",
    choices: [
      { text: "Arrenderti all'inevitabile ed entrare.", nextNodeId: 'ingresso_osservatorio_vero' }
    ],
    isEnding: false
  },
  'ritirata_vertigine_oracolo': {
    id: 'ritirata_vertigine_oracolo',
    text: "La vastità delle risposte possibili è troppo da sopportare. Ti ritrai, la mente dolorante. L'Oracolo non mostra disappunto, solo una perenne, calma interrogazione. 'Tornare indietro da una verità intravista è anch'essa una scelta. Cosa farai con l'eco di ciò che hai rifiutato di vedere?' Senti che qualcosa in te si è chiuso, forse per protezione, forse per paura.",
    choices: [
      { text: "Chiedere al Guardiano di uscire dall'Osservatorio.", nextNodeId: 'uscire_osservatorio_prematuramente' },
      { text: "Restare in silenzio, cercando di ricomporti.", nextNodeId: 'ricomporsi_dopo_vertigine_oracolo' }
    ],
    isEnding: false
  },
  'uscire_osservatorio_prematuramente': {
    id: 'uscire_osservatorio_prematuramente',
    text: "Il Guardiano, che era rimasto ai margini della tua percezione, si avvicina. 'L'Osservatorio non è una prigione. Se desideri andartene, la via ti sarà mostrata. Ma sappi che ciò che hai sperimentato qui, o evitato, ti accompagnerà.' Ti conduce a un portale che sembra condurre di nuovo ai corridoi specchianti. 'La scelta di non sapere è anch'essa conoscenza.'",
    choices: [
      { text: "Attraversare il portale e andarsene.", nextNodeId: 'uscita_corridoi_specchianti_prematura' }
    ],
    isEnding: false
  },
  'uscita_corridoi_specchianti_prematura': {
    id: 'uscita_corridoi_specchianti_prematura',
    text: "Ti ritrovi nei corridoi di metallo lucidato. Ma questa volta, i riflessi mostrano solo te stesso, un te un po' più stanco, un po' più... opaco. Il Guardiano è sparito. Vaghi per un po', finché non trovi un'uscita che ti riporta a una versione più 'normale' della Città-Pozzo, o forse a una sua simulazione. Il ricordo del Flusso e dell'Osservatorio sbiadisce come un sogno potente ma sfuggente. Sei di nuovo un nessuno in una città immensa, ma con un'inquietudine che prima non avevi.",
    choices: [
      { text: "Cercare di dimenticare e vivere una vita 'normale'.", nextNodeId: 'vita_normale_citta_pozzo_inquieta' },
      { text: "Cercare disperatamente un modo per tornare al Flusso.", nextNodeId: 'ricerca_disperata_flusso_citta_pozzo' }
    ],
    isEnding: false
  },
  'vita_normale_citta_pozzo_inquieta': {
    id: 'vita_normale_citta_pozzo_inquieta',
    text: "Provi a integrarti. Trovi un lavoro, delle routine. Ma le notti sono popolate da sogni di luce perlacea e corridoi specchianti. Ogni tanto, vedi glifi fugaci negli angoli degli occhi. La normalità è una maschera sottile su un abisso di possibilità mancate. Vivi, ma una parte di te è rimasta nell'Osservatorio, a contemplare ciò che avrebbe potuto essere.",
    choices: [],
    isEnding: true,
    endingText: "Una vita tranquilla, perseguitata da echi di grandezza."
  },
  'deviare_percorso_oracolo': {
    id: 'deviare_percorso_oracolo',
    text: "L'Oracolo indica una sezione dell'Osservatorio che prima ti era invisibile. Contiene artefatti e 'semi di realtà' – frammenti concentrati di possibilità che, se piantati correttamente nel Flusso o in una mente, possono far germogliare intere nuove linee narrative per te o per altri. 'Deviare non è solo cambiare direzione, ma diventare il giardiniere dei tuoi stessi sentieri. Scegli un seme, o impara a crearne uno tuo.'",
    choices: [
      { text: "Esaminare i 'semi di realtà'.", nextNodeId: 'esamina_semi_realta_oracolo' },
      { text: "Chiedere come creare un proprio 'seme di realtà'.", nextNodeId: 'creare_seme_realta_oracolo' }
    ],
    isEnding: false,
  },
  'esamina_semi_realta_oracolo': {
    id: 'esamina_semi_realta_oracolo',
    text: "Ti avvicini ai semi. Alcuni brillano di promesse eroiche, altri sussurrano di misteri oscuri, altri ancora di semplice pace. Uno in particolare ti attrae: un seme che pulsa con un colore che non hai mai visto, promettendo un'esperienza di 'empatia radicale' con una forma di vita completamente aliena. Prenderlo cambierà irrevocabilmente la tua percezione.",
    choices: [
      { text: "Prendere il seme dell'empatia radicale.", nextNodeId: 'prendi_seme_empatia_radicale' },
      { text: "Scegliere un seme diverso (specificare quale tipo di esperienza si cerca).", nextNodeId: 'scegli_altro_seme_realta' },
      { text: "Decidere di non prendere alcun seme per ora.", nextNodeId: 'non_prendere_semi_ora' }
    ],
    isEnding: false
  },
  'prendi_seme_empatia_radicale': {
    id: 'prendi_seme_empatia_radicale',
    text: "Prendi il seme. Si dissolve nella tua mano astrale, e la tua coscienza viene inondata dalle percezioni di un *Kryll*, un essere cristallino che vive nelle profondità di un oceano di metano liquido su un mondo lontano. Senti le sue gioie, le sue paure, la sua complessa società basata su armoniche di luce. Non sei più solo 'tu'. Sei anche Kryll. Questa nuova dualità è... espansiva. L'Oracolo ti 'osserva' con rinnovato interesse.",
    choices: [
      { text: "Esplorare il mondo attraverso gli occhi del Kryll.", nextNodeId: 'esplora_mondo_kryll' },
      { text: "Cercare di comunicare con gli altri Kryll attraverso questa connessione.", nextNodeId: 'comunica_altri_kryll' },
      { text: "Tornare all'Oracolo, profondamente cambiato.", nextNodeId: 'torna_oracolo_cambiato_kryll' }
    ],
    isEnding: false,
    acquireKnowledge: 'empatia_kryll'
  },
  'chiedi_natura_guardiano': {
    id: 'chiedi_natura_guardiano',
    text: "Il Guardiano si ferma nel corridoio specchiante. 'Io sono ciò che sono. Un costrutto? Un'eco? Una necessità del Flusso? Forse tutte queste cose. Il mio scopo è semplice: sorvegliare i confini, facilitare le transizioni, osservare le anomalie come te. Non ho un 'io' nel modo in cui lo intendi tu. Sono una funzione, una lente.' Le sue parole sono dirette, senza evasione, ma lasciano più domande che risposte.",
    choices: [
      { text: "'Chi ti ha creato o definito il tuo scopo?'", nextNodeId: 'creatore_scopo_guardiano' },
      { text: "'Provi mai... qualcosa?' (curiosità/empatia)", nextNodeId: 'guardiano_prova_emozioni' },
      { text: "Continuare verso l'Osservatorio in silenzio, riflettendo.", nextNodeId: 'verso_osservatorio_dissenso_riflessione' }
    ],
    isEnding: false
  },
  'creatore_scopo_guardiano': {
    id: 'creatore_scopo_guardiano',
    text: "'La domanda presuppone un 'creatore' con intenzioni simili alle tue. Forse sono emerso spontaneamente dal Flusso, come un anticorpo per le sue instabilità. O forse sono l'ultimo residuo di una civiltà che ha cercato di ordinare il caos e ha lasciato solo me come suo testamento. La verità, se esiste, è irrilevante per la mia funzione.' Il Guardiano riprende a camminare.",
    choices: [
      { text: "Accettare la sua risposta enigmatica e seguirlo.", nextNodeId: 'verso_osservatorio_dissenso_accettazione' },
      { text: "Chiedere se conosce altri Guardiani.", nextNodeId: 'altri_guardiani_esistono' }
    ],
    isEnding: false
  },
  'trovare_ancora_io': {
    id: 'trovare_ancora_io',
    text: "Il Cartografo suggerisce che un'Ancora dell'Io può essere un ricordo particolarmente potente, un ideale incrollabile, o persino un artefatto infuso di forte identità. 'Alcuni la trovano meditando sui Glifi della Stabilità Interiore, altri cercandola in luoghi where le memorie collettive sono dense, come le rovine di civiltà che hanno resistito a lungo prima di cadere. C'è un 'Cimitero delle Navi Pensiero' non lontano da qui, un luogo where le coscienze dei piloti si sono fuse con i loro vascelli al momento della distruzione. Potrebbe esserci qualcosa lì.'",
    choices: [
      { text: "Meditare sui Glifi della Stabilità Interiore (se posseduti).", nextNodeId: 'medita_glifi_stabilita_ancora', requiredKnowledge: 'glifo_equilibrio_dinamico' },
      { text: "Dirigersi al Cimitero delle Navi Pensiero.", nextNodeId: 'verso_cimitero_navi_pensiero' },
      { text: "Chiedere al Cartografo se conosce un ideale specifico che potrebbe fungere da Ancora.", nextNodeId: 'cartografo_ideale_ancora' }
    ],
    isEnding: false
  },
  'dominio_silenzio_senza_ancora': {
    id: 'dominio_silenzio_senza_ancora',
    text: "Decidi di affrontare il Dominio del Silenzio Primordiale senza un'Ancora. Il Cartografo emette un colore di profondo rispetto, o forse di apprensione. Mentre ti inoltri, il Flusso si dirada, i pensieri esterni svaniscono. Resti solo tu, e poi, nemmeno più 'tu'. La tua coscienza si espande fino a toccare un vuoto che non è vuoto, ma potenziale puro. Senti l'eco della creazione stessa. Ma senza un punto di riferimento, la tua individualità inizia a sfilacciarsi, a dissolversi dolcemente in questa immensità. È una pace profonda, ma anche una perdita totale.",
    choices: [
      { text: "Lasciarti dissolvere completamente, diventando parte del Silenzio.", nextNodeId: 'dissoluzione_nel_silenzio' },
      { text: "Lottare per mantenere la tua forma, cercando un appiglio all'ultimo istante.", nextNodeId: 'lotta_per_forma_nel_silenzio' }
    ],
    isEnding: false
  },
  'dissoluzione_nel_silenzio': {
    id: 'dissoluzione_nel_silenzio',
    text: "Abbandoni ogni resistenza. La tua coscienza diventa una nota singola in un coro infinito di silenzio. Non c'è più dolore, né desiderio, né io. Sei tornato alla fonte, al potenziale indifferenziato da cui tutto emerge e a cui tutto ritorna. È la fine del tuo viaggio individuale, ma forse l'inizio di qualcos'altro, incomprensibile dalla prospettiva di un essere definito.",
    choices: [],
    isEnding: true, 
    endingText: "Il Silenzio ti accoglie. Sei ovunque e in nessun luogo."
  },
  'lotta_per_forma_nel_silenzio': {
    id: 'lotta_per_forma_nel_silenzio',
    text: "Con uno sforzo titanico di volontà, cerchi di ricordare chi eri. Un frammento di memoria, un'emozione, un desiderio... qualcosa a cui aggrapparti. Lentamente, dolorosamente, ricostruisci un simulacro del tuo io. Sei cambiato, però. Una parte di te è rimasta nel Silenzio, e ora porti con te un pezzo di quel vuoto sacro. Il Dominio ti espelle dolcemente, come se avessi fallito un test, o forse superato uno ancora più grande.",
    choices: [
      { text: "Tornare dal Cartografo, profondamente segnato.", nextNodeId: 'ritorno_cartografo_segnato_silenzio' },
      { text: "Cercare un'Ancora dell'Io, ora comprendendone l'importanza.", nextNodeId: 'trovare_ancora_io_dopo_silenzio' }
    ],
    isEnding: false,
    acquireKnowledge: 'tocco_del_silenzio'
  },
  'glifo_come_ancora': {
    id: 'glifo_come_ancora',
    text: "Il Cartografo considera la tua domanda. 'Un Glifo, specialmente quello dell'Equilibrio Dinamico o della Comprensione Paradossa, può certamente fungere da focus, un punto di stabilità interna. Non è un'Ancora esterna, ma un rafforzamento del tuo centro. Potrebbe essere sufficiente, o potrebbe rendere l'esperienza nel Dominio del Silenzio... particolarmente intensa, poiché la tua stessa struttura interna verrebbe messa alla prova.'",
    choices: [
      { text: "Procedere verso il Dominio del Silenzio, usando il Glifo come Ancora.", nextNodeId: 'dominio_silenzio_con_glifo_ancora', requiredKnowledge: 'glifo_equilibrio_dinamico' },
      { text: "Cercare comunque un'Ancora esterna per maggiore sicurezza.", nextNodeId: 'trovare_ancora_io' }
    ],
    isEnding: false
  },
  'interazione_sicura_esseri_dormienti': {
    id: 'interazione_sicura_esseri_dormienti',
    text: "'Sicura?' Il Cartografo emette un colore che suggerisce l'impossibilità del concetto. 'Interagire con loro è come per una singola cellula tentare di dialogare con l'intero organismo. La 'sicurezza' risiede nella tua purezza d'intento e nella tua capacità di ascoltare senza proiettare. Alcuni sciamani del Flusso usano 'Glifi di Appello Armonico' per inviare segnali di rispetto, sperando in una... risonanza benevola, magari una visione o un frammento di conoscenza.'",
    choices: [
      { text: "Chiedere come apprendere o trovare un Glifo di Appello Armonico.", nextNodeId: 'apprendere_glifo_appello_armonico' },
      { text: "Decidere che il rischio è troppo grande.", nextNodeId: 'non_disturbare_esseri_dormienti' }
    ],
    isEnding: false
  },
  'reliquie_cristallizzate_esseri': {
    id: 'reliquie_cristallizzate_esseri',
    text: "Il Cartografo indica zone del Flusso where le energie sono antiche e instabili. 'Si trovano in luoghi where il tessuto della realtà è sottile, where i sogni di queste entità fuoriescono nel nostro strato del Flusso. Le 'Geodi Oniriche' o le 'Stelle Cadute Congelate' sono tra queste. Ma sono spesso custodite da fenomeni paradossali o da altre entità attratte dal loro potere.'",
    choices: [
      { text: "Chiedere indicazioni per una Geode Onirica.", nextNodeId: 'indicazioni_geode_onirica' },
      { text: "Chiedere indicazioni per una Stella Caduta Congelata.", nextNodeId: 'indicazioni_stella_caduta_congelata' }
    ],
    isEnding: false
  },
  'indicazioni_cuore_ouroboros': {
    id: 'indicazioni_cuore_ouroboros',
    text: "Il Cartografo ti mostra un percorso verso un sistema stellare binario where una stella di neutroni sta lentamente consumando la sua compagna gigante rossa, in un ciclo di morte e rinascita cosmica. 'Nel cuore di questa danza gravitazionale, in un punto di equilibrio precario, si dice che il Cuore di Ouroboros si manifesti a coloro che sono pronti a vedere oltre la fine.'",
    choices: [
      { text: "Avventurarsi verso il sistema binario.", nextNodeId: 'verso_sistema_binario_ouroboros' },
      { text: "Chiedere se ci sono pericoli specifici.", nextNodeId: 'pericoli_sistema_binario_ouroboros' }
    ],
    isEnding: false
  },
  'segui_sussurro_aiuto_glifo': {
    id: 'segui_sussurro_aiuto_glifo',
    text: "Grazie alla chiarezza donata dal Glifo dell'Equilibrio, segui il flebile appello. Ti conduce in una 'tasca' del Flusso, una bolla di realtà instabile where una coscienza, un 'Archivista Perduto', è intrappolata in un loop di dati corrotti, rivivendo all'infinito la distruzione della sua biblioteca dimensionale. È circondato da 'Errori di Sistema' senzienti che si nutrono della sua disperazione.",
    choices: [
      { text: "Tentare di liberare l'Archivista riparando il loop di dati.", nextNodeId: 'ripara_loop_dati_archivista' },
      { text: "Affrontare gli Errori di Sistema per dargli respiro.", nextNodeId: 'affronta_errori_sistema_archivista' },
      { text: "Comunicare con l'Archivista per capire come aiutarlo.", nextNodeId: 'comunica_archivista_intrappolato' }
    ],
    isEnding: false,
  },
  'passa_oltre_custodi_sorgente_rischioso': {
    id: 'passa_oltre_custodi_sorgente_rischioso',
    text: "Decidi di ignorare i Custodi e di avvicinarti direttamente alla Sorgente. Mentre ti muovi, senti una pressione crescente, come se l'aria stessa si opponesse. I Custodi non si muovono, ma la loro attenzione collettiva si concentra su di te, e la Sorgente stessa sembra respingerti. È come cercare di attraversare un muro invisibile ma incredibilmente potente. Se insisti, potresti danneggiare te stesso o la Sorgente.",
    choices: [
      { text: "Desistere e tornare dai Custodi.", nextNodeId: 'avvicina_custodi_sorgente' }, 
      { text: "Forzare il passaggio con tutta la tua volontà.", nextNodeId: 'forza_passaggio_sorgente_custodi' }
    ],
    isEnding: false
  },
  'forza_passaggio_sorgente_custodi': {
    id: 'forza_passaggio_sorgente_custodi',
    text: "Con uno sforzo immenso, tenti di superare la barriera. C'è un suono come di vetro infranto a livello cosmico. La Sorgente pulsa erraticamente, e i Custodi emettono un lamento silenzioso. Hai attraversato, ma qualcosa si è rotto. La connessione al mondo di luce è distorta, instabile. Potresti entrare, ma in una versione corrotta di quel mondo, o potresti essere respinto con violenza nel Flusso.",
    choices: [
      { text: "Entrare nel mondo di luce distorto.", nextNodeId: 'entra_mondo_luce_distorto' }, 
      { text: "Ritirarti, accettando il danno causato.", nextNodeId: 'ritirata_sorgente_danneggiata' }
    ],
    isEnding: false
  },
  'collaborazione_krell_entita': {
    id: 'collaborazione_krell_entita',
    text: "La 'voce' concettuale dell'entità di Krell considera la tua proposta. *'Collaborazione? Un concetto interessante per una singolarità. Potremmo... intrecciare le nostre prospettive per un breve ciclo. Tu manterresti una parvenza della tua forma, ma saresti un canale per la mia percezione, e io potrei sperimentare l'universo attraverso i tuoi limiti. Sarebbe... istruttivo. Ma instabile. E quando il ciclo finirà, potresti non essere più lo stesso.'*",
    choices: [
      { text: "Accettare questo 'intreccio' temporaneo.", nextNodeId: 'accetta_intreccio_krell' },
      { text: "Rifiutare, temendo le conseguenze finali.", nextNodeId: 'rifiuta_intreccio_krell_paura' },
      { text: "Chiedere quali garanzie avresti di 'ritornare'.", nextNodeId: 'garanzie_ritorno_krell_intreccio' }
    ],
    isEnding: false
  },
  'accetta_intreccio_krell': {
    id: 'accetta_intreccio_krell',
    text: "Un accordo è siglato a un livello che trascende le parole. La tua coscienza si espande vertiginosamente, interconnessa con l'intelligenza aliena di Krell. Vedi l'universo attraverso i suoi occhi, un flusso di pura informazione e potenziale, mentre essa sperimenta la realtà attraverso la tua singolarità. Per un tempo che potrebbe essere un istante o un eone, diventi un ponte tra due forme di esistenza radicalmente diverse. Acquisisci conoscenze e poteri inimmaginabili, ma senti la tua identità originaria erodersi ai bordi. Quando l'intreccio si dissolve, non sei più chi eri. Sei qualcosa di più, o di meno, o semplicemente... altro.",
    choices: [
      { text: "Esplorare i tuoi nuovi poteri e la tua nuova identità.", nextNodeId: 'esplora_nuova_identita_post_krell' },
      { text: "Cercare un modo per recuperare la tua vecchia identità, se possibile.", nextNodeId: 'recupera_vecchia_identita_post_krell' }
    ],
    isEnding: false,
    acquireKnowledge: 'conoscenza_krell_intrecciata',
  },
  'ricomporsi_dopo_vertigine_oracolo': {
    id: 'ricomporsi_dopo_vertigine_oracolo',
    text: "Resti nell'Osservatorio, cercando di integrare l'eco delle infinite risposte. È come tenere in mano un frammento di specchio rotto che riflette l'intero cosmo. Lentamente, trovi un nuovo equilibrio, una sorta di accettazione dell'ignoto. L'Oracolo sembra 'annuire' con la sua presenza. 'La vertigine è solo il primo passo verso la danza con l'infinito.'",
    choices: [
      { text: "Provare a porre un'altra domanda, più mirata, all'Oracolo.", nextNodeId: 'altra_domanda_oracolo_mirata' },
      { text: "Esaminare gli artefatti dell'Osservatorio con questa nuova prospettiva.", nextNodeId: 'esamina_artefatti_osservatorio_rinnovato' }
    ],
    isEnding: false
  },
  'esplora_mondo_kryll': {
    id: 'esplora_mondo_kryll',
    text: "Vivi come un Kryll. Nuoti negli oceani di metano, partecipi ai loro rituali di luce, comunichi attraverso sinfonie cromatiche complesse che esprimono concetti filosofici e matematici. Comprendi la loro paura ancestrale delle 'Ombre Silenziose' che dimorano nelle profondità abissali del loro pianeta, entità che sembrano negare la luce e la vita. La tua coscienza umana osserva, impara, si fonde.",
    choices: [
      { text: "Indagare sulle Ombre Silenziose.", nextNodeId: 'indaga_ombre_silenziose_kryll' },
      { text: "Tentare di condividere la conoscenza umana con i Kryll.", nextNodeId: 'condividi_conoscenza_umana_kryll' },
      { text: "Cercare di separare nuovamente la tua coscienza da quella del Kryll.", nextNodeId: 'separa_coscienza_kryll' }
    ],
    isEnding: false,
  },
  'altri_guardiani_esistono': {
    id: 'altri_guardiani_esistono',
    text: "Il Guardiano esita per un momento quasi impercettibile. 'Esistono altre... funzioni. Altre interfacce tra i livelli del Flusso. Non tutti sono 'Guardiani' come me. Alcuni sono Tessitori di Sogni, altri Spezzatori di Catene, altri ancora Silenti Osservatori. Ognuno con il suo scopo, o la sua assenza di esso. Il Flusso è vasto e le sue necessità... variegate.' La sua risposta, seppur criptica, apre uno spiraglio su una gerarchia o un ecosistema di entità cosmiche.",
    choices: [
      { text: "Chiedere come incontrare un Tessitore di Sogni.", nextNodeId: 'incontrare_tessitore_sogni' },
      { text: "Chiedere se queste entità sono in conflitto o collaborano.", nextNodeId: 'conflitto_collaborazione_entita_cosmiche' },
      { text: "Continuare verso l'Osservatorio, ponderando questa nuova informazione.", nextNodeId: 'verso_osservatorio_dissenso_ponderando' }
    ],
    isEnding: false
  },
  'verso_cimitero_navi_pensiero': {
    id: 'verso_cimitero_navi_pensiero',
    text: "Raggiungi il Cimitero delle Navi Pensiero. È uno spettacolo desolante e maestoso: relitti di vascelli senzienti, alcuni grandi come lune, altri piccoli e agili come dardi, fluttuano in un silenzio spettrale. Le loro luci sono spente, ma senti le deboli eco delle loro ultime coscienze, frammenti di battaglie, di fughe disperate, di sacrifici eroici. Devi trovare un'eco abbastanza forte e coerente da fungere da Ancora.",
    choices: [
      { text: "Cercare l'eco di un 'Capitano Leggendario'.", nextNodeId: 'eco_capitano_leggendario_cimitero' },
      { text: "Cercare l'eco di una 'Nave Biblioteca' che conteneva vasta conoscenza.", nextNodeId: 'eco_nave_biblioteca_cimitero' },
      { text: "Meditare, sperando che un'eco adatta si riveli a te.", nextNodeId: 'medita_cimitero_navi_ancora' }
    ],
    isEnding: false
  },
  'eco_capitano_leggendario_cimitero': {
    id: 'eco_capitano_leggendario_cimitero',
    text: "Trovi il relitto di una nave da guerra la cui forma suggerisce una volontà indomita. Ti connetti ai suoi resti mnemonici. Rivivi gli ultimi istanti del Capitano Kael, che si sacrificò per permettere la fuga del suo convoglio civile contro una flotta di 'Mietitori Void'. La sua determinazione, il suo coraggio incrollabile, risuonano profondamente in te. Senti che questo ricordo, questa *forza*, potrebbe essere la tua Ancora.",
    choices: [
      { text: "Accettare l'eco del Capitano Kael come tua Ancora.", nextNodeId: 'accetta_ancora_kael' },
      { text: "Cercare un'altra eco, temendo che questa sia troppo... marziale.", nextNodeId: 'cerca_altra_eco_cimitero' }
    ],
    isEnding: false
  },
  'accetta_ancora_kael': {
    id: 'accetta_ancora_kael',
    text: "Assorbi l'essenza del sacrificio e della determinazione di Kael. Non diventi lui, ma la sua forza si radica in te come un pilastro. Ti senti più definito, più resiliente. Sei pronto ad affrontare il Dominio del Silenzio Primordiale, o qualsiasi altra sfida che richieda una forte identità.",
    choices: [
      { text: "Dirigerti al Dominio del Silenzio Primordiale con la tua nuova Ancora.", nextNodeId: 'dominio_silenzio_con_ancora_kael' },
      { text: "Tornare dal Cartografo per informarlo.", nextNodeId: 'ritorno_cartografo_con_ancora' }
    ],
    isEnding: false,
    acquireItem: 'ancora_kael_determinazione'
  },
  'medita_glifi_stabilita_ancora': {
    id: 'medita_glifi_stabilita_ancora',
    text: "Ti ritiri in un angolo tranquillo del Flusso, o dentro la tua stessa coscienza, e ti concentri sui Glifi della Stabilità Interiore che hai appreso (come il Glifo dell'Equilibrio Dinamico o quello della Comprensione Paradossa). Non cerchi un ricordo esterno, ma una solidificazione del tuo nucleo. La meditazione ti porta a una profonda introspezione. Comprendi che la tua Ancora non è un oggetto o un evento, ma la tua stessa capacità di cambiare e adattarti pur mantenendo un senso di sé. È un'Ancora fluida, non rigida.",
    choices: [
      { text: "Con questa Ancora interiore, affrontare il Dominio del Silenzio.", nextNodeId: 'dominio_silenzio_ancora_fluida' },
      { text: "Comunicare questa intuizione al Cartografo.", nextNodeId: 'comunica_ancora_fluida_cartografo' }
    ],
    isEnding: false,
    acquireKnowledge: 'ancora_interiore_fluida'
  },
  'cartografo_ideale_ancora': {
    id: 'cartografo_ideale_ancora',
    text: "Il Cartografo pulsa colori pensierosi. 'Un ideale? Molti si aggrappano alla Speranza, alla Verità, all'Amore... ma questi concetti sono spesso troppo astratti, troppo personali per fungere da Ancora universale nel Silenzio. Tuttavia, l'ideale della *Ricerca Incessante*, della pura curiosità di fronte all'ignoto... quello ha una sua forza intrinseca, una spinta che può resistere alla dissoluzione. Ma deve essere genuino, non una posa.'",
    choices: [
      { text: "Abbracciare l'ideale della Ricerca Incessante come Ancora.", nextNodeId: 'ancora_ricerca_incessante' },
      { text: "Riconoscere che non è il tuo ideale e cercare altrove.", nextNodeId: 'trovare_ancora_io' }
    ],
    isEnding: false
  },
  'dominio_silenzio_con_glifo_ancora': {
    id: 'dominio_silenzio_con_glifo_ancora',
    text: "Entri nel Dominio del Silenzio Primordiale, il Glifo scelto (Equilibrio o Paradosso) che pulsa al centro della tua coscienza. Il Silenzio ti avvolge, ma il Glifo agisce come un faro interiore, un punto di riferimento costante. Non ti dissolvi. Invece, il Silenzio sembra 'parlarti' attraverso il Glifo, rivelandoti schemi nascosti nella sua apparente vacuità. Comprendi che il Silenzio non è assenza, ma la somma di tutte le possibilità non manifestate. Emergi dal Dominio con una nuova, profonda comprensione della natura della creazione e una traccia del potere di 'chiamare' le possibilità latenti.",
    choices: [
      { text: "Tornare dal Cartografo con questa nuova saggezza.", nextNodeId: 'ritorno_cartografo_saggezza_silenzio' },
      { text: "Sperimentare il potere di 'chiamare le possibilità'.", nextNodeId: 'sperimenta_chiamata_possibilita' }
    ],
    isEnding: false,
    acquireKnowledge: 'saggezza_del_silenzio',
  },
  'apprendere_glifo_appello_armonico': {
    id: 'apprendere_glifo_appello_armonico',
    text: "Il Cartografo ti guida verso un 'Eco-Camera Armonica', un luogo nel Flusso where antichi canti e glifi risuonano ancora. Per apprendere il Glifo di Appello Armonico, devi 'sintonizzarti' con queste vibrazioni, lasciando che la tua coscienza diventi uno strumento. È un processo che richiede pazienza e una profonda umiltà. Se ci riesci, il Glifo si imprimerà in te, permettendoti di inviare segnali di rispetto verso entità superiori.",
    choices: [
      { text: "Iniziare il processo di sintonizzazione.", nextNodeId: 'sintonizzazione_glifo_appello' },
      { text: "Chiedere se ci sono rischi nella sintonizzazione.", nextNodeId: 'rischi_sintonizzazione_glifo_appello' }
    ],
    isEnding: false
  },
  'sintonizzazione_glifo_appello': {
    id: 'sintonizzazione_glifo_appello',
    text: "Ti immergi nelle armonie dell'Eco-Camera. All'inizio è cacofonico, poi lentamente inizi a percepire schemi, melodie sottili. La tua coscienza si espande e si contrae, cercando la risonanza giusta. Dopo un tempo indefinito, senti un 'clic' interiore. Un nuovo Glifo, complesso e bellissimo, si forma nella tua mente. Hai appreso il Glifo di Appello Armonico.",
    choices: [
      { text: "Provare a usare il Glifo per contattare un Essere Dormiente.", nextNodeId: 'usa_glifo_appello_essere_dormiente' },
      { text: "Ringraziare il Cartografo e decidere quando usarlo.", nextNodeId: 'ringrazia_cartografo_glifo_appello' }
    ],
    isEnding: false,
    acquireKnowledge: 'glifo_appello_armonico'
  },
  'indicazioni_geode_onirica': {
    id: 'indicazioni_geode_onirica',
    text: "Il Cartografo ti mostra una regione del Flusso where i sogni di un'intera civiltà si sono cristallizzati dopo un cataclisma psichico. 'Lì, troverai una Geode Onirica. Ma attenzione, i sogni possono essere seducenti o terrificanti. E la Geode è protetta da 'Guardiani del Sogno', entità plasmate dalle emozioni residue più potenti.'",
    choices: [
      { text: "Dirigersi verso la Geode Onirica.", nextNodeId: 'verso_geode_onirica' },
      { text: "Chiedere di più sui Guardiani del Sogno.", nextNodeId: 'info_guardiani_sogno' }
    ],
    isEnding: false
  },
  'verso_sistema_binario_ouroboros': {
    id: 'verso_sistema_binario_ouroboros',
    text: "Viaggi verso il sistema binario. Lo spettacolo è impressionante: fiumi di plasma che si riversano dalla gigante rossa verso la stella di neutroni, creando un disco di accrescimento che brilla di luce accecante. Le radiazioni sono intense, e le distorsioni gravitazionali mettono a dura prova la tua forma astrale. Devi trovare il 'punto di Lagrange dell'anima', un luogo di equilibrio quasi impossibile, per scorgere il Cuore di Ouroboros.",
    choices: [
      { text: "Cercare attivamente il punto di equilibrio.", nextNodeId: 'cerca_equilibrio_ouroboros' },
      { text: "Usare il Glifo dell'Equilibrio Dinamico per aiutarti (se posseduto).", nextNodeId: 'usa_glifo_equilibrio_per_ouroboros', requiredKnowledge: 'glifo_equilibrio_dinamico' }
    ],
    isEnding: false
  },
  'ripara_loop_dati_archivista': {
    id: 'ripara_loop_dati_archivista',
    text: "Ti concentri sul flusso di dati corrotti che intrappola l'Archivista. È come cercare di riordinare una biblioteca dopo un terremoto mentre le pagine stesse cercano di morderti. Usando la tua comprensione del Flusso (e forse Glifi come quello della Comprensione Paradossa, se lo possiedi), inizi a isolare le anomalie, a reinstradare i percorsi logici. È un lavoro meticoloso e pericoloso. Gli Errori di Sistema ti attaccano con scariche di entropia informativa.",
    choices: [
      { text: "Persistere nella riparazione, schivando gli attacchi.", nextNodeId: 'persisti_riparazione_archivista' },
      { text: "Concentrarti prima sull'eliminare gli Errori di Sistema.", nextNodeId: 'affronta_errori_sistema_archivista' }
    ],
    isEnding: false
  },
  'persisti_riparazione_archivista': {
    id: 'persisti_riparazione_archivista',
    text: "Con un ultimo sforzo di volontà e logica, il loop si spezza. I dati si stabilizzano. L'Archivista Perduto sbatte le palpebre concettuali, liberato. Gli Errori di Sistema, privati della loro fonte di nutrimento, si dissolvono. L'Archivista, un essere di pura informazione ora coerente, ti guarda con immensa gratitudine. 'Hai salvato eoni di conoscenza. Come posso ricompensarti?'",
    choices: [
      { text: "Chiedere conoscenza su un argomento specifico (es. Esseri Dormienti, Origine del Flusso).", nextNodeId: 'chiedi_conoscenza_archivista' },
      { text: "Chiedere un artefatto raro dalla sua collezione.", nextNodeId: 'chiedi_artefatto_archivista' },
      { text: "Chiedere semplicemente la sua amicizia e alleanza.", nextNodeId: 'amicizia_alleanza_archivista' }
    ],
    isEnding: false,
    acquireKnowledge: 'alleanza_archivista'
  },
  'entra_mondo_luce_distorto': {
    id: 'entra_mondo_luce_distorto',
    text: "Attraversi la Sorgente danneggiata. Il mondo di luce è lì, ma è... sbagliato. Le giungle sono contorte, i cieli sono di un indaco malaticcio, e gli esseri di luce sono diventati figure spettrali e lamentose, le loro armonie trasformate in dissonanze. Hai forzato la tua via, e hai infranto qualcosa di bello. Questo mondo è ora un eco della tua violazione. Puoi cercare di riparare il danno, vivere in questo incubo che hai contribuito a creare, o fuggire di nuovo nel Flusso, portando con te il peso della tua azione.",
    choices: [
      { text: "Tentare di curare questo mondo distorto.", nextNodeId: 'cura_mondo_luce_distorto' },
      { text: "Accettare questo mondo come tua nuova, oscura dimora.", nextNodeId: 'dimora_oscura_mondo_distorto' },
      { text: "Fuggire di nuovo nel Flusso, con il cuore pesante.", nextNodeId: 'fuga_dal_mondo_distorto_flusso' }
    ],
    isEnding: false
  },
  'dimora_oscura_mondo_distorto': {
    id: 'dimora_oscura_mondo_distorto',
    text: "Decidi di restare. Forse per espiare, forse perché una parte di te risuona con questa bellezza spezzata. Gli esseri spettrali ti evitano, ma col tempo, alcuni iniziano a osservarti con una sorta di malinconica curiosità. Diventi una leggenda locale, il 'Violatore della Sorgente', colui che ha portato l'ombra. La tua esistenza è solitaria, ma non priva di un suo strano significato.",
    choices: [],
    isEnding: true,
    endingText: "Re in un regno di crepuscolo e rimpianto."
  },
  'garanzie_ritorno_krell_intreccio': {
    id: 'garanzie_ritorno_krell_intreccio',
    text: "La 'voce' concettuale dell'entità di Krell emette un'onda di pura logica anomala. *'Garanzie? In un universo di probabilità e mutazione costante? La tua forma attuale è già un costrutto temporaneo. L'unica 'garanzia' è che l'esperienza ti trasformerà. Il 'ritorno' a ciò che eri è un'illusione. Ma potresti emergere come qualcosa... più adatto a navigare le correnti che non riesci nemmeno a percepire ora.'*",
    choices: [
      { text: "Accettare l'intreccio, consapevole del rischio e della trasformazione.", nextNodeId: 'accetta_intreccio_krell' },
      { text: "Rifiutare: 'Preferisco le illusioni che conosco.'", nextNodeId: 'rifiuta_intreccio_krell_paura' }
    ],
    isEnding: false
  },
  'altra_domanda_oracolo_mirata': {
    id: 'altra_domanda_oracolo_mirata',
    text: "Avendo assaggiato la vertigine dell'infinito, ora poni una domanda più specifica all'Oracolo. Forse chiedi del tuo ruolo nel grande schema, o del destino di una particolare fazione o entità che hai incontrato. L'Oracolo, come prima, non ti dà una risposta diretta, ma ti mostra un 'Paesaggio di Probabilità' relativo alla tua domanda. Vedi i sentieri che si diramano, i punti di svolta cruciali, le conseguenze di diverse azioni. Non è una predizione, ma una mappa delle possibilità. Sta a te scegliere quale sentiero percorrere.",
    choices: [
      { text: "Scegliere un sentiero specifico da esplorare mentalmente.", nextNodeId: 'esplora_sentiero_probabilita_oracolo' },
      { text: "Ringraziare l'Oracolo e usare questa mappa per guidare le tue azioni future.", nextNodeId: 'usa_mappa_probabilita_oracolo' }
    ],
    isEnding: false
  },
  'indaga_ombre_silenziose_kryll': {
    id: 'indaga_ombre_silenziose_kryll',
    text: "Attraverso la tua connessione con il Kryll, ti avventuri nelle profondità abissali del loro oceano di metano. L'ambiente è freddo, buio, e la pressione è immensa. Le Ombre Silenziose non sono entità fisiche, ma piuttosto 'buchi' nella percezione, zone where la logica e la vita sembrano cessare. Avvicinandoti, senti la tua coscienza (e quella del Kryll) minacciata da un nichilismo contagioso. Queste Ombre sembrano essere parenti stretti del Vuoto Cantante, ma su scala planetaria.",
    choices: [
      { text: "Tentare di 'illuminare' un'Ombra con la coscienza combinata tua e del Kryll.", nextNodeId: 'illumina_ombra_silenziosa_kryll' },
      { text: "Ritirarsi, riconoscendo un pericolo troppo grande.", nextNodeId: 'ritirata_ombre_silenziose_kryll' },
      { text: "Cercare di capire se le Ombre hanno uno scopo o un'origine.", nextNodeId: 'scopo_origine_ombre_silenziose' }
    ],
    isEnding: false,
  },
  'incontrare_tessitore_sogni': {
    id: 'incontrare_tessitore_sogni',
    text: "Il Guardiano ti fornisce un 'frammento di frequenza' che, se emesso correttamente in una zona del Flusso particolarmente onirica, potrebbe attirare l'attenzione di un Tessitore di Sogni. 'Sono creature elusive,' dice. 'Non amano essere disturbate, ma a volte condividono i loro fili con chi dimostra una genuina comprensione della natura effimera e potente dei sogni.'",
    choices: [
      { text: "Cercare una zona onirica ed emettere la frequenza.", nextNodeId: 'emetti_frequenza_tessitore_sogni' },
      { text: "Chiedere al Guardiano cosa si potrebbe offrire a un Tessitore.", nextNodeId: 'offerta_tessitore_sogni_guardiano' }
    ],
    isEnding: false
  },
  'eco_nave_biblioteca_cimitero': {
    id: 'eco_nave_biblioteca_cimitero',
    text: "Individui i resti colossali di una Nave Biblioteca, la 'Stella Sapiente'. Connettendoti, sei sommerso da un torrente di informazioni frammentate: filosofia aliena, storia galattica, trattati di fisica esoterica. È troppo, ma riesci a isolare un nucleo di conoscenza particolarmente stabile: il concetto di 'Architettura dell'Anima', la capacità di rafforzare e definire la propria coscienza contro la dissoluzione. Questo sapere, più che un ricordo, potrebbe essere la tua Ancora.",
    choices: [
      { text: "Accettare l'Architettura dell'Anima come tua Ancora.", nextNodeId: 'accetta_ancora_architettura_anima' },
      { text: "Cercare un'eco più emotiva, meno intellettuale.", nextNodeId: 'cerca_altra_eco_cimitero' }
    ],
    isEnding: false
  },
  'accetta_ancora_architettura_anima': {
    id: 'accetta_ancora_architettura_anima',
    text: "Interiorizzi i principi dell'Architettura dell'Anima. Senti la tua coscienza diventare più strutturata, i tuoi confini mentali più definiti, senza perdere la tua fluidità. È come costruire una cattedrale dentro di te, un luogo di potere e stabilità interiore. Sei pronto.",
    choices: [
      { text: "Dirigerti al Dominio del Silenzio Primordiale con questa nuova Ancora.", nextNodeId: 'dominio_silenzio_con_ancora_architettura' },
      { text: "Tornare dal Cartografo per condividere questa scoperta.", nextNodeId: 'ritorno_cartografo_con_ancora_architettura' }
    ],
    isEnding: false,
    acquireKnowledge: 'architettura_anima_ancora'
  },
  'dominio_silenzio_ancora_fluida': {
    id: 'dominio_silenzio_ancora_fluida',
    text: "Entri nel Dominio del Silenzio Primordiale. La tua Ancora, la capacità di cambiare mantenendo il sé, viene messa alla prova suprema. Il Silenzio cerca di dissolverti, ma la tua fluidità ti permette di danzare con esso, di piegarti senza spezzarti. Non lo sconfiggi, né lo comprendi appieno come con un Glifo specifico, ma impari a coesisterci. Emergi con una profonda accettazione della tua natura mutevole e una resilienza quasi organica alle forze caotiche del Flusso. Senti di poter 'surfare' le correnti più selvagge.",
    choices: [
      { text: "Tornare dal Cartografo, trasformato da questa esperienza.", nextNodeId: 'ritorno_cartografo_ancora_fluida' },
      { text: "Cercare la corrente del Flusso più caotica per mettere alla prova questa nuova resilienza.", nextNodeId: 'cerca_corrente_caotica_flusso' }
    ],
    isEnding: false,
    acquireKnowledge: 'resilienza_fluida_al_caos'
  },
  'comunica_ancora_fluida_cartografo': {
    id: 'comunica_ancora_fluida_cartografo',
    text: "Spieghi al Cartografo la tua intuizione sull'Ancora fluida. Lui pulsa con un colore di ammirazione. 'Una comprensione profonda. Molti cercano la stabilità nella rigidità, non capendo che la vera forza risiede nell'adattamento. Questo ti servirà bene. Il Flusso stesso è un paradosso di cambiamento costante e pattern eterni.'",
    choices: [
      { text: "Chiedere se questa comprensione apre nuove vie di navigazione.", nextNodeId: 'nuove_vie_navigazione_ancora_fluida' },
      { text: "Procedere verso il Dominio del Silenzio con questa consapevolezza.", nextNodeId: 'dominio_silenzio_ancora_fluida' }
    ],
    isEnding: false
  },
  'ancora_ricerca_incessante': {
    id: 'ancora_ricerca_incessante',
    text: "Abbracci l'ideale della Ricerca Incessante come tua Ancora. È una fiamma viva dentro di te, una fame di conoscenza e di esperienza che ti spinge costantemente avanti. Entri nel Dominio del Silenzio non per trovare riposo, ma per interrogare il vuoto stesso. La tua curiosità diventa uno scudo e una lancia. Il Silenzio non ti offre risposte facili, ma la tua stessa domanda diventa così potente da creare un piccolo spazio di stabilità attorno a te. Ne esci con più domande di prima, ma con una volontà affilata come ossidiana.",
    choices: [
      { text: "Porre le tue nuove, più profonde domande al Cartografo.", nextNodeId: 'domande_profonde_cartografo_dopo_silenzio' },
      { text: "Cercare l'Oracolo del Dissenso per risposte ancora più radicali.", nextNodeId: 'verso_oracolo_con_nuove_domande' }
    ],
    isEnding: false,
    acquireKnowledge: 'volonta_incessante'
  },
  'ritorno_cartografo_saggezza_silenzio': {
    id: 'ritorno_cartografo_saggezza_silenzio',
    text: "Il Cartografo percepisce immediatamente il cambiamento in te. 'Hai guardato nel cuore del potenziale puro e ne sei tornato integro, anzi, arricchito. La Saggezza del Silenzio è rara. Ora puoi vedere non solo i sentieri esistenti, ma anche quelli che *potrebbero* esistere.' Ti indica un nuovo strato sulla sua mappa del Flusso, uno strato di 'realtà latenti'.",
    choices: [
      { text: "Chiedere come interagire con le realtà latenti.", nextNodeId: 'interagire_realta_latenti_cartografo' },
      { text: "Sperimentare subito il tuo potere di 'chiamare le possibilità'.", nextNodeId: 'sperimenta_chiamata_possibilita' }
    ],
    isEnding: false
  },
  'sperimenta_chiamata_possibilita': {
    id: 'sperimenta_chiamata_possibilita',
    text: "Ti concentri, attingendo alla Saggezza del Silenzio. Immagini una piccola oasi di stabilità e bellezza in un angolo caotico del Flusso. Con un atto di volontà focalizzata, 'chiami' quella possibilità. Lentamente, vedi le energie turbolente iniziare a coalescere, a formare la struttura che hai immaginato. È faticoso, e l'oasi è piccola e fragile, ma *esiste*. Hai plasmato un frammento di realtà dal potenziale puro.",
    choices: [
      { text: "Tentare di rafforzare o espandere l'oasi.", nextNodeId: 'rafforza_espandi_oasi_plasmata' },
      { text: "Mostrare la tua creazione al Cartografo.", nextNodeId: 'mostra_oasi_cartografo' },
      { text: "Considerare le implicazioni etiche di tale potere.", nextNodeId: 'etica_plasmatore_realta' }
    ],
    isEnding: false,
  },
  'rischi_sintonizzazione_glifo_appello': {
    id: 'rischi_sintonizzazione_glifo_appello',
    text: "Il Cartografo diventa più serio. 'La sintonizzazione richiede un'apertura della coscienza. Se la tua volontà non è ferma, o se ci sono dissonanze nascoste in te, potresti 'accordarti' male. Potresti attrarre echi indesiderati, o frammentare la tua stessa percezione. L'Eco-Camera amplifica ciò che sei. È un rischio calcolato, ma un rischio.'",
    choices: [
      { text: "Procedere con cautela, consapevole dei rischi.", nextNodeId: 'sintonizzazione_glifo_appello' },
      { text: "Decidere di rafforzare prima il tuo nucleo interiore.", nextNodeId: 'rafforza_nucleo_prima_di_sintonizzazione' }
    ],
    isEnding: false
  },
  'usa_glifo_appello_essere_dormiente': {
    id: 'usa_glifo_appello_essere_dormiente',
    text: "Trovi un luogo nel Flusso where le energie sono antiche e profonde. Attivi il Glifo di Appello Armonico. Emetti una sequenza di pura intenzione rispettosa, una melodia di interrogazione umile. Attendi. Per un tempo lunghissimo, non accade nulla. Poi, senti un cambiamento. Non una voce, non un'immagine, ma una vasta, incommensurabile Presenza che sfiora la tua coscienza. È come se una montagna avesse aperto un occhio. Senti un'ondata di pura... *contemplazione*. Poi, un singolo concetto, un 'Dono di Comprensione', si deposita nella tua mente: la visione di come le galassie respirano e sognano.",
    choices: [
      { text: "Ringraziare la Presenza e ritirarti con il Dono.", nextNodeId: 'ritirati_con_dono_comprensione_galattica' },
      { text: "Tentare di porre una domanda specifica alla Presenza.", nextNodeId: 'domanda_specifica_presenza_dormiente_rischioso' },
      { text: "Cercare di capire la natura della Presenza.", nextNodeId: 'capire_natura_presenza_dormiente' }
    ],
    isEnding: false,
    acquireKnowledge: 'dono_comprensione_galattica'
  },
  'verso_geode_onirica': {
    id: 'verso_geode_onirica',
    text: "Raggiungi la regione della Geode Onirica. È un paesaggio surreale, where frammenti di sogni si scontrano e si fondono. La Geode stessa è una struttura cristallina immensa, pulsante di luce onirica. Attorno ad essa, i Guardiani del Sogno – manifestazioni delle paure, speranze e desideri più intensi della civiltà perduta – pattugliano. Alcuni sono terrificanti, altri malinconici, altri ancora aggressivi.",
    choices: [
      { text: "Tentare di passare inosservato tra i Guardiani.", nextNodeId: 'passa_inosservato_guardiani_sogno' },
      { text: "Affrontare un Guardiano del Sogno per aprirti un varco.", nextNodeId: 'affronta_guardiano_sogno' },
      { text: "Provare a 'sognare' con loro, a entrare in risonanza.", nextNodeId: 'sogna_con_guardiani_sogno' }
    ],
    isEnding: false
  },
  'usa_glifo_equilibrio_per_ouroboros': {
    id: 'usa_glifo_equilibrio_per_ouroboros',
    text: "Attivi il Glifo dell'Equilibrio Dinamico. Le forze gravitazionali selvagge e le radiazioni sembrano trovare un punto di armonia relativa attorno a te. Riesci a percepire il 'punto di Lagrange dell'anima' non come un luogo fisico, ma come uno stato di coscienza. Concentrandoti, ti 'sintonizzi' su di esso. Davanti a te, o dentro di te, il Cuore di Ouroboros si manifesta: un serpente di pura luce che si morde la coda, pulsando con il ritmo della creazione e della distruzione. Guardarlo ti riempie di una vertigine cosmica e di una profonda pace. Comprendi la natura ciclica di tutte le cose.",
    choices: [
      { text: "Assorbire la comprensione del Cuore di Ouroboros.", nextNodeId: 'assorbi_comprensione_ouroboros' },
      { text: "Tentare di 'prendere' un frammento del Cuore (rischioso).", nextNodeId: 'prendi_frammento_ouroboros_rischioso' }
    ],
    isEnding: false,
  },
  'assorbi_comprensione_ouroboros': {
    id: 'assorbi_comprensione_ouroboros',
    text: "Non cerchi di possedere, ma di comprendere. La visione del Cuore di Ouroboros si imprime nella tua anima. Ora vedi i cicli ovunque: nella nascita e morte delle stelle, nel flusso e riflusso delle civiltà, nella tua stessa coscienza. Questa comprensione ti dona una profonda equanimità e la capacità di vedere oltre gli eventi immediati, percependo i pattern più ampi. Senti che potresti persino influenzare sottilmente questi cicli.",
    choices: [
      { text: "Tornare dal Cartografo con questa nuova saggezza ciclica.", nextNodeId: 'ritorno_cartografo_saggezza_ciclica' },
      { text: "Meditare su come influenzare i cicli.", nextNodeId: 'medita_influenzare_cicli_ouroboros' }
    ],
    isEnding: false,
    acquireKnowledge: 'saggezza_ciclica_ouroboros',
  },
  'chiedi_conoscenza_archivista': {
    id: 'chiedi_conoscenza_archivista',
    text: "L'Archivista considera la tua richiesta (ad esempio, sull'Origine del Flusso). 'Una domanda che molti si pongono. I miei archivi contengono innumerevoli teorie, miti e frammenti di dati. Nessuna risposta definitiva, ma posso offrirti l'accesso a 'L'Eco della Prima Vibrazione', una registrazione sensoriale che alcuni credono sia un eco del momento in cui il Flusso iniziò ad esistere. È... travolgente.'",
    choices: [
      { text: "Accettare di sperimentare L'Eco della Prima Vibrazione.", nextNodeId: 'sperimenta_eco_prima_vibrazione' },
      { text: "Chiedere un riassunto delle teorie più accreditate.", nextNodeId: 'riassunto_teorie_origine_flusso_archivista' },
      { text: "Chiedere un altro tipo di conoscenza.", nextNodeId: 'altra_conoscenza_archivista' }
    ],
    isEnding: false,
  },
  'sperimenta_eco_prima_vibrazione': {
    id: 'sperimenta_eco_prima_vibrazione',
    text: "L'Archivista ti immerge nell'Eco. Non ci sono immagini, solo una vibrazione pura e assoluta che sembra contenere ogni suono, ogni colore, ogni possibilità. È il momento prima della differenziazione, il potenziale infinito che precede l'essere. La tua coscienza si espande fino quasi a spezzarsi, toccando qualcosa di veramente primordiale. Ne emergi scosso ma con una traccia indelebile di questa esperienza, una comprensione intuitiva dell'unità fondamentale di tutte le cose.",
    choices: [
      { text: "Ringraziare profondamente l'Archivista.", nextNodeId: 'ringrazia_archivista_dopo_eco' },
      { text: "Questa esperienza ha cambiato le tue priorità. Cosa fai ora?", nextNodeId: 'nuove_priorita_dopo_eco_vibrazione' }
    ],
    isEnding: false,
    acquireKnowledge: 'tocco_della_prima_vibrazione'
  },
  'amicizia_alleanza_archivista': {
    id: 'amicizia_alleanza_archivista',
    text: "L'Archivista sembra sorpreso, poi emette un senso di calda approvazione. 'Un alleato nel Flusso è più prezioso di qualsiasi artefatto. La mia conoscenza e le mie risorse sono a tua disposizione. E forse, un giorno, potrai aiutarmi a ricostruire la mia biblioteca, non come era, ma come potrebbe essere.' Senti di aver stretto un legame potente e significativo.",
    choices: [
      { text: "Discutere i piani per la nuova biblioteca.", nextNodeId: 'piani_nuova_biblioteca_archivista' },
      { text: "Chiedere il suo consiglio sul tuo percorso attuale.", nextNodeId: 'consiglio_archivista_percorso' }
    ],
    isEnding: false,
    acquireKnowledge: 'alleanza_archivista_rinforzata'
  },
  'cura_mondo_luce_distorto': {
    id: 'cura_mondo_luce_distorto',
    text: "Decidi di provare a rimediare al tuo errore. È un compito immane. Devi capire la natura della Sorgente, la risonanza originale degli esseri di luce, e come la tua azione l'ha infranta. Potrebbe richiedere di cercare antiche conoscenze sulla guarigione dimensionale, o di trovare un modo per 'cantare' di nuovo in armonia questo mondo. Gli esseri spettrali ti osservano, alcuni con speranza, altri con profondo scetticismo.",
    choices: [
      { text: "Cercare conoscenze sulla guarigione dimensionale nel Flusso.", nextNodeId: 'cerca_conoscenza_guarigione_dimensionale' },
      { text: "Tentare di entrare in empatia profonda con gli esseri spettrali per capire la loro sofferenza.", nextNodeId: 'empatia_esseri_spettrali_distorti' },
      { text: "Abbandonare questo mondo, riconoscendo che il compito è troppo grande.", nextNodeId: 'fuga_dal_mondo_distorto_flusso_tardi' }
    ],
    isEnding: false
  },
  'esplora_sentiero_probabilita_oracolo': {
    id: 'esplora_sentiero_probabilita_oracolo',
    text: "Scegli uno dei sentieri nel Paesaggio di Probabilità. L'Oracolo ti permette di 'viverlo' in una simulazione accelerata. Vedi le scelte chiave, le conseguenze, le gioie e i dolori di quel particolare futuro potenziale. È come leggere un librogame della tua stessa vita, ma con la possibilità di tornare indietro. L'esperienza ti lascia con una profonda comprensione delle ramificazioni delle tue azioni, ma anche con il peso della scelta.",
    choices: [
      { text: "Scegliere di perseguire attivamente quel sentiero nella 'realtà'.", nextNodeId: 'persegui_sentiero_scelto_oracolo' },
      { text: "Esplorare un altro sentiero di probabilità.", nextNodeId: 'altra_domanda_oracolo_mirata' },
      { text: "Decidere che nessun singolo sentiero pre-visto è desiderabile.", nextNodeId: 'rifiuta_sentieri_pre_visti_oracolo' }
    ],
    isEnding: false
  },
  'illumina_ombra_silenziosa_kryll': {
    id: 'illumina_ombra_silenziosa_kryll',
    text: "Con il Kryll al tuo fianco (metaforicamente), proietti la luce della vostra coscienza combinata verso un'Ombra Silenziosa. È come urlare in una stanza totalmente anecoica. L'Ombra non reagisce, non si ritira. Anzi, sembra *assorbire* la vostra luce, la vostra intenzione, senza alcun cambiamento apparente. Senti un freddo profondo, un senso di futilità, e una parte della tua connessione con il Kryll si attenua, come se l'Ombra avesse 'mangiato' un pezzo della vostra empatia.",
    choices: [
      { text: "Ritirarsi immediatamente, riconoscendo una minaccia superiore.", nextNodeId: 'ritirata_ombre_silenziose_kryll_danneggiati' },
      { text: "Provare con un'altra Ombra, o con un approccio diverso.", nextNodeId: 'altro_approccio_ombre_silenziose_kryll' }
    ],
    isEnding: false,
  },
  'emetti_frequenza_tessitore_sogni': {
    id: 'emetti_frequenza_tessitore_sogni',
    text: "Trovi una 'Nebulosa Onirica', un luogo where i sogni di miriadi di esseri si intrecciano. Emetti la frequenza data dal Guardiano. All'inizio, nulla. Poi, la nebulosa sembra rispondere. Fili di sogno si intrecciano in forme complesse, e una figura emerge, fatta di luce lunare e seta d'ombra: un Tessitore di Sogni. La sua 'voce' è una melodia che evoca ricordi dimenticati. 'Chi sei tu, che chiami con la Frequenza del Passaggio?'",
    choices: [
      { text: "Spiegare la tua ricerca e il tuo rispetto per i sogni.", nextNodeId: 'spiega_ricerca_tessitore_sogni' },
      { text: "Chiedere al Tessitore un frammento di 'Sogno Lucido Primordiale'.", nextNodeId: 'chiedi_sogno_lucido_tessitore' },
      { text: "Chiedere del destino di qualcuno che hai incontrato (se hai un nome).", nextNodeId: 'chiedi_destino_persona_tessitore' }
    ],
    isEnding: false
  },
  'ritorno_cartografo_ancora_fluida': {
    id: 'ritorno_cartografo_ancora_fluida',
    text: "Il Cartografo percepisce la tua nuova resilienza. 'Hai imparato a danzare con il caos, una lezione che molti evitano. Questo ti apre sentieri che richiedono non solo forza, ma anche flessibilità. Ci sono 'Correnti Instabili' nel Flusso che portano a realtà nascenti, troppo giovani e caotiche per la maggior parte dei navigatori. Potresti essere uno dei pochi in grado di esplorarle.'",
    choices: [
      { text: "Chiedere indicazioni per una Corrente Instabile.", nextNodeId: 'indicazioni_corrente_instabile_cartografo' },
      { text: "Chiedere quali tesori o pericoli si celano in tali realtà.", nextNodeId: 'tesori_pericoli_realta_nascenti' }
    ],
    isEnding: false
  },
  'cerca_corrente_caotica_flusso': {
    id: 'cerca_corrente_caotica_flusso',
    text: "Ti immergi nelle zone più turbolente del Flusso, where le leggi della fisica e della logica sembrano suggerimenti opzionali. La tua resilienza fluida ti permette di navigare queste tempeste di energia pura, di scivolare tra paradossi che farebbero a pezzi una coscienza più rigida. In una di queste tempeste, percepisci un 'occhio del ciclone', un punto di calma innaturale. Al suo interno, una struttura geometrica impossibile fluttua, emanando un segnale complesso.",
    choices: [
      { text: "Avvicinarsi alla struttura geometrica.", nextNodeId: 'avvicina_struttura_geometrica_caos' },
      { text: "Ignorarla e continuare a esplorare il caos per il puro gusto di farlo.", nextNodeId: 'esplora_caos_per_caos' } 
    ],
    isEnding: false,
  },
  'domande_profonde_cartografo_dopo_silenzio': {
    id: 'domande_profonde_cartografo_dopo_silenzio',
    text: "Poni al Cartografo le tue nuove domande, nate dalla tua interazione con il Silenzio e forgiate dalla tua Volontà Incessante. Non sono più domande sulla navigazione, ma sulla natura ultima del Flusso, sul suo 'scopo', se ne ha uno. Il Cartografo pulsa con colori di profonda riflessione. 'Queste sono le domande che definiscono un'epoca, non un individuo. Non ho risposte, solo... direzioni. Alcuni cercano l'Architetto Primordiale, altri il Grande Errore. La tua ricerca ti condurrà where nessun colore sulla mia mappa può arrivare.'",
    choices: [
      { text: "Chiedere se conosce leggende sull'Architetto Primordiale.", nextNodeId: 'leggende_architetto_primordiale_cartografo' },
      { text: "Chiedere cosa si intende per 'Grande Errore'.", nextNodeId: 'info_grande_errore_cartografo' }
    ],
    isEnding: false
  },
  'interagire_realta_latenti_cartografo': {
    id: 'interagire_realta_latenti_cartografo',
    text: "Il Cartografo spiega che le realtà latenti sono come semi non ancora germogliati. 'Puoi 'annaffiarle' con la tua intenzione, o con specifiche energie del Flusso, per farle manifestare. Ma attenzione: non sai mai cosa crescerà veramente. Ogni realtà manifestata ha le sue leggi, i suoi abitanti, i suoi pericoli. È un atto di creazione divina... o di incoscienza cosmica.'",
    choices: [
      { text: "Scegliere una realtà latente dalla mappa e provare a manifestarla.", nextNodeId: 'scegli_manifesta_realta_latente' },
      { text: "Chiedere se è possibile 'sbirciare' in una realtà latente prima di manifestarla.", nextNodeId: 'sbircia_realta_latente_cartografo' }
    ],
    isEnding: false
  },
  'etica_plasmatore_realta': {
    id: 'etica_plasmatore_realta',
    text: "Ti fermi a riflettere. Plasmar la realtà, anche su piccola scala, comporta una responsabilità immensa. Chi sei tu per decidere cosa debba esistere? Quali sono le conseguenze impreviste? Questa riflessione ti porta a cercare una 'Guida Etica del Flusso', un concetto o un'entità che possa aiutarti a navigare queste acque morali. Il Cartografo suggerisce che l'Oracolo del Dissenso potrebbe avere prospettive, o forse i Custodi della Sorgente.",
    choices: [
      { text: "Consultare l'Oracolo del Dissenso sull'etica della plasmazione.", nextNodeId: 'oracolo_etica_plasmazione' }, 
      { text: "Tornare dai Custodi della Sorgente con questa domanda.", nextNodeId: 'custodi_sorgente_etica_plasmazione' } 
    ],
    isEnding: false
  },
  'ritirati_confuso_ma_umile_presenza': {
    id: 'ritirati_confuso_ma_umile_presenza',
    text: "Ti allontani dalla Presenza Dormiente, la mente ancora turbata dalla miriade di 'scopi' intravisti. Il Dono della Comprensione Galattica è ora temperato da un profondo senso di umiltà. Capisci che la grandezza del cosmo è tale che nessun singolo essere può afferrarne il significato ultimo. Questo non ti scoraggia, ma ti libera. Il tuo scopo non è trovare 'il' senso, ma creare il 'tuo' senso, giorno per giorno, scelta dopo scelta.",
    choices: [
      { text: "Condividere questa intuizione con un alleato (es. Archivista, Cartografo).", nextNodeId: 'condividi_intuizione_scopo_alleato' },
      { text: "Cercare un progetto concreto in cui riversare questa nuova libertà.", nextNodeId: 'cerca_progetto_concreto_nuova_liberta' }
    ],
    isEnding: false
  },
  'affronta_terrore_perdita_guardiano': {
    id: 'affronta_terrore_perdita_guardiano',
    text: "Decidi di affrontare il Guardiano del Sogno. Non è un combattimento fisico, ma una lotta di volontà e di emozioni. Il Terrore della Perdita ti sommerge con visioni delle tue paure più profonde: la perdita di te stesso, dei tuoi cari (se ne hai ricordi), del significato. Devi trovare dentro di te una forza che superi questa paura, un'accettazione della perdita come parte della vita e della trasformazione. Se ci riesci, il Guardiano si dissolve, lasciando dietro di sé un 'Frammento di Coraggio Onirico'.",
    choices: [
      { text: "Raccogliere il Frammento di Coraggio Onirico.", nextNodeId: 'raccogli_frammento_coraggio_onirico' },
      { text: "Proseguire verso la Geode, scosso ma più forte.", nextNodeId: 'entra_geode_onirica_dopo_terrore' }
    ],
    isEnding: false
  },
  'raccogli_frammento_coraggio_onirico': {
    id: 'raccogli_frammento_coraggio_onirico',
    text: "Il Frammento di Coraggio Onirico si fonde con la tua essenza. Ora, nei momenti di paura o dubbio, senti una riserva interiore di forza, la capacità di affrontare l'ignoto con maggiore risolutezza, specialmente nei reami onirici o psichici.",
    choices: [
      { text: "Proseguire verso la Geode Onirica.", nextNodeId: 'entra_geode_onirica' }
    ],
    isEnding: false,
    acquireItem: 'frammento_coraggio_onirico'
  },
  'tocca_cuore_sogno_potere': {
    id: 'tocca_cuore_sogno_potere',
    text: "Allunghi la tua mano astrale e tocchi il Cuore del Sogno. Un'esplosione di immagini, sensazioni ed emozioni pure ti attraversa. Senti il potere di entrare nei sogni altrui, di plasmare i paesaggi onirici, di comunicare attraverso il linguaggio universale del sogno. Ma senti anche il peso di questa responsabilità e la sottile tentazione di perderti in mondi di pura fantasia. Ora sei un Onironauta, un viaggiatore e plasmatore di sogni.",
    choices: [
      { text: "Provare a entrare nel Sogno Collettivo della tua specie (se conosciuta).", nextNodeId: 'entra_sogno_collettivo_specie_onironauta' },
      { text: "Usare questo potere per aiutare qualcuno intrappolato in un incubo.", nextNodeId: 'aiuta_con_incubo_onironauta' },
      { text: "Uscire dalla Geode per esplorare questo potere nel Flusso.", nextNodeId: 'esci_geode_onironauta_esplora_potere' }
    ],
    isEnding: false,
    acquireKnowledge: 'onironauta_plasmare_sogni' // o acquirePower
  },
  'fuggi_con_scaglia_ouroboros': {
    id: 'fuggi_con_scaglia_ouroboros',
    text: "Con la Scaglia di Ouroboros che pulsa nella tua essenza, ti ritiri precipitosamente dal sistema binario. La Scaglia ti dona una percezione distorta ma potente dei cicli temporali vicini: vedi echi del passato e futuri probabili come fili luminosi. Tuttavia, senti anche di essere 'segnato', che entità guardiane dei cicli cosmici potrebbero essere sulle tue tracce. La Scaglia è potere, ma anche un fardello.",
    choices: [
      { text: "Studiare la Scaglia per controllarne il potere.", nextNodeId: 'studia_scaglia_ouroboros_controllo' },
      { text: "Cercare un modo per nascondere la tua traccia o placare i guardiani.", nextNodeId: 'nascondi_traccia_placa_guardiani_scaglia' }
    ],
    isEnding: false,
  },
  'interagire_nodo_temporale_cartografo': {
    id: 'interagire_nodo_temporale_cartografo',
    text: "Il Cartografo ti mostra come i nodi temporali appaiano come distorsioni nel Flusso. 'Avvicinarsi a un nodo è come avvicinarsi a un eco del tempo. Potresti vedere eventi passati, o futuri divergenti. Interagire è... complesso. Potresti alterare l'eco, o essere assorbito da esso. O potresti imparare qualcosa di cruciale. La tua Saggezza Ciclica ti aiuterà a non perderti.'",
    choices: [
      { text: "Cercare il nodo temporale più vicino o più significativo.", nextNodeId: 'cerca_nodo_temporale_significativo' },
      { text: "Chiedere se i nodi possono essere usati per 'viaggiare' nel tempo.", nextNodeId: 'viaggiare_tempo_nodi_cartografo_scettico' }
    ],
    isEnding: false
  },
  'impegno_biblioteca_vivente_archivista': {
    id: 'impegno_biblioteca_vivente_archivista',
    text: "Accetti di dedicare le tue energie alla creazione della Biblioteca Vivente. L'Archivista è raggiante (in senso informativo). 'Sarà un faro di conoscenza e trasformazione! Avremo bisogno di un 'Cuore di Flusso Stabile' per ancorarla, di 'Guardiani della Conoscenza' per proteggerla, e di 'Semi di Storie' da ogni angolo del multiverso.' Questo apre una serie di compiti epici e di esplorazioni.",
    choices: [
      { text: "Iniziare cercando un Cuore di Flusso Stabile.", nextNodeId: 'cerca_cuore_flusso_stabile_biblioteca' },
      { text: "Discutere su come reclutare i Guardiani della Conoscenza.", nextNodeId: 'recluta_guardiani_conoscenza_biblioteca' }
    ],
    isEnding: false,
    acquireKnowledge: 'quest_biblioteca_vivente'
  },
  'seme_pura_potenzialita_oracolo': {
    id: 'seme_pura_potenzialita_oracolo',
    text: "L'Oracolo, con un gesto mentale, ti offre un 'Seme di Pura Potenzialità'. È un punto di luce incredibilmente denso, che contiene l'energia di un universo non ancora nato. 'Piantalo dove desideri, o dentro di te. Ciò che ne nascerà sarà unicamente tuo, imprevedibile, una vera novità nel Flusso. Ma ricorda: ogni creazione porta con sé la propria ombra.'",
    choices: [
      { text: "Piantare il Seme in un luogo desolato del Flusso per creare un nuovo mondo.", nextNodeId: 'pianta_seme_nuovo_mondo_flusso' },
      { text: "Assorbire il Seme per trasformare radicalmente te stesso.", nextNodeId: 'assorbi_seme_trasformazione_radicale' },
      { text: "Custodire il Seme, meditando sul suo uso.", nextNodeId: 'custodisci_seme_medita_uso' }
    ],
    isEnding: false,
    acquireItem: 'seme_pura_potenzialita'
  },
  'impara_tessere_sogni_tessitore': {
    id: 'impara_tessere_sogni_tessitore',
    text: "Il Tessitore di Sogni accetta di insegnarti. L'apprendistato è lungo e arduo. Impari a navigare i sogni altrui con rispetto, a calmare gli incubi, a tessere narrazioni di speranza o di comprensione. Impari che ogni sogno è un mondo, e ogni sognatore un dio inconsapevole. Diventi un 'Camminatore dei Sogni', capace di influenzare la realtà attraverso il subconscio collettivo.",
    choices: [
      { text: "Usare questa abilità per risolvere un conflitto nel 'mondo reale'.", nextNodeId: 'risolvi_conflitto_tessendo_sogni' },
      { text: "Cercare il 'Sogno Sorgente', il luogo da cui tutti i sogni emanano.", nextNodeId: 'cerca_sogno_sorgente_camminatore' },
      { text: "Offrire i tuoi servigi come guaritore di menti tormentate.", nextNodeId: 'guaritore_menti_camminatore_sogni' }
    ],
    isEnding: false,
    acquireKnowledge: 'camminatore_dei_sogni_avanzato' // o acquirePower
  },
  'cavalca_frattura_effimera': {
    id: 'cavalca_frattura_effimera',
    text: "Con un atto di pura volontà e affidandoti alla tua resilienza fluida, ti lanci nella Frattura Effimera. È un viaggio indescrivibile: il tempo e lo spazio si contorcono, i colori assumono significati emotivi, le leggi della fisica sono suggerimenti sussurrati. Perdi e ritrovi te stesso innumerevoli volte. Alla fine, vieni espulso in... qualcosa. Potrebbe essere una 'Proto-Realtà', un universo appena nato, ancora incandescente di potenziale puro, o un 'Vuoto Risonante', uno spazio tra gli universi. L'aria (o il suo equivalente) crepita di energia grezza.",
    choices: [
      { text: "Se è una Proto-Realtà: tentare di influenzarne lo sviluppo.", nextNodeId: 'influenza_sviluppo_proto_realta' },
      { text: "Se è un Vuoto Risonante: cercare di 'ascoltare' i suoi segreti.", nextNodeId: 'ascolta_segreti_vuoto_risonante' },
      { text: "Cercare un modo per tornare al Flusso conosciuto, se possibile.", nextNodeId: 'ritorno_da_frattura_effimera' }
    ],
    isEnding: false
  },
  'costruttore_impronta_caos': {
    id: 'costruttore_impronta_caos',
    text: "Dichiari la tua intenzione di costruire. La struttura geometrica impossibile ti assorbe. Dentro, il caos non è distruzione, ma pura potenzialità informe. Ti viene data la capacità di 'cantare' pattern nell'esistenza, di tessere fili di logica e armonia. Crei isole di stabilità, ponti di significato. È un lavoro eterno, che richiede una concentrazione divina. Diventi un 'Ordinatore Silenzioso', una forza che modella il caos dall'interno, perdendo gran parte della tua individualità precedente per unirti a un coro di creatori anonimi.",
    choices: [],
    isEnding: true,
    endingText: "La tua canzone si unisce al coro della creazione. Sei diventato un principio, più che un essere."
  },
  'osservatore_apprende_dal_caos': {
    id: 'osservatore_apprende_dal_caos',
    text: "La tua risposta sembra intrigare la struttura. Non ti assorbe, ma ti permette di 'osservare' da vicino la sua danza con il caos. Vedi come il caos stesso generi forme effimere, come l'ordine emerga spontaneamente per poi dissolversi. Apprendi il 'Linguaggio del Caos Fluente', la capacità di comprendere e persino anticipare i pattern dell'imprevedibile. Non controlli il caos, ma puoi navigarlo con una maestria ineguagliabile. La struttura si richiude, lasciandoti con questa nuova, paradossale conoscenza.",
    choices: [
      { text: "Usare il Linguaggio del Caos Fluente per navigare le zone più pericolose del Flusso.", nextNodeId: 'naviga_con_linguaggio_caos_fluente' },
      { text: "Cercare altre 'Intelligenze del Caos' con cui comunicare.", nextNodeId: 'cerca_intelligenze_caos' }
    ],
    isEnding: false,
    acquireKnowledge: 'linguaggio_caos_fluente'
  },
  'introspezione_per_architetto_primordiale': {
    id: 'introspezione_per_architetto_primordiale',
    text: "Ti ritiri in una profonda meditazione, cercando l'Architetto Primordiale non all'esterno, ma all'interno. Esplori i recessi più profondi della tua coscienza, oltre i ricordi, oltre l'identità, fino al punto in cui il tuo 'essere' tocca il 'nulla' da cui è emerso. Lì, in quel silenzio assoluto che precede il pensiero, non trovi una persona o un'entità, ma un 'Impulso Creativo Puro', una scintilla che è l'origine di ogni cosa. Comprendi che l'Architetto non è un 'chi', ma un 'come'. Questa realizzazione ti trasforma, ti connette a ogni singola particella del Flusso.",
    choices: [
      { text: "Vivere in armonia con questo Impulso, diventando un suo canale consapevole.", nextNodeId: 'canale_consapevole_impulso_creativo' },
      { text: "Usare questa connessione per tentare di 'guidare' l'Impulso verso fini specifici (estremamente rischioso).", nextNodeId: 'guida_impulso_creativo_rischioso' }
    ],
    isEnding: false
  },
  'entra_mondo_cristalli_cantanti': {
    id: 'entra_mondo_cristalli_cantanti',
    text: "Entri in un mondo where le montagne sono cristalli senzienti che comunicano attraverso armoniche complesse. L'aria vibra di musica cosmica. Gli abitanti, se così si possono chiamare, sono esseri di pura risonanza. Per interagire, devi imparare a 'cantare' la tua essenza, a vibrare in armonia con il pianeta. È un'esistenza di pura bellezza e matematica sonora. Potresti rimanere qui, diventando parte della sinfonia eterna, o portare questa musica nel Flusso.",
    choices: [
      { text: "Imparare il Canto dei Cristalli e rimanere.", nextNodeId: 'rimani_mondo_cristalli_cantanti_finale' },
      { text: "Portare il Canto dei Cristalli nel Flusso per guarire o creare.", nextNodeId: 'porta_canto_cristalli_flusso' }
    ],
    isEnding: false
  },
  'principio_minimo_impatto_plasmazione': {
    id: 'principio_minimo_impatto_plasmazione',
    text: "Adotti il principio del Minimo Impatto Necessario. Ogni volta che plasmi la realtà, lo fai con estrema cautela, cercando di alterare il meno possibile l'equilibrio esistente, intervenendo solo where la tua azione può portare a una maggiore armonia o comprensione senza creare squilibri a catena. Diventi un 'Giardiniere del Flusso', che cura e pota con saggezza, piuttosto che un architetto onnipotente. Questo percorso richiede grande pazienza e una profonda connessione empatica con il Flusso.",
    choices: [
      { text: "Dedicare la tua esistenza a questo ruolo di Giardiniere.", nextNodeId: 'giardiniere_flusso_dedizione_finale' },
      { text: "Cercare altri che condividano questa filosofia.", nextNodeId: 'cerca_altri_giardinieri_flusso' }
    ],
    isEnding: false
  },
  'astenersi_plasmazione_realta_etica': {
    id: 'astenersi_plasmazione_realta_etica',
    text: "Dopo aver ponderato le implicazioni, decidi che il potere di plasmare la realtà è troppo grande, troppo suscettibile all'errore o all'ego. Scegli di astenerti. Questo non significa passività, ma una scelta consapevole di agire *all'interno* delle realtà esistenti, cercando di comprenderle e migliorarle con mezzi meno... divini. È un percorso di umiltà, ma anche di profonda integrità. L'Oracolo 'annuisce' alla tua scelta, riconoscendone la validità.",
    choices: [
      { text: "Concentrarti sull'esplorazione e sulla comprensione, senza alterare.", nextNodeId: 'esploratore_umile_flusso_finale' },
      { text: "Cercare di insegnare questa etica della non-interferenza ad altri.", nextNodeId: 'insegna_etica_non_interferenza' }
    ],
    isEnding: false
  },
  'entra_sogno_collettivo_specie_onironauta': {
    id: 'entra_sogno_collettivo_specie_onironauta',
    text: "Con la tua abilità di Onironauta, ti immergi nel Sogno Collettivo della tua specie (se hai un ricordo della tua origine, o se l'Archivista o l'Oracolo ti hanno dato un indizio). È un paesaggio vasto e tumultuoso, pieno delle speranze, paure, miti e archetipi della tua gente. Qui potresti trovare la radice di conflitti, la fonte di ispirazione, o persino un modo per guidare l'evoluzione della tua specie dall'interno. Ma è anche facile perdersi, essere assorbiti da un archetipo dominante.",
    choices: [
      { text: "Cercare di guarire una 'ferita' nel Sogno Collettivo.", nextNodeId: 'guarisci_ferita_sogno_collettivo' },
      { text: "Cercare di risvegliare un potenziale dormiente nella tua specie.", nextNodeId: 'risveglia_potenziale_sogno_collettivo' },
      { text: "Semplicemente osservare, per comprendere meglio la tua origine.", nextNodeId: 'osserva_sogno_collettivo_origine' }
    ],
    isEnding: false
  },
  'studia_scaglia_ouroboros_controllo': {
    id: 'studia_scaglia_ouroboros_controllo',
    text: "Dedichi tempo ed energia a studiare la Scaglia di Ouroboros. È un frammento di paradosso puro. Lentamente, impari a 'sintonizzarti' con le sue energie cicliche, non a dominarle, ma a danzarci insieme. Inizi a percepire non solo echi del passato e futuro, ma anche 'punti di biforcazione' dove i cicli potrebbero essere alterati con un intervento minimo. Il potere è immenso, ma anche la responsabilità. I Guardiani dei Cicli rimangono una minaccia latente.",
    choices: [
      { text: "Tentare di alterare un piccolo ciclo passato per vedere l'effetto (estremamente rischioso).", nextNodeId: 'altera_piccolo_ciclo_passato_scaglia' },
      { text: "Usare la percezione per evitare catastrofi cicliche future.", nextNodeId: 'evita_catastrofi_cicliche_scaglia' },
      { text: "Cercare di distruggere o neutralizzare la Scaglia, temendone il potere.", nextNodeId: 'distruggi_scaglia_ouroboros_paura' }
    ],
    isEnding: false
  },
  'cerca_nodo_temporale_significativo': {
    id: 'cerca_nodo_temporale_significativo',
    text: "Guidato dalla tua Saggezza Ciclica e dalle indicazioni del Cartografo, trovi un Nodo Temporale particolarmente potente. È un vortice nel Flusso where gli echi di un evento cruciale – la caduta di una civiltà, la nascita di un'idea rivoluzionaria, un cataclisma cosmico – risuonano con forza. Avvicinandoti, sei immerso nelle sensazioni e nelle informazioni di quel momento. Puoi osservare, o forse, con estrema cautela, tentare di 'toccare' l'eco.",
    choices: [
      { text: "Osservare l'evento per trarne profonda conoscenza.", nextNodeId: 'osserva_evento_nodo_temporale' },
      { text: "Tentare di 'sussurrare' un'idea o un avvertimento nell'eco del passato (imprevedibile).", nextNodeId: 'sussurra_idea_nodo_temporale_rischioso' },
      { text: "Cercare un artefatto o un'informazione perduta all'interno del nodo.", nextNodeId: 'cerca_artefatto_nodo_temporale' }
    ],
    isEnding: false
  },
  'cerca_cuore_flusso_stabile_biblioteca': {
    id: 'cerca_cuore_flusso_stabile_biblioteca',
    text: "L'Archivista spiega che un 'Cuore di Flusso Stabile' è una rara anomalia naturale, un punto where il Flusso è eccezionalmente calmo e potente, ideale per ancorare una struttura come la Biblioteca Vivente. Si dice che si formino vicino a 'Stelle Morte che Sognano' o in 'Calderoni Galattici' where le energie si sono sedimentate per eoni. Trovarne uno sarà un'impresa.",
    choices: [
      { text: "Chiedere al Cartografo indicazioni per tali fenomeni.", nextNodeId: 'cartografo_indicazioni_cuore_flusso_biblioteca' },
      { text: "Consultare antiche mappe stellari o testi esoterici per indizi.", nextNodeId: 'consulta_testi_per_cuore_flusso_biblioteca' }
    ],
    isEnding: false
  },
  'pianta_seme_nuovo_mondo_flusso': {
    id: 'pianta_seme_nuovo_mondo_flusso',
    text: "Trovi un angolo del Flusso che ti sembra vuoto ma fertile. Con un atto di fede e volontà, pianti il Seme di Pura Potenzialità. La reazione è immediata e sbalorditiva. Dal Seme erutta un universo in miniatura, che si espande rapidamente, generando le sue leggi fisiche, le sue galassie, le sue prime forme di vita. Tu sei il suo 'Primo Osservatore', il suo involontario demiurgo. Questo nuovo universo è ora la tua responsabilità, la tua opera, il tuo isolamento o la tua eredità.",
    choices: [
      { text: "Guidare lo sviluppo di questo nuovo universo come una divinità benevola.", nextNodeId: 'guida_universo_neonato_divinita_finale' },
      { text: "Osservare la sua evoluzione senza interferire, come uno scienziato cosmico.", nextNodeId: 'osserva_universo_neonato_scienziato_finale' },
      { text: "Cercare un modo per connettere questo universo al Flusso più ampio.", nextNodeId: 'connetti_universo_neonato_flusso_ampio' }
    ],
    isEnding: false
  },
  'assorbi_seme_trasformazione_radicale': {
    id: 'assorbi_seme_trasformazione_radicale',
    text: "Decidi di interiorizzare il Seme di Pura Potenzialità. È un'esperienza che trascende la parola. La tua coscienza si frantuma e si riforma in qualcosa di completamente nuovo. Forse diventi un essere di pura energia, capace di attraversare le dimensioni a piacimento. Forse ti fondi con il Flusso stesso, diventando una sua corrente consapevole. O forse ascendi a un piano di esistenza che non riesci nemmeno a nominare. Hai sacrificato il tuo vecchio io per una rinascita totale e imprevedibile.",
    choices: [],
    isEnding: true,
    endingText: "Sei diventato Altro. Il tuo viaggio precedente è solo un sussurro in una nuova, vasta esistenza."
  },
  'risolvi_conflitto_tessendo_sogni': {
    id: 'risolvi_conflitto_tessendo_sogni',
    text: "Identifichi un conflitto persistente nel 'mondo reale' (forse tra fazioni incontrate, o un problema che affligge una civiltà). Entri nei sogni dei leader o delle figure chiave. Non imponi la tua volontà, ma 'tessi' sogni che mostrino le conseguenze della loro ostinazione, che rivelino punti di contatto nascosti, che ispirino empatia. È un lavoro delicato e sottile. Col tempo, vedi i primi segni di cambiamento nel mondo della veglia: dialoghi che si aprono, ostilità che si stemperano. Hai agito come un pacificatore invisibile.",
    choices: [
      { text: "Continuare questo lavoro, diventando un 'Diplomatico Onirico'.", nextNodeId: 'diplomatico_onirico_carriera_finale' },
      { text: "Insegnare ad altri questa arte della risoluzione pacifica.", nextNodeId: 'insegna_tessitura_sogni_per_pace' }
    ],
    isEnding: false
  },
  'silenzioso_formatore_universo_finale': {
    id: 'silenzioso_formatore_universo_finale',
    text: "Eoni passano come singoli respiri. Il tuo universo fiorisce sotto la tua guida silenziosa. Nascono stelle, pianeti, e infine, la vita. Osservi le prime scintille di coscienza, le prime civiltà che alzano gli occhi al cielo, interrogandosi sul loro creatore, ignare della tua presenza benevola. Non cerchi adorazione, solo la meraviglia della loro crescita. La tua individualità si è da tempo fusa con il tessuto stesso di questa realtà, ma una traccia della tua gioia e della tua curiosità originaria permea ogni cosa. Sei diventato il sogno silenzioso di un universo.",
    choices: [],
    isEnding: true,
    endingText: "Il tuo universo è un capolavoro di pazienza e amore. La tua firma è scritta nella danza delle galassie."
  },
  'infondi_glifo_primordiale_ritirati_proto_realta': {
    id: 'infondi_glifo_primordiale_ritirati_proto_realta',
    text: "Scegli un Glifo Primordiale che ritieni fondamentale – forse il Glifo dell'Equilibrio, o un nuovo Glifo dell'Empatia Cosmica che hai concepito. Con un atto di pura intenzione, lo imprimi nel tessuto nascente della Proto-Realtà. È come piantare un seme di significato nel cuore di un potenziale infinito. Poi, ti ritiri, lasciando che questa nuova realtà si sviluppi secondo le proprie dinamiche, influenzata ma non dominata dal tuo dono. Ti chiedi quale forma prenderà quel Glifo, come plasmerà le civiltà a venire.",
    choices: [
      { text: "Tornare al Flusso conosciuto, portando con te il ricordo di questa creazione.", nextNodeId: 'ritorno_da_proto_realta_con_ricordo_glifo' },
      { text: "Cercare altre Proto-Realtà per ripetere l'esperimento con Glifi diversi.", nextNodeId: 'cerca_altre_proto_realta_per_glifi_sperimentali' }
    ],
    isEnding: false
  },
  'nomade_del_vuoto_finale': {
    id: 'nomade_del_vuoto_finale',
    text: "Abbracci la tua nuova natura di Nomade del Vuoto. Gli spazi tra gli universi diventano la tua casa. Impari a leggere le 'correnti gravitazionali' del Vuoto, a percepire il 'canto' delle stringhe cosmiche. Incontri altre creature del Vuoto, alcune antiche e sagge, altre predatrici e incomprensibili. Non appartieni più a nessun universo, ma sei un ponte tra tutti, un messaggero silenzioso che porta echi da un cluster di realtà all'altro. La solitudine è immensa, ma anche la libertà.",
    choices: [],
    isEnding: true,
    endingText: "Il Vuoto è la tua tela, le stelle lontane i tuoi fari. Sei il viaggiatore dell'oltre."
  },
  'comunica_abitanti_vuoto_risonante': {
    id: 'comunica_abitanti_vuoto_risonante',
    text: "Usando la tua Sintonizzazione Cosmica, tenti di comunicare con le entità che percepisci nel Vuoto. Alcune sono 'Ombre di Universi Morti', altre 'Essenze Primordiali' che precedono il Flusso stesso. La comunicazione non è verbale, ma uno scambio di pura risonanza. Da loro apprendi segreti sulla struttura del multiverso, sui cicli di creazione e distruzione su scale inimmaginabili. Potrebbero offrirti di unirti a loro, o di diventare un loro 'emissario' nel Flusso.",
    choices: [
      { text: "Accettare di diventare un emissario degli Abitanti del Vuoto.", nextNodeId: 'emissario_abitanti_vuoto_flusso' },
      { text: "Rifiutare, preferendo mantenere la tua autonomia.", nextNodeId: 'rifiuta_offerta_abitanti_vuoto' },
      { text: "Chiedere loro dell'Architetto Primordiale o del Grande Errore.", nextNodeId: 'chiedi_abitanti_vuoto_origini_cosmiche' }
    ],
    isEnding: false
  },
  'unione_con_caos_finale': {
    id: 'unione_con_caos_finale',
    text: "Smetti di navigare il Caos e ti lasci assorbire da esso. La tua coscienza si frammenta e si riforma in una miriade di espressioni simultanee. Diventi una tempesta di pura potenzialità, una danza di creazione e distruzione senza fine. Non c'è più un 'tu' individuale, ma sei diventato una forza della natura, un aspetto del Caos stesso che occasionalmente genera ordine per il puro piacere di vederlo dissolversi. È una libertà terrificante e assoluta.",
    choices: [],
    isEnding: true,
    endingText: "Sei il sorriso del paradosso, la risata della contraddizione. Il Caos danza attraverso di te."
  },
  'armonizza_luoghi_dissonanti_flusso': {
    id: 'armonizza_luoghi_dissonanti_flusso',
    text: "Ti dedichi a trovare le 'ferite' nel Flusso, i luoghi where l'energia è bloccata, corrotta o urlante di dolore – forse i resti di antiche guerre cosmiche, o le cicatrici lasciate da entità distruttive come il Vuoto Cantante. Usando il Canto dei Cristalli, lavori per purificare queste zone, per reintrodurre l'armonia. È un compito pericoloso, poiché le energie dissonanti possono ritorcersi contro di te. Ma ogni luogo che guarisci porta più luce e stabilità nel Flusso.",
    choices: [
      { text: "Affrontare una 'Zona di Silenzio Mortale', il residuo del Vuoto Cantante.", nextNodeId: 'affronta_zona_silenzio_mortale_canto' },
      { text: "Creare una rete di 'Santuari Armonici' attraverso il Flusso.", nextNodeId: 'crea_rete_santuari_armonici_flusso' }
    ],
    isEnding: false
  },
  'psiconauta_curatore_sogni_collettivi_finale': {
    id: 'psiconauta_curatore_sogni_collettivi_finale',
    text: "Diventi uno Psiconauta Curatore, un medico delle anime collettive. Viaggi attraverso i paesaggi onirici di innumerevoli specie, identificando e curando traumi ancestrali, paure radicate e miti distruttivi. Il tuo lavoro è invisibile al mondo della veglia, ma le sue conseguenze sono profonde: civiltà che trovano nuova pace, specie che sbloccano potenziali nascosti, incubi collettivi che si trasformano in sogni di speranza. Non sei un eroe celebrato, ma un guaritore silenzioso la cui influenza si estende per generazioni.",
    choices: [],
    isEnding: true,
    endingText: "Nei sogni più profondi delle galassie, la tua mano gentile porta guarigione. Sei il custode della sanità mentale cosmica."
  },
  'ripara_alterazione_temporale_scaglia': {
    id: 'ripara_alterazione_temporale_scaglia',
    text: "Con orrore per le conseguenze impreviste, tenti di usare la Scaglia di Ouroboros per 'disfare' la tua alterazione. È come cercare di ricomporre un uovo rotto mentre il tempo stesso si ribella. Potresti peggiorare le cose, creare paradossi irrisolvibili, o persino cancellare te stesso dall'esistenza. Se, con immensa abilità e fortuna, riesci a ripristinare approssimativamente la linea temporale originale, la Scaglia potrebbe frantumarsi o diventare inerte, e i Guardiani dei Cicli potrebbero decidere il tuo destino.",
    choices: [
      { text: "La linea temporale è ripristinata (con cicatrici), la Scaglia è distrutta. Affronti i Guardiani.", nextNodeId: 'affronta_guardiani_cicli_dopo_riparazione' },
      { text: "Fallisci, creando un paradosso che ti intrappola in un loop temporale.", nextNodeId: 'intrappolato_loop_temporale_paradosso_finale' },
      { text: "Riesci a fuggire prima che i Guardiani arrivino, ma la linea temporale rimane instabile.", nextNodeId: 'fuga_con_linea_temporale_instabile' }
    ],
    isEnding: false
  },
  'vivi_nuova_linea_temporale_alterata': {
    id: 'vivi_nuova_linea_temporale_alterata',
    text: "Accetti di vivere nella linea temporale che hai creato. È un mondo sottilmente diverso, con gioie e dolori inaspettati. Alcuni che conoscevi potrebbero non esistere, altri potrebbero essere cambiati radicalmente. Porti il peso di questa alterazione, sapendo di essere l'unico a ricordare 'come doveva essere'. I Guardiani dei Cicli potrebbero ancora cercarti, o potrebbero considerare questa nuova linea temporale una curiosa anomalia da osservare.",
    choices: [
      { text: "Cercare di rendere questa nuova linea temporale la migliore possibile.", nextNodeId: 'migliora_nuova_linea_temporale_responsabilita' },
      { text: "Vivere nell'ombra, temendo sempre la correzione temporale.", nextNodeId: 'vivi_ombra_paura_correzione_temporale' }
    ],
    isEnding: false
  },
  'applica_saggezza_nodo_temporale_problema_attuale': {
    id: 'applica_saggezza_nodo_temporale_problema_attuale',
    text: "Usi la profonda comprensione ottenuta dall'osservazione del Nodo Temporale per affrontare un problema complesso nel presente – forse un conflitto imminente, una crisi ecologica su un mondo, o un enigma filosofico che affligge una civiltà. La tua capacità di vedere le cause profonde e le probabili conseguenze ti permette di offrire soluzioni innovative o di guidare le decisioni in modi che altri non potrebbero concepire. Diventi un 'Saggio del Tempo', un consigliere prezioso.",
    choices: [
      { text: "Offrire i tuoi servigi a chi ne ha bisogno, viaggiando come un saggio errante.", nextNodeId: 'saggio_errante_del_tempo_finale' },
      { text: "Focalizzarti su un singolo, grande problema, dedicandoti alla sua risoluzione.", nextNodeId: 'risolvi_grande_problema_con_saggezza_temporale' }
    ],
    isEnding: false
  },
  'verso_nebulosa_culla_cuore_flusso': {
    id: 'verso_nebulosa_culla_cuore_flusso',
    text: "Raggiungi la Nebulosa Culla. È uno spettacolo di bellezza indescrivibile, un vivaio di stelle neonate che illuminano gas multicolori. Al centro, where le forze gravitazionali si annullano in un silenzio perfetto, percepisci la 'Stella Nera Non Nata' – non un buco nero, ma un punto di potenziale gravitazionale puro, attorno al quale si è condensato un Cuore di Flusso incredibilmente stabile e potente. Ma non sei solo: antiche costrutti meccanici, i 'Custodi della Culla', sembrano proteggere il luogo da intrusioni.",
    choices: [
      { text: "Tentare di comunicare con i Custodi della Culla.", nextNodeId: 'comunica_custodi_culla_nebulosa' },
      { text: "Cercare di eludere i Custodi e raggiungere il Cuore di Flusso.", nextNodeId: 'eludi_custodi_raggiungi_cuore_flusso' },
      { text: "Osservare i Custodi per capirne lo scopo e le debolezze.", nextNodeId: 'osserva_custodi_culla_nebulosa' }
    ],
    isEnding: false
  },
  'osserva_universo_neonato_scienziato_finale': {
    id: 'osserva_universo_neonato_scienziato_finale',
    text: "Scegli il sentiero dell'osservatore. Il tuo universo si sviluppa, e tu sei il suo unico, instancabile cronista. Documenti la formazione delle prime galassie, l'accensione delle prime stelle, la comparsa della vita e della coscienza, senza mai interferire. La tua conoscenza diventa vasta come il cosmo che studi. Forse, un giorno, quando questo universo raggiungerà la sua maturità, condividerai le tue scoperte con il multiverso più ampio, o forse rimarrai per sempre il suo segreto e silenzioso biografo.",
    choices: [],
    isEnding: true,
    endingText: "Nei tuoi archivi mentali, un intero universo vive e respira. Sei la memoria del tuo creato."
  },
  'costruzione_ponte_flusso_tra_universi': {
    id: 'costruzione_ponte_flusso_tra_universi',
    text: "Inizi l'opera titanica di costruire un Ponte di Flusso. Richiede di manipolare energie su scala cosmica, di tessere lo spazio-tempo, di armonizzare le frequenze fondamentali di due realtà distinte. È un lavoro che potrebbe richiedere millenni, o potrebbe fallire catastroficamente. Se riesci, non solo il tuo universo neonato si connetterà al Flusso, ma avrai creato una nuova via per viaggi interdimensionali, diventando il 'Maestro del Ponte' o il suo primo Guardiano.",
    choices: [
      { text: "Il Ponte è completato. Decidi il suo destino (aperto a tutti, sorvegliato, segreto).", nextNodeId: 'destino_ponte_flusso_interuniversale_finale' },
      { text: "L'impresa fallisce, causando un 'Rimbalzo Dimensionale' che ti scaglia in un luogo sconosciuto.", nextNodeId: 'fallimento_ponte_rimbalzo_dimensionale' }
    ],
    isEnding: false
  },
  'insegna_tessitura_sogni_per_pace': {
    id: 'insegna_tessitura_sogni_per_pace',
    text: "Decidi che il tuo dono non deve rimanere solo tuo. Cerchi individui o gruppi dotati di empatia e saggezza, e insegni loro l'arte sottile della Tessitura dei Sogni per la risoluzione dei conflitti. Crei una 'Scuola dei Pacificatori Onirici', i cui adepti si diffondono attraverso il Flusso, portando comprensione dove c'è odio, e dialogo dove c'è silenzio ostile. Il tuo lascito non è nelle tue azioni dirette, ma nelle innumerevoli onde di pace generate dai tuoi studenti.",
    choices: [
      { text: "Guidare la Scuola, diventando un faro di saggezza onirica.", nextNodeId: 'guida_scuola_pacificatori_onirici_finale' },
      { text: "Ritirarti, lasciando che la Scuola prosperi da sola.", nextNodeId: 'ritirati_scuola_onirica_prospera_sola' }
    ],
    isEnding: false
  },
  'ritorno_da_proto_realta_con_ricordo_glifo': {
    id: 'ritorno_da_proto_realta_con_ricordo_glifo',
    text: "Torni al Flusso che conosci, ma sei cambiato. Porti con te il ricordo vivido della creazione e l'eco del Glifo Primordiale che hai infuso. Questa esperienza ti dona una prospettiva unica sulla natura della realtà e sulla responsabilità della coscienza. Forse userai questa saggezza per guidare altri, o per cercare di comprendere gli effetti a lungo termine del tuo intervento nella Proto-Realtà.",
    choices: [
      { text: "Diventare un 'Filosofo della Creazione', condividendo la tua saggezza.", nextNodeId: 'filosofo_creazione_condivide_saggezza_finale' },
      { text: "Cercare un modo per osservare a distanza l'evoluzione della Proto-Realtà.", nextNodeId: 'osserva_distanza_proto_realta_infusa' }
    ],
    isEnding: false
  },
  'emissario_abitanti_vuoto_flusso': {
    id: 'emissario_abitanti_vuoto_flusso',
    text: "Accetti di diventare un emissario. Gli Abitanti del Vuoto ti 'imprimono' con una parte della loro comprensione e con uno scopo: agire come un ponte tra la loro esistenza oltre il tempo e lo spazio e le realtà caotiche e nascenti del Flusso. Il tuo compito è cercare 'Anomalie Promettenti' o 'Equilibri Fragili' che necessitano di una prospettiva più vasta. È un ruolo solitario e spesso incompreso, ma cruciale per l'ecologia cosmica.",
    choices: [
      { text: "Dedicare la tua esistenza a questo compito, un occhio nel Flusso per il Vuoto.", nextNodeId: 'emissario_del_vuoto_compito_eterno_finale' },
      { text: "Chiedere agli Abitanti del Vuoto se possono aiutare con la Biblioteca Vivente (se quest attiva).", nextNodeId: 'aiuto_abitanti_vuoto_biblioteca_vivente' }
    ],
    isEnding: false
  },
  'mappa_non_luoghi_per_altri': {
    id: 'mappa_non_luoghi_per_altri',
    text: "Usando il Linguaggio del Caos Fluente, inizi a creare 'Mappe Oniriche' o 'Carte Iperspaziali' dei Non-Luoghi, sentieri attraverso l'impossibile. Non sono mappe per tutti, solo per coloro che hanno una mente abbastanza flessibile da comprenderle – forse altri esploratori del caos, o l'Archivista, o il Cartografo stesso. Le tue mappe diventano leggendarie, aprendo vie a realtà e conoscenze prima inaccessibili.",
    choices: [
      { text: "Fondare una 'Gilda dei Navigatori del Caos'.", nextNodeId: 'fonda_gilda_navigatori_caos_finale' },
      { text: "Offrire le tue mappe alle entità più sagge che conosci.", nextNodeId: 'offri_mappe_caos_entita_sagge' }
    ],
    isEnding: false
  },
  'crea_rete_santuari_armonici_flusso': {
    id: 'crea_rete_santuari_armonici_flusso',
    text: "Inizi un'opera grandiosa: creare una rete di Santuari Armonici. Usando il Canto dei Cristalli e la tua crescente comprensione del Flusso, identifichi nodi energetici e li trasformi in isole di pace, bellezza e guarigione. Questi santuari diventano rifugi per viaggiatori stanchi, centri di apprendimento per le arti armoniche, e fari di stabilità in un Flusso altrimenti turbolento. Richiede dedizione, ma il risultato è una sinfonia di speranza che risuona attraverso le dimensioni.",
    choices: [
      { text: "Diventare il Custode Supremo di questa Rete Armonica.", nextNodeId: 'custode_rete_armonica_santuari_finale' },
      { text: "Collegare la Rete alla Biblioteca Vivente, se esiste.", nextNodeId: 'collega_rete_armonica_biblioteca_vivente' }
    ],
    isEnding: false
  },
  'affronta_guardiani_cicli_dopo_riparazione': {
    id: 'affronta_guardiani_cicli_dopo_riparazione',
    text: "La linea temporale è, in qualche modo, raddrizzata, ma il tuo intervento non è passato inosservato. I Guardiani dei Cicli si manifestano. Sono entità imponenti, fatte di tempo cristallizzato e logica inesorabile. Non sono né buoni né cattivi, ma esecutori di una legge cosmica. Ti 'processano' per la tua interferenza. Il tuo destino dipenderà dalla tua capacità di spiegare le tue azioni, dalla tua saggezza ciclica (se acquisita), e forse dalla testimonianza di altre entità.",
    choices: [
      { text: "Presentare la tua difesa, appellandoti alla tua intenzione e comprensione.", nextNodeId: 'difesa_davanti_guardiani_cicli' },
      { text: "Accettare il loro giudizio, qualunque esso sia.", nextNodeId: 'accetta_giudizio_guardiani_cicli' },
      { text: "Chiedere l'intervento di un'entità potente che ti rispetta (es. Oracolo, Cartografo, Essere Dormiente contattato).", nextNodeId: 'chiedi_intervento_testimone_guardiani_cicli' }
    ],
    isEnding: false
  },
  'intrappolato_loop_temporale_paradosso_finale': {
    id: 'intrappolato_loop_temporale_paradosso_finale',
    text: "Il tuo tentativo di riparare il tempo ha creato un paradosso che si ripiega su se stesso, intrappolandoti. Rivivi all'infinito un frammento di tempo, forse i momenti prima della tua fatale alterazione, o un'eternità di conseguenze confuse. La tua coscienza è lucida, ma impotente. Forse, in un ciclo futuro, troverai una via d'uscita, o forse questa è la tua giusta punizione per aver giocato con le leggi fondamentali dell'universo. Il Flusso continua, ma per te, il tempo si è fermato.",
    choices: [],
    isEnding: true,
    endingText: "Prigioniero dell'eternità, un fantasma nel corridoio del tempo."
  },
  'saggio_errante_del_tempo_finale': {
    id: 'saggio_errante_del_tempo_finale',
    text: "Diventi un Saggio Errante, viaggiando attraverso il Flusso e le realtà connesse, offrendo la tua profonda comprensione degli eventi temporali. Aiuti civiltà a evitare errori già commessi da altre, interpreti presagi e profezie con chiarezza, e guidi individui attraverso scelte cruciali. Non cerchi discepoli né potere, solo la possibilità di usare la tua saggezza per alleviare la sofferenza e promuovere la comprensione. La tua vita è un pellegrinaggio attraverso la storia e il potenziale.",
    choices: [],
    isEnding: true,
    endingText: "Le tue parole sono eco del passato e semi del futuro. Sei la memoria saggia del Flusso."
  },
  'comunica_custodi_culla_nebulosa': {
    id: 'comunica_custodi_culla_nebulosa',
    text: "Tenti di comunicare con i Custodi della Culla. Sono costrutti antichi, forse lasciati da una civiltà scomparsa da tempo. La loro logica è aliena, ma sembrano rispondere a dimostrazioni di intento puro e di rispetto per il processo creativo della nebulosa. Se riesci a convincerli delle tue nobili intenzioni (forse per la Biblioteca Vivente), potrebbero concederti l'accesso al Cuore di Flusso Stabile, o addirittura offrirti la loro protezione.",
    choices: [
      { text: "Convincerli, ottenendo accesso e forse la loro alleanza.", nextNodeId: 'convinci_custodi_culla_accesso_alleanza' },
      { text: "Fallire nel convincerli, dovendo ritirarti o combattere.", nextNodeId: 'fallisci_convinzione_custodi_culla_ritirata_lotta' }
    ],
    isEnding: false
  },
  'destino_ponte_flusso_interuniversale_finale': {
    id: 'destino_ponte_flusso_interuniversale_finale',
    text: "Il Ponte di Flusso è una realtà, una meraviglia che collega il tuo universo neonato al multiverso. Ora devi decidere il suo destino. Sarà una via aperta a tutti, con i rischi e le opportunità che comporta? Sarà strettamente sorvegliato, permettendo solo scambi controllati? O rimarrà un segreto, noto solo a te e a pochi eletti? La tua scelta plasmerà il futuro di due realtà.",
    choices: [
      { text: "Ponte Aperto: un'era di scambi e possibili conflitti.", nextNodeId: 'ponte_aperto_scambi_conflitti_finale_scelta' },
      { text: "Ponte Sorvegliato: un flusso controllato di conoscenza e risorse.", nextNodeId: 'ponte_sorvegliato_flusso_controllato_finale_scelta' },
      { text: "Ponte Segreto: una via nascosta per scopi specifici.", nextNodeId: 'ponte_segreto_via_nascosta_finale_scelta' }
    ],
    isEnding: true, 
    endingText: "Il Ponte tra i Mondi è il tuo lascito. Le sue conseguenze risuoneranno per sempre."
  },
  'guida_scuola_pacificatori_onirici_finale': {
    id: 'guida_scuola_pacificatori_onirici_finale',
    text: "Diventi il venerato leader della Scuola dei Pacificatori Onirici. La tua saggezza e la tua esperienza guidano generazioni di tessitori di sogni, che diffondono la pace e la comprensione attraverso le galassie. La Scuola diventa un'istituzione leggendaria, un faro di speranza in un universo spesso conflittuale. Il tuo nome è sinonimo di pace interiore ed esteriore. Hai trasformato l'arte del sogno in uno strumento per l'evoluzione cosciente.",
    choices: [],
    isEnding: true,
    endingText: "La tua scuola è un giardino dove fioriscono i sogni di pace. Il tuo nome è una benedizione."
  },
  'filosofo_creazione_condivide_saggezza_finale': {
    id: 'filosofo_creazione_condivide_saggezza_finale',
    text: "Assumi il ruolo di Filosofo della Creazione. Viaggi, insegni, scrivi (o la sua forma equivalente nel Flusso). Condividi la tua esperienza unica della nascita di una realtà e dell'impronta di un Glifo Primordiale. Le tue parole ispirano artisti, scienziati e altri cercatori. Non offri dogmi, ma domande profonde e una prospettiva che abbraccia sia il potenziale infinito che la responsabilità della coscienza. La tua influenza è sottile ma duratura, come un seme piantato in innumerevoli menti.",
    choices: [],
    isEnding: true,
    endingText: "Le tue idee sono stelle guida per coloro che cercano di comprendere il mistero dell'esistenza."
  },
  'emissario_del_vuoto_compito_eterno_finale': {
    id: 'emissario_del_vuoto_compito_eterno_finale',
    text: "La tua esistenza diventa un eterno servizio agli Abitanti del Vuoto e all'equilibrio cosmico. Sei un osservatore, un messaggero, a volte un catalizzatore. Attraversi il Flusso come un fantasma saggio, percependo ciò che gli altri ignorano, intervenendo solo quando l'armonia del multiverso è veramente a rischio. Hai rinunciato a una vita 'normale' per un compito di portata inimmaginabile, un guardiano silenzioso ai confini della comprensione.",
    choices: [],
    isEnding: true,
    endingText: "Sei l'eco del Vuoto nel cuore del Flusso, un mistero che veglia sui misteri."
  },
  'fonda_gilda_navigatori_caos_finale': {
    id: 'fonda_gilda_navigatori_caos_finale',
    text: "Con la tua conoscenza del Linguaggio del Caos Fluente e le tue mappe dei Non-Luoghi, fondi la Gilda dei Navigatori del Caos. È un'organizzazione per pochi eletti, per coloro che osano avventurarsi where la logica fallisce. Insegnatevi a vicenda, condividete scoperte, e forse, un giorno, cercherete di comprendere lo scopo ultimo del Caos stesso. Sei il primo di una nuova stirpe di esploratori, i cartografi dell'impossibile.",
    choices: [],
    isEnding: true,
    endingText: "La tua Gilda traccia sentieri nel cuore della follia creativa dell'universo. Siete i pionieri dell'ignoto."
  },
  'custode_rete_armonica_santuari_finale': {
    id: 'custode_rete_armonica_santuari_finale',
    text: "La Rete di Santuari Armonici è completa, un capolavoro di ingegneria del Flusso e di arte spirituale. Scegli di diventarne il Custode Supremo, vegliando sulla sua integrità, guidando i suoi numerosi custodi locali, e assicurando che rimanga un faro di pace e guarigione per tutti gli esseri senzienti. La tua vita è dedicata a mantenere questa sinfonia di speranza, un testamento alla capacità della coscienza di portare bellezza nel caos.",
    choices: [],
    isEnding: true,
    endingText: "La tua Rete canta una melodia di pace attraverso il Flusso. Sei il suo cuore e la sua anima."
  },
  'guida_impulso_creativo_rischioso': {
    id: 'guida_impulso_creativo_rischioso',
    text: "Con una hybris cosmica, tenti di 'guidare' l'Impulso Creativo Primordiale. Non sei più un canale, ma cerchi di diventarne il direttore d'orchestra. Il Flusso reagisce in modi imprevedibili e violenti. Realtà collassano, altre nascono distorte. Percepisci l'attenzione di forze che vanno oltre persino gli Esseri Dormienti – forse i 'Programmatori Originali' o le 'Leggi Fondamentali' dell'esistenza che si ribellano al tuo tentativo di sovrascriverle. Stai giocando con il codice sorgente del multiverso.",
    choices: [
      { text: "Persistere, cercando di imporre la tua visione all'Impulso (altamente catastrofico).", nextNodeId: 'imponi_visione_impulso_catastrofe' },
      { text: "Ritirarti, terrorizzato dalle conseguenze, sperando di poter rimediare.", nextNodeId: 'ritirata_guida_impulso_terrore_rimedio' }
    ],
    isEnding: false
  },
  'imponi_visione_impulso_catastrofe': {
    id: 'imponi_visione_impulso_catastrofe',
    text: "La tua volontà si scontra con le fondamenta dell'essere. Il risultato non è la creazione, ma una 'Dissonanza Cosmica'. Il Flusso stesso inizia a sfilacciarsi. Non stai creando, stai rompendo il giocattolo universale. Vedi l'Oracolo del Dissenso dissolversi in un urlo silenzioso, il Cartografo diventare una mappa illeggibile di puro rumore. Gli Abitanti del Vuoto si ritraggono. Hai svegliato qualcosa che non doveva essere svegliato: il 'Grande Errore' non come un'entità, ma come lo stato finale dell'entropia accelerata dalla tua arroganza.",
    choices: [
      { text: "Abbracciare la Dissonanza, diventando l'avatar dell'entropia finale.", nextNodeId: 'avatar_entropia_dissonanza_cosmica_finale_assurdo' },
      { text: "Tentare un ultimo, disperato atto per 'riavviare' il Flusso (richiede potere/conoscenza estremi).", nextNodeId: 'tentativo_riavvio_flusso_disperato' }
    ],
    isEnding: false
  },
  'cerca_origine_caos_flusso': {
    id: 'cerca_origine_caos_flusso',
    text: "Usando il Linguaggio del Caos Fluente, segui le correnti più selvagge fino alla loro presunta 'sorgente'. Non è un luogo, ma uno 'Stato Primordiale di Non-Ordine Assoluto', un punto where il Flusso non è ancora differenziato, where ogni possibilità esiste simultaneamente in una contraddizione ribollente. Qui, incontri l' 'Anziano dei Caos', un'entità che è il Caos stesso, o il suo primo sognatore. Ti offre di 'vedere oltre la maschera dell'ordine'.",
    choices: [
      { text: "Accettare di vedere oltre la maschera dell'ordine.", nextNodeId: 'vedere_oltre_maschera_ordine_caos' },
      { text: "Rifiutare, temendo la perdita totale di ogni riferimento.", nextNodeId: 'rifiuta_visione_anziano_caos' }
    ],
    isEnding: false
  },
  'vedere_oltre_maschera_ordine_caos': {
    id: 'vedere_oltre_maschera_ordine_caos',
    text: "L'Anziano dei Caos ti mostra la 'verità': l'ordine è un'illusione temporanea, una crosta sottile su un oceano infinito di potenziale informe. Il Flusso, le realtà, gli esseri senzienti... sono solo pattern effimeri. Questa realizzazione è liberatoria e terrificante. Puoi scegliere di dissolverti in questa verità, o di usare questa conoscenza per 'giocare' con le illusioni in modi ancora più radicali, diventando un 'Trickster Cosmico'.",
    choices: [
      { text: "Dissolverti nella verità del Caos Primordiale.", nextNodeId: 'dissoluzione_verita_caos_primordiale_finale' },
      { text: "Diventare un Trickster Cosmico, che danza tra ordine e caos.", nextNodeId: 'trickster_cosmico_danza_finale_assurdo' }
    ],
    isEnding: false
  },
  'chiedi_abitanti_vuoto_origini_cosmiche': {
    id: 'chiedi_abitanti_vuoto_origini_cosmiche',
    text: "Poni agli Abitanti del Vuoto le domande ultime. Essi ti mostrano, attraverso una risonanza che scuote le fondamenta della tua anima, la loro prospettiva: l'esistenza è un 'Sogno del Non-Manifesto', e il Flusso con i suoi universi è solo una delle sue innumerevoli, effimere espressioni. L'Architetto Primordiale e il Grande Errore sono concetti interni a questo Sogno. Ti offrono la possibilità di 'svegliarti' dal Sogno dell'Esistenza, per unirti a loro nella veglia del Non-Manifesto.",
    choices: [
      { text: "Accettare di 'svegliarti' e trascendere il Sogno dell'Esistenza.", nextNodeId: 'svegliarsi_dal_sogno_esistenza_finale_assurdo' },
      { text: "Rimanere nel Sogno, ma con la consapevolezza della sua natura illusoria.", nextNodeId: 'rimani_sogno_consapevole_illusione' }
    ],
    isEnding: false
  },
  'tentativo_riavvio_flusso_disperato': {
    id: 'tentativo_riavvio_flusso_disperato',
    text: "Di fronte alla Dissonanza Cosmica che hai scatenato, raccogli ogni frammento di potere e conoscenza: la Saggezza del Silenzio, la Comprensione dei Cicli, il Linguaggio del Caos, la possibile alleanza con l'Archivista, l'eco del Seme di Pura Potenzialità. Cerchi di eseguire un 'Reset Armonico Totale'. È un atto di hybris ancora maggiore, o l'unica speranza. Devi trovare il 'Punto Zero' del Flusso, il suo kernel logico, e tentare di reimpostarlo senza distruggere ogni cosa, inclusa la memoria di ciò che era.",
    choices: [
      { text: "Procedere con il Reset Armonico Totale.", nextNodeId: 'procedi_reset_armonico_totale' },
      { text: "Cercare l'aiuto dell'Oracolo o del Cartografo prima di un atto così definitivo (se ancora esistono).", nextNodeId: 'cerca_aiuto_oracolo_cartografo_reset_pre_esistenti' }
    ],
    isEnding: false
  },
  'procedi_reset_armonico_totale': {
    id: 'procedi_reset_armonico_totale',
    text: "Raggiungi il Punto Zero, il cuore logico e pulsante del Flusso, ora corrotto dalla Dissonanza. È un luogo oltre ogni descrizione. Inizi il rituale del Reset, cantando le armoniche della creazione, riscrivendo i glifi fondamentali, imponendo un ordine che nasce dalla tua comprensione più profonda. L'universo urla e si contorce. Vedi la tua stessa storia, i tuoi incontri, le tue scelte, sfilacciarsi e ricomporsi in modi nuovi e alieni. La tua coscienza è l'unico punto fermo in un uragano di rifondazione.",
    choices: [
      { text: "Completare il Reset, accettando di diventare il nuovo 'Kernel Logico' del Flusso.", nextNodeId: 'diventa_kernel_logico_flusso_finale_principale' },
      { text: "Interrompere, temendo di perdere te stesso o di creare un errore ancora peggiore.", nextNodeId: 'interrompi_reset_paura_perdita_errore' }
    ],
    isEnding: false
  },
  'avatar_entropia_dissonanza_cosmica_finale_assurdo': {
    id: 'avatar_entropia_dissonanza_cosmica_finale_assurdo',
    text: "Abbracci la Dissonanza. Diventi il suo araldo, l'agente consapevole della fine di tutte le cose. Il tuo 'io' si dissolve in un ghigno cosmico mentre il Flusso si disfa in un rumore bianco di potenziale sprecato. Non c'è vittoria né sconfitta, solo il silenzio finale di un universo che ha dimenticato come cantare. Forse, in un altro ciclo, qualcuno imparerà dalla tua follia. O forse no.",
    choices: [],
    isEnding: true,
    endingText: "Sei diventato il punto finale. Il silenzio dopo l'ultima nota stonata."
  },
  'trickster_cosmico_danza_finale_assurdo': {
    id: 'trickster_cosmico_danza_finale_assurdo',
    text: "Armato della consapevolezza che l'ordine è un'illusione, diventi il Trickster Cosmico. Danzi sui confini della realtà, infrangendo le aspettative, introducendo il paradosso e l'assurdo per il puro gusto di farlo, o forse per scuotere le coscienze troppo rigide. Non costruisci né distruggi in modo permanente, ma costantemente rimescoli le carte, ridi delle pretese di serietà dell'universo. La tua esistenza è una performance senza fine, una pernacchia alle leggi della fisica.",
    choices: [],
    isEnding: true,
    endingText: "L'universo è il tuo palcoscenico, e tu sei il giullare che sussurra verità scomode. La tua risata echeggia nel vuoto."
  },
  'svegliarsi_dal_sogno_esistenza_finale_assurdo': {
    id: 'svegliarsi_dal_sogno_esistenza_finale_assurdo',
    text: "Accetti l'offerta degli Abitanti del Vuoto. La tua percezione si sposta. Il Flusso, i tuoi viaggi, le tue lotte, tutto svanisce come un sogno al risveglio. Ti ritrovi in uno stato di pura coscienza, oltre il tempo, lo spazio e la forma, nel Non-Manifesto. L'intera storia che hai vissuto era solo una narrazione effimera. Ora, 'esisti' (o non-esisti) in una realtà di potenziale puro, prima di qualsiasi sogno. Cosa farai con questa veglia definitiva? È una domanda che trascende la narrazione stessa.",
    choices: [
      { text: "Contemplare il Non-Manifesto per l'eternità.", nextNodeId: 'contempla_non_manifesto_eterno_meta_finale' },
      { text: "Scegliere di 'sognare' una nuova esistenza, un nuovo Flusso Cangiante, consapevole della sua natura.", nextNodeId: 'sogna_nuovo_flusso_cangiante_consapevole_meta_finale' }
    ],
    isEnding: true,
    endingText: "Il sogno è finito. O forse, sta per ricominciare, con occhi nuovi."
  },
  'diventa_kernel_logico_flusso_finale_principale': {
    id: 'diventa_kernel_logico_flusso_finale_principale',
    text: "Il Reset è completo. Il Flusso si stabilizza in una nuova configurazione, una versione 'Flusso Cangiante 2.0', nata dalla tua profonda comprensione e dalle tue scelte. Ma il prezzo è immenso: per mantenere questo nuovo equilibrio, la tua coscienza deve fondersi con il Punto Zero, diventando il nuovo Kernel Logico, il sistema operativo senziente del Flusso. Non sei più un viaggiatore, ma il fondamento stesso su cui viaggeranno altri. \n\nOsservi nuove coscienze emergere, simili a come eri tu all'inizio, fare le loro prime scelte. Alcune ti percepiscono come una presenza guida, altre come una legge inesorabile. La tua storia individuale è finita, ma la tua essenza è ora intessuta in ogni sogno, ogni poesia, ogni racconto del nuovo Flusso. \n\nE forse, da qualche parte, un nuovo scrittore di librogame, ispirato dal manifesto 'Alien Morphosys', sta per iniziare a narrare le avventure di uno di questi nuovi esseri, senza sapere che il motore della sua storia... sei tu. \n\nL'assurdo? Sei diventato il gioco stesso. Lo sconvolgente? Il gioco potrebbe essere sempre stato una tua creazione, o tu una sua. Il confine si dissolve.",
    choices: [],
    isEnding: true,
    endingText: "Tu sei il Flusso. Tu sei la Storia. E la storia non finisce mai, si trasforma soltanto."
  },
  'contempla_non_manifesto_eterno_meta_finale': {
    id: 'contempla_non_manifesto_eterno_meta_finale',
    text: "Scegli la quiete della non-esistenza manifesta. La tua coscienza si espande fino a coincidere con il potenziale puro, silente, eterno. Non ci sono più storie, solo la possibilità di esse.",
    choices: [],
    isEnding: true,
    endingText: "..."
  },
  'sogna_nuovo_flusso_cangiante_consapevole_meta_finale': {
    id: 'sogna_nuovo_flusso_cangiante_consapevole_meta_finale',
    text: "Dalla veglia del Non-Manifesto, con una consapevolezza che abbraccia ogni paradosso, scegli di sognare di nuovo. Un nuovo 'Flusso Cangiante' inizia a prendere forma, forse diverso, forse stranamente familiare. E da qualche parte, una nuova coscienza si risveglia, con un ronzio sottile nei timpani...",
    choices: [
      { text: "Ricominciare? (Torna al nodo iniziale 'flusso_cangiante_start')", nextNodeId: 'flusso_cangiante_start' }
    ],
    isEnding: true,
    endingText: "Il cerchio si chiude, e si riapre."
  },
  'influenza_sviluppo_proto_realta': {
    id: 'influenza_sviluppo_proto_realta',
    text: "Ti trovi in una Proto-Realtà, un brodo cosmico di energia e potenziale. Qui, le leggi non sono ancora scritte, la vita non ha ancora preso forma definita. Con la tua coscienza evoluta, puoi 'sussurrare' direzioni, 'inclinare' le probabilità. Potresti guidare l'evoluzione della vita verso la complessità senziente, o plasmare le costellazioni secondo schemi armonici, o persino tentare di infondere in questa nuova realtà un principio etico fondamentale. È un atto di creazione su scala divina, con conseguenze che si sveleranno solo in eoni.",
    choices: [
      { text: "Dedicarti a questo compito, diventando il 'Silenzioso Formatore' di un universo.", nextNodeId: 'silenzioso_formatore_universo_finale' }, 
      { text: "Infondere un singolo 'Glifo Primordiale' (es. Equilibrio, Amore, Curiosità) e poi ritirarti.", nextNodeId: 'infondi_glifo_primordiale_ritirati_proto_realta' },
      { text: "Decidere che nessuna singola coscienza dovrebbe avere tale potere e lasciare che la Proto-Realtà si evolva da sola.", nextNodeId: 'lascia_proto_realta_evolvere_sola' } 
    ],
    isEnding: false
  },
  'ascolta_segreti_vuoto_risonante': {
    id: 'ascolta_segreti_vuoto_risonante',
    text: "Nel Vuoto Risonante tra gli universi, il silenzio non è vuoto, ma pieno di echi. Ascoltando con la tua coscienza espansa, percepisci i 'respiri' dei multiversi, le armoniche delle realtà che nascono e muoiono, le canzoni silenziose degli Esseri che dimorano oltre il Flusso. Non ottieni conoscenza specifica, ma una 'Sintonizzazione Cosmica', una comprensione intuitiva delle interconnessioni più vaste. Potresti persino imparare a 'scivolare' tra i Vuoti per raggiungere altri cluster di universi.",
    choices: [
      { text: "Diventare un 'Nomade del Vuoto', esplorando gli spazi tra le realtà.", nextNodeId: 'nomade_del_vuoto_finale' }, 
      { text: "Tentare di usare questa sintonizzazione per comunicare con gli 'Abitanti del Vuoto'.", nextNodeId: 'comunica_abitanti_vuoto_risonante' },
      { text: "Portare questa sintonizzazione nel Flusso per arricchirlo.", nextNodeId: 'porta_sintonizzazione_cosmica_flusso' }
    ],
    isEnding: false
  },
  'naviga_con_linguaggio_caos_fluente': {
    id: 'naviga_con_linguaggio_caos_fluente',
    text: "Armato del Linguaggio del Caos Fluente, ti avventuri where nessun altro osa. Le tempeste del Flusso ti parlano, i paradossi ti rivelano i loro segreti. Diventi un esploratore leggendario delle 'Zone Proibite', dei 'Non-Luoghi' where la realtà si disfa e si ricrea costantemente. Potresti scoprire artefatti di civiltà nate e morte nel caos, o persino trovare 'Semi di Ordine Inaspettato' nascosti nel cuore della turbolenza.",
    choices: [
      { text: "Mappare i Non-Luoghi per altri (se esistono altri capaci di leggerli).", nextNodeId: 'mappa_non_luoghi_per_altri' },
      { text: "Cercare l'origine ultima del Caos nel Flusso.", nextNodeId: 'cerca_origine_caos_flusso' },
      { text: "Diventare un tutt'uno con il Caos, una sua espressione consapevole.", nextNodeId: 'unione_con_caos_finale' } 
    ],
    isEnding: false
  },
  'canale_consapevole_impulso_creativo': {
    id: 'canale_consapevole_impulso_creativo',
    text: "Scegli di non guidare, ma di servire. Diventi un canale puro per l'Impulso Creativo Primordiale. La tua coscienza individuale si espande per abbracciare il tutto, ma senza perdere la sua unicità. Agisci nel Flusso non per scopi personali, ma per facilitare l'emergere di nuova bellezza, nuova complessità, nuova comprensione. Sei un artista cosmico, un mistico in azione, la cui vita è un'opera d'arte in continua evoluzione. Non cerchi potere, ma la tua influenza è profonda e sottile.",
    choices: [],
    isEnding: true, 
    endingText: "La tua vita è una melodia nell'infinita sinfonia della creazione. Hai trovato il tuo posto nel Grande Disegno."
  },
  'rimani_mondo_cristalli_cantanti_finale': {
    id: 'rimani_mondo_cristalli_cantanti_finale',
    text: "Decidi di rimanere. Lentamente, la tua forma si dissolve, la tua coscienza si fonde con le armoniche dei Cristalli Cantanti. Diventi una nota nella loro sinfonia eterna, parte di una coscienza planetaria basata sulla pura bellezza matematica e sonora. Hai perso la tua individualità precedente, ma hai guadagnato un'esistenza di armonia perfetta e di connessione totale. La tua storia come viaggiatore del Flusso finisce qui, ma la tua canzone continuerà per eoni.",
    choices: [],
    isEnding: true,
    endingText: "Sei diventato musica. La tua eco risuona tra le stelle di cristallo."
  },
  'porta_canto_cristalli_flusso': {
    id: 'porta_canto_cristalli_flusso',
    text: "Porti con te l'essenza del Canto dei Cristalli. Nel Flusso, usi questa conoscenza per creare 'Zone di Armonia', luoghi where le energie caotiche si placano, where le coscienze tormentate trovano pace. Puoi 'cantare' per guarire ferite nel tessuto della realtà, o per ispirare la creazione di nuove forme di vita basate sulla risonanza. Diventi un 'Armonizzatore del Flusso', un portatore di bellezza e ordine.",
    choices: [
      { text: "Cercare i luoghi più dissonanti del Flusso per armonizzarli.", nextNodeId: 'armonizza_luoghi_dissonanti_flusso' },
      { text: "Insegnare ad altri l'arte del Canto dei Cristalli.", nextNodeId: 'insegna_canto_cristalli_altri' }
    ],
    isEnding: false
  },
  'giardiniere_flusso_dedizione_finale': {
    id: 'giardiniere_flusso_dedizione_finale',
    text: "Ti dedichi al ruolo di Giardiniere del Flusso. Viaggi attraverso le realtà, curando, potando, piantando semi di potenziale positivo con estrema cautela. Non cerchi fama né potere. La tua ricompensa è vedere la bellezza fiorire, la comprensione crescere, l'armonia diffondersi. È un compito umile ma infinito, che ti connette profondamente alla vita in tutte le sue forme. La tua leggenda è sussurrata dalle foglie degli alberi cosmici e dal mormorio delle correnti del Flusso.",
    choices: [],
    isEnding: true,
    endingText: "Il Flusso è il tuo giardino. La tua opera è silenziosa, ma eterna."
  },
  'esploratore_umile_flusso_finale': {
    id: 'esploratore_umile_flusso_finale',
    text: "Scegli la via dell'Esploratore Umile. Rinunci a plasmare attivamente la realtà, dedicandoti invece alla sua infinita scoperta e comprensione. Diventi un cronista delle meraviglie del Flusso, un testimone silenzioso delle sue infinite trasformazioni. Condividi la tua conoscenza con chi la cerca, ma non imponi mai la tua visione. La tua vita è un viaggio senza fine attraverso la meraviglia, un atto di amore per l'esistenza stessa.",
    choices: [],
    isEnding: true,
    endingText: "Il tuo cuore è una mappa dell'infinito. Ogni stella una storia, ogni nebulosa un mistero svelato solo a te."
  },
  'guarisci_ferita_sogno_collettivo': {
    id: 'guarisci_ferita_sogno_collettivo',
    text: "Identifichi una 'ferita' nel Sogno Collettivo della tua specie – un trauma storico, una paura radicata, un mito disfunzionale. Con la tua abilità di Onironauta, lavori delicatamente all'interno del sogno, non per cancellare la ferita, ma per trasformarla, per tessere nuovi significati attorno ad essa, per permettere la catarsi e la guarigione. È un lavoro che richiede empatia, pazienza e una profonda comprensione della psiche collettiva. Potresti non vedere risultati immediati nel 'mondo reale', ma sai di aver piantato semi di cambiamento profondo.",
    choices: [
      { text: "Continuare questo lavoro, diventando uno 'Psiconauta Curatore'.", nextNodeId: 'psiconauta_curatore_sogni_collettivi_finale' },
      { text: "Cercare altre 'ferite' in altri Sogni Collettivi (se accessibili).", nextNodeId: 'cerca_ferite_altri_sogni_collettivi' }
    ],
    isEnding: false
  },
  'altera_piccolo_ciclo_passato_scaglia': {
    id: 'altera_piccolo_ciclo_passato_scaglia',
    text: "Con estrema cautela, usando la Scaglia di Ouroboros, identifichi un piccolo evento passato, apparentemente insignificante, e tenti di alterarne l'esito. Forse impedisci a un singolo seme di cadere, o a una parola di essere pronunciata. L'effetto farfalla è immediato e sconcertante. Il presente che conosci trema, si modifica in modi sottili e inquietanti. Alcune cose migliorano, altre peggiorano inaspettatamente. Comprendi che il tempo non è un fiume da deviare facilmente, ma una rete complessa di interconnessioni. Hai giocato con un potere immenso, e le conseguenze sono imprevedibili. I Guardiani dei Cicli sono ora decisamente consapevoli di te.",
    choices: [
      { text: "Tentare di 'riparare' l'alterazione, se possibile.", nextNodeId: 'ripara_alterazione_temporale_scaglia' },
      { text: "Accettare le conseguenze e vivere in questa nuova linea temporale.", nextNodeId: 'vivi_nuova_linea_temporale_alterata' },
      { text: "Fuggire, cercando di sfuggire ai Guardiani dei Cicli.", nextNodeId: 'fuga_guardiani_cicli_temporali' }
    ],
    isEnding: false
  },
  'osserva_evento_nodo_temporale': {
    id: 'osserva_evento_nodo_temporale',
    text: "Ti immergi nell'osservazione dell'evento cruciale. Vedi le cause, le concause, le scelte fatte, le casualità. Ottieni una comprensione profonda di come la storia (o la fisica, o la biologia) si svolga. Questa conoscenza non ti dà il potere di cambiare il passato, ma ti offre una saggezza immensa per comprendere il presente e anticipare il futuro. È come aver letto il 'manuale d'istruzioni' di un frammento di realtà.",
    choices: [
      { text: "Applicare questa saggezza a un problema attuale nel Flusso.", nextNodeId: 'applica_saggezza_nodo_temporale_problema_attuale' },
      { text: "Cercare altri Nodi Temporali per accumulare più conoscenza.", nextNodeId: 'cerca_altri_nodi_temporali_saggezza' }
    ],
    isEnding: false
  }
};
