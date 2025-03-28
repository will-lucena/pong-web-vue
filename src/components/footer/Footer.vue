<script setup></script>

<template>
  <footer class="footer">
    <section class="about">
      <div class="info">
        <h3>Sobre</h3>
        <p>
          Grupo de desenvolvedores de jogos do Rio Grande do Norte com interesse em ampliar a
          atuação do estado na indústria de jogos.
        </p>
      </div>

      <div class="links">
        <div class="quick_links">
          <h3>Links Rápidos</h3>
          <nav>
            <ul class="nav_list">
              <li class="nav_list__item">Inicio</li>
              <li class="nav_list__item">Sobre</li>
              <li class="nav_list__item">Blog</li>
              <li class="nav_list__item">Organizadores</li>
            </ul>
          </nav>
        </div>

        <div class="social_media_links">
          <h3>Todas as Redes Sociais</h3>
          <nav class="nav_links">
            <ul class="nav_list">
              <li class="nav_list__item">Discord</li>
              <li class="nav_list__item">Twitter</li>
              <li class="nav_list__item">Facebook</li>
              <li class="nav_list__item">Whatsapp</li>
            </ul>
            <ul class="nav_list">
              <li class="nav_list__item">Bluesky</li>
              <li class="nav_list__item">Youtube</li>
              <li class="nav_list__item">Instagram</li>
              <li class="nav_list__item">Mastodon</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="copyright">
      <img src="/src/assets/logo.png" alt="" width="43" height="49" />
      <div class="copyright__content">
        <h3>Pong</h3>
        <p>Copyright © 2025 PONG - Potiguar Indie Games.</p>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="css">
.footer {
  box-shadow: 0px -1px 42.3px 0px rgba(0, 0, 0, 0.25);
  background: #f6f6f7;

  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 32px 350px;
}

.about,
.links,
.info,
.social_media_links,
.quick_links,
.nav_links {
  display: flex;
}

.about,
.links,
.nav_links {
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
}

.info,
.social_media_links,
.quick_links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav_list {
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  gap: 8px;
  flex: 1;

  list-style: none;
}

.nav_list__item {
  color: black;
}

.copyright {
  border-top: 1px solid rgba(220, 221, 223, 1);
  padding: 32px 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.copyright__content {
  display: flex;
  flex-direction: column;
}

.info > h3,
.quick_links > h3,
.social_media_links > h3 {
  font-family: Plus Jakarta Sans;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  color: #181a2a;
}

.info > p {
  width: 30ch;

  font-family: Plus Jakarta Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #696a75;
}

.copyright__content > h3 {
  font-family: Plus Jakarta Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  color: #141624;
}

.copyright__content > p,
.nav_list__item {
  font-family: Plus Jakarta Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #3b3c4a;
}

@media screen and (max-width: 1440px) {
  .footer {
    padding: 32px 80px;
    gap: 40px;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 425px) {
  .footer {
    padding: 32px 16px;
    gap: 20px;
  }

  .about {
    flex-direction: column;
    gap: 20px;
  }

  .info {
    gap: 0;
  }

  .info > h3,
  .quick_links > h3,
  .social_media_links > h3 {
    font-size: 12px;
  }

  .info > p {
    width: 100%;
  }

  .nav_list {
    gap: 2px;
  }

  .info > p,
  .nav_list__item {
    font-size: 12px;
  }

  .copyright {
    gap: 4px;
    padding: 32px 0 0 0;
  }

  .copyright__content > p {
    font-size: 10px;
  }
}
</style>
