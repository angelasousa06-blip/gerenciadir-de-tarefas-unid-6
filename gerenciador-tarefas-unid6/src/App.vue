<template>
  <nav>
    <RouterLink to="/">Inicial</RouterLink> |
    <RouterLink to="/detalhes">Detalhes</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/admin">Admin</RouterLink> |
    <RouterLink to="/objeto">Objeto</RouterLink> |
    <RouterLink to="/usuarios">Usuários</RouterLink> |
    <RouterLink to="/autor">Autor</RouterLink>
  </nav>

  <main>
    <!-- As visualizações serão renderizadas aqui dentro -->
    <RouterView />
  </main>
</template>
