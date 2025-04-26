<script setup>
import CustomImage from '@/components/CustomImage.vue'
import { ref } from 'vue'

const will =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t39.30808-6/469882328_8535356933260050_7874559986443750096_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGqGctjUjBWi6YhXWjFnc69JhZHKWNSu8kmFkcpY1K7yZPOkbE5HLKgEHHC0d4hQMXGKEaCvkfR1gvcSc4LGSmP&_nc_ohc=43GY8C743ykQ7kNvwE4dLoZ&_nc_oc=AdlI0BMtwhOXw9mweTaxbmwdLBNNO0Gvc0skVyVzvQdsxc67g0U13BSvWwRHp_cPYFopstyCJh34MK-Y1Ci-YFTK&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=7bP5GxcFA66NB2YgTxKR6A&oh=00_AfFJQtSDUEGSyvh8FwNQirXbyO26WHOy46ZFw16r5qkXxQ&oe=6813015D'
const narto =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t39.30808-6/462753604_8658483317549682_8741838789224633666_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHrzXH2lXUvdESZOA7JUHQDr8mg0Q2QSF6vyaDRDZBIXh5U33RG5tMlIuYRcmIbnue3O5SQJrBD1jEbrsXbO7RY&_nc_ohc=9wZN6wfohIUQ7kNvwGtpNWb&_nc_oc=AdlaOX4AR0PAOR9O2YWtaZwDbxTEaaP4YtEapg01EQO6YZO6lTLLW7Se1O-akMd6Fg0uYBfhX3akDKROTY313eTn&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=9BuIfZBPm-igPl1MT_RrzA&oh=00_AfFqVtlgRhQMEGx28sOF3rbfwJQj4z7w9P3SAmwEO_HR8w&oe=681308D6'
const tiago =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t39.30808-6/380870252_10228524977646245_6940754703388239013_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHUtB3dPJe1W1GNBBLpKgbmTqgfTZ-NDoFOqB9Nn40Ogd4ngwjCZzLUuokbCUQH-u_0F0Ns6d-0i82fSVYnSJ1t&_nc_ohc=iXQMOYRBFl4Q7kNvwFcBrlW&_nc_oc=AdksfP-QWQuYcdP-oE50CRTtEov3UhpTUa-1od2TuiM9z-PI7lxqaV2NqsTPKQptCuhQjgD87Ncc2PeMnzY1hdod&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=IG3k6LtUpCdAmnbe1ZO3eg&oh=00_AfEyfeDeh4JWfWSJgJTz9HTfvQ-XjxCZuBbbREpYNPYUGg&oe=681305A6'
const samir =
  'https://scontent.fsdu8-1.fna.fbcdn.net/v/t39.30808-6/464065040_8388395074602759_82699148634064298_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEe1Ww1_3It-iAg3as5_ZqlkT8w66UqJJ6RPzDrpSoknhqVz3wHibrKhcbCbPj1pHRjRH2_s0o1xH4ppSR5fZcE&_nc_ohc=56sYxLehqwAQ7kNvwGE0LCb&_nc_oc=AdmyoEXhKhGUH81QxiDEBA3HY5ixX6cnYuhtTFFNwX_-wziJFYbbfL8MMEtx1SQnQX6jKt0g7ABZB9TrBj2Np09h&_nc_zt=23&_nc_ht=scontent.fsdu8-1.fna&_nc_gid=LUNx_EGT8zpYwJWOO5irdw&oh=00_AfGVhHxHy-vBEGAzck8MmpP4TLQ7l2etiguNB8SjEaqwbw&oe=6812FF0F'
const lucena =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t1.6435-9/46492250_326363411551220_2551444606591959040_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHo8FEcVq2apBhLc6gIjOXLK0ybA2yHOFsrTJsDbIc4W6g-xQ7Qb0tTg9Jlxt3lNNw5es37Iiiv19uvsYavaKp4&_nc_ohc=DUdCffEmzh8Q7kNvwGRuHfE&_nc_oc=AdntCroPRU7edWFSRWsat6CvPxK3TAJW3P3f4WdWhnr82hwltvdVsY-qYRLlgdapHekY4-NBaBECUAF3CBerCJuB&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=xylCDTFwPWoKxTIhNuJlPg&oh=00_AfEE0ixEFuPkPwOyYyOAjbZZdq3ynIlQLoLliPRCYvZFEg&oe=6834B46A'
const saulo =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t39.30808-6/292456719_5388300434564208_3078132318344834263_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGY209WxXgCLAfpsW-yiCCdailkyq2bN3pqKWTKrZs3evpYZYox3ryhL8j3Mx5mMiiBCJlbpc1FpbszIJ6FzPG1&_nc_ohc=G1WWv4J5EMUQ7kNvwFVtEyp&_nc_oc=AdktDifKAExCfKWbifgSZwgfQi0nErvIBOXLTME_f46jlxgo69sXNvj7iXp3Vwtbj5fAuo-9GfHNgqPFnlmpp-Xs&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=frAEwIJqN55TbB4vttl-Xw&oh=00_AfGsCQMGt_Z4qoKjMmv52VLoeWJAL3CMH8tzb5ZJP3XSbA&oe=68130AE2'
const victor =
  'https://scontent.fsdu8-2.fna.fbcdn.net/v/t1.6435-9/69244695_10217223101747241_4304186129768251392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEC-6HFjMdE4QYg2RS5xDE05q3GJd7SMx3mrcYl3tIzHckwCRI-oVlrWF38l3l9LVEvv0WMcsmkN43lZp260fio&_nc_ohc=HdTGPT7OCSoQ7kNvwGFnUla&_nc_oc=AdmzXGuXJTKY7ys44dcXP0JdcRNpfJAuop8FxmbBu-dg0YpQyogqdQPUAWpo8KLYbfPknN1n6cN7m47FfahgmyVO&_nc_zt=23&_nc_ht=scontent.fsdu8-2.fna&_nc_gid=aN_qk-m04rtYvK1cHNkNqA&oh=00_AfFe_9wJtC6JKzmAmqUv8rXdcJGK-GsQlTvLW-tOsDeitQ&oe=68349A39'

const staffMembers = ref([
  { name: 'Will', image: will },
  { name: 'Narto', image: narto },
  { name: 'Tiago', image: tiago },
  { name: 'Samir', image: samir },
  { name: 'Lucena', image: lucena },
  { name: 'Saulo', image: saulo },
  { name: 'Victor', image: victor },
  { name: 'Arthur', image: null },
])

function imageWithFallback(src) {
  return src || 'https://placehold.co/242'
}
</script>

<template>
  <main class="container">
    <section class="about">
      <div>
        <h1>O que é o pong</h1>
        <p>O PONG é a comunidade de desenvolvedores de jogos do Rio Grande do Norte.</p>
      </div>
      <!--
      <div>
        <h1>Nossa história</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan
          dignissim. Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi
          tempor pharetra dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna.
          Duis porttitor gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut
          fermentum tortor sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum
          urna porta. Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc
          suscipit diam quis feugiat fermentum. Morbi magna tellus, dignissim non ornare et,
          efficitur et nunc. Duis ultricies eros varius velit pulvinar finibus. Nullam feugiat
          venenatis erat, in venenatis lorem iaculis non.
        </p>
      </div>
      -->

      <div>
        <h1>Organizadores</h1>
        <!--
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan
          dignissim. Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi
          tempor pharetra dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna.
          Duis porttitor gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut
          fermentum tortor sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum
          urna porta. Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc
          suscipit diam quis feugiat fermentum. Morbi magna tellus, dignissim non ornare et,
          efficitur et nunc. Duis ultricies eros varius velit pulvinar finibus. Nullam feugiat
          venenatis erat, in venenatis lorem iaculis non.
        </p>
        -->
      </div>

      <div class="staff_container">
        <div v-for="(member, index) in staffMembers" :key="index">
          <CustomImage
            :src="imageWithFallback(member.image)"
            alt="Staff member"
            :aspect-ratio="1"
            width="242px"
            height="242px"
            class="custom_image"
          />
          <p>{{ member.name }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
.custom_image {
  border-radius: var(--radius-md);
  width: 242px;
  height: 242px;
}

.container {
  background: var(--bg-primary);
  min-height: 100vh;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

.about {
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

section div {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.staff_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-4xl);
}

.staff_container p {
  text-align: center;
}

@media screen and (max-width: 1400px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 1200px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-3xl);
  }
}

@media screen and (max-width: 992px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-2xl);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-mobile-3xl) var(--container-mobile);
  }

  .staff_container {
    gap: var(--space-mobile-3xl);
  }

  section div {
    align-items: center;
    flex: 1;
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding: var(--space-mobile-2xl) var(--container-mobile);
    gap: var(--space-mobile-3xl);
  }

  .about {
    gap: var(--space-mobile-3xl);
  }

  section div {
    gap: var(--space-mobile-md);
  }

  .staff_container {
    gap: var(--space-mobile-2xl);
  }
}
</style>
