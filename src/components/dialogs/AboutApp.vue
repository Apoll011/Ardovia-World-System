<template>

  <q-dialog
    v-model="dialogModel"
    @before-hide="triggerDialogClose"
    >
    <q-card
      class="aboutDialog"
      dark
    >
      <q-card-section>
        <h6 class="text-center q-mt-lg q-mb-sm">About Ardovia World System</h6>
      </q-card-section>

        <q-card-section>
          <div>
            Currently running Ardovia World System version: <span class="text-bold text-primary">{{appVersion}}</span>
          </div>
          <div class="q-mt-md text-caption" style="opacity: 0.6;">
            Based on Fantasia Archive by Vishiri
          </div>
       </q-card-section>

      <q-card-actions align="around" class="q-mb-lg q-mt-md">
          <q-btn flat label="Close" color="accent" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

import { Component, Watch } from "vue-property-decorator"
import { remote } from "electron"

import DialogBase from "src/components/dialogs/_DialogBase"
@Component({
  components: { }
})
export default class AboutApp extends DialogBase {
  /**
   * React to dialog opening request
   */
  @Watch("dialogTrigger")
  openDialog (val: string|false) {
    if (val) {
      if (this.SGET_getDialogsState) {
        return
      }
      this.SSET_setDialogState(true)
      this.dialogModel = true
    }
  }

  /**
   * Current app version
   * NOTE: Show Electon version in DEV mode instead of NPM package version
   */
  appVersion = remote.app.getVersion()
}
</script>

<style lang="scss">
.aboutDialog {
  text-align: center;
  width: 650px;
  max-width: 650px !important;

  h6 {
    display: block;
  }
}
</style>
