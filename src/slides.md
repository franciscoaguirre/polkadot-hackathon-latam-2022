---
title: Polkadot Hackathon Latam 2022
revealOptions:
  transition: slide
highlightTheme: monokai
---

# Polkadot Hackathon LATAM 2022 <!-- .element: class="!text-polkadot" -->

----

## Introducción a Substrate <!-- .element: class="!text-substrate" -->

---

## Presentadores <!-- .element: class="!text-substrate" -->

<div class="flex justify-between h-full w-full p-6">
  <img class="w-96 h-96 rounded-full" alt="cisco" src="./assets/francisco.jpg">
  <img class="w-96 h-96 rounded-full" alt="ale" src="./assets/alejandro.jpg">
</div>

---

<div class="flex justify-center h-full w-full p-6">
  <img class="w-full" alt="logo" src="./assets/polkadot-logo-white.svg">
</div>

----

<div class="flex items-center h-20 mb-6">
  <img alt="logo" src="./assets/parity.png">
  <p class="text-[32px] px-8">+</p>
  <img alt="logo" src="./assets/ferris-hand.svg">
</div>

<p class="text-2xl text-left py-6">Clientes basados en Rust desarrollados por Parity Technologies</p>

<div class="flex items-center rounded-lg shadow-md bg-teal-800 shadow-teal-600 px-8 mb-6 w-4/12">
  <img class="h-16" alt="logo" src="./assets/bitcoin.svg">
  <p class="text-xl text-left pl-6">Bitcoin</p>
</div>

<div class="flex items-center rounded-lg shadow-md bg-teal-800 shadow-teal-600 px-8 mb-6 w-4/12">
  <img class="h-16 px-3" alt="logo" src="./assets/ethereum.png">
  <p class="text-xl text-left pl-6">Ethereum</p>
</div>

<div class="flex items-center rounded-lg shadow-md bg-teal-800 shadow-teal-600 px-8 w-4/12">
  <img class="h-16" alt="logo" src="./assets/zcash.svg">
  <p class="text-xl text-left pl-6">Zcash</p>
</div>

----

<div class="flex justify-center items-center">
  <div class="flex flex-col w-full h-full">
    <p class="text-2xl pb-8">Blockchain Monolítica</p>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-32">
      <p class="text-xl font-medium w-full m-auto">Ejecución, Consenso & Networking</p>
    </div>
  </div>

  <div class="flex mx-24 mt-24">
    <img alt="logo" src="./assets/arrow.svg" width="200">
  </div>

  <div class="flex flex-col w-full">
    <p class="text-2xl pb-6">Blockchain Modular</p>
    <div class="flex flex-col justify-center">
        <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 mb-3">
          <p class="text-xl font-medium w-full m-auto">Ejecución</p>
        </div>
        <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16">
          <p class="text-xl font-medium w-full m-auto">Consenso & Networking</p>
        </div>
    </div>
  </div>
</div>

----

<div class="flex flex-col w-6/12 m-auto">
  <div class="flex justify-center h-full w-full p-6 mb-12">
    <img class="w-full" alt="logo" src="./assets/polkadot-logo-white.svg">
  </div>
  <div class="flex flex-col justify-center">
      <div class="flex items-center p-6 rounded-lg shadow-md bg-pink-800 shadow-pink-600 h-16 mb-3">
        <p class="text-xl font-medium w-full m-auto">Parachain</p>
      </div>
      <div class="flex items-center p-6 rounded-lg shadow-md bg-pink-800 shadow-pink-600 h-16">
        <p class="text-xl font-medium w-full m-auto">Relay Chain</p>
      </div>
  </div>
</div>

----

<p class="text-2xl text-center py-6">Componentes de un cliente</p>

<div class="grid grid-cols-12 gap-6">
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-3">
    <p class="text-xl font-medium w-full m-auto">BD</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-3">
    <p class="text-xl font-medium w-full m-auto">Networking P2P</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-3">
    <p class="text-xl font-medium w-full m-auto">Consenso</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-3">
    <p class="text-xl font-medium w-full m-auto">RPC API</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-4">
    <p class="text-xl font-medium w-full m-auto">Telemetría</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-4">
    <p class="text-xl font-medium w-full m-auto">Marco De Ejecución</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-800 shadow-teal-600 h-16 col-span-4">
    <p class="text-xl font-medium w-full m-auto">Ejecución</p>
  </div>
</div>

----

<div class="flex justify-center h-full w-full p-6">
  <img class="h-12" alt="logo" src="./assets/substrate-logo.svg">
</div>

<div class="grid grid-cols-3 gap-6 bg-emerald-500 rounded-lg p-3">
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16 col-span-3 mb-2">
    <p class="text-xl font-medium w-full m-auto">Ejecución</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Almacenamiento</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Networking P2P</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Consenso</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">RPC API</p>
  </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Telemetría</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Marco De Ejecución</p>
  </div>
</div>

----

<div class="flex justify-between h-full w-full p-6">
  <img class="w-96" alt="logo" src="./assets/substrate-logo.svg">
  <img class="w-16" alt="logo" src="./assets/arrow.svg">
  <img class="w-96" alt="logo" src="./assets/polkadot-logo-white.svg">
</div>

---

<div class="flex justify-center h-full w-full p-6">
  <img class="w-full" alt="logo" src="./assets/substrate-logo.svg">
</div>

----

## ¿Qué es? <!-- .element: class="!text-substrate" -->

Framework modular para desarrollo de blockchains escrita en Rust

----

## ¿Qué nos provee? <!-- .element: class="!text-substrate" -->

- Interoperabilidad con otras chains
- Módulos reutilizables para armar la lógica de negocio
- Capacidad de evolucionar con el tiempo

Note:
TODO: Leer más de XCM
Esta capacidad de evolucionar con el tiempo está dada debido a que el runtime
(lógica de negocio) puede ser actualizado mediante governanza.

----

## ¿Por qué Rust? <!-- .element: class="!text-substrate" -->

<div class="flex gap-6">
  <ul>
    <li>Seguro</li>
    <li>Rápido</li>
    <li>Liviano</li>
    <li>Compila a WASM</li>
    <li>Divertido :D</li>
  </ul>
  <img src="./assets/ferris-happy.svg" width="500">
</div>

Note:
Rust es el lenguaje de programación con mejor soporte para compilar a WebAssembly.

----

## Arquitectura <!-- .element: class="!text-substrate" -->

----

<div class="flex flex-col">
  <div class="mb-8 grid grid-cols-3 gap-6 bg-violet-400 rounded-lg p-3">
    <!-- DIAGRAM -->
    <div class="relative flex justify-center items-center p-6 h-full">
      <div class="flex flex-col items-center">
        <p class="text-3xl font-bold text-violet-800">WASM Runtime</p>
        <img class="!m-0" src="./assets/wasm-icon.png" width="100">
      </div>
      <!-- ARROWS -->
      <div class="runtime-arrow left-[55px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[110px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[165px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[220px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center p-6 rounded-lg shadow-md bg-violet-800 shadow-violet-600 h-full">
      <p class="text-2xl font-semibold m-auto text-violet-400">Pallets</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li>Balances</li>
        <li>Uniques</li>
        <li>Custom</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-violet-800 shadow-violet-600 h-full">
      <p class="text-2xl font-semibold m-auto text-violet-400">Runtime API</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li>Procesamiento de bloques</li>
        <li>Finalidad</li>
        <li>Transacciones</li>
        <li>Etc...</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-6 bg-orange-400 rounded-lg p-3">
    <!-- DIAGRAM -->
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-orange-800 shadow-orange-600 h-full">
      <p class="text-2xl font-semibold w-full m-auto text-orange-400">Host functions</p>
      <ul class="!list-none !m-0 text-xl">
        <li>Criptografía</li>
        <li>Logging</li>
        <li>Almacenamiento</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-orange-800 shadow-orange-600 h-full">
      <p class="text-2xl font-semibold m-auto text-orange-400">Componentes</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li>Libp2p</li>
        <li>Creador de bloques</li>
        <li>Base de datos</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="relative flex justify-center items-center p-6 h-full">
      <div class="flex flex-col items-center">
        <p class="text-3xl font-bold text-orange-800">HOST</p>
        <img class="!m-0" src="./assets/ferris-hand.svg" width="150">
      </div>
      <!-- ARROWS -->
      <div class="host-arrow right-[60px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[120px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[180px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[240px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
    </div>
  </div>
</div>

Note:
Un nodo de Substrate tiene dos partes, el host y el runtime.
El runtime ejecuta la función de transición de la máquina de estados.
El runtime es una máquina virtual del Rust compilado a WASM.
Este WASM se encuentra en la base de datos del nodo.

----

## ¿Por qué WASM? <!-- .element: class="!text-substrate" -->

- Compacto
- Sandboxed
- Determinista
- Rápido
- Buen soporte

Note:
El runtime (la lógica de negocio) es un blob (binario) de WASM.
Este blob se almacena en la base de datos, lo cual permite que sea actualizado
mediante governanza.

----

## Forkless upgrades <!-- .element: class="!text-substrate" -->

Note:
Debido a que la lógica de la chain está en el almacenamiento, una actualización no
requiere un hard fork, es simplemente procesar un nuevo extrinsic.

----

<div class="flex flex-col">
  <div class="mb-8 grid grid-cols-3 gap-6 bg-violet-400 rounded-lg p-3">
    <!-- DIAGRAM -->
    <div class="relative flex justify-center items-center p-6 h-full">
      <div class="flex flex-col items-center">
        <p class="text-3xl font-bold text-violet-800">WASM Runtime</p>
        <img class="!m-0" src="./assets/wasm-icon.png" width="100">
      </div>
      <!-- ARROWS -->
      <div class="runtime-arrow left-[55px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[110px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[165px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="runtime-arrow left-[220px]">
        <div class="arrow-head -left-[50%]" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center p-6 rounded-lg shadow-md bg-violet-800 shadow-violet-600 h-full">
      <p class="text-2xl font-semibold m-auto text-violet-400">Pallets</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li>Balances</li>
        <li>Uniques</li>
        <li>Custom</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-violet-800 shadow-violet-600 h-full">
      <p class="text-2xl font-semibold m-auto text-violet-400">Runtime API</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li class="fragment highlight-current-red" data-fragment-index="2">Procesamiento de bloques</li>
        <li>Finalidad</li>
        <li>Transacciones</li>
        <li>Etc...</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-6 bg-orange-400 rounded-lg p-3">
    <!-- DIAGRAM -->
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-orange-800 shadow-orange-600 h-full">
      <p class="text-2xl font-semibold w-full m-auto text-orange-400">Host functions</p>
      <ul class="!list-none !m-0 text-xl">
        <li>Criptografía</li>
        <li>Logging</li>
        <li>Almacenamiento</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="flex flex-col items-center p-6 rounded-lg shadow-md bg-orange-800 shadow-orange-600 h-full">
      <p class="text-2xl font-semibold m-auto text-orange-400">Componentes</p>
      <ul class="!list-none space-y-1 !m-0 text-xl">
        <li class="fragment text-white highlight-current-red" data-fragment-index="1">Libp2p</li>
        <li>Creador de bloques</li>
        <li class="fragment text-white highlight-current-red" data-fragment-index="3">Base de datos</li>
        <li>Etc...</li>
      </ul>
    </div>
    <div class="relative flex justify-center items-center p-6 h-full">
      <div class="flex flex-col items-center">
        <p class="text-3xl font-bold text-orange-800">HOST</p>
        <img class="!m-0" src="./assets/ferris-hand.svg" width="150">
      </div>
      <!-- ARROWS -->
      <div class="host-arrow right-[60px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[120px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[180px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
      <div class="host-arrow right-[240px]">
        <div class="arrow-head -left-[50%] rotate-180" style="clip-path: polygon(0px 0px, 100% 0px, 50% 100%);"></div>
      </div>
    </div>
  </div>
</div>

Note:
Como ejemplo en el diagrama, viene un bloque con un extrinsic de runtime upgrade.
Este bloque llega al host del nodo por la red mediante libp2p.
Luego se llama a la API del runtime actual que se tiene para procesar el bloque
(solo el runtime tiene esta lógica).
Esta lógica determina que se va a sustituír el runtime viejo con el nuevo y el nuevo
se pone en la base de datos.
A partir de aquí se pasa a usar el runtime nuevo porque sustituyó al viejo.

----

## Cumulus <!-- .element: class="!text-substrate" -->

Note:
Cumulus es un proyecto que van a querer utilizar si quieren hacer una parachain con Substrate.
Mientras que Substrate te permite crear una chain con todos los módulos reutilizables que mencionamos,
Cumulus permite que esté pronta para funcionar con una relay chain.
Hay una template para empezar desde cero con Substrate y Cumulus para hacer una parachain, van a querer
empezar con esa en vez de con la substrate-node-template si quieren hacer una parachain.

---

## Frame <!-- .element: class="!text-substrate" -->

<div class="flex justify-between">
  <div class="w-6/12 flex flex-col justify-center">
    <p class="text-2xl text-left py-3">• Acrónimo de "Framework for Runtime Aggregation of Modularized Entities"</p>
    <p class="text-2xl text-left py-3">• Entorno de desarrollo dentro de substrate que provee modulos, llamados Pallets.</p>
    <p class="text-2xl text-left py-3">• Los Pallets proveen funcionalidad especifica que puedes incluir en tu Runtime.</p>
  </div>
  <img class="h-96" alt="frame" src="./assets/pallet.png">
</div>

----

### Pallets <!-- .element: class="!text-substrate" -->

<div class="flex justify-between">
  <div class="w-6/12 flex flex-col justify-center">
    <p class="text-2xl text-left py-3">• Permiten construir una lógica de aplicación usando componentes predefinidos.</p>
    <p class="text-2xl text-left py-3">• Cada Pallet define tipos, elementos de almacenamiento y funciones para implementar una funcionalidad específica.</p>
  </div>
  <div class="grid grid-cols-3 gap-3 bg-emerald-500 rounded-lg p-3 ml-20 content-center h-min my-auto">
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
      <p class="text-xl font-medium w-full m-auto">BABE</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-500 shadow-teal-400 h-16">
      <p class="text-xl font-medium w-full m-auto">GRANDPA</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-500 shadow-teal-400 h-16">
      <p class="text-xl font-medium w-full m-auto">Assets</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-500 shadow-teal-400 h-16">
      <p class="text-xl font-medium w-full m-auto">EVM</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
      <p class="text-xl font-medium w-full m-auto">Identity</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
      <p class="text-xl font-medium w-full m-auto">Staking</p>
    </div>
      <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
      <p class="text-xl font-medium w-full m-auto">Multisig</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
      <p class="text-xl font-medium w-full m-auto">Uniques</p>
    </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-teal-500 shadow-teal-400 h-16">
      <p class="text-xl font-medium w-full m-auto">Contracts</p>
    </div>
  </div>
</div>

----

### Estructura General <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    // Imports y dependencias
    pub use pallet::*;

    // Definir el modulo pallet
    #[frame_support::pallet]
    pub mod pallet {
    use frame_support::pallet_prelude::*;
    use frame_system::pallet_prelude::*;

    ...

    }
  </code>
</pre>

----

### Configuracion Principal <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    // Declarar el tipo del pallet, traits y metodos
    #[pallet::pallet]
    #[pallet::generate_store(pub(super) trait Store)]
    pub struct Pallet<T>(_);

    // Configurar el pallet especificando los tipos
    // y parametros de los que depende
    #[pallet::config]
    pub trait Config: frame_system::Config { ... }
  </code>
</pre>

----

### Almacenamiento <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    #[pallet::storage]
    type SomePrivateValue<T> = StorageValue<_, u32, ValueQuery>;

    #[pallet::storage]
    #[pallet::getter(fn some_primitive_value)]
    pub(super) type SomePrimitiveValue<T> = StorageValue<_, u32, ValueQuery>;

    #[pallet::storage]
    #[pallet::getter(fn some_map)]
    pub(super) type SomeMap<T: Config> = StorageMap<_, Blake2_128Concat, T::AccountId, u32, ValueQuery>;
  </code>
</pre>

----

### Eventos <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    // Pallets use events to inform users when important changes are made.
    // Event documentation should end with an array that provides descriptive names for parameters.
    #[pallet::event]
    #[pallet::generate_deposit(pub(super) fn deposit_event)]
    pub enum Event<T: Config> {
      /// Event emitted when a claim has been created.
      ClaimCreated { who: T::AccountId, claim: T::Hash },
      /// Event emitted when a claim is revoked by the owner.
      ClaimRevoked { who: T::AccountId, claim: T::Hash },
    }
  </code>
</pre>

----

### Errores <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    #[pallet::error]
    pub enum Error<T> {
      /// The claim already exists.
      AlreadyClaimed,
      /// The claim does not exist, so it cannot be revoked.
      NoSuchClaim,
      /// The claim is owned by another account, so caller can't revoke it.
      NotClaimOwner,
    }
  </code>
</pre>

----

### Despachables <!-- .element: class="!text-substrate" -->

<pre>
  <code data-trim data-noescape>
    // Add functions that are callable
    // from outside the runtime.
    #[pallet::call]
    impl<T:Config> Pallet<T> { ... }
  </code>
</pre>

---

### Recursos <!-- .element: class="!text-substrate" -->

<div class="grid grid-cols-2 gap-8 mt-20 no-underline">
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://github.com/substrate-developer-hub/substrate-node-template">Substrate Node Template</a>
  </div>
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://github.com/paritytech/substrate/tree/master/frame">FRAME Pallets</a>
  </div>
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://github.com/substrate-developer-hub/substrate-front-end-template">Substrate Frontend Template</a>
  </div>
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://learn.figment.io/tutorials/substrate-kitties-setup">Substrate Kitties</a>
  </div>
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://github.com/substrate-developer-hub/substrate-parachain-template">Substrate Parachain Template</a>
  </div>
  <div class="flex items-center justify-center rounded-lg shadow-md bg-emerald-800 shadow-emerald-600">
    <a class="text-2xl p-6" href="https://docs.substrate.io/quick-start/">Documentación de Substrate</a>
  </div>
</div>
