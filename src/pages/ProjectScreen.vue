<template>
  <q-page
  class="column items-center justify-center no-wrap projectScreen"
  :class="{
    'q-pb-xl q-pl-xl q-pr-xl': disableDocumentControlBar,
    'q-pa-xl': !disableDocumentControlBar,
    }"
  >
      <!-- New document dialog -->
      <newDocumentDialog
        :dialog-trigger="newObjectDialogTrigger"
        @trigger-dialog-close="newObjectDialogClose"
      />

      <!-- Delele document dialog -->
      <deleteDocumentCheckDialog
        :dialog-trigger="deleteObjectDialogTrigger"
        :document-id="toDeleteID"
        :document-type="toDeleteType"
        @trigger-dialog-close="deleteObjectDialogClose"
      />

      <div class="col-12">
        <h5 class="mainProjectSubTitle">Project overview for </h5>
      </div>
      <div class="col-12">
        <h2 class="mainProjectTitle"> {{projectName}}</h2>
      </div>
      <div class="hintWrapper" v-if="!hideTooltipsProject && allDocuments > 0">

        <div v-if="hidePlushes">
          <q-icon name="mdi-help" size="30px" class="q-mr-md" />
        </div>

        <div class="mascotWrapper" v-if="!hidePlushes">
          <q-img
          :src="plusheForm"
          style="max-width: 135px; height: 100%;"
          contain
        />
        </div>
        <div>
          <div class="text-subtitle1 text-dark text-bold text-left">
            Did you know?
          </div>
          <div class="text-weight-medium text-dark text-left">
            {{tipTrickMessage}}
          </div>
        </div>

      </div>

    <div class="projectContentWrapper">
      <div class="col-12">

        <!-- Last modified -->
        <div class="col-12 q-mb-sm" v-if="lastModifiedFormatted">
          <span class="text-caption" style="opacity: 0.5;">
            Last modified: {{ lastModifiedFormatted }}
          </span>
        </div>

        <!-- Category cards -->
        <div class="col-12 q-mb-xl" v-if="dataLoaded && allDocuments > 0">
          <div class="row q-gutter-md">
            <q-card
              v-for="cat in categoryStats"
              :key="cat.name"
              dark
              class="categoryCard col"
            >
              <q-card-section>
                <div class="text-overline text-primary" style="opacity: 0.8;">{{ cat.name }}</div>
                <div class="text-h4 text-bold text-primary">{{ cat.total }}</div>
                <div class="text-caption q-mb-sm" style="opacity: 0.5;">documents</div>
                <q-linear-progress
                  :value="cat.completionRatio"
                  color="primary"
                  track-color="grey-8"
                  rounded
                  size="8px"
                  class="q-mb-xs"
                />
                <div class="text-caption" style="opacity: 0.45;">
                  {{ cat.finished }} / {{ cat.total }} finished
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Empty state -->
        <div class="col-12 q-mb-xl flex flex-center" v-if="dataLoaded && allDocuments === 0">
          <div class="text-center" style="opacity: 0.5;">
            <q-icon name="mdi-book-open-outline" size="48px" class="q-mb-md" />
            <div class="text-h6">No documents yet.</div>
            <div class="text-body2 q-mt-sm">Start by creating your first document.</div>
            <q-btn outline color="primary" class="q-mt-lg" @click="newObjectAssignUID">
              Create first document
            </q-btn>
          </div>
        </div>

      </div>

      <div class="lastOpenedList" v-if="allDocuments > 0 && dataLoaded">
        <q-card
          dark
        >
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="600"
            >
            <q-card-section
              v-show="dataLoaded"
            >

              <h5 class="q-px-md q-mt-lg q-mb-xs">Recently edited</h5>

              <q-list
                v-if="lastOpenedDocuments.length > 0"
                class="q-pa-md lastOpenedListInner"
                >
                <div
                  v-for="single in lastOpenedDocuments"
                  :key="single._id"
                  class="lastOpenedItem"
                >

                <q-item
                  clickable
                  class="text-accent q-px-sm"
                  @mouseleave="setDocumentPreviewClose"
                  :to="single.url"
                >
                  <documentPreview
                    v-if="!preventPreviewsDocuments"
                    :custom-anchor="'center left'"
                    :custom-self="'center right'"
                    :document-id="single._id"
                    :external-close-trigger="documentPreviewClose"
                  />
                  <q-item-section avatar class="q-px-sm">
                    <q-icon
                      :size="((single.icon.includes('fas') || single.icon.includes('fab')) ? '16px': '21px')"
                      :name="(single.isCategory) ? 'fas fa-folder-open' : single.icon"
                    />
                  </q-item-section>
                  <q-item-section
                    >
                      <span class="text-weight-medium">
                        <span class="isDeadIndicator" v-if="single.isDead">
                          †
                        </span>
                        <span :class="{'isDead': (single.isDead && !hideDeadCrossThrough)}">
                            {{stripTags(single.label)}}
                        </span>
                      </span>
                  </q-item-section>
                  <q-menu
                    touch-position
                    context-menu
                    auto-close
                    separate-close-popup
                  >

                    <q-list class="bg-gunmetal-light text-accent">

                      <template>
                        <q-item clickable @click="copyName(single)">
                          <q-item-section>Copy name</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-text-recognition" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="copyTextColor(single)">
                          <q-item-section>Copy text color</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-eyedropper" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="copyBackgroundColor(single)">
                          <q-item-section>Copy background color</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-format-color-fill" />
                          </q-item-section>
                        </q-item>
                        <q-separator dark />
                        <q-item clickable @click="openExistingInput(single)">
                          <q-item-section>Open document</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-book-open-page-variant-outline" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="editExistingInput(single)">
                          <q-item-section>Edit document</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-pencil" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="openDocumentPreviewPanel(single._id)">
                          <q-item-section>Preview document in split-view mode</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-file-search-outline" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="addNewUnderParent(single)">
                          <q-item-section>Create new document with this document as parent</q-item-section>
                          <q-item-section avatar>
                            <q-icon color="primary" name="mdi-file-tree" />
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="copyTargetDocument(single)">
                          <q-item-section>Copy this document</q-item-section>
                          <q-item-section avatar>
                            <q-icon color="primary" name="mdi-content-copy" />
                          </q-item-section>
                        </q-item>
                        <q-separator dark />
                        <q-item clickable v-close-popup @click="triggerExport(single)">
                          <q-item-section>Export document</q-item-section>
                          <q-item-section avatar>
                            <q-icon name="mdi-database-export-outline" />
                          </q-item-section>
                        </q-item>
                        <q-separator dark />
                        <q-item clickable v-close-popup @click="deleteTabDocument(single)">
                          <q-item-section class="text-secondary"><b>Delete this document</b></q-item-section>
                          <q-item-section avatar class="text-secondary">
                            <q-icon name="mdi-text-box-remove-outline" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-list>

                  </q-menu>

                </q-item>

                <q-separator dark />

                </div>

              </q-list>
            </q-card-section>
          </transition>

        </q-card>

      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator"

import BaseClass from "src/BaseClass"
import { Loading, uid, extend } from "quasar"
import newDocumentDialog from "src/components/dialogs/NewDocument.vue"
import { retrieveLastOpenedDocuments, retrieveProjectLastModified } from "src/scripts/projectManagement/projectManagent"
import { tipsTricks } from "src/scripts/utilities/tipsTricks"
import { summonAllPlusheForms } from "src/scripts/utilities/plusheMascot"
import { I_ShortenedDocument } from "src/interfaces/I_OpenedDocument"
import { copyDocumentBackgroundColor, copyDocumentName, copyDocumentTextColor } from "src/scripts/documentActions/uniqueFieldCopy"
import { copyDocument } from "src/scripts/documentActions/copyDocument"
import { createNewWithParent } from "src/scripts/documentActions/createNewWithParent"
import deleteDocumentCheckDialog from "src/components/dialogs/DeleteDocumentCheck.vue"
import documentPreview from "src/components/DocumentPreview.vue"

@Component({
  components: {
    newDocumentDialog,
    deleteDocumentCheckDialog,
    documentPreview
  }
})
export default class ProjectScreen extends BaseClass {
  /****************************************************************/
  // LOCAL SETTINGS
  /****************************************************************/

  /**
   * React to changes on the options store
   */
  @Watch("SGET_options", { immediate: true, deep: true })
  onSettingsChange () {
    const options = this.SGET_options
    this.hideTooltipsProject = options.hideTooltipsProject
    this.hidePlushes = options.hidePlushes
    this.disableDocumentControlBar = options.disableDocumentControlBar

    this.hideDeadCrossThrough = this.SGET_options.hideDeadCrossThrough
    this.preventPreviewsDocuments = this.SGET_options.preventPreviewsDocuments
  }

  hideDeadCrossThrough = false

  preventPreviewsDocuments = false

  /**
   * Hides the mascot... nooo :(
   */
  hidePlushes = false

  /**
   * Determines if the document control bar is show or hidden
   */
  disableDocumentControlBar = false

  /**
   * Determines if the project overview help hint should show or not
   */
  hideTooltipsProject = false

  /****************************************************************/
  // BASIC DATA & FUNCTIONALITY
  /****************************************************************/

  /**
   * Setup of the page
   */
  created () {
    this.projectName = this.SGET_getProjectName
    Loading.hide()

    this.tipTrickMessage = tipsTricks[Math.floor(Math.random() * tipsTricks.length)]
    this.plusheForm = summonAllPlusheForms[Math.floor(Math.random() * summonAllPlusheForms.length)]

    if (this.SGET_getProjectLoadedStatus) {
      this.loadGraphData().catch(e => console.log(e))
      this.loadLastOpenedList().catch(e => console.log(e))
    }
  }

  @Watch("SGET_getProjectName")
  checkProjectStatus () {
    this.projectName = this.SGET_getProjectName
  }

  @Watch("SGET_getProjectLoadedStatus")
  reactToProjectLoaded () {
    if (this.SGET_getProjectLoadedStatus) {
      this.loadGraphData().catch(e => console.log(e))
      this.loadLastOpenedList().catch(e => console.log(e))
    }
  }

  /**
   * Name of the current project
   */
  projectName = ""

  /**
   * Loaded trivia message
   */
  tipTrickMessage = ""

  /**
   * Current form the majestic Fantasia desided to take this fine day!
   */
  plusheForm = ""

  /****************************************************************/
  // GRAPH FUNCTIONALITY
  /****************************************************************/

  /**
   * Amount of all documents
   */
  allDocuments = 0

  /**
   * Category stats for overview cards
   */
  categoryStats: {
    name: string
    total: number
    finished: number
    completionRatio: number
  }[] = []

  /**
   * Formatted last modified date string
   */
  lastModifiedFormatted = ""

  /**
   * Determines if the data has finished loading
   */
  dataLoaded = false

  /**
   * Loads graph data
   */
  async loadGraphData () {
    const allBlueprints = this.SGET_allBlueprints

    // Build category stats
    const categoryMap: Record<string, { total: number, finished: number }> = {}

    for (const blueprint of allBlueprints) {
      const cat = blueprint.category || "Other"
      if (!categoryMap[cat]) categoryMap[cat] = { total: 0, finished: 0 }

      const docs = this.SGET_allDocumentsByType(blueprint._id).docs
      categoryMap[cat].total += docs.length
      this.allDocuments += docs.length

      docs.forEach((doc: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const finished = (doc.extraFields as any[]).find((e: any) => e.id === "finishedSwitch")
        if (finished?.value === true) {
          categoryMap[cat].finished += 1
        }
      })
    }

    // Preserve pillar order
    const pillarOrder = ["World", "Characters", "Story", "Gameplay", "Lore"]
    this.categoryStats = pillarOrder
      .filter(p => categoryMap[p])
      .map(p => ({
        name: p,
        total: categoryMap[p].total,
        finished: categoryMap[p].finished,
        completionRatio: categoryMap[p].total > 0
          ? categoryMap[p].finished / categoryMap[p].total
          : 0
      }))

    // Last modified
    const raw = await retrieveProjectLastModified()
    if (raw) {
      this.lastModifiedFormatted = new Date(raw).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    }

    this.dataLoaded = true
  }

  /****************************************************************/
  // Add new document under parent
  /****************************************************************/
  addNewUnderParent (currentDoc: I_ShortenedDocument) {
    createNewWithParent(currentDoc, this)
  }

  @Watch("SGET_allDocuments", { deep: true })
  reactToAllDocumentListChange () {
    if (!this.SGET_allDocumentsFirstRunState) {
      this.loadLastOpenedList().catch(e => console.log(e))
    }
  }

  /**
   * Loads graph data
   */
  async loadLastOpenedList () {
    const idList = await retrieveLastOpenedDocuments()
    this.lastOpenedDocuments = idList.map(id => this.SGET_document(id)).filter(e => (e))
  }

  lastOpenedDocuments: I_ShortenedDocument[] = []

  copyName (currentDoc: I_ShortenedDocument) {
    copyDocumentName(currentDoc)
  }

  copyTextColor (currentDoc: I_ShortenedDocument) {
    copyDocumentTextColor(currentDoc)
  }

  copyBackgroundColor (currentDoc: I_ShortenedDocument) {
    copyDocumentBackgroundColor(currentDoc)
  }

  documentPass = null as unknown as I_ShortenedDocument

  copyTargetDocument (currentDoc: I_ShortenedDocument) {
    this.documentPass = extend(true, {}, currentDoc)

    const blueprint = this.SGET_blueprint(this.documentPass.type)
    const newDocument = copyDocument(this.documentPass, this.generateUID(), blueprint)

    const dataPass = {
      doc: newDocument,
      treeAction: false
    }

    // @ts-ignore
    this.SSET_addOpenedDocument(dataPass)
    this.$router.push({
      path: newDocument.url
    }).catch((e: {name: string}) => {
      const errorName : string = e.name
      if (errorName === "NavigationDuplicated") {
        return
      }
      console.log(e)
    })
  }

  /**
   * Opened the existing input
   */
  openExistingInput (e: I_ShortenedDocument) {
    // @ts-ignore
    e = (Array.isArray(e)) ? e[0] : e
    this.openExistingDocumentRoute(e)
  }

  /**
   * Opened the existing input in two modes
   * Either as a focus with closure of the dialog.
   * Or as a background tab without closing of the dialog.
   */
  editExistingInput (e: I_ShortenedDocument) {
    // @ts-ignore
    e = (Array.isArray(e)) ? e[0] : e
    // @ts-ignore
    this.openExistingDocumentRouteWithEdit(e)
  }

  triggerExport (node: {_id: string}) {
    this.SSET_setExportDialogState([node._id])
  }

  setDocumentPreviewClose () {
    this.documentPreviewClose = uid()
  }

  documentPreviewClose = ""
  /****************************************************************/
  // NEW DOCUMENT DIALOG
  /****************************************************************/

  newObjectDialogTrigger: string | false = false
  newObjectDialogClose () {
    this.newObjectDialogTrigger = false
  }

  newObjectAssignUID () {
    this.newObjectDialogTrigger = this.generateUID()
  }

  /****************************************************************/
  // Delete dialog
  /****************************************************************/

  deleteObjectDialogTrigger: string | false = false
  deleteObjectDialogClose () {
    this.deleteObjectDialogTrigger = false
  }

  deleteObjectAssignUID () {
    this.deleteObjectDialogTrigger = this.generateUID()
  }

  toDeleteID = ""
  toDeleteType = ""

  deleteTabDocument (targetDocument: I_ShortenedDocument) {
    this.toDeleteID = targetDocument._id
    this.toDeleteType = targetDocument.type
    this.deleteObjectAssignUID()
  }
}
</script>

<style lang="scss">

.projectScreen {
  max-width: 1450px;
  margin: auto;
}

.mascotWrapper {
  height: 135px;
  width: 135px;
  margin-right: 30px;
  flex-shrink: 0;
}

.hintWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: lighten(#d7ac47, 35);
  border-radius: 5px;
  margin-bottom: 30px;
  color: var(--q-color-dark);
  border: 2px solid var(--q-color-dark);
}

.mainProjectTitle {
  margin-bottom: 30px;
  color: var(--q-color-dark);
}

body.body--dark {
  .mainProjectTitle {
    color: var(--q-color-primary);
  }
}

.apexcharts-tooltip {
  display: none !important;
}

.projectContentWrapper {
  width: 100%;
  display: flex;
}

.lastOpenedList {
  width: 334px;
  margin-left: 30px;
  flex-grow: 0;
  flex-shrink: 0;

  > div {
    height: 100%;
  }
}

.lastOpenedListInner {
  max-height: 425px;
  overflow: auto;
}
</style>

<style scoped lang="scss">

.mainProjectSubTitle {
  margin-top: 40px;
  margin-bottom: 0;
  opacity: 0.8;
}

.mainProjectTitle {
  position: relative;
  margin-top: 10px;
  font-weight: 500;
}

.lastOpenedItem {
  position: relative;

  .q-item__section--avatar {
    min-width: 44px;
  }
}

.categoryCard {
  min-width: 160px;
  flex: 1;
}
</style>
