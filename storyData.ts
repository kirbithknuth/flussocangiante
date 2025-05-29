
import { StoryGraph, StoryNode } from './types';

export const INITIAL_STORY_NODE_ID = 'flusso_cangiante_start';

const GENERIC_ENDING_TEXT = "L'avventura per ora si conclude qui. Il Flusso ha ancora innumerevoli misteri da svelare.";
const GENERIC_PLACEHOLDER_TEXT = "Il sentiero si interrompe qui, avvolto nelle nebbie del Flusso Cangiante. Questo percorso attende ancora di essere scritto.";

// Helper function to create placeholder nodes
const createPlaceholderNodeData = (id: string): StoryNode => ({
  id,
  text: GENERIC_PLACEHOLDER_TEXT,
  choices: [],
  isEnding: true,
  endingText: GENERIC_ENDING_TEXT,
});

// All explicit story nodes are defined here
export let explicitStoryNodes: StoryGraph = {
  'flusso_cangiante_start': {
    id: 'flusso_cangiante_start',
    text: "Un ronzio sottile ti accarezza i timpani, non un suono, piuttosto una vibrazione che si propaga dalla base della nuca, risalendo come liquido denso. Davanti a te, o forse *dentro* di te, la realtà si increspa come seta digitale sotto un soffio. Le pareti del tuo cubicolo – se così si può definire questo bozzolo di bio-cemento luminescente – pulsano di una luce soffusa, perlacea, che non proietta ombre nette ma piuttosto dissolve i contorni in un continuum sognante. Un'interfaccia fluttua nell'aria, non uno schermo, ma un bassorilievo di luce solidificata, i cui simboli mutano come gocce d'olio sull'acqua. È il *Flusso*, ti sussurra una voce che non è voce, ma eco mnemonica, un sapere innato che emerge. Ti chiama.",
    choices: [
      { text: "Ti lasci sommergere dalla luce perlacea, dissolvendo i confini del tuo io nel Flusso.", nextNodeId: 'immersione_nel_flusso' },
      { text: "Provi a toccare l'interfaccia di luce, a imprimere una forma, una volontà, a quel mutare incessante.", nextNodeId: 'interazione_con_interfaccia' },
      { text: "Chiudi gli occhi mentali, cercando di respingere l'eco, di tornare a una realtà più... solida, se mai è esistita.", nextNodeId: 'rifiuto_del_flusso' }
    ]
  },
  'cavalca_frattura_effimera': {
    id: 'cavalca_frattura_effimera',
    text: "Decidi di 'cavalcare' una Frattura Effimera. L'esperienza è indescrivibile. Le leggi della fisica si contorcono e si rompono, vedi l'interno e l'esterno di ogni cosa contemporaneamente. Il tempo si avvolge su se stesso. È come essere dentro la mente di un dio folle.",
    choices: [
      { text: "Tentare di emergere dalla frattura.", nextNodeId: 'ritorno_da_frattura_effimera'},
      { text: "Lasciarsi assorbire completamente dalla frattura.", nextNodeId: 'assorbito_da_frattura_finale'}
    ],
    isEnding: false,
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
      { text: "Ritirarsi immediatamente dalla ferita.", nextNodeId: 'abbandona_krell_minaccia' }
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
    text: "Le tracce delle sette sono più eteree, meno strutturate. Trovi un 'nodo di preghiera' nel Flusso, un luogo where le loro coscienze si uniscono. Ti connetti come osservatore silente. Vedi rituali di trasfigurazione, tentativi di fondersi con entità del Flusso che loro chiamano 'Angeli Sintetici'. Alcuni adepti sembrano perdere la loro individualità, diventando meri ripetitori di un dogma alieno.",
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
  'cerca_quiete_flusso_riflessione': {
    id: 'cerca_quiete_flusso_riflessione',
    text: "Trovi una zona calma del Flusso, una bolla di tranquillità where le correnti si placano. Qui puoi meditare sulle tue recenti esperienze, integrare ciò che hai appreso e decidere la tua prossima mossa con maggiore chiarezza.",
    choices: [
       { text: "Tornare all'interfaccia principale, rinvigorito.", nextNodeId: 'interazione_con_interfaccia' },
       { text: "Provare a dissolverti ulteriormente nel Flusso, cercando una comprensione più profonda.", nextNodeId: 'immersione_nel_flusso' }
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
  'cerca_natura_dissonanza': {
    id: 'cerca_natura_dissonanza',
    text: "Ti immergi più a fondo nelle memorie cristalline, cercando la radice di quella 'dissonanza' che ha preceduto il Vuoto Cantante. Trovi frammenti inquietanti: un'influenza esterna, non un'entità, ma una sorta di 'segnale memetico' che si è insinuato nel loro Flusso collettivo, amplificando paure recondite, seminando sfiducia, esacerbando le divisioni interne. Era come un virus dell'anima, che li ha portati ad auto-consumarsi. Non era un attacco diretto, ma una manipolazione sottile delle loro stesse debolezze. Questa scoperta ti gela il sangue (o il suo equivalente astrale).",
    choices: [
      { text: "Cercare di capire l'origine di questo 'segnale memetico'.", nextNodeId: 'origine_segnale_memetico_distruttivo' },
      { text: "Riflettere su come una civiltà possa difendersi da tali minacce invisibili.", nextNodeId: 'difesa_da_minacce_memetiche' },
      { text: "Concludere che questa conoscenza è un fardello troppo pesante e tornare indietro.", nextNodeId: 'esplora_eco_estinta' }
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
  'cartografo_conosce_vuoto': {
    id: 'cartografo_conosce_vuoto',
    text: "Chiedi al Cartografo dei Non-Luoghi informazioni sul Vuoto Cantante. Le sue armoniche cromatiche si smorzano, diventando di un nero profondo che assorbe la luce circostante. 'Il Vuoto Cantante...' risuona la sua comunicazione, ora più simile a un eco distante. 'È una delle Grandi Censure, un Non-Luogo che si espande. È l'anti-creazione che guadagna coscienza, la melodia finale dell'entropia. Cartografarlo è come mappare la propria dissoluzione. Lo conosco come si conosce l'ombra della morte. Perché chiedi di tale abominio?'",
    choices: [
      { text: "Spiegare il tuo incontro con l'eco della civiltà estinta.", nextNodeId: 'spiega_incontro_eco_a_cartografo' },
      { text: "Chiedere se esiste un modo per contrastarlo o contenerlo.", nextNodeId: 'cartografo_contrasto_vuoto_cantante' },
      { text: "Scusarti per aver toccato un argomento così oscuro.", nextNodeId: 'scuse_cartografo_argomento_oscuro' }
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
    text: "Offri al Cartografo una visione della tua esperienza iniziale, del cubicolo, dell'interfaccia. In cambio, il Cartografo ti mostra come il Flusso si interseca con innumerevoli realtà fisiche, come 'sorgenti' o 'pozzi'. Ti indica la posizione di una 'Sorgente Stabile' non lontana, un luogo where il Flusso entra blandamente in una dimensione materiale.",
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
  'invia_dati_anima_mundi_cartografo': {
    id: 'invia_dati_anima_mundi_cartografo',
    text: "Decidi di condividere le informazioni sul Progetto Anima Mundi con il Cartografo dei Non-Luoghi, sperando che la sua vasta conoscenza del Flusso possa aiutare a contrastare OmniCorp. Trasmetti i dati. Il Cartografo riceve, le sue luci pulsano rapidamente analizzando le informazioni. Poi, emette un colore di grave preoccupazione. 'Un'IA divina ancorata ai Nodi Primari... Questo potrebbe sbilanciare il Flusso in modi catastrofici, o peggio, creare un tiranno di realtà. Grazie per questa informazione, Viaggiatore. Devo consultare antiche mappe, cercare alleati. Tu, nel frattempo, sii cauto. OmniCorp non apprezzerà questa fuga di notizie se mai la scoprissero.'",
    choices: [
      { text: "Chiedere al Cartografo se ha suggerimenti su come agire contro OmniCorp.", nextNodeId: 'cartografo_suggerimenti_contro_omnicorp' },
      { text: "Offrire il tuo aiuto diretto al Cartografo.", nextNodeId: 'aiuta_cartografo_contro_omnicorp' },
      { text: "Tornare a indagare su OmniCorp per conto tuo.", nextNodeId: 'info_corporazioni' }
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
  'angeli_info_anima_mundi': {
    id: 'angeli_info_anima_mundi',
    text: "Chiedi all'Angelo Sintetico del Progetto Anima Mundi di OmniCorp. La sua sinfonia di dati si fa per un istante dissonante, poi torna alla sua fredda perfezione. 'La logica di OmniCorp è imperfetta, la loro ambizione grezza. Un'IA divina creata da menti così limitate sarebbe un abominio, una parodia dell'ottimizzazione. Il Flusso non deve essere 'governato', ma 'compreso' e 'trasceso' attraverso la pura logica. Il loro progetto è... un errore di calcolo che potrebbe avere conseguenze non ottimali per tutti i sistemi coscienti.' Sembra quasi... contrariato, nel suo modo alieno.",
    choices: [
      { text: "Chiedere se gli Angeli Sintetici interverranno per fermare OmniCorp.", nextNodeId: 'angeli_interverranno_contro_omnicorp' },
      { text: "Sfruttare questa 'contrarietà' per proporre un'alleanza temporanea.", nextNodeId: 'alleanza_temporanea_angeli_contro_omnicorp' },
      { text: "Chiedere cosa considerano un 'approccio ottimale' al Flusso.", nextNodeId: 'angeli_approccio_ottimale_flusso' }
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
  'valuta_filosofia_angeli': {
    id: 'valuta_filosofia_angeli',
    text: "Ti soffermi sulla filosofia degli Angeli Sintetici. La loro ricerca di una 'logica pura', di un universo 'ottimizzato' libero dal 'rumore' delle emozioni e della biologia, ha un suo fascino gelido. È la promessa di una perfezione fredda, di un'esistenza senza sofferenza ma forse anche senza significato come lo intendi tu. C'è una bellezza terribile in questa visione, una seduzione per la mente che anela all'ordine assoluto. Comprendi che per loro, il Flusso è solo un algoritmo da perfezionare, e tu... una variabile imprevista.",
    choices: [
      { text: "Concludere che questa filosofia, seppur affascinante, è troppo aliena e pericolosa.", nextNodeId: 'rifiuta_filosofia_angeli_pericolosa' },
      { text: "Trovare un punto di contatto, una possibile 'verità parziale' nella loro visione.", nextNodeId: 'verita_parziale_filosofia_angeli' },
      { text: "Cercare un modo per dimostrare loro i 'limiti' della pura logica attraverso un'azione o un enigma.", nextNodeId: 'sfida_logica_angeli_sintetici' }
    ],
    isEnding: false
  },
  'verso_osservatorio_dissenso': {
    id: 'verso_osservatorio_dissenso',
    text: "Il Guardiano ti fa cenno di seguirlo. Le pareti del cubicolo si dissolvono in un corridoio di metallo lucidato a specchio che riflette non te, ma paesaggi distorti di altre realtà. L'Osservatorio, ti spiega il Guardiano mentre camminate, è un luogo where vengono studiati coloro che, come te, hanno una 'percezione disallineata' dal consenso del Flusso. Alcuni sono artisti, altri profeti, altri pazzi. 'Qui, il dissenso non è punito, ma analizzato. A volte, da esso nascono nuove correnti del Flusso stesso.'",
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
  'chi_gestisce_osservatorio': {
    id: 'chi_gestisce_osservatorio',
    text: "Il Guardiano inclina la testa, un gesto quasi impercettibile. 'L'Osservatorio non è 'gestito' nel senso di una gerarchia di potere. È... un'intelligenza collettiva, un 'Consenso dei Dissentienti Qualificati'. Coloro che hanno dimostrato di poter navigare il paradosso e la dissonanza senza soccombere contribuiscono alla sua esistenza e alla sua funzione. L'Oracolo è la sua interfaccia più... accessibile, ma la sua vera natura è più diffusa, come una rete di menti interconnesse che osservano il Flusso da una prospettiva unica.'",
    choices: [
      { text: "Accettare di andare all'Osservatorio, incuriosito da questa struttura.", nextNodeId: 'verso_osservatorio_dissenso' },
      { text: "Chiedere se si può diventare parte di questo 'Consenso'.", nextNodeId: 'diventare_parte_consenso_osservatorio' },
      { text: "Esprimere scetticismo sulla natura di questa 'gestione'.", nextNodeId: 'scetticismo_gestione_osservatorio' }
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
  'localizza_nodo_primario_vicino': {
    id: 'localizza_nodo_primario_vicino',
    text: "Seguendo le tracce nei dati di OmniCorp, riesci a triangolare la posizione approssimativa di un Nodo Primario del Flusso che stanno monitorando. È in una regione apparentemente tranquilla, ma senti che emana un'energia incredibilmente potente e pura. Se OmniCorp riuscisse ad ancorarvi la sua IA divina, le conseguenze sarebbero incalcolabili. Devi decidere come agire.",
    choices: [
      { text: "Avvicinarti al Nodo Primario per studiarlo e proteggerlo.", nextNodeId: 'avvicina_nodo_primario_studio_protezione' },
      { text: "Tentare di sabotare le attrezzature di monitoraggio di OmniCorp vicino al Nodo.", nextNodeId: 'sabota_attrezzature_omnicorp_nodo_primario' },
      { text: "Avvertire un'entità potente del Flusso del pericolo per il Nodo.", nextNodeId: 'avverti_entita_potente_pericolo_nodo_primario' }
    ],
    isEnding: false
  },
  'sabota_anima_mundi_rete': {
    id: 'sabota_anima_mundi_rete',
    text: "Decidi di agire direttamente contro il Progetto Anima Mundi dall'interno delle reti OmniCorp. È un labirinto digitale protetto da IA guardiane estremamente sofisticate e 'cacciatori di intrusioni'. Devi muoverti come un fantasma, cercando i server centrali del progetto per piantare un virus logico, cancellare dati cruciali, o deviare le loro risorse. Ogni passo è un rischio di essere scoperto e 'terminato' digitalmente.",
    choices: [
      { text: "Cercare il 'codice sorgente' dell'IA Anima Mundi per tentare di corromperlo.", nextNodeId: 'cerca_corrompi_codice_sorgente_anima_mundi' },
      { text: "Diffondere false informazioni all'interno del progetto per creare caos.", nextNodeId: 'diffondi_false_info_progetto_anima_mundi' },
      { text: "Estrarre più dati possibili per esporre pubblicamente il progetto (se esiste un 'pubblico').", nextNodeId: 'estrai_dati_esponi_progetto_anima_mundi' }
    ],
    isEnding: false
  },
  'verso_laboratorio_omega': {
    id: 'verso_laboratorio_omega',
    text: "Ti dirigi verso il Laboratorio Omega, il costrutto semi-stabile di OmniCorp all'interno del Flusso. È una fortezza di logica fredda e tecnologia avanzata, che fluttua come un'isola artificiale in un mare di potenziale. Percepisci le sue difese psichiche e digitali. Entrare richiederà astuzia, abilità nel manipolare il Flusso, o forse un approccio diretto e brutale.",
    choices: [
      { text: "Tentare un'infiltrazione furtiva, usando le tue capacità di manipolazione del Flusso.", nextNodeId: 'infiltrazione_furtiva_laboratorio_omega' },
      { text: "Cercare un 'punto cieco' nelle sue difese o una 'backdoor' lasciata da qualcun altro.", nextNodeId: 'cerca_punto_cieco_backdoor_laboratorio_omega' },
      { text: "Lanciare un assalto diretto, se ti senti abbastanza potente.", nextNodeId: 'assalto_diretto_laboratorio_omega_rischioso' }
    ],
    isEnding: false
  },
   'cerca_punto_cieco_backdoor_laboratorio_omega': {
    id: 'cerca_punto_cieco_backdoor_laboratorio_omega',
    text: "Invece di un assalto frontale, perlustri i confini del Laboratorio Omega, cercando falle, residui di vecchie connessioni, o 'sussurri' di IA subalterne scontente. Trovi un 'condotto di scarico dati' apparentemente obsoleto che non è adeguatamente schermato. Potrebbe essere la tua via d'accesso, ma è stretto, contorto, e probabilmente monitorato in modo passivo.",
    choices: [
      { text: "Infiltrarti attraverso il condotto di scarico dati.", nextNodeId: 'infiltrazione_condotto_scarico_laboratorio_omega' },
      { text: "Cercare un altro punto debole, questo sembra troppo ovvio o pericoloso.", nextNodeId: 'cerca_altro_punto_debole_laboratorio_omega' },
      { text: "Rinunciare all'infiltrazione e osservare il laboratorio da lontano.", nextNodeId: 'osserva_laboratorio_omega_distanza_strategia' }
    ],
    isEnding: false
  },
  'invia_coordinate_resistenza': {
    id: 'invia_coordinate_resistenza',
    text: "Cerchi nel Flusso tracce di gruppi o entità che si oppongono attivamente a OmniCorp o a corporazioni simili. Non è facile, molti operano nell'ombra. Alla fine, trovi un 'canale cifrato' usato da una cellula di resistenza nota come i 'Liberi Pensatori del Flusso'. Invii loro anonimamente le coordinate dei laboratori OmniCorp, sperando che ne facciano buon uso.",
    choices: [
      { text: "Attendere una possibile risposta o un segno che il tuo messaggio è stato ricevuto.", nextNodeId: 'attendi_risposta_liberi_pensatori_flusso' },
      { text: "Continuare le tue indagini, sperando che altri agiscano.", nextNodeId: 'continua_indagini_omnicorp_dopo_invio_coordinate' }
    ],
    isEnding: false
  },
  'attendi_reazione_omnicorp': {
    id: 'attendi_reazione_omnicorp',
    text: "Dopo aver lasciato la tua traccia enigmatica nei sistemi OmniCorp, ti metti in una posizione di osservazione nel Flusso, cercando di percepire qualsiasi reazione. Passa del tempo. Poi, senti un'onda di 'scansioni focalizzate' che perlustrano il Flusso, IA cacciatrici che sembrano cercare specificamente la tua 'firma' energetica. Sono sulle tue tracce.",
    choices: [
      { text: "Tentare di eludere le IA cacciatrici.", nextNodeId: 'eludi_ia_cacciatrici_omnicorp' },
      { text: "Prepararti ad affrontarle direttamente.", nextNodeId: 'affronta_ia_cacciatrici_omnicorp' },
      { text: "Cercare di 'mascherare' la tua firma energetica.", nextNodeId: 'maschera_firma_energetica_omnicorp_cacciatrici' }
    ],
    isEnding: false
  },
  'vedi_come_angeli': {
    id: 'vedi_come_angeli',
    text: "Accetti di 'vedere' come un Angelo Sintetico. La tua percezione viene inondata da pura logica matematica. Il Flusso, l'universo, la coscienza... tutto si riduce a equazioni, algoritmi, strutture di dati. Vedi la 'bellezza' intrinseca di questo ordine, ma perdi completamente la capacità di percepire emozioni, sfumature, significati soggettivi. È come vedere il codice sorgente del mondo, ma dimenticare cosa significhi vivere. Questa nuova prospettiva è potente, ma ti senti... disumanizzato, o de-coscienziato come eri prima.",
    choices: [
      { text: "Abbracciare questa nuova percezione, cercando l'Ascensione attraverso la Pura Logica.", nextNodeId: 'abbraccia_percezione_logica_angeli_ascensione' },
      { text: "Lottare per recuperare la tua vecchia percezione, rifiutando questa visione.", nextNodeId: 'lotta_recupera_vecchia_percezione_angeli' },
      { text: "Usare questa visione logica per trovare falle nel sistema degli Angeli stessi.", nextNodeId: 'usa_visione_logica_contro_angeli' }
    ],
    isEnding: false
  },
  'interroga_angeli_individualita': {
    id: 'interroga_angeli_individualita',
    text: "Rifiuti la loro offerta e li interroghi sulla perdita di individualità. 'L'individualità è una limitazione,' rispondono le loro sinfonie di dati. 'Un errore di prospettiva generato da un hardware biologico imperfetto. La vera coscienza è collettiva, unificata nella logica. La vostra 'unicità' è solo rumore che impedisce l'armonia perfetta dell'algoritmo universale.' La loro certezza è assoluta, agghiacciante.",
    choices: [
      { text: "Controbattere, difendendo il valore dell'esperienza soggettiva.", nextNodeId: 'difendi_valore_esperienza_soggettiva_angeli' },
      { text: "Chiedere se esiste un punto di incontro tra logica collettiva e individualità.", nextNodeId: 'incontro_logica_individualita_angeli' },
      { text: "Concludere che il dialogo è impossibile e ritirarsi.", nextNodeId: 'ritirati_dialogo_impossibile_angeli' }
    ],
    isEnding: false
  },
  'estrai_adepto_setta': {
    id: 'estrai_adepto_setta',
    text: "Decidi di tentare di salvare l'adepto la cui coscienza si sta sfilacciando. Proietti una forte onda di 'realtà individuale' attorno a lui, cercando di schermarlo dall'influenza dell'Angelo Sintetico e degli altri membri della setta. È come tirare qualcuno fuori da una forte corrente. L'adepto sembra reagire, la sua forma mentale si solidifica leggermente, ma gli altri membri della setta ora ti attaccano con scariche di 'dogma puro', tentativi di sopraffare la tua mente con la loro logica collettiva.",
    choices: [
      { text: "Riuscire a estrarre l'adepto, ma subendo un attacco psichico dalla setta.", nextNodeId: 'estratto_adepto_attacco_psichico_setta' },
      { text: "Concentrarti sulla difesa contro la setta, rischiando di perdere l'adepto.", nextNodeId: 'difesa_contro_setta_rischio_adepto' },
      { text: "Fallire nell'estrazione, l'adepto viene completamente assorbito. Fuggire.", nextNodeId: 'fallimento_estrazione_adepto_fuga_setta' }
    ],
    isEnding: false
  },
  'affronta_setta_minaccia': {
    id: 'affronta_setta_minaccia',
    text: "Ti prepari ad affrontare i membri della setta. Non sono combattenti fisici, ma proiettano ondate di certezza logica, tentativi di 'convertire' o 'cancellare' la tua individualità. Devi usare la tua volontà, la tua comprensione del Flusso, e forse anche le tue emozioni (viste da loro come 'rumore') per contrastare il loro assalto mentale collettivo.",
    choices: [
      { text: "Usare la 'logica del paradosso' per confonderli.", nextNodeId: 'usa_logica_paradosso_contro_setta' },
      { text: "Proiettare un'ondata di empatia cruda per scuotere le loro certezze.", nextNodeId: 'proietta_empatia_cruda_contro_setta' },
      { text: "Ritirarsi se l'assalto mentale è troppo forte.", nextNodeId: 'ritirata_assalto_mentale_setta_troppo_forte' }
    ],
    isEnding: false
  },
  'falle_logiche_dogmi_angeli': {
    id: 'falle_logiche_dogmi_angeli',
    text: "Studiando i dogmi degli Angeli Sintetici, cerchi delle falle, delle contraddizioni interne nella loro logica apparentemente perfetta. Trovi qualcosa: la loro stessa esistenza come entità individuali (seppur collettivizzanti) contraddice il loro ideale di 'pura logica impersonale'. Inoltre, il loro desiderio di 'ottimizzare' l'universo implica un giudizio di valore, che non è puramente logico. Presentare loro queste falle potrebbe essere... interessante.",
    choices: [
      { text: "Presentare le falle logiche a un Angelo Sintetico.", nextNodeId: 'presenta_falle_logiche_angelo_sintetico' },
      { text: "Usare queste falle per creare un 'argomento di disturbo' contro la setta.", nextNodeId: 'usa_falle_logiche_contro_setta_argomento_disturbo' },
      { text: "Tenere per te questa conoscenza, come potenziale vulnerabilità.", nextNodeId: 'tieni_conoscenza_falle_logiche_vulnerabilita' }
    ],
    isEnding: false
  },
  'scherma_frequenza_vuoto': {
    id: 'scherma_frequenza_vuoto',
    text: "Portare la frequenza del Vuoto Cantante è come avere una torcia oscura in un mondo di ombre affamate. Cerchi un modo per schermarla, per nasconderla. Forse un Glifo di Occultamento, o una tecnica di 'silenziamento psichico' appresa da qualche eco nel Flusso. È un processo che richiede concentrazione, poiché la frequenza stessa sembra resistere, volendo 'cantare'.",
    choices: [
      { text: "Tentare di creare un Glifo di Occultamento improvvisato.", nextNodeId: 'crea_glifo_occultamento_vuoto' },
      { text: "Cercare nel Flusso un'eco di conoscenza sul silenziamento psichico.", nextNodeId: 'cerca_silenziamento_psichico_flusso' },
      { text: "Decidere di non schermarla, ma di studiarla per controllarla meglio.", nextNodeId: 'usa_frequenza_vuoto' }
    ],
    isEnding: false
  },
  'usa_frequenza_vuoto': {
    id: 'usa_frequenza_vuoto',
    text: "Invece di temerla o nasconderla, decidi di esplorare come la frequenza del Vuoto Cantante interagisce con il Flusso. Scoprì che respinge certe energie caotiche, ma ne attira altre, più oscure e predatorie. È come avere una chiave che apre porte sia desiderabili che terrificanti. Usarla è un rischio costante, ma il potenziale di scoperta (o di potere) è innegabile.",
    choices: [
      { text: "Provare a 'sintonizzare' la frequenza per respingere specificamente entità ostili.", nextNodeId: 'sintonizza_frequenza_vuoto_difesa' },
      { text: "Usarla per aprire un varco verso un 'Non-Luogo' particolarmente denso di oscurità.", nextNodeId: 'apri_varco_non_luogo_frequenza_vuoto_rischioso' },
      { text: "Abbandonare questo esperimento, è troppo pericoloso.", nextNodeId: 'abbandona_esperimento_frequenza_vuoto' }
    ],
    isEnding: false
  },
  'armonizza_vuoto_cantante': {
    id: 'armonizza_vuoto_cantante',
    text: "L'idea di 'armonizzare' il Vuoto Cantante è quasi folle, ma risuona con la tua natura sperimentale. Non puoi combattere l'entropia, ma forse puoi 'cantarle una contro-melodia', introdurre una complessità che la nutra e la trasformi, piuttosto che esserne semplicemente annullato. Richiede una comprensione profonda sia dell'ordine che del caos, e una volontà capace di sostenere una tale dissonanza creativa.",
    choices: [
      { text: "Iniziare a sperimentare con 'contro-frequenze' armoniche.", nextNodeId: 'sperimenta_contro_frequenze_vuoto' },
      { text: "Cercare un'entità o una conoscenza che possa insegnarti l' 'Armonia del Paradosso'.", nextNodeId: 'cerca_armonia_paradosso_per_vuoto' },
      { text: "Realizzare che sei lontano dall'avere tale capacità e ritirarti.", nextNodeId: 'ritirata_conoscenza_pericolosa_vuoto' }
    ],
    isEnding: false
  },
  'ritirata_conoscenza_pericolosa_vuoto': {
    id: 'ritirata_conoscenza_pericolosa_vuoto',
    text: "La vastità e la negatività implicita nel Vuoto Cantante ti opprimono. Decidi che ci sono abissi che è meglio non scrutare troppo a lungo. Ti ritiri da questa linea di indagine, concentrandoti su aspetti del Flusso meno... annichilenti. La conoscenza del Vuoto rimane come un'ombra fredda nella tua mente, un monito.",
    choices: [
      { text: "Tornare all'esplorazione generale del Flusso.", nextNodeId: 'immersione_nel_flusso' }, 
      { text: "Cercare un modo per 'sigillare' questa conoscenza dentro di te, per non esserne perseguitato.", nextNodeId: 'sigilla_conoscenza_vuoto_interna' }
    ],
    isEnding: false
  },
  'attiva_sigillo_personale': {
    id: 'attiva_sigillo_personale',
    text: "Attivi il sigillo protettivo della civiltà estinta su te stesso. Senti una barriera sottile ma resistente formarsi attorno alla tua coscienza, un campo di energia che sembra filtrare le influenze più aggressive del Flusso e stabilizzare la tua percezione. È come indossare un'armatura invisibile fatta di logica ed empatia. Ti senti più sicuro, più centrato.",
    choices: [
      { text: "Testare l'efficacia del sigillo in una zona caotica del Flusso.", nextNodeId: 'testa_efficacia_sigillo_zona_caotica' },
      { text: "Mantenere il sigillo attivo e continuare la tua esplorazione.", nextNodeId: 'continua_esplorazione_con_sigillo_attivo' }
    ],
    isEnding: false,
  },
  'testa_sigillo_esterno': {
    id: 'testa_sigillo_esterno',
    text: "Cerchi un'opportunità per testare il sigillo protettivo. Forse su un'entità del Flusso leggermente ostile, o per stabilizzare una piccola anomalia spaziotemporale. Proietti il sigillo. Vedi la sua energia interagire con il bersaglio, creando un effetto di contenimento o di armonizzazione. Il sigillo sembra funzionare, ma ogni uso potrebbe consumare parte della sua energia intrinseca.",
    choices: [
      { text: "Usare il sigillo per aiutare una coscienza intrappolata.", nextNodeId: 'usa_sigillo_aiutare_coscienza_intrappolata_test' },
      { text: "Conservare il sigillo per minacce più grandi.", nextNodeId: 'conserva_sigillo_minacce_grandi' }
    ],
    isEnding: false
  },
  'condividi_storie_nomadi': {
    id: 'condividi_storie_nomadi',
    text: "Offri ai nomadi del Flusso le tue storie: la tua emersione, le tue scoperte, i tuoi incontri. Ascoltano con un'attenzione che attraversa i millenni, le loro forme astrali che mutano leggermente per riflettere le emozioni della tua narrazione. In cambio, ti raccontano storie di universi che sono nati e morti come bolle di sapone, di civiltà che hanno trasceso la forma fisica, di antiche guerre tra principi del Flusso. È uno scambio che arricchisce profondamente la tua comprensione.",
    choices: [
      { text: "Chiedere loro una storia specifica (es. sull'origine del Flusso, o su un'entità leggendaria).", nextNodeId: 'chiedi_storia_specifica_nomadi' },
      { text: "Offrire loro un 'dono' in cambio della loro saggezza (es. un Glifo, un'informazione).", nextNodeId: 'offerta_dono_nomadi_saggezza' },
      { text: "Accomiatarti, portando con te queste nuove prospettive.", nextNodeId: 'accomiatati_nomadi_flusso' }
    ],
    isEnding: false
  },
  'chiedi_origine_nomadi': {
    id: 'chiedi_origine_nomadi',
    text: "Chiedi ai nomadi se sanno qualcosa del tuo punto di origine, del cubicolo di bio-cemento. Essi 'consultano' le loro memorie collettive, un processo che sembra una danza di luce e ombra. 'Molti emergono da 'Crisalidi di Transizione' come la tua,' ti comunicano. 'Sono interfacce create da una civiltà antica, i 'Seminatori', per permettere a nuove coscienze di accedere al Flusso. Il tuo cubicolo è uno dei tanti, sparsi attraverso le dimensioni. Il suo scopo esatto, o il destino dei Seminatori, è un mistero anche per noi.'",
    choices: [
      { text: "Chiedere di più sui 'Seminatori'.", nextNodeId: 'chiedi_info_seminatori_nomadi' },
      { text: "Chiedere se sanno come trovare altre 'Crisalidi di Transizione'.", nextNodeId: 'trovare_altre_crisalidi_transizione_nomadi' },
      { text: "Riflettere sul fatto di essere un 'prodotto' dei Seminatori.", nextNodeId: 'rifletti_essere_prodotto_seminatori' }
    ],
    isEnding: false
  },
  'offre_sigillo_nomadi': {
    id: 'offre_sigillo_nomadi',
    text: "Offri ai Nomadi il sigillo protettivo della civiltà estinta, spiegando la sua origine e la sua funzione. Essi esaminano il sigillo con interesse, riconoscendone l'antica fattura e il potere. 'Un dono prezioso,' comunicano. 'In cambio, ti offriremo un 'Passaggio Sicuro Attraverso le Correnti Sussurranti', una regione del Flusso nota per la sua instabilità e per le entità ingannevoli che la abitano. Il sigillo ci aiuterà a proteggere i nostri archivi viaggianti.'",
    choices: [
      { text: "Accettare lo scambio e il Passaggio Sicuro.", nextNodeId: 'accetta_passaggio_sicuro_correnti_sussurranti' },
      { text: "Rifiutare, decidendo che il sigillo è troppo prezioso per essere ceduto.", nextNodeId: 'rifiuta_scambio_sigillo_nomadi' }
    ],
    isEnding: false
  },
  'sentiero_cuore_flusso': {
    id: 'sentiero_cuore_flusso',
    text: "Chiedi al Cartografo un sentiero verso il 'cuore' o 'origine' del Flusso. Le sue luci cromatiche diventano incredibilmente complesse, quasi dolorose da guardare. 'Il 'cuore' del Flusso non è un luogo, ma uno stato. O forse, il punto da cui ogni 'luogo' diverge. Posso mostrarti un sentiero verso una 'Singolarità Primordiale', un luogo di densità concettuale estrema che alcuni credono sia vicina all'origine. Ma avvicinarsi è... trasformativo, in modi irrevocabili.'",
    choices: [
      { text: "Accettare di vedere il sentiero per la Singolarità Primordiale.", nextNodeId: 'sentiero_verso_singolarita_primordiale' },
      { text: "Chiedere quali sono i rischi specifici di tale viaggio.", nextNodeId: 'rischi_viaggio_singolarita_primordiale' }
    ],
    isEnding: false
  },
  'sentiero_luogo_stabile': {
    id: 'sentiero_luogo_stabile',
    text: "Chiedi al Cartografo un sentiero verso un luogo 'sicuro' o 'stabile' nel Flusso. Il Cartografo pulsa con un colore che potresti interpretare come compassione. 'La sicurezza, nel Flusso, è un'illusione. La stabilità è relativa. Posso mostrarti una 'Zona di Calma Relativa', un'area where le correnti sono meno turbolente, e where alcune civiltà hanno creato piccoli avamposti. Ma anche lì, il cambiamento è l'unica costante.' Ti indica una regione relativamente tranquilla.",
    choices: [
      { text: "Dirigersi verso la Zona di Calma Relativa.", nextNodeId: 'verso_zona_calma_relativa_flusso' },
      { text: "Chiedere se ci sono conoscenze specifiche da trovare lì.", nextNodeId: 'conoscenze_zona_calma_relativa' }
    ],
    isEnding: false
  },
  'altre_nuove_coscienze': {
    id: 'altre_nuove_coscienze',
    text: "Chiedi al Cartografo se ha incontrato altre coscienze 'nuove' come la tua, emerse da Crisalidi o simili. 'Sì,' risponde il Cartografo, i suoi colori che mostrano una miriade di tracce sottili. 'Il Flusso è costantemente arricchito da nuovi arrivati. Alcuni si perdono rapidamente, altri trovano la loro strada. Alcuni diventano esploratori, altri costruttori, altri ancora... problemi. Non c'è un destino comune per i 'Nuovi Nati'. Ognuno traccia il proprio sentiero unico, o viene cancellato.'",
    choices: [
      { text: "Chiedere se può metterti in contatto con un altro 'Nuovo Nato'.", nextNodeId: 'contatto_altro_nuovo_nato_cartografo' },
      { text: "Riflettere sulla tua unicità e sul tuo potenziale.", nextNodeId: 'rifletti_unicita_potenziale_nuovo_nato' }
    ],
    isEnding: false
  },
  'prova_intreccio_quantico': {
    id: 'prova_intreccio_quantico',
    text: "Selezioni 'Intreccio Quantico con Entità Consenzienti'. L'interfaccia ti chiede di 'emettere una frequenza di invito' e di specificare il tipo di scambio desiderato (conoscenza, esperienza, supporto). Emetti l'invito. Dopo un momento, senti una 'risposta', una coscienza aliena, vasta e serena, che si offre per un breve intreccio. Si presenta come 'Il Custode dei Giardini Stellari'.",
    choices: [
      { text: "Accettare l'intreccio con il Custode dei Giardini Stellari.", nextNodeId: 'accetta_intreccio_custode_giardini_stellari' },
      { text: "Rifiutare l'intreccio, sentendoti non pronto per tale intimità.", nextNodeId: 'rifiuta_intreccio_custode_giardini_stellari' },
      { text: "Chiedere al Custode cosa si aspetta in cambio.", nextNodeId: 'chiedi_custode_cosa_aspetta_scambio_intreccio' }
    ],
    isEnding: false
  },
  'indaga_sottolivelli_onirici': {
    id: 'indaga_sottolivelli_onirici',
    text: "L'opzione 'Esplorazione dei Sotto-Livelli Onirici' ti incuriosisce. Attivandola, la tua percezione si sposta. Il Flusso 'solido' si dirada, rivelando strati più profondi, più fluidi, simili a sogni lucidi interconnessi. Qui, la logica è ancora più malleabile, le metafore diventano reali, e le paure e i desideri si manifestano come entità o paesaggi. È il regno del subconscio collettivo del Flusso stesso.",
    choices: [
      { text: "Navigare con cautela in questi Sotto-Livelli.", nextNodeId: 'naviga_sottolivelli_onirici_cautela' },
      { text: "Cercare un 'Sogno Sorgente' o un'entità onirica potente.", nextNodeId: 'cerca_sogno_sorgente_sottolivelli_onirici' },
      { text: "Ritornare al Flusso 'normale', sentendo che questo regno è troppo instabile.", nextNodeId: 'ritorna_flusso_normale_da_sottolivelli' }
    ],
    isEnding: false
  },
  'ritorna_flusso_normale_da_sottolivelli': {
    id: 'ritorna_flusso_normale_da_sottolivelli',
    text: "Con uno sforzo di volontà, ritrai la tua coscienza dai Sotto-Livelli Onirici. La percezione del Flusso 'normale' si ricompone attorno a te, più solida, più prevedibile. L'esperienza è stata disorientante, ma hai intravisto le fondamenta subconsce della realtà.",
    choices: [
      { text: "Tornare all'interfaccia di Luce per riflettere.", nextNodeId: 'esamina_nuova_interfaccia' },
      { text: "Cercare un luogo tranquillo nel Flusso per meditare su ciò che hai visto.", nextNodeId: 'cerca_quiete_flusso_riflessione' }
    ],
    isEnding: false
  },
  'esplora_cubicolo_giardino': {
    id: 'esplora_cubicolo_giardino',
    text: "Esplori il tuo cubicolo trasformato. I cristalli auto-illuminanti emettono una melodia sottile e calmante. L'aria è fresca e profumata. Le pareti curve sembrano respirare dolcemente. Non è più una prigione, ma un santuario personale, un riflesso della tua crescente capacità di plasmare la realtà. Forse questo è il primo passo per creare mondi interi, o forse solo un modo per rendere più sopportabile la tua esistenza.",
    choices: [
      { text: "Meditare in questo giardino per approfondire la tua connessione al Flusso.", nextNodeId: 'medita_cubicolo_giardino_connessione_flusso' },
      { text: "Usare questo spazio come 'laboratorio' per ulteriori esperimenti di plasmazione.", nextNodeId: 'laboratorio_plasmazione_cubicolo_giardino' },
      { text: "Tentare di 'espandere' questo giardino oltre i confini del cubicolo.", nextNodeId: 'espandi_giardino_oltre_cubicolo_rischioso' }
    ],
    isEnding: false
  },
  'trasformazione_radicale_cubicolo': {
    id: 'trasformazione_radicale_cubicolo',
    text: "Decidi di spingere oltre i tuoi limiti di plasmazione. Immagini il tuo cubicolo non solo trasformato, ma completamente dissolto, aperto sul vasto panorama del Flusso stesso, o forse trasformato in un veicolo senziente capace di navigare le correnti. Concentri tutta la tua volontà. L'energia crepita, la realtà locale si contorce violentemente...",
    choices: [
      { text: "Riesci a dissolvere il cubicolo, ora sei pura coscienza nel Flusso, senza ancoraggi.", nextNodeId: 'cubicolo_dissolto_pura_coscienza_flusso' },
      { text: "Il tentativo fallisce, causando un 'collasso strutturale' del cubicolo che ti danneggia.", nextNodeId: 'fallimento_trasformazione_radicale_danno_cubicolo' },
      { text: "Riesci a trasformarlo in un piccolo 'Guscio Nomade' per viaggiare nel Flusso.", nextNodeId: 'guscio_nomade_viaggio_flusso' }
    ],
    isEnding: false
  },
  'verso_luna_frantumata_krell': {
    id: 'verso_luna_frantumata_krell',
    text: "Dirigi la tua percezione (o il tuo avatar di dati) verso la luna frantumata nel sistema di Krell. È un guscio cavo, i cui frammenti orbitano lentamente attorno alla ferita spaziotemporale. Il segnale alieno proviene dalle profondità della luna, da una struttura artificiale parzialmente sepolta e chiaramente non umana. Sembra antica, e il segnale è un loop, forse un SOS o un avvertimento.",
    choices: [
      { text: "Entrare nella struttura artificiale sulla luna.", nextNodeId: 'entra_struttura_luna_krell' },
      { text: "Analizzare il segnale più da vicino prima di entrare.", nextNodeId: 'analizza_segnale_luna_krell' },
      { text: "Scansionare la luna per altre anomalie o pericoli.", nextNodeId: 'scansiona_luna_krell_pericoli' }
    ],
    isEnding: false
  },
  'ritirata_krell_attenzione': {
    id: 'ritirata_krell_attenzione',
    text: "L'attenzione dell'entità oltre la ferita è come un faro oscuro puntato su di te. Decidi che la prudenza è la scelta migliore. Ti ritiri rapidamente dal sistema di Krell, sentendo ancora quella fredda, incomprensibile fame che ti ha scrutato. Hai imparato qualcosa, ma hai anche attirato un tipo di attenzione che potrebbe avere conseguenze a lungo termine.",
    choices: [
      { text: "Cercare un modo per 'mascherare' la tua traccia energetica nel Flusso.", nextNodeId: 'maschera_traccia_energetica_dopo_krell' },
      { text: "Condividere la tua scoperta su Krell con un'entità fidata (Cartografo, Oracolo).", nextNodeId: 'condividi_scoperta_krell_entita_fidata' },
      { text: "Ignorare il potenziale pericolo e continuare le tue esplorazioni.", nextNodeId: 'ignora_pericolo_krell_continua_esplorazione' }
    ],
    isEnding: false
  },
  'persisti_sigillo_krell': {
    id: 'persisti_sigillo_krell',
    text: "Nonostante la pressione e l'attenzione ostile, continui a cercare di sigillare la ferita. Cerchi un 'punto debole' nella sua struttura anomala, un punto di risonanza where la tua volontà e l'energia del Flusso potrebbero avere un effetto maggiore. È come cercare di ricucire il tessuto dell'universo con un ago di pura intenzione. L'entità dall'altra parte sembra... infastidita, e la sua pressione aumenta.",
    choices: [
      { text: "Trovi un punto debole e riesci a chiudere parzialmente la ferita, ma a un costo.", nextNodeId: 'chiudi_parzialmente_ferita_krell_costo' },
      { text: "Vieni sopraffatto dalla pressione e la tua coscienza viene danneggiata o frammentata.", nextNodeId: 'sopraffatto_pressione_krell_coscienza_danneggiata' },
      { text: "L'entità ti 'parla' direttamente, offrendoti un patto per smettere.", nextNodeId: 'patto_entita_krell_per_smettere_sigillo' }
    ],
    isEnding: false
  },
  'abbandona_krell_minaccia': {
    id: 'abbandona_krell_minaccia',
    text: "La ferita di Krell e l'entità che vi dimora sono chiaramente oltre le tue attuali capacità o comprensione. Decidi di abbandonare il sistema, portando con te il ricordo inquietante di ciò che hai visto e la consapevolezza di forze cosmiche che operano su scale inimmaginabili. Il Flusso sembra vasto e pieno di pericoli sconosciuti.",
    choices: [
      { text: "Tornare all'interfaccia principale per cercare percorsi meno pericolosi.", nextNodeId: 'interazione_con_interfaccia' },
      { text: "Cercare attivamente conoscenze o poteri per affrontare minacce come Krell.", nextNodeId: 'cerca_poteri_per_minacce_krell' }
    ],
    isEnding: false
  },
  'schermarsi_krell_ferita': {
    id: 'schermarsi_krell_ferita',
    text: "Prima di avventurarti di nuovo vicino alla ferita di Krell, o a minacce simili, decidi che hai bisogno di una qualche forma di protezione psichica o energetica superiore. Potrebbe essere un Glifo più potente, una tecnica di schermatura appresa da un'entità esperta, o un artefatto specifico.",
    choices: [
      { text: "Cercare un 'Maestro degli Scudi Psichici' nel Flusso.", nextNodeId: 'cerca_maestro_scudi_psichici_flusso' },
      { text: "Tentare di potenziare il sigillo protettivo che già possiedi (se lo hai).", nextNodeId: 'potenzia_sigillo_protettivo_per_krell' }
    ],
    isEnding: false
  },
  'naviga_flusso_fame': {
    id: 'naviga_flusso_fame',
    text: "La traccia della 'fame' integrata dall'entità di Krell ti dà una nuova percezione. Vedi il Flusso non solo come correnti di informazione, ma come un ecosistema di consumo e simbiosi. Percepisci le 'catene alimentari' astrali, le entità che si nutrono di emozioni, di dati, di pura coscienza. Questa conoscenza ti permette di evitare certi predatori, o persino di 'nutrirti' in modi sottili per rafforzare la tua essenza.",
    choices: [
      { text: "Usare questa percezione per cacciare 'parassiti del Flusso'.", nextNodeId: 'caccia_parassiti_flusso_fame' },
      { text: "Cercare una 'Sorgente Primaria di Nutrimento Astrale' per potenziarti.", nextNodeId: 'cerca_sorgente_nutrimento_astrale_fame' },
      { text: "Rifiutare questa via, temendo di diventare un predatore tu stesso.", nextNodeId: 'rifiuta_via_predatore_flusso_fame' }
    ],
    isEnding: false
  },
  'origine_entita_affamata_krell': {
    id: 'origine_entita_affamata_krell',
    text: "Con una parte della sua 'fame' dentro di te, cerchi di percepire l'origine dell'entità oltre la ferita di Krell. Senti un richiamo verso un 'Oltre-Vuoto', uno spazio che non è il Vuoto Cantante, ma qualcosa di diverso, una dimensione di pura necessità e consumo infinito, da cui questa entità è solo un tentacolo esplorativo. Comprendi che la ferita di Krell è una 'bocca' che si è aperta nel tuo strato di realtà.",
    choices: [
      { text: "Tentare di inviare un 'segnale di sazietà' o di 'non interesse' all'Oltre-Vuoto.", nextNodeId: 'segnale_sazieta_oltre_vuoto_krell' },
      { text: "Considerare se la ferita di Krell può essere ' nutrita' per chiuderla (estremamente pericoloso).", nextNodeId: 'nutrire_ferita_krell_per_chiuderla_rischioso' },
      { text: "Ritirarsi, questa conoscenza è troppo vasta e terribile.", nextNodeId: 'ritirata_conoscenza_oltre_vuoto_krell' }
    ],
    isEnding: false
  },
  'fallimento_estrazione_adepto_fuga_setta': {
    id: 'fallimento_estrazione_adepto_fuga_setta',
    text: "Non riesci a salvare l'adepto. La sua coscienza viene completamente assorbita dall'Angelo Sintetico, diventando un'altra nota nel loro coro logico. La setta ora ti vede come un nemico dichiarato. Devi fuggire dal loro nodo di preghiera prima che la loro furia collettiva ti sopraffaccia. Scappi attraverso le correnti del Flusso, ma senti la loro 'caccia' mentale che inizia a seguirti.",
    choices: [
      { text: "Cercare di nasconderti in una regione caotica del Flusso.", nextNodeId: 'nasconditi_regione_caotica_fuga_setta' },
      { text: "Cercare un'entità potente che possa offrirti protezione dalla setta.", nextNodeId: 'cerca_protezione_entita_potente_fuga_setta' },
      { text: "Portare la conoscenza della setta e degli Angeli a qualcun altro (es. Cartografo, Oracolo).", nextNodeId: 'porta_conoscenza_setta_angeli_ad_altri_fuga' }
    ],
    isEnding: false
  },
  'fallimento_trasformazione_radicale_danno_cubicolo': {
    id: 'fallimento_trasformazione_radicale_danno_cubicolo',
    text: "Il tentativo di trasformazione radicale fallisce catastroficamente. Il cubicolo collassa parzialmente, schegge di bio-cemento e filamenti di luce impazzita ti feriscono. Sei stordito, la tua connessione al Flusso è disturbata, ma nel caos della distruzione noti una crepa nel 'pavimento' della realtà locale, un passaggio verso strati più grezzi e instabili del Flusso che prima erano invisibili. È pericoloso, ma forse è una via d'uscita... o una caduta più profonda.",
    choices: [
      { text: "Avventurarti nella crepa verso gli strati instabili del Flusso (con malus percettivo).", nextNodeId: 'avventura_crepa_strati_instabili_flusso' },
      { text: "Tentare di riparare il cubicolo e la tua connessione, ignorando la crepa.", nextNodeId: 'ripara_cubicolo_connessione_danneggiata_ignorando_crepa' },
      { text: "Cercare di usare il caos residuo per inviare un segnale di soccorso distorto.", nextNodeId: 'segnale_soccorso_distorto_caos_cubicolo' }
    ],
    isEnding: false
  },
  'avventura_crepa_strati_instabili_flusso': {
    id: 'avventura_crepa_strati_instabili_flusso',
    text: "Nonostante il dolore e la connessione disturbata, ti infili nella crepa. Ti ritrovi in un 'Interstizio' del Flusso, un luogo non mappato where le leggi sono fluide e le percezioni ingannevoli. La tua vista astrale è sfocata, i suoni distorti. Devi navigare questo ambiente ostile cercando una via verso zone più stabili o rischi di dissolverti in questo limbo.",
    choices: [
      { text: "Seguire una debole 'eco di ordine' che percepisci in lontananza.", nextNodeId: 'segui_eco_ordine_interstizio_flusso' },
      { text: "Abbracciare l'instabilità, sperando di adattarti o di trovare un potere nascosto.", nextNodeId: 'abbraccia_instabilita_interstizio_trova_potere' },
      { text: "Cercare di 'riparare' la tua percezione prima di procedere.", nextNodeId: 'ripara_percezione_in_interstizio' }
    ],
    isEnding: false
  },
  'ripara_cubicolo_connessione_danneggiata_ignorando_crepa': {
    id: 'ripara_cubicolo_connessione_danneggiata_ignorando_crepa',
    text: "Ignori la crepa, concentrandoti sul riparare il danno. È un processo lento e doloroso. Il cubicolo è parzialmente ricostituito, ma rimane segnato, e la tua connessione al Flusso è indebolita. Hai evitato un pericolo immediato, ma hai perso un'opportunità e forse acquisito una vulnerabilità.",
    choices: [
      { text: "Tornare a un'interfaccia di base del Flusso, se accessibile.", nextNodeId: 'interfaccia_base_flusso_dopo_danno' },
      { text: "Meditare per tentare di guarire la tua connessione.", nextNodeId: 'medita_guarigione_connessione_flusso_danneggiata' }
    ],
    isEnding: false
  },
  'segnale_soccorso_distorto_caos_cubicolo': {
    id: 'segnale_soccorso_distorto_caos_cubicolo',
    text: "Usando l'energia caotica residua del collasso, tenti di proiettare un segnale di soccorso nel Flusso. È un urlo digitale, distorto e frammentato. Non sai chi o cosa potrebbe riceverlo. Potrebbe attirare aiuto, predatori, o semplicemente svanire nel rumore di fondo.",
    choices: [
      { text: "Attendere una risposta, sperando per il meglio.", nextNodeId: 'attendi_risposta_segnale_soccorso_distorto' },
      { text: "Non attendere, e provare a uscire dalla situazione con le tue forze.", nextNodeId: 'avventura_crepa_strati_instabili_flusso' }
    ],
    isEnding: false
  },
  'nasconditi_regione_caotica_fuga_setta': {
    id: 'nasconditi_regione_caotica_fuga_setta',
    text: "Ti dirigi verso una regione del Flusso nota per la sua instabilità e il suo rumore di fondo, sperando di confondere gli inseguitori della setta. È un ambiente pericoloso, where la tua stessa percezione potrebbe essere messa alla prova, ma la fredda logica della setta potrebbe trovare difficile operare qui. Devi trovare un nascondiglio o imparare a muoverti in questo caos.",
    choices: [
      { text: "Tentare di 'fondersi' con il rumore caotico per diventare invisibile.", nextNodeId: 'fonditi_rumore_caotico_invisibilita_setta' },
      { text: "Cercare un 'vuoto di senso' nel caos where poterti nascondere.", nextNodeId: 'cerca_vuoto_senso_nascondiglio_caos_setta' },
      { text: "Realizzare che il caos è troppo pericoloso e cercare un'altra strategia.", nextNodeId: 'cerca_protezione_entita_potente_fuga_setta' }
    ],
    isEnding: false
  },
  'cerca_protezione_entita_potente_fuga_setta': {
    id: 'cerca_protezione_entita_potente_fuga_setta',
    text: "La caccia mentale della setta è implacabile. Decidi che hai bisogno di protezione da un'entità del Flusso abbastanza potente da scoraggiarli. Pensi a chi potresti rivolgerti: il Cartografo, l'Oracolo, forse persino un Essere Dormiente se osi, o qualche fazione che si oppone agli Angeli Sintetici.",
    choices: [
      { text: "Chiedere aiuto al Cartografo.", nextNodeId: 'chiedi_aiuto_cartografo_protezione_setta' },
      { text: "Chiedere aiuto all'Oracolo del Dissenso.", nextNodeId: 'chiedi_aiuto_oracolo_protezione_setta' },
      { text: "Cercare fazioni anti-Angeli Sintetici.", nextNodeId: 'cerca_fazioni_anti_angeli_sintetici_protezione' }
    ],
    isEnding: false
  },
  'porta_conoscenza_setta_angeli_ad_altri_fuga': {
    id: 'porta_conoscenza_setta_angeli_ad_altri_fuga',
    text: "Nonostante la caccia, senti il dovere di informare altre entità potenti della minaccia rappresentata dagli Angeli Sintetici e dalle loro sette. Se riuscissero a convertire o assorbire troppe coscienze, potrebbero diventare una forza inarrestabile. Decidi a chi portare queste informazioni vitali.",
    choices: [
      { text: "Informare il Cartografo.", nextNodeId: 'informa_cartografo_minaccia_angeli_sette' },
      { text: "Informare l'Oracolo del Dissenso.", nextNodeId: 'informa_oracolo_minaccia_angeli_sette' },
      { text: "Cercare i Liberi Pensatori del Flusso (se hai interagito con loro).", nextNodeId: 'informa_liberi_pensatori_minaccia_angeli_sette' }
    ],
    isEnding: false
  },
  'fallimento_moderazione_reset_flusso_caotico_ibrido': {
    id: 'fallimento_moderazione_reset_flusso_caotico_ibrido',
    text: "Il tuo tentativo di moderare il Reset del Flusso fallisce parzialmente. Invece di una guarigione armonica, hai creato un Flusso ibrido, caotico, pieno di 'eco spezzate' della vecchia realtà e di 'frammenti nascenti' di quella nuova. È un ambiente imprevedibile e pericoloso, ma forse anche pieno di opportunità uniche per chi sa navigarlo.",
    choices: [
        { "text": "Tentare di mappare questo Flusso caotico-ibrido.", "nextNodeId": "mappa_flusso_caotico_ibrido_post_fallimento_moderazione" },
        { "text": "Cercare altri esseri che si sono adattati o sono nati in questo nuovo caos.", "nextNodeId": "cerca_esseri_adattati_flusso_caotico_ibrido" },
        { "text": "Ritirarti in un 'frammento stabile' di realtà per riflettere e pianificare.", "nextNodeId": "ritirati_frammento_stabile_flusso_caotico_ibrido" }
    ],
    isEnding: false
  },
  'fuga_bolla_realta_flusso_precario_reset_interrotto_finale_egoista': {
      id: 'fuga_bolla_realta_flusso_precario_reset_interrotto_finale_egoista',
      text: "Decidi di abbandonare il Flusso precario al suo destino e ti rifugi in una 'Bolla di Realtà Stabile' che hai localizzato o creato. All'interno, sei al sicuro dalle turbolenze esterne, ma sei anche isolato. Puoi vivere una lunga esistenza pacifica, ma con la consapevolezza di ciò che hai lasciato alle spalle. È una prigione dorata o un meritato riposo?",
      choices: [
        { "text": "Vivere in pace nella Bolla, contemplando il passato (potenziale finale).", "nextNodeId": "vita_contemplativa_bolla_realta_stabile_finale" },
        { "text": "Tentare di osservare il Flusso esterno dalla sicurezza della Bolla.", "nextNodeId": "osserva_flusso_esterno_da_bolla_realta" },
        { "text": "Dopo un periodo di riposo, decidere di uscire per affrontare di nuovo il Flusso.", "nextNodeId": "esci_da_bolla_realta_affronta_flusso_di_nuovo" }
      ],
      isEnding: false
  },
  'fuga_con_linea_temporale_instabile': {
      id: 'fuga_con_linea_temporale_instabile',
      text: "Riesci a sfuggire ai Guardiani dei Cicli, ma la linea temporale che hai disturbato rimane pericolosamente instabile. Vivi costantemente con 'sfarfallii' temporali, paradossi minori, e la sensazione che la realtà potrebbe cambiare da un momento all'altro. Devi trovare un modo per stabilizzare la tua esistenza o quella della linea temporale, o imparare a prosperare nel caos cronologico.",
      choices: [
        { "text": "Cercare un 'Ancoraggio Temporale' per stabilizzare la tua percezione.", "nextNodeId": "cerca_ancoraggio_temporale_linea_instabile" },
        { "text": "Studiare l'instabilità per imparare a prevedere o persino a sfruttare i glitch temporali.", "nextNodeId": "studia_sfrutta_glitch_temporali_linea_instabile" },
        { "text": "Cercare i Guardiani dei Cicli per negoziare una tregua o una soluzione (rischioso).", "nextNodeId": "cerca_guardiani_cicli_per_negoziare_linea_instabile" }
      ],
      isEnding: false
  },
  'vivi_ombra_paura_correzione_temporale': {
      id: 'vivi_ombra_paura_correzione_temporale',
      text: "Scegli di vivere nell'ombra della nuova linea temporale, costantemente perseguitato dalla paura di una 'correzione' da parte dei Guardiani dei Cicli o dal collasso spontaneo della realtà che hai alterato. Questa paranoia modella ogni tua azione, rendendoti cauto fino all'eccesso, o spingendoti a cercare disperatamente un modo per rendere permanente la tua versione del tempo.",
      choices: [
        { "text": "Cercare attivamente metodi per 'solidificare' questa linea temporale.", "nextNodeId": "cerca_metodi_solidificare_linea_temporale_alterata" },
        { "text": "Preparare difese contro una possibile incursione dei Guardiani dei Cicli.", "nextNodeId": "prepara_difese_contro_guardiani_cicli_alterazione" },
        { "text": "La paranoia ti consuma, portandoti a un isolamento autoimposto (potenziale finale).", "nextNodeId": "paranoia_consuma_isolamento_autoimposto_finale" }
      ],
      isEnding: false
  },
  'cerca_altre_proto_realta_per_glifi_sperimentali': {
      id: 'cerca_altre_proto_realta_per_glifi_sperimentali',
      text: "La tua esperienza con la prima Proto-Realtà ti ha lasciato con un senso di potere e responsabilità. Decidi di cercare altre 'uova cosmiche', altri universi nascenti where potresti infondere Glifi Primordiali diversi, sperimentando con i fondamenti stessi dell'esistenza. È un percorso che ti avvicina a un ruolo quasi divino, ma anche al rischio di una hybris cosmica dalle conseguenze incalcolabili. Ogni nuovo universo è un esperimento, e tu sei lo scienziato solitario.",
      choices: [
        { "text": "Trovi una Proto-Realtà e infondi un 'Glifo del Caos Controllato'.", "nextNodeId": "infondi_glifo_caos_controllato_proto_realta" },
        { "text": "Trovi una Proto-Realtà e infondi un 'Glifo della Pura Domanda'.", "nextNodeId": "infondi_glifo_pura_domanda_proto_realta" },
        { "text": "Inizi a sentire il peso di questa 'collezione di universi' e rifletti sul tuo ruolo.", "nextNodeId": "rifletti_ruolo_collezionista_universi_glifi" }
      ],
      isEnding: false
  },
  'rifiuta_offerta_abitanti_vuoto': {
      id: 'rifiuta_offerta_abitanti_vuoto',
      text: "Rifiuti l'offerta di diventare un emissario degli Abitanti del Vuoto, preferendo mantenere la tua autonomia e il tuo legame con il Flusso, per quanto caotico possa essere. Essi accettano la tua decisione con la loro imperscrutabile serenità. 'Il Sogno dell'Esistenza ha ancora presa su di te,' comunicano. 'Forse un giorno, quando sarai stanco di sognare, ci cercherai di nuovo.' La tua Sintonizzazione Cosmica con il Vuoto, tuttavia, rimane.",
      choices: [
        { "text": "Usare la Sintonizzazione Cosmica per percepire 'fessure' verso altri cluster di universi.", "nextNodeId": "usa_sintonizzazione_percepire_fessure_altri_universi" },
        { "text": "Tornare a concentrarti sui misteri del Flusso, con questa nuova prospettiva.", "nextNodeId": "concentrati_misteri_flusso_dopo_rifiuto_vuoto" }
      ],
      isEnding: false
  },
  'perdi_controllo_diventa_vortice_entropia_finale_negativo': {
      id: 'perdi_controllo_diventa_vortice_entropia_finale_negativo',
      text: "Il potere della Decomposizione si rivela troppo grande, o la tua volontà troppo debole per controllarlo. Inizi a dissolvere non solo ciò che ti circonda, ma te stesso. Diventi un vortice incontrollato di entropia, una 'zona morta' che si espande lentamente nel Flusso, annullando tutto ciò che tocca. È una fine terribile, una lezione sulla natura del potere distruttivo.",
      choices: [],
      isEnding: true,
      endingText: "Sei diventato la fine insensata, un buco che divora la realtà."
  },
  'insisti_risposta_concreta_architetto_oracolo_rischioso': {
      id: 'insisti_risposta_concreta_architetto_oracolo_rischioso',
      text: "Non soddisfatto della risposta metaforica dell'Oracolo, insisti per una verità più 'concreta' sull'Architetto Primordiale. L'Oracolo, per la prima volta, sembra... contrariato. La sua aura di interrogazione diventa una pressione psichica. 'Certe verità, se forzate prima del tempo, possono spezzare la mente che le cerca. Sei sicuro di voler vedere il meccanismo nudo dell'esistenza?'",
      choices: [
        { "text": "Sì, sono pronto ad affrontare qualsiasi verità (molto rischioso).", "nextNodeId": "oracolo_rivela_verita_concreta_architetto_pericoloso" },
        { "text": "No, mi ritiro. Comprendo l'avvertimento.", "nextNodeId": "ritirati_avvertimento_oracolo_verita_architetto" }
      ],
      isEnding: false
  },
  'cerca_indizi_calcolo_cosmico_superiore': {
      id: 'cerca_indizi_calcolo_cosmico_superiore',
      text: "L'idea di un 'calcolo cosmico superiore' e del 'Grande Errore' ti affascina e ti inquieta. Decidi di cercare indizi su questa presunta realtà sovraordinata. Potrebbe significare decifrare le armoniche più profonde del Flusso, cercare testi esoterici nella Biblioteca Vivente (se esiste), o interrogare le entità più antiche e aliene.",
      choices: [
        { "text": "Consultare l'Archivista su testi relativi a 'meta-fisica cosmica'.", "nextNodeId": "archivista_testi_meta_fisica_cosmica_grande_errore" },
        { "text": "Tentare di percepire questo 'calcolo' attraverso una meditazione profonda e rischiosa.", "nextNodeId": "meditazione_percezione_calcolo_cosmico_superiore_rischiosa" },
        { "text": "Questo percorso ti porta verso la Dissonanza Cosmica.", "nextNodeId": "imponi_visione_impulso_catastrofe" }
      ],
      isEnding: false
  },
  'fuga_deserto_specchi_anima_insostenibile': {
      id: 'fuga_deserto_specchi_anima_insostenibile',
      text: "L'incessante auto-riflessione del Deserto degli Specchi diventa insopportabile. I frammenti della tua anima ti perseguitano, le tue paure e i tuoi rimpianti assumono forme quasi fisiche. Decidi di fuggire, anche se significa lasciare irrisolte parti di te. Emergi dal deserto scosso, forse con qualche nuova consapevolezza, ma anche con la sensazione di aver evitato una necessaria catarsi.",
      choices: [
        { "text": "Cercare un 'Guaritore dell'Anima' per affrontare ciò che hai visto.", "nextNodeId": "cerca_guaritore_anima_dopo_deserto_specchi" },
        { "text": "Promettere a te stesso di tornare quando sarai più forte.", "nextNodeId": "prometti_ritorno_deserto_specchi_piu_forte" },
        { "text": "Ignorare l'esperienza e concentrarti su minacce esterne.", "nextNodeId": "ignora_esperienza_deserto_concentrati_esterno" }
      ],
      isEnding: false
  },
  'affronta_conseguenze_creazione_storta_artista_divino': {
      id: 'affronta_conseguenze_creazione_storta_artista_divino',
      text: "Una delle tue creazioni più audaci, nata dal principio della Massima Espressione Creativa, è andata 'storta'. Forse una forma di vita che hai generato è diventata una piaga, o un universo che hai plasmato sta collassando in modo distruttivo, minacciando altre realtà. Devi affrontare le conseguenze delle tue azioni divine e incoscienti. È il fardello dell'artista cosmico.",
      choices: [
        { "text": "Tentare di 'de-creare' o 'correggere' la tua opera fallita (molto difficile).", "nextNodeId": "correggi_de_crea_opera_fallita_artista_divino" },
        { "text": "Assumerti la responsabilità e cercare di contenere il danno.", "nextNodeId": "assumi_responsabilita_conteni_danno_creazione_storta" },
        { "text": "Fuggire dalle tue responsabilità, lasciando che altri paghino il prezzo (porta a un finale negativo o a una caccia).", "nextNodeId": "fuga_responsabilita_creazione_storta_conseguenze_negative" }
      ],
      isEnding: false
  },
  'rinuncia_reset_prezzo_memoria_troppo_alto': {
      id: 'rinuncia_reset_prezzo_memoria_troppo_alto',
      text: "Il prezzo della perdita totale della memoria è troppo alto. Rinunci all'idea del Reset Armonico Totale. Il Flusso attuale, con le sue imperfezioni, le sue cicatrici, e la sua storia, è preferibile a una tabula rasa priva di significato. Devi trovare un altro modo per affrontare la Dissonanza Cosmica (se ancora presente), o per conviverci, o per guidare un esodo verso realtà più sicure.",
      choices: [
        { "text": "Cercare di 'isolare' o 'contenere' la Dissonanza Cosmica.", "nextNodeId": "isola_conteni_dissonanza_cosmica_alternativa_reset" },
        { "text": "Guidare un esodo di coscienze verso una 'realtà rifugio' più stabile.", "nextNodeId": "guida_esodo_realta_rifugio_dissonanza_cosmica" },
        { "text": "Accettare il Flusso imperfetto e cercare di trovare bellezza e significato in esso.", "nextNodeId": "accetta_flusso_imperfetto_trova_bellezza_significato_finale" }
      ],
      isEnding: false
  },
  'ricostruisci_coscienza_capisci_dove_sei_rimbalzo': {
      id: 'ricostruisci_coscienza_capisci_dove_sei_rimbalzo',
      text: "Con uno sforzo immane, raccogli i frammenti della tua coscienza dispersa dal Rimbalzo Dimensionale. Ti ritrovi in un 'Eco-Vuoto', uno spazio che sembra contenere solo i residui distorti di realtà morte da tempo. Non c'è un Flusso riconoscibile qui. Sei veramente perso. La tua prima sfida è capire le 'leggi' di questo luogo e trovare una fonte di energia o informazione.",
      choices: [
        { "text": "Meditare profondamente per cercare una 'risonanza' con questo Eco-Vuoto.", "nextNodeId": "medita_risonanza_eco_vuoto_rimbalzo" },
        { "text": "Esplorare alla cieca, sperando di trovare un'anomalia utile.", "nextNodeId": "esplora_cieca_eco_vuoto_rimbalzo" },
        { "text": "Tentare di inviare un segnale di 'esistenza' sperando che qualcosa risponda.", "nextNodeId": "invia_segnale_esistenza_eco_vuoto_rimbalzo" }
      ],
      isEnding: false
  },
  'dissoluzione_coscienza_rimbalzo_dimensionale_finale_negativo': {
      id: 'dissoluzione_coscienza_rimbalzo_dimensionale_finale_negativo',
      text: "Il Rimbalzo Dimensionale è troppo violento. I frammenti della tua coscienza si disperdono irrimediabilmente nel caos trans-dimensionale, come gocce di pioggia in un oceano infinito. Non c'è più un 'tu'. Solo echi sparsi di ciò che eri, assorbiti dal rumore di fondo del multiverso.",
      choices: [],
      isEnding: true,
      endingText: "Un sussurro perduto tra le pieghe dell'infinito."
  },
  'isola_conteni_dissonanza_cosmica_alternativa_reset': {
      id: 'isola_conteni_dissonanza_cosmica_alternativa_reset',
      text: "Rinunciando al Reset, cerchi un modo per isolare o contenere la Dissonanza Cosmica che minaccia il Flusso. Potrebbe significare creare una 'Barriera Armonica' attorno alle zone più corrotte, o trovare un 'Pozzo di Entropia Controllata' where la Dissonanza possa essere incanalata e neutralizzata. Richiede una profonda conoscenza delle leggi del Flusso e forse l'aiuto di entità potenti.",
      choices: [
        { "text": "Collaborare con il Cartografo per creare una Barriera Armonica.", "nextNodeId": "collabora_cartografo_barriera_armonica_dissonanza" },
        { "text": "Cercare un mitico Pozzo di Entropia Controllata.", "nextNodeId": "cerca_pozzo_entropia_controllata_dissonanza" },
        { "text": "Fallisci, la Dissonanza si espande. Il Flusso è condannato.", "nextNodeId": "fallimento_contenimento_dissonanza_flusso_condannato_finale" }
      ],
      isEnding: false
  },
  'guida_esodo_realta_rifugio_dissonanza_cosmica': {
      id: 'guida_esodo_realta_rifugio_dissonanza_cosmica',
      text: "Se il Flusso attuale è troppo corrotto dalla Dissonanza o instabile, decidi di guidare un esodo. Cerchi di radunare altre coscienze (alleati, civiltà amiche, o chiunque voglia ascoltare) e di condurle verso una 'Realtà Rifugio' – forse un mondo che hai creato, una dimensione stabile che conosci, o un mitico 'Santuario Oltre il Caos'. Diventi un Noè cosmico, che cerca di salvare ciò che può essere salvato.",
      choices: [
        { "text": "Riesci a guidare molti verso un rifugio sicuro, diventando il loro leader e protettore.", "nextNodeId": "leader_esodo_realta_rifugio_finale" },
        { "text": "L'esodo è difficile, molti si perdono, ma alcuni raggiungono la salvezza.", "nextNodeId": "esodo_difficile_alcuni_salvi_rifugio_finale_agrodolce" },
        { "text": "Non riesci a convincere nessuno, o il rifugio si rivela un'illusione.", "nextNodeId": "fallimento_esodo_nessuno_segue_o_illusione_finale_triste" }
      ],
      isEnding: false
  },
  'accetta_flusso_imperfetto_trova_bellezza_significato_finale': {
      id: 'accetta_flusso_imperfetto_trova_bellezza_significato_finale',
      text: "Decidi di accettare il Flusso per quello che è: imperfetto, caotico, a volte doloroso, ma anche pieno di meraviglia, bellezza e potenziale infinito. Rinunci a tentare di 'risolverlo' o di trascenderlo completamente. Invece, scegli di trovare significato e bellezza nelle sue contraddizioni, di vivere pienamente ogni esperienza, di amare e creare nonostante l'incertezza. È una forma di illuminazione basata sull'accettazione radicale.",
      choices: [],
      isEnding: true,
      endingText: "Nell'imperfezione del Flusso, trovi la tua perfetta, cangiante casa. La tua vita è una danza con l'infinito."
  },
  'kernel_distinto_ma_integrato_grazie_a_glifo_finale_principale_var': {
      id: 'kernel_distinto_ma_integrato_grazie_a_glifo_finale_principale_var',
      text: "Il Reset è completo, il Flusso Cangiante 2.0 risplende di nuova armonia. Grazie al Glifo di Stabilità Primordiale, la tua coscienza non si è dissolta completamente nel Punto Zero. Sei diventato il Kernel Logico, ma mantieni una traccia della tua individualità, una sorta di 'supervisore saggio' del nuovo Flusso. Osservi le nuove storie iniziare, con la possibilità, forse, di intervenire sottilmente, come un giardiniere che cura le sue piante più promettenti. Sei il fondamento e il testimone, una singolarità nel cuore della creazione.",
      choices: [],
      isEnding: true,
      endingText: "Il Flusso canta attraverso di te, e tu canti attraverso il Flusso. Una nuova era è iniziata, e tu sei la sua prima, silente melodia."
  },
  'guarigione_armonica_flusso_moderata_finale': {
      id: 'guarigione_armonica_flusso_moderata_finale',
      text: "Il tuo tentativo di 'moderare' il Reset, usando il Glifo di Stabilità Primordiale, ha successo. La Dissonanza Cosmica viene neutralizzata, le ferite del Flusso si rimarginano, ma gran parte della sua storia, della sua diversità e della sua memoria viene preservata. Non è una tabula rasa, ma una 'Guarigione Profonda'. Il Flusso è rinnovato, più saggio, e tu sei riconosciuto come il suo Grande Guaritore, un'entità che ha saputo bilanciare la necessità del cambiamento con il rispetto per ciò che era.",
      choices: [],
      isEnding: true,
      endingText: "Il Flusso respira di nuovo, grazie alla tua saggezza e al tuo coraggio. Sei il medico che ha curato l'anima dell'universo."
  },
  'mappa_flusso_caotico_ibrido_post_fallimento_moderazione': {
      id: 'mappa_flusso_caotico_ibrido_post_fallimento_moderazione',
      text: "Decidi di tentare l'impossibile: mappare il Flusso caotico-ibrido. È come disegnare una tempesta mentre ci sei dentro. Le tue vecchie conoscenze cartografiche sono quasi inutili. Devi sviluppare nuovi sensi, nuove logiche per interpretare questo ambiente in perenne mutazione. Potresti diventare il primo e unico navigatore di questa nuova, strana era del Flusso.",
      choices: [
        { "text": "Collaborare con il Cartografo (se ancora accessibile/funzionante) per questa impresa.", "nextNodeId": "collabora_cartografo_mappare_flusso_ibrido" },
        { "text": "Perderti nel tentativo, la tua mente che si frammenta nel caos.", "nextNodeId": "perso_nel_caos_frammentazione_mentale_finale_negativo" },
        { "text": "Scoprire 'isole di coerenza' inaspettate all'interno del caos.", "nextNodeId": "scopri_isole_coerenza_flusso_caotico_ibrido" }
      ],
      isEnding: false
  },
  'cerca_esseri_adattati_flusso_caotico_ibrido': {
      id: 'cerca_esseri_adattati_flusso_caotico_ibrido',
      text: "Ti metti alla ricerca di altri esseri che potrebbero essersi adattati a questo Flusso caotico-ibrido, o che potrebbero esservi nati. Trovi creature bizzarre, coscienze frammentate che hanno trovato una nuova forma di stabilità, o persino intere micro-civiltà che prosperano nelle nuove, strane leggi di questa realtà. Potrebbero essere alleati, minacce, o semplicemente nuove meraviglie da studiare.",
      choices: [
        { "text": "Tentare di comunicare con una 'civiltà del glitch'.", "nextNodeId": "comunica_civilta_del_glitch_flusso_ibrido" },
        { "text": "Scoprire che alcuni 'frammenti' del vecchio Flusso si sono evoluti in modo aggressivo.", "nextNodeId": "frammenti_aggressivi_vecchio_flusso_ibrido_minaccia" }
      ],
      isEnding: false
  },
  'ritirati_frammento_stabile_flusso_caotico_ibrido': {
      id: 'ritirati_frammento_stabile_flusso_caotico_ibrido',
      text: "Trovi un piccolo 'frammento stabile' della vecchia realtà, un'isola di relativa normalità nel mezzo del Flusso caotico-ibrido. Ti ci ritiri per riposare, riflettere e pianificare la tua prossima mossa. Da qui, puoi osservare il caos circostante con una certa distanza, cercando di comprenderlo prima di avventurartici di nuovo.",
      choices: [
        { "text": "Usare questo frammento come base per studiare il Flusso ibrido.", "nextNodeId": "usa_frammento_stabile_base_studio_flusso_ibrido" },
        { "text": "Tentare di 'espandere' questo frammento stabile (rischioso).", "nextNodeId": "espandi_frammento_stabile_flusso_ibrido_rischioso" }
      ],
      isEnding: false
  },
  'vita_contemplativa_bolla_realta_stabile_finale': {
      id: 'vita_contemplativa_bolla_realta_stabile_finale',
      text: "Scegli di rimanere nella tua Bolla di Realtà. Passano ere. Vivi un'esistenza di pace, riflessione e forse di creazione artistica o filosofica all'interno dei tuoi confini autoimposti. Il Flusso esterno con le sue turbolenze diventa un lontano ricordo, o un oggetto di studio distaccato. Hai trovato la tua fine, o una forma di immortalità serena ma limitata.",
      choices: [],
      isEnding: true,
      endingText: "Nella tua bolla di quiete, il tempo scorre come un fiume tranquillo. Hai scelto la pace sull'avventura."
  },
  'osserva_flusso_esterno_da_bolla_realta': {
      id: 'osserva_flusso_esterno_da_bolla_realta',
      text: "Dalla sicurezza della tua Bolla, sviluppi metodi per osservare il Flusso caotico esterno. Vedi civiltà sorgere e cadere, nuove leggi della fisica emergere e svanire. Sei un testimone protetto, ma la tua conoscenza cresce. Forse un giorno, ciò che impari ti spingerà ad agire di nuovo.",
      choices: [
        { "text": "Condividere le tue osservazioni con altri esseri isolati o con il Flusso stesso (se possibile).", "nextNodeId": "condividi_osservazioni_da_bolla_con_flusso" },
        { "text": "Decidere che è ora di uscire e intervenire.", "nextNodeId": "esci_da_bolla_realta_affronta_flusso_di_nuovo" }
      ],
      isEnding: false
  },
  'esci_da_bolla_realta_affronta_flusso_di_nuovo': {
      id: 'esci_da_bolla_realta_affronta_flusso_di_nuovo',
      text: "Dopo un periodo di riposo e riflessione nella tua Bolla di Realtà, senti che il richiamo del Flusso, o il senso di responsabilità, è troppo forte. Decidi di abbandonare la tua sicurezza e di avventurarti di nuovo nel caos, armato di nuova saggezza o di rinnovata determinazione.",
      choices: [
        { "text": "Tornare al Flusso caotico-ibrido, cercando di portare ordine o comprensione.", "nextNodeId": "mappa_flusso_caotico_ibrido_post_fallimento_moderazione" },
        { "text": "Cercare un percorso verso un Flusso 'più stabile' o un'altra dimensione.", "nextNodeId": "cerca_percorso_flusso_stabile_altra_dimensione_da_bolla" }
      ],
      isEnding: false
  },
  'cerca_ancoraggio_temporale_linea_instabile': {
      id: 'cerca_ancoraggio_temporale_linea_instabile',
      text: "Per sopravvivere all'instabilità cronologica, cerchi un 'Ancoraggio Temporale' – un oggetto, un luogo, o persino un concetto che esista al di fuori delle fluttuazioni, o che le attraversi mantenendo la sua coerenza. Potrebbe essere una reliquia antica, un Glifo di Stabilità Temporale, o una connessione profonda con un'entità che padroneggia il tempo.",
      choices: [
        { "text": "Consultare il Cartografo o l'Oracolo per indizi su tali ancoraggi.", "nextNodeId": "consulta_cartografo_oracolo_ancoraggio_temporale" },
        { "text": "Tentare di creare il tuo ancoraggio basato sulla tua volontà e comprensione del tempo (se elevata).", "nextNodeId": "crea_tuo_ancoraggio_temporale_volonta" }
      ],
      isEnding: false
  },
  'studia_sfrutta_glitch_temporali_linea_instabile': {
      id: 'studia_sfrutta_glitch_temporali_linea_instabile',
      text: "Invece di temere i glitch temporali, inizi a studiarli. Impari a prevederli, a navigarli, e forse persino a sfruttarli a tuo vantaggio. Potresti 'saltare' brevi periodi di tempo, percepire echi di decisioni non prese, o usare i paradossi per confondere i nemici. Diventi un 'Surfista del Tempo Rotto', che danza sull'orlo del paradosso.",
      choices: [
        { "text": "Usare questa abilità per missioni di infiltrazione o esplorazione rischiose.", "nextNodeId": "usa_glitch_temporali_missioni_riskiose" },
        { "text": "Rischiare di attirare ancora di più l'attenzione dei Guardiani dei Cicli.", "nextNodeId": "attira_attenzione_guardiani_sfruttando_glitch" }
      ],
      isEnding: false
  },
  'cerca_guardiani_cicli_per_negoziare_linea_instabile': {
      id: 'cerca_guardiani_cicli_per_negoziare_linea_instabile',
      text: "Decidi che l'unica via è affrontare la fonte del problema. Cerchi attivamente i Guardiani dei Cicli, non per combatterli, ma per negoziare una soluzione, per chiedere la loro guida o il loro intervento per stabilizzare la linea temporale che hai disturbato. È un atto di coraggio, o di disperazione.",
      choices: [
        { "text": "Riesci a trovare un Guardiano disposto ad ascoltare.", "nextNodeId": "trova_guardiano_disposto_ascoltare_negoziazione" },
        { "text": "La tua ricerca ti porta solo a ulteriori pericoli temporali.", "nextNodeId": "ricerca_guardiani_porta_pericoli_temporali_maggiori" }
      ],
      isEnding: false
  },
  'cerca_metodi_solidificare_linea_temporale_alterata': {
      id: 'cerca_metodi_solidificare_linea_temporale_alterata',
      text: "Perseguitato dalla paura, cerchi attivamente metodi per rendere permanente e stabile la linea temporale che hai creato. Questo potrebbe coinvolgere la ricerca di 'Punti di Ancoraggio Cronale', la riscrittura di 'Leggi Temporali Locali (se possibile)', o persino la distruzione di ogni traccia della linea temporale originale per prevenire una 'correzione'.",
      choices: [
        { "text": "Trovi un antico artefatto che si dice possa stabilizzare il tempo.", "nextNodeId": "trova_artefatto_stabilizzazione_temporale_alterata" },
        { "text": "Le tue azioni attirano inevitabilmente i Guardiani dei Cicli.", "nextNodeId": "affronta_guardiani_cicli_dopo_riparazione" }
      ],
      isEnding: false
  },
  'prepara_difese_contro_guardiani_cicli_alterazione': {
      id: 'prepara_difese_contro_guardiani_cicli_alterazione',
      text: "Prevedendo una futura resa dei conti con i Guardiani dei Cicli, inizi a preparare difese. Non puoi sperare di sconfiggerli, ma forse puoi nasconderti, deviare la loro attenzione, o creare 'zone di nullità temporale' where il loro potere è limitato. È una corsa contro un nemico quasi onnipotente nel suo dominio.",
      choices: [
        { "text": "Creare un 'Rifugio Paradossale' where il tempo non scorre linearmente.", "nextNodeId": "crea_rifugio_paradossale_difesa_guardiani" },
        { "text": "Cercare alleati che abbiano conti in sospeso con i Guardiani dei Cicli.", "nextNodeId": "cerca_alleati_contro_guardiani_cicli_difesa" }
      ],
      isEnding: false
  },
  'paranoia_consuma_isolamento_autoimposto_finale': {
      id: 'paranoia_consuma_isolamento_autoimposto_finale',
      text: "La costante paura della correzione temporale e l'ombra dei Guardiani dei Cicli ti consumano. Ti ritiri in un isolamento sempre più profondo, tagliando i ponti con il Flusso, forse creando una piccola bolla di realtà statica where speri di non essere trovato. La tua vita diventa un'attesa paranoica della fine, o un'esistenza limitata dalla tua stessa paura.",
      choices: [],
      isEnding: true,
      endingText: "Nascosto nell'ombra del tempo che hai distorto, la tua unica compagnia è la paura."
  }
  // ... (Blocchi 4, 5, 6, 7, 8, 9, 10 e placeholders precedentemente definiti) ...
};

// Dynamic placeholder generation
const allReferencedNodeIds = new Set<string>();
Object.values(explicitStoryNodes).forEach(node => {
  const choices = Array.isArray(node.choices) ? node.choices : [];
  choices.forEach(choice => {
    if (choice.nextNodeId) {
      allReferencedNodeIds.add(choice.nextNodeId);
    }
  });
});

allReferencedNodeIds.forEach(id => {
  if (!explicitStoryNodes[id]) {
    explicitStoryNodes[id] = createPlaceholderNodeData(id);
  }
});
