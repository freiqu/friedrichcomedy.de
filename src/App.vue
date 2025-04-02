<script setup lang="ts">
import friedrich from './assets/friedrich.jpg'
import FlexRow from "./components/FlexRow.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const links = [{
  icon: 'pi pi-instagram',
  link: 'https://www.instagram.com/friedrich.comedy',
  name: 'Instagram'
},{
  icon: 'pi pi-youtube',
  link: 'https://www.youtube.com/@friedrich.comedy',
  name: 'Youtube'
},{
  icon: 'pi pi-at',
  link: 'mailto:contact@yourfat.mom',
  name: t('common.email')
}]
</script>

<template>
  <div class="flex flex-column justify-content-center gap-3 mt-5">
    <FlexRow>
      <Avatar style="width: 300px; height: 300px" shape="circle" :image="friedrich"/>
    </FlexRow>
    <FlexRow>
      <h1>Friedrich</h1>
    </FlexRow>
    <FlexRow>
      <span>
        {{ $t('main.description') }}
      </span>
    </FlexRow>
    <FlexRow>
      <Card>
        <template #content>
          <div class="flex flex-wrap gap-2 justify-content-center">
            <a v-for="link in links" :key="`link.${link.name}`" target="_blank" :href="link.link">
              <Button variant="text" :icon="link.icon" v-tooltip.top="link.name"></Button>
            </a>
          </div>
        </template>
      </Card>
    </FlexRow>
  </div>
</template>