<script setup lang="ts">
import friedrich from './assets/friedrich.jpg'
import FlexRow from "./components/FlexRow.vue";
import links from "./content/links.ts";
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
              <Button variant="text" :icon="link.icon" v-tooltip.top="$t(link.name)"></Button>
            </a>
          </div>
        </template>
      </Card>
    </FlexRow>
  </div>
</template>