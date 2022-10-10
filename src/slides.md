---
title: Polkadot Hackathon Latam 2022
revealOptions:
  transition: slide
---

## Polkadot Hackathon LATAM 2022

## Introducción a Substrate

---

# Presentadores

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

  <div class="flex h-48 mx-24 mt-24">
    <img alt="logo" src="./assets/arrow.svg">
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
    <p class="text-xl font-medium w-full m-auto">Almacenamiento</p>
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
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emeraldl-600 h-16">
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

# Substrate

----

## ¿Qué es?

----

## ¿Por qué Rust?

----

## ¿Por qué WASM?

----

## ¿Qué nos provee?

----

## Estructura de un nodo

---

# Parachains

----

## Cumulus

---

# FRAME

----

## Pallets

----

## Estructura de un pallet

----

## Almacenamiento

----

## Despachables

----

## Eventos y errores

----

## Hooks

---

# Otros recursos

[comment]: # "TODO: Copiar de Sasha"
