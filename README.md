# 🏋️‍♂️ EntrenaPro - App de Gestión de Rutinas y Gimnasio

Aplicación web moderna y PWA pensada para **Entrenadores (Coaches)** y **Alumnos de Gimnasio (Atletas)**. Permite abandonar las planillas estáticas de Google Sheets y pasar a una experiencia móvil ágil, ergonómica y en tiempo real.

---

## ⚡ Tecnologías

- **Frontend:** React 19 + TypeScript + Vite
- **Estilos & Iconos:** Tailwind CSS + Lucide React
- **Celebraciones & Animaciones:** Canvas Confetti + Web Audio API
- **Base de Datos & Tiempo Real:** [Supabase](https://supabase.com) (PostgreSQL + Realtime)
- **Despliegue:** [Vercel](https://vercel.com)

---

## 🚀 Funcionalidades Principales

### 📱 Para el Alumno (Modo Gimnasio - Mobile First)
- **Ciclo de 6 Semanas:** Navegación día por día (Día 1 a Día 6).
- **Bloques Claros:** Circuitos de Movilidad (`Circ 1`), Core (`Circ 2`) y Biseries / Superseries (`B1 + B2`, `C1 + C2 + C3`).
- **Videos de Técnica Integrados:** Reproductor de YouTube embebido que se abre sin salir de la app ni cortar la música.
- **Carga de Kgs Ergonómica:**
  - Botones rápidos de ajuste `[-2.5 kg]` y `[+2.5 kg]`.
  - Muestra como referencia lo cargado en la semana anterior.
  - Check verde de serie realizada.
- **Timer de Descanso Flotante:** Cuenta regresiva automática al terminar cada serie con aviso sonoro y vibración (30s, 60s, 90s, 120s).
- **Cierre de Entrenamiento con RPE:** Registro del esfuerzo percibido (1 al 10) y feedback directo para el entrenador con lluvia de confeti al completar el día.

### 👨‍🏫 Para el Entrenador (Panel Coach)
- **Gestión de Alumnos:** Crear alumnos, asignarles rutinas y revisar su progreso, pesos levantados y comentarios.
- **Editor de Rutinas:**
  - Crear o duplicar rutinas de 6 semanas.
  - Asignar ejercicios a bloques (`Circ 1`, `A1`, `B1`, `B2`).
  - Personalizar series y repeticiones semana a semana.
- **Banco de Ejercicios:** Más de 730 ejercicios extraídos con patrones de movimiento (*Movilidad, Core, Rodilla Dominante, Cadera Dominante, Empuje, Tracción, Localizado, Agilidad*) y enlaces a videos tutoriales.

---

## ☁️ Conexión con Supabase

1. Crea un proyecto en [Supabase](https://supabase.com).
2. Ve al **SQL Editor** de Supabase, copia el contenido de `supabase-schema.sql` y presiona **RUN**.
3. En la app, haz click en el botón **"Modo Local / Nube"** del Navbar y pega la URL de tu proyecto y tu Anon Public Key (o agrégalos en un archivo `.env` como `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`).

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 🚀 Despliegue en Vercel

1. Sube el repositorio a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - EntrenaPro"
   ```
2. En [Vercel](https://vercel.com), importa el repositorio `entrenapro`.
3. (Opcional) Agrega las variables de entorno `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
4. ¡Listo! Tu app estará en línea en segundos.
