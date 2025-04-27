<script setup>
import { quickLinks, socialMediaLinks } from '@/config/navigation'
import logo from '@/assets/logo.png'
const firstColumnSocial = socialMediaLinks.slice(0, 4)
const secondColumnSocial = socialMediaLinks.slice(4)
</script>

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
              <li v-for="item in quickLinks" :key="item.link" class="nav_list__item">
                <router-link :to="item.link">{{ item.label }}</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="social_media_links">
          <h3>Todas as Redes Sociais</h3>
          <nav class="nav_links">
            <ul class="nav_list">
              <li v-for="item in firstColumnSocial" :key="item.link" class="nav_list__item">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
              </li>
            </ul>
            <ul class="nav_list">
              <li v-for="item in secondColumnSocial" :key="item.link" class="nav_list__item">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="copyright">
      <img :src="logo" alt="Pong Logo" width="43" height="49" />
      <div class="copyright__content">
        <h3>Pong</h3>
        <p>Copyright © 2025 PONG - Potiguar Indie Games.</p>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="css">
.footer {
  box-shadow: 0px -1px 42.3px 0px var(--shadow-footer);
  background: var(--bg-secondary);

  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);

  padding: var(--space-3xl) var(--container-desktop);
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
  gap: var(--space-4xl);
}

.info,
.social_media_links,
.quick_links {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.nav_list {
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  gap: var(--space-xs);
  flex: 1;

  list-style: none;
}

.nav_list__item {
  color: var(--text-secondary);
}

.copyright {
  border-top: 1px solid var(--border-secondary);
  padding: var(--space-3xl) 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--space-sm);
}

.copyright__content {
  display: flex;
  flex-direction: column;
}

.logo {
  width: var(--logo-small-width);
  height: var(--logo-small-height);
}

.info > h3,
.quick_links > h3,
.social_media_links > h3 {
  font-family: var(--font-tertiary);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.info > p {
  width: 30ch;
  font-family: var(--font-tertiary);
  font-weight: var(--font-regular);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-tertiary);
}

.copyright__content > h3 {
  font-family: var(--font-tertiary);
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--text-copyright);
}

.copyright__content > p,
.nav_list__item {
  font-family: var(--font-tertiary);
  font-weight: var(--font-regular);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

.nav_list__item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav_list__item a:hover {
  color: var(--color-primary);
}

@media screen and (max-width: 1400px) {
  .footer {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }
}

@media screen and (max-width: 1200px) {
  .footer {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-3xl);
  }
}

@media screen and (max-width: 992px) {
  .footer {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-2xl);
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: var(--space-mobile-3xl) var(--container-mobile);
  }

  .about {
    flex-direction: column;
    gap: var(--space-mobile-xl);
  }

  .info {
    gap: var(--space-mobile-md);
  }

  .info > h3,
  .quick_links > h3,
  .social_media_links > h3 {
    font-size: var(--text-base);
  }

  .info > p {
    width: 100%;
    font-size: var(--text-sm);
  }

  .links {
    flex-direction: column;
    gap: var(--space-mobile-xl);
  }

  .nav_links {
    gap: var(--space-mobile-lg);
  }

  .copyright {
    padding: var(--space-mobile-2xl) 0;
    gap: var(--space-mobile-sm);
  }

  .copyright__content > h3 {
    font-size: var(--text-lg);
  }

  .copyright__content > p {
    font-size: var(--text-sm);
  }
}

@media screen and (max-width: 576px) {
  .footer {
    padding: var(--space-mobile-2xl) var(--container-mobile);
    gap: var(--space-mobile-3xl);
  }

  .about {
    gap: var(--space-mobile-lg);
  }

  .info {
    gap: var(--space-mobile-sm);
  }

  .info > h3,
  .quick_links > h3,
  .social_media_links > h3 {
    font-size: var(--text-sm);
  }

  .info > p {
    font-size: var(--text-xs);
  }

  .links {
    gap: var(--space-mobile-lg);
  }

  .nav_links {
    gap: var(--space-mobile-md);
  }

  .copyright {
    padding: var(--space-mobile-xl) 0;
    gap: var(--space-mobile-xs);
  }

  .copyright__content > h3 {
    font-size: var(--text-base);
  }

  .copyright__content > p {
    font-size: var(--text-xs);
  }
}
</style>
