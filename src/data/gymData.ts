import { Exercise, MovementPattern, Routine, Student, UserProfile } from '../types';

export const MOVEMENT_PATTERNS: MovementPattern[] = [
  "Movilidad",
  "Core",
  "Rodilla Dominante",
  "Cadera Dominante",
  "Empuje",
  "Traccion",
  "Localizado",
  "Agilidad"
];

export const INITIAL_EXERCISES: Exercise[] = [
  {
    "id": "gato_bueno_gato_malo",
    "nombre": "Gato Bueno Gato Malo",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=y7l1AKoVfOs",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "90_90",
    "nombre": "90-90",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=RztQ13_zTIQ",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "90_90_con_extension",
    "nombre": "90-90 Con Extension",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "90_90_con_extension_a_estocada",
    "nombre": "90-90 Con Extension A Estocada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "90_90_con_flexion_de_tronco",
    "nombre": "90-90 Con Flexion De Tronco",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=8zpIodv6Yp8",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "90_90_con_rotacion_dorsal",
    "nombre": "90-90 Con Rotacion Dorsal",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "90_90_levanto_pie_contrario",
    "nombre": "90-90 Levanto Pie Contrario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abro_libro",
    "nombre": "Abro Libro",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abro_y_cierro",
    "nombre": "Abro Y Cierro",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "adelante_atras",
    "nombre": "Adelante Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bisagra___sentadilla",
    "nombre": "Bisagra + Sentadilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_elefante",
    "nombre": "Caminata De Elefante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "carpas_dinamicas",
    "nombre": "Carpas Dinamicas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "circunducciones_adelante",
    "nombre": "Circunducciones Adelante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cobra_con_rotaciones",
    "nombre": "Cobra Con Rotaciones",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=93OogUYDDeA",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "elevacion_de_pierna_activa",
    "nombre": "Elevacion De Pierna Activa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_de_aductores_en_frog",
    "nombre": "Estiramiento De Aductores En Frog",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_de_cuadriceps_en_split",
    "nombre": "Estiramiento De Cuadriceps En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_de_gemelos_en_plancha",
    "nombre": "Estiramiento De Gemelos En Plancha",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_de_piriforme",
    "nombre": "Estiramiento De Piriforme",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_de_rotacion_externa_cadera_parado",
    "nombre": "Estiramiento De Rotacion Externa Cadera Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_dinamico_de_aductores",
    "nombre": "Estiramiento Dinamico De Aductores",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_dinamico_de_isquio_con_brazo",
    "nombre": "Estiramiento Dinamico De Isquio Con Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_estatico_en_y",
    "nombre": "Estiramiento Estatico En Y",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extensiones_con_baston",
    "nombre": "Extensiones Con Baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "foam_roller",
    "nombre": "Foam Roller",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "foam_roller_para_tendones",
    "nombre": "Foam Roller Para Tendones",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_1_brazo_dorsal_c__banda",
    "nombre": "Movilidad 1 Brazo Dorsal C/ Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_cadera_en_cuadrupedia",
    "nombre": "Movilidad De Cadera En Cuadrupedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_tobillo",
    "nombre": "Movilidad De Tobillo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_tobillo__banco_empujo_pecho",
    "nombre": "Movilidad De Tobillo  Banco Empujo Pecho",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_tobillo_banda_astragalo",
    "nombre": "Movilidad De Tobillo Banda Astragalo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_tobillo_en_banco",
    "nombre": "Movilidad De Tobillo En Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_dorsal_abro_cierro_en_split",
    "nombre": "Movilidad Dorsal Abro-Cierro En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_dorsal_con_banco",
    "nombre": "Movilidad Dorsal Con Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_dorsal_en_rock_back_de_aductores",
    "nombre": "Movilidad Dorsal En Rock Back De Aductores",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_en_rotacion_de_hombros_con_banda",
    "nombre": "Movilidad En Rotacion De Hombros Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_toracica_con_baston",
    "nombre": "Movilidad Toracica Con Baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_toracica_en_rockback_aductor",
    "nombre": "Movilidad Toracica En Rockback Aductor",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_toracica_en_spiderman",
    "nombre": "Movilidad Toracica En Spiderman",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_toracica_en_split",
    "nombre": "Movilidad Toracica En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pierna_activa_con_banda",
    "nombre": "Pierna Activa Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_apart",
    "nombre": "Pull Apart",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_apart___rotacion_externa",
    "nombre": "Pull Apart + Rotacion Externa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_apart_en_bisagra",
    "nombre": "Pull Apart En Bisagra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rock_back",
    "nombre": "Rock Back",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rock_back_de_aductores",
    "nombre": "Rock Back De Aductores",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_con_baston",
    "nombre": "Rotaciones Con Baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_con_brazo",
    "nombre": "Rotaciones Con Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_de_hombro_toma_rack",
    "nombre": "Rotaciones De Hombro Toma Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_dorsales_a_codo_apoyado",
    "nombre": "Rotaciones Dorsales A Codo Apoyado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_dorsales_arrodillado",
    "nombre": "Rotaciones Dorsales Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_dorsales_en_cuadrupedia",
    "nombre": "Rotaciones Dorsales En Cuadrupedia",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=MPsAS_IrOcM",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "rotaciones_externas_de_cadera_en_cuadrupedia",
    "nombre": "Rotaciones Externas De Cadera En Cuadrupedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_externas_de_cadera_parado",
    "nombre": "Rotaciones Externas De Cadera Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_externas_en_prono",
    "nombre": "Rotaciones Externas En Prono",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_internas_de_cadera_parado",
    "nombre": "Rotaciones Internas De Cadera Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_lumbares_en_split",
    "nombre": "Rotaciones Lumbares En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla___movilidad_dorsal",
    "nombre": "Sentadilla + Movilidad Dorsal",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_de_arranque_facu",
    "nombre": "Sentadilla De Arranque Facu",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_de_arranque",
    "nombre": "Sentadilla De Arranque",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_con_movilidad_toracia",
    "nombre": "Sentadilla Lateral Con Movilidad Toracia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "separo_y_junto_rodillas_en_sentadilla",
    "nombre": "Separo Y Junto Rodillas En Sentadilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "squat_to_stand",
    "nombre": "Squat To Stand",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sube_y_baja",
    "nombre": "Sube Y Baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estiramiento_para_la_mu_eca",
    "nombre": "Estiramiento Para La Muñeca",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_tobillo_en_sentadilla",
    "nombre": "Movilidad De Tobillo En Sentadilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_hombro___foca",
    "nombre": "Movilidad Hombro + Foca",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "oblicuos_en_landmine",
    "nombre": "Oblicuos en Landmine",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=8oP6ndaO9y8&pp=ygUUb2JsaWN1b3MgZW4gbGFuZG1pbmU%3D",
    "progresion_default": "Meseta 3x20"
  },
  {
    "id": "abs_bolita",
    "nombre": "Abs Bolita",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abs_crunch",
    "nombre": "Abs Crunch",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=SoDUMfChIqQ",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "abs_en_v_a_un_pie",
    "nombre": "Abs En V A Un Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abs_en_v_cruzado",
    "nombre": "Abs En V Cruzado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "aplasto_colchoneta",
    "nombre": "Aplasto Colchoneta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "apreto_colchoneta_con_soga",
    "nombre": "Apreto Colchoneta Con Soga",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "barquito",
    "nombre": "Barquito",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_con_caida_lateral",
    "nombre": "Bicho Muerto Con Caida Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_con_fitball",
    "nombre": "Bicho Muerto Con Fitball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_con_miniband_cruzado",
    "nombre": "Bicho Muerto Con Miniband Cruzado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_con_miniband_paralelo",
    "nombre": "Bicho Muerto Con Miniband Paralelo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_cruzado",
    "nombre": "Bicho Muerto Cruzado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_cruzado___completo",
    "nombre": "Bicho Muerto Cruzado + Completo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_doble",
    "nombre": "Bicho Muerto Doble",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_paralelo",
    "nombre": "Bicho Muerto Paralelo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_piernas_a_90_con_miniband",
    "nombre": "Bicho Muerto Piernas A 90 Con Miniband",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_piernas_extendidas_con_banda",
    "nombre": "Bicho Muerto Piernas Extendidas Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_saco_de_a_un_segmento",
    "nombre": "Bicho Muerto Saco De A Un Segmento",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_muerto_solo_piernas_rodilla_90",
    "nombre": "Bicho Muerto Solo Piernas Rodilla 90°",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicho_sin_manos_piernas_extendidas",
    "nombre": "Bicho Sin Manos Piernas Extendidas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bird_dog_con_abeducci_n__lumbar",
    "nombre": "Bird Dog Con Abeducción (Lumbar)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bird_dog_dinamico__lumbar",
    "nombre": "Bird Dog Dinamico (Lumbar)",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=rEyz_RWX0Oo",
    "progresion_default": "Meseta 3x20"
  },
  {
    "id": "bird_dog_isometrico__lumbar",
    "nombre": "Bird Dog Isometrico (Lumbar)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bird_dog_sin_apoyo_de_pie__lumbar",
    "nombre": "Bird Dog Sin Apoyo De Pie (Lumbar)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bird_dog_solo_pie",
    "nombre": "Bird Dog Solo Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "body_saw_to_pike",
    "nombre": "Body Saw To Pike",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "body_saw_trx",
    "nombre": "Body Saw Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caidas_de_rodillas_en_trx",
    "nombre": "Caidas De Rodillas En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caidas_en_trx",
    "nombre": "Caidas En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_cangrejo",
    "nombre": "Caminata De Cangrejo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero",
    "nombre": "Caminata De Granjero",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero___halo",
    "nombre": "Caminata De Granjero + Halo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_1_brazo_en_bottom_up",
    "nombre": "Caminata De Granjero 1 Brazo En Bottom Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_1_mano",
    "nombre": "Caminata De Granjero 1 Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_1_mano_ktb_c_banda",
    "nombre": "Caminata De Granjero 1 Mano Ktb C/Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_en_bottom_up",
    "nombre": "Caminata De Granjero En Bottom Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_en_el_lugar",
    "nombre": "Caminata De Granjero En El Lugar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_manos",
    "nombre": "Caminata De Manos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_manos_en_roll_out",
    "nombre": "Caminata De Manos En Roll Out",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_en_vertical",
    "nombre": "Caminata En Vertical",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_granjero_en_el_lugar_1_brazo",
    "nombre": "Caminata Granjero En El Lugar 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chop_espada_con_pivot",
    "nombre": "Chop Espada Con Pivot",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chops_espada",
    "nombre": "Chops Espada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chops_espada_en_split",
    "nombre": "Chops Espada En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chops_hachazo",
    "nombre": "Chops Hachazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chops_hachazo_en_split",
    "nombre": "Chops Hachazo En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "conejitos",
    "nombre": "Conejitos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "conejitos_alternados",
    "nombre": "Conejitos Alternados",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "constructor",
    "nombre": "Constructor",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cophenagen___remo",
    "nombre": "Cophenagen + Remo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cophenagen_palanca_corta",
    "nombre": "Cophenagen Palanca Corta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_de_abdomen",
    "nombre": "Cruces De Abdomen",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_up_mcgill",
    "nombre": "Curl Up Mcgill",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "equilibrio_sobre_fitball",
    "nombre": "Equilibrio Sobre Fitball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_plancha_de_1_brazo",
    "nombre": "Flexiones A Plancha De 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "golpes_con_medball_arrodillado",
    "nombre": "Golpes Con Medball Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "granjero_mozo",
    "nombre": "Granjero Mozo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo",
    "nombre": "Halo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_de_cintura",
    "nombre": "Halo De Cintura",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_infinito",
    "nombre": "Halo Infinito",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_tempo_de_cabeza",
    "nombre": "Halo Tempo De Cabeza",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_tempo_de_cabeza_en_split",
    "nombre": "Halo Tempo De Cabeza En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_tempo_de_cadera",
    "nombre": "Halo Tempo De Cadera",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "halo_tempo_de_cadera_en_1_pie",
    "nombre": "Halo Tempo De Cadera En 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "inferiores_lado_a_lado",
    "nombre": "Inferiores Lado A Lado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "inferiores_lado_a_lado_rodilla_a_90",
    "nombre": "Inferiores Lado A Lado Rodilla A 90",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_caminata_granjero_una_mano",
    "nombre": "Iso Caminata Granjero Una Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "la_panquequera",
    "nombre": "La Panquequera",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "le_adores",
    "nombre": "Leñadores",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "levanto_el_cielo",
    "nombre": "Levanto El Cielo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "limpiaparabrisas",
    "nombre": "Limpiaparabrisas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "limpiaparabrisas_en_l",
    "nombre": "Limpiaparabrisas En L",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "marcha_de_psoas",
    "nombre": "Marcha De Psoas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "marcha_overhead",
    "nombre": "Marcha Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "marcha_valija",
    "nombre": "Marcha Valija",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "mi_vieja_mula",
    "nombre": "Mi Vieja Mula",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "mountain_climber_lento",
    "nombre": "Mountain Climber Lento",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "overhead_press_con_banda",
    "nombre": "Overhead Press Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "overhead_press_isometrico_con_banda",
    "nombre": "Overhead Press Isometrico Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press",
    "nombre": "Pallof Press",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press___dibujo_circulo",
    "nombre": "Pallof Press + Dibujo Circulo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press___pivot",
    "nombre": "Pallof Press + Pivot",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press___pivot_bajo",
    "nombre": "Pallof Press + Pivot Bajo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_arriba_abajo",
    "nombre": "Pallof Press Arriba-Abajo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_arrodillado",
    "nombre": "Pallof Press Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_con_caminata_lateral",
    "nombre": "Pallof Press Con Caminata Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_con_perturbacion_de_disco",
    "nombre": "Pallof Press Con Perturbacion De Disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_en_polea",
    "nombre": "Pallof Press En Polea",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=3q6xGhrh1B0",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "pallof_press_en_split",
    "nombre": "Pallof Press En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_en_split_arriba___abajo",
    "nombre": "Pallof Press En Split Arriba - Abajo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pallof_press_en_trx",
    "nombre": "Pallof Press En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pies_a_la_barra",
    "nombre": "Pies A La Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "placha_toco_mano_contraria",
    "nombre": "Placha Toco Mano Contraria",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90",
    "nombre": "Plancha 90",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90___patada",
    "nombre": "Plancha 90 + Patada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90___roll_out",
    "nombre": "Plancha 90 + Roll Out",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90_adelante_atras",
    "nombre": "Plancha 90 Adelante Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90_desplaz_lateral",
    "nombre": "Plancha 90 Desplaz Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90_saco_1_pie",
    "nombre": "Plancha 90 Saco 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90_saco_pie___mano_cruzado",
    "nombre": "Plancha 90 Saco Pie + Mano Cruzado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_90_90",
    "nombre": "Plancha 90-90",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_copenhagen",
    "nombre": "Plancha Copenhagen",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_cophenagen_con_ktb_oh",
    "nombre": "Plancha Cophenagen Con Ktb Oh",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_brazos",
    "nombre": "Plancha De Brazos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_brazos_a_bird_dog",
    "nombre": "Plancha De Brazos A Bird Dog",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_brazos_abecedario",
    "nombre": "Plancha De Brazos Abecedario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_brazos_subo_a_disco",
    "nombre": "Plancha De Brazos Subo A Disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_brazos_toco_hombro_contrario",
    "nombre": "Plancha De Brazos Toco Hombro Contrario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_codos",
    "nombre": "Plancha De Codos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_codos_con_rodillas",
    "nombre": "Plancha De Codos Con Rodillas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_codos_de_pared",
    "nombre": "Plancha De Codos De Pared",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_codos_saco_1_pie",
    "nombre": "Plancha De Codos Saco 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral",
    "nombre": "Plancha Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_apoyo_pie_de_arriba",
    "nombre": "Plancha Lateral Apoyo Pie De Arriba",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_clamshell",
    "nombre": "Plancha Lateral Clamshell",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_clamshell__2",
    "nombre": "Plancha Lateral Clamshell  2",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_con_base_amplia",
    "nombre": "Plancha Lateral Con Base Amplia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_con_clamshell_2_dinamica",
    "nombre": "Plancha Lateral Con Clamshell 2 Dinamica",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_con_rodilla",
    "nombre": "Plancha Lateral Con Rodilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_lateral_toco_escapula_contraria",
    "nombre": "Plancha Lateral Toco Escapula Contraria",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_muevo_elemento_lado_a_lado",
    "nombre": "Plancha Muevo Elemento Lado A Lado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_oso_con_mancuernas___caminata",
    "nombre": "Plancha Oso Con Mancuernas + Caminata",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_rkc",
    "nombre": "Plancha Rkc",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_sobre_fitball",
    "nombre": "Plancha Sobre Fitball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_spider_man",
    "nombre": "Plancha Spider-Man",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_toco_codo_contrario",
    "nombre": "Plancha Toco Codo Contrario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_toco_elemento",
    "nombre": "Plancha Toco Elemento",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_toco_rodilla_contraria",
    "nombre": "Plancha Toco Rodilla Contraria",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_toco_tobillo_contrario",
    "nombre": "Plancha Toco Tobillo Contrario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_ty",
    "nombre": "Plancha Ty",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_ty_dinamica",
    "nombre": "Plancha Ty Dinamica",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_ty_dinamica_con_ktb_y_medball",
    "nombre": "Plancha Ty Dinamica Con Ktb Y Medball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_ty_dinamica_toco_punta",
    "nombre": "Plancha Ty Dinamica Toco Punta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_con_fitball",
    "nombre": "Puente De Gluteo Con Fitball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_bote_con_mancuerna",
    "nombre": "Remo Bote Con Mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_de_bote_con_barra",
    "nombre": "Remo De Bote Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "respiraciones_diafragmatica_con_ktb",
    "nombre": "Respiraciones Diafragmatica Con Ktb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "revolver_la_olla",
    "nombre": "Revolver La Olla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "revolver_la_olla_arrodillado",
    "nombre": "Revolver La Olla Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rodillas_a_la_barra",
    "nombre": "Rodillas A La Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_out",
    "nombre": "Roll Out",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_out_asistido",
    "nombre": "Roll Out Asistido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_out_intermedio",
    "nombre": "Roll Out Intermedio",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_out_parado",
    "nombre": "Roll Out Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_plank",
    "nombre": "Roll Plank",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "roll_plank_2",
    "nombre": "Roll Plank 2",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rotaciones_de_pie_con_landmine",
    "nombre": "Rotaciones De Pie Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "swing_pendular",
    "nombre": "Swing Pendular",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tgu",
    "nombre": "Tgu",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tic___tac_con_kb_asimetrico",
    "nombre": "Tic - Tac Con Kb Asimetrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "todo_ok",
    "nombre": "Todo Ok",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "twist_ruso",
    "nombre": "Twist Ruso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelta_al_medio_mundo",
    "nombre": "Vuelta Al Medio Mundo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelta_al_mundo",
    "nombre": "Vuelta Al Mundo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "wall_drill_con_rodilla",
    "nombre": "Wall Drill Con Rodilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "wall_drill_isometrico",
    "nombre": "Wall Drill Isometrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "wall_drill_lateral_con_rodilla",
    "nombre": "Wall Drill Lateral Con Rodilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_pallof_con_caminata_lateral_en_polea",
    "nombre": "Press Pallof Con Caminata Lateral En Polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "piernas_al_cielo",
    "nombre": "Piernas Al Cielo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_manos_y_pies",
    "nombre": "Caminata De Manos Y Pies",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dragon_flag",
    "nombre": "Dragon Flag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "reverse_crunch_acostado",
    "nombre": "Reverse Crunch Acostado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_granjero_2_brazos_bottom_up",
    "nombre": "Caminata De Granjero 2 Brazos Bottom Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "twist_con_banda",
    "nombre": "Twist Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tgu_sit_up",
    "nombre": "Tgu Sit Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "lumbares_en_colchoneta",
    "nombre": "Lumbares en colchoneta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "lumbares_en_banco",
    "nombre": "Lumbares en banco",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=JGiKCE593og&pp=ygUTbHVtYmFyZXMgZW4gbWFxdWluYQ%3D%3D",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "abdominales_en_polea",
    "nombre": "Abdominales en polea",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=GtLSlLQIIEg",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "lumbares_en_ghd",
    "nombre": "Lumbares en GHD",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_de_piernas_en_paralelas",
    "nombre": "Elevacion de piernas en paralelas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "oblicuos_unilateral",
    "nombre": "Oblicuos unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "oblicuos_polea_baja",
    "nombre": "Oblicuos polea baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abdomianles_elevacion_de_disco",
    "nombre": "Abdomianles elevacion de disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "oblicuos_lado_a_lado",
    "nombre": "Oblicuos lado a lado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "oblicuos_en_banco_lumbar",
    "nombre": "Oblicuos en banco Lumbar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_recto_interior",
    "nombre": "Elevacion recto interior",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "giros_con_medicine_ball",
    "nombre": "Giros con medicine ball",
    "patron": "Core",
    "video_url": "https://www.youtube.com/watch?v=YCo-qmneId8",
    "progresion_default": "Meseta 3x20"
  },
  {
    "id": "bicho_muerto_con_disco",
    "nombre": "Bicho muerto con disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_de_piernas_alternadas",
    "nombre": "Elevacion de piernas alternadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "crunch_piernas_elevadas",
    "nombre": "Crunch piernas elevadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bird_dog__remo_banda",
    "nombre": "Bird Dog +Remo banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla",
    "nombre": "Sentadilla",
    "patron": "Rodilla Dominante",
    "video_url": "https://www.youtube.com/watch?v=lgYgLBaJDpA",
    "progresion_default": "Escalon (Simple) desde 4x8"
  },
  {
    "id": "caminata_en_estocada_adelante",
    "nombre": "Caminata En Estocada Adelante",
    "patron": "Rodilla Dominante",
    "video_url": "https://www.youtube.com/watch?v=EvzlMxD7kmk",
    "progresion_default": "Meseta 3x20"
  },
  {
    "id": "caminata_en_estocada_adelante___rodilla_arriba",
    "nombre": "Caminata En Estocada Adelante + Rodilla Arriba",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_en_estocada_adelante_atras",
    "nombre": "Caminata En Estocada Adelante Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_en_estocada_atras",
    "nombre": "Caminata En Estocada Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "chaotic_squat",
    "nombre": "Chaotic Squat",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "deck_squat",
    "nombre": "Deck Squat",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "desplante",
    "nombre": "Desplante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_adelante",
    "nombre": "Estocada Adelante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_adelante_barra_toma_front",
    "nombre": "Estocada Adelante Barra Toma Front",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_adelante_goblet",
    "nombre": "Estocada Adelante Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_adelante_overhead",
    "nombre": "Estocada Adelante Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras",
    "nombre": "Estocada Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_con_deficit_goblet",
    "nombre": "Estocada Atras Con Deficit Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_corebag_toma_delante",
    "nombre": "Estocada Atras Corebag Toma Delante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_corebag_toma_detras",
    "nombre": "Estocada Atras Corebag Toma Detras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_goblet",
    "nombre": "Estocada Atras Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_overhead",
    "nombre": "Estocada Atras Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_overhead_1_brazo",
    "nombre": "Estocada Atras Overhead 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_rack",
    "nombre": "Estocada Atras Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_por_delante_valija_corebag",
    "nombre": "Estocada Por Delante Valija Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_sentadilla_lateral_goblet",
    "nombre": "Iso Sentadilla Lateral Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "marcha_turca",
    "nombre": "Marcha Turca",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pisotla_con_silla_rack",
    "nombre": "Pisotla Con Silla Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistol_asistido_c_soga",
    "nombre": "Pistol Asistido C/Soga",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola",
    "nombre": "Pistola",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_asimetrica",
    "nombre": "Pistola Asimetrica",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_asimetrica_con_silla",
    "nombre": "Pistola Asimetrica Con Silla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla",
    "nombre": "Pistola Con Silla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla_1_brazo_overhead",
    "nombre": "Pistola Con Silla 1 Brazo Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla_goblet",
    "nombre": "Pistola Con Silla Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla_overhead",
    "nombre": "Pistola Con Silla Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla_rack",
    "nombre": "Pistola Con Silla Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_con_silla_y_baston",
    "nombre": "Pistola Con Silla Y Baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_goblet",
    "nombre": "Pistola Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_zercher",
    "nombre": "Pistola Zercher",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pistola_zombie",
    "nombre": "Pistola Zombie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "prensa_a_45",
    "nombre": "Prensa A 45",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rodillas_a_pararse_controlado",
    "nombre": "Rodillas A Pararse Controlado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_al_cajon_goblet_doble",
    "nombre": "Sentadilla Al Cajon Goblet Doble",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_asimetrica_con_silla",
    "nombre": "Sentadilla Asimetrica Con Silla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_brazos_overhead",
    "nombre": "Sentadilla Brazos Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara",
    "nombre": "Sentadilla Bulgara",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_asistida",
    "nombre": "Sentadilla Bulgara Asistida",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_deficit",
    "nombre": "Sentadilla Bulgara Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_goblet",
    "nombre": "Sentadilla Bulgara Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_overhead",
    "nombre": "Sentadilla Bulgara Overhead",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_rack",
    "nombre": "Sentadilla Bulgara Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_bulgara_valija_1_brazo",
    "nombre": "Sentadilla Bulgara Valija 1 Brazo",
    "patron": "Rodilla Dominante",
    "video_url": "https://www.youtube.com/watch?v=rAO8M9INgww",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "sentadilla_con_banco",
    "nombre": "Sentadilla Con Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_con_banco_goblet",
    "nombre": "Sentadilla Con Banco Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_con_barra_y_banco",
    "nombre": "Sentadilla Con Barra Y Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_con_landmine",
    "nombre": "Sentadilla Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_con_pausa",
    "nombre": "Sentadilla Con Pausa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_con_silla_y_baston",
    "nombre": "Sentadilla Con Silla Y Baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_de_cajon",
    "nombre": "Sentadilla De Cajon",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_de_pulso",
    "nombre": "Sentadilla De Pulso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_goblet",
    "nombre": "Sentadilla Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_goblet___banda",
    "nombre": "Sentadilla Goblet + Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_goblet_con_banco",
    "nombre": "Sentadilla Goblet Con Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral",
    "nombre": "Sentadilla Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_con_landmine",
    "nombre": "Sentadilla Lateral Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_con_landmine_alto",
    "nombre": "Sentadilla Lateral Con Landmine Alto",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_con_trx",
    "nombre": "Sentadilla Lateral Con Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_goblet",
    "nombre": "Sentadilla Lateral Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_lateral_goblet_con_deficit",
    "nombre": "Sentadilla Lateral Goblet Con Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_overhead_con_banda",
    "nombre": "Sentadilla Overhead Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_por_delante",
    "nombre": "Sentadilla Por Delante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_por_delante_con_corebag",
    "nombre": "Sentadilla Por Delante Con Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_por_detras",
    "nombre": "Sentadilla Por Detras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_rack",
    "nombre": "Sentadilla Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_skater",
    "nombre": "Sentadilla Skater",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_tempo",
    "nombre": "Sentadilla Tempo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_tempo_3_2_1",
    "nombre": "Sentadilla Tempo 3-2-1",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_x",
    "nombre": "Sentadilla X",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_zercher",
    "nombre": "Sentadilla Zercher",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "step_down",
    "nombre": "Step Down",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "step_down_to_pistol",
    "nombre": "Step Down To Pistol",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subida_al_banco",
    "nombre": "Subida Al Banco",
    "patron": "Rodilla Dominante",
    "video_url": "https://www.youtube.com/watch?v=7dU8pueJ2e4",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "subida_al_banco_1_brazo_valija",
    "nombre": "Subida Al Banco 1 Brazo Valija",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subida_al_banco_goblet",
    "nombre": "Subida Al Banco Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_angular_con_landmine",
    "nombre": "Estocada Angular Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "step_down_hacia_adelante",
    "nombre": "Step Down Hacia Adelante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_atras_con_deficit",
    "nombre": "Estocada Atras Con Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_pin_squat",
    "nombre": "Iso Pin Squat",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_trap_bar",
    "nombre": "Iso Trap Bar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sentadilla_detras",
    "nombre": "Safety Sentadilla Detras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_subida_al_cajon",
    "nombre": "Safety Subida Al Cajon",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sentadilla_bulgara",
    "nombre": "Safety Sentadilla Bulgara",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sentadilla_bulgara_con_soporte",
    "nombre": "Safety Sentadilla Bulgara Con Soporte",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sentadilla_con_soporte",
    "nombre": "Safety Sentadilla Con Soporte",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_estocada_atras",
    "nombre": "Safety Estocada Atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sentadilla_lateral",
    "nombre": "Safety Sentadilla Lateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "prensa_a_45_unilateral",
    "nombre": "Prensa a 45 unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subidas_al__cajon_cuadriceps",
    "nombre": "Subidas al  cajon Cuadriceps",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_hack",
    "nombre": "Sentadilla Hack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadila_sumo_con_barra",
    "nombre": "Sentadila sumo con barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocada_cruzada_hacia_atras",
    "nombre": "Estocada cruzada hacia atras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_sisy",
    "nombre": "Sentadilla sisy",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subidas_laterales",
    "nombre": "Subidas laterales",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subidas_al_cajon_con_polea",
    "nombre": "Subidas al cajon con polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_barra_hexagonal",
    "nombre": "Sentadilla Barra Hexagonal",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_prensa_invertida",
    "nombre": "Sentadilla prensa invertida",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "subidas_al_step",
    "nombre": "Subidas al Step",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "estocadas_atras_con_apoyo",
    "nombre": "Estocadas atras con apoyo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_sisi",
    "nombre": "Sentadilla Sisi",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sentadilla_en_maquina_belt_squat",
    "nombre": "Sentadilla en maquina Belt squat",
    "patron": "Rodilla Dominante",
    "video_url": "https://www.youtube.com/watch?v=Dr9yagOonz8",
    "progresion_default": "Escalon (Simple) desde 4x8"
  },
  {
    "id": "peso_muerto",
    "nombre": "Peso Muerto",
    "patron": "Cadera Dominante",
    "video_url": "https://www.youtube.com/watch?v=z_UsunyCxxg",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "avion",
    "nombre": "Avion",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "avion_asistido_con_pared",
    "nombre": "Avion Asistido Con Pared",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bisagra_arrodillado_goblet",
    "nombre": "Bisagra Arrodillado Goblet",
    "patron": "Cadera Dominante",
    "video_url": "https://www.youtube.com/watch?v=WNKiVHo6sUU",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_cabra",
    "nombre": "Buenos Dias Cabra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_con_barra_sentado",
    "nombre": "Buenos Dias Con Barra Sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_goblet",
    "nombre": "Buenos Dias Goblet",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_por_delante_corebag",
    "nombre": "Buenos Dias Por Delante Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_zercher",
    "nombre": "Buenos Dias Zercher",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_isquio_con_fitball",
    "nombre": "Curl De Isquio Con Fitball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "fighter_swing",
    "nombre": "Fighter Swing",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "frog_pumps",
    "nombre": "Frog Pumps",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust",
    "nombre": "Hip Thrust",
    "patron": "Cadera Dominante",
    "video_url": "https://www.youtube.com/watch?v=OAhvIWLC0rc",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "hip_thrust___press",
    "nombre": "Hip Thrust + Press",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_1_pie",
    "nombre": "Hip Thrust 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_asimetrico",
    "nombre": "Hip Thrust Asimetrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_con_barra",
    "nombre": "Hip Thrust Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_con_barra_1_pie",
    "nombre": "Hip Thrust Con Barra 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_elevado",
    "nombre": "Hip Thrust Elevado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hip_thrust_en_maquina_smith",
    "nombre": "Hip Thrust En Maquina Smith",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hiperextensiones",
    "nombre": "Hiperextensiones",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_buenos_dias_con_barra",
    "nombre": "Iso Buenos Dias Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "jefferson_curl",
    "nombre": "Jefferson Curl",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_gluteos",
    "nombre": "Patada De Gluteos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto___halo_de_cabeza_kb",
    "nombre": "Peso Muerto + Halo De Cabeza Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto___remo_con_kb",
    "nombre": "Peso Muerto + Remo Con Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_1_pie_con_landmine",
    "nombre": "Peso Muerto 1 Pie Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_1_pie_en_trx",
    "nombre": "Peso Muerto 1 Pie En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_asim_trico",
    "nombre": "Peso Muerto Asimétrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_banda",
    "nombre": "Peso Muerto Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_corebag",
    "nombre": "Peso Muerto Con Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_kb",
    "nombre": "Peso Muerto Con Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_landmine",
    "nombre": "Peso Muerto Con Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_pausa",
    "nombre": "Peso Muerto Con Pausa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_pausa_kb",
    "nombre": "Peso Muerto Con Pausa Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_con_trap_bar",
    "nombre": "Peso Muerto Con Trap Bar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano",
    "nombre": "Peso Muerto Rumano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_con_mancuernas",
    "nombre": "Peso Muerto Rumano Con Mancuernas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_deficit",
    "nombre": "Peso Muerto Rumano Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_en_trap_bar",
    "nombre": "Peso Muerto Rumano En Trap Bar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_sumo",
    "nombre": "Peso Muerto Sumo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unipodal_asistido_c__pared",
    "nombre": "Peso Muerto Unipodal Asistido C/ Pared",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unipodal_con_barra",
    "nombre": "Peso Muerto Unipodal Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unipodal_con_kb",
    "nombre": "Peso Muerto Unipodal Con Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unipodal_en_trx",
    "nombre": "Peso Muerto Unipodal En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unipodal_isometrico_asistido",
    "nombre": "Peso Muerto Unipodal Isometrico Asistido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_con_miniband",
    "nombre": "Puente Con Miniband",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo",
    "nombre": "Puente De Gluteo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_a_1_pie",
    "nombre": "Puente De Gluteo A 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_asimetrico",
    "nombre": "Puente De Gluteo Asimetrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_con_pelota_y_aductor",
    "nombre": "Puente De Gluteo Con Pelota Y Aductor",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_con_silla",
    "nombre": "Puente De Gluteo Con Silla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_con_silla_1_pie",
    "nombre": "Puente De Gluteo Con Silla 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_deficit",
    "nombre": "Puente De Gluteo Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_pl_con_abeduccion_en_trx",
    "nombre": "Puente De Gluteo Pl Con Abeduccion En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo_pl_en_trx",
    "nombre": "Puente De Gluteo Pl En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_gluteo_slide_1",
    "nombre": "Puente Gluteo Slide 1",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_gluteo_slide_2",
    "nombre": "Puente Gluteo Slide 2",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_invertido",
    "nombre": "Puente Invertido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_invertido_frog",
    "nombre": "Puente Invertido Frog",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_slide_a_1_pie",
    "nombre": "Puente Slide A 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_unilateral_con_slide",
    "nombre": "Puente Unilateral Con Slide",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pueso_muerto_sumo_kb",
    "nombre": "Pueso Muerto Sumo Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_through_con_banda",
    "nombre": "Pull-Through Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "swing",
    "nombre": "Swing",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "swing_a_una_mano",
    "nombre": "Swing A Una Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "swing_una_mano_alternado",
    "nombre": "Swing Una Mano Alternado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "windmill_inicial",
    "nombre": "Windmill Inicial",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "windmill_inicial_con_kb",
    "nombre": "Windmill Inicial Con Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_con_mancuernas___iso",
    "nombre": "Peso Muerto Rumano Con Mancuernas + Iso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_asimetr_con_mancuernas___iso",
    "nombre": "Peso Muerto Rumano Asimetr Con Mancuernas + Iso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "evaluacion_de_puente_de_gluteo",
    "nombre": "Evaluacion De Puente De Gluteo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_semi_sumo",
    "nombre": "Peso Muerto Semi-Sumo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_rumano_c_mancuerna_asimetrico",
    "nombre": "Peso Muerto Rumano C/Mancuerna Asimetrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_americano",
    "nombre": "Peso Muerto Americano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_buenos_dias",
    "nombre": "Safety Buenos Dias",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_sumo_buenos_dias",
    "nombre": "Safety Sumo Buenos Dias",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "safety_buenos_dias_asimetrico",
    "nombre": "Safety Buenos Dias Asimetrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "buenos_dias_con_barra",
    "nombre": "Buenos Dias Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_ranita_gluteos",
    "nombre": "Patada ranita gluteos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "gluteos_en_banco_lumbar",
    "nombre": "Gluteos en banco lumbar",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_a_1_pierna_en_polea",
    "nombre": "Peso muerto a 1 pierna en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_through_en_polea_baja",
    "nombre": "Pull through en polea baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_rana_gluteos",
    "nombre": "Patada de rana gluteos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abductores_con_disco_isometrico",
    "nombre": "Abductores con disco isometrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "peso_muerto_unilateral__banco",
    "nombre": "Peso muerto unilateral (banco)",
    "patron": "Cadera Dominante",
    "video_url": "https://www.youtube.com/watch?v=wyJQpvfWrIc",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "hip_thrust_con_banda",
    "nombre": "Hip Thrust con banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extension_en_dual_hip",
    "nombre": "Extension en dual Hip",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_femoral_acostado",
    "nombre": "Curl femoral acostado",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=6JQflLWhKfg",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "abducciones_de_cadera_en_banco",
    "nombre": "Abducciones De Cadera En Banco",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=QrtNK5BqAYE",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "abeducciones_de_cadera_en_cuadrupedia",
    "nombre": "Abeducciones De Cadera En Cuadrupedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "aducciones_acostado",
    "nombre": "Aducciones Acostado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "alternado_de_biceps",
    "nombre": "Alternado De Biceps",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "alternado_de_biceps_1_isometrico",
    "nombre": "Alternado De Biceps 1 Isometrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "alternado_martillo",
    "nombre": "Alternado Martillo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "biceps_con_banda",
    "nombre": "Biceps Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "biceps_con_barra",
    "nombre": "Biceps Con Barra",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=g5BEv4Nnj4Q",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "biceps_en_trx",
    "nombre": "Biceps En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "caminata_de_cangrejo_con_miniband_y_disco",
    "nombre": "Caminata De Cangrejo Con Miniband Y Disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "band_cha_cha",
    "nombre": "Band Cha-Cha",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "concentrado",
    "nombre": "Concentrado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceos_1_brazo_isometrico",
    "nombre": "Curl De Biceos 1 Brazo Isometrico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceps_a_2_brazos_con_1_mancuerna",
    "nombre": "Curl De Biceps A 2 Brazos Con 1 Mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceps_con_ktb",
    "nombre": "Curl De Biceps Con Ktb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceps_con_mancuerna",
    "nombre": "Curl De Biceps Con Mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceps_en_banco_inclinado",
    "nombre": "Curl De Biceps En Banco Inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_cuadriceps",
    "nombre": "Curl De Cuadriceps",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=-baNfSeAYLE",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "curl_de_cuadriceps_asistido_con_banda",
    "nombre": "Curl De Cuadriceps Asistido Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_isquio_en_trx",
    "nombre": "Curl De Isquio En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_nordico",
    "nombre": "Curl Nordico",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_nordico_asistido_con_banda",
    "nombre": "Curl Nordico Asistido Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_de_gemelos",
    "nombre": "Elevacion De Gemelos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevaciones_tibiales",
    "nombre": "Elevaciones Tibiales",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "fondo_de_triceps_con_piernas_extendidas",
    "nombre": "Fondo De Triceps Con Piernas Extendidas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "fondo_de_triceps_con_rodillas_flexionadas",
    "nombre": "Fondo De Triceps Con Rodillas Flexionadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pre_franses_acostado",
    "nombre": "Pre Franses acostado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "frances_a_1_mano",
    "nombre": "Frances A 1 Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "gemelera_en_landmine",
    "nombre": "Gemelera En Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_gluteo_parado",
    "nombre": "Patada De Gluteo Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "plancha_de_triceps",
    "nombre": "Plancha De Triceps",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "polea_de_triceps",
    "nombre": "Polea De Triceps",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=hX4poXlfe04",
    "progresion_default": "Meseta 2x15"
  },
  {
    "id": "polea_de_triceps_a_un_brazo",
    "nombre": "Polea De Triceps A Un Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_jm",
    "nombre": "Press Jm",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "que_me_importa",
    "nombre": "Que Me Importa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rompecraneos",
    "nombre": "Rompecraneos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "rompecraneos_c__banda",
    "nombre": "Rompecraneos C/ Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "triceps_de_cabeza_con_banda",
    "nombre": "Triceps De Cabeza Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "triceps_en_split_con_ktb",
    "nombre": "Triceps En Split Con Ktb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "triceps_en_trx",
    "nombre": "Triceps En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_combinados__lateral_a_frontal",
    "nombre": "Vuelos Combinados (Lateral A Frontal)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_laterales_1_brazo_agarro_pared",
    "nombre": "Vuelos Laterales 1 Brazo Agarro Pared",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_laterales_en_split",
    "nombre": "Vuelos Laterales En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_laterales_sentado",
    "nombre": "Vuelos Laterales Sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_posteriores_con_apoyo_de_cabeza",
    "nombre": "Vuelos Posteriores Con Apoyo De Cabeza",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_w_en_banco_inclinado",
    "nombre": "Vuelos W En Banco Inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "zottman_curl",
    "nombre": "Zottman Curl",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sillon_de_cuadriceps",
    "nombre": "Sillon De Cuadriceps",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=vRQpiTwUeyM",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "patada_de_gluteo_en_polea",
    "nombre": "Patada De Gluteo En Polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_posteriores_parado",
    "nombre": "Vuelos Posteriores Parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "control_escapular_en_med_ball",
    "nombre": "Control Escapular En Med Ball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "retraccion_escapular_en_dominada",
    "nombre": "Retraccion Escapular En Dominada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_de_biceps_simultaneo",
    "nombre": "Curl De Biceps Simultaneo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_isquios_sentado",
    "nombre": "Curl isquios sentado",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=iSX5utHMEdc",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "curl_isquios_acostado",
    "nombre": "Curl isquios acostado",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=p3gWNsALREQ&pp=ygUVY3VybCBpc3F1aW9zIGFjb3N0YWRv",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "elevacion_de_gemelos_sentado",
    "nombre": "Elevacion de gemelos sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "gemelos_unilateral_con_mancuerna",
    "nombre": "Gemelos unilateral con mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "aduccion_y_abduccion_en_maquina",
    "nombre": "Aduccion y Abduccion en maquina",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=nfmcKKCmrrA&pp=ygUfYWR1Y2Npb24geSBhYmR1Y2Npb24gZW4gbWFxdWluYQ%3D%3D",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "bicep_martillo_barra_romana",
    "nombre": "Bicep martillo barra Romana",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extencion_de_tricep_polea_alta",
    "nombre": "Extencion de tricep polea alta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_burro_tricep_en_polea",
    "nombre": "Patada de burro tricep en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tricep_press_frances",
    "nombre": "Tricep press frances",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/results?search_query=triceps+press+frances+con+mancuernas+",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "curl_femoral_sentado",
    "nombre": "Curl femoral sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "aductor_en_polea_baja",
    "nombre": "Aductor en polea baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abductor_en_polea_baja",
    "nombre": "Abductor en polea baja",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=JbVhHdtqP5c",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "bicep_martillo_con_mancuerna",
    "nombre": "Bicep Martillo con mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicer_en_banco_scott",
    "nombre": "Bicer en banco scott",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_isquios_en_polea_baja",
    "nombre": "Curl Isquios en polea baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extencion_tras_nunca_tricep_polea",
    "nombre": "Extencion tras nunca tricep polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "curl_cuadricep_unilateral",
    "nombre": "Curl cuadricep unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_gluteos_en_cuadripedia",
    "nombre": "Patada de gluteos en cuadripedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "patada_de_gluteos_en_maquina",
    "nombre": "Patada de gluteos en maquina",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=7dAyon8VTz4",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "abd__oblicuos_en_polea_baja",
    "nombre": "Abd. Oblicuos en polea baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_lateral_en_polea",
    "nombre": "Vuelos lateral en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extension_tipo_katana",
    "nombre": "Extension tipo Katana",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extension_de_tricep_a_1_mano",
    "nombre": "Extension de tricep a 1 mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abduccion_acostado_con_disco",
    "nombre": "Abduccion acostado con disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "bicep_neutro_polea_baja",
    "nombre": "Bicep Neutro polea baja",
    "patron": "Localizado",
    "video_url": "https://www.youtube.com/watch?v=h3RiD5eEZxY",
    "progresion_default": "Meseta 2x15"
  },
  {
    "id": "aduccion_en_banco_recto",
    "nombre": "Aduccion en banco recto",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "sillon_cuadriceps_unilateral",
    "nombre": "Sillon Cuadriceps unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "femoral_acostado_unilateral",
    "nombre": "Femoral acostado unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "abduccion_en_polea_sobre_banco",
    "nombre": "Abduccion en polea sobre banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "extension_de_triceps_cruzada",
    "nombre": "Extension de triceps cruzada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_de_gemelos_parado",
    "nombre": "Elevacion de gemelos parado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "reaction_ball_suelto_y_agarro",
    "nombre": "Reaction Ball Suelto Y Agarro",
    "patron": "Agilidad",
    "video_url": "https://www.youtube.com/watch?v=hh2wFWi9IBY",
    "progresion_default": "3x10"
  },
  {
    "id": "reaction_ball_contra_step",
    "nombre": "Reaction Ball Contra Step",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "reaction_ball_suelto_y_agarro__solo",
    "nombre": "Reaction Ball Suelto Y Agarro (Solo)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "elevacion_de_cadera_acostado",
    "nombre": "Elevacion de cadera acostado",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=vRYTjdKh8kU",
    "progresion_default": "Meseta 2x15"
  },
  {
    "id": "movilidad_articular_rodilla_y_tobillo",
    "nombre": "Movilidad articular rodilla y tobillo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_hombro_con_baston",
    "nombre": "Movilidad de hombro con baston",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "movilidad_de_hombro_con_banda_adealnte_atras",
    "nombre": "Movilidad de hombro con banda adealnte atras",
    "patron": "Movilidad",
    "video_url": "https://www.youtube.com/watch?v=kjjIbE70KIY",
    "progresion_default": "Meseta 3x10''"
  },
  {
    "id": "rotacion_de_hombro_con_banda",
    "nombre": "Rotacion de hombro con banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_inclinado_con_mancuernas",
    "nombre": "Press Inclinado Con Mancuernas",
    "patron": "Empuje",
    "video_url": "https://www.youtube.com/watch?v=cbLQER-Jo3A",
    "progresion_default": "Escalon (Simple) desde 4x8"
  },
  {
    "id": "apertura_con_mancuernas",
    "nombre": "Apertura Con Mancuernas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "aperturas_en_banco_inclinado",
    "nombre": "Aperturas En Banco Inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "archer_push_up",
    "nombre": "Archer Push Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_con_banda",
    "nombre": "Cruces Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_con_banda_1_brazo",
    "nombre": "Cruces Con Banda 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_con_banda_baja",
    "nombre": "Cruces Con Banda Baja",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_con_banda_baja_1_brazo",
    "nombre": "Cruces Con Banda Baja 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dive_bomber_flexiones",
    "nombre": "Dive-Bomber Flexiones",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "empujes_con_disco",
    "nombre": "Empujes Con Disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexibilidad_de_psoas_en_split",
    "nombre": "Flexibilidad De Psoas En Split",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones___ataco_con_rodilla",
    "nombre": "Flexiones + Ataco Con Rodilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones___mov_escapular",
    "nombre": "Flexiones + Mov Escapular",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones___rotaciones",
    "nombre": "Flexiones + Rotaciones",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones___toco_hombro_contrario",
    "nombre": "Flexiones + Toco Hombro Contrario",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_1_1_5",
    "nombre": "Flexiones 1-1.5",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_45",
    "nombre": "Flexiones A 45",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_45__arrodillado",
    "nombre": "Flexiones A 45  Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_90_diamante",
    "nombre": "Flexiones A 90 Diamante",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_carpa",
    "nombre": "Flexiones A Carpa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_asimetricas",
    "nombre": "Flexiones Asimetricas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_asimetricas_con_pelota_alternada",
    "nombre": "Flexiones Asimetricas Con Pelota Alternada",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_balanceo",
    "nombre": "Flexiones Balanceo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_2_pelotas",
    "nombre": "Flexiones Con 2 Pelotas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_banda",
    "nombre": "Flexiones Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_deficit",
    "nombre": "Flexiones Con Deficit",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_impulso",
    "nombre": "Flexiones Con Impulso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_med_ball",
    "nombre": "Flexiones Con Med Ball",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_pelota_extiendo_brazo",
    "nombre": "Flexiones Con Pelota Extiendo Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_peso",
    "nombre": "Flexiones Con Peso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_piernas_levantadas",
    "nombre": "Flexiones Con Piernas Levantadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_con_rodillas_apoyadas",
    "nombre": "Flexiones Con Rodillas Apoyadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_de_brazo",
    "nombre": "Flexiones De Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_de_brazo_asistidas_con_banda",
    "nombre": "Flexiones De Brazo Asistidas Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_de_brazo_con_palmas_juntas",
    "nombre": "Flexiones De Brazo Con Palmas Juntas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_de_brazos_a_1_pie",
    "nombre": "Flexiones De Brazos A 1 Pie",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_de_potencia",
    "nombre": "Flexiones De Potencia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_en_trx",
    "nombre": "Flexiones En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_escalera",
    "nombre": "Flexiones Escalera",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_excentricas",
    "nombre": "Flexiones Excentricas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_full_body",
    "nombre": "Flexiones Full Body",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_inestables_en_bozu",
    "nombre": "Flexiones Inestables En Bozu",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_intermedias",
    "nombre": "Flexiones Intermedias",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_isometricas",
    "nombre": "Flexiones Isometricas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_jack",
    "nombre": "Flexiones Jack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_lado_a_lado",
    "nombre": "Flexiones Lado A Lado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_siolo_empuje",
    "nombre": "Flexiones Siolo Empuje",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_slide_un_brazo",
    "nombre": "Flexiones Slide Un Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_spiderman",
    "nombre": "Flexiones Spiderman",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "floor_press",
    "nombre": "Floor Press",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "floor_press_acostado_con_banda",
    "nombre": "Floor Press Acostado Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "floor_press_en_puente_1_brazo",
    "nombre": "Floor Press En Puente 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "floor_press_en_puente_alternado",
    "nombre": "Floor Press En Puente Alternado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "floor_press_en_puente_con_kb",
    "nombre": "Floor Press En Puente Con Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "fondos",
    "nombre": "Fondos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "larsen_press",
    "nombre": "Larsen Press",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pike_push_up",
    "nombre": "Pike Push Up",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_a_un_brazo_acostado",
    "nombre": "Press A Un Brazo Acostado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_a_un_brazo_arrodillado",
    "nombre": "Press A Un Brazo Arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_a_un_brazo_sentado",
    "nombre": "Press A Un Brazo Sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_de_banco",
    "nombre": "Press De Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_de_banco_agarre_cerrado",
    "nombre": "Press De Banco Agarre Cerrado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_en_split_a_un_brazo",
    "nombre": "Press En Split A Un Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_inclinado",
    "nombre": "Press Inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_inclinado_con_mancuernas_1_brazo",
    "nombre": "Press Inclinado Con Mancuernas 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_jabalina",
    "nombre": "Press Jabalina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_landmine",
    "nombre": "Press Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_landmine_2_brazos",
    "nombre": "Press Landmine 2 Brazos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar",
    "nombre": "Press Militar",
    "patron": "Empuje",
    "video_url": "https://www.youtube.com/watch?v=egiu42izhHg",
    "progresion_default": "Escalon (Simple) desde 4x8"
  },
  {
    "id": "press_militar_1___1_4",
    "nombre": "Press Militar 1 + 1/4",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_con_corebag",
    "nombre": "Press Militar Con Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_con_mancueras",
    "nombre": "Press Militar Con Mancueras",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_con_mancuernas_en_banco",
    "nombre": "Press Militar Con Mancuernas En Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_sentado",
    "nombre": "Press Militar Sentado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_parado_1_brazo_en_rack",
    "nombre": "Press Parado 1 Brazo En Rack",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_parado_a_un_1_brazo_kb",
    "nombre": "Press Parado A Un 1 Brazo Kb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_parado_con_ktb",
    "nombre": "Press Parado Con Ktb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_split_a_1_brazo_sin_apoyo_de_rodilla",
    "nombre": "Press Split A 1 Brazo Sin Apoyo De Rodilla",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_split_landmine",
    "nombre": "Press Split Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_z",
    "nombre": "Press Z",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_z_con_una_mancuerna",
    "nombre": "Press Z Con Una Mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_over",
    "nombre": "Pull Over",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones_a_roll_out_con_barra",
    "nombre": "Flexiones A Roll Out Con Barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_con_bolso",
    "nombre": "Press Militar Con Bolso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "cruces_en_polea",
    "nombre": "Cruces En Polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_a_un_brazo_con_ktb",
    "nombre": "Press Militar A Un Brazo Con Ktb",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_militar_un_brazo_con_mancuernas",
    "nombre": "Press Militar Un Brazo Con Mancuernas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "iso_dominada_prono",
    "nombre": "Iso Dominada Prono",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_de_banco_con_foam_roller",
    "nombre": "Press De Banco Con Foam Roller",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_de_banco_con_pausa",
    "nombre": "Press De Banco Con Pausa",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "apertura_en_peck_deck",
    "nombre": "Apertura en Peck Deck",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "hombro_posterior_en_peck_deck",
    "nombre": "Hombro posterior en Peck Deck",
    "patron": "Empuje",
    "video_url": "https://www.youtube.com/watch?v=JyPNDIXjHsw",
    "progresion_default": "Meseta 3x15"
  },
  {
    "id": "empuje_de_tricep_con_barra",
    "nombre": "Empuje de tricep con barra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelo_individual_en_polea",
    "nombre": "Vuelo individual en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tricep_tras_nuca_con_mancuerna",
    "nombre": "Tricep tras nuca con mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelo_lateral_individual",
    "nombre": "Vuelo lateral individual",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_en_hammer",
    "nombre": "Press en hammer",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelo_frontal_en_polea",
    "nombre": "Vuelo frontal en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "fondos_de_tricep_en_maquina_asistida",
    "nombre": "Fondos de tricep en maquina asistida",
    "patron": "Empuje",
    "video_url": "https://www.youtube.com/watch?v=3a3vg5UAcaU",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "press_militar_arrodillado",
    "nombre": "Press Militar arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pre_de_hombros_arrodillado",
    "nombre": "Pre de hombros arrodillado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pre_militar_en_maquina",
    "nombre": "Pre militar en maquina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "press_inclinado_en_maquina",
    "nombre": "Press inclinado en maquina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_laterales",
    "nombre": "Vuelos Laterales",
    "patron": "Traccion",
    "video_url": "https://www.youtube.com/watch?v=3BGA9QQu5fg",
    "progresion_default": "Escalon (simple) desde 3x10"
  },
  {
    "id": "dominada_asistida",
    "nombre": "Dominada Asistida",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominada_asistida_en_trx_rack_cajon",
    "nombre": "Dominada Asistida En Trx-Rack Cajon",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominada_en_l_con_carga",
    "nombre": "Dominada En L Con Carga",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominada_intermedia",
    "nombre": "Dominada Intermedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominada_supina_excentrica",
    "nombre": "Dominada Supina Excentrica",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominada_supina_intermedia",
    "nombre": "Dominada Supina Intermedia",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominadas",
    "nombre": "Dominadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominadas_excentricas",
    "nombre": "Dominadas Excentricas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dominadas_neutras",
    "nombre": "Dominadas Neutras",
    "patron": "Traccion",
    "video_url": "https://www.youtube.com/watch?v=IrYhFCn-hiM",
    "progresion_default": "Meseta 3x10"
  },
  {
    "id": "dominadas_supinas",
    "nombre": "Dominadas Supinas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dorsalera_c_banda",
    "nombre": "Dorsalera C/Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dorsalera_c_banda_1_brazo",
    "nombre": "Dorsalera C/Banda 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "dorsalera_en_polea_supina",
    "nombre": "Dorsalera En Polea Supina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "face_pull_abajo_hacia_arriba",
    "nombre": "Face Pull Abajo Hacia Arriba",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "face_pull_con_banda",
    "nombre": "Face Pull Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "face_pull_con_trx",
    "nombre": "Face Pull Con Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "face_pull_un_brazo_c_banda",
    "nombre": "Face Pull Un Brazo C/Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "flexiones___y_en_trx",
    "nombre": "Flexiones + Y En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "helms_row",
    "nombre": "Helms Row",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "puente_de_gluteo___curl_invertido",
    "nombre": "Puente De Gluteo + Curl Invertido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo___apertura_en_trx",
    "nombre": "Remo + Apertura En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo___giro_en_trx",
    "nombre": "Remo + Giro En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_3_apoyos",
    "nombre": "Remo 3 Apoyos",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_3_apoyos_con_banda",
    "nombre": "Remo 3 Apoyos Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_45",
    "nombre": "Remo 45",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_45_a_1_brazo",
    "nombre": "Remo 45 A 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_45_asistido",
    "nombre": "Remo 45 Asistido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_45_con_corebag",
    "nombre": "Remo 45 Con Corebag",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_a_1_brazo_con_banda",
    "nombre": "Remo A 1 Brazo Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_a_1_brazo_con_trx",
    "nombre": "Remo A 1 Brazo Con Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_a_dos_brazos_en_posicion_de_split_larga",
    "nombre": "Remo A Dos Brazos En Posicion De Split Larga",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_a_un_brazo_en_split_con_banda",
    "nombre": "Remo A Un Brazo En Split Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_acostado_con_mancuernas",
    "nombre": "Remo Acostado Con Mancuernas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_con_banda",
    "nombre": "Remo Con Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_con_banda_en_split_alto",
    "nombre": "Remo Con Banda En Split Alto",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_con_banda_sentado_a_los_pies",
    "nombre": "Remo Con Banda Sentado A Los Pies",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_con_banda_ytw",
    "nombre": "Remo Con Banda Ytw",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_plancha",
    "nombre": "Remo En Plancha",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_plancha_alta",
    "nombre": "Remo En Plancha Alta",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_split_un_brazo_c__banda",
    "nombre": "Remo En Split Un Brazo C/ Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_trx",
    "nombre": "Remo En Trx",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_gorila_1_brazo",
    "nombre": "Remo Gorila 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_gorila_alternado",
    "nombre": "Remo Gorila Alternado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_gorila_doble",
    "nombre": "Remo Gorila Doble",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_hammer",
    "nombre": "Remo Hammer",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido",
    "nombre": "Remo Invertido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido_con_banco",
    "nombre": "Remo Invertido Con Banco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido_en_trx_piernas_a_90",
    "nombre": "Remo Invertido En Trx Piernas A 90",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido_en_trx_piernas_elevadas",
    "nombre": "Remo Invertido En Trx Piernas Elevadas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido_en_trx_piernas_extendidas",
    "nombre": "Remo Invertido En Trx Piernas Extendidas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_invertido_intermedio",
    "nombre": "Remo Invertido Intermedio",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_landmine",
    "nombre": "Remo Landmine",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_pendlay_asistido",
    "nombre": "Remo Pendlay Asistido",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_pendlay",
    "nombre": "Remo Pendlay",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_polea",
    "nombre": "Remo Polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_renegado",
    "nombre": "Remo Renegado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_renegado_a_una_mano",
    "nombre": "Remo Renegado A Una Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_renegado_iso_sin_carga",
    "nombre": "Remo Renegado Iso Sin Carga",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_sentado_1_brazo_c_banda",
    "nombre": "Remo Sentado 1 Brazo C/Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_sentado_c__banda",
    "nombre": "Remo Sentado C/ Banda",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_sentado_c_banda_1_brazo",
    "nombre": "Remo Sentado C/Banda 1 Brazo",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_trx___y",
    "nombre": "Remo Trx + Y",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_trx_con_empuje_de_cadera",
    "nombre": "Remo Trx Con Empuje De Cadera",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "serrucho",
    "nombre": "Serrucho",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "serrucho_alto",
    "nombre": "Serrucho Alto",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tirones_con_banda_en_bisagra",
    "nombre": "Tirones Con Banda En Bisagra",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "tirones_con_banda_en_bisagra_a_una_mano",
    "nombre": "Tirones Con Banda En Bisagra A Una Mano",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_frontales",
    "nombre": "Vuelos Frontales",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_frontales_alternado",
    "nombre": "Vuelos Frontales Alternado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_laterales_con_disco",
    "nombre": "Vuelos Laterales Con Disco",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelos_posteriores",
    "nombre": "Vuelos Posteriores",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "face_pull_en_polea",
    "nombre": "Face Pull En Polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_con_bolso",
    "nombre": "Remo Con Bolso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_1_brazo_con_bolso",
    "nombre": "Remo 1 Brazo Con Bolso",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_polea_baja_maquina",
    "nombre": "Remo polea baja maquina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "jalon_al_pecho_en_proncion",
    "nombre": "Jalon al pecho en proncion",
    "patron": "Traccion",
    "video_url": "https://www.youtube.com/watch?v=qzQGEazdWPM",
    "progresion_default": "Escalon (simple) desde 3x10"
  },
  {
    "id": "jalon_al_pecho_agarre_neutro",
    "nombre": "Jalon al pecho agarre neutro",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "trapecios_con_mancuerna",
    "nombre": "Trapecios con mancuerna",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_al_menton_trapecios",
    "nombre": "Remo al menton trapecios",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_hammer__dorsal",
    "nombre": "Remo en Hammer (Dorsal)",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "trapecio_unilateral_en_polea",
    "nombre": "Trapecio unilateral en polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_banco_inclinado",
    "nombre": "Remo en banco inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "encogimiento_con_barra_hexagonal",
    "nombre": "Encogimiento con barra hexagonal",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_polea_alta_unilateral",
    "nombre": "Remo en polea alta unilateral",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelta_al_mundo_con_mancuernas",
    "nombre": "Vuelta al mundo con mancuernas",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "pull_over_en_polea",
    "nombre": "Pull Over en polea",
    "patron": "Traccion",
    "video_url": "https://www.youtube.com/watch?v=rRZ8hhpKozA",
    "progresion_default": "Meseta 2x15"
  },
  {
    "id": "vuelo_posteior_unilateral_polea",
    "nombre": "Vuelo posteior unilateral polea",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_horizontal_en_maquina",
    "nombre": "Remo Horizontal en maquina",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelo_posterior_en_peck_deck_individual",
    "nombre": "Vuelo posterior en peck deck individual",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelo_posteior_en_banco_inclinado",
    "nombre": "Vuelo posteior en banco inclinado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "vuelta_al_mundo_acostado",
    "nombre": "Vuelta al mundo acostado",
    "patron": "General",
    "video_url": "",
    "progresion_default": "3x10"
  },
  {
    "id": "remo_en_hammer_unilateral",
    "nombre": "Remo en Hammer unilateral",
    "patron": "Traccion",
    "video_url": "https://www.youtube.com/watch?v=sYl2uUE7kt0",
    "progresion_default": "Meseta 3x15"
  }
];

export const INITIAL_ROUTINE_NAHIR: Routine = {
  "id": "rutina_nahir_01",
  "nombre": "Rutina 6 Semanas - Nahir",
  "alumno_id": "student_nahir",
  "semanas_total": 6,
  "creada_el": "2026-10-21",
  "dias": [
    {
      "id": "day_1",
      "dia_num": 1,
      "nombre": "Día 1: Movilidad, Core y Piernas (Sentadilla & Peso Muerto)",
      "items": [
        {
          "id": "dia_1_gato_bueno_gato_malo",
          "bloque": "Circ 1",
          "ejercicio_id": "gato_bueno_gato_malo",
          "ejercicio_nombre": "Gato Bueno Gato Malo",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=y7l1AKoVfOs",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_90_90",
          "bloque": "Circ 1",
          "ejercicio_id": "90_90",
          "ejercicio_nombre": "90-90",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=RztQ13_zTIQ",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_cobra_con_rotaciones",
          "bloque": "Circ 1",
          "ejercicio_id": "cobra_con_rotaciones",
          "ejercicio_nombre": "Cobra Con Rotaciones",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=93OogUYDDeA",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_oblicuos_en_landmine",
          "bloque": "Circ 1",
          "ejercicio_id": "oblicuos_en_landmine",
          "ejercicio_nombre": "Oblicuos en Landmine",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=8oP6ndaO9y8&pp=ygUUb2JsaWN1b3MgZW4gbGFuZG1pbmU%3D",
          "progresion": "Meseta 3x20",
          "prescripcion": {
            "semana_1": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x20",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_abs_crunch",
          "bloque": "Circ 2",
          "ejercicio_id": "abs_crunch",
          "ejercicio_nombre": "Abs Crunch",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=SoDUMfChIqQ",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_sentadilla",
          "bloque": "B1",
          "ejercicio_id": "sentadilla",
          "ejercicio_nombre": "Sentadilla",
          "patron": "Rodilla Dominante",
          "video_url": "https://www.youtube.com/watch?v=lgYgLBaJDpA",
          "progresion": "Escalon (Simple) desde 4x8",
          "prescripcion": {
            "semana_1": {
              "series": "4x8",
              "kgs": ""
            },
            "semana_2": {
              "series": "10-8-8-8",
              "kgs": ""
            },
            "semana_3": {
              "series": "10-10-8-8",
              "kgs": ""
            },
            "semana_4": {
              "series": "10-10-10-8",
              "kgs": ""
            },
            "semana_5": {
              "series": "4x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "12-10-10-10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_peso_muerto",
          "bloque": "B2",
          "ejercicio_id": "peso_muerto",
          "ejercicio_nombre": "Peso Muerto",
          "patron": "Cadera Dominante",
          "video_url": "https://www.youtube.com/watch?v=z_UsunyCxxg",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_caminata_en_estocada_adelante",
          "bloque": "C1",
          "ejercicio_id": "caminata_en_estocada_adelante",
          "ejercicio_nombre": "Caminata En Estocada Adelante",
          "patron": "Rodilla Dominante",
          "video_url": "https://www.youtube.com/watch?v=EvzlMxD7kmk",
          "progresion": "Meseta 3x20",
          "prescripcion": {
            "semana_1": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x20",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_curl_femoral_acostado",
          "bloque": "C2",
          "ejercicio_id": "curl_femoral_acostado",
          "ejercicio_nombre": "Curl femoral acostado",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=6JQflLWhKfg",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_sillon_de_cuadriceps",
          "bloque": "C3",
          "ejercicio_id": "sillon_de_cuadriceps",
          "ejercicio_nombre": "Sillon De Cuadriceps",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=vRQpiTwUeyM",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_1_abductor_en_polea_baja",
          "bloque": "C3",
          "ejercicio_id": "abductor_en_polea_baja",
          "ejercicio_nombre": "Abductor en polea baja",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=JbVhHdtqP5c",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        }
      ]
    },
    {
      "id": "day_2",
      "dia_num": 2,
      "nombre": "Día 2: Activación y Torso Empuje (Press Inclinado & Tríceps)",
      "items": [
        {
          "id": "dia_2_elevacion_de_cadera_acostado",
          "bloque": "Circ 1",
          "ejercicio_id": "elevacion_de_cadera_acostado",
          "ejercicio_nombre": "Elevacion de cadera acostado",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=vRYTjdKh8kU",
          "progresion": "Meseta 2x15",
          "prescripcion": {
            "semana_1": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "2x15",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_rotaciones_dorsales_en_cuadrupedia",
          "bloque": "Circ 1",
          "ejercicio_id": "rotaciones_dorsales_en_cuadrupedia",
          "ejercicio_nombre": "Rotaciones Dorsales En Cuadrupedia",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=MPsAS_IrOcM",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_movilidad_de_hombro_con_banda_adealnte_atras",
          "bloque": "Circ 1",
          "ejercicio_id": "movilidad_de_hombro_con_banda_adealnte_atras",
          "ejercicio_nombre": "Movilidad de hombro con banda adealnte atras",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=kjjIbE70KIY",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_bird_dog_dinamico__lumbar",
          "bloque": "Circ 2",
          "ejercicio_id": "bird_dog_dinamico__lumbar",
          "ejercicio_nombre": "Bird Dog Dinamico (Lumbar)",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=rEyz_RWX0Oo",
          "progresion": "Meseta 3x20",
          "prescripcion": {
            "semana_1": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x20",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_lumbares_en_banco",
          "bloque": "Circ 2",
          "ejercicio_id": "lumbares_en_banco",
          "ejercicio_nombre": "Lumbares en banco",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=JGiKCE593og&pp=ygUTbHVtYmFyZXMgZW4gbWFxdWluYQ%3D%3D",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_press_inclinado_con_mancuernas",
          "bloque": "B1",
          "ejercicio_id": "press_inclinado_con_mancuernas",
          "ejercicio_nombre": "Press Inclinado Con Mancuernas",
          "patron": "Empuje",
          "video_url": "https://www.youtube.com/watch?v=cbLQER-Jo3A",
          "progresion": "Escalon (Simple) desde 4x8",
          "prescripcion": {
            "semana_1": {
              "series": "4x8",
              "kgs": ""
            },
            "semana_2": {
              "series": "10-8-8-8",
              "kgs": ""
            },
            "semana_3": {
              "series": "10-10-8-8",
              "kgs": ""
            },
            "semana_4": {
              "series": "10-10-10-8",
              "kgs": ""
            },
            "semana_5": {
              "series": "4x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "12-10-10-10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_fondos_de_tricep_en_maquina_asistida",
          "bloque": "B2",
          "ejercicio_id": "fondos_de_tricep_en_maquina_asistida",
          "ejercicio_nombre": "Fondos de tricep en maquina asistida",
          "patron": "Empuje",
          "video_url": "https://www.youtube.com/watch?v=3a3vg5UAcaU",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_vuelos_laterales",
          "bloque": "C2",
          "ejercicio_id": "vuelos_laterales",
          "ejercicio_nombre": "Vuelos Laterales",
          "patron": "Traccion",
          "video_url": "https://www.youtube.com/watch?v=3BGA9QQu5fg",
          "progresion": "Escalon (simple) desde 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "12-11-10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x12",
              "kgs": ""
            },
            "semana_4": {
              "series": "15-13-12",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "18-16-15",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_press_militar",
          "bloque": "C3",
          "ejercicio_id": "press_militar",
          "ejercicio_nombre": "Press Militar",
          "patron": "Empuje",
          "video_url": "https://www.youtube.com/watch?v=egiu42izhHg",
          "progresion": "Escalon (Simple) desde 4x8",
          "prescripcion": {
            "semana_1": {
              "series": "4x8",
              "kgs": ""
            },
            "semana_2": {
              "series": "10-8-8-8",
              "kgs": ""
            },
            "semana_3": {
              "series": "10-10-8-8",
              "kgs": ""
            },
            "semana_4": {
              "series": "10-10-10-8",
              "kgs": ""
            },
            "semana_5": {
              "series": "4x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "12-10-10-10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_tricep_press_frances",
          "bloque": "C3",
          "ejercicio_id": "tricep_press_frances",
          "ejercicio_nombre": "Tricep press frances",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/results?search_query=triceps+press+frances+con+mancuernas+",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_2_polea_de_triceps",
          "bloque": "C3",
          "ejercicio_id": "polea_de_triceps",
          "ejercicio_nombre": "Polea De Triceps",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=hX4poXlfe04",
          "progresion": "Meseta 2x15",
          "prescripcion": {
            "semana_1": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "2x15",
              "kgs": ""
            }
          }
        }
      ]
    },
    {
      "id": "day_3",
      "dia_num": 3,
      "nombre": "Día 3: Movilidad, Core y Cadera Dominante (Hip Thrust)",
      "items": [
        {
          "id": "dia_3_gato_bueno_gato_malo",
          "bloque": "Circ 1",
          "ejercicio_id": "gato_bueno_gato_malo",
          "ejercicio_nombre": "Gato Bueno Gato Malo",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=y7l1AKoVfOs",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_90_90_con_flexion_de_tronco",
          "bloque": "Circ 1",
          "ejercicio_id": "90_90_con_flexion_de_tronco",
          "ejercicio_nombre": "90-90 Con Flexion De Tronco",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=8zpIodv6Yp8",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_cobra_con_rotaciones",
          "bloque": "Circ 1",
          "ejercicio_id": "cobra_con_rotaciones",
          "ejercicio_nombre": "Cobra Con Rotaciones",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=93OogUYDDeA",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_pallof_press_en_polea",
          "bloque": "Circ 2",
          "ejercicio_id": "pallof_press_en_polea",
          "ejercicio_nombre": "Pallof Press En Polea",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=3q6xGhrh1B0",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_abdominales_en_polea",
          "bloque": "Circ 2",
          "ejercicio_id": "abdominales_en_polea",
          "ejercicio_nombre": "Abdominales en polea",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=GtLSlLQIIEg",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_peso_muerto",
          "bloque": "A1",
          "ejercicio_id": "peso_muerto",
          "ejercicio_nombre": "Peso Muerto",
          "patron": "Cadera Dominante",
          "video_url": "https://www.youtube.com/watch?v=z_UsunyCxxg",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_hip_thrust",
          "bloque": "B1",
          "ejercicio_id": "hip_thrust",
          "ejercicio_nombre": "Hip Thrust",
          "patron": "Cadera Dominante",
          "video_url": "https://www.youtube.com/watch?v=OAhvIWLC0rc",
          "progresion": "Escalon (Simple) desde 4x6",
          "prescripcion": {
            "semana_1": {
              "series": "4x6",
              "kgs": ""
            },
            "semana_2": {
              "series": "8-6-6-6",
              "kgs": ""
            },
            "semana_3": {
              "series": "8-8-6-6",
              "kgs": ""
            },
            "semana_4": {
              "series": "8-8-8-6",
              "kgs": ""
            },
            "semana_5": {
              "series": "4x8",
              "kgs": ""
            },
            "semana_6": {
              "series": "10-8-8-8",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_sentadilla_bulgara_valija_1_brazo",
          "bloque": "B2",
          "ejercicio_id": "sentadilla_bulgara_valija_1_brazo",
          "ejercicio_nombre": "Sentadilla Bulgara Valija 1 Brazo",
          "patron": "Rodilla Dominante",
          "video_url": "https://www.youtube.com/watch?v=rAO8M9INgww",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_patada_de_gluteos_en_maquina",
          "bloque": "C1",
          "ejercicio_id": "patada_de_gluteos_en_maquina",
          "ejercicio_nombre": "Patada de gluteos en maquina",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=7dAyon8VTz4",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_curl_isquios_sentado",
          "bloque": "C2",
          "ejercicio_id": "curl_isquios_sentado",
          "ejercicio_nombre": "Curl isquios sentado",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=iSX5utHMEdc",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_3_aduccion_y_abduccion_en_maquina",
          "bloque": "C3",
          "ejercicio_id": "aduccion_y_abduccion_en_maquina",
          "ejercicio_nombre": "Aduccion y Abduccion en maquina",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=nfmcKKCmrrA&pp=ygUfYWR1Y2Npb24geSBhYmR1Y2Npb24gZW4gbWFxdWluYQ%3D%3D",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        }
      ]
    },
    {
      "id": "day_4",
      "dia_num": 4,
      "nombre": "Día 4: Tracción y Estabilidad (Jalón & Remo)",
      "items": [
        {
          "id": "dia_4_rotaciones_dorsales_en_cuadrupedia",
          "bloque": "Circ 1",
          "ejercicio_id": "rotaciones_dorsales_en_cuadrupedia",
          "ejercicio_nombre": "Rotaciones Dorsales En Cuadrupedia",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=MPsAS_IrOcM",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_cobra_con_rotaciones",
          "bloque": "Circ 1",
          "ejercicio_id": "cobra_con_rotaciones",
          "ejercicio_nombre": "Cobra Con Rotaciones",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=93OogUYDDeA",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_bird_dog_dinamico__lumbar",
          "bloque": "Circ 1",
          "ejercicio_id": "bird_dog_dinamico__lumbar",
          "ejercicio_nombre": "Bird Dog Dinamico (Lumbar)",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=rEyz_RWX0Oo",
          "progresion": "Meseta 3x20",
          "prescripcion": {
            "semana_1": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x20",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_giros_con_medicine_ball",
          "bloque": "Circ 2",
          "ejercicio_id": "giros_con_medicine_ball",
          "ejercicio_nombre": "Giros con medicine ball",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=YCo-qmneId8",
          "progresion": "Meseta 3x20",
          "prescripcion": {
            "semana_1": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x20",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x20",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_jalon_al_pecho_en_proncion",
          "bloque": "A1",
          "ejercicio_id": "jalon_al_pecho_en_proncion",
          "ejercicio_nombre": "Jalon al pecho en proncion",
          "patron": "Traccion",
          "video_url": "https://www.youtube.com/watch?v=qzQGEazdWPM",
          "progresion": "Escalon (simple) desde 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "12-11-10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x12",
              "kgs": ""
            },
            "semana_4": {
              "series": "15-13-12",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "18-16-15",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_remo_en_hammer_unilateral",
          "bloque": "B1",
          "ejercicio_id": "remo_en_hammer_unilateral",
          "ejercicio_nombre": "Remo en Hammer unilateral",
          "patron": "Traccion",
          "video_url": "https://www.youtube.com/watch?v=sYl2uUE7kt0",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_hombro_posterior_en_peck_deck",
          "bloque": "B2",
          "ejercicio_id": "hombro_posterior_en_peck_deck",
          "ejercicio_nombre": "Hombro posterior en Peck Deck",
          "patron": "Empuje",
          "video_url": "https://www.youtube.com/watch?v=JyPNDIXjHsw",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_dominadas_neutras",
          "bloque": "C1",
          "ejercicio_id": "dominadas_neutras",
          "ejercicio_nombre": "Dominadas Neutras",
          "patron": "Traccion",
          "video_url": "https://www.youtube.com/watch?v=IrYhFCn-hiM",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_pull_over_en_polea",
          "bloque": "C2",
          "ejercicio_id": "pull_over_en_polea",
          "ejercicio_nombre": "Pull Over en polea",
          "patron": "Traccion",
          "video_url": "https://www.youtube.com/watch?v=rRZ8hhpKozA",
          "progresion": "Meseta 2x15",
          "prescripcion": {
            "semana_1": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "2x15",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_biceps_con_barra",
          "bloque": "C3",
          "ejercicio_id": "biceps_con_barra",
          "ejercicio_nombre": "Biceps Con Barra",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=g5BEv4Nnj4Q",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_4_bicep_neutro_polea_baja",
          "bloque": "C3",
          "ejercicio_id": "bicep_neutro_polea_baja",
          "ejercicio_nombre": "Bicep Neutro polea baja",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=h3RiD5eEZxY",
          "progresion": "Meseta 2x15",
          "prescripcion": {
            "semana_1": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "2x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "2x15",
              "kgs": ""
            }
          }
        }
      ]
    },
    {
      "id": "day_5",
      "dia_num": 5,
      "nombre": "Día 5: Fuerza General y Cierre Semanal",
      "items": [
        {
          "id": "dia_5_gato_bueno_gato_malo",
          "bloque": "Circ 1",
          "ejercicio_id": "gato_bueno_gato_malo",
          "ejercicio_nombre": "Gato Bueno Gato Malo",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=y7l1AKoVfOs",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_90_90_con_flexion_de_tronco",
          "bloque": "Circ 1",
          "ejercicio_id": "90_90_con_flexion_de_tronco",
          "ejercicio_nombre": "90-90 Con Flexion De Tronco",
          "patron": "Movilidad",
          "video_url": "https://www.youtube.com/watch?v=8zpIodv6Yp8",
          "progresion": "Meseta 3x10''",
          "prescripcion": {
            "semana_1": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x 10''",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x 10''",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_pallof_press_en_polea",
          "bloque": "Circ 2",
          "ejercicio_id": "pallof_press_en_polea",
          "ejercicio_nombre": "Pallof Press En Polea",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=3q6xGhrh1B0",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_abdominales_en_polea",
          "bloque": "Circ 2",
          "ejercicio_id": "abdominales_en_polea",
          "ejercicio_nombre": "Abdominales en polea",
          "patron": "Core",
          "video_url": "https://www.youtube.com/watch?v=GtLSlLQIIEg",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_sentadilla_en_maquina_belt_squat",
          "bloque": "A1",
          "ejercicio_id": "sentadilla_en_maquina_belt_squat",
          "ejercicio_nombre": "Sentadilla en maquina Belt squat",
          "patron": "Rodilla Dominante",
          "video_url": "https://www.youtube.com/watch?v=Dr9yagOonz8",
          "progresion": "Escalon (Simple) desde 4x8",
          "prescripcion": {
            "semana_1": {
              "series": "4x8",
              "kgs": ""
            },
            "semana_2": {
              "series": "10-8-8-8",
              "kgs": ""
            },
            "semana_3": {
              "series": "10-10-8-8",
              "kgs": ""
            },
            "semana_4": {
              "series": "10-10-10-8",
              "kgs": ""
            },
            "semana_5": {
              "series": "4x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "12-10-10-10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_peso_muerto_unilateral__banco",
          "bloque": "B1",
          "ejercicio_id": "peso_muerto_unilateral__banco",
          "ejercicio_nombre": "Peso muerto unilateral (banco)",
          "patron": "Cadera Dominante",
          "video_url": "https://www.youtube.com/watch?v=wyJQpvfWrIc",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_hip_thrust",
          "bloque": "B2",
          "ejercicio_id": "hip_thrust",
          "ejercicio_nombre": "Hip Thrust",
          "patron": "Cadera Dominante",
          "video_url": "https://www.youtube.com/watch?v=OAhvIWLC0rc",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_subida_al_banco",
          "bloque": "C1",
          "ejercicio_id": "subida_al_banco",
          "ejercicio_nombre": "Subida Al Banco",
          "patron": "Rodilla Dominante",
          "video_url": "https://www.youtube.com/watch?v=7dU8pueJ2e4",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_curl_de_cuadriceps",
          "bloque": "C2",
          "ejercicio_id": "curl_de_cuadriceps",
          "ejercicio_nombre": "Curl De Cuadriceps",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=-baNfSeAYLE",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_curl_isquios_acostado",
          "bloque": "C3",
          "ejercicio_id": "curl_isquios_acostado",
          "ejercicio_nombre": "Curl isquios acostado",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=p3gWNsALREQ&pp=ygUVY3VybCBpc3F1aW9zIGFjb3N0YWRv",
          "progresion": "Meseta 3x15",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_6": {
              "series": "315",
              "kgs": ""
            }
          }
        },
        {
          "id": "dia_5_abducciones_de_cadera_en_banco",
          "bloque": "C3",
          "ejercicio_id": "abducciones_de_cadera_en_banco",
          "ejercicio_nombre": "Abducciones De Cadera En Banco",
          "patron": "Localizado",
          "video_url": "https://www.youtube.com/watch?v=QrtNK5BqAYE",
          "progresion": "Meseta 3x10",
          "prescripcion": {
            "semana_1": {
              "series": "3x15",
              "kgs": ""
            },
            "semana_2": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_3": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_4": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_5": {
              "series": "3x10",
              "kgs": ""
            },
            "semana_6": {
              "series": "3x10",
              "kgs": ""
            }
          }
        }
      ]
    },
    {
      "id": "day_6",
      "dia_num": 6,
      "nombre": "Día 6: Regenerativo / Opcional",
      "items": []
    }
  ]
};

export const INITIAL_STUDENTS: Student[] = [
  {
    "id": "student_nahir",
    "nombre": "Nahir",
    "email": "nahir@flgtrainer.com",
    "telefono": "+54 9 11 1234-5678",
    "rutina_activa_id": "rutina_nahir_01",
    "semana_actual": 1,
    "objetivo": "Fuerza, tono muscular y postura",
    "notas_coach": "Enfoque en movilidad de cadera y técnica controlada en sentadillas y peso muerto.",
    "username": "nahir",
    "password": "nahir123"
  },
  {
    "id": "student_lucas",
    "nombre": "Lucas M.",
    "email": "lucas@flgtrainer.com",
    "telefono": "+54 9 11 8765-4321",
    "rutina_activa_id": "rutina_nahir_01",
    "semana_actual": 2,
    "objetivo": "Hipertrofia y fuerza",
    "notas_coach": "Monitorear hombro en press inclinado.",
    "username": "lucas",
    "password": "lucas123"
  }
];

export const INITIAL_USERS: UserProfile[] = [
  {
    "id": "user_facu",
    "username": "facu",
    "password": "flg2026",
    "nombre": "Facu LG",
    "role": "coach",
    "email": "facu@flgtrainer.com"
  },
  {
    "id": "user_nahir",
    "username": "nahir",
    "password": "nahir123",
    "nombre": "Nahir",
    "role": "student",
    "student_id": "student_nahir",
    "email": "nahir@flgtrainer.com"
  },
  {
    "id": "user_lucas",
    "username": "lucas",
    "password": "lucas123",
    "nombre": "Lucas M.",
    "role": "student",
    "student_id": "student_lucas",
    "email": "lucas@flgtrainer.com"
  }
];
