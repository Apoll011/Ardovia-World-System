<template>
  <q-page class="column items-center justify-center">

    <!-- Import project dialog -->
    <loadProjectCheckDialog
      :dialog-trigger="loadProjectDialogTrigger"
      @trigger-dialog-close="loadProjectDialogClose"
    />

    <!-- New project dialog -->
    <newProjectCheckDialog
      :dialog-trigger="newProjectDialogTrigger"
      @trigger-dialog-close="newProjectDialogClose"
    />

      <div class="col-12 flex flex-center q-mb-sm">
        <img :src="appLogo" style="height: 60px; width: 60px;" />
      </div>

      <div class="col-12">
        <h2 class="mainTitle">THE KINGDOMS OF ARDOVIA</h2>
      </div>

      <div class="col-12">
        <h5 class="mainSubTitle">Ardovia World System</h5>
      </div>

      <div class="col-12 q-mb-lg">
        <p class="mainDescription">A world-building tool for an open-world action RPG<br>with branching narrative and exploration.</p>
      </div>

      <q-separator color="primary" horizontal dark class="q-mb-lg" style="opacity: 0.5; width: 400px;" />

      <div class="col-12 q-mb-md">
       <q-btn
           v-if="projectExists"
           color="primary"
           size="md"
           :outline="isDarkMode"
           class="q-px-xl q-py-xs"
           to="/project"
         >
         Resume Project
        </q-btn>
       </div>

       <div class="col-12 q-mb-md">
         <q-btn
           color="primary"
           :outline="isDarkMode"
           size="md"
           class="q-px-xl q-py-xs"
           @click="saveProjectAssignUID()"
         >
         Import Project
        </q-btn>
       </div>

       <div class="col-12 q-mb-lg">
         <q-btn
           color="primary"
           size="md"
           :outline="isDarkMode"
           class="q-px-xl q-py-xs"
           @click="newProjectAssignUID"
         >
          Create New Base
         </q-btn>
       </div>

      <q-separator color="primary" horizontal dark class="q-mb-lg" style="opacity: 0.5; width: 400px;" />

      <div class="col-12">
        <p class="mainFooter">Version {{ appVersion }}&nbsp;&nbsp;|&nbsp;&nbsp;Based on Fantasia Archive by Vishiri</p>
      </div>

   </q-page>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator"

import BaseClass from "src/BaseClass"
import loadProjectCheckDialog from "src/components/dialogs/LoadProjectCheck.vue"
import newProjectCheckDialog from "src/components/dialogs/NewProjectCheck.vue"
import { remote } from "electron"

import appLogo from "src/assets/appLogo.png"

@Component({
  components: {
    loadProjectCheckDialog,
    newProjectCheckDialog
  }
})
export default class WelcomeScreen extends BaseClass {
  /****************************************************************/
  // LOCAL SETTINGS
  /****************************************************************/

  /**
   * React to changes on the options store
   */
  @Watch("SGET_options", { immediate: true, deep: true })
  onSettingsChange () {
    const options = this.SGET_options
    this.isDarkMode = options.darkMode
  }

  /**
   * Determines if the page should show in dark mode or not
   */
  isDarkMode = false

  /****************************************************************/
  // BASIC DATA
  /****************************************************************/

  /**
   * Determines if any project exists on the window
   */
  projectExists: undefined | string | boolean = false

  /**
   * Current app version
   */
  appVersion = remote.app.getVersion()

  /**
   * App logo image
   */
  appLogo = appLogo

  /****************************************************************/
  // COMPONENT FUNCTIONALITY
  /****************************************************************/

  /**
   * Get project name upon creation
   * For the purposes of this component, we only check if the project exists via this
   */
  created () {
    this.checkProjectStatus()
  }

  @Watch("SGET_getProjectName")
  checkProjectStatus () {
    this.projectExists = (this.SGET_getProjectName.length > 0)
  }

  /****************************************************************/
  // NEW PROJECT DIALOG
  /****************************************************************/
  newProjectDialogTrigger: string | false = false
  newProjectDialogClose () {
    this.newProjectDialogTrigger = false
  }

  newProjectAssignUID () {
    this.newProjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // IMPORT PROJECT DIALOG
  /****************************************************************/
  loadProjectDialogTrigger: string | false = false
  loadProjectDialogClose () {
    this.loadProjectDialogTrigger = false
  }

  saveProjectAssignUID () {
    this.loadProjectDialogTrigger = this.generateUID()
  }
}
</script>

<style  lang="scss">

.mainTitle {
  color: var(--q-color-dark);
}

body.body--dark {
  .mainTitle {
    color: var(--q-color-primary);
  }
}
</style>

<style scoped lang="scss">

.mainSubTitle {
  margin-top: 0;
  margin-bottom: 0;
  opacity: 0.8;
}

.mainTitle {
  position: relative;
  margin-top: 10px;
  font-weight: 500;
}

.mainDescription {
  opacity: 0.7;
  text-align: center;
  margin-top: 0;
}

.mainFooter {
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
}
</style>
